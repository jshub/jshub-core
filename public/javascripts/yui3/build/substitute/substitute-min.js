/*
Copyright (c) 2009, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 3.0.0b1
build: 1163
*/
YUI.add("substitute",function(G){var B=G.Lang,D="dump",F=" ",C="{",E="}",A=function(U,I,P,K,H){var N,M,L,S,R,T,Q=[],J,O;K=K||C;H=H||E;for(;;){N=U.lastIndexOf(K);if(N<0){break;}M=U.indexOf(H,N);if(N+1>=M){break;}J=U.substring(N+1,M);S=J;T=null;L=S.indexOf(F);if(L>-1){T=S.substring(L+1);S=S.substring(0,L);}R=I[S];if(P){R=P(S,R,T);}if(B.isObject(R)){if(!G.dump){R=R.toString();}else{if(B.isArray(R)){R=G.dump(R,parseInt(T,10));}else{T=T||"";O=T.indexOf(D);if(O>-1){T=T.substring(4);}if(R.toString===Object.prototype.toString||O>-1){R=G.dump(R,parseInt(T,10));}else{R=R.toString();}}}}else{if(!B.isString(R)&&!B.isNumber(R)){R="~-"+Q.length+"-~";Q[Q.length]=J;}}U=U.substring(0,N)+R+U.substring(M+1);}for(N=Q.length-1;N>=0;N=N-1){U=U.replace(new RegExp("~-"+N+"-~"),K+Q[N]+H,"g");}return U;};G.substitute=A;B.substitute=A;},"3.0.0b1",{optional:["dump"]});