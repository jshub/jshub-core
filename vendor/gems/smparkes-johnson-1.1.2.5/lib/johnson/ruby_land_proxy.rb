module Johnson #:nodoc:
  class RubyLandProxy
    class << self
      def apply_wrappers(proxy)
        wrappers.each do |(wrapper, test)|
          next if test && !test.call(proxy)
          next if wrapper.respond_to?(:test?) && !wrapper.test?(proxy)

          if wrapper.respond_to?(:call)
            proxy = wrapper.call(proxy)
            break unless Johnson::RubyLandProxy === proxy
          else
            proxy.send :extend, wrapper
          end
        end
        proxy
      end
      def add_wrapper(wrapper, &test)
        wrappers.push [wrapper, test]
      end
      def insert_wrapper(wrapper, &test)
        wrappers.unshift [wrapper, test]
      end
      def wrappers
        @wrappers ||= []
      end
    end

    module Callable
      def self.test?(proxy)
        proxy.respond_to?(:call_using)
      end

      def to_proc
        @proc ||= Proc.new { |*args| call(*args) }
      end

      def call(*args)
        call_using(runtime.global, *args)
      end
    end

    add_wrapper Callable

    include Enumerable

    # FIXME: need to revisit array vs non-array proxy, to_a/to_ary semantics, etc.
    def size; length; end
    def to_ary; to_a; end

    def initialize
      raise Johnson::Error, "#{self.class.name} is an internal support class."
    end
    private :initialize

    def inspect
      toString
    end

    def method_missing(sym, *args, &block)
      args << block if block_given?

      name = sym.to_s
      assignment = "=" == name[-1, 1]

      # default behavior if the slot's not there
      return super unless assignment || respond_to?(sym)

      unless function_property?(name)
        # for arity 0, treat it as a get
        return self[name] if args.empty?

        # arity 1 and quacking like an assignment, treat it as a set
        return self[name[0..-2]] = args[0] if assignment && 1 == args.size
      end

      # okay, must really be a function
      call_function_property(name, *args)
    end
  end
end
