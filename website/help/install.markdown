---
layout: help
---

# Installation and setup

These instructions are intended to enable a developer to set-up a development environment for the purposes of:

* running the jsHub code on a local machine
* running the jsHub Unit Tests in a local web browser
* deploy the application
* get development support
 
## Getting the code

The latest release of the JsHub code is made available for download at:

<http://github.com/jshub/jshub-core/downloads>

### Git repositories

If you have Git installed (see [below](#environment_for_contributing_to_the_project)) you can clone from the following URLs on Github:

    git://github.com/jshub/jshub-core.git

## Development environment

The jsHub core app is a standard Ruby on Rails 2.3 application.

To run automated Unit Tests, and optionally use the results with a Continuous Integration server, Java is also required.

### Supported operating systems

Development is regularly undertaken on the following:

* Mac OS X 10.5 Leopard (x86) 
* CentOS 5 (x86)
* Ubuntu Linux 8.04 (x86)
 
The following instructions are using Mac OS X 10.5 as the host operating system and should be applicable to other Linux or UNIX based distributions.

Windows platforms are not explicitly tested, however as Ruby on Rails and Java are available, installation is also straight forward with specifics noted below.

## Setting up the environment

Mac OS X 10.5 comes pre-installed with many of the necessary languages and libraries for Ruby on Rails development, but at the time of this writing these a quite out-of-date when initially installed.

It is recommended that the OS is updated to the latest available from Apple using the Software Update application.

Most other operating systems have downloadable binary installers or packages in their management system.

### Environment for javascript development

Currently development is undertaken on Mac OS X 10.5.7 with the following versions:

* Ruby version     - `ruby 1.8.6 (2008-08-11 patchlevel 287) [universal-darwin9.0]`
* RubyGems version - `1.3.1`
* Rails version    - `Rails 2.3.2`
* SQLite version   - `sqlite3 3.4.0`

On Windows we recommend the Ruby One-Click Installer available from <http://www.ruby-lang.org/> and select the *Enable Rubygems* option in the installer.

Please note jsHub is not currently tested on Ruby v1.9.

The easiest way to get the latest versions of RubyGems and Rails is to run the following commands in the *Terminal.app*, (you will be prompted for your user password):

<pre class="brush: bash; light: true;">
    % sudo gem update --system
    % sudo gem upgrade
</pre>
  
On Windows the SQLite3 client (`sqlite-3-xxx.zip`) and .dll (`sqlitedll-3-xx.zip`) can be obtained from <http://www.sqlite.org/download.html> . Extract them to e.g. `C:\sqlite3` and add this folder to your system `PATH` environment variable.

### Environment for running automated tests
 
Running of headless Unit Tests (rather than in a web browser) uses Rhino and requires a Java Runtime Environment.

Currently development is undertaken on Mac OS X 10.5.7 with the following version:

* Java version - `java version "1.6.0_13"`

On Windows this Java runtime can be downloaded directly from <http://www.java.com/>.

### Environment for contributing to the project
                   
If you wish to contribute back to the project you will also require Git to checkout the latest code and generate patches for submission.

Most operating systems have a downloadable binary installer or package in their management system.

For Mac OS X 10.5.7 we recommend the Git for OS X installer from <http://code.google.com/p/git-osx-installer/> which installs the following:

* Git version  - `git version 1.6.0.2`
 
there is also a useful GUI called [GitX](http://gitx.frim.nl/).

## Gem dependencies

The application requires a number of gems to be present.

A list of these with their install status can be determined by running, from the root of the application:

<pre class="brush: bash; light: true;">
    % sudo rake gems
</pre>

To install missing gems run the following to add Github to the list of sources and get all missing gems and dependencies:

<pre class="brush: bash; light: true;">
    % sudo gem sources -a http://gems.github.com/
    % sudo rake gems:install
</pre>
  
The gem list is configured in the `environment.rb` file should you wish more information on the specific gems and versions needed.

## Running the application

Set-up the database:

<pre class="brush: bash; light: true;">
    % rake db:migrate
</pre>

To run the application use:

<pre class="brush: bash; light: true;">
    % ruby script/server
</pre>

you can now access the application on <http://localhost:3000/> (by default)

On Windows you may be prompted by the Windows Firewall or other security software to allow the application to run.

For other deployment instructions please see the [deployment guide](deployment.html).

## Running Unit Tests in a browser

The application comes with a set of comprehensive test pages that can be run in a web browser:

<http://localhost:3000/test/unit/>

Each page submits its results to a local database, also identifying the browser used, so that the Unit Test pages can be run from any other local machines with web browsers installed as part of a cross-browser test suite:

<http://localhost:3000/test/results/>

For more detailed instructions please see the [testing guide](testing.html).

## Support

For further information on:

* creating and testing jsHub data-capture and transport plug-ins
* contributing additional code, bug fixes and Unit Tests

Generate the local website with documentation using:

<pre class="brush: bash; light: true;">
    % rake jshub:website
</pre>

Please refer to these [local](../) help pages.

Run `rake -T` to find other tasks in the `jshub` namespace

The best place to get other support is on the mailing list:

<http://groups.google.com/group/jshub-users/>
