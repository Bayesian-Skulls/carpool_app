/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

/*
 AngularJS v1.3.14
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,X,u){'use strict';function M(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.14/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:x(b)||E(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(E(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function lc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function mc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}mc(b,a);return b}function $(b){return parseInt(b,10)}function Pb(b,a){return w(Object.create(b),a)}function B(){}function oa(b){return b}function da(b){return function(){return b}}function z(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function J(b){return null!==b&&"object"===typeof b}function x(b){return"string"===typeof b}function V(b){return"number"===typeof b}function pa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function pb(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function nc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return R(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(J(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(E(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;E(a)?a.length=0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);mc(a,g)}}else if(a=b)E(b)?a=Ea(b,[],c,d):pa(b)?a=new Date(b.getTime()):pb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):J(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function qa(b,a){if(E(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(J(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ea(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(E(b)){if(!E(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ea(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?ea(b.getTime(),a.getTime()):!1;if(pb(b)&&pb(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||E(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!ea(b[d],
a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function oc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?
c=u:Ua(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return u;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function pc(b){return x(b)?JSON.parse(b):b}function ua(b){b=C(b).clone();try{b.empty()}catch(a){}var c=C("<div>").append(b).html();try{return b[0].nodeType===qb?R(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+R(b)})}catch(d){return R(c)}}function qc(b){try{return decodeURIComponent(b)}catch(a){}}function rc(b){var a=
{},c,d;s((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=qc(c[0]),y(d)&&(b=y(c[1])?qc(c[1]):!0,sc.call(a,d)?E(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];s(b,function(b,d){E(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function rb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=sb.length;b=C(b);for(d=0;d<e;++d)if(c=sb[d]+a,x(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(sb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(sb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function tc(b,a,c){J(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=C(b);if(b.injector()){var d=b[0]===X?"document":ua(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;P&&e.test(P.name)&&(c.debugInfoEnabled=!0,P.name=P.name.replace(e,""));if(P&&!f.test(P.name))return d();P.name=P.name.replace(f,"");aa.resumeBootstrap=function(b){s(b,function(b){a.push(b)});return d()};G(aa.resumeDeferredBootstrap)&&aa.resumeDeferredBootstrap()}function Kd(){P.name="NG_ENABLE_DEBUG_INFO!"+P.name;P.location.reload()}function Ld(b){b=aa.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}
function uc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;vc||((ra=P.jQuery)&&ra.fn.on?(C=ra,w(ra.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Rb)Rb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):C=Q,aa.element=C,vc=!0)}function Sb(b,a,c){if(!b)throw Ka("areq",
a||"?",c||"required");return b}function tb(b,a,c){c&&E(b)&&(b=b[b.length-1]);Sb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function wc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?oc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return C(c)}function fa(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=M("$injector"),d=M("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||M;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Pd(b){w(b,{bootstrap:tc,copy:Ea,extend:w,equals:ea,
element:C,forEach:s,injector:ab,noop:B,bind:oc,toJson:$a,fromJson:pc,identity:oa,isUndefined:z,isDefined:y,isString:x,isFunction:G,isObject:J,isNumber:V,isElement:nc,isArray:E,version:Qd,isDate:pa,lowercase:R,uppercase:vb,callbacks:{counter:0},getTestability:Ld,$$minErr:M,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(P);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",xc).directive({a:Td,
input:yc,textarea:yc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:zc,ngPattern:zc,required:Ac,ngRequired:Ac,minlength:Bc,ngMinlength:Bc,maxlength:Cc,ngMaxlength:Cc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(wb).directive(Dc);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Ec,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Fc(b){b=b.nodeType;return b===na||!b||9===b}function Gc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ga[d]||ga._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});
return e}function Q(b){if(b instanceof Q)return b;var a;x(b)&&(b=T(b),a=!0);if(!(this instanceof Q)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new Q(b)}if(a){a=X;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Gc(b,a))?c.childNodes:[]}Hc(this,b)}function Vb(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Ic(b,a,c,d){if(y(d))throw Ub("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Ic(b)),delete Ab[c],b.ng339=u))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++hf,c=Ab[c]={events:{},data:{},handle:u});return c}function Wb(b,a,c){if(Fc(b)){var d=y(c),e=!d&&a&&!J(a),
f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
s(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Hc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Jc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=E(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=C.data(b,a[d]))!==u)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Kc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Lc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||P;if("complete"===a.document.readyState)a.setTimeout(b);else C(a).on("load",b)}function Mc(b,a){var c=Fb[a.toLowerCase()];return c&&Nc[ta(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(Q,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(J(b))s(b,lc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||E(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(z(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!m.get(a)){m.put(a,!0);try{x(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):E(a)?b.push(q.invoke(a)):tb(a,"module")}catch(e){throw E(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=ab.$$annotate(b,a,g),l,q,p;q=0;for(l=k.length;q<l;q++){p=k[q];if("string"!==typeof p)throw Ga("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}E(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((E(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new eb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){aa.isString(b)&&k.push(b);
throw Ga("unpr",k.join(" <- "));}),t={},r=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,u,a)});s(g(b),function(a){r.invoke(a||B)});return r}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():nc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(n--,0===n)for(;D.length;)try{D.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ca(){s(H,function(a){a()});v=b(ca,a)})()}function g(){h();l()}function h(){A=b.history.state;A=z(A)?null:A;ea(A,O)&&(A=O);O=A}function l(){if(F!==m.url()||N!==A)F=m.url(),N=A,s(W,function(a){a(m.url(),A)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,
t=b.history,r=b.setTimeout,S=b.clearTimeout,K={};m.isMock=!1;var n=0,D=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){n++};m.notifyWhenNoOutstandingRequests=function(a){s(H,function(a){a()});0===n?a():D.push(a)};var H=[],v;m.addPollFn=function(a){z(v)&&f(100,r);H.push(a);return a};var A,N,F=q.href,ba=a.find("base"),I=null;h();N=A;m.url=function(a,c,e){z(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=N===e;if(F===a&&(!d.history||
f))return m;var g=F&&Ha(F)===Ha(a);F=a;N=e;!d.history||g&&f?(g||(I=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),N=A);return m}return I||q.href.replace(/%27/g,"'")};m.state=function(){return A};var W=[],va=!1,O=null;m.onUrlChange=function(a){if(!va){if(d.history)C(b).on("popstate",g);C(b).on("hashchange",g);va=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=ba.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,
""):""};var wa={},y="",ha=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+ha+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ha).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),wa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),
wa[a]===u&&(wa[a]=k(e.substring(g+1))));return wa}};m.defer=function(a,b){var c;n++;c=r(function(){delete K[c];e(a)},b||0);K[c]=!0;return c};m.defer.cancel=function(a){return K[a]?(delete K[a],S(a),e(B),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw M("$cacheFactory")("iid",
b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!z(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};p=q=null},destroy:function(){m=
h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function xc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ia("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d=
{},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");x(a)?(Sb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=
g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";J(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,lc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=
function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,S,K,n,D,H,v,A){function N(a,b){try{a.addClass(b)}catch(c){}}function F(a,b,c,d,e){a instanceof C||(a=C(a));s(a,function(b,c){b.nodeType==qb&&b.nodeValue.match(/\S+/)&&(a[c]=C(b).wrap("<span></span>").parent()[0])});var f=ba(a,b,a,c,d,e);F.$$addScopeClass(a);var g=null;return function(b,
c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?C(Xb(g,C("<div>").append(a).html())):c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);F.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function ba(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,p,r,D;if(n)for(D=
Array(c.length),q=0;q<h.length;q+=3)f=h[q],D[f]=c[f];else D=c;q=0;for(p=h.length;q<p;)l=D[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),F.$$addScopeInfo(C(l),k)):k=a,r=c.transcludeOnThisElement?I(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?I(a,b):null,c(f,k,l,d,r)):f&&f(a,l.childNodes,u,e)}for(var h=[],l,k,q,p,n,r=0;r<a.length;r++){l=new Yb;k=W(a[r],[],l,0===r?d:u,e);(f=k.length?y(k,a[r],l,b,c,null,[],[],f):null)&&f.scope&&F.$$addScopeClass(l.$$element);
l=f&&f.terminal||!(q=a[r].childNodes)||!q.length?null:ba(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,n=n||f;f=null}return p?g:null}function I(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case na:ha(b,ya(ta(a)),"E",d,g);for(var k,q,p,n=a.attributes,r=0,D=n&&n.length;r<
D;r++){var S=!1,t=!1;k=n[r];l=k.name;q=T(k.value);k=ya(l);if(p=Pa.test(k))l=l.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var A=k.replace(/(Start|End)$/,"");fb(A)&&k===A+"Start"&&(S=l,t=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Mc(a,k)&&(c[k]=!0);Aa(a,b,q,k,p);ha(b,k,"A",d,g,S,t)}a=a.className;J(a)&&(a=a.animVal);if(x(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ha(b,k,"C",d,g)&&(c[k]=T(l[3])),
a=a.substr(l.index+l[0].length);break;case qb:P(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ha(b,k,"M",d,g)&&(c[k]=T(l[2]))}catch(v){}}b.sort(ca);return b}function va(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return C(d)}function O(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function y(a,
d,e,f,g,l,k,p,n){function r(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=L.require;a.directiveName=ca;if(I===L||L.$$isolateScope)a=Y(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=O(b,c,d));b.require=L.require;b.directiveName=ca;if(I===L||L.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function D(a,b,c,d){var e,f="data",g=!1,l=c,k;if(x(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=
!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);return e||null}E(b)&&(e=[],s(b,function(b){e.push(D(a,b,c,d))}));return e}function A(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=u);B&&(d=N);c||(c=B?W.parent():W);return h(a,b,d,c,va)}var n,r,t,v,N,gb,W,O;d===f?(O=e,W=e.$$element):(W=C(f),O=new Yb(W,e));I&&(v=c.$new(!0));h&&(gb=l,gb.$$boundTransclude=h);H&&(ba={},N={},s(H,function(a){var b={$scope:a===I||a.$$isolateScope?v:c,$element:W,
$attrs:O,$transclude:gb};t=a.controller;"@"==t&&(t=O[a.name]);b=K(t,b,!0,a.controllerAs);N[a.name]=b;B||W.data("$"+a.name+"Controller",b.instance);ba[a.name]=b}));if(I){F.$$addScopeInfo(W,v,!0,!(ja&&(ja===I||ja===I.$$originalDirective)));F.$$addScopeClass(W,!0);g=ba&&ba[I.name];var xa=v;g&&g.identifier&&!0===I.bindToController&&(xa=g.instance);s(v.$$isolateBindings=I.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":O.$observe(e,function(a){xa[d]=a});O.$$observers[e].$$scope=
c;O[e]&&(xa[d]=b(O[e])(c));break;case "=":if(f&&!O[e])break;h=S(O[e]);k=h.literal?ea:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ia("nonassign",O[e],I.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(O[e],f):c.$watch(S(O[e],f),null,h.literal);v.$on("$destroy",f);break;case "&":h=S(O[e]),xa[d]=function(a){return h(c,a)}}})}ba&&(s(ba,function(a){a()}),ba=null);g=0;for(n=k.length;g<
n;g++)r=k[g],Z(r,r.isolateScope?v:c,W,O,r.require&&D(r.directiveName,r.require,W,N),gb);var va=c;I&&(I.template||null===I.templateUrl)&&(va=v);a&&a(va,f.childNodes,u,h);for(g=p.length-1;0<=g;g--)r=p[g],Z(r,r.isolateScope?v:c,W,O,r.require&&D(r.directiveName,r.require,W,N),gb)}n=n||{};for(var v=-Number.MAX_VALUE,N,H=n.controllerDirectives,ba,I=n.newIsolateScopeDirective,ja=n.templateDirective,wa=n.nonTlbTranscludeDirective,ha=!1,fb=!1,B=n.hasElementTranscludeDirective,w=e.$$element=C(d),L,ca,U,R=f,
P,Q=0,Aa=a.length;Q<Aa;Q++){L=a[Q];var Pa=L.$$start,$=L.$$end;Pa&&(w=va(d,Pa,$));U=u;if(v>L.priority)break;if(U=L.scope)L.templateUrl||(J(U)?(Oa("new/isolated scope",I||N,L,w),I=L):Oa("new/isolated scope",I,L,w)),N=N||L;ca=L.name;!L.templateUrl&&L.controller&&(U=L.controller,H=H||{},Oa("'"+ca+"' controller",H[ca],L,w),H[ca]=L);if(U=L.transclude)ha=!0,L.$$tlb||(Oa("transclusion",wa,L,w),wa=L),"element"==U?(B=!0,v=L.priority,U=w,w=e.$$element=C(X.createComment(" "+ca+": "+e[ca]+" ")),d=w[0],V(g,Za.call(U,
0),d),R=F(U,f,v,l&&l.name,{nonTlbTranscludeDirective:wa})):(U=C(Vb(d)).contents(),w.empty(),R=F(U,f));if(L.template)if(fb=!0,Oa("template",ja,L,w),ja=L,U=G(L.template)?L.template(w,e):L.template,U=Tc(U),L.replace){l=L;U=Tb.test(U)?Uc(Xb(L.templateNamespace,T(U))):[];d=U[0];if(1!=U.length||d.nodeType!==na)throw ia("tplrt",ca,"");V(g,w,d);Aa={$attr:{}};U=W(d,[],Aa);var of=a.splice(Q+1,a.length-(Q+1));I&&z(U);a=a.concat(U).concat(of);Rc(e,Aa);Aa=a.length}else w.html(U);if(L.templateUrl)fb=!0,Oa("template",
ja,L,w),ja=L,L.replace&&(l=L),A=M(a.splice(Q,a.length-Q),w,e,g,ha&&R,k,p,{controllerDirectives:H,newIsolateScopeDirective:I,templateDirective:ja,nonTlbTranscludeDirective:wa}),Aa=a.length;else if(L.compile)try{P=L.compile(w,e,R),G(P)?r(null,P,Pa,$):P&&r(P.pre,P.post,Pa,$)}catch(aa){c(aa,ua(w))}L.terminal&&(A.terminal=!0,v=Math.max(v,L.priority))}A.scope=N&&!0===N.scope;A.transcludeOnThisElement=ha;A.elementTranscludeOnThisElement=B;A.templateOnThisElement=fb;A.transclude=R;n.hasElementTranscludeDirective=
B;return A}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=Pb(a[b],{$$isolateScope:!0})}function ha(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++)try{q=e[n],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(l&&(q=Pb(q,{$$start:l,$$end:k})),b.push(q),h=q)}catch(D){c(D)}}return h}function fb(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Rc(a,
b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function M(a,b,c,d,e,f,g,h){var l=[],k,q,p=b[0],n=a.shift(),D=Pb(n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),
S=G(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,t=n.templateNamespace;b.empty();r(H.getTrustedResourceUrl(S)).then(function(r){var A,v;r=Tc(r);if(n.replace){r=Tb.test(r)?Uc(Xb(t,T(r))):[];A=r[0];if(1!=r.length||A.nodeType!==na)throw ia("tplrt",n.name,S);r={$attr:{}};V(d,b,A);var H=W(A,[],r);J(n.scope)&&z(H);a=H.concat(a);Rc(c,r)}else A=p,b.html(r);a.unshift(D);k=y(a,A,c,e,b,n,f,g,h);s(d,function(a,c){a==A&&(d[c]=b[0])});for(q=ba(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var F=l.shift(),
K=l.shift(),H=b[0];if(!r.$$destroyed){if(v!==p){var O=v.className;h.hasElementTranscludeDirective&&n.replace||(H=Vb(A));V(F,C(v),H);N(C(H),O)}v=k.transcludeOnThisElement?I(r,k.transclude,K):K;k(q,r,H,d,v)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=I(b,k.transclude,e)),k(q,b,c,d,a)))}}function ca(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ia("multidir",
b.name,c.name,a,ua(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&F.$$addBindingClass(a);return function(a,c){var e=c.parent();b||F.$$addBindingClass(e);F.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=R(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==
b)return H.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return H.RESOURCE_URL}function Aa(a,c,d,e,f){var h=Q(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ta(a))throw ia("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ia("nodomevents");var n=g[e];n!==d&&(k=n&&b(n,!0,h,f),d=n);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||
a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);C(c).data(C(d).data());ra?(Rb=!0,ra.cleanData([d])):delete C.cache[d[C.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],C(f).remove(),
a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&v.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&v.removeClass(this.$$element,a)},$updateClass:function(a,
b){var c=Vc(a,b);c&&c.length&&v.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&v.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=uc(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=A(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?
l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+A(T(h[q]),!0),g=g+(" "+T(h[q+1]));h=T(h[2*k]).split(/\s/);g+=A(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=fa()),e=d[a]||(d[a]=[]);e.push(b);n.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});
return function(){Xa(e,b)}}};var U=b.startSymbol(),ja=b.endSymbol(),Tc="{{"==U||"}}"==ja?oa:function(a){return a.replace(/\{\{/g,U).replace(/}}/g,ja)},Pa=/^ngAttr[A-Z]/;F.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];E(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:B;F.$$addBindingClass=k?function(a){N(a,"ng-binding")}:B;F.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:B;F.$$addScopeClass=k?function(a,b){N(a,b?"ng-isolate-scope":
"ng-scope")}:B;return F}]}function ya(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=C(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&pf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");J(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=
!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!J(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,p,q;l=!0===l;k&&x(k)&&(q=k);if(x(g)){k=g.match(c);if(!k)throw qf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:wc(h.$scope,p,!0)||(a?wc(e,p,!0):u);tb(g,p,!0)}if(l)return l=(E(g)?g[g.length-1]:g).prototype,m=Object.create(l||null),q&&f(h,q,m,p||g.name),w(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});
m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return C(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(x(b)){var c=b.replace(rf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(sf))&&tf[d[0]].test(c));d&&(b=pc(c))}}return b}function Xc(b){var a=fa(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=R(T(b.substr(0,
e)));d=T(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=J(b)?b:u;return function(c){a||(a=Xc(b));return c?(c=a[R(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return J(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:qa($b),put:qa($b),patch:qa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=
a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!aa.isObject(a))throw M("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[R(a.method)]);a:for(f in c){a=R(f);for(g in e)if(R(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=vb(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),u,a.transformRequest);z(e)&&s(d,function(a,b){"content-type"===R(b)&&
delete d[b]});z(a.withCredentials)&&!z(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},u],g=h.when(e);for(s(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});
return g};return g}function m(c,f){function l(b,c,d,e){function f(){n(c,b,d,e)}N&&(200<=b&&300>b?N.put(I,[b,c,Xc(d),e]):N.remove(I));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?v.resolve:v.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function m(a){n(a.data,a.status,qa(a.headers()),a.statusText)}function t(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var v=h.defer(),A=v.promise,N,F,s=c.headers,I=p(c.url,
c.params);k.pendingRequests.push(c);A.then(t,t);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=J(c.cache)?c.cache:J(b.cache)?b.cache:q);N&&(F=N.get(I),y(F)?F&&G(F.then)?F.then(m,m):E(F)?n(F[1],F[0],qa(F[2]),F[3]):n(F,200,{},"OK"):N.put(I,A));z(F)&&((F=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=F),d(c.method,I,f,l,s,c.timeout,c.withCredentials,c.responseType));return A}function p(a,b){if(!b)return a;var c=[];Ed(b,
function(a,b){null===a||z(a)||(E(a)||(a=[a]),s(a,function(a){J(a)&&(a=pa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];s(c,function(a){t.unshift(x(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(w(d||{},{method:a,
url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function uf(){return new P.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return vf(b,uf,b.defer,a.angular.callbacks,c[0])}]}function vf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,p,q,t){function r(){n&&n();D&&D.abort()}function S(a,d,e,f,g){v!==u&&c.cancel(v);n=D=null;a(d,e,f,g);b.$$completeOutstandingRequest(B)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==R(e)){var K="_"+(d.counter++).toString(36);d[K]=function(a){d[K].data=a;d[K].called=!0};var n=f(h.replace("JSON_CALLBACK",
"angular.callbacks."+K),K,function(a,b){S(k,a,d[K].data,"",b);d[K]=B})}else{var D=a();D.open(e,h,!0);s(m,function(a,b){y(a)&&D.setRequestHeader(b,a)});D.onload=function(){var a=D.statusText||"",b="response"in D?D.response:D.responseText,c=1223===D.status?204:D.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);S(k,c,b,D.getAllResponseHeaders(),a)};e=function(){S(k,-1,null,null,"")};D.onerror=e;D.onabort=e;q&&(D.withCredentials=!0);if(t)try{D.responseType=t}catch(H){if("json"!==t)throw H;}D.send(l||
null)}if(0<p)var v=c(r,p);else p&&G(p.then)&&p.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,r){function S(c){return c.replace(k,b).replace(m,a)}function K(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=
""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}r=!!r;for(var n,D,H=0,v=[],A=[],N=f.length,F=[],s=[];H<N;)if(-1!=(n=f.indexOf(b,H))&&-1!=(D=f.indexOf(a,n+h)))H!==n&&F.push(S(f.substring(H,n))),H=f.substring(n+h,D),v.push(H),A.push(c(H,K)),H=D+l,s.push(F.length),F.push("");else{H!==N&&F.push(S(f.substring(H)));break}if(t&&1<F.length)throw ac("noconcat",f);if(!g||v.length){var I=function(a){for(var b=0,c=v.length;b<c;b++){if(r&&z(a[b]))return;F[s[b]]=a[b]}return F.join("")};
return w(function(a){var b=0,c=v.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return I(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:v,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(A,function(c,e){var f=I(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope",
"$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,p=a.clearInterval,q=0,t=y(k)&&!k,r=(t?d:c).defer(),S=r.promise;l=y(l)?l:0;S.then(null,null,e);S.$$intervalId=m(function(){r.notify(q++);0<l&&q>=l&&(r.resolve(q),p(S.$$intervalId),delete f[S.$$intervalId]);t||b.$apply()},h);f[S.$$intervalId]=r;return S}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}
function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=rb(b[a]);return b.join("/")}function ad(b,a){var c=Ba(b);a.$$protocol=
c.protocol;a.$$host=c.hostname;a.$$port=$(c.port)||wf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=rc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,
"$1")}function cc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=za(c,a);if(!x(b))throw Hb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+rb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=za(b,d))!==u?(g=f,g=(f=za(a,f))!==u?c+(za("/",f)||f):b+g):(f=za(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),z(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?
"#"+rb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+rb(this.$$hash):
"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ib(b){return function(){return this[b]}}function dd(b,a){return function(c){if(z(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):J(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var p=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Hb("nobase");q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");m=e.history?dc:cd}else q=
Ha(p),m=ec;k=new m(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=C(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);t.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,
l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(p)&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,
q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||B;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===
b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ka("isecfld",a);return b}function la(b,a){if(b){if(b.constructor===b)throw ka("isecfn",a);if(b.window===b)throw ka("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ka("isecdom",a);if(b===Object)throw ka("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){la(b,e);la(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=sa(c.shift(),e);var h=0===g&&a&&a[f]||
b[f];h||(h={},b[f]=h);b=la(h,e)}f=sa(c.shift(),e);la(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return la(a,f)},l=g||Qa(b)?h:oa,k=g||Qa(a)?h:oa,m=g||Qa(c)?h:oa,p=g||Qa(d)?h:oa,q=g||Qa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return u;h=k(h[a]);if(!c)return h;if(null==h)return u;h=m(h[c]);if(!d)return h;if(null==h)return u;
h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function xf(b,a){return function(c,d){return b(c,d,la,a)}}function yf(b,a,c){var d=a.expensiveChecks,e=d?zf:Af,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+
"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=xf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Bf.call(b)}function Oe(){var b=fa(),a=fa();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,
b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&gc(b));return h},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=
g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&gc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&
f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};
return function(d,f,g){var n,D,H;switch(typeof d){case "string":H=d=d.trim();var v=g?a:b;n=v[H];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(D=!0,d=d.substring(2)),g=g?t:q,n=new hc(g),n=(new ib(n,c,g)).parse(d),n.constant?n.$$watchDelegate=m:D?(n=e(n),n.$$watchDelegate=n.literal?k:l):n.inputs&&(n.$$watchDelegate=h),v[H]=n);return p(n,f);case "function":return p(d,f);default:return p(B,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},
a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];
try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=M("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,
b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(J(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||
this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?
d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=E(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=
10,a=M("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;n.length;)try{n.shift()()}catch(a){f(a)}d=null}function t(){null===d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$id=++ob;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=B);f||(f=this.$$watchers=[]);f.unshift(h);
return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(J(e))if(Ta(e))for(f!==q&&(f=q,t=f.length=0,k++),a=e.length,t!==a&&(k++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==m&&(f=m={},t=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(t++,f[b]=g,k++));if(t>a)for(b in k++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,p=g(a,c),q=[],m=
{},n=!0,t=0;return this.$watch(p,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(l)if(J(e))if(Ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,l,m,n,t,s=b,I,W=[],y,O;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{t=!1;for(I=this;S.length;){try{O=S.shift(),O.scope.$eval(O.expression,O.locals)}catch(w){f(w)}c=null}a:do{if(m=I.$$watchers)for(n=m.length;n--;)try{if(e=m[n])if((g=
e.get(I))!==(l=e.last)&&!(e.eq?ea(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))t=!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===p?g:l,I),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){t=!1;break a}}catch(C){f(C)}if(!(m=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(m=I.$$nextSibling);)I=I.$parent}while(I=m);if((t||S.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(t||S.length);
for(r.$$phase=null;u.length;)try{u.shift()()}catch(B){f(B)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=B;this.$on=this.$watch=this.$watchGroup=function(){return B};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||S.length||h.defer(function(){S.length&&r.$digest()});S.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{return k("$apply"),
this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&n.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(p){f(p)}else d.splice(k,1),k--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,S=r.$$asyncQueue=[],u=r.$$postDigestQueue=[],n=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Cf(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(pb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=
[];y(b)&&s(b,function(b){a.push(Cf(b))});return a}function Te(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ra)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(ma,function(a,b){var c=R(b);d[db("parse_as_"+c)]=function(b){return e(a,
b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(R((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");
k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=x(f.body.style.webkitTransition),m=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(z(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
var g=a.defaults&&a.defaults.transformResponse;E(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).finally(function(){d.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!f)throw ia("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=
aa.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,p=(m?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Y.setAttribute("href",b),b=Y.href);
Y.setAttribute("href",b);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function $c(b){b=x(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(P)}function Ec(b){function a(c,d){if(J(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Df);a("json",Ef);a("limitTo",Ff);a("lowercase",Gf);a("number",ld);a("orderBy",md);a("uppercase",Hf)}function Df(){return function(b,a,c){if(!E(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=If(a,c,d);break;default:return b}return b.filter(a)}}function If(b,a,c){var d=J(b)&&"$"in
b;!0===a?a=ea:G(a)||(a=function(a,b){if(J(a)||J(b))return!1;a=R(""+a);b=R(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!J(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(E(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&
(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){z(d)&&(d=a.CURRENCY_SYM);z(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||J(b))return"";var f=
0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;z(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,t=a.gSize;if(k.length>=q+t)for(p=k.length-q,m=0;m<p;m++)0===(p-m)%t&&0!==m&&(h+=c),h+=k.charAt(m);for(m=p;m<k.length;m++)0===
(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),f=vb(a?"SHORT"+b:b);return d[f][e]}}
function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||
0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Jf.test(c)?$(c):a(c));V(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(k=Kf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));
s(h,function(a){l=Lf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ef(){return function(b,a){z(a)&&(a=2);return $a(b,a)}}function Ff(){return function(b,a){V(b)&&(b=b.toString());return E(b)||x(b)?(a=Infinity===Math.abs(Number(a))?Number(a):$(a))?0<a?b.slice(0,a):b.slice(a):x(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=E(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||
"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,
null,a)});s(f.$error,function(b,c){f.$setValidity(c,null,a)});s(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=
!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=R(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=
a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}
function Nb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(x(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Mf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,
1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?pa(a)?a:c(a):u}td(e,f,g,h);jb(e,f,g,h,l,k);var t=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!pa(a))throw Ob("datefmt",a);if(p(a)){if((r=a)&&"UTC"===
t){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,t)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!p(a)||z(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var K;h.$validators.max=function(a){return!p(a)||z(K)||c(a)<=K};g.$observe("max",function(a){K=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=J(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};
return c.badInput&&!c.typeMismatch?u:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw M("ngModel")("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!E(a)){if(x(a))return a.split(" ");if(J(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,
g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var t=l(k,1);h.$addClass(t)}else if(!ea(b,m)){var r=e(m),t=d(k,r),k=d(r,k),t=l(t,1),k=l(k,-1);t&&t.length&&c.addClass(g,t);k&&k.length&&c.removeClass(g,k)}}m=qa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",
function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+uc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&
h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=u));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=u,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Nf=/^\/(.+)\/([a-z]*)$/,R=function(b){return x(b)?b.toLowerCase():
b},sc=Object.prototype.hasOwnProperty,vb=function(b){return x(b)?b.toUpperCase():b},Ra,C,ra,Za=[].slice,pf=[].splice,Of=[].push,Da=Object.prototype.toString,Ka=M("ng"),aa=P.angular||(P.angular={}),cb,ob=0;Ra=X.documentMode;B.$inject=[];oa.$inject=[];var E=Array.isArray,T=function(b){return x(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},sb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,vc=!1,Rb,na=1,qb=3,Qd={full:"1.3.14",major:1,minor:3,dot:14,codeName:"instantaneous-browserification"};Q.expando="ng339";var Ab=Q.cache={},hf=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Pf={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=M("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var La=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(P).on("load",a))},
toString:function(){var b=[];s(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?C(this[b]):C(this[this.length+b])},length:0,push:Of,sort:[].sort,splice:[].splice},Fb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[R(b)]=b});var Nc={};s("input select option textarea button form details".split(" "),function(b){Nc[b]=!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
s({data:Wb,removeData:yb},function(b,a){Q[a]=b});s({data:Wb,inheritedData:Eb,scope:function(b){return C.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return C.data(b,"$isolateScope")||C.data(b,"$isolateScopeNoTemplate")},controller:Jc,injector:function(b){return Eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=R(a);if(Fb[d])if(y(c))c?
(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||B).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(z(b)){var d=a.nodeType;return d===na||d===qb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(z(a)){if(b.multiple&&"select"===ta(b)){var c=[];s(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(z(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Kc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Kc&&(2==b.length&&b!==Bb&&b!==Jc?a:d)===u){if(J(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});
s({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Ub("onargs");if(Fc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Pf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Ic,one:function(a,c,d){a=C(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,
d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);s(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new Q(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;s(new Q(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=C(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Lc,detach:function(a){Lc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;z(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:B,type:g,target:a},c.type&&(e=w(e,
c)),c=qa(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)z(g)?(g=a(this[h],c,e,f),y(g)&&(g=C(g))):Hc(g,a(this[h],c,e,f));return y(g)?g:this};Q.prototype.bind=Q.prototype.on;Q.prototype.unbind=Q.prototype.off});eb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];
return c}};var Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Qf=/,/,Rf=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=M("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw x(d)&&d||(d=a.name||mf(a)),Ga("strictdi",d);c=a.toString().replace(Pc,"");c=c.match(Qc);s(c[1].split(Qf),function(a){a.replace(Rf,function(a,c,d){e.push(d)})})}a.$inject=e}}else E(a)?(c=a.length-1,tb(a[c],"fn"),e=a.slice(0,c)):tb(a,"fn",!0);return e};
var Sf=M("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Sf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=
d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=fa();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,c){if(aa.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,
c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=C(a);c=x(c)?c:E(c)?c.join(" "):"";s(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=C(a);c=x(c)?c:E(c)?c.join(" "):
"";s(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=C(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=aa.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=E(c)?c:c.split(" ");d=E(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));
return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:B,cancel:B}}]}],ia=M("$compile");xc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,qf=M("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},sf=/^\[|^\{(?!\{)/,tf={"[":/]$/,"{":/}$/},rf=/^\)\]\}',?\n/,ac=M("$interpolate"),Tf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,wf={http:80,https:443,ftp:21},Hb=
M("$location"),Uf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(z(a))return this.$$url;var c=Tf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a)||V(a))a=
a.toString(),this.$$search=rc(a);else if(J(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");break;default:z(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,ec,dc],function(a){a.prototype=Object.create(Uf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Hb("nostate");
this.$$state=z(c)?null:c;return this}});var ka=M("$parse"),Vf=Function.prototype.call,Wf=Function.prototype.apply,Xf=Function.prototype.bind,mb=fa();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=w(fa(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,
c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,
c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Yf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+
a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ka("lexerr",a,c,this.text);
},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=R(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=
this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=
4,d+=String.fromCharCode(parseInt(f,16))):d+=Yf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",
this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ka("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ka("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ka("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return yf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(u,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return w(function(d,e,f){d=f||a(d,e);return null==d?u:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?la(g[h],c):u},{assign:function(e,f,g){var h=sa(d(e,g),c),l=la(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?u:g,k=a(g,h,l)||B;if(f)for(var m=d.length;m--;)f[m]=la(d[m](g,h),e);la(l,e);if(k){if(k.constructor===k)throw ka("isecfn",e);if(k===Vf||k===Wf||k===Xf)throw ka("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return la(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Af=fa(),zf=fa(),Bf=Object.prototype.valueOf,Ca=M("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=M("$compile"),Y=X.createElement("a"),id=Ba(P.location.href);Ec.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Lf={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",
1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Jf=/^\-?\d+$/;
kd.$inject=["$locale"];var Gf=da(R),Hf=da(vb);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};s(Fb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,
!!a)})}}}}});s(Oc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Nf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,
function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:B,$$renameControl:function(a,c){a.$name=c},$removeControl:B,$setValidity:B,$setDirty:B,$setPristine:B,$setSubmitted:B};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(lb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(hb(a,null,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(hb(a,null,m,u,m),m=c,hb(a,null,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&hb(a,null,m,u,m);w(h,Lb)})}}}}}]},Ud=yd(),ge=yd(!0),Mf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
Zf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,$f=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ag=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e)},date:kb("date",zd,Nb(zd,["yyyy",
"MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Nb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Nb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",kc,function(a,c){if(pa(a))return a;if(x(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",
Bd,Nb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ag.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Ob("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||z(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:u;e.$validate()})}if(y(d.max)||
d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||z(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);ic(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},radio:function(a,c,
d,e){z(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ea(a,
k)});e.$parsers.push(function(a){return a?k:m})},hidden:B,button:B,submit:B,reset:B,file:B},yc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[R(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],bg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],$d=["$sce",
"$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),be=jc("",!0),de=jc("Odd",0),ce=jc("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",
u);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Dc={},cg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Dc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};
cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll",
"$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:aa.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var u=0,w,n,D,H=function(){n&&(n.remove(),n=null);w&&(w.$destroy(),w=null);D&&(d.leave(D).then(function(){n=null}),n=D,D=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},n=++u;e?(a(e,!0).then(function(a){if(n===u){var c=f.$new();
s.template=a;a=r(c,function(a){H();d.enter(a,null,g).then(h)});w=c;D=a;w.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){n===u&&(H(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(H(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Gc(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],
ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!z(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return E(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Sa="ng-pristine",
Mb="ng-dirty",xd="ng-pending",Ob=new M("ngModel"),dg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success=
{};this.$pending=u;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,r=q,w=null,C,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);G(d)&&(d=c(a));return d};r=function(a,c){G(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Ob("nonassign",d.ngModel,ua(e));};this.$render=B;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};var D=e.inheritedData("$formController")||
Lb,H=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:D,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Sa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Mb);D.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched",
"ng-untouched")};this.$rollbackViewValue=function(){h.cancel(w);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!V(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;n.$$runValidators(a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:u,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;s(n.$validators,function(e,
f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(s(n.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;s(n.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Ob("$asyncValidators",k);g(h,u);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},B):h(!0)}function g(a,c){l===H&&n.$setValidity(a,c)}function h(a){l===H&&d(a)}H++;var l=H;(function(){var a=n.$$parserName||"parse";if(C===u)g(a,null);else return C||(s(n.$validators,
function(a,c){g(c,null)}),s(n.$asyncValidators,function(a,c){g(c,null)})),g(a,C),C;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(w);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue;if(C=z(c)?u:!0)for(var d=0;d<n.$parsers.length;d++)if(c=n.$parsers[d](c),z(c)){C=!1;break}V(n.$modelValue)&&
isNaN(n.$modelValue)&&(n.$modelValue=t(a));var e=n.$modelValue,f=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;f&&(n.$modelValue=c,n.$modelValue!==e&&n.$$writeModelToScope());n.$$runValidators(c,n.$$lastCommittedViewValue,function(a){f||(n.$modelValue=a?c:u,n.$modelValue!==e&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,n.$modelValue);s(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||
n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(w);d?w=h(function(){n.$commitViewValue()},d):l.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;C=u;for(var d=n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=
f,n.$render(),n.$$runValidators(c,f,B))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:dg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];
if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],eg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(eg,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},t={},m=c.startSymbol(),r=c.endSymbol(),u=m+k+"-"+p+r,w=aa.noop,n;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+R(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){t[e]=c(a.replace(d,
u))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===n||d&&isNaN(n)||(w(),w=f.$watch(t[c],l),n=c)})}}}],ne=["$parse","$animate",function(a,c){var d=M("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=X.createComment(" end ngRepeat: "+
h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],p=k[2],q=k[3],t=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],w=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var y,n,D,H,v={$id:Na};t?y=a(t):(D=function(a,c){return Na(c)},
H=function(a){return a});return function(a,f,g,k,m){y&&(n=function(c,d,e){w&&(v[w]=c);v[r]=d;v.$index=e;return y(a,v)});var t=fa();a.$watchCollection(p,function(g){var k,p,y=f[0],F,v=fa(),B,z,G,E,J,x,K;q&&(a[q]=g);if(Ta(g))J=g,p=n||D;else{p=n||H;J=[];for(K in g)g.hasOwnProperty(K)&&"$"!=K.charAt(0)&&J.push(K);J.sort()}B=J.length;K=Array(B);for(k=0;k<B;k++)if(z=g===J?k:J[k],G=g[z],E=p(z,G,k),t[E])x=t[E],delete t[E],v[E]=x,K[k]=x;else{if(v[E])throw s(K,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",
h,E,G);K[k]={id:E,scope:u,clone:u};v[E]=!0}for(F in t){x=t[F];E=ub(x.clone);c.leave(E);if(E[0].parentNode)for(k=0,p=E.length;k<p;k++)E[k].$$NG_REMOVED=!0;x.scope.$destroy()}for(k=0;k<B;k++)if(z=g===J?k:J[k],G=g[z],x=K[k],x.scope){F=y;do F=F.nextSibling;while(F&&F.$$NG_REMOVED);x.clone[0]!=F&&c.move(ub(x.clone),null,C(y));y=x.clone[x.clone.length-1];e(x.scope,k,r,G,w,z,B)}else m(function(a,d){x.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,C(y));y=f;x.clone=a;v[x.id]=x;e(x.scope,k,r,
G,w,z,B)});t=v})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,
d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,
e){k.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,
element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw M("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],fg=M("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:B};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,p;l.databound=d.ngModel;l.init=function(a,c,d){m=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Na(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=B})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&B.prop("selected",!0)):z(a)&&B?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ea(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){R[B]=d;G&&(R[G]=c);return a(e,R)}function k(a){var c;if(t)if(K&&E(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(K,null,a[d]),!0)}else c=
new eb(a);else K&&(a=h(K,null,a));return function(d,e){var f;f=K?K:z?z:A;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){n||(e.$$postDigest(p),n=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){n=!1;var a={"":[]},c=[""],d,l,r,u,v;r=g.$viewValue;u=N(e)||[];var B=G?Object.keys(u).sort():u,x,z,E,A,O={};v=k(r);var M=!1,T,V;Q={};for(A=0;E=B.length,A<E;A++){x=A;if(G&&(x=B[A],"$"===x.charAt(0)))continue;z=u[x];d=h(J,x,z)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(x,z);M=M||d;z=h(C,x,z);
z=y(z)?z:"";V=K?K(e,R):G?B[A]:A;K&&(Q[V]=x);l.push({id:V,label:z,selected:d})}t||(w||null===r?a[""].unshift({id:"",label:"",selected:!M}):M||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];P.length<=x?(r={element:H.clone().attr("label",d),label:l.label},u=[r],P.push(u),f.append(r.element)):(u=P[x],r=u[0],r.label!=d&&r.element.attr("label",r.label=d));M=null;A=0;for(E=l.length;A<E;A++)d=l[A],(v=u[A+1])?(M=v.element,v.label!==d.label&&(m(O,v.label,!1),m(O,d.label,
!0),M.text(v.label=d.label),M.prop("label",v.label)),v.id!==d.id&&M.val(v.id=d.id),M[0].selected!==d.selected&&(M.prop("selected",v.selected=d.selected),Ra&&M.prop("selected",v.selected))):(""===d.id&&w?T=w:(T=D.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),u.push(v={element:T,label:d.label,id:d.id,selected:d.selected}),m(O,d.label,!0),M?M.after(T):r.element.append(T),M=T);for(A++;u.length>A;)d=u.pop(),m(O,d.label,!1),d.element.remove()}for(;P.length>
x;){l=P.pop();for(A=1;A<l.length;++A)m(O,l[A].label,!1);l[0].element.remove()}s(O,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=r.match(d)))throw fg("iexp",r,ua(f));var C=c(v[2]||v[1]),B=v[4]||v[6],x=/ as /.test(v[0])&&v[1],z=x?c(x):null,G=v[5],J=c(v[3]||""),A=c(v[2]?v[1]:B),N=c(v[7]),K=v[8]?c(v[8]):null,Q={},P=[[{element:f,label:""}]],R={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=N(e)||[],c;if(t)c=[],s(f.val(),
function(d){d=K?Q[d]:d;c.push("?"===d?u:""===d?null:h(z?z:A,d,a[d]))});else{var d=K?Q[f.val()]:f.val();c="?"===d?u:""===d?null:h(z?z:A,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(N,l);e.$watchCollection(function(){var a=N(e),c;if(a&&E(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);t&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var t=h.multiple,
r=h.ngOptions,w=!1,B,n=!1,D=C(X.createElement("option")),H=C(X.createElement("optgroup")),v=D.clone();h=0;for(var x=g.children(),G=x.length;h<G;h++)if(""===x[h].value){B=w=x.eq(h);break}q.init(l,w,v);t&&(l.$isEmpty=function(a){return!a||0===a.length});r?p(e,g,l):t?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:B,removeOption:B};return{restrict:"E",priority:100,compile:function(d,e){if(z(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1}),Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){x(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",g,a,ua(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||z(f)||f.test(a)}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=$(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(aa),C(X).ready(function(){Jd(X,tc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');


/*
 AngularJS v1.3.14
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);


/*
 AngularJS v1.3.14
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);
u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,
function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",
$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,
b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),
c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);


!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===da||n[0]===ma?ma+n:n}function l(n){return(n+="")[0]===ma?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=ya.length;r>e;++e){var u=ya[e]+t;if(u in n)return u}}function y(){}function M(){}function x(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function b(){ta.event.preventDefault()}function _(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new M,e=0,r=arguments.length;++e<r;)t[arguments[e]]=x(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function S(n){return xa(n,ka),n}function k(n){return"function"==typeof n?n:function(){return ba(n,this)}}function E(n){return"function"==typeof n?n:function(){return _a(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function N(n){return n.trim().replace(/\s+/g," ")}function C(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function q(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(L);var u=n.length;return"function"==typeof t?r:e}function L(n){var t=C(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",N(u+" "+n))):e.setAttribute("class",N(u.replace(t," ")))}}function T(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(){var n=this.parentNode;n&&n.removeChild(this)}function U(n){return{__data__:n}}function j(n){return function(){return Sa(this,n)}}function F(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function H(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function O(n){return xa(n,Aa),n}function Y(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function I(n){var t=n.__transition__;t&&++t.active}function Z(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=V;a>0&&(n=n.slice(0,a));var l=Ca.get(n);return l&&(n=l,c=X),a?t?u:r:t?y:i}function V(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function X(n,t){var e=V(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function $(){var n=".dragsuppress-"+ ++qa,t="click"+n,e=ta.select(oa).on("touchmove"+n,b).on("dragstart"+n,b).on("selectstart"+n,b);if(za){var r=ia.style,u=r[za];r[za]="none"}return function(i){if(e.on(n,null),za&&(r[za]=u),i){var o=function(){e.on(t,null)};e.on(t,function(){b(),o()},!0),setTimeout(o,0)}}}function B(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>La&&(oa.scrollX||oa.scrollY)){e=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();La=!(u.f||u.e),e.remove()}return La?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function W(){return ta.event.changedTouches[0].identifier}function J(){return ta.event.target}function G(){return oa}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nt(n){return n>1?0:-1>n?Da:Math.acos(n)}function tt(n){return n>1?ja:-1>n?-ja:Math.asin(n)}function et(n){return((n=Math.exp(n))-1/n)/2}function rt(n){return((n=Math.exp(n))+1/n)/2}function ut(n){return((n=Math.exp(2*n))-1)/(n+1)}function it(n){return(n=Math.sin(n/2))*n}function ot(){}function at(n,t,e){return this instanceof at?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof at?new at(n.h,n.s,n.l):bt(""+n,_t,at):new at(n,t,e)}function ct(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new mt(u(n+120),u(n),u(n-120))}function lt(n,t,e){return this instanceof lt?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof lt?new lt(n.h,n.c,n.l):n instanceof ft?gt(n.l,n.a,n.b):gt((n=wt((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new lt(n,t,e)}function st(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new ft(e,Math.cos(n*=Fa)*t,Math.sin(n)*t)}function ft(n,t,e){return this instanceof ft?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof ft?new ft(n.l,n.a,n.b):n instanceof lt?st(n.h,n.c,n.l):wt((n=mt(n)).r,n.g,n.b):new ft(n,t,e)}function ht(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=pt(u)*Ja,r=pt(r)*Ga,i=pt(i)*Ka,new mt(dt(3.2404542*u-1.5371385*r-.4985314*i),dt(-.969266*u+1.8760108*r+.041556*i),dt(.0556434*u-.2040259*r+1.0572252*i))}function gt(n,t,e){return n>0?new lt(Math.atan2(e,t)*Ha,Math.sqrt(t*t+e*e),n):new lt(0/0,0/0,n)}function pt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function vt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function dt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mt(n,t,e){return this instanceof mt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mt?new mt(n.r,n.g,n.b):bt(""+n,mt,ct):new mt(n,t,e)}function yt(n){return new mt(n>>16,255&n>>8,255&n)}function Mt(n){return yt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function bt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=tc.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new at(r,u,c)}function wt(n,t,e){n=St(n),t=St(t),e=St(e);var r=vt((.4124564*n+.3575761*t+.1804375*e)/Ja),u=vt((.2126729*n+.7151522*t+.072175*e)/Ga),i=vt((.0193339*n+.119192*t+.9503041*e)/Ka);return ft(116*u-16,500*(r-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Nt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Ct(t,e,n,r)}}function Ct(n,t,e,r){function u(){var n,t=c.status;if(!t&&qt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!oa.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,"on"),null==r?i:i.get(zt(r))}function zt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function qt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function Lt(){var n=Tt(),t=Rt()-n;t>24?(isFinite(t)&&(clearTimeout(ic),ic=setTimeout(Lt,t)),uc=0):(uc=1,ac(Lt))}function Tt(){var n=Date.now();for(oc=ec;oc;)n>=oc.t&&(oc.f=oc.c(n-oc.t)),oc=oc.n;return n}function Rt(){for(var n,t=ec,e=1/0;t;)t.f?t=n?n.n=t.n:ec=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return rc=n,e}function Dt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Pt(n,t){var e=Math.pow(10,3*va(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Ut(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:At;return function(n){var e=lc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=sc.get(g)||jt;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function jt(n){return n+""}function Ft(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new hc(e-1)),1),e}function i(n,e){return t(n=new hc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{hc=Ft;var r=new Ft;return r._=n,o(r,t,e)}finally{hc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ot(n);return c.floor=c,c.round=Ot(r),c.ceil=Ot(u),c.offset=Ot(i),c.range=a,n}function Ot(n){return function(t,e){try{hc=Ft;var r=new Ft;return r._=t,n(r,e)._}finally{hc=Date}}}function Yt(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=pc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&hc!==Ft,o=new(i?Ft:hc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in pc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{hc=Ft;var t=new hc;return t._=n,r(t)}finally{hc=Date}}var r=t(n);return e.parse=function(n){try{hc=Ft;var t=r.parse(n);return t&&t._}finally{hc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ce;var M=ta.map(),x=Zt(v),b=Vt(v),_=Zt(d),w=Vt(d),S=Zt(m),k=Vt(m),E=Zt(y),A=Vt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+fc.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(fc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(fc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:oe,"%":function(){return"%"}},C={a:r,A:u,b:i,B:o,c:a,d:ne,e:ne,H:ee,I:ee,j:te,L:ie,m:Qt,M:re,p:s,S:ue,U:$t,w:Xt,W:Bt,x:c,X:l,y:Jt,Y:Wt,Z:Gt,"%":ae};return t}function It(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Zt(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Vt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Xt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function $t(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Bt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Wt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Jt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.y=Kt(+r[0]),e+r[0].length):-1}function Gt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Kt(n){return n+(n>68?1900:2e3)}function Qt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function ne(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function te(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function ee(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function re(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ue(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ie(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function oe(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|va(t)/60,u=va(t)%60;return e+It(r,"0",2)+It(u,"0",2)}function ae(n,t,e){dc.lastIndex=0;var r=dc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ce(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function le(){}function se(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function fe(n,t){n&&xc.hasOwnProperty(n.type)&&xc[n.type](n,t)}function he(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ge(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)he(n[e],t,1);t.polygonEnd()}function pe(){function n(n,t){n*=Fa,t=t*Fa/2+Da/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);_c.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;wc.point=function(o,a){wc.point=n,r=(t=o)*Fa,u=Math.cos(a=(e=a)*Fa/2+Da/4),i=Math.sin(a)},wc.lineEnd=function(){n(t,e)}}function ve(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function de(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function me(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function ye(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Me(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function be(n){return[Math.atan2(n[1],n[0]),tt(n[2])]}function _e(n,t){return va(n[0]-t[0])<Ta&&va(n[1]-t[1])<Ta}function we(n,t){n*=Fa;var e=Math.cos(t*=Fa);Se(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Se(n,t,e){++Sc,Ec+=(n-Ec)/Sc,Ac+=(t-Ac)/Sc,Nc+=(e-Nc)/Sc}function ke(){function n(n,u){n*=Fa;var i=Math.cos(u*=Fa),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);kc+=l,Cc+=l*(t+(t=o)),zc+=l*(e+(e=a)),qc+=l*(r+(r=c)),Se(t,e,r)}var t,e,r;Dc.point=function(u,i){u*=Fa;var o=Math.cos(i*=Fa);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Dc.point=n,Se(t,e,r)}}function Ee(){Dc.point=we}function Ae(){function n(n,t){n*=Fa;var e=Math.cos(t*=Fa),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-nt(g)/h,v=Math.atan2(h,g);Lc+=p*l,Tc+=p*s,Rc+=p*f,kc+=v,Cc+=v*(r+(r=o)),zc+=v*(u+(u=a)),qc+=v*(i+(i=c)),Se(r,u,i)}var t,e,r,u,i;Dc.point=function(o,a){t=o,e=a,Dc.point=n,o*=Fa;var c=Math.cos(a*=Fa);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),Se(r,u,i)},Dc.lineEnd=function(){n(t,e),Dc.lineEnd=Ee,Dc.point=we}}function Ne(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ce(){return!0}function ze(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new Le(e,n,null,!0),l=new Le(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new Le(r,n,null,!1),l=new Le(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),qe(i),qe(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function qe(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Le(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Te(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Re))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=He(m,p);g.length?(b||(i.polygonStart(),b=!0),ze(g,Pe,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=De(),x=t(M),b=!1;return y}}function Re(n){return n.length>1}function De(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Pe(n,t){return((n=n.x)[0]<0?n[1]-ja-Ta:ja-n[1])-((t=t.x)[0]<0?t[1]-ja-Ta:ja-t[1])}function Ue(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Da:-Da,c=va(i-e);va(c-Da)<Ta?(n.point(e,r=(r+o)/2>0?ja:-ja),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Da&&(va(e-u)<Ta&&(e-=u*Ta),va(i-a)<Ta&&(i-=a*Ta),r=je(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function je(n,t,e,r){var u,i,o=Math.sin(n-e);return va(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Fe(n,t,e,r){var u;if(null==n)u=e*ja,r.point(-Da,u),r.point(0,u),r.point(Da,u),r.point(Da,0),r.point(Da,-u),r.point(0,-u),r.point(-Da,-u),r.point(-Da,0),r.point(-Da,u);else if(va(n[0]-t[0])>Ta){var i=n[0]<t[0]?Da:-Da;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function He(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;_c.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Da/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Da/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>Da,k=p*M;if(_c.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Pa:b,S^h>=e^m>=e){var E=me(ve(f),ve(n));xe(E);var A=me(u,E);xe(A);var N=(S^b>=0?-1:1)*tt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ta>i||Ta>i&&0>_c)^1&o}function Oe(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Da:-Da),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=ve(n),u=ve(t),o=[1,0,0],a=me(r,u),c=de(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=me(o,a),p=Me(o,f),v=Me(a,h);ye(p,v);var d=g,m=de(p,d),y=de(d,d),M=m*m-y*(de(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Me(d,(-m-x)/y);if(ye(b,p),b=be(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=va(A-Da)<Ta,C=N||Ta>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(va(b[0]-w)<Ta?k:E):k<=b[1]&&b[1]<=E:A>Da^(w<=b[0]&&b[0]<=S)){var z=Me(d,(-m+x)/y);return ye(z,p),[b,be(z)]}}}function u(t,e){var r=o?n:Da-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=va(i)>Ta,c=pr(n,6*Fa);return Te(t,e,c,o?[0,-n]:[-Da,n-Da])}function Ye(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ie(n,t,e,r){function u(r,u){return va(r[0]-n)<Ta?u>0?0:3:va(r[0]-e)<Ta?u>0?2:1:va(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Uc,Math.min(Uc,n)),t=Math.max(-Uc,Math.min(Uc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=De(),N=Ye(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&ze(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ze(n){var t=0,e=Da/3,r=or(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},u}function Ve(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,tt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Xe(){function n(n,t){Fc+=u*n-r*t,r=n,u=t}var t,e,r,u;Zc.point=function(i,o){Zc.point=n,t=r=i,e=u=o},Zc.lineEnd=function(){n(t,e)}}function $e(n,t){Hc>n&&(Hc=n),n>Yc&&(Yc=n),Oc>t&&(Oc=t),t>Ic&&(Ic=t)}function Be(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=We(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=We(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function We(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Je(n,t){Ec+=n,Ac+=t,++Nc}function Ge(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);Cc+=o*(t+n)/2,zc+=o*(e+r)/2,qc+=o,Je(t=n,e=r)}var t,e;Xc.point=function(r,u){Xc.point=n,Je(t=r,e=u)}}function Ke(){Xc.point=Je}function Qe(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);Cc+=o*(r+n)/2,zc+=o*(u+t)/2,qc+=o,o=u*n-r*t,Lc+=o*(r+n),Tc+=o*(u+t),Rc+=3*o,Je(r=n,u=t)}var t,e,r,u;Xc.point=function(i,o){Xc.point=n,Je(t=r=i,e=u=o)},Xc.lineEnd=function(){n(t,e)}}function nr(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Pa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function tr(n){function t(n){return(a?r:e)(n)}function e(t){return ur(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=ve([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=va(va(w)-1)<Ta||va(r-h)<Ta?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;
(L*L/x>i||va((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Fa),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function er(n){var t=tr(function(t,e){return n([t*Ha,e*Ha])});return function(n){return ar(t(n))}}function rr(n){this.stream=n}function ur(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ir(n){return or(function(){return n})()}function or(n){function t(n){return n=a(n[0]*Fa,n[1]*Fa),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ha,n[1]*Ha]}function r(){a=Ne(o=sr(m,y,M),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=tr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,M=0,x=Pc,b=At,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=ar(x(o,f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Pc):Oe((_=+n)*Fa),u()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=n?Ie(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Fa,d=n[1]%360*Fa,r()):[v*Ha,d*Ha]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Fa,y=n[1]%360*Fa,M=n.length>2?n[2]%360*Fa:0,r()):[m*Ha,y*Ha,M*Ha]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function ar(n){return ur(n,function(t,e){n.point(t*Fa,e*Fa)})}function cr(n,t){return[n,t]}function lr(n,t){return[n>Da?n-Pa:-Da>n?n+Pa:n,t]}function sr(n,t,e){return n?t||e?Ne(hr(n),gr(t,e)):hr(n):t||e?gr(t,e):lr}function fr(n){return function(t,e){return t+=n,[t>Da?t-Pa:-Da>t?t+Pa:t,e]}}function hr(n){var t=fr(n);return t.invert=fr(-n),t}function gr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),tt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),tt(s*r-a*u)]},e}function pr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=vr(e,u),i=vr(e,i),(o>0?i>u:u>i)&&(u+=o*Pa)):(u=n+o*Pa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=be([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function vr(n,t){var e=ve(t);e[0]-=n,xe(e);var r=nt(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function dr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function mr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function yr(n){return n.source}function Mr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(it(r-t)+u*o*it(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ha,Math.atan2(o,Math.sqrt(r*r+u*u))*Ha]}:function(){return[n*Ha,t*Ha]};return p.distance=h,p}function br(){function n(n,u){var i=Math.sin(u*=Fa),o=Math.cos(u),a=va((n*=Fa)-t),c=Math.cos(a);$c+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Bc.point=function(u,i){t=u*Fa,e=Math.sin(i*=Fa),r=Math.cos(i),Bc.point=n},Bc.lineEnd=function(){Bc.point=Bc.lineEnd=y}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function wr(n,t){function e(n,t){o>0?-ja+Ta>t&&(t=-ja+Ta):t>ja-Ta&&(t=ja-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Da/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-ja]},e):kr}function Sr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return va(u)<Ta?cr:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function kr(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function Er(n){var t,e=ir(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Da*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ar(n,t){return[Math.log(Math.tan(Da/4+t/2)),-n]}function Nr(n){return n[0]}function Cr(n){return n[1]}function zr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function qr(n,t){return n[0]-t[0]||n[1]-t[1]}function Lr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Tr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Rr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Dr(){eu(this),this.edge=this.site=this.circle=null}function Pr(n){var t=ol.pop()||new Dr;return t.site=n,t}function Ur(n){$r(n),rl.remove(n),ol.push(n),eu(n)}function jr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Ur(n);for(var c=i;c.circle&&va(e-c.circle.x)<Ta&&va(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Ur(c),c=i;a.unshift(c),$r(c);for(var l=o;l.circle&&va(e-l.circle.x)<Ta&&va(r-l.circle.cy)<Ta;)o=l.N,a.push(l),Ur(l),l=o;a.push(l),$r(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Qr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Gr(c.site,l.site,null,u),Xr(c),Xr(l)}function Fr(n){for(var t,e,r,u,i=n.x,o=n.y,a=rl._;a;)if(r=Hr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Or(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Pr(n);if(rl.insert(t,c),t||e){if(t===e)return $r(t),e=Pr(t.site),rl.insert(c,e),c.edge=e.edge=Gr(t.site,c.site),Xr(t),Xr(e),void 0;if(!e)return c.edge=Gr(t.site,c.site),void 0;$r(t),$r(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Qr(e.edge,l,p,x),c.edge=Gr(l,n,null,x),e.edge=Gr(n,p,null,x),Xr(t),Xr(e)}}function Hr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Or(n,t){var e=n.N;if(e)return Hr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Yr(n){this.site=n,this.edges=[]}function Ir(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=el,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(va(r-t)>Ta||va(u-e)>Ta)&&(a.splice(o,0,new nu(Kr(i.site,s,va(r-f)<Ta&&p-u>Ta?{x:f,y:va(t-f)<Ta?e:p}:va(u-p)<Ta&&h-r>Ta?{x:va(e-p)<Ta?t:h,y:p}:va(r-h)<Ta&&u-g>Ta?{x:h,y:va(t-h)<Ta?e:g}:va(u-g)<Ta&&r-f>Ta?{x:va(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Zr(n,t){return t.angle-n.angle}function Vr(){eu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Xr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-Ra)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=al.pop()||new Vr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=il._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}il.insert(y,m),y||(ul=m)}}}}function $r(n){var t=n.circle;t&&(t.P||(ul=t.N),il.remove(t),al.push(t),eu(t),n.circle=null)}function Br(n){for(var t,e=tl,r=Ye(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Wr(t,n)||!r(t)||va(t.a.x-t.b.x)<Ta&&va(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Wr(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Jr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Gr(n,t,e,r){var u=new Jr(n,t);return tl.push(u),e&&Qr(u,n,t,e),r&&Qr(u,t,n,r),el[n.i].edges.push(new nu(u,n,t)),el[t.i].edges.push(new nu(u,t,n)),u}function Kr(n,t,e){var r=new Jr(n,null);return r.a=t,r.b=e,tl.push(r),r}function Qr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function nu(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function tu(){this._=null}function eu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ru(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function uu(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function iu(n){for(;n.L;)n=n.L;return n}function ou(n,t){var e,r,u,i=n.sort(au).pop();for(tl=[],el=new Array(n.length),rl=new tu,il=new tu;;)if(u=ul,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(el[i.i]=new Yr(i),Fr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;jr(u.arc)}t&&(Br(t),Ir(t));var o={cells:el,edges:tl};return rl=il=tl=el=null,o}function au(n,t){return t.y-n.y||t.x-n.x}function cu(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function lu(n){return n.x}function su(n){return n.y}function fu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function hu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&hu(n,c[0],e,r,o,a),c[1]&&hu(n,c[1],o,r,u,a),c[2]&&hu(n,c[2],e,a,o,i),c[3]&&hu(n,c[3],o,a,u,i)}}function gu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-p[0],d=e-p[1],m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function pu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function vu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=yu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function du(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mu(n,t){var e,r,u,i=ll.lastIndex=sl.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=ll.exec(n))&&(r=sl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:du(e,r)})),i=sl.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function yu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function Mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(yu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function xu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function bu(n){return function(t){return 1-n(1-t)}}function _u(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function wu(n){return n*n}function Su(n){return n*n*n}function ku(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Eu(n){return function(t){return Math.pow(t,n)}}function Au(n){return 1-Math.cos(n*ja)}function Nu(n){return Math.pow(2,10*(n-1))}function Cu(n){return 1-Math.sqrt(1-n*n)}function zu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Pa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Pa/t)}}function qu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Lu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Tu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return st(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(e+i*n,r+o*n,u+a*n)+""}}function Du(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ht(e+i*n,r+o*n,u+a*n)+""}}function Pu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Uu(n){var t=[n.a,n.b],e=[n.c,n.d],r=Fu(t),u=ju(t,e),i=Fu(Hu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ha,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ha:0}function ju(n,t){return n[0]*t[0]+n[1]*t[1]}function Fu(n){var t=Math.sqrt(ju(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Hu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ou(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:du(a[0],c[0])},{i:3,x:du(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:du(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:du(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:du(g[0],p[0])},{i:e-2,x:du(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Yu(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Iu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Zu(n){for(var t=n.source,e=n.target,r=Xu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Vu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Xu(n,t){if(n===t)return n;for(var e=Vu(n),r=Vu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function $u(n){n.fixed|=2}function Bu(n){n.fixed&=-7}function Wu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Ju(n){n.fixed&=-5}function Gu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Gu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Ku(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ui,n}function Qu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function ni(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ti(n){return n.children}function ei(n){return n.value}function ri(n,t){return t.value-n.value}function ui(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ii(n){return n.x}function oi(n){return n.y}function ai(n,t,e){n.y0=t,n.y=e}function ci(n){return ta.range(n.length)}function li(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function si(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function fi(n){return n.reduce(hi,0)}function hi(n,t){return n+t[1]}function gi(n,t){return pi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function pi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function vi(n){return[ta.min(n),ta.max(n)]}function di(n,t){return n.value-t.value}function mi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function yi(n,t){n._pack_next=t,t._pack_prev=n}function Mi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function xi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(bi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],Si(r,u,i),t(i),mi(r,i),r._pack_prev=i,mi(i,u),u=r._pack_next,o=3;l>o;o++){Si(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Mi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?yi(r,u=a):yi(r=c,u),o--):(mi(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(_i)}}function bi(n){n._pack_next=n._pack_prev=n}function _i(n){delete n._pack_next,delete n._pack_prev}function wi(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)wi(u[i],t,e,r)}function Si(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function ki(n,t){return n.parent==t.parent?1:2}function Ei(n){var t=n.children;return t.length?t[0]:n.t}function Ai(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ni(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ci(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function zi(n,t,e){return n.a.parent===t.parent?n.a:e}function qi(n){return 1+ta.max(n,function(n){return n.y})}function Li(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ti(n){var t=n.children;return t&&t.length?Ti(t[0]):n}function Ri(n){var t,e=n.children;return e&&(t=e.length)?Ri(e[t-1]):n}function Di(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Pi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Ui(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function ji(n){return n.rangeExtent?n.rangeExtent():Ui(n.range())}function Fi(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Hi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Oi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:bl}function Yi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Ii(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Yi:Fi,c=r?Iu:Yu;return o=u(n,t,c,e),a=u(t,n,c,yu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Pu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return $i(n,t)},i.tickFormat=function(t,e){return Bi(n,t,e)},i.nice=function(t){return Vi(n,t),u()},i.copy=function(){return Ii(n,t,e,r)},u()}function Zi(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Vi(n,t){return Hi(n,Oi(Xi(n,t)[2]))}function Xi(n,t){null==t&&(t=10);var e=Ui(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function $i(n,t){return ta.range.apply(ta,Xi(n,t))}function Bi(n,t,e){var r=Xi(n,t);if(e){var u=lc.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(va(r[0]),va(r[1])));return u[7]||(u[7]="."+Wi(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Ji(u[8],r)),e=u.join("")}else e=",."+Wi(r[2])+"f";return ta.format(e)}function Wi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Ji(n,t){var e=Wi(t[2]);return n in _l?Math.abs(e-Wi(Math.max(va(t[0]),va(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Gi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Hi(r.map(u),e?Math:Sl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Ui(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return wl;arguments.length<2?t=wl:"function"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Gi(n.copy(),t,e,r)},Zi(o,n)}function Ki(n,t,e){function r(t){return n(u(t))}var u=Qi(t),i=Qi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return $i(e,n)},r.tickFormat=function(n,t){return Bi(e,n,t)},r.nice=function(n){return r.domain(Vi(e,n))},r.exponent=function(o){return arguments.length?(u=Qi(t=o),i=Qi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Ki(n.copy(),t,e)},Zi(r,n)}function Qi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function no(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):0|(l-c)/(n.length-1+a);return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Ui(t.a[0])},e.copy=function(){return no(n,t)},e.domain(n)}function to(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=ta.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[ta.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return to(r,u)},i()}function eo(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return eo(n,t,e)},u()}function ro(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ro(n,t)},e}function uo(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return $i(n,t)},t.tickFormat=function(t,e){return Bi(n,t,e)},t.copy=function(){return uo(n)},t}function io(){return 0}function oo(n){return n.innerRadius}function ao(n){return n.outerRadius}function co(n){return n.startAngle}function lo(n){return n.endAngle}function so(n){return n&&n.padAngle}function fo(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function ho(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function go(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=Et(e),p=Et(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Nr,r=Cr,u=Ce,i=po,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=zl.get(n)||po).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function po(n){return n.join("L")}function vo(n){return po(n)+"Z"}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function xo(n,t){return n.length<4?po(n):n[1]+wo(n.slice(1,-1),So(n,t))}function bo(n,t){return n.length<3?po(n):n[0]+wo((n.push(n[0]),n),So([n[n.length-2]].concat(n,[n[1]]),t))}function _o(n,t){return n.length<3?po(n):n[0]+wo(n,So(n,t))}function wo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return po(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function So(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function ko(n){if(n.length<3)return po(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Co(Tl,o),",",Co(Tl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),zo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function Eo(n){if(n.length<4)return po(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Co(Tl,i)+","+Co(Tl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),zo(e,i,o);return e.join("")}function Ao(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Co(Tl,o),",",Co(Tl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),zo(t,o,a);return t.join("")}function No(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return ko(n)}function Co(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function zo(n,t,e){n.push("C",Co(ql,t),",",Co(ql,e),",",Co(Ll,t),",",Co(Ll,e),",",Co(Tl,t),",",Co(Tl,e))}function qo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Lo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=qo(u,i);++t<e;)r[t]=(o+(o=qo(u=i,i=n[t+1])))/2;return r[t]=o,r}function To(n){for(var t,e,r,u,i=[],o=Lo(n),a=-1,c=n.length-1;++a<c;)t=qo(n[a],n[a+1]),va(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Ro(n){return n.length<3?po(n):n[0]+wo(n,To(n))}function Do(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-ja,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Po(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=Et(e),b=Et(u),_=e===r?function(){return g}:Et(r),w=u===i?function(){return p}:Et(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Nr,r=Nr,u=0,i=Cr,o=Ce,a=po,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=zl.get(n)||po).key,l=a.reverse||a,s=a.closed?"M":"L",t):c
},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Uo(n){return n.radius}function jo(n){return[n.x,n.y]}function Fo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-ja;return[e*Math.cos(r),e*Math.sin(r)]}}function Ho(){return 64}function Oo(){return"circle"}function Yo(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Io(n,t,e){return xa(n,Fl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return H(n,"function"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=""),function(){this.textContent=n}}function Xo(n){return null==n?"__transition__":"__transition_"+n+"__"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var c=u.time;o=i[r]={tween:new a,time:c,delay:u.delay,duration:u.duration,ease:u.ease},u=null,++i.count,ta.timer(function(u){function a(e){return i.active>r?s(!1):(i.active=r,o.event&&o.event.start.call(n,g,t),o.tween.forEach(function(e,r){(r=r.call(n,g,t))&&d.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return v.c=l(e||1)?Ce:l,1},0,c),void 0)}function l(t){if(i.active!==r)return s(!1);for(var e=t/f,u=h(e),o=d.length;o>0;)d[--o].call(n,u);return e>=1?s(!0):void 0}function s(u){return o.event&&o.event[u?"end":"interrupt"].call(n,g,t),--i.count?delete i[r]:delete n[e],1}var f,h,g=n.__data__,p=o.delay,v=oc,d=[];return v.t=p+c,u>=p?a(u-p):(v.c=a,void 0)},0,c)}}function Bo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Bl,u);return i==Bl.length?[t.year,Xi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Bl[i-1]<Bl[i]/u?i-1:i]:[Gl,Xi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Ui(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Hi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Ui(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Zi(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.0"};Date.now||(Date.now=function(){return+new Date});var ea=[].slice,ra=function(n){return ea.call(n)},ua=document,ia=ua.documentElement,oa=window;try{ra(ia.childNodes)[0].nodeType}catch(aa){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{ua.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.Element.prototype,sa=la.setAttribute,fa=la.setAttributeNS,ha=oa.CSSStyleDeclaration.prototype,ga=ha.setProperty;la.setAttribute=function(n,t){sa.call(this,n,t+"")},la.setAttributeNS=function(n,t,e){fa.call(this,n,t,e+"")},ha.setProperty=function(n,t,e){ga.call(this,n,t+"",e)}}ta.ascending=n,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},ta.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(n),.5):void 0};var pa=r(n);ta.bisectLeft=pa.left,ta.bisect=ta.bisectRight=pa.right,ta.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=0|Math.random()*i--,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var va=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(va(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},ta.map=function(n,t){var e=new a;if(n instanceof a)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var da="__proto__",ma="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),ta.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var ya=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new M,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=x(n);return n},M.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(Ma,"\\$&")};var Ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,xa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ba=function(n,t){return t.querySelector(n)},_a=function(n,t){return t.querySelectorAll(n)},wa=ia.matches||ia[m(ia,"matchesSelector")],Sa=function(n,t){return wa.call(n,t)};"function"==typeof Sizzle&&(ba=function(n,t){return Sizzle(n,t)[0]||null},_a=Sizzle,Sa=Sizzle.matchesSelector),ta.selection=function(){return Na};var ka=ta.selection.prototype=[];ka.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ka.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var Ea={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:Ea,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),Ea.hasOwnProperty(e)?{space:Ea[e],local:n}:n}},ka.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ka.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!C(n[u]).test(t))return!1;return!0}for(t in n)this.each(q(t,n[t]));return this}return this.each(q(n,t))},ka.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(T(n,t,e))},ka.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ka.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ka.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ka.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ka.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ka.remove=function(){return this.each(P)},ka.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=U(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=U(i);for(;f>r;++r)p[r]=U(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=O([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ka.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ka.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ka.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ka.sort=function(n){n=F.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ka.each=function(n){return H(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ka.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},ka.empty=function(){return!this.node()},ka.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ka.size=function(){var n=0;return H(this,function(){++n}),n};var Aa=[];ta.selection.enter=O,ta.selection.enter.prototype=Aa,Aa.append=ka.append,Aa.empty=ka.empty,Aa.node=ka.node,Aa.call=ka.call,Aa.size=ka.size,Aa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Aa.insert=function(n,t){return arguments.length<2&&(t=Y(this)),ka.insert.call(this,n,t)},ka.transition=function(n){for(var t,e,r=Dl||++Hl,u=Xo(n),i=[],o=Pl||{time:Date.now(),ease:ku,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Io(i,u,r)},ka.interrupt=function(n){var t=Xo(n);return this.each(function(){var n=this[t];n&&++n.active})},ta.select=function(n){var t=["string"==typeof n?ba(n,ua):n];return t.parentNode=ia,S([t])},ta.selectAll=function(n){var t=ra("string"==typeof n?_a(n,ua):n);return t.parentNode=ia,S([t])};var Na=ta.select(ia);ka.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(Z(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(Z(n,t,e))};var Ca=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ca.forEach(function(n){"on"+n in ua&&Ca.remove(n)});var za="onselectstart"in ua?null:m(ia.style,"userSelect"),qa=0;ta.mouse=function(n){return B(n,_())};var La=/WebKit/.test(oa.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=_().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return B(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(u()).on(i+d,a).on(o+d,c),y=$(),M=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,ta.mouse,G,"mousemove","mouseup"),i=t(W,ta.touch,J,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},ta.rebind(n,e,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=_().touches),t?ra(t).map(function(t){var e=B(n,t);return e.identifier=t.identifier,e}):[]};var Ta=1e-6,Ra=Ta*Ta,Da=Math.PI,Pa=2*Da,Ua=Pa-Ta,ja=Da/2,Fa=Da/180,Ha=180/Da,Oa=Math.SQRT2,Ya=2,Ia=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=rt(v),o=i/(Ya*h)*(e*ut(Oa*t+v)-et(v));return[r+o*l,u+o*s,i*e/rt(Oa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Oa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Ia*f)/(2*i*Ya*h),p=(c*c-i*i-Ia*f)/(2*c*Ya*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Oa;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(z,s).on(Xa+".zoom",h).on("dblclick.zoom",g).on(T,f)}function t(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function e(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function r(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=e(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function i(t,e,i,o){t.__chart__={x:k.x,y:k.y,k:k.k},r(Math.pow(2,o)),u(v=e,i),t=ta.select(t),N>0&&(t=t.transition().duration(N)),t.call(n.event)}function o(){x&&x.domain(M.range().map(function(n){return(n-k.x)/k.k}).map(M.invert)),S&&S.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function a(n){C++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function l(n){--C||n({type:"zoomend"}),v=null}function s(){function n(){s=1,u(ta.mouse(r),h),c(o)}function e(){f.on(q,null).on(L,null),g(s&&ta.event.target===i),l(o)}var r=this,i=ta.event.target,o=R.of(r,arguments),s=0,f=ta.select(oa).on(q,n).on(L,e),h=t(ta.mouse(r)),g=$();I(r),a(o)}function f(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=t(n))}),n}function e(){var t=ta.event.target;ta.select(t).on(x,o).on(_,h),w.push(t);for(var e=ta.event.changedTouches,r=0,u=e.length;u>r;++r)d[e[r].identifier]=null;var a=n(),c=Date.now();if(1===a.length){if(500>c-y){var l=a[0];i(p,l,d[l.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),b()}y=c}else if(a.length>1){var l=a[0],s=a[1],f=l[0]-s[0],g=l[1]-s[1];m=f*f+g*g}}function o(){var n,t,e,i,o=ta.touches(p);I(p);for(var a=0,l=o.length;l>a;++a,i=null)if(e=o[a],i=d[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*g)}y=null,u(n,t),c(v)}function h(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(w).on(M,null),S.on(z,s).on(T,f),E(),l(v)}var g,p=this,v=R.of(p,arguments),d={},m=0,M=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+M,_="touchend"+M,w=[],S=ta.select(p),E=$();e(),a(v),S.on(z,null).on(T,e)}function h(){var n=R.of(this,arguments);m?clearTimeout(m):(p=t(v=d||ta.mouse(this)),I(this),a(n)),m=setTimeout(function(){m=null,l(n)},50),b(),r(Math.pow(2,.002*Za())*k.k),u(v,p),c(n)}function g(){var n=ta.mouse(this),e=Math.log(k.k)/Math.LN2;i(this,n,t(n),ta.event.shiftKey?Math.ceil(e)-1:Math.floor(e)+1)}var p,v,d,m,y,M,x,_,S,k={x:0,y:0,k:1},E=[960,500],A=Va,N=250,C=0,z="mousedown.zoom",q="mousemove.zoom",L="mouseup.zoom",T="touchstart.zoom",R=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=R.of(this,arguments),t=k;Dl?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},a(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=v?v[0]:e/2,i=v?v[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){l(n)}).each("end.zoom",function(){l(n)}):(this.__chart__=k,a(n),c(n),l(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Va:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(d=t&&[+t[0],+t[1]],n):d},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(N=+t,n):N},n.x=function(t){return arguments.length?(x=t,M=t.copy(),k={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(S=t,_=t.copy(),k={x:0,y:0,k:1},n):S},ta.rebind(n,R,"on")};var Za,Va=[0,1/0],Xa="onwheel"in ua?(Za=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Za=function(){return ta.event.wheelDelta},"mousewheel"):(Za=function(){return-ta.event.detail},"MozMousePixelScroll");ta.color=ot,ot.prototype.toString=function(){return this.rgb()+""},ta.hsl=at;var $a=at.prototype=new ot;$a.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,this.l/n)},$a.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new at(this.h,this.s,n*this.l)},$a.rgb=function(){return ct(this.h,this.s,this.l)},ta.hcl=lt;var Ba=lt.prototype=new ot;Ba.brighter=function(n){return new lt(this.h,this.c,Math.min(100,this.l+Wa*(arguments.length?n:1)))},Ba.darker=function(n){return new lt(this.h,this.c,Math.max(0,this.l-Wa*(arguments.length?n:1)))},Ba.rgb=function(){return st(this.h,this.c,this.l).rgb()},ta.lab=ft;var Wa=18,Ja=.95047,Ga=1,Ka=1.08883,Qa=ft.prototype=new ot;Qa.brighter=function(n){return new ft(Math.min(100,this.l+Wa*(arguments.length?n:1)),this.a,this.b)},Qa.darker=function(n){return new ft(Math.max(0,this.l-Wa*(arguments.length?n:1)),this.a,this.b)},Qa.rgb=function(){return ht(this.l,this.a,this.b)},ta.rgb=mt;var nc=mt.prototype=new ot;nc.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new mt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mt(u,u,u)},nc.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mt(n*this.r,n*this.g,n*this.b)},nc.hsl=function(){return _t(this.r,this.g,this.b)},nc.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var tc=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});tc.forEach(function(n,t){tc.set(n,yt(t))}),ta.functor=Et,ta.xhr=Nt(At),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Ct(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv("	","text/tab-separated-values");var ec,rc,uc,ic,oc,ac=oa[m(oa,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};rc?rc.n=i:ec=i,rc=i,uc||(ic=clearTimeout(ic),uc=1,ac(Lt))},ta.timer.flush=function(){Tt(),Rt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var cc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Pt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Dt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),cc[8+e/3]};var lc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,sc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Dt(n,t))).toFixed(Math.max(0,Math.min(20,Dt(n*(1+1e-15),t))))}}),fc=ta.time={},hc=Date;Ft.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){gc.setUTCDate.apply(this._,arguments)},setDay:function(){gc.setUTCDay.apply(this._,arguments)},setFullYear:function(){gc.setUTCFullYear.apply(this._,arguments)},setHours:function(){gc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){gc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){gc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){gc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){gc.setUTCSeconds.apply(this._,arguments)},setTime:function(){gc.setTime.apply(this._,arguments)}};var gc=Date.prototype;fc.year=Ht(function(n){return n=fc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),fc.years=fc.year.range,fc.years.utc=fc.year.utc.range,fc.day=Ht(function(n){var t=new hc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),fc.days=fc.day.range,fc.days.utc=fc.day.utc.range,fc.dayOfYear=function(n){var t=fc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=fc[n]=Ht(function(n){return(n=fc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});fc[n+"s"]=e.range,fc[n+"s"].utc=e.utc.range,fc[n+"OfYear"]=function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)}}),fc.week=fc.sunday,fc.weeks=fc.sunday.range,fc.weeks.utc=fc.sunday.utc.range,fc.weekOfYear=fc.sundayOfYear;var pc={"-":"",_:" ",0:"0"},vc=/^\s*\d+/,dc=/^%/;ta.locale=function(n){return{numberFormat:Ut(n),timeFormat:Yt(n)}};var mc=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=mc.numberFormat,ta.geo={},le.prototype={s:0,t:0,add:function(n){se(n,this.t,yc),se(yc.s,this.s,this),this.s?this.t+=yc.t:this.s=yc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var yc=new le;ta.geo.stream=function(n,t){n&&Mc.hasOwnProperty(n.type)?Mc[n.type](n,t):fe(n,t)};var Mc={Feature:function(n,t){fe(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)fe(e[r].geometry,t)}},xc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){he(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t,0)},Polygon:function(n,t){ge(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ge(e[r],t)
},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)fe(e[r],t)}};ta.geo.area=function(n){return bc=0,ta.geo.stream(n,wc),bc};var bc,_c=new le,wc={sphere:function(){bc+=4*Da},point:y,lineStart:y,lineEnd:y,polygonStart:function(){_c.reset(),wc.lineStart=pe},polygonEnd:function(){var n=2*_c;bc+=0>n?4*Da+n:n,wc.lineStart=wc.lineEnd=wc.point=y}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=ve([t*Fa,e*Fa]);if(m){var u=me(m,r),i=[u[1],-u[0],0],o=me(i,u);xe(o),o=be(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ha*l,d=va(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ha;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ha;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=va(r)>180?r+(r>0?360:-360):r}else v=n,d=e;wc.point(n,e),t(n,e)}function i(){wc.lineStart()}function o(){u(v,d),wc.lineEnd(),va(y)>Ta&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,wc.polygonStart()},polygonEnd:function(){wc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>_c?(s=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){Sc=kc=Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,Dc);var t=Lc,e=Tc,r=Rc,u=t*t+e*e+r*r;return Ra>u&&(t=Cc,e=zc,r=qc,Ta>kc&&(t=Ec,e=Ac,r=Nc),u=t*t+e*e+r*r,Ra>u)?[0/0,0/0]:[Math.atan2(e,t)*Ha,tt(r/Math.sqrt(u))*Ha]};var Sc,kc,Ec,Ac,Nc,Cc,zc,qc,Lc,Tc,Rc,Dc={sphere:y,point:we,lineStart:ke,lineEnd:Ee,polygonStart:function(){Dc.lineStart=Ae},polygonEnd:function(){Dc.lineStart=ke}},Pc=Te(Ce,Ue,Fe,[-Da,-Da/2]),Uc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ie(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ze(Ve)}).raw=Ve,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ta,f+.12*l+Ta],[s-.214*l-Ta,f+.234*l-Ta]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ta,f+.166*l+Ta],[s-.115*l-Ta,f+.234*l-Ta]]).stream(c).point,n},n.scale(1070)};var jc,Fc,Hc,Oc,Yc,Ic,Zc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Fc=0,Zc.lineStart=Xe},polygonEnd:function(){Zc.lineStart=Zc.lineEnd=Zc.point=y,jc+=va(Fc/2)}},Vc={point:$e,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},Xc={point:Je,lineStart:Ge,lineEnd:Ke,polygonStart:function(){Xc.lineStart=Qe},polygonEnd:function(){Xc.point=Je,Xc.lineStart=Ge,Xc.lineEnd=Ke}};ta.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return jc=0,ta.geo.stream(n,u(Zc)),jc},n.centroid=function(n){return Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,u(Xc)),Rc?[Lc/Rc,Tc/Rc]:qc?[Cc/qc,zc/qc]:Nc?[Ec/Nc,Ac/Nc]:[0/0,0/0]},n.bounds=function(n){return Yc=Ic=-(Hc=Oc=1/0),ta.geo.stream(n,u(Vc)),[[Hc,Oc],[Yc,Ic]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||er(n):At,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Be:new nr(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new rr(t);for(var r in n)e[r]=n[r];return e}}},rr.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ir,ta.geo.projectionMutator=or,(ta.geo.equirectangular=function(){return ir(cr)}).raw=cr.invert=cr,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t}return n=sr(n[0]%360*Fa,n[1]*Fa,n.length>2?n[2]*Fa:0),t.invert=function(t){return t=n.invert(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t},t},lr.invert=cr,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=sr(-n[0]*Fa,-n[1]*Fa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ha,n[1]*=Ha}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=pr((t=+r)*Fa,u*Fa),n):t},n.precision=function(r){return arguments.length?(e=pr(t*Fa,(u=+r)*Fa),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Fa,u=n[1]*Fa,i=t[1]*Fa,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return va(n%d)>Ta}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return va(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=dr(a,o,90),f=mr(r,e,y),h=dr(l,c,90),g=mr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=yr,u=Mr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return xr(n[0]*Fa,n[1]*Fa,t[0]*Fa,t[1]*Fa)},ta.geo.length=function(n){return $c=0,ta.geo.stream(n,Bc),$c};var $c,Bc={sphere:y,point:y,lineStart:br,lineEnd:y,polygonStart:y,polygonEnd:y},Wc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ir(Wc)}).raw=Wc;var Jc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(ta.geo.azimuthalEquidistant=function(){return ir(Jc)}).raw=Jc,(ta.geo.conicConformal=function(){return Ze(wr)}).raw=wr,(ta.geo.conicEquidistant=function(){return Ze(Sr)}).raw=Sr;var Gc=_r(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ir(Gc)}).raw=Gc,kr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-ja]},(ta.geo.mercator=function(){return Er(kr)}).raw=kr;var Kc=_r(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ir(Kc)}).raw=Kc;var Qc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ir(Qc)}).raw=Qc,Ar.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-ja]},(ta.geo.transverseMercator=function(){var n=Er(Ar),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ar,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(e),i=Et(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(qr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=zr(a),s=zr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Nr,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return xa(n,nl),n};var nl=ta.geom.polygon.prototype=[];nl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},nl.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},nl.clip=function(n){for(var t,e,r,u,i,o,a=Rr(n),c=-1,l=this.length-Rr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Lr(o,s,u)?(Lr(i,s,u)||n.push(Tr(i,o,s,u)),n.push(o)):Lr(i,s,u)&&n.push(Tr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var tl,el,rl,ul,il,ol=[],al=[];Yr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Zr),t.length},nu.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},tu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=iu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,uu(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(uu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?iu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,uu(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ru(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,uu(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ru(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,uu(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return ou(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Nr,u=Cr,i=r,o=u,a=cl;return n?t(n):(t.links=function(n){return ou(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ou(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Zr),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&cu(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(r=n),t):r},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?cl:n,t):a===cl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===cl?null:a&&a[1]},t)};var cl=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(va(c-e)+va(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=fu()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=Et(a),x=Et(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=fu();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){hu(n,k,v,d,m,y)},k.find=function(n){return gu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Nr,c=Cr;return(o=arguments.length)?(a=lu,c=su,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=pu,ta.interpolateObject=vu,ta.interpolateNumber=du,ta.interpolateString=mu;var ll=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sl=new RegExp(ll.source,"g");ta.interpolate=yu,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?tc.has(t)||/^(#|rgb\(|hsl\()/.test(t)?pu:mu:t instanceof ot?pu:Array.isArray(t)?Mu:"object"===e&&isNaN(t)?vu:du)(n,t)}],ta.interpolateArray=Mu;var fl=function(){return At},hl=ta.map({linear:fl,poly:Eu,quad:function(){return wu},cubic:function(){return Su},sin:function(){return Au},exp:function(){return Nu},circle:function(){return Cu},elastic:zu,back:qu,bounce:function(){return Lu}}),gl=ta.map({"in":At,out:bu,"in-out":_u,"out-in":function(n){return _u(bu(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=hl.get(e)||fl,r=gl.get(r)||At,xu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Tu,ta.interpolateHsl=Ru,ta.interpolateLab=Du,ta.interpolateRound=Pu,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Uu(e?e.matrix:pl)})(n)},Uu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var pl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Ou,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Zu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Pa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=vl,h=dl,g=-30,p=ml,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,M,x,b=m.length,_=y.length;for(e=0;_>e;++e)a=y[e],f=a.source,h=a.target,M=h.x-f.x,x=h.y-f.y,(p=M*M+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,M*=p,x*=p,h.x-=M*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=M*(d=1-d),f.y+=x*d);if((d=r*v)&&(M=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(M-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Gu(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(At).on("dragstart.force",$u).on("drag.force",t).on("dragend.force",Bu)),arguments.length?(this.on("mouseover.force",Wu).on("mouseout.force",Ju).call(e),void 0):e},ta.rebind(a,c,"on")};var vl=20,dl=1,ml=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return ni(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ri,e=ti,r=ei;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Qu(t,function(n){n.children&&(n.value=0)}),ni(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Ku(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===yl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=yl,r=0,u=Pa,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var yl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=At,e=ci,r=li,u=ai,i=ii,o=oi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Ml.get(t)||ci,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:xl.get(t)||li,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var Ml=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(si),i=n.map(fi),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":ci}),xl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:li});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=vi,u=gi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=Et(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return pi(n,t)}:Et(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,ni(a,function(n){n.r=+s(n.value)}),ni(a,xi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;ni(a,function(n){n.r+=f}),ni(a,xi),ni(a,function(n){n.r-=f})}return wi(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(di),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Ku(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(ni(h,e),h.parent.m=-h.z,Qu(h,r),l)Qu(f,i);else{var g=f,p=f,v=f;Qu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Qu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ci(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ai(o),u=Ei(u),o&&u;)c=Ei(c),i=Ai(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ni(zi(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ai(i)&&(i.t=o,i.m+=f-s),u&&!Ei(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=ki,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Ku(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;ni(c,function(n){var t=n.children;t&&t.length?(n.x=Li(t),n.y=qi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Ti(c),f=Ri(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return ni(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=ki,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Ku(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Di,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Di(t):Pi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Pi(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Di:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Ku(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;
do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var bl={floor:At,ceil:At};ta.scale.linear=function(){return Ii([0,1],[0,1],yu,!1)};var _l={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Gi(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var wl=ta.format(".0e"),Sl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Ki(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return no([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(kl)},ta.scale.category20=function(){return ta.scale.ordinal().range(El)},ta.scale.category20b=function(){return ta.scale.ordinal().range(Al)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Nl)};var kl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Mt),El=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Mt),Al=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Mt),Nl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Mt);ta.scale.quantile=function(){return to([],[])},ta.scale.quantize=function(){return eo(0,1,[0,1])},ta.scale.threshold=function(){return ro([.5],[0,1])},ta.scale.identity=function(){return uo([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-ja,f=a.apply(this,arguments)-ja,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ua)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===Cl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=tt(d/l*Math.sin(m))),n&&(E=tt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=Da?0:1;if(A&&fo(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=Da?0:1;if(E&&fo(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Tr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=ho(null==S?[_,w]:[S,k],[y,M],l,H,g),Y=ho([x,b],[_,w],l,H,g);p===H?N.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^fo(O[1][0],O[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",H,",",H," 0 0,",v," ",Y[0]):N.push("M",O[0],"A",H,",",H," 0 1,",v," ",Y[0])}else N.push("M",y,",",M);if(null!=S){var I=Math.min(p,(n-F)/(j-1)),Z=ho([y,M],[S,k],n,-I,g),V=ho([_,w],null==x?[y,M]:[x,b],n,-I,g);p===I?N.push("L",V[0],"A",I,",",I," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^fo(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",I,",",I," 0 0,",v," ",Z[0]):N.push("L",V[0],"A",I,",",I," 0 0,",v," ",Z[0])}else N.push("L",_,",",w)}else N.push("M",y,",",M),null!=x&&N.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),N.push("L",_,",",w),null!=S&&N.push("A",n,",",n," 0 ",q,",",1-g," ",S,",",k);return N.push("Z"),N.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=oo,r=ao,u=io,i=Cl,o=co,a=lo,c=so;return n.innerRadius=function(t){return arguments.length?(e=Et(t),n):e},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=Et(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Cl?Cl:Et(t),n):i},n.startAngle=function(t){return arguments.length?(o=Et(t),n):o},n.endAngle=function(t){return arguments.length?(a=Et(t),n):a},n.padAngle=function(t){return arguments.length?(c=Et(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-ja;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Cl="auto";ta.svg.line=function(){return go(At)};var zl=ta.map({linear:po,"linear-closed":vo,step:mo,"step-before":yo,"step-after":Mo,basis:ko,"basis-open":Eo,"basis-closed":Ao,bundle:No,cardinal:_o,"cardinal-open":xo,"cardinal-closed":bo,monotone:Ro});zl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var ql=[0,2/3,1/3,0],Ll=[0,1/3,2/3,0],Tl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=go(Do);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},yo.reverse=Mo,Mo.reverse=yo,ta.svg.area=function(){return Po(At)},ta.svg.area.radial=function(){var n=Po(Do);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-ja,s=l.call(n,u,r)-ja;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=yr,o=Mr,a=Uo,c=co,l=lo;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(l=Et(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=yr,e=Mr,r=jo;return n.source=function(e){return arguments.length?(t=Et(e),n):t},n.target=function(t){return arguments.length?(e=Et(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=jo,e=n.projection;return n.projection=function(n){return arguments.length?e(Fo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(Rl.get(t.call(this,n,r))||Yo)(e.call(this,n,r))}var t=Oo,e=Ho;return n.type=function(e){return arguments.length?(t=Et(e),n):t},n.size=function(t){return arguments.length?(e=Et(t),n):e},n};var Rl=ta.map({circle:Yo,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*jl)),e=t*jl;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Ul),e=t*Ul/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Ul),e=t*Ul/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=Rl.keys();var Dl,Pl,Ul=Math.sqrt(3),jl=Math.tan(30*Fa),Fl=[],Hl=0;Fl.call=ka.call,Fl.empty=ka.empty,Fl.node=ka.node,Fl.size=ka.size,ta.transition=function(n){return arguments.length?Dl?n.transition():n:Na.transition()},ta.transition.prototype=Fl,Fl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=k(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?("__data__"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Io(o,i,u)},Fl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=E(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Io(c,a,o)},Fl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Io(u,this.namespace,this.id)},Fl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):H(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Fl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Ou:yu,a=ta.ns.qualify(n);return Zo(this,"attr."+n,t,a.local?i:u)},Fl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Fl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=oa.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=yu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Zo(this,"style."+n,t,u)},Fl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,oa.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Fl.text=function(n){return Zo(this,"text",n,Vo)},Fl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Fl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),H(this,function(r){r[e][t].ease=n}))},Fl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:H(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Fl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:H(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Fl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Pl,i=Dl;Dl=e,H(this,function(t,u,i){Pl=t[r][e],n.call(t,t.__data__,u,i)}),Pl=u,Dl=i}else H(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Fl.transition=function(){for(var n,t,e,r,u=this.id,i=++Hl,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Io(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=ta.transition(p.exit()).style("opacity",Ta).remove(),m=ta.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,M=ji(f),x=l.selectAll(".domain").data([0]),b=(x.enter().append("path").attr("class","domain"),ta.transition(x));v.append("line"),v.append("text");var _,w,S,k,E=v.select("line"),A=m.select("line"),N=p.select("text").text(g),C=v.select("text"),z=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bo,_="x",S="y",w="x2",k="y2",N.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),b.attr("d","M"+M[0]+","+q*i+"V0H"+M[1]+"V"+q*i)):(n=Wo,_="y",S="x",w="y2",k="x2",N.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),b.attr("d","M"+q*i+","+M[0]+"H0V"+M[1]+"H"+q*i)),E.attr(k,q*u),C.attr(S,q*y),A.attr(w,0).attr(k,q*u),z.attr(_,0).attr(S,q*y),f.rangeBand){var L=f,T=L.rangeBand()/2;s=f=function(n){return L(n)+T}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=Ol,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Yl?t+"":Ol,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ol="bottom",Yl={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(i){i.each(function(){var i=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Il[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=ta.transition(i),h=ta.transition(o);c&&(s=ji(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=ji(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==ta.event.keyCode&&(N||(y=null,z[0]-=s[1],z[1]-=f[1],N=2),b())}function p(){32==ta.event.keyCode&&2==N&&(z[0]+=s[1],z[1]+=f[1],N=0,b())}function v(){var n=ta.mouse(x),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),N||(ta.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:N?"move":"resize"}))}function d(n,t,e){var r,u,a=ji(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return N&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],N?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),C(),w({type:"brushend"})}var y,M,x=this,_=ta.select(ta.event.target),w=a.of(x,arguments),S=ta.select(x),k=_.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,N=_.classed("extent"),C=$(),z=ta.mouse(x),q=ta.select(oa).on("keydown.brush",u).on("keyup.brush",p);if(ta.event.changedTouches?q.on("touchmove.brush",v).on("touchend.brush",m):q.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),N)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var L=+/w$/.test(k),T=+/^n/.test(k);M=[s[1-L]-z[0],f[1-T]-z[1]],z[0]=s[L],z[1]=f[T]}else ta.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Zl[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Dl?ta.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=Mu(s,t.x),r=Mu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Zl[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Zl[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},ta.rebind(n,a,"on")};var Il={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Zl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Vl=fc.format=mc.timeFormat,Xl=Vl.utc,$l=Xl("%Y-%m-%dT%H:%M:%S.%LZ");Vl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jo:$l,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=$l.toString,fc.second=Ht(function(n){return new hc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),fc.seconds=fc.second.range,fc.seconds.utc=fc.second.utc.range,fc.minute=Ht(function(n){return new hc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),fc.minutes=fc.minute.range,fc.minutes.utc=fc.minute.utc.range,fc.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new hc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),fc.hours=fc.hour.range,fc.hours.utc=fc.hour.utc.range,fc.month=Ht(function(n){return n=fc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),fc.months=fc.month.range,fc.months.utc=fc.month.utc.range;var Bl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Wl=[[fc.second,1],[fc.second,5],[fc.second,15],[fc.second,30],[fc.minute,1],[fc.minute,5],[fc.minute,15],[fc.minute,30],[fc.hour,1],[fc.hour,3],[fc.hour,6],[fc.hour,12],[fc.day,1],[fc.day,2],[fc.week,1],[fc.month,1],[fc.month,3],[fc.year,1]],Jl=Vl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ce]]),Gl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:At,ceil:At};Wl.year=fc.year,fc.scale=function(){return Go(ta.scale.linear(),Wl,Jl)};var Kl=Wl.map(function(n){return[n[0].utc,n[1]]}),Ql=Xl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ce]]);Kl.year=fc.year.utc,fc.scale.utc=function(){return Go(ta.scale.linear(),Kl,Ql)},ta.text=Nt(function(n){return n.responseText}),ta.json=function(n,t){return Ct(n,"application/json",Qo,t)},ta.html=function(n,t){return Ct(n,"text/html",na,t)},ta.xml=Nt(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();
!function(a){"use strict";function b(a){this.owner=a}function c(a,b){if(Object.create)b.prototype=Object.create(a.prototype);else{var c=function(){};c.prototype=a.prototype,b.prototype=new c}return b.prototype.constructor=b,b}function d(a){var b=this.internal=new e(this);b.loadConfig(a),b.init(),function c(a,b,d){Object.keys(a).forEach(function(e){b[e]=a[e].bind(d),Object.keys(a[e]).length>0&&c(a[e],b[e],d)})}(h,this,this)}function e(b){var c=this;c.d3=a.d3?a.d3:"undefined"!=typeof require?require("d3"):void 0,c.api=b,c.config=c.getDefaultConfig(),c.data={},c.cache={},c.axes={}}function f(a){b.call(this,a)}function g(a,b){function c(a,b){a.attr("transform",function(a){return"translate("+Math.ceil(b(a)+u)+", 0)"})}function d(a,b){a.attr("transform",function(a){return"translate(0,"+Math.ceil(b(a))+")"})}function e(a){var b=a[0],c=a[a.length-1];return c>b?[b,c]:[c,b]}function f(a){var b,c,d=[];if(a.ticks)return a.ticks.apply(a,n);for(c=a.domain(),b=Math.ceil(c[0]);b<c[1];b++)d.push(b);return d.length>0&&d[0]>0&&d.unshift(d[0]-(d[1]-d[0])),d}function g(){var a,c=p.copy();return b.isCategory&&(a=p.domain(),c.domain([a[0],a[1]-1])),c}function h(a){var b=m?m(a):a;return"undefined"!=typeof b?b:""}function i(a){if(z)return z;var b={h:11.5,w:5.5};return a.select("text").text(h).each(function(a){var c=this.getBoundingClientRect(),d=h(a),e=c.height,f=d?c.width/d.length:void 0;e&&f&&(b.h=e,b.w=f)}).text(""),z=b,b}function j(c){return b.withoutTransition?c:a.transition(c)}function k(m){m.each(function(){function m(a,c){function d(a,b){f=void 0;for(var h=1;h<b.length;h++)if(" "===b.charAt(h)&&(f=h),e=b.substr(0,h+1),g=U.w*e.length,g>c)return d(a.concat(b.substr(0,f?f:h)),b.slice(f?f+1:h));return a.concat(b)}var e,f,g,i=h(a),j=[];return"[object Array]"===Object.prototype.toString.call(i)?i:((!c||0>=c)&&(c=X?95:b.isCategory?Math.ceil(F(G[1])-F(G[0]))-12:110),d(j,i+""))}function n(a,b){var c=U.h;return 0===b&&(c="left"===q||"right"===q?-((V[a.index]-1)*(U.h/2)-3):".71em"),c}function v(a){var b=p(a)+(o?0:u);return L[0]<b&&b<L[1]?r:0}function w(a){return a?a>0?"start":"end":"middle"}function x(a){return a?"rotate("+a+")":""}function y(a){return a?8*Math.sin(Math.PI*(a/180)):0}function z(a){return a?11.5-2.5*(a/15)*(a>0?1:-1):W}var A,B,C,D=k.g=a.select(this),E=this.__chart__||p,F=this.__chart__=g(),G=t?t:f(F),H=D.selectAll(".tick").data(G,F),I=H.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),J=H.exit().remove(),K=j(H).style("opacity",1),L=p.rangeExtent?p.rangeExtent():e(p.range()),M=D.selectAll(".domain").data([0]),N=(M.enter().append("path").attr("class","domain"),j(M));I.append("line"),I.append("text");var O=I.select("line"),P=K.select("line"),Q=I.select("text"),R=K.select("text");b.isCategory?(u=Math.ceil((F(1)-F(0))/2),B=o?0:u,C=o?u:0):u=B=0;var S,T,U=i(D.select(".tick")),V=[],W=Math.max(r,0)+s,X="left"===q||"right"===q;S=H.select("text"),T=S.selectAll("tspan").data(function(a,c){var d=b.tickMultiline?m(a,b.tickWidth):[].concat(h(a));return V[c]=d.length,d.map(function(a){return{index:c,splitted:a}})}),T.enter().append("tspan"),T.exit().remove(),T.text(function(a){return a.splitted});var Y=b.tickTextRotate;switch(q){case"bottom":A=c,O.attr("y2",r),Q.attr("y",W),P.attr("x1",B).attr("x2",B).attr("y2",v),R.attr("x",0).attr("y",z(Y)).style("text-anchor",w(Y)).attr("transform",x(Y)),T.attr("x",0).attr("dy",n).attr("dx",y(Y)),N.attr("d","M"+L[0]+","+l+"V0H"+L[1]+"V"+l);break;case"top":A=c,O.attr("y2",-r),Q.attr("y",-W),P.attr("x2",0).attr("y2",-r),R.attr("x",0).attr("y",-W),S.style("text-anchor","middle"),T.attr("x",0).attr("dy","0em"),N.attr("d","M"+L[0]+","+-l+"V0H"+L[1]+"V"+-l);break;case"left":A=d,O.attr("x2",-r),Q.attr("x",-W),P.attr("x2",-r).attr("y1",C).attr("y2",C),R.attr("x",-W).attr("y",u),S.style("text-anchor","end"),T.attr("x",-W).attr("dy",n),N.attr("d","M"+-l+","+L[0]+"H0V"+L[1]+"H"+-l);break;case"right":A=d,O.attr("x2",r),Q.attr("x",W),P.attr("x2",r).attr("y2",0),R.attr("x",W).attr("y",0),S.style("text-anchor","start"),T.attr("x",W).attr("dy",n),N.attr("d","M"+l+","+L[0]+"H0V"+L[1]+"H"+l)}if(F.rangeBand){var Z=F,$=Z.rangeBand()/2;E=F=function(a){return Z(a)+$}}else E.rangeBand?E=F:J.call(A,F);I.call(A,E),K.call(A,F)})}var l,m,n,o,p=a.scale.linear(),q="bottom",r=6,s=3,t=null,u=0,v=!0;return b=b||{},l=b.withOuterTick?6:0,k.scale=function(a){return arguments.length?(p=a,k):p},k.orient=function(a){return arguments.length?(q=a in{top:1,right:1,bottom:1,left:1}?a+"":"bottom",k):q},k.tickFormat=function(a){return arguments.length?(m=a,k):m},k.tickCentered=function(a){return arguments.length?(o=a,k):o},k.tickOffset=function(){return u},k.tickInterval=function(){var a,c;return b.isCategory?a=2*u:(c=k.g.select("path.domain").node().getTotalLength()-2*l,a=c/k.g.selectAll("line").size()),1/0===a?0:a},k.ticks=function(){return arguments.length?(n=arguments,k):n},k.tickCulling=function(a){return arguments.length?(v=a,k):v},k.tickValues=function(a){if("function"==typeof a)t=function(){return a(p.domain())};else{if(!arguments.length)return t;t=a}return k},k}var h,i,j,k={version:"0.4.10"};k.generate=function(a){return new d(a)},k.chart={fn:d.prototype,internal:{fn:e.prototype,axis:{fn:f.prototype}}},h=k.chart.fn,i=k.chart.internal.fn,j=k.chart.internal.axis.fn,i.init=function(){var a=this,b=a.config;if(a.initParams(),b.data_url)a.convertUrlToData(b.data_url,b.data_mimeType,b.data_keys,a.initWithData);else if(b.data_json)a.initWithData(a.convertJsonToData(b.data_json,b.data_keys));else if(b.data_rows)a.initWithData(a.convertRowsToData(b.data_rows));else{if(!b.data_columns)throw Error("url or json or rows or columns is required.");a.initWithData(a.convertColumnsToData(b.data_columns))}},i.initParams=function(){var a=this,b=a.d3,c=a.config;a.clipId="c3-"+ +new Date+"-clip",a.clipIdForXAxis=a.clipId+"-xaxis",a.clipIdForYAxis=a.clipId+"-yaxis",a.clipIdForGrid=a.clipId+"-grid",a.clipIdForSubchart=a.clipId+"-subchart",a.clipPath=a.getClipPath(a.clipId),a.clipPathForXAxis=a.getClipPath(a.clipIdForXAxis),a.clipPathForYAxis=a.getClipPath(a.clipIdForYAxis),a.clipPathForGrid=a.getClipPath(a.clipIdForGrid),a.clipPathForSubchart=a.getClipPath(a.clipIdForSubchart),a.dragStart=null,a.dragging=!1,a.flowing=!1,a.cancelClick=!1,a.mouseover=!1,a.transiting=!1,a.color=a.generateColor(),a.levelColor=a.generateLevelColor(),a.dataTimeFormat=c.data_xLocaltime?b.time.format:b.time.format.utc,a.axisTimeFormat=c.axis_x_localtime?b.time.format:b.time.format.utc,a.defaultAxisTimeFormat=a.axisTimeFormat.multi([[".%L",function(a){return a.getMilliseconds()}],[":%S",function(a){return a.getSeconds()}],["%I:%M",function(a){return a.getMinutes()}],["%I %p",function(a){return a.getHours()}],["%-m/%-d",function(a){return a.getDay()&&1!==a.getDate()}],["%-m/%-d",function(a){return 1!==a.getDate()}],["%-m/%-d",function(a){return a.getMonth()}],["%Y/%-m/%-d",function(){return!0}]]),a.hiddenTargetIds=[],a.hiddenLegendIds=[],a.focusedTargetIds=[],a.defocusedTargetIds=[],a.xOrient=c.axis_rotated?"left":"bottom",a.yOrient=c.axis_rotated?c.axis_y_inner?"top":"bottom":c.axis_y_inner?"right":"left",a.y2Orient=c.axis_rotated?c.axis_y2_inner?"bottom":"top":c.axis_y2_inner?"left":"right",a.subXOrient=c.axis_rotated?"left":"bottom",a.isLegendRight="right"===c.legend_position,a.isLegendInset="inset"===c.legend_position,a.isLegendTop="top-left"===c.legend_inset_anchor||"top-right"===c.legend_inset_anchor,a.isLegendLeft="top-left"===c.legend_inset_anchor||"bottom-left"===c.legend_inset_anchor,a.legendStep=0,a.legendItemWidth=0,a.legendItemHeight=0,a.currentMaxTickWidths={x:0,y:0,y2:0},a.rotated_padding_left=30,a.rotated_padding_right=c.axis_rotated&&!c.axis_x_show?0:30,a.rotated_padding_top=5,a.withoutFadeIn={},a.intervalForObserveInserted=void 0,a.axes.subx=b.selectAll([])},i.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},i.initWithData=function(b){var c,d,e=this,g=e.d3,h=e.config,i=!0;e.axis=new f(e),e.initPie&&e.initPie(),e.initBrush&&e.initBrush(),e.initZoom&&e.initZoom(),e.selectChart=h.bindto?"function"==typeof h.bindto.node?h.bindto:g.select(h.bindto):g.selectAll([]),e.selectChart.empty()&&(e.selectChart=g.select(document.createElement("div")).style("opacity",0),e.observeInserted(e.selectChart),i=!1),e.selectChart.html("").classed("c3",!0),e.data.xs={},e.data.targets=e.convertDataToTargets(b),h.data_filter&&(e.data.targets=e.data.targets.filter(h.data_filter)),h.data_hide&&e.addHiddenTargetIds(h.data_hide===!0?e.mapToIds(e.data.targets):h.data_hide),h.legend_hide&&e.addHiddenLegendIds(h.legend_hide===!0?e.mapToIds(e.data.targets):h.legend_hide),e.hasType("gauge")&&(h.legend_show=!1),e.updateSizes(),e.updateScales(),e.x.domain(g.extent(e.getXDomain(e.data.targets))),e.y.domain(e.getYDomain(e.data.targets,"y")),e.y2.domain(e.getYDomain(e.data.targets,"y2")),e.subX.domain(e.x.domain()),e.subY.domain(e.y.domain()),e.subY2.domain(e.y2.domain()),e.orgXDomain=e.x.domain(),e.brush&&e.brush.scale(e.subX),h.zoom_enabled&&e.zoom.scale(e.x),e.svg=e.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return h.onmouseover.call(e)}).on("mouseleave",function(){return h.onmouseout.call(e)}),c=e.svg.append("defs"),e.clipChart=e.appendClip(c,e.clipId),e.clipXAxis=e.appendClip(c,e.clipIdForXAxis),e.clipYAxis=e.appendClip(c,e.clipIdForYAxis),e.clipGrid=e.appendClip(c,e.clipIdForGrid),e.clipSubchart=e.appendClip(c,e.clipIdForSubchart),e.updateSvgSize(),d=e.main=e.svg.append("g").attr("transform",e.getTranslate("main")),e.initSubchart&&e.initSubchart(),e.initTooltip&&e.initTooltip(),e.initLegend&&e.initLegend(),d.append("text").attr("class",l.text+" "+l.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),e.initRegion(),e.initGrid(),d.append("g").attr("clip-path",e.clipPath).attr("class",l.chart),h.grid_lines_front&&e.initGridLines(),e.initEventRect(),e.initChartElements(),d.insert("rect",h.zoom_privileged?null:"g."+l.regions).attr("class",l.zoomRect).attr("width",e.width).attr("height",e.height).style("opacity",0).on("dblclick.zoom",null),h.axis_x_extent&&e.brush.extent(e.getDefaultExtent()),e.axis.init(),e.updateTargets(e.data.targets),i&&(e.updateDimension(),e.config.oninit.call(e),e.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),null==a.onresize&&(a.onresize=e.generateResize()),a.onresize.add&&(a.onresize.add(function(){h.onresize.call(e)}),a.onresize.add(function(){e.api.flush()}),a.onresize.add(function(){h.onresized.call(e)})),e.api.element=e.selectChart.node()},i.smoothLines=function(a,b){var c=this;"grid"===b&&a.each(function(){var a=c.d3.select(this),b=a.attr("x1"),d=a.attr("x2"),e=a.attr("y1"),f=a.attr("y2");a.attr({x1:Math.ceil(b),x2:Math.ceil(d),y1:Math.ceil(e),y2:Math.ceil(f)})})},i.updateSizes=function(){var a=this,b=a.config,c=a.legend?a.getLegendHeight():0,d=a.legend?a.getLegendWidth():0,e=a.isLegendRight||a.isLegendInset?0:c,f=a.hasArcType(),g=b.axis_rotated||f?0:a.getHorizontalAxisHeight("x"),h=b.subchart_show&&!f?b.subchart_size_height+g:0;a.currentWidth=a.getCurrentWidth(),a.currentHeight=a.getCurrentHeight(),a.margin=b.axis_rotated?{top:a.getHorizontalAxisHeight("y2")+a.getCurrentPaddingTop(),right:f?0:a.getCurrentPaddingRight(),bottom:a.getHorizontalAxisHeight("y")+e+a.getCurrentPaddingBottom(),left:h+(f?0:a.getCurrentPaddingLeft())}:{top:4+a.getCurrentPaddingTop(),right:f?0:a.getCurrentPaddingRight(),bottom:g+h+e+a.getCurrentPaddingBottom(),left:f?0:a.getCurrentPaddingLeft()},a.margin2=b.axis_rotated?{top:a.margin.top,right:0/0,bottom:20+e,left:a.rotated_padding_left}:{top:a.currentHeight-h-e,right:0/0,bottom:g+e,left:a.margin.left},a.margin3={top:0,right:0/0,bottom:0,left:0},a.updateSizeForLegend&&a.updateSizeForLegend(c,d),a.width=a.currentWidth-a.margin.left-a.margin.right,a.height=a.currentHeight-a.margin.top-a.margin.bottom,a.width<0&&(a.width=0),a.height<0&&(a.height=0),a.width2=b.axis_rotated?a.margin.left-a.rotated_padding_left-a.rotated_padding_right:a.width,a.height2=b.axis_rotated?a.height:a.currentHeight-a.margin2.top-a.margin2.bottom,a.width2<0&&(a.width2=0),a.height2<0&&(a.height2=0),a.arcWidth=a.width-(a.isLegendRight?d+10:0),a.arcHeight=a.height-(a.isLegendRight?0:10),a.hasType("gauge")&&(a.arcHeight+=a.height-a.getGaugeLabelHeight()),a.updateRadius&&a.updateRadius(),a.isLegendRight&&f&&(a.margin3.left=a.arcWidth/2+1.1*a.radiusExpanded)},i.updateTargets=function(a){var b=this;b.updateTargetsForText(a),b.updateTargetsForBar(a),b.updateTargetsForLine(a),b.hasArcType()&&b.updateTargetsForArc&&b.updateTargetsForArc(a),b.updateTargetsForSubchart&&b.updateTargetsForSubchart(a),b.showTargets()},i.showTargets=function(){var a=this;a.svg.selectAll("."+l.target).filter(function(b){return a.isTargetToShow(b.id)}).transition().duration(a.config.transition_duration).style("opacity",1)},i.redraw=function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o,p,q,r,s,t,u,v,x,y,z,A,B,C,D,E,F,G,H=this,I=H.main,J=H.d3,K=H.config,L=H.getShapeIndices(H.isAreaType),M=H.getShapeIndices(H.isBarType),N=H.getShapeIndices(H.isLineType),O=H.hasArcType(),P=H.filterTargetsToShow(H.data.targets),Q=H.xv.bind(H);if(a=a||{},c=w(a,"withY",!0),d=w(a,"withSubchart",!0),e=w(a,"withTransition",!0),h=w(a,"withTransform",!1),i=w(a,"withUpdateXDomain",!1),j=w(a,"withUpdateOrgXDomain",!1),k=w(a,"withTrimXDomain",!0),p=w(a,"withUpdateXAxis",i),m=w(a,"withLegend",!1),n=w(a,"withEventRect",!0),o=w(a,"withDimension",!0),f=w(a,"withTransitionForExit",e),g=w(a,"withTransitionForAxis",e),v=e?K.transition_duration:0,x=f?v:0,y=g?v:0,b=b||H.axis.generateTransitions(y),m&&K.legend_show?H.updateLegend(H.mapToIds(H.data.targets),a,b):o&&H.updateDimension(!0),H.isCategorized()&&0===P.length&&H.x.domain([0,H.axes.x.selectAll(".tick").size()]),P.length?(H.updateXDomain(P,i,j,k),K.axis_x_tick_values||(B=H.axis.updateXAxisTickValues(P))):(H.xAxis.tickValues([]),H.subXAxis.tickValues([])),K.zoom_rescale&&!a.flow&&(E=H.x.orgDomain()),H.y.domain(H.getYDomain(P,"y",E)),H.y2.domain(H.getYDomain(P,"y2",E)),!K.axis_y_tick_values&&K.axis_y_tick_count&&H.yAxis.tickValues(H.axis.generateTickValues(H.y.domain(),K.axis_y_tick_count)),!K.axis_y2_tick_values&&K.axis_y2_tick_count&&H.y2Axis.tickValues(H.axis.generateTickValues(H.y2.domain(),K.axis_y2_tick_count)),H.axis.redraw(b,O),H.axis.updateLabels(e),(i||p)&&P.length)if(K.axis_x_tick_culling&&B){for(C=1;C<B.length;C++)if(B.length/C<K.axis_x_tick_culling_max){D=C;break}H.svg.selectAll("."+l.axisX+" .tick text").each(function(a){var b=B.indexOf(a);b>=0&&J.select(this).style("display",b%D?"none":"block")})}else H.svg.selectAll("."+l.axisX+" .tick text").style("display","block");q=H.generateDrawArea?H.generateDrawArea(L,!1):void 0,r=H.generateDrawBar?H.generateDrawBar(M):void 0,s=H.generateDrawLine?H.generateDrawLine(N,!1):void 0,t=H.generateXYForText(L,M,N,!0),u=H.generateXYForText(L,M,N,!1),c&&(H.subY.domain(H.getYDomain(P,"y")),H.subY2.domain(H.getYDomain(P,"y2"))),H.tooltip.style("display","none"),H.updateXgridFocus(),I.select("text."+l.text+"."+l.empty).attr("x",H.width/2).attr("y",H.height/2).text(K.data_empty_label_text).transition().style("opacity",P.length?0:1),H.updateGrid(v),H.updateRegion(v),H.updateBar(x),H.updateLine(x),H.updateArea(x),H.updateCircle(),H.hasDataLabel()&&H.updateText(x),H.redrawArc&&H.redrawArc(v,x,h),H.redrawSubchart&&H.redrawSubchart(d,b,v,x,L,M,N),I.selectAll("."+l.selectedCircles).filter(H.isBarType.bind(H)).selectAll("circle").remove(),K.interaction_enabled&&!a.flow&&n&&(H.redrawEventRect(),H.updateZoom&&H.updateZoom()),H.updateCircleY(),F=(H.config.axis_rotated?H.circleY:H.circleX).bind(H),G=(H.config.axis_rotated?H.circleX:H.circleY).bind(H),a.flow&&(A=H.generateFlow({targets:P,flow:a.flow,duration:a.flow.duration,drawBar:r,drawLine:s,drawArea:q,cx:F,cy:G,xv:Q,xForText:t,yForText:u})),(v||A)&&H.isTabVisible()?J.transition().duration(v).each(function(){var b=[];[H.redrawBar(r,!0),H.redrawLine(s,!0),H.redrawArea(q,!0),H.redrawCircle(F,G,!0),H.redrawText(t,u,a.flow,!0),H.redrawRegion(!0),H.redrawGrid(!0)].forEach(function(a){a.forEach(function(a){b.push(a)})}),z=H.generateWait(),b.forEach(function(a){z.add(a)})}).call(z,function(){A&&A(),K.onrendered&&K.onrendered.call(H)}):(H.redrawBar(r),H.redrawLine(s),H.redrawArea(q),H.redrawCircle(F,G),H.redrawText(t,u,a.flow),H.redrawRegion(),H.redrawGrid(),K.onrendered&&K.onrendered.call(H)),H.mapToIds(H.data.targets).forEach(function(a){H.withoutFadeIn[a]=!0})},i.updateAndRedraw=function(a){var b,c=this,d=c.config;a=a||{},a.withTransition=w(a,"withTransition",!0),a.withTransform=w(a,"withTransform",!1),a.withLegend=w(a,"withLegend",!1),a.withUpdateXDomain=!0,a.withUpdateOrgXDomain=!0,a.withTransitionForExit=!1,a.withTransitionForTransform=w(a,"withTransitionForTransform",a.withTransition),c.updateSizes(),a.withLegend&&d.legend_show||(b=c.axis.generateTransitions(a.withTransitionForAxis?d.transition_duration:0),c.updateScales(),c.updateSvgSize(),c.transformAll(a.withTransitionForTransform,b)),c.redraw(a,b)},i.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},i.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},i.isCategorized=function(){return this.config.axis_x_type.indexOf("categor")>=0},i.isCustomX=function(){var a=this,b=a.config;return!a.isTimeSeries()&&(b.data_x||v(b.data_xs))},i.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},i.getTranslate=function(a){var b,c,d=this,e=d.config;return"main"===a?(b=s(d.margin.left),c=s(d.margin.top)):"context"===a?(b=s(d.margin2.left),c=s(d.margin2.top)):"legend"===a?(b=d.margin3.left,c=d.margin3.top):"x"===a?(b=0,c=e.axis_rotated?0:d.height):"y"===a?(b=0,c=e.axis_rotated?d.height:0):"y2"===a?(b=e.axis_rotated?0:d.width,c=e.axis_rotated?1:0):"subx"===a?(b=0,c=e.axis_rotated?0:d.height2):"arc"===a&&(b=d.arcWidth/2,c=d.arcHeight/2),"translate("+b+","+c+")"},i.initialOpacity=function(a){return null!==a.value&&this.withoutFadeIn[a.id]?1:0},i.initialOpacityForCircle=function(a){return null!==a.value&&this.withoutFadeIn[a.id]?this.opacityForCircle(a):0},i.opacityForCircle=function(a){var b=this.config.point_show?1:0;return m(a.value)?this.isScatterType(a)?.5:b:0},i.opacityForText=function(){return this.hasDataLabel()?1:0},i.xx=function(a){return a?this.x(a.x):null},i.xv=function(a){var b=this,c=a.value;return b.isTimeSeries()?c=b.parseDate(a.value):b.isCategorized()&&"string"==typeof a.value&&(c=b.config.axis_x_categories.indexOf(a.value)),Math.ceil(b.x(c))},i.yv=function(a){var b=this,c=a.axis&&"y2"===a.axis?b.y2:b.y;return Math.ceil(c(a.value))},i.subxx=function(a){return a?this.subX(a.x):null},i.transformMain=function(a,b){var c,d,e,f=this;b&&b.axisX?c=b.axisX:(c=f.main.select("."+l.axisX),a&&(c=c.transition())),b&&b.axisY?d=b.axisY:(d=f.main.select("."+l.axisY),a&&(d=d.transition())),b&&b.axisY2?e=b.axisY2:(e=f.main.select("."+l.axisY2),a&&(e=e.transition())),(a?f.main.transition():f.main).attr("transform",f.getTranslate("main")),c.attr("transform",f.getTranslate("x")),d.attr("transform",f.getTranslate("y")),e.attr("transform",f.getTranslate("y2")),f.main.select("."+l.chartArcs).attr("transform",f.getTranslate("arc"))},i.transformAll=function(a,b){var c=this;c.transformMain(a,b),c.config.subchart_show&&c.transformContext(a,b),c.legend&&c.transformLegend(a)},i.updateSvgSize=function(){var a=this,b=a.svg.select(".c3-brush .background");a.svg.attr("width",a.currentWidth).attr("height",a.currentHeight),a.svg.selectAll(["#"+a.clipId,"#"+a.clipIdForGrid]).select("rect").attr("width",a.width).attr("height",a.height),a.svg.select("#"+a.clipIdForXAxis).select("rect").attr("x",a.getXAxisClipX.bind(a)).attr("y",a.getXAxisClipY.bind(a)).attr("width",a.getXAxisClipWidth.bind(a)).attr("height",a.getXAxisClipHeight.bind(a)),a.svg.select("#"+a.clipIdForYAxis).select("rect").attr("x",a.getYAxisClipX.bind(a)).attr("y",a.getYAxisClipY.bind(a)).attr("width",a.getYAxisClipWidth.bind(a)).attr("height",a.getYAxisClipHeight.bind(a)),a.svg.select("#"+a.clipIdForSubchart).select("rect").attr("width",a.width).attr("height",b.size()?b.attr("height"):0),a.svg.select("."+l.zoomRect).attr("width",a.width).attr("height",a.height),a.selectChart.style("max-height",a.currentHeight+"px")},i.updateDimension=function(a){var b=this;a||(b.config.axis_rotated?(b.axes.x.call(b.xAxis),b.axes.subx.call(b.subXAxis)):(b.axes.y.call(b.yAxis),b.axes.y2.call(b.y2Axis))),b.updateSizes(),b.updateScales(),b.updateSvgSize(),b.transformAll(!1)},i.observeInserted=function(b){var c,d=this;return"undefined"==typeof MutationObserver?void a.console.error("MutationObserver not defined."):(c=new MutationObserver(function(e){e.forEach(function(e){"childList"===e.type&&e.previousSibling&&(c.disconnect(),d.intervalForObserveInserted=a.setInterval(function(){b.node().parentNode&&(a.clearInterval(d.intervalForObserveInserted),d.updateDimension(),d.config.oninit.call(d),d.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),b.transition().style("opacity",1))},10))})}),void c.observe(b.node(),{attributes:!0,childList:!0,characterData:!0}))},i.generateResize=function(){function a(){b.forEach(function(a){a()})}var b=[];return a.add=function(a){b.push(a)},a},i.endall=function(a,b){var c=0;a.each(function(){++c}).each("end",function(){--c||b.apply(this,arguments)})},i.generateWait=function(){var a=[],b=function(b,c){var d=setInterval(function(){var b=0;a.forEach(function(a){if(a.empty())return void(b+=1);try{a.transition()}catch(c){b+=1}}),b===a.length&&(clearInterval(d),c&&c())},10)};return b.add=function(b){a.push(b)},b},i.parseDate=function(b){var c,d=this;return b instanceof Date?c=b:"string"==typeof b?c=d.dataTimeFormat(d.config.data_xFormat).parse(b):"number"!=typeof b&&isNaN(b)||(c=new Date(+b)),(!c||isNaN(+c))&&a.console.error("Failed to parse x '"+b+"' to Date object"),c},i.isTabVisible=function(){var a;return"undefined"!=typeof document.hidden?a="hidden":"undefined"!=typeof document.mozHidden?a="mozHidden":"undefined"!=typeof document.msHidden?a="msHidden":"undefined"!=typeof document.webkitHidden&&(a="webkitHidden"),document[a]?!1:!0},i.getDefaultConfig=function(){var a={bindto:"#chart",size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,zoom_enabled:!1,zoom_extent:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(a){return a},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_extent:void 0,axis_x_label:{},axis_y_show:!0,axis_y_type:void 0,axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_count:void 0,axis_y_tick_time_value:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,area_zerobased:!0,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_expand:!0,gauge_label_show:!0,gauge_label_format:void 0,gauge_expand:!0,gauge_min:0,gauge_max:100,gauge_units:void 0,gauge_width:void 0,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_width:void 0,donut_expand:!0,donut_title:"",regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:function(a,b,c,d){return this.getTooltipContent?this.getTooltipContent(a,b,c,d):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"}};return Object.keys(this.additionalConfig).forEach(function(b){a[b]=this.additionalConfig[b]},this),a},i.additionalConfig={},i.loadConfig=function(a){function b(){var a=d.shift();return a&&c&&"object"==typeof c&&a in c?(c=c[a],b()):a?void 0:c}var c,d,e,f=this.config;Object.keys(f).forEach(function(g){c=a,d=g.split("_"),e=b(),q(e)&&(f[g]=e)})},i.getScale=function(a,b,c){return(c?this.d3.time.scale():this.d3.scale.linear()).range([a,b])},i.getX=function(a,b,c,d){var e,f=this,g=f.getScale(a,b,f.isTimeSeries()),h=c?g.domain(c):g;f.isCategorized()?(d=d||function(){return 0},g=function(a,b){var c=h(a)+d(a);return b?c:Math.ceil(c)}):g=function(a,b){var c=h(a);return b?c:Math.ceil(c)};for(e in h)g[e]=h[e];return g.orgDomain=function(){return h.domain()},f.isCategorized()&&(g.domain=function(a){return arguments.length?(h.domain(a),g):(a=this.orgDomain(),[a[0],a[1]+1])}),g},i.getY=function(a,b,c){var d=this.getScale(a,b,this.isTimeSeriesY());return c&&d.domain(c),d},i.getYScale=function(a){return"y2"===this.axis.getId(a)?this.y2:this.y},i.getSubYScale=function(a){return"y2"===this.axis.getId(a)?this.subY2:this.subY},i.updateScales=function(){var a=this,b=a.config,c=!a.x;a.xMin=b.axis_rotated?1:0,a.xMax=b.axis_rotated?a.height:a.width,a.yMin=b.axis_rotated?0:a.height,a.yMax=b.axis_rotated?a.width:1,a.subXMin=a.xMin,a.subXMax=a.xMax,a.subYMin=b.axis_rotated?0:a.height2,a.subYMax=b.axis_rotated?a.width2:1,a.x=a.getX(a.xMin,a.xMax,c?void 0:a.x.orgDomain(),function(){return a.xAxis.tickOffset()}),a.y=a.getY(a.yMin,a.yMax,c?b.axis_y_default:a.y.domain()),a.y2=a.getY(a.yMin,a.yMax,c?b.axis_y2_default:a.y2.domain()),a.subX=a.getX(a.xMin,a.xMax,a.orgXDomain,function(b){return b%1?0:a.subXAxis.tickOffset()}),a.subY=a.getY(a.subYMin,a.subYMax,c?b.axis_y_default:a.subY.domain()),a.subY2=a.getY(a.subYMin,a.subYMax,c?b.axis_y2_default:a.subY2.domain()),a.xAxisTickFormat=a.axis.getXAxisTickFormat(),a.xAxisTickValues=a.axis.getXAxisTickValues(),a.yAxisTickValues=a.axis.getYAxisTickValues(),a.y2AxisTickValues=a.axis.getY2AxisTickValues(),a.xAxis=a.axis.getXAxis(a.x,a.xOrient,a.xAxisTickFormat,a.xAxisTickValues,b.axis_x_tick_outer),a.subXAxis=a.axis.getXAxis(a.subX,a.subXOrient,a.xAxisTickFormat,a.xAxisTickValues,b.axis_x_tick_outer),a.yAxis=a.axis.getYAxis(a.y,a.yOrient,b.axis_y_tick_format,a.yAxisTickValues,b.axis_y_tick_outer),a.y2Axis=a.axis.getYAxis(a.y2,a.y2Orient,b.axis_y2_tick_format,a.y2AxisTickValues,b.axis_y2_tick_outer),c||(a.brush&&a.brush.scale(a.subX),b.zoom_enabled&&a.zoom.scale(a.x)),a.updateArc&&a.updateArc()},i.getYDomainMin=function(a){var b,c,d,e,f,g,h=this,i=h.config,j=h.mapToIds(a),k=h.getValuesAsIdKeyed(a);if(i.data_groups.length>0)for(g=h.hasNegativeValueInTargets(a),b=0;b<i.data_groups.length;b++)if(e=i.data_groups[b].filter(function(a){return j.indexOf(a)>=0}),0!==e.length)for(d=e[0],g&&k[d]&&k[d].forEach(function(a,b){k[d][b]=0>a?a:0}),c=1;c<e.length;c++)f=e[c],k[f]&&k[f].forEach(function(a,b){h.axis.getId(f)!==h.axis.getId(d)||!k[d]||g&&+a>0||(k[d][b]+=+a)});return h.d3.min(Object.keys(k).map(function(a){return h.d3.min(k[a])}))},i.getYDomainMax=function(a){var b,c,d,e,f,g,h=this,i=h.config,j=h.mapToIds(a),k=h.getValuesAsIdKeyed(a);if(i.data_groups.length>0)for(g=h.hasPositiveValueInTargets(a),b=0;b<i.data_groups.length;b++)if(e=i.data_groups[b].filter(function(a){return j.indexOf(a)>=0}),0!==e.length)for(d=e[0],g&&k[d]&&k[d].forEach(function(a,b){k[d][b]=a>0?a:0}),c=1;c<e.length;c++)f=e[c],k[f]&&k[f].forEach(function(a,b){h.axis.getId(f)!==h.axis.getId(d)||!k[d]||g&&0>+a||(k[d][b]+=+a)});return h.d3.max(Object.keys(k).map(function(a){return h.d3.max(k[a])}))},i.getYDomain=function(a,b,c){var d,e,f,g,h,i,j,k,l,n,o,p=this,q=p.config,r=a.filter(function(a){return p.axis.getId(a.id)===b}),s=c?p.filterByXDomain(r,c):r,u="y2"===b?q.axis_y2_min:q.axis_y_min,w="y2"===b?q.axis_y2_max:q.axis_y_max,x=p.getYDomainMin(s),y=p.getYDomainMax(s),z="y2"===b?q.axis_y2_center:q.axis_y_center,A=p.hasType("bar",s)&&q.bar_zerobased||p.hasType("area",s)&&q.area_zerobased,B="y2"===b?q.axis_y2_inverted:q.axis_y_inverted,C=p.hasDataLabel()&&q.axis_rotated,D=p.hasDataLabel()&&!q.axis_rotated;return x=m(u)?u:m(w)?w>x?x:w-10:x,y=m(w)?w:m(u)?y>u?y:u+10:y,0===s.length?"y2"===b?p.y2.domain():p.y.domain():(isNaN(x)&&(x=0),isNaN(y)&&(y=x),x===y&&(0>x?y=0:x=0),n=x>=0&&y>=0,o=0>=x&&0>=y,(m(u)&&n||m(w)&&o)&&(A=!1),A&&(n&&(x=0),o&&(y=0)),e=Math.abs(y-x),f=g=h=.1*e,"undefined"!=typeof z&&(i=Math.max(Math.abs(x),Math.abs(y)),y=z+i,x=z-i),C?(j=p.getDataLabelLength(x,y,"width"),k=t(p.y.range()),l=[j[0]/k,j[1]/k],g+=e*(l[1]/(1-l[0]-l[1])),h+=e*(l[0]/(1-l[0]-l[1]))):D&&(j=p.getDataLabelLength(x,y,"height"),g+=p.axis.convertPixelsToAxisPadding(j[1],e),h+=p.axis.convertPixelsToAxisPadding(j[0],e)),"y"===b&&v(q.axis_y_padding)&&(g=p.axis.getPadding(q.axis_y_padding,"top",g,e),h=p.axis.getPadding(q.axis_y_padding,"bottom",h,e)),"y2"===b&&v(q.axis_y2_padding)&&(g=p.axis.getPadding(q.axis_y2_padding,"top",g,e),h=p.axis.getPadding(q.axis_y2_padding,"bottom",h,e)),A&&(n&&(h=x),o&&(g=-y)),d=[x-h,y+g],B?d.reverse():d)},i.getXDomainMin=function(a){var b=this,c=b.config;return q(c.axis_x_min)?b.isTimeSeries()?this.parseDate(c.axis_x_min):c.axis_x_min:b.d3.min(a,function(a){return b.d3.min(a.values,function(a){return a.x})})},i.getXDomainMax=function(a){var b=this,c=b.config;return q(c.axis_x_max)?b.isTimeSeries()?this.parseDate(c.axis_x_max):c.axis_x_max:b.d3.max(a,function(a){return b.d3.max(a.values,function(a){return a.x})})},i.getXDomainPadding=function(a){var b,c,d,e,f=this,g=f.config,h=a[1]-a[0];return f.isCategorized()?c=0:f.hasType("bar")?(b=f.getMaxDataCount(),c=b>1?h/(b-1)/2:.5):c=.01*h,"object"==typeof g.axis_x_padding&&v(g.axis_x_padding)?(d=m(g.axis_x_padding.left)?g.axis_x_padding.left:c,e=m(g.axis_x_padding.right)?g.axis_x_padding.right:c):d=e="number"==typeof g.axis_x_padding?g.axis_x_padding:c,{left:d,right:e}},i.getXDomain=function(a){var b=this,c=[b.getXDomainMin(a),b.getXDomainMax(a)],d=c[0],e=c[1],f=b.getXDomainPadding(c),g=0,h=0;
return d-e!==0||b.isCategorized()||(b.isTimeSeries()?(d=new Date(.5*d.getTime()),e=new Date(1.5*e.getTime())):(d=0===d?1:.5*d,e=0===e?-1:1.5*e)),(d||0===d)&&(g=b.isTimeSeries()?new Date(d.getTime()-f.left):d-f.left),(e||0===e)&&(h=b.isTimeSeries()?new Date(e.getTime()+f.right):e+f.right),[g,h]},i.updateXDomain=function(a,b,c,d,e){var f=this,g=f.config;return c&&(f.x.domain(e?e:f.d3.extent(f.getXDomain(a))),f.orgXDomain=f.x.domain(),g.zoom_enabled&&f.zoom.scale(f.x).updateScaleExtent(),f.subX.domain(f.x.domain()),f.brush&&f.brush.scale(f.subX)),b&&(f.x.domain(e?e:!f.brush||f.brush.empty()?f.orgXDomain:f.brush.extent()),g.zoom_enabled&&f.zoom.scale(f.x).updateScaleExtent()),d&&f.x.domain(f.trimXDomain(f.x.orgDomain())),f.x.domain()},i.trimXDomain=function(a){var b=this;return a[0]<=b.orgXDomain[0]&&(a[1]=+a[1]+(b.orgXDomain[0]-a[0]),a[0]=b.orgXDomain[0]),b.orgXDomain[1]<=a[1]&&(a[0]=+a[0]-(a[1]-b.orgXDomain[1]),a[1]=b.orgXDomain[1]),a},i.isX=function(a){var b=this,c=b.config;return c.data_x&&a===c.data_x||v(c.data_xs)&&x(c.data_xs,a)},i.isNotX=function(a){return!this.isX(a)},i.getXKey=function(a){var b=this,c=b.config;return c.data_x?c.data_x:v(c.data_xs)?c.data_xs[a]:null},i.getXValuesOfXKey=function(a,b){var c,d=this,e=b&&v(b)?d.mapToIds(b):[];return e.forEach(function(b){d.getXKey(b)===a&&(c=d.data.xs[b])}),c},i.getIndexByX=function(a){var b=this,c=b.filterByX(b.data.targets,a);return c.length?c[0].index:null},i.getXValue=function(a,b){var c=this;return a in c.data.xs&&c.data.xs[a]&&m(c.data.xs[a][b])?c.data.xs[a][b]:b},i.getOtherTargetXs=function(){var a=this,b=Object.keys(a.data.xs);return b.length?a.data.xs[b[0]]:null},i.getOtherTargetX=function(a){var b=this.getOtherTargetXs();return b&&a<b.length?b[a]:null},i.addXs=function(a){var b=this;Object.keys(a).forEach(function(c){b.config.data_xs[c]=a[c]})},i.hasMultipleX=function(a){return this.d3.set(Object.keys(a).map(function(b){return a[b]})).size()>1},i.isMultipleX=function(){return v(this.config.data_xs)||!this.config.data_xSort||this.hasType("scatter")},i.addName=function(a){var b,c=this;return a&&(b=c.config.data_names[a.id],a.name=b?b:a.id),a},i.getValueOnIndex=function(a,b){var c=a.filter(function(a){return a.index===b});return c.length?c[0]:null},i.updateTargetX=function(a,b){var c=this;a.forEach(function(a){a.values.forEach(function(d,e){d.x=c.generateTargetX(b[e],a.id,e)}),c.data.xs[a.id]=b})},i.updateTargetXs=function(a,b){var c=this;a.forEach(function(a){b[a.id]&&c.updateTargetX([a],b[a.id])})},i.generateTargetX=function(a,b,c){var d,e=this;return d=e.isTimeSeries()?e.parseDate(a?a:e.getXValue(b,c)):e.isCustomX()&&!e.isCategorized()?m(a)?+a:e.getXValue(b,c):c},i.cloneTarget=function(a){return{id:a.id,id_org:a.id_org,values:a.values.map(function(a){return{x:a.x,value:a.value,id:a.id}})}},i.updateXs=function(){var a=this;a.data.targets.length&&(a.xs=[],a.data.targets[0].values.forEach(function(b){a.xs[b.index]=b.x}))},i.getPrevX=function(a){var b=this.xs[a-1];return"undefined"!=typeof b?b:null},i.getNextX=function(a){var b=this.xs[a+1];return"undefined"!=typeof b?b:null},i.getMaxDataCount=function(){var a=this;return a.d3.max(a.data.targets,function(a){return a.values.length})},i.getMaxDataCountTarget=function(a){var b,c=a.length,d=0;return c>1?a.forEach(function(a){a.values.length>d&&(b=a,d=a.values.length)}):b=c?a[0]:null,b},i.getEdgeX=function(a){var b=this;return a.length?[b.d3.min(a,function(a){return a.values[0].x}),b.d3.max(a,function(a){return a.values[a.values.length-1].x})]:[0,0]},i.mapToIds=function(a){return a.map(function(a){return a.id})},i.mapToTargetIds=function(a){var b=this;return a?o(a)?[a]:a:b.mapToIds(b.data.targets)},i.hasTarget=function(a,b){var c,d=this.mapToIds(a);for(c=0;c<d.length;c++)if(d[c]===b)return!0;return!1},i.isTargetToShow=function(a){return this.hiddenTargetIds.indexOf(a)<0},i.isLegendToShow=function(a){return this.hiddenLegendIds.indexOf(a)<0},i.filterTargetsToShow=function(a){var b=this;return a.filter(function(a){return b.isTargetToShow(a.id)})},i.mapTargetsToUniqueXs=function(a){var b=this,c=b.d3.set(b.d3.merge(a.map(function(a){return a.values.map(function(a){return+a.x})}))).values();return c.map(b.isTimeSeries()?function(a){return new Date(+a)}:function(a){return+a})},i.addHiddenTargetIds=function(a){this.hiddenTargetIds=this.hiddenTargetIds.concat(a)},i.removeHiddenTargetIds=function(a){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(b){return a.indexOf(b)<0})},i.addHiddenLegendIds=function(a){this.hiddenLegendIds=this.hiddenLegendIds.concat(a)},i.removeHiddenLegendIds=function(a){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(b){return a.indexOf(b)<0})},i.getValuesAsIdKeyed=function(a){var b={};return a.forEach(function(a){b[a.id]=[],a.values.forEach(function(c){b[a.id].push(c.value)})}),b},i.checkValueInTargets=function(a,b){var c,d,e,f=Object.keys(a);for(c=0;c<f.length;c++)for(e=a[f[c]].values,d=0;d<e.length;d++)if(b(e[d].value))return!0;return!1},i.hasNegativeValueInTargets=function(a){return this.checkValueInTargets(a,function(a){return 0>a})},i.hasPositiveValueInTargets=function(a){return this.checkValueInTargets(a,function(a){return a>0})},i.isOrderDesc=function(){var a=this.config;return"string"==typeof a.data_order&&"desc"===a.data_order.toLowerCase()},i.isOrderAsc=function(){var a=this.config;return"string"==typeof a.data_order&&"asc"===a.data_order.toLowerCase()},i.orderTargets=function(a){var b=this,c=b.config,d=b.isOrderAsc(),e=b.isOrderDesc();return d||e?a.sort(function(a,b){var c=function(a,b){return a+Math.abs(b.value)},e=a.values.reduce(c,0),f=b.values.reduce(c,0);return d?f-e:e-f}):n(c.data_order)&&a.sort(c.data_order),a},i.filterByX=function(a,b){return this.d3.merge(a.map(function(a){return a.values})).filter(function(a){return a.x-b===0})},i.filterRemoveNull=function(a){return a.filter(function(a){return m(a.value)})},i.filterByXDomain=function(a,b){return a.map(function(a){return{id:a.id,id_org:a.id_org,values:a.values.filter(function(a){return b[0]<=a.x&&a.x<=b[1]})}})},i.hasDataLabel=function(){var a=this.config;return"boolean"==typeof a.data_labels&&a.data_labels?!0:"object"==typeof a.data_labels&&v(a.data_labels)?!0:!1},i.getDataLabelLength=function(a,b,c){var d=this,e=[0,0],f=1.3;return d.selectChart.select("svg").selectAll(".dummy").data([a,b]).enter().append("text").text(function(a){return d.dataLabelFormat(a.id)(a)}).each(function(a,b){e[b]=this.getBoundingClientRect()[c]*f}).remove(),e},i.isNoneArc=function(a){return this.hasTarget(this.data.targets,a.id)},i.isArc=function(a){return"data"in a&&this.hasTarget(this.data.targets,a.data.id)},i.findSameXOfValues=function(a,b){var c,d=a[b].x,e=[];for(c=b-1;c>=0&&d===a[c].x;c--)e.push(a[c]);for(c=b;c<a.length&&d===a[c].x;c++)e.push(a[c]);return e},i.findClosestFromTargets=function(a,b){var c,d=this;return c=a.map(function(a){return d.findClosest(a.values,b)}),d.findClosest(c,b)},i.findClosest=function(a,b){var c,d=this,e=100;return a.filter(function(a){return a&&d.isBarType(a.id)}).forEach(function(a){var b=d.main.select("."+l.bars+d.getTargetSelectorSuffix(a.id)+" ."+l.bar+"-"+a.index).node();!c&&d.isWithinBar(b)&&(c=a)}),a.filter(function(a){return a&&!d.isBarType(a.id)}).forEach(function(a){var f=d.dist(a,b);e>f&&(e=f,c=a)}),c},i.dist=function(a,b){var c=this,d=c.config,e=d.axis_rotated?1:0,f=d.axis_rotated?0:1,g=c.circleY(a,a.index),h=c.x(a.x);return Math.pow(h-b[e],2)+Math.pow(g-b[f],2)},i.convertValuesToStep=function(a){var b,c=[].concat(a);if(!this.isCategorized())return a;for(b=a.length+1;b>0;b--)c[b]=c[b-1];return c[0]={x:c[0].x-1,value:c[0].value,id:c[0].id},c[a.length+1]={x:c[a.length].x+1,value:c[a.length].value,id:c[a.length].id},c},i.updateDataAttributes=function(a,b){var c=this,d=c.config,e=d["data_"+a];return"undefined"==typeof b?e:(Object.keys(b).forEach(function(a){e[a]=b[a]}),c.redraw({withLegend:!0}),e)},i.convertUrlToData=function(a,b,c,d){var e=this,f=b?b:"csv";e.d3.xhr(a,function(a,b){var g;if(!b)throw new Error(a.responseURL+" "+a.status+" ("+a.statusText+")");g="json"===f?e.convertJsonToData(JSON.parse(b.response),c):"tsv"===f?e.convertTsvToData(b.response):e.convertCsvToData(b.response),d.call(e,g)})},i.convertXsvToData=function(a,b){var c,d=b.parseRows(a);return 1===d.length?(c=[{}],d[0].forEach(function(a){c[0][a]=null})):c=b.parse(a),c},i.convertCsvToData=function(a){return this.convertXsvToData(a,this.d3.csv)},i.convertTsvToData=function(a){return this.convertXsvToData(a,this.d3.tsv)},i.convertJsonToData=function(a,b){var c,d,e=this,f=[];return b?(b.x?(c=b.value.concat(b.x),e.config.data_x=b.x):c=b.value,f.push(c),a.forEach(function(a){var b=[];c.forEach(function(c){var d=p(a[c])?null:a[c];b.push(d)}),f.push(b)}),d=e.convertRowsToData(f)):(Object.keys(a).forEach(function(b){f.push([b].concat(a[b]))}),d=e.convertColumnsToData(f)),d},i.convertRowsToData=function(a){var b,c,d=a[0],e={},f=[];for(b=1;b<a.length;b++){for(e={},c=0;c<a[b].length;c++){if(p(a[b][c]))throw new Error("Source data is missing a component at ("+b+","+c+")!");e[d[c]]=a[b][c]}f.push(e)}return f},i.convertColumnsToData=function(a){var b,c,d,e=[];for(b=0;b<a.length;b++)for(d=a[b][0],c=1;c<a[b].length;c++){if(p(e[c-1])&&(e[c-1]={}),p(a[b][c]))throw new Error("Source data is missing a component at ("+b+","+c+")!");e[c-1][d]=a[b][c]}return e},i.convertDataToTargets=function(a,b){var c,d=this,e=d.config,f=d.d3.keys(a[0]).filter(d.isNotX,d),g=d.d3.keys(a[0]).filter(d.isX,d);return f.forEach(function(c){var f=d.getXKey(c);d.isCustomX()||d.isTimeSeries()?g.indexOf(f)>=0?d.data.xs[c]=(b&&d.data.xs[c]?d.data.xs[c]:[]).concat(a.map(function(a){return a[f]}).filter(m).map(function(a,b){return d.generateTargetX(a,c,b)})):e.data_x?d.data.xs[c]=d.getOtherTargetXs():v(e.data_xs)&&(d.data.xs[c]=d.getXValuesOfXKey(f,d.data.targets)):d.data.xs[c]=a.map(function(a,b){return b})}),f.forEach(function(a){if(!d.data.xs[a])throw new Error('x is not defined for id = "'+a+'".')}),c=f.map(function(b,c){var f=e.data_idConverter(b);return{id:f,id_org:b,values:a.map(function(a,g){var h=d.getXKey(b),i=a[h],j=d.generateTargetX(i,b,g);return d.isCustomX()&&d.isCategorized()&&0===c&&i&&(0===g&&(e.axis_x_categories=[]),e.axis_x_categories.push(i)),(p(a[b])||d.data.xs[b].length<=g)&&(j=void 0),{x:j,value:null===a[b]||isNaN(a[b])?null:+a[b],id:f}}).filter(function(a){return q(a.x)})}}),c.forEach(function(a){var b;e.data_xSort&&(a.values=a.values.sort(function(a,b){var c=a.x||0===a.x?a.x:1/0,d=b.x||0===b.x?b.x:1/0;return c-d})),b=0,a.values.forEach(function(a){a.index=b++}),d.data.xs[a.id].sort(function(a,b){return a-b})}),e.data_type&&d.setTargetType(d.mapToIds(c).filter(function(a){return!(a in e.data_types)}),e.data_type),c.forEach(function(a){d.addCache(a.id_org,a)}),c},i.load=function(a,b){var c=this;a&&(b.filter&&(a=a.filter(b.filter)),(b.type||b.types)&&a.forEach(function(a){var d=b.types&&b.types[a.id]?b.types[a.id]:b.type;c.setTargetType(a.id,d)}),c.data.targets.forEach(function(b){for(var c=0;c<a.length;c++)if(b.id===a[c].id){b.values=a[c].values,a.splice(c,1);break}}),c.data.targets=c.data.targets.concat(a)),c.updateTargets(c.data.targets),c.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),b.done&&b.done()},i.loadFromArgs=function(a){var b=this;a.data?b.load(b.convertDataToTargets(a.data),a):a.url?b.convertUrlToData(a.url,a.mimeType,a.keys,function(c){b.load(b.convertDataToTargets(c),a)}):a.json?b.load(b.convertDataToTargets(b.convertJsonToData(a.json,a.keys)),a):a.rows?b.load(b.convertDataToTargets(b.convertRowsToData(a.rows)),a):a.columns?b.load(b.convertDataToTargets(b.convertColumnsToData(a.columns)),a):b.load(null,a)},i.unload=function(a,b){var c=this;return b||(b=function(){}),a=a.filter(function(a){return c.hasTarget(c.data.targets,a)}),a&&0!==a.length?(c.svg.selectAll(a.map(function(a){return c.selectorTarget(a)})).transition().style("opacity",0).remove().call(c.endall,b),void a.forEach(function(a){c.withoutFadeIn[a]=!1,c.legend&&c.legend.selectAll("."+l.legendItem+c.getTargetSelectorSuffix(a)).remove(),c.data.targets=c.data.targets.filter(function(b){return b.id!==a})})):void b()},i.categoryName=function(a){var b=this.config;return a<b.axis_x_categories.length?b.axis_x_categories[a]:a},i.initEventRect=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.eventRects).style("fill-opacity",0)},i.redrawEventRect=function(){var a,b,c=this,d=c.config,e=c.isMultipleX(),f=c.main.select("."+l.eventRects).style("cursor",d.zoom_enabled?d.axis_rotated?"ns-resize":"ew-resize":null).classed(l.eventRectsMultiple,e).classed(l.eventRectsSingle,!e);f.selectAll("."+l.eventRect).remove(),c.eventRect=f.selectAll("."+l.eventRect),e?(a=c.eventRect.data([0]),c.generateEventRectsForMultipleXs(a.enter()),c.updateEventRect(a)):(b=c.getMaxDataCountTarget(c.data.targets),f.datum(b?b.values:[]),c.eventRect=f.selectAll("."+l.eventRect),a=c.eventRect.data(function(a){return a}),c.generateEventRectsForSingleX(a.enter()),c.updateEventRect(a),a.exit().remove())},i.updateEventRect=function(a){var b,c,d,e,f,g,h=this,i=h.config;a=a||h.eventRect.data(function(a){return a}),h.isMultipleX()?(b=0,c=0,d=h.width,e=h.height):(!h.isCustomX()&&!h.isTimeSeries()||h.isCategorized()?(f=h.getEventRectWidth(),g=function(a){return h.x(a.x)-f/2}):(h.updateXs(),f=function(a){var b=h.getPrevX(a.index),c=h.getNextX(a.index);return null===b&&null===c?i.axis_rotated?h.height:h.width:(null===b&&(b=h.x.domain()[0]),null===c&&(c=h.x.domain()[1]),Math.max(0,(h.x(c)-h.x(b))/2))},g=function(a){var b=h.getPrevX(a.index),c=h.getNextX(a.index),d=h.data.xs[a.id][a.index];return null===b&&null===c?0:(null===b&&(b=h.x.domain()[0]),(h.x(d)+h.x(b))/2)}),b=i.axis_rotated?0:g,c=i.axis_rotated?g:0,d=i.axis_rotated?h.width:f,e=i.axis_rotated?f:h.height),a.attr("class",h.classEvent.bind(h)).attr("x",b).attr("y",c).attr("width",d).attr("height",e)},i.generateEventRectsForSingleX=function(a){var b=this,c=b.d3,d=b.config;a.append("rect").attr("class",b.classEvent.bind(b)).style("cursor",d.data_selection_enabled&&d.data_selection_grouped?"pointer":null).on("mouseover",function(a){var c=a.index;b.dragging||b.flowing||b.hasArcType()||(d.point_focus_expand_enabled&&b.expandCircles(c,null,!0),b.expandBars(c,null,!0),b.main.selectAll("."+l.shape+"-"+c).each(function(a){d.data_onmouseover.call(b.api,a)}))}).on("mouseout",function(a){var c=a.index;b.config&&(b.hasArcType()||(b.hideXGridFocus(),b.hideTooltip(),b.unexpandCircles(),b.unexpandBars(),b.main.selectAll("."+l.shape+"-"+c).each(function(a){d.data_onmouseout.call(b.api,a)})))}).on("mousemove",function(a){var e,f=a.index,g=b.svg.select("."+l.eventRect+"-"+f);b.dragging||b.flowing||b.hasArcType()||(b.isStepType(a)&&"step-after"===b.config.line_step_type&&c.mouse(this)[0]<b.x(b.getXValue(a.id,f))&&(f-=1),e=b.filterTargetsToShow(b.data.targets).map(function(a){return b.addName(b.getValueOnIndex(a.values,f))}),d.tooltip_grouped&&(b.showTooltip(e,this),b.showXGridFocus(e)),(!d.tooltip_grouped||d.data_selection_enabled&&!d.data_selection_grouped)&&b.main.selectAll("."+l.shape+"-"+f).each(function(){c.select(this).classed(l.EXPANDED,!0),d.data_selection_enabled&&g.style("cursor",d.data_selection_grouped?"pointer":null),d.tooltip_grouped||(b.hideXGridFocus(),b.hideTooltip(),d.data_selection_grouped||(b.unexpandCircles(f),b.unexpandBars(f)))}).filter(function(a){return b.isWithinShape(this,a)}).each(function(a){d.data_selection_enabled&&(d.data_selection_grouped||d.data_selection_isselectable(a))&&g.style("cursor","pointer"),d.tooltip_grouped||(b.showTooltip([a],this),b.showXGridFocus([a]),d.point_focus_expand_enabled&&b.expandCircles(f,a.id,!0),b.expandBars(f,a.id,!0))}))}).on("click",function(a){var e=a.index;if(!b.hasArcType()&&b.toggleShape){if(b.cancelClick)return void(b.cancelClick=!1);b.isStepType(a)&&"step-after"===d.line_step_type&&c.mouse(this)[0]<b.x(b.getXValue(a.id,e))&&(e-=1),b.main.selectAll("."+l.shape+"-"+e).each(function(a){(d.data_selection_grouped||b.isWithinShape(this,a))&&(b.toggleShape(this,a,e),b.config.data_onclick.call(b.api,a,this))})}}).call(d.data_selection_draggable&&b.drag?c.behavior.drag().origin(Object).on("drag",function(){b.drag(c.mouse(this))}).on("dragstart",function(){b.dragstart(c.mouse(this))}).on("dragend",function(){b.dragend()}):function(){})},i.generateEventRectsForMultipleXs=function(a){function b(){c.svg.select("."+l.eventRect).style("cursor",null),c.hideXGridFocus(),c.hideTooltip(),c.unexpandCircles(),c.unexpandBars()}var c=this,d=c.d3,e=c.config;a.append("rect").attr("x",0).attr("y",0).attr("width",c.width).attr("height",c.height).attr("class",l.eventRect).on("mouseout",function(){c.config&&(c.hasArcType()||b())}).on("mousemove",function(){var a,f,g,h,i=c.filterTargetsToShow(c.data.targets);if(!c.dragging&&!c.hasArcType(i)){if(a=d.mouse(this),f=c.findClosestFromTargets(i,a),!c.mouseover||f&&f.id===c.mouseover.id||(e.data_onmouseout.call(c.api,c.mouseover),c.mouseover=void 0),!f)return void b();g=c.isScatterType(f)||!e.tooltip_grouped?[f]:c.filterByX(i,f.x),h=g.map(function(a){return c.addName(a)}),c.showTooltip(h,this),e.point_focus_expand_enabled&&c.expandCircles(f.index,f.id,!0),c.expandBars(f.index,f.id,!0),c.showXGridFocus(h),(c.isBarType(f.id)||c.dist(f,a)<100)&&(c.svg.select("."+l.eventRect).style("cursor","pointer"),c.mouseover||(e.data_onmouseover.call(c.api,f),c.mouseover=f))}}).on("click",function(){var a,b,f=c.filterTargetsToShow(c.data.targets);c.hasArcType(f)||(a=d.mouse(this),b=c.findClosestFromTargets(f,a),b&&(c.isBarType(b.id)||c.dist(b,a)<100)&&c.main.selectAll("."+l.shapes+c.getTargetSelectorSuffix(b.id)).selectAll("."+l.shape+"-"+b.index).each(function(){(e.data_selection_grouped||c.isWithinShape(this,b))&&(c.toggleShape(this,b,b.index),c.config.data_onclick.call(c.api,b,this))}))}).call(e.data_selection_draggable&&c.drag?d.behavior.drag().origin(Object).on("drag",function(){c.drag(d.mouse(this))}).on("dragstart",function(){c.dragstart(d.mouse(this))}).on("dragend",function(){c.dragend()}):function(){})},i.dispatchEvent=function(b,c,d){var e=this,f="."+l.eventRect+(e.isMultipleX()?"":"-"+c),g=e.main.select(f).node(),h=g.getBoundingClientRect(),i=h.left+(d?d[0]:0),j=h.top+(d?d[1]:0),k=document.createEvent("MouseEvents");k.initMouseEvent(b,!0,!0,a,0,i,j,i,j,!1,!1,!1,!1,0,null),g.dispatchEvent(k)},i.getCurrentWidth=function(){var a=this,b=a.config;return b.size_width?b.size_width:a.getParentWidth()},i.getCurrentHeight=function(){var a=this,b=a.config,c=b.size_height?b.size_height:a.getParentHeight();return c>0?c:320/(a.hasType("gauge")?2:1)},i.getCurrentPaddingTop=function(){var a=this.config;return m(a.padding_top)?a.padding_top:0},i.getCurrentPaddingBottom=function(){var a=this.config;return m(a.padding_bottom)?a.padding_bottom:0},i.getCurrentPaddingLeft=function(a){var b=this,c=b.config;return m(c.padding_left)?c.padding_left:c.axis_rotated?c.axis_x_show?Math.max(r(b.getAxisWidthByAxisId("x",a)),40):1:!c.axis_y_show||c.axis_y_inner?b.axis.getYAxisLabelPosition().isOuter?30:1:r(b.getAxisWidthByAxisId("y",a))},i.getCurrentPaddingRight=function(){var a=this,b=a.config,c=10,d=a.isLegendRight?a.getLegendWidth()+20:0;return m(b.padding_right)?b.padding_right+1:b.axis_rotated?c+d:!b.axis_y2_show||b.axis_y2_inner?2+d+(a.axis.getY2AxisLabelPosition().isOuter?20:0):r(a.getAxisWidthByAxisId("y2"))+d},i.getParentRectValue=function(a){for(var b,c=this.selectChart.node();c&&"BODY"!==c.tagName;){try{b=c.getBoundingClientRect()[a]}catch(d){"width"===a&&(b=c.offsetWidth)}if(b)break;c=c.parentNode}return b},i.getParentWidth=function(){return this.getParentRectValue("width")},i.getParentHeight=function(){var a=this.selectChart.style("height");return a.indexOf("px")>0?+a.replace("px",""):0},i.getSvgLeft=function(a){var b=this,c=b.config,d=c.axis_rotated||!c.axis_rotated&&!c.axis_y_inner,e=c.axis_rotated?l.axisX:l.axisY,f=b.main.select("."+e).node(),g=f&&d?f.getBoundingClientRect():{right:0},h=b.selectChart.node().getBoundingClientRect(),i=b.hasArcType(),j=g.right-h.left-(i?0:b.getCurrentPaddingLeft(a));return j>0?j:0},i.getAxisWidthByAxisId=function(a,b){var c=this,d=c.axis.getLabelPositionById(a);return c.axis.getMaxTickWidth(a,b)+(d.isInner?20:40)},i.getHorizontalAxisHeight=function(a){var b=this,c=b.config,d=30;return"x"!==a||c.axis_x_show?"x"===a&&c.axis_x_height?c.axis_x_height:"y"!==a||c.axis_y_show?"y2"!==a||c.axis_y2_show?("x"===a&&!c.axis_rotated&&c.axis_x_tick_rotate&&(d=30+b.axis.getMaxTickWidth(a)*Math.cos(Math.PI*(90-c.axis_x_tick_rotate)/180)),d+(b.axis.getLabelPositionById(a).isInner?0:10)+("y2"===a?-10:0)):b.rotated_padding_top:!c.legend_show||b.isLegendRight||b.isLegendInset?1:10:8},i.getEventRectWidth=function(){return Math.max(0,this.xAxis.tickInterval())},i.getShapeIndices=function(a){var b,c,d=this,e=d.config,f={},g=0;return d.filterTargetsToShow(d.data.targets.filter(a,d)).forEach(function(a){for(b=0;b<e.data_groups.length;b++)if(!(e.data_groups[b].indexOf(a.id)<0))for(c=0;c<e.data_groups[b].length;c++)if(e.data_groups[b][c]in f){f[a.id]=f[e.data_groups[b][c]];break}p(f[a.id])&&(f[a.id]=g++)}),f.__max__=g-1,f},i.getShapeX=function(a,b,c,d){var e=this,f=d?e.subX:e.x;return function(d){var e=d.id in c?c[d.id]:0;return d.x||0===d.x?f(d.x)-a*(b/2-e):0}},i.getShapeY=function(a){var b=this;return function(c){var d=a?b.getSubYScale(c.id):b.getYScale(c.id);return d(c.value)}},i.getShapeOffset=function(a,b,c){var d=this,e=d.orderTargets(d.filterTargetsToShow(d.data.targets.filter(a,d))),f=e.map(function(a){return a.id});return function(a,g){var h=c?d.getSubYScale(a.id):d.getYScale(a.id),i=h(0),j=i;return e.forEach(function(c){var e=d.isStepType(a)?d.convertValuesToStep(c.values):c.values;c.id!==a.id&&b[c.id]===b[a.id]&&f.indexOf(c.id)<f.indexOf(a.id)&&e[g].value*a.value>=0&&(j+=h(e[g].value)-i)}),j}},i.isWithinShape=function(a,b){var c,d=this,e=d.d3.select(a);return d.isTargetToShow(b.id)?"circle"===a.nodeName?c=d.isStepType(b)?d.isWithinStep(a,d.getYScale(b.id)(b.value)):d.isWithinCircle(a,1.5*d.pointSelectR(b)):"path"===a.nodeName&&(c=e.classed(l.bar)?d.isWithinBar(a):!0):c=!1,c},i.getInterpolate=function(a){var b=this;return b.isSplineType(a)?"cardinal":b.isStepType(a)?b.config.line_step_type:"linear"},i.initLine=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.chartLines)},i.updateTargetsForLine=function(a){var b,c,d=this,e=d.config,f=d.classChartLine.bind(d),g=d.classLines.bind(d),h=d.classAreas.bind(d),i=d.classCircles.bind(d),j=d.classFocus.bind(d);b=d.main.select("."+l.chartLines).selectAll("."+l.chartLine).data(a).attr("class",function(a){return f(a)+j(a)}),c=b.enter().append("g").attr("class",f).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",g),c.append("g").attr("class",h),c.append("g").attr("class",function(a){return d.generateClass(l.selectedCircles,a.id)}),c.append("g").attr("class",i).style("cursor",function(a){return e.data_selection_isselectable(a)?"pointer":null}),a.forEach(function(a){d.main.selectAll("."+l.selectedCircles+d.getTargetSelectorSuffix(a.id)).selectAll("."+l.selectedCircle).each(function(b){b.value=a.values[b.index].value})})},i.updateLine=function(a){var b=this;b.mainLine=b.main.selectAll("."+l.lines).selectAll("."+l.line).data(b.lineData.bind(b)),b.mainLine.enter().append("path").attr("class",b.classLine.bind(b)).style("stroke",b.color),b.mainLine.style("opacity",b.initialOpacity.bind(b)).style("shape-rendering",function(a){return b.isStepType(a)?"crispEdges":""}).attr("transform",null),b.mainLine.exit().transition().duration(a).style("opacity",0).remove()},i.redrawLine=function(a,b){return[(b?this.mainLine.transition():this.mainLine).attr("d",a).style("stroke",this.color).style("opacity",1)]},i.generateDrawLine=function(a,b){var c=this,d=c.config,e=c.d3.svg.line(),f=c.generateGetLinePoints(a,b),g=b?c.getSubYScale:c.getYScale,h=function(a){return(b?c.subxx:c.xx).call(c,a)},i=function(a,b){return d.data_groups.length>0?f(a,b)[0][1]:g.call(c,a.id)(a.value)};return e=d.axis_rotated?e.x(i).y(h):e.x(h).y(i),d.line_connectNull||(e=e.defined(function(a){return null!=a.value})),function(a){var f,h=d.line_connectNull?c.filterRemoveNull(a.values):a.values,i=b?c.x:c.subX,j=g.call(c,a.id),k=0,l=0;return c.isLineType(a)?d.data_regions[a.id]?f=c.lineWithRegions(h,i,j,d.data_regions[a.id]):(c.isStepType(a)&&(h=c.convertValuesToStep(h)),f=e.interpolate(c.getInterpolate(a))(h)):(h[0]&&(k=i(h[0].x),l=j(h[0].value)),f=d.axis_rotated?"M "+l+" "+k:"M "+k+" "+l),f?f:"M 0 0"}},i.generateGetLinePoints=function(a,b){var c=this,d=c.config,e=a.__max__+1,f=c.getShapeX(0,e,a,!!b),g=c.getShapeY(!!b),h=c.getShapeOffset(c.isLineType,a,!!b),i=b?c.getSubYScale:c.getYScale;return function(a,b){var e=i.call(c,a.id)(0),j=h(a,b)||e,k=f(a),l=g(a);return d.axis_rotated&&(0<a.value&&e>l||a.value<0&&l>e)&&(l=e),[[k,l-(e-j)],[k,l-(e-j)],[k,l-(e-j)],[k,l-(e-j)]]}},i.lineWithRegions=function(a,b,c,d){function e(a,b){var c;for(c=0;c<b.length;c++)if(b[c].start<a&&a<=b[c].end)return!0;return!1}function f(a){return"M"+a[0][0]+" "+a[0][1]+" "+a[1][0]+" "+a[1][1]}var g,h,i,j,k,l,m,n,o,r,s,t,u=this,v=u.config,w=-1,x="M",y=u.isCategorized()?.5:0,z=[];if(q(d))for(g=0;g<d.length;g++)z[g]={},z[g].start=p(d[g].start)?a[0].x:u.isTimeSeries()?u.parseDate(d[g].start):d[g].start,z[g].end=p(d[g].end)?a[a.length-1].x:u.isTimeSeries()?u.parseDate(d[g].end):d[g].end;for(s=v.axis_rotated?function(a){return c(a.value)}:function(a){return b(a.x)},t=v.axis_rotated?function(a){return b(a.x)}:function(a){return c(a.value)},i=u.isTimeSeries()?function(a,d,e,g){var h,i=a.x.getTime(),j=d.x-a.x,l=new Date(i+j*e),m=new Date(i+j*(e+g));return h=v.axis_rotated?[[c(k(e)),b(l)],[c(k(e+g)),b(m)]]:[[b(l),c(k(e))],[b(m),c(k(e+g))]],f(h)}:function(a,d,e,g){var h;return h=v.axis_rotated?[[c(k(e),!0),b(j(e))],[c(k(e+g),!0),b(j(e+g))]]:[[b(j(e),!0),c(k(e))],[b(j(e+g),!0),c(k(e+g))]],f(h)},g=0;g<a.length;g++){if(p(z)||!e(a[g].x,z))x+=" "+s(a[g])+" "+t(a[g]);else for(j=u.getScale(a[g-1].x+y,a[g].x+y,u.isTimeSeries()),k=u.getScale(a[g-1].value,a[g].value),l=b(a[g].x)-b(a[g-1].x),m=c(a[g].value)-c(a[g-1].value),n=Math.sqrt(Math.pow(l,2)+Math.pow(m,2)),o=2/n,r=2*o,h=o;1>=h;h+=r)x+=i(a[g-1],a[g],h,o);w=a[g].x}return x},i.updateArea=function(a){var b=this,c=b.d3;b.mainArea=b.main.selectAll("."+l.areas).selectAll("."+l.area).data(b.lineData.bind(b)),b.mainArea.enter().append("path").attr("class",b.classArea.bind(b)).style("fill",b.color).style("opacity",function(){return b.orgAreaOpacity=+c.select(this).style("opacity"),0}),b.mainArea.style("opacity",b.orgAreaOpacity),b.mainArea.exit().transition().duration(a).style("opacity",0).remove()},i.redrawArea=function(a,b){return[(b?this.mainArea.transition():this.mainArea).attr("d",a).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},i.generateDrawArea=function(a,b){var c=this,d=c.config,e=c.d3.svg.area(),f=c.generateGetAreaPoints(a,b),g=b?c.getSubYScale:c.getYScale,h=function(a){return(b?c.subxx:c.xx).call(c,a)},i=function(a,b){return d.data_groups.length>0?f(a,b)[0][1]:g.call(c,a.id)(c.getAreaBaseValue(a.id))},j=function(a,b){return d.data_groups.length>0?f(a,b)[1][1]:g.call(c,a.id)(a.value)};return e=d.axis_rotated?e.x0(i).x1(j).y(h):e.x(h).y0(i).y1(j),d.line_connectNull||(e=e.defined(function(a){return null!==a.value})),function(a){var b,f=d.line_connectNull?c.filterRemoveNull(a.values):a.values,g=0,h=0;return c.isAreaType(a)?(c.isStepType(a)&&(f=c.convertValuesToStep(f)),b=e.interpolate(c.getInterpolate(a))(f)):(f[0]&&(g=c.x(f[0].x),h=c.getYScale(a.id)(f[0].value)),b=d.axis_rotated?"M "+h+" "+g:"M "+g+" "+h),b?b:"M 0 0"}},i.getAreaBaseValue=function(){return 0},i.generateGetAreaPoints=function(a,b){var c=this,d=c.config,e=a.__max__+1,f=c.getShapeX(0,e,a,!!b),g=c.getShapeY(!!b),h=c.getShapeOffset(c.isAreaType,a,!!b),i=b?c.getSubYScale:c.getYScale;return function(a,b){var e=i.call(c,a.id)(0),j=h(a,b)||e,k=f(a),l=g(a);return d.axis_rotated&&(0<a.value&&e>l||a.value<0&&l>e)&&(l=e),[[k,j],[k,l-(e-j)],[k,l-(e-j)],[k,j]]}},i.updateCircle=function(){var a=this;a.mainCircle=a.main.selectAll("."+l.circles).selectAll("."+l.circle).data(a.lineOrScatterData.bind(a)),a.mainCircle.enter().append("circle").attr("class",a.classCircle.bind(a)).attr("r",a.pointR.bind(a)).style("fill",a.color),a.mainCircle.style("opacity",a.initialOpacityForCircle.bind(a)),a.mainCircle.exit().remove()},i.redrawCircle=function(a,b,c){var d=this.main.selectAll("."+l.selectedCircle);return[(c?this.mainCircle.transition():this.mainCircle).style("opacity",this.opacityForCircle.bind(this)).style("fill",this.color).attr("cx",a).attr("cy",b),(c?d.transition():d).attr("cx",a).attr("cy",b)]},i.circleX=function(a){return a.x||0===a.x?this.x(a.x):null},i.updateCircleY=function(){var a,b,c=this;c.config.data_groups.length>0?(a=c.getShapeIndices(c.isLineType),b=c.generateGetLinePoints(a),c.circleY=function(a,c){return b(a,c)[0][1]}):c.circleY=function(a){return c.getYScale(a.id)(a.value)}},i.getCircles=function(a,b){var c=this;return(b?c.main.selectAll("."+l.circles+c.getTargetSelectorSuffix(b)):c.main).selectAll("."+l.circle+(m(a)?"-"+a:""))},i.expandCircles=function(a,b,c){var d=this,e=d.pointExpandedR.bind(d);c&&d.unexpandCircles(),d.getCircles(a,b).classed(l.EXPANDED,!0).attr("r",e)},i.unexpandCircles=function(a){var b=this,c=b.pointR.bind(b);b.getCircles(a).filter(function(){return b.d3.select(this).classed(l.EXPANDED)}).classed(l.EXPANDED,!1).attr("r",c)},i.pointR=function(a){var b=this,c=b.config;return b.isStepType(a)?0:n(c.point_r)?c.point_r(a):c.point_r},i.pointExpandedR=function(a){var b=this,c=b.config;return c.point_focus_expand_enabled?c.point_focus_expand_r?c.point_focus_expand_r:1.75*b.pointR(a):b.pointR(a)},i.pointSelectR=function(a){var b=this,c=b.config;return c.point_select_r?c.point_select_r:4*b.pointR(a)},i.isWithinCircle=function(a,b){var c=this.d3,d=c.mouse(a),e=c.select(a),f=+e.attr("cx"),g=+e.attr("cy");return Math.sqrt(Math.pow(f-d[0],2)+Math.pow(g-d[1],2))<b},i.isWithinStep=function(a,b){return Math.abs(b-this.d3.mouse(a)[1])<30},i.initBar=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.chartBars)},i.updateTargetsForBar=function(a){var b,c,d=this,e=d.config,f=d.classChartBar.bind(d),g=d.classBars.bind(d),h=d.classFocus.bind(d);b=d.main.select("."+l.chartBars).selectAll("."+l.chartBar).data(a).attr("class",function(a){return f(a)+h(a)}),c=b.enter().append("g").attr("class",f).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",g).style("cursor",function(a){return e.data_selection_isselectable(a)?"pointer":null})},i.updateBar=function(a){var b=this,c=b.barData.bind(b),d=b.classBar.bind(b),e=b.initialOpacity.bind(b),f=function(a){return b.color(a.id)};b.mainBar=b.main.selectAll("."+l.bars).selectAll("."+l.bar).data(c),b.mainBar.enter().append("path").attr("class",d).style("stroke",f).style("fill",f),b.mainBar.style("opacity",e),b.mainBar.exit().transition().duration(a).style("opacity",0).remove()},i.redrawBar=function(a,b){return[(b?this.mainBar.transition():this.mainBar).attr("d",a).style("fill",this.color).style("opacity",1)]},i.getBarW=function(a,b){var c=this,d=c.config,e="number"==typeof d.bar_width?d.bar_width:b?a.tickInterval()*d.bar_width_ratio/b:0;return d.bar_width_max&&e>d.bar_width_max?d.bar_width_max:e},i.getBars=function(a,b){var c=this;return(b?c.main.selectAll("."+l.bars+c.getTargetSelectorSuffix(b)):c.main).selectAll("."+l.bar+(m(a)?"-"+a:""))},i.expandBars=function(a,b,c){var d=this;c&&d.unexpandBars(),d.getBars(a,b).classed(l.EXPANDED,!0)},i.unexpandBars=function(a){var b=this;b.getBars(a).classed(l.EXPANDED,!1)},i.generateDrawBar=function(a,b){var c=this,d=c.config,e=c.generateGetBarPoints(a,b);return function(a,b){var c=e(a,b),f=d.axis_rotated?1:0,g=d.axis_rotated?0:1,h="M "+c[0][f]+","+c[0][g]+" L"+c[1][f]+","+c[1][g]+" L"+c[2][f]+","+c[2][g]+" L"+c[3][f]+","+c[3][g]+" z";return h}},i.generateGetBarPoints=function(a,b){var c=this,d=b?c.subXAxis:c.xAxis,e=a.__max__+1,f=c.getBarW(d,e),g=c.getShapeX(f,e,a,!!b),h=c.getShapeY(!!b),i=c.getShapeOffset(c.isBarType,a,!!b),j=b?c.getSubYScale:c.getYScale;
return function(a,b){var d=j.call(c,a.id)(0),e=i(a,b)||d,k=g(a),l=h(a);return c.config.axis_rotated&&(0<a.value&&d>l||a.value<0&&l>d)&&(l=d),[[k,e],[k,l-(d-e)],[k+f,l-(d-e)],[k+f,e]]}},i.isWithinBar=function(a){var b=this.d3.mouse(a),c=a.getBoundingClientRect(),d=a.pathSegList.getItem(0),e=a.pathSegList.getItem(1),f=Math.min(d.x,e.x),g=Math.min(d.y,e.y),h=c.width,i=c.height,j=2,k=f-j,l=f+h+j,m=g+i+j,n=g-j;return k<b[0]&&b[0]<l&&n<b[1]&&b[1]<m},i.initText=function(){var a=this;a.main.select("."+l.chart).append("g").attr("class",l.chartTexts),a.mainText=a.d3.selectAll([])},i.updateTargetsForText=function(a){var b,c,d=this,e=d.classChartText.bind(d),f=d.classTexts.bind(d),g=d.classFocus.bind(d);b=d.main.select("."+l.chartTexts).selectAll("."+l.chartText).data(a).attr("class",function(a){return e(a)+g(a)}),c=b.enter().append("g").attr("class",e).style("opacity",0).style("pointer-events","none"),c.append("g").attr("class",f)},i.updateText=function(a){var b=this,c=b.config,d=b.barOrLineData.bind(b),e=b.classText.bind(b);b.mainText=b.main.selectAll("."+l.texts).selectAll("."+l.text).data(d),b.mainText.enter().append("text").attr("class",e).attr("text-anchor",function(a){return c.axis_rotated?a.value<0?"end":"start":"middle"}).style("stroke","none").style("fill",function(a){return b.color(a)}).style("fill-opacity",0),b.mainText.text(function(a,c,d){return b.dataLabelFormat(a.id)(a.value,a.id,c,d)}),b.mainText.exit().transition().duration(a).style("fill-opacity",0).remove()},i.redrawText=function(a,b,c,d){return[(d?this.mainText.transition():this.mainText).attr("x",a).attr("y",b).style("fill",this.color).style("fill-opacity",c?0:this.opacityForText.bind(this))]},i.getTextRect=function(a,b){var c,d=this.d3.select("body").append("div").classed("c3",!0),e=d.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0);return e.selectAll(".dummy").data([a]).enter().append("text").classed(b?b:"",!0).text(a).each(function(){c=this.getBoundingClientRect()}),d.remove(),c},i.generateXYForText=function(a,b,c,d){var e=this,f=e.generateGetAreaPoints(a,!1),g=e.generateGetBarPoints(b,!1),h=e.generateGetLinePoints(c,!1),i=d?e.getXForText:e.getYForText;return function(a,b){var c=e.isAreaType(a)?f:e.isBarType(a)?g:h;return i.call(e,c(a,b),a,this)}},i.getXForText=function(a,b,c){var d,e,f=this,g=c.getBoundingClientRect();return f.config.axis_rotated?(e=f.isBarType(b)?4:6,d=a[2][1]+e*(b.value<0?-1:1)):d=f.hasType("bar")?(a[2][0]+a[0][0])/2:a[0][0],null===b.value&&(d>f.width?d=f.width-g.width:0>d&&(d=4)),d},i.getYForText=function(a,b,c){var d,e=this,f=c.getBoundingClientRect();return e.config.axis_rotated?d=(a[0][0]+a[2][0]+.6*f.height)/2:(d=a[2][1],b.value<0?(d+=f.height,e.isBarType(b)&&e.isSafari()?d-=3:!e.isBarType(b)&&e.isChrome()&&(d+=3)):d+=e.isBarType(b)?-3:-6),null!==b.value||e.config.axis_rotated||(d<f.height?d=f.height:d>this.height&&(d=this.height-4)),d},i.setTargetType=function(a,b){var c=this,d=c.config;c.mapToTargetIds(a).forEach(function(a){c.withoutFadeIn[a]=b===d.data_types[a],d.data_types[a]=b}),a||(d.data_type=b)},i.hasType=function(a,b){var c=this,d=c.config.data_types,e=!1;return b=b||c.data.targets,b&&b.length?b.forEach(function(b){var c=d[b.id];(c&&c.indexOf(a)>=0||!c&&"line"===a)&&(e=!0)}):Object.keys(d).length?Object.keys(d).forEach(function(b){d[b]===a&&(e=!0)}):e=c.config.data_type===a,e},i.hasArcType=function(a){return this.hasType("pie",a)||this.hasType("donut",a)||this.hasType("gauge",a)},i.isLineType=function(a){var b=this.config,c=o(a)?a:a.id;return!b.data_types[c]||["line","spline","area","area-spline","step","area-step"].indexOf(b.data_types[c])>=0},i.isStepType=function(a){var b=o(a)?a:a.id;return["step","area-step"].indexOf(this.config.data_types[b])>=0},i.isSplineType=function(a){var b=o(a)?a:a.id;return["spline","area-spline"].indexOf(this.config.data_types[b])>=0},i.isAreaType=function(a){var b=o(a)?a:a.id;return["area","area-spline","area-step"].indexOf(this.config.data_types[b])>=0},i.isBarType=function(a){var b=o(a)?a:a.id;return"bar"===this.config.data_types[b]},i.isScatterType=function(a){var b=o(a)?a:a.id;return"scatter"===this.config.data_types[b]},i.isPieType=function(a){var b=o(a)?a:a.id;return"pie"===this.config.data_types[b]},i.isGaugeType=function(a){var b=o(a)?a:a.id;return"gauge"===this.config.data_types[b]},i.isDonutType=function(a){var b=o(a)?a:a.id;return"donut"===this.config.data_types[b]},i.isArcType=function(a){return this.isPieType(a)||this.isDonutType(a)||this.isGaugeType(a)},i.lineData=function(a){return this.isLineType(a)?[a]:[]},i.arcData=function(a){return this.isArcType(a.data)?[a]:[]},i.barData=function(a){return this.isBarType(a)?a.values:[]},i.lineOrScatterData=function(a){return this.isLineType(a)||this.isScatterType(a)?a.values:[]},i.barOrLineData=function(a){return this.isBarType(a)||this.isLineType(a)?a.values:[]},i.initGrid=function(){var a=this,b=a.config,c=a.d3;a.grid=a.main.append("g").attr("clip-path",a.clipPathForGrid).attr("class",l.grid),b.grid_x_show&&a.grid.append("g").attr("class",l.xgrids),b.grid_y_show&&a.grid.append("g").attr("class",l.ygrids),b.grid_focus_show&&a.grid.append("g").attr("class",l.xgridFocus).append("line").attr("class",l.xgridFocus),a.xgrid=c.selectAll([]),b.grid_lines_front||a.initGridLines()},i.initGridLines=function(){var a=this,b=a.d3;a.gridLines=a.main.append("g").attr("clip-path",a.clipPathForGrid).attr("class",l.grid+" "+l.gridLines),a.gridLines.append("g").attr("class",l.xgridLines),a.gridLines.append("g").attr("class",l.ygridLines),a.xgridLines=b.selectAll([])},i.updateXGrid=function(a){var b=this,c=b.config,d=b.d3,e=b.generateGridData(c.grid_x_type,b.x),f=b.isCategorized()?b.xAxis.tickOffset():0;b.xgridAttr=c.axis_rotated?{x1:0,x2:b.width,y1:function(a){return b.x(a)-f},y2:function(a){return b.x(a)-f}}:{x1:function(a){return b.x(a)+f},x2:function(a){return b.x(a)+f},y1:0,y2:b.height},b.xgrid=b.main.select("."+l.xgrids).selectAll("."+l.xgrid).data(e),b.xgrid.enter().append("line").attr("class",l.xgrid),a||b.xgrid.attr(b.xgridAttr).style("opacity",function(){return+d.select(this).attr(c.axis_rotated?"y1":"x1")===(c.axis_rotated?b.height:0)?0:1}),b.xgrid.exit().remove()},i.updateYGrid=function(){var a=this,b=a.config,c=a.yAxis.tickValues()||a.y.ticks(b.grid_y_ticks);a.ygrid=a.main.select("."+l.ygrids).selectAll("."+l.ygrid).data(c),a.ygrid.enter().append("line").attr("class",l.ygrid),a.ygrid.attr("x1",b.axis_rotated?a.y:0).attr("x2",b.axis_rotated?a.y:a.width).attr("y1",b.axis_rotated?0:a.y).attr("y2",b.axis_rotated?a.height:a.y),a.ygrid.exit().remove(),a.smoothLines(a.ygrid,"grid")},i.gridTextAnchor=function(a){return a.position?a.position:"end"},i.gridTextDx=function(a){return"start"===a.position?4:"middle"===a.position?0:-4},i.xGridTextX=function(a){return"start"===a.position?-this.height:"middle"===a.position?-this.height/2:0},i.yGridTextX=function(a){return"start"===a.position?0:"middle"===a.position?this.width/2:this.width},i.updateGrid=function(a){var b,c,d,e=this,f=e.main,g=e.config;e.grid.style("visibility",e.hasArcType()?"hidden":"visible"),f.select("line."+l.xgridFocus).style("visibility","hidden"),g.grid_x_show&&e.updateXGrid(),e.xgridLines=f.select("."+l.xgridLines).selectAll("."+l.xgridLine).data(g.grid_x_lines),b=e.xgridLines.enter().append("g").attr("class",function(a){return l.xgridLine+(a["class"]?" "+a["class"]:"")}),b.append("line").style("opacity",0),b.append("text").attr("text-anchor",e.gridTextAnchor).attr("transform",g.axis_rotated?"":"rotate(-90)").attr("dx",e.gridTextDx).attr("dy",-5).style("opacity",0),e.xgridLines.exit().transition().duration(a).style("opacity",0).remove(),g.grid_y_show&&e.updateYGrid(),e.ygridLines=f.select("."+l.ygridLines).selectAll("."+l.ygridLine).data(g.grid_y_lines),c=e.ygridLines.enter().append("g").attr("class",function(a){return l.ygridLine+(a["class"]?" "+a["class"]:"")}),c.append("line").style("opacity",0),c.append("text").attr("text-anchor",e.gridTextAnchor).attr("transform",g.axis_rotated?"rotate(-90)":"").attr("dx",e.gridTextDx).attr("dy",-5).style("opacity",0),d=e.yv.bind(e),e.ygridLines.select("line").transition().duration(a).attr("x1",g.axis_rotated?d:0).attr("x2",g.axis_rotated?d:e.width).attr("y1",g.axis_rotated?0:d).attr("y2",g.axis_rotated?e.height:d).style("opacity",1),e.ygridLines.select("text").transition().duration(a).attr("x",g.axis_rotated?e.xGridTextX.bind(e):e.yGridTextX.bind(e)).attr("y",d).text(function(a){return a.text}).style("opacity",1),e.ygridLines.exit().transition().duration(a).style("opacity",0).remove()},i.redrawGrid=function(a){var b=this,c=b.config,d=b.xv.bind(b),e=b.xgridLines.select("line"),f=b.xgridLines.select("text");return[(a?e.transition():e).attr("x1",c.axis_rotated?0:d).attr("x2",c.axis_rotated?b.width:d).attr("y1",c.axis_rotated?d:0).attr("y2",c.axis_rotated?d:b.height).style("opacity",1),(a?f.transition():f).attr("x",c.axis_rotated?b.yGridTextX.bind(b):b.xGridTextX.bind(b)).attr("y",d).text(function(a){return a.text}).style("opacity",1)]},i.showXGridFocus=function(a){var b=this,c=b.config,d=a.filter(function(a){return a&&m(a.value)}),e=b.main.selectAll("line."+l.xgridFocus),f=b.xx.bind(b);c.tooltip_show&&(b.hasType("scatter")||b.hasArcType()||(e.style("visibility","visible").data([d[0]]).attr(c.axis_rotated?"y1":"x1",f).attr(c.axis_rotated?"y2":"x2",f),b.smoothLines(e,"grid")))},i.hideXGridFocus=function(){this.main.select("line."+l.xgridFocus).style("visibility","hidden")},i.updateXgridFocus=function(){var a=this,b=a.config;a.main.select("line."+l.xgridFocus).attr("x1",b.axis_rotated?0:-10).attr("x2",b.axis_rotated?a.width:-10).attr("y1",b.axis_rotated?-10:0).attr("y2",b.axis_rotated?-10:a.height)},i.generateGridData=function(a,b){var c,d,e,f,g=this,h=[],i=g.main.select("."+l.axisX).selectAll(".tick").size();if("year"===a)for(c=g.getXDomain(),d=c[0].getFullYear(),e=c[1].getFullYear(),f=d;e>=f;f++)h.push(new Date(f+"-01-01 00:00:00"));else h=b.ticks(10),h.length>i&&(h=h.filter(function(a){return(""+a).indexOf(".")<0}));return h},i.getGridFilterToRemove=function(a){return a?function(b){var c=!1;return[].concat(a).forEach(function(a){("value"in a&&b.value===a.value||"class"in a&&b["class"]===a["class"])&&(c=!0)}),c}:function(){return!0}},i.removeGridLines=function(a,b){var c=this,d=c.config,e=c.getGridFilterToRemove(a),f=function(a){return!e(a)},g=b?l.xgridLines:l.ygridLines,h=b?l.xgridLine:l.ygridLine;c.main.select("."+g).selectAll("."+h).filter(e).transition().duration(d.transition_duration).style("opacity",0).remove(),b?d.grid_x_lines=d.grid_x_lines.filter(f):d.grid_y_lines=d.grid_y_lines.filter(f)},i.initTooltip=function(){var a,b=this,c=b.config;if(b.tooltip=b.selectChart.style("position","relative").append("div").attr("class",l.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),c.tooltip_init_show){if(b.isTimeSeries()&&o(c.tooltip_init_x)){for(c.tooltip_init_x=b.parseDate(c.tooltip_init_x),a=0;a<b.data.targets[0].values.length&&b.data.targets[0].values[a].x-c.tooltip_init_x!==0;a++);c.tooltip_init_x=a}b.tooltip.html(c.tooltip_contents.call(b,b.data.targets.map(function(a){return b.addName(a.values[c.tooltip_init_x])}),b.axis.getXAxisTickFormat(),b.getYFormat(b.hasArcType()),b.color)),b.tooltip.style("top",c.tooltip_init_position.top).style("left",c.tooltip_init_position.left).style("display","block")}},i.getTooltipContent=function(a,b,c,d){var e,f,g,h,i,j,k=this,m=k.config,n=m.tooltip_format_title||b,o=m.tooltip_format_name||function(a){return a},p=m.tooltip_format_value||c;for(f=0;f<a.length;f++)a[f]&&(a[f].value||0===a[f].value)&&(e||(g=n?n(a[f].x):a[f].x,e="<table class='"+l.tooltip+"'>"+(g||0===g?"<tr><th colspan='2'>"+g+"</th></tr>":"")),h=p(a[f].value,a[f].ratio,a[f].id,a[f].index),void 0!==h&&(i=o(a[f].name,a[f].ratio,a[f].id,a[f].index),j=k.levelColor?k.levelColor(a[f].value):d(a[f].id),e+="<tr class='"+l.tooltipName+"-"+a[f].id+"'>",e+="<td class='name'><span style='background-color:"+j+"'></span>"+i+"</td>",e+="<td class='value'>"+h+"</td>",e+="</tr>"));return e+"</table>"},i.tooltipPosition=function(a,b,c,d){var e,f,g,h,i,j=this,k=j.config,l=j.d3,m=j.hasArcType(),n=l.mouse(d);return m?(f=(j.width-(j.isLegendRight?j.getLegendWidth():0))/2+n[0],h=j.height/2+n[1]+20):(e=j.getSvgLeft(!0),k.axis_rotated?(f=e+n[0]+100,g=f+b,i=j.currentWidth-j.getCurrentPaddingRight(),h=j.x(a[0].x)+20):(f=e+j.getCurrentPaddingLeft(!0)+j.x(a[0].x)+20,g=f+b,i=e+j.currentWidth-j.getCurrentPaddingRight(),h=n[1]+15),g>i&&(f-=g-i+20),h+c>j.currentHeight&&(h-=c+30)),0>h&&(h=0),{top:h,left:f}},i.showTooltip=function(a,b){var c,d,e,f=this,g=f.config,h=f.hasArcType(),j=a.filter(function(a){return a&&m(a.value)}),k=g.tooltip_position||i.tooltipPosition;0!==j.length&&g.tooltip_show&&(f.tooltip.html(g.tooltip_contents.call(f,a,f.axis.getXAxisTickFormat(),f.getYFormat(h),f.color)).style("display","block"),c=f.tooltip.property("offsetWidth"),d=f.tooltip.property("offsetHeight"),e=k.call(this,j,c,d,b),f.tooltip.style("top",e.top+"px").style("left",e.left+"px"))},i.hideTooltip=function(){this.tooltip.style("display","none")},i.initLegend=function(){var a=this;return a.legendItemTextBox={},a.legendHasRendered=!1,a.legend=a.svg.append("g").attr("transform",a.getTranslate("legend")),a.config.legend_show?void a.updateLegendWithDefaults():(a.legend.style("visibility","hidden"),void(a.hiddenLegendIds=a.mapToIds(a.data.targets)))},i.updateLegendWithDefaults=function(){var a=this;a.updateLegend(a.mapToIds(a.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},i.updateSizeForLegend=function(a,b){var c=this,d=c.config,e={top:c.isLegendTop?c.getCurrentPaddingTop()+d.legend_inset_y+5.5:c.currentHeight-a-c.getCurrentPaddingBottom()-d.legend_inset_y,left:c.isLegendLeft?c.getCurrentPaddingLeft()+d.legend_inset_x+.5:c.currentWidth-b-c.getCurrentPaddingRight()-d.legend_inset_x+.5};c.margin3={top:c.isLegendRight?0:c.isLegendInset?e.top:c.currentHeight-a,right:0/0,bottom:0,left:c.isLegendRight?c.currentWidth-b:c.isLegendInset?e.left:0}},i.transformLegend=function(a){var b=this;(a?b.legend.transition():b.legend).attr("transform",b.getTranslate("legend"))},i.updateLegendStep=function(a){this.legendStep=a},i.updateLegendItemWidth=function(a){this.legendItemWidth=a},i.updateLegendItemHeight=function(a){this.legendItemHeight=a},i.getLegendWidth=function(){var a=this;return a.config.legend_show?a.isLegendRight||a.isLegendInset?a.legendItemWidth*(a.legendStep+1):a.currentWidth:0},i.getLegendHeight=function(){var a=this,b=0;return a.config.legend_show&&(b=a.isLegendRight?a.currentHeight:Math.max(20,a.legendItemHeight)*(a.legendStep+1)),b},i.opacityForLegend=function(a){return a.classed(l.legendItemHidden)?null:1},i.opacityForUnfocusedLegend=function(a){return a.classed(l.legendItemHidden)?null:.3},i.toggleFocusLegend=function(a,b){var c=this;a=c.mapToTargetIds(a),c.legend.selectAll("."+l.legendItem).filter(function(b){return a.indexOf(b)>=0}).classed(l.legendItemFocused,b).transition().duration(100).style("opacity",function(){var a=b?c.opacityForLegend:c.opacityForUnfocusedLegend;return a.call(c,c.d3.select(this))})},i.revertLegend=function(){var a=this,b=a.d3;a.legend.selectAll("."+l.legendItem).classed(l.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return a.opacityForLegend(b.select(this))})},i.showLegend=function(a){var b=this,c=b.config;c.legend_show||(c.legend_show=!0,b.legend.style("visibility","visible"),b.legendHasRendered||b.updateLegendWithDefaults()),b.removeHiddenLegendIds(a),b.legend.selectAll(b.selectorLegends(a)).style("visibility","visible").transition().style("opacity",function(){return b.opacityForLegend(b.d3.select(this))})},i.hideLegend=function(a){var b=this,c=b.config;c.legend_show&&u(a)&&(c.legend_show=!1,b.legend.style("visibility","hidden")),b.addHiddenLegendIds(a),b.legend.selectAll(b.selectorLegends(a)).style("opacity",0).style("visibility","hidden")},i.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},i.updateLegend=function(a,b,c){function d(a,b){return u.legendItemTextBox[b]||(u.legendItemTextBox[b]=u.getTextRect(a.textContent,l.legendItem)),u.legendItemTextBox[b]}function e(b,c,e){function f(a,b){b||(g=(o-D-n)/2,B>g&&(g=(o-n)/2,D=0,J++)),I[a]=J,H[J]=u.isLegendInset?10:g,E[a]=D,D+=n}var g,h,i=0===e,j=e===a.length-1,k=d(b,c),l=k.width+C+(!j||u.isLegendRight||u.isLegendInset?y:0),m=k.height+x,n=u.isLegendRight||u.isLegendInset?m:l,o=u.isLegendRight||u.isLegendInset?u.getLegendHeight():u.getLegendWidth();return i&&(D=0,J=0,z=0,A=0),v.legend_show&&!u.isLegendToShow(c)?void(F[c]=G[c]=I[c]=E[c]=0):(F[c]=l,G[c]=m,(!z||l>=z)&&(z=l),(!A||m>=A)&&(A=m),h=u.isLegendRight||u.isLegendInset?A:z,void(v.legend_equally?(Object.keys(F).forEach(function(a){F[a]=z}),Object.keys(G).forEach(function(a){G[a]=A}),g=(o-h*a.length)/2,B>g?(D=0,J=0,a.forEach(function(a){f(a)})):f(c,!0)):f(c)))}var f,g,h,i,j,k,m,n,o,p,r,s,t,u=this,v=u.config,x=4,y=10,z=0,A=0,B=10,C=15,D=0,E={},F={},G={},H=[0],I={},J=0;b=b||{},n=w(b,"withTransition",!0),o=w(b,"withTransitionForTransform",!0),u.isLegendInset&&(J=v.legend_inset_step?v.legend_inset_step:a.length,u.updateLegendStep(J)),u.isLegendRight?(f=function(a){return z*I[a]},i=function(a){return H[I[a]]+E[a]}):u.isLegendInset?(f=function(a){return z*I[a]+10},i=function(a){return H[I[a]]+E[a]}):(f=function(a){return H[I[a]]+E[a]},i=function(a){return A*I[a]}),g=function(a,b){return f(a,b)+14},j=function(a,b){return i(a,b)+9},h=function(a,b){return f(a,b)},k=function(a,b){return i(a,b)-5},m=u.legend.selectAll("."+l.legendItem).data(a).enter().append("g").attr("class",function(a){return u.generateClass(l.legendItem,a)}).style("visibility",function(a){return u.isLegendToShow(a)?"visible":"hidden"}).style("cursor","pointer").on("click",function(a){v.legend_item_onclick?v.legend_item_onclick.call(u,a):u.d3.event.altKey?(u.api.hide(),u.api.show(a)):(u.api.toggle(a),u.isTargetToShow(a)?u.api.focus(a):u.api.revert())}).on("mouseover",function(a){u.d3.select(this).classed(l.legendItemFocused,!0),!u.transiting&&u.isTargetToShow(a)&&u.api.focus(a),v.legend_item_onmouseover&&v.legend_item_onmouseover.call(u,a)}).on("mouseout",function(a){u.d3.select(this).classed(l.legendItemFocused,!1),u.api.revert(),v.legend_item_onmouseout&&v.legend_item_onmouseout.call(u,a)}),m.append("text").text(function(a){return q(v.data_names[a])?v.data_names[a]:a}).each(function(a,b){e(this,a,b)}).style("pointer-events","none").attr("x",u.isLegendRight||u.isLegendInset?g:-200).attr("y",u.isLegendRight||u.isLegendInset?-200:j),m.append("rect").attr("class",l.legendItemEvent).style("fill-opacity",0).attr("x",u.isLegendRight||u.isLegendInset?h:-200).attr("y",u.isLegendRight||u.isLegendInset?-200:k),m.append("rect").attr("class",l.legendItemTile).style("pointer-events","none").style("fill",u.color).attr("x",u.isLegendRight||u.isLegendInset?g:-200).attr("y",u.isLegendRight||u.isLegendInset?-200:i).attr("width",10).attr("height",10),t=u.legend.select("."+l.legendBackground+" rect"),u.isLegendInset&&z>0&&0===t.size()&&(t=u.legend.insert("g","."+l.legendItem).attr("class",l.legendBackground).append("rect")),p=u.legend.selectAll("text").data(a).text(function(a){return q(v.data_names[a])?v.data_names[a]:a}).each(function(a,b){e(this,a,b)}),(n?p.transition():p).attr("x",g).attr("y",j),r=u.legend.selectAll("rect."+l.legendItemEvent).data(a),(n?r.transition():r).attr("width",function(a){return F[a]}).attr("height",function(a){return G[a]}).attr("x",h).attr("y",k),s=u.legend.selectAll("rect."+l.legendItemTile).data(a),(n?s.transition():s).style("fill",u.color).attr("x",f).attr("y",i),t&&(n?t.transition():t).attr("height",u.getLegendHeight()-12).attr("width",z*(J+1)+10),u.legend.selectAll("."+l.legendItem).classed(l.legendItemHidden,function(a){return!u.isTargetToShow(a)}),u.updateLegendItemWidth(z),u.updateLegendItemHeight(A),u.updateLegendStep(J),u.updateSizes(),u.updateScales(),u.updateSvgSize(),u.transformAll(o,c),u.legendHasRendered=!0},c(b,f),f.prototype.init=function(){var a=this.owner,b=a.config,c=a.main;a.axes.x=c.append("g").attr("class",l.axis+" "+l.axisX).attr("clip-path",a.clipPathForXAxis).attr("transform",a.getTranslate("x")).style("visibility",b.axis_x_show?"visible":"hidden"),a.axes.x.append("text").attr("class",l.axisXLabel).attr("transform",b.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),a.axes.y=c.append("g").attr("class",l.axis+" "+l.axisY).attr("clip-path",b.axis_y_inner?"":a.clipPathForYAxis).attr("transform",a.getTranslate("y")).style("visibility",b.axis_y_show?"visible":"hidden"),a.axes.y.append("text").attr("class",l.axisYLabel).attr("transform",b.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),a.axes.y2=c.append("g").attr("class",l.axis+" "+l.axisY2).attr("transform",a.getTranslate("y2")).style("visibility",b.axis_y2_show?"visible":"hidden"),a.axes.y2.append("text").attr("class",l.axisY2Label).attr("transform",b.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},f.prototype.getXAxis=function(a,b,c,d,e,f,h){var i=this.owner,j=i.config,k={isCategory:i.isCategorized(),withOuterTick:e,tickMultiline:j.axis_x_tick_multiline,tickWidth:j.axis_x_tick_width,tickTextRotate:h?0:j.axis_x_tick_rotate,withoutTransition:f},l=g(i.d3,k).scale(a).orient(b);return i.isTimeSeries()&&d&&(d=d.map(function(a){return i.parseDate(a)})),l.tickFormat(c).tickValues(d),i.isCategorized()&&(l.tickCentered(j.axis_x_tick_centered),u(j.axis_x_tick_culling)&&(j.axis_x_tick_culling=!1)),l},f.prototype.updateXAxisTickValues=function(a,b){var c,d=this.owner,e=d.config;return(e.axis_x_tick_fit||e.axis_x_tick_count)&&(c=this.generateTickValues(d.mapTargetsToUniqueXs(a),e.axis_x_tick_count,d.isTimeSeries())),b?b.tickValues(c):(d.xAxis.tickValues(c),d.subXAxis.tickValues(c)),c},f.prototype.getYAxis=function(a,b,c,d,e,f){var h={withOuterTick:e,withoutTransition:f},i=this.owner,j=i.d3,k=i.config,l=g(j,h).scale(a).orient(b).tickFormat(c);return i.isTimeSeriesY()?l.ticks(j.time[k.axis_y_tick_time_value],k.axis_y_tick_time_interval):l.tickValues(d),l},f.prototype.getId=function(a){var b=this.owner.config;return a in b.data_axes?b.data_axes[a]:"y"},f.prototype.getXAxisTickFormat=function(){var a=this.owner,b=a.config,c=a.isTimeSeries()?a.defaultAxisTimeFormat:a.isCategorized()?a.categoryName:function(a){return 0>a?a.toFixed(0):a};return b.axis_x_tick_format&&(n(b.axis_x_tick_format)?c=b.axis_x_tick_format:a.isTimeSeries()&&(c=function(c){return c?a.axisTimeFormat(b.axis_x_tick_format)(c):""})),n(c)?function(b){return c.call(a,b)}:c},f.prototype.getTickValues=function(a,b){return a?a:b?b.tickValues():void 0},f.prototype.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},f.prototype.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},f.prototype.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},f.prototype.getLabelOptionByAxisId=function(a){var b,c=this.owner,d=c.config;return"y"===a?b=d.axis_y_label:"y2"===a?b=d.axis_y2_label:"x"===a&&(b=d.axis_x_label),b},f.prototype.getLabelText=function(a){var b=this.getLabelOptionByAxisId(a);return o(b)?b:b?b.text:null},f.prototype.setLabelText=function(a,b){var c=this.owner,d=c.config,e=this.getLabelOptionByAxisId(a);o(e)?"y"===a?d.axis_y_label=b:"y2"===a?d.axis_y2_label=b:"x"===a&&(d.axis_x_label=b):e&&(e.text=b)},f.prototype.getLabelPosition=function(a,b){var c=this.getLabelOptionByAxisId(a),d=c&&"object"==typeof c&&c.position?c.position:b;return{isInner:d.indexOf("inner")>=0,isOuter:d.indexOf("outer")>=0,isLeft:d.indexOf("left")>=0,isCenter:d.indexOf("center")>=0,isRight:d.indexOf("right")>=0,isTop:d.indexOf("top")>=0,isMiddle:d.indexOf("middle")>=0,isBottom:d.indexOf("bottom")>=0}},f.prototype.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},f.prototype.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},f.prototype.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},f.prototype.getLabelPositionById=function(a){return"y2"===a?this.getY2AxisLabelPosition():"y"===a?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},f.prototype.textForXAxisLabel=function(){return this.getLabelText("x")},f.prototype.textForYAxisLabel=function(){return this.getLabelText("y")},f.prototype.textForY2AxisLabel=function(){return this.getLabelText("y2")},f.prototype.xForAxisLabel=function(a,b){var c=this.owner;return a?b.isLeft?0:b.isCenter?c.width/2:c.width:b.isBottom?-c.height:b.isMiddle?-c.height/2:0},f.prototype.dxForAxisLabel=function(a,b){return a?b.isLeft?"0.5em":b.isRight?"-0.5em":"0":b.isTop?"-0.5em":b.isBottom?"0.5em":"0"},f.prototype.textAnchorForAxisLabel=function(a,b){return a?b.isLeft?"start":b.isCenter?"middle":"end":b.isBottom?"start":b.isMiddle?"middle":"end"},f.prototype.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},f.prototype.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},f.prototype.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},f.prototype.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},f.prototype.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},f.prototype.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},f.prototype.dyForXAxisLabel=function(){var a=this.owner,b=a.config,c=this.getXAxisLabelPosition();return b.axis_rotated?c.isInner?"1.2em":-25-this.getMaxTickWidth("x"):c.isInner?"-0.5em":b.axis_x_height?b.axis_x_height-10:"3em"},f.prototype.dyForYAxisLabel=function(){var a=this.owner,b=this.getYAxisLabelPosition();return a.config.axis_rotated?b.isInner?"-0.5em":"3em":b.isInner?"1.2em":-10-(a.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},f.prototype.dyForY2AxisLabel=function(){var a=this.owner,b=this.getY2AxisLabelPosition();return a.config.axis_rotated?b.isInner?"1.2em":"-2.2em":b.isInner?"-0.5em":15+(a.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},f.prototype.textAnchorForXAxisLabel=function(){var a=this.owner;return this.textAnchorForAxisLabel(!a.config.axis_rotated,this.getXAxisLabelPosition())},f.prototype.textAnchorForYAxisLabel=function(){var a=this.owner;return this.textAnchorForAxisLabel(a.config.axis_rotated,this.getYAxisLabelPosition())},f.prototype.textAnchorForY2AxisLabel=function(){var a=this.owner;return this.textAnchorForAxisLabel(a.config.axis_rotated,this.getY2AxisLabelPosition())},f.prototype.getMaxTickWidth=function(a,b){var c,d,e,f,g,h=this.owner,i=h.config,j=0;return b&&h.currentMaxTickWidths[a]?h.currentMaxTickWidths[a]:(h.svg&&(c=h.filterTargetsToShow(h.data.targets),"y"===a?(d=h.y.copy().domain(h.getYDomain(c,"y")),e=this.getYAxis(d,h.yOrient,i.axis_y_tick_format,h.yAxisTickValues,!1,!0)):"y2"===a?(d=h.y2.copy().domain(h.getYDomain(c,"y2")),e=this.getYAxis(d,h.y2Orient,i.axis_y2_tick_format,h.y2AxisTickValues,!1,!0)):(d=h.x.copy().domain(h.getXDomain(c)),e=this.getXAxis(d,h.xOrient,h.xAxisTickFormat,h.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(c,e)),f=h.d3.select("body").append("div").classed("c3",!0),g=f.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),g.append("g").call(e).each(function(){h.d3.select(this).selectAll("text").each(function(){var a=this.getBoundingClientRect();j<a.width&&(j=a.width)}),f.remove()})),h.currentMaxTickWidths[a]=0>=j?h.currentMaxTickWidths[a]:j,h.currentMaxTickWidths[a])},f.prototype.updateLabels=function(a){var b=this.owner,c=b.main.select("."+l.axisX+" ."+l.axisXLabel),d=b.main.select("."+l.axisY+" ."+l.axisYLabel),e=b.main.select("."+l.axisY2+" ."+l.axisY2Label);(a?c.transition():c).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(a?d.transition():d).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(a?e.transition():e).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},f.prototype.getPadding=function(a,b,c,d){return m(a[b])?"ratio"===a.unit?a[b]*d:this.convertPixelsToAxisPadding(a[b],d):c},f.prototype.convertPixelsToAxisPadding=function(a,b){var c=this.owner,d=c.config.axis_rotated?c.width:c.height;return b*(a/d)},f.prototype.generateTickValues=function(a,b,c){var d,e,f,g,h,i,j,k=a;if(b)if(d=n(b)?b():b,1===d)k=[a[0]];else if(2===d)k=[a[0],a[a.length-1]];else if(d>2){for(g=d-2,e=a[0],f=a[a.length-1],h=(f-e)/(g+1),k=[e],i=0;g>i;i++)j=+e+h*(i+1),k.push(c?new Date(j):j);k.push(f)}return c||(k=k.sort(function(a,b){return a-b})),k},f.prototype.generateTransitions=function(a){var b=this.owner,c=b.axes;return{axisX:a?c.x.transition().duration(a):c.x,axisY:a?c.y.transition().duration(a):c.y,axisY2:a?c.y2.transition().duration(a):c.y2,axisSubX:a?c.subx.transition().duration(a):c.subx}},f.prototype.redraw=function(a,b){var c=this.owner;c.axes.x.style("opacity",b?0:1),c.axes.y.style("opacity",b?0:1),c.axes.y2.style("opacity",b?0:1),c.axes.subx.style("opacity",b?0:1),a.axisX.call(c.xAxis),a.axisY.call(c.yAxis),a.axisY2.call(c.y2Axis),a.axisSubX.call(c.subXAxis)},i.getClipPath=function(b){var c=a.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0;return"url("+(c?"":document.URL.split("#")[0])+"#"+b+")"},i.appendClip=function(a,b){return a.append("clipPath").attr("id",b).append("rect")},i.getAxisClipX=function(a){var b=Math.max(30,this.margin.left);return a?-(1+b):-(b-1)},i.getAxisClipY=function(a){return a?-20:-this.margin.top},i.getXAxisClipX=function(){var a=this;return a.getAxisClipX(!a.config.axis_rotated)},i.getXAxisClipY=function(){var a=this;return a.getAxisClipY(!a.config.axis_rotated)},i.getYAxisClipX=function(){var a=this;return a.config.axis_y_inner?-1:a.getAxisClipX(a.config.axis_rotated)},i.getYAxisClipY=function(){var a=this;return a.getAxisClipY(a.config.axis_rotated)},i.getAxisClipWidth=function(a){var b=this,c=Math.max(30,b.margin.left),d=Math.max(30,b.margin.right);return a?b.width+2+c+d:b.margin.left+20},i.getAxisClipHeight=function(a){return(a?this.margin.bottom:this.margin.top+this.height)+20},i.getXAxisClipWidth=function(){var a=this;return a.getAxisClipWidth(!a.config.axis_rotated)},i.getXAxisClipHeight=function(){var a=this;return a.getAxisClipHeight(!a.config.axis_rotated)},i.getYAxisClipWidth=function(){var a=this;return a.getAxisClipWidth(a.config.axis_rotated)+(a.config.axis_y_inner?20:0)},i.getYAxisClipHeight=function(){var a=this;return a.getAxisClipHeight(a.config.axis_rotated)},i.initPie=function(){var a=this,b=a.d3,c=a.config;a.pie=b.layout.pie().value(function(a){return a.values.reduce(function(a,b){return a+b.value},0)}),c.data_order||a.pie.sort(null)},i.updateRadius=function(){var a=this,b=a.config,c=b.gauge_width||b.donut_width;a.radiusExpanded=Math.min(a.arcWidth,a.arcHeight)/2,a.radius=.95*a.radiusExpanded,a.innerRadiusRatio=c?(a.radius-c)/a.radius:.6,a.innerRadius=a.hasType("donut")||a.hasType("gauge")?a.radius*a.innerRadiusRatio:0},i.updateArc=function(){var a=this;a.svgArc=a.getSvgArc(),a.svgArcExpanded=a.getSvgArcExpanded(),a.svgArcExpandedSub=a.getSvgArcExpanded(.98)},i.updateAngle=function(a){var b,c,d=this,e=d.config,f=!1,g=0,h=e.gauge_min,i=e.gauge_max;
return d.pie(d.filterTargetsToShow(d.data.targets)).forEach(function(b){f||b.data.id!==a.data.id||(f=!0,a=b,a.index=g),g++}),isNaN(a.startAngle)&&(a.startAngle=0),isNaN(a.endAngle)&&(a.endAngle=a.startAngle),d.isGaugeType(a.data)&&(b=Math.PI/(i-h),c=a.value<h?0:a.value<i?a.value-h:i-h,a.startAngle=-1*(Math.PI/2),a.endAngle=a.startAngle+b*c),f?a:null},i.getSvgArc=function(){var a=this,b=a.d3.svg.arc().outerRadius(a.radius).innerRadius(a.innerRadius),c=function(c,d){var e;return d?b(c):(e=a.updateAngle(c),e?b(e):"M 0 0")};return c.centroid=b.centroid,c},i.getSvgArcExpanded=function(a){var b=this,c=b.d3.svg.arc().outerRadius(b.radiusExpanded*(a?a:1)).innerRadius(b.innerRadius);return function(a){var d=b.updateAngle(a);return d?c(d):"M 0 0"}},i.getArc=function(a,b,c){return c||this.isArcType(a.data)?this.svgArc(a,b):"M 0 0"},i.transformForArcLabel=function(a){var b,c,d,e,f,g=this,h=g.updateAngle(a),i="";return h&&!g.hasType("gauge")&&(b=this.svgArc.centroid(h),c=isNaN(b[0])?0:b[0],d=isNaN(b[1])?0:b[1],e=Math.sqrt(c*c+d*d),f=g.radius&&e?(36/g.radius>.375?1.175-36/g.radius:.8)*g.radius/e:0,i="translate("+c*f+","+d*f+")"),i},i.getArcRatio=function(a){var b=this,c=b.hasType("gauge")?Math.PI:2*Math.PI;return a?(a.endAngle-a.startAngle)/c:null},i.convertToArcData=function(a){return this.addName({id:a.data.id,value:a.value,ratio:this.getArcRatio(a),index:a.index})},i.textForArcLabel=function(a){var b,c,d,e,f,g=this;return g.shouldShowArcLabel()?(b=g.updateAngle(a),c=b?b.value:null,d=g.getArcRatio(b),e=a.data.id,g.hasType("gauge")||g.meetsArcLabelThreshold(d)?(f=g.getArcLabelFormat(),f?f(c,d,e):g.defaultArcValueFormat(c,d)):""):""},i.expandArc=function(b){var c,d=this;return d.transiting?void(c=a.setInterval(function(){d.transiting||(a.clearInterval(c),d.legend.selectAll(".c3-legend-item-focused").size()>0&&d.expandArc(b))},10)):(b=d.mapToTargetIds(b),void d.svg.selectAll(d.selectorTargets(b,"."+l.chartArc)).each(function(a){d.shouldExpand(a.data.id)&&d.d3.select(this).selectAll("path").transition().duration(50).attr("d",d.svgArcExpanded).transition().duration(100).attr("d",d.svgArcExpandedSub).each(function(a){d.isDonutType(a.data)})}))},i.unexpandArc=function(a){var b=this;b.transiting||(a=b.mapToTargetIds(a),b.svg.selectAll(b.selectorTargets(a,"."+l.chartArc)).selectAll("path").transition().duration(50).attr("d",b.svgArc),b.svg.selectAll("."+l.arc).style("opacity",1))},i.shouldExpand=function(a){var b=this,c=b.config;return b.isDonutType(a)&&c.donut_expand||b.isGaugeType(a)&&c.gauge_expand||b.isPieType(a)&&c.pie_expand},i.shouldShowArcLabel=function(){var a=this,b=a.config,c=!0;return a.hasType("donut")?c=b.donut_label_show:a.hasType("pie")&&(c=b.pie_label_show),c},i.meetsArcLabelThreshold=function(a){var b=this,c=b.config,d=b.hasType("donut")?c.donut_label_threshold:c.pie_label_threshold;return a>=d},i.getArcLabelFormat=function(){var a=this,b=a.config,c=b.pie_label_format;return a.hasType("gauge")?c=b.gauge_label_format:a.hasType("donut")&&(c=b.donut_label_format),c},i.getArcTitle=function(){var a=this;return a.hasType("donut")?a.config.donut_title:""},i.updateTargetsForArc=function(a){var b,c,d=this,e=d.main,f=d.classChartArc.bind(d),g=d.classArcs.bind(d),h=d.classFocus.bind(d);b=e.select("."+l.chartArcs).selectAll("."+l.chartArc).data(d.pie(a)).attr("class",function(a){return f(a)+h(a.data)}),c=b.enter().append("g").attr("class",f),c.append("g").attr("class",g),c.append("text").attr("dy",d.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},i.initArc=function(){var a=this;a.arcs=a.main.select("."+l.chart).append("g").attr("class",l.chartArcs).attr("transform",a.getTranslate("arc")),a.arcs.append("text").attr("class",l.chartArcsTitle).style("text-anchor","middle").text(a.getArcTitle())},i.redrawArc=function(a,b,c){var d,e=this,f=e.d3,g=e.config,h=e.main;d=h.selectAll("."+l.arcs).selectAll("."+l.arc).data(e.arcData.bind(e)),d.enter().append("path").attr("class",e.classArc.bind(e)).style("fill",function(a){return e.color(a.data)}).style("cursor",function(a){return g.interaction_enabled&&g.data_selection_isselectable(a)?"pointer":null}).style("opacity",0).each(function(a){e.isGaugeType(a.data)&&(a.startAngle=a.endAngle=-1*(Math.PI/2)),this._current=a}),d.attr("transform",function(a){return!e.isGaugeType(a.data)&&c?"scale(0)":""}).style("opacity",function(a){return a===this._current?0:1}).on("mouseover",g.interaction_enabled?function(a){var b,c;e.transiting||(b=e.updateAngle(a),c=e.convertToArcData(b),e.expandArc(b.data.id),e.api.focus(b.data.id),e.toggleFocusLegend(b.data.id,!0),e.config.data_onmouseover(c,this))}:null).on("mousemove",g.interaction_enabled?function(a){var b=e.updateAngle(a),c=e.convertToArcData(b),d=[c];e.showTooltip(d,this)}:null).on("mouseout",g.interaction_enabled?function(a){var b,c;e.transiting||(b=e.updateAngle(a),c=e.convertToArcData(b),e.unexpandArc(b.data.id),e.api.revert(),e.revertLegend(),e.hideTooltip(),e.config.data_onmouseout(c,this))}:null).on("click",g.interaction_enabled?function(a,b){var c=e.updateAngle(a),d=e.convertToArcData(c);e.toggleShape&&e.toggleShape(this,d,b),e.config.data_onclick.call(e.api,d,this)}:null).each(function(){e.transiting=!0}).transition().duration(a).attrTween("d",function(a){var b,c=e.updateAngle(a);return c?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),b=f.interpolate(this._current,c),this._current=b(0),function(c){var d=b(c);return d.data=a.data,e.getArc(d,!0)}):function(){return"M 0 0"}}).attr("transform",c?"scale(1)":"").style("fill",function(a){return e.levelColor?e.levelColor(a.data.values[0].value):e.color(a.data.id)}).style("opacity",1).call(e.endall,function(){e.transiting=!1}),d.exit().transition().duration(b).style("opacity",0).remove(),h.selectAll("."+l.chartArc).select("text").style("opacity",0).attr("class",function(a){return e.isGaugeType(a.data)?l.gaugeValue:""}).text(e.textForArcLabel.bind(e)).attr("transform",e.transformForArcLabel.bind(e)).style("font-size",function(a){return e.isGaugeType(a.data)?Math.round(e.radius/5)+"px":""}).transition().duration(a).style("opacity",function(a){return e.isTargetToShow(a.data.id)&&e.isArcType(a.data)?1:0}),h.select("."+l.chartArcsTitle).style("opacity",e.hasType("donut")||e.hasType("gauge")?1:0),e.hasType("gauge")&&(e.arcs.select("."+l.chartArcsBackground).attr("d",function(){var a={data:[{value:g.gauge_max}],startAngle:-1*(Math.PI/2),endAngle:Math.PI/2};return e.getArc(a,!0,!0)}),e.arcs.select("."+l.chartArcsGaugeUnit).attr("dy",".75em").text(g.gauge_label_show?g.gauge_units:""),e.arcs.select("."+l.chartArcsGaugeMin).attr("dx",-1*(e.innerRadius+(e.radius-e.innerRadius)/2)+"px").attr("dy","1.2em").text(g.gauge_label_show?g.gauge_min:""),e.arcs.select("."+l.chartArcsGaugeMax).attr("dx",e.innerRadius+(e.radius-e.innerRadius)/2+"px").attr("dy","1.2em").text(g.gauge_label_show?g.gauge_max:""))},i.initGauge=function(){var a=this.arcs;this.hasType("gauge")&&(a.append("path").attr("class",l.chartArcsBackground),a.append("text").attr("class",l.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),a.append("text").attr("class",l.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),a.append("text").attr("class",l.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},i.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},i.initRegion=function(){var a=this;a.region=a.main.append("g").attr("clip-path",a.clipPath).attr("class",l.regions)},i.updateRegion=function(a){var b=this,c=b.config;b.region.style("visibility",b.hasArcType()?"hidden":"visible"),b.mainRegion=b.main.select("."+l.regions).selectAll("."+l.region).data(c.regions),b.mainRegion.enter().append("g").attr("class",b.classRegion.bind(b)).append("rect").style("fill-opacity",0),b.mainRegion.exit().transition().duration(a).style("opacity",0).remove()},i.redrawRegion=function(a){var b=this,c=b.mainRegion.selectAll("rect"),d=b.regionX.bind(b),e=b.regionY.bind(b),f=b.regionWidth.bind(b),g=b.regionHeight.bind(b);return[(a?c.transition():c).attr("x",d).attr("y",e).attr("width",f).attr("height",g).style("fill-opacity",function(a){return m(a.opacity)?a.opacity:.1})]},i.regionX=function(a){var b,c=this,d=c.config,e="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated&&"start"in a?e(a.start):0:d.axis_rotated?0:"start"in a?c.x(c.isTimeSeries()?c.parseDate(a.start):a.start):0},i.regionY=function(a){var b,c=this,d=c.config,e="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated?0:"end"in a?e(a.end):0:d.axis_rotated&&"start"in a?c.x(c.isTimeSeries()?c.parseDate(a.start):a.start):0},i.regionWidth=function(a){var b,c=this,d=c.config,e=c.regionX(a),f="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated&&"end"in a?f(a.end):c.width:d.axis_rotated?c.width:"end"in a?c.x(c.isTimeSeries()?c.parseDate(a.end):a.end):c.width,e>b?0:b-e},i.regionHeight=function(a){var b,c=this,d=c.config,e=this.regionY(a),f="y"===a.axis?c.y:c.y2;return b="y"===a.axis||"y2"===a.axis?d.axis_rotated?c.height:"start"in a?f(a.start):c.height:d.axis_rotated&&"end"in a?c.x(c.isTimeSeries()?c.parseDate(a.end):a.end):c.height,e>b?0:b-e},i.isRegionOnX=function(a){return!a.axis||"x"===a.axis},i.drag=function(a){var b,c,d,e,f,g,h,i,j=this,k=j.config,m=j.main,n=j.d3;j.hasArcType()||k.data_selection_enabled&&(!k.zoom_enabled||j.zoom.altDomain)&&k.data_selection_multiple&&(b=j.dragStart[0],c=j.dragStart[1],d=a[0],e=a[1],f=Math.min(b,d),g=Math.max(b,d),h=k.data_selection_grouped?j.margin.top:Math.min(c,e),i=k.data_selection_grouped?j.height:Math.max(c,e),m.select("."+l.dragarea).attr("x",f).attr("y",h).attr("width",g-f).attr("height",i-h),m.selectAll("."+l.shapes).selectAll("."+l.shape).filter(function(a){return k.data_selection_isselectable(a)}).each(function(a,b){var c,d,e,k,m,o,p=n.select(this),q=p.classed(l.SELECTED),r=p.classed(l.INCLUDED),s=!1;if(p.classed(l.circle))c=1*p.attr("cx"),d=1*p.attr("cy"),m=j.togglePoint,s=c>f&&g>c&&d>h&&i>d;else{if(!p.classed(l.bar))return;o=y(this),c=o.x,d=o.y,e=o.width,k=o.height,m=j.togglePath,s=!(c>g||f>c+e||d>i||h>d+k)}s^r&&(p.classed(l.INCLUDED,!r),p.classed(l.SELECTED,!q),m.call(j,!q,p,a,b))}))},i.dragstart=function(a){var b=this,c=b.config;b.hasArcType()||c.data_selection_enabled&&(b.dragStart=a,b.main.select("."+l.chart).append("rect").attr("class",l.dragarea).style("opacity",.1),b.dragging=!0)},i.dragend=function(){var a=this,b=a.config;a.hasArcType()||b.data_selection_enabled&&(a.main.select("."+l.dragarea).transition().duration(100).style("opacity",0).remove(),a.main.selectAll("."+l.shape).classed(l.INCLUDED,!1),a.dragging=!1)},i.selectPoint=function(a,b,c){var d=this,e=d.config,f=(e.axis_rotated?d.circleY:d.circleX).bind(d),g=(e.axis_rotated?d.circleX:d.circleY).bind(d),h=d.pointSelectR.bind(d);e.data_onselected.call(d.api,b,a.node()),d.main.select("."+l.selectedCircles+d.getTargetSelectorSuffix(b.id)).selectAll("."+l.selectedCircle+"-"+c).data([b]).enter().append("circle").attr("class",function(){return d.generateClass(l.selectedCircle,c)}).attr("cx",f).attr("cy",g).attr("stroke",function(){return d.color(b)}).attr("r",function(a){return 1.4*d.pointSelectR(a)}).transition().duration(100).attr("r",h)},i.unselectPoint=function(a,b,c){var d=this;d.config.data_onunselected(b,a.node()),d.main.select("."+l.selectedCircles+d.getTargetSelectorSuffix(b.id)).selectAll("."+l.selectedCircle+"-"+c).transition().duration(100).attr("r",0).remove()},i.togglePoint=function(a,b,c,d){a?this.selectPoint(b,c,d):this.unselectPoint(b,c,d)},i.selectPath=function(a,b){var c=this;c.config.data_onselected.call(c,b,a.node()),a.transition().duration(100).style("fill",function(){return c.d3.rgb(c.color(b)).brighter(.75)})},i.unselectPath=function(a,b){var c=this;c.config.data_onunselected.call(c,b,a.node()),a.transition().duration(100).style("fill",function(){return c.color(b)})},i.togglePath=function(a,b,c,d){a?this.selectPath(b,c,d):this.unselectPath(b,c,d)},i.getToggle=function(a,b){var c,d=this;return"circle"===a.nodeName?c=d.isStepType(b)?function(){}:d.togglePoint:"path"===a.nodeName&&(c=d.togglePath),c},i.toggleShape=function(a,b,c){var d=this,e=d.d3,f=d.config,g=e.select(a),h=g.classed(l.SELECTED),i=d.getToggle(a,b).bind(d);f.data_selection_enabled&&f.data_selection_isselectable(b)&&(f.data_selection_multiple||d.main.selectAll("."+l.shapes+(f.data_selection_grouped?d.getTargetSelectorSuffix(b.id):"")).selectAll("."+l.shape).each(function(a,b){var c=e.select(this);c.classed(l.SELECTED)&&i(!1,c.classed(l.SELECTED,!1),a,b)}),g.classed(l.SELECTED,!h),i(!h,g,b,c))},i.initBrush=function(){var a=this,b=a.d3;a.brush=b.svg.brush().on("brush",function(){a.redrawForBrush()}),a.brush.update=function(){return a.context&&a.context.select("."+l.brush).call(this),this},a.brush.scale=function(b){return a.config.axis_rotated?this.y(b):this.x(b)}},i.initSubchart=function(){var a=this,b=a.config,c=a.context=a.svg.append("g").attr("transform",a.getTranslate("context"));c.style("visibility",b.subchart_show?"visible":"hidden"),c.append("g").attr("clip-path",a.clipPathForSubchart).attr("class",l.chart),c.select("."+l.chart).append("g").attr("class",l.chartBars),c.select("."+l.chart).append("g").attr("class",l.chartLines),c.append("g").attr("clip-path",a.clipPath).attr("class",l.brush).call(a.brush),a.axes.subx=c.append("g").attr("class",l.axisX).attr("transform",a.getTranslate("subx")).attr("clip-path",b.axis_rotated?"":a.clipPathForXAxis)},i.updateTargetsForSubchart=function(a){var b,c,d,e,f=this,g=f.context,h=f.config,i=f.classChartBar.bind(f),j=f.classBars.bind(f),k=f.classChartLine.bind(f),m=f.classLines.bind(f),n=f.classAreas.bind(f);h.subchart_show&&(e=g.select("."+l.chartBars).selectAll("."+l.chartBar).data(a).attr("class",i),d=e.enter().append("g").style("opacity",0).attr("class",i),d.append("g").attr("class",j),c=g.select("."+l.chartLines).selectAll("."+l.chartLine).data(a).attr("class",k),b=c.enter().append("g").style("opacity",0).attr("class",k),b.append("g").attr("class",m),b.append("g").attr("class",n),g.selectAll("."+l.brush+" rect").attr(h.axis_rotated?"width":"height",h.axis_rotated?f.width2:f.height2))},i.updateBarForSubchart=function(a){var b=this;b.contextBar=b.context.selectAll("."+l.bars).selectAll("."+l.bar).data(b.barData.bind(b)),b.contextBar.enter().append("path").attr("class",b.classBar.bind(b)).style("stroke","none").style("fill",b.color),b.contextBar.style("opacity",b.initialOpacity.bind(b)),b.contextBar.exit().transition().duration(a).style("opacity",0).remove()},i.redrawBarForSubchart=function(a,b,c){(b?this.contextBar.transition().duration(c):this.contextBar).attr("d",a).style("opacity",1)},i.updateLineForSubchart=function(a){var b=this;b.contextLine=b.context.selectAll("."+l.lines).selectAll("."+l.line).data(b.lineData.bind(b)),b.contextLine.enter().append("path").attr("class",b.classLine.bind(b)).style("stroke",b.color),b.contextLine.style("opacity",b.initialOpacity.bind(b)),b.contextLine.exit().transition().duration(a).style("opacity",0).remove()},i.redrawLineForSubchart=function(a,b,c){(b?this.contextLine.transition().duration(c):this.contextLine).attr("d",a).style("opacity",1)},i.updateAreaForSubchart=function(a){var b=this,c=b.d3;b.contextArea=b.context.selectAll("."+l.areas).selectAll("."+l.area).data(b.lineData.bind(b)),b.contextArea.enter().append("path").attr("class",b.classArea.bind(b)).style("fill",b.color).style("opacity",function(){return b.orgAreaOpacity=+c.select(this).style("opacity"),0}),b.contextArea.style("opacity",0),b.contextArea.exit().transition().duration(a).style("opacity",0).remove()},i.redrawAreaForSubchart=function(a,b,c){(b?this.contextArea.transition().duration(c):this.contextArea).attr("d",a).style("fill",this.color).style("opacity",this.orgAreaOpacity)},i.redrawSubchart=function(a,b,c,d,e,f,g){var h,i,j,k=this,l=k.d3,m=k.config;k.context.style("visibility",m.subchart_show?"visible":"hidden"),m.subchart_show&&(l.event&&"zoom"===l.event.type&&k.brush.extent(k.x.orgDomain()).update(),a&&(k.brush.empty()||k.brush.extent(k.x.orgDomain()).update(),h=k.generateDrawArea(e,!0),i=k.generateDrawBar(f,!0),j=k.generateDrawLine(g,!0),k.updateBarForSubchart(c),k.updateLineForSubchart(c),k.updateAreaForSubchart(c),k.redrawBarForSubchart(i,c,c),k.redrawLineForSubchart(j,c,c),k.redrawAreaForSubchart(h,c,c)))},i.redrawForBrush=function(){var a=this,b=a.x;a.redraw({withTransition:!1,withY:a.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withDimension:!1}),a.config.subchart_onbrush.call(a.api,b.orgDomain())},i.transformContext=function(a,b){var c,d=this;b&&b.axisSubX?c=b.axisSubX:(c=d.context.select("."+l.axisX),a&&(c=c.transition())),d.context.attr("transform",d.getTranslate("context")),c.attr("transform",d.getTranslate("subx"))},i.getDefaultExtent=function(){var a=this,b=a.config,c=n(b.axis_x_extent)?b.axis_x_extent(a.getXDomain(a.data.targets)):b.axis_x_extent;return a.isTimeSeries()&&(c=[a.parseDate(c[0]),a.parseDate(c[1])]),c},i.initZoom=function(){var a,b=this,c=b.d3,d=b.config;b.zoom=c.behavior.zoom().on("zoomstart",function(){a=c.event.sourceEvent,b.zoom.altDomain=c.event.sourceEvent.altKey?b.x.orgDomain():null,d.zoom_onzoomstart.call(b.api,c.event.sourceEvent)}).on("zoom",function(){b.redrawForZoom.call(b)}).on("zoomend",function(){var e=c.event.sourceEvent;e&&a.clientX===e.clientX&&a.clientY===e.clientY||(b.redrawEventRect(),b.updateZoom(),d.zoom_onzoomend.call(b.api,b.x.orgDomain()))}),b.zoom.scale=function(a){return d.axis_rotated?this.y(a):this.x(a)},b.zoom.orgScaleExtent=function(){var a=d.zoom_extent?d.zoom_extent:[1,10];return[a[0],Math.max(b.getMaxDataCount()/a[1],a[1])]},b.zoom.updateScaleExtent=function(){var a=t(b.x.orgDomain())/t(b.orgXDomain),c=this.orgScaleExtent();return this.scaleExtent([c[0]*a,c[1]*a]),this}},i.updateZoom=function(){var a=this,b=a.config.zoom_enabled?a.zoom:function(){};a.main.select("."+l.zoomRect).call(b).on("dblclick.zoom",null),a.main.selectAll("."+l.eventRect).call(b).on("dblclick.zoom",null)},i.redrawForZoom=function(){var a=this,b=a.d3,c=a.config,d=a.zoom,e=a.x;if(c.zoom_enabled&&0!==a.filterTargetsToShow(a.data.targets).length){if("mousemove"===b.event.sourceEvent.type&&d.altDomain)return e.domain(d.altDomain),void d.scale(e).updateScaleExtent();a.isCategorized()&&e.orgDomain()[0]===a.orgXDomain[0]&&e.domain([a.orgXDomain[0]-1e-10,e.orgDomain()[1]]),a.redraw({withTransition:!1,withY:c.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),"mousemove"===b.event.sourceEvent.type&&(a.cancelClick=!0),c.zoom_onzoom.call(a.api,e.orgDomain())}},i.generateColor=function(){var a=this,b=a.config,c=a.d3,d=b.data_colors,e=v(b.color_pattern)?b.color_pattern:c.scale.category10().range(),f=b.data_color,g=[];return function(a){var b,c=a.id||a.data&&a.data.id||a;return d[c]instanceof Function?b=d[c](a):d[c]?b=d[c]:(g.indexOf(c)<0&&g.push(c),b=e[g.indexOf(c)%e.length],d[c]=b),f instanceof Function?f(b,a):b}},i.generateLevelColor=function(){var a=this,b=a.config,c=b.color_pattern,d=b.color_threshold,e="value"===d.unit,f=d.values&&d.values.length?d.values:[],g=d.max||100;return v(b.color_threshold)?function(a){var b,d,h=c[c.length-1];for(b=0;b<f.length;b++)if(d=e?a:100*a/g,d<f[b]){h=c[b];break}return h}:null},i.getYFormat=function(a){var b=this,c=a&&!b.hasType("gauge")?b.defaultArcValueFormat:b.yFormat,d=a&&!b.hasType("gauge")?b.defaultArcValueFormat:b.y2Format;return function(a,e,f){var g="y2"===b.axis.getId(f)?d:c;return g.call(b,a,e)}},i.yFormat=function(a){var b=this,c=b.config,d=c.axis_y_tick_format?c.axis_y_tick_format:b.defaultValueFormat;return d(a)},i.y2Format=function(a){var b=this,c=b.config,d=c.axis_y2_tick_format?c.axis_y2_tick_format:b.defaultValueFormat;return d(a)},i.defaultValueFormat=function(a){return m(a)?+a:""},i.defaultArcValueFormat=function(a,b){return(100*b).toFixed(1)+"%"},i.dataLabelFormat=function(a){var b,c=this,d=c.config.data_labels,e=function(a){return m(a)?+a:""};return b="function"==typeof d.format?d.format:"object"==typeof d.format?d.format[a]?d.format[a]===!0?e:d.format[a]:function(){return""}:e},i.hasCaches=function(a){for(var b=0;b<a.length;b++)if(!(a[b]in this.cache))return!1;return!0},i.addCache=function(a,b){this.cache[a]=this.cloneTarget(b)},i.getCaches=function(a){var b,c=[];for(b=0;b<a.length;b++)a[b]in this.cache&&c.push(this.cloneTarget(this.cache[a[b]]));return c};var l=i.CLASS={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"};i.generateClass=function(a,b){return" "+a+" "+a+this.getTargetSelectorSuffix(b)},i.classText=function(a){return this.generateClass(l.text,a.index)},i.classTexts=function(a){return this.generateClass(l.texts,a.id)},i.classShape=function(a){return this.generateClass(l.shape,a.index)},i.classShapes=function(a){return this.generateClass(l.shapes,a.id)},i.classLine=function(a){return this.classShape(a)+this.generateClass(l.line,a.id)},i.classLines=function(a){return this.classShapes(a)+this.generateClass(l.lines,a.id)},i.classCircle=function(a){return this.classShape(a)+this.generateClass(l.circle,a.index)},i.classCircles=function(a){return this.classShapes(a)+this.generateClass(l.circles,a.id)},i.classBar=function(a){return this.classShape(a)+this.generateClass(l.bar,a.index)},i.classBars=function(a){return this.classShapes(a)+this.generateClass(l.bars,a.id)},i.classArc=function(a){return this.classShape(a.data)+this.generateClass(l.arc,a.data.id)},i.classArcs=function(a){return this.classShapes(a.data)+this.generateClass(l.arcs,a.data.id)},i.classArea=function(a){return this.classShape(a)+this.generateClass(l.area,a.id)},i.classAreas=function(a){return this.classShapes(a)+this.generateClass(l.areas,a.id)},i.classRegion=function(a,b){return this.generateClass(l.region,b)+" "+("class"in a?a["class"]:"")},i.classEvent=function(a){return this.generateClass(l.eventRect,a.index)},i.classTarget=function(a){var b=this,c=b.config.data_classes[a],d="";return c&&(d=" "+l.target+"-"+c),b.generateClass(l.target,a)+d},i.classFocus=function(a){return this.classFocused(a)+this.classDefocused(a)},i.classFocused=function(a){return" "+(this.focusedTargetIds.indexOf(a.id)>=0?l.focused:"")},i.classDefocused=function(a){return" "+(this.defocusedTargetIds.indexOf(a.id)>=0?l.defocused:"")},i.classChartText=function(a){return l.chartText+this.classTarget(a.id)},i.classChartLine=function(a){return l.chartLine+this.classTarget(a.id)},i.classChartBar=function(a){return l.chartBar+this.classTarget(a.id)},i.classChartArc=function(a){return l.chartArc+this.classTarget(a.data.id)},i.getTargetSelectorSuffix=function(a){return a||0===a?("-"+a).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g,"-"):""},i.selectorTarget=function(a,b){return(b||"")+"."+l.target+this.getTargetSelectorSuffix(a)},i.selectorTargets=function(a,b){var c=this;return a=a||[],a.length?a.map(function(a){return c.selectorTarget(a,b)}):null},i.selectorLegend=function(a){return"."+l.legendItem+this.getTargetSelectorSuffix(a)},i.selectorLegends=function(a){var b=this;return a&&a.length?a.map(function(a){return b.selectorLegend(a)}):null};var m=i.isValue=function(a){return a||0===a},n=i.isFunction=function(a){return"function"==typeof a},o=i.isString=function(a){return"string"==typeof a},p=i.isUndefined=function(a){return"undefined"==typeof a},q=i.isDefined=function(a){return"undefined"!=typeof a},r=i.ceil10=function(a){return 10*Math.ceil(a/10)},s=i.asHalfPixel=function(a){return Math.ceil(a)+.5},t=i.diffDomain=function(a){return a[1]-a[0]},u=i.isEmpty=function(a){return!a||o(a)&&0===a.length||"object"==typeof a&&0===Object.keys(a).length},v=i.notEmpty=function(a){return Object.keys(a).length>0},w=i.getOption=function(a,b,c){return q(a[b])?a[b]:c},x=i.hasValue=function(a,b){var c=!1;return Object.keys(a).forEach(function(d){a[d]===b&&(c=!0)}),c},y=i.getPathBox=function(a){var b=a.getBoundingClientRect(),c=[a.pathSegList.getItem(0),a.pathSegList.getItem(1)],d=c[0].x,e=Math.min(c[0].y,c[1].y);return{x:d,y:e,width:b.width,height:b.height}};h.focus=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow,c))),this.revert(),this.defocus(),b.classed(l.focused,!0).classed(l.defocused,!1),c.hasArcType()&&c.expandArc(a),c.toggleFocusLegend(a,!0),c.focusedTargetIds=a,c.defocusedTargetIds=c.defocusedTargetIds.filter(function(b){return a.indexOf(b)<0})},h.defocus=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow,c))),b.classed(l.focused,!1).classed(l.defocused,!0),c.hasArcType()&&c.unexpandArc(a),c.toggleFocusLegend(a,!1),c.focusedTargetIds=c.focusedTargetIds.filter(function(b){return a.indexOf(b)<0}),c.defocusedTargetIds=a},h.revert=function(a){var b,c=this.internal;a=c.mapToTargetIds(a),b=c.svg.selectAll(c.selectorTargets(a)),b.classed(l.focused,!1).classed(l.defocused,!1),c.hasArcType()&&c.unexpandArc(a),c.config.legend_show&&(c.showLegend(a.filter(c.isLegendToShow.bind(c))),c.legend.selectAll(c.selectorLegends(a)).filter(function(){return c.d3.select(this).classed(l.legendItemFocused)}).classed(l.legendItemFocused,!1)),c.focusedTargetIds=[],c.defocusedTargetIds=[]},h.show=function(a,b){var c,d=this.internal;a=d.mapToTargetIds(a),b=b||{},d.removeHiddenTargetIds(a),c=d.svg.selectAll(d.selectorTargets(a)),c.transition().style("opacity",1,"important").call(d.endall,function(){c.style("opacity",null).style("opacity",1)}),b.withLegend&&d.showLegend(a),d.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},h.hide=function(a,b){var c,d=this.internal;a=d.mapToTargetIds(a),b=b||{},d.addHiddenTargetIds(a),c=d.svg.selectAll(d.selectorTargets(a)),c.transition().style("opacity",0,"important").call(d.endall,function(){c.style("opacity",null).style("opacity",0)}),b.withLegend&&d.hideLegend(a),d.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},h.toggle=function(a,b){var c=this,d=this.internal;d.mapToTargetIds(a).forEach(function(a){d.isTargetToShow(a)?c.hide(a,b):c.show(a,b)})},h.zoom=function(a){var b=this.internal;return a&&(b.isTimeSeries()&&(a=a.map(function(a){return b.parseDate(a)})),b.brush.extent(a),b.redraw({withUpdateXDomain:!0,withY:b.config.zoom_rescale}),b.config.zoom_onzoom.call(this,b.x.orgDomain())),b.brush.extent()},h.zoom.enable=function(a){var b=this.internal;b.config.zoom_enabled=a,b.updateAndRedraw()},h.unzoom=function(){var a=this.internal;a.brush.clear().update(),a.redraw({withUpdateXDomain:!0})},h.load=function(a){var b=this.internal,c=b.config;return a.xs&&b.addXs(a.xs),"classes"in a&&Object.keys(a.classes).forEach(function(b){c.data_classes[b]=a.classes[b]}),"categories"in a&&b.isCategorized()&&(c.axis_x_categories=a.categories),"axes"in a&&Object.keys(a.axes).forEach(function(b){c.data_axes[b]=a.axes[b]}),"colors"in a&&Object.keys(a.colors).forEach(function(b){c.data_colors[b]=a.colors[b]}),"cacheIds"in a&&b.hasCaches(a.cacheIds)?void b.load(b.getCaches(a.cacheIds),a.done):void("unload"in a?b.unload(b.mapToTargetIds("boolean"==typeof a.unload&&a.unload?null:a.unload),function(){b.loadFromArgs(a)}):b.loadFromArgs(a))},h.unload=function(a){var b=this.internal;a=a||{},a instanceof Array?a={ids:a}:"string"==typeof a&&(a={ids:[a]}),b.unload(b.mapToTargetIds(a.ids),function(){b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),a.done&&a.done()})},h.flow=function(a){var b,c,d,e,f,g,h,i,j=this.internal,k=[],l=j.getMaxDataCount(),n=0,o=0;if(a.json)c=j.convertJsonToData(a.json,a.keys);else if(a.rows)c=j.convertRowsToData(a.rows);else{if(!a.columns)return;c=j.convertColumnsToData(a.columns)}b=j.convertDataToTargets(c,!0),j.data.targets.forEach(function(a){var c,d,e=!1;for(c=0;c<b.length;c++)if(a.id===b[c].id){for(e=!0,a.values[a.values.length-1]&&(o=a.values[a.values.length-1].index+1),n=b[c].values.length,d=0;n>d;d++)b[c].values[d].index=o+d,j.isTimeSeries()||(b[c].values[d].x=o+d);a.values=a.values.concat(b[c].values),b.splice(c,1);break}e||k.push(a.id)}),j.data.targets.forEach(function(a){var b,c;for(b=0;b<k.length;b++)if(a.id===k[b])for(o=a.values[a.values.length-1].index+1,c=0;n>c;c++)a.values.push({id:a.id,index:o+c,x:j.isTimeSeries()?j.getOtherTargetX(o+c):o+c,value:null})}),j.data.targets.length&&b.forEach(function(a){var b,c=[];for(b=j.data.targets[0].values[0].index;o>b;b++)c.push({id:a.id,index:b,x:j.isTimeSeries()?j.getOtherTargetX(b):b,value:null});a.values.forEach(function(a){a.index+=o,j.isTimeSeries()||(a.x+=o)}),a.values=c.concat(a.values)}),j.data.targets=j.data.targets.concat(b),d=j.getMaxDataCount(),f=j.data.targets[0],g=f.values[0],q(a.to)?(n=0,i=j.isTimeSeries()?j.parseDate(a.to):a.to,f.values.forEach(function(a){a.x<i&&n++})):q(a.length)&&(n=a.length),l?1===l&&j.isTimeSeries()&&(h=(f.values[f.values.length-1].x-g.x)/2,e=[new Date(+g.x-h),new Date(+g.x+h)],j.updateXDomain(null,!0,!0,!1,e)):(h=j.isTimeSeries()?f.values.length>1?f.values[f.values.length-1].x-g.x:g.x-j.getXDomain(j.data.targets)[0]:1,e=[g.x-h,g.x],j.updateXDomain(null,!0,!0,!1,e)),j.updateTargets(j.data.targets),j.redraw({flow:{index:g.index,length:n,duration:m(a.duration)?a.duration:j.config.transition_duration,done:a.done,orgDataCount:l},withLegend:!0,withTransition:l>1,withTrimXDomain:!1,withUpdateXAxis:!0})},i.generateFlow=function(a){var b=this,c=b.config,d=b.d3;return function(){var e,f,g,h=a.targets,i=a.flow,j=a.drawBar,k=a.drawLine,m=a.drawArea,n=a.cx,o=a.cy,p=a.xv,q=a.xForText,r=a.yForText,s=a.duration,u=1,v=i.index,w=i.length,x=b.getValueOnIndex(b.data.targets[0].values,v),y=b.getValueOnIndex(b.data.targets[0].values,v+w),z=b.x.domain(),A=i.duration||s,B=i.done||function(){},C=b.generateWait(),D=b.xgrid||d.selectAll([]),E=b.xgridLines||d.selectAll([]),F=b.mainRegion||d.selectAll([]),G=b.mainText||d.selectAll([]),H=b.mainBar||d.selectAll([]),I=b.mainLine||d.selectAll([]),J=b.mainArea||d.selectAll([]),K=b.mainCircle||d.selectAll([]);b.flowing=!0,b.data.targets.forEach(function(a){a.values.splice(0,w)}),g=b.updateXDomain(h,!0,!0),b.updateXGrid&&b.updateXGrid(!0),i.orgDataCount?e=1===i.orgDataCount||x.x===y.x?b.x(z[0])-b.x(g[0]):b.isTimeSeries()?b.x(z[0])-b.x(g[0]):b.x(x.x)-b.x(y.x):1!==b.data.targets[0].values.length?e=b.x(z[0])-b.x(g[0]):b.isTimeSeries()?(x=b.getValueOnIndex(b.data.targets[0].values,0),y=b.getValueOnIndex(b.data.targets[0].values,b.data.targets[0].values.length-1),e=b.x(x.x)-b.x(y.x)):e=t(g)/2,u=t(z)/t(g),f="translate("+e+",0) scale("+u+",1)",b.hideXGridFocus(),b.hideTooltip(),d.transition().ease("linear").duration(A).each(function(){C.add(b.axes.x.transition().call(b.xAxis)),C.add(H.transition().attr("transform",f)),C.add(I.transition().attr("transform",f)),C.add(J.transition().attr("transform",f)),C.add(K.transition().attr("transform",f)),C.add(G.transition().attr("transform",f)),C.add(F.filter(b.isRegionOnX).transition().attr("transform",f)),C.add(D.transition().attr("transform",f)),C.add(E.transition().attr("transform",f))
}).call(C,function(){var a,d=[],e=[],f=[];if(w){for(a=0;w>a;a++)d.push("."+l.shape+"-"+(v+a)),e.push("."+l.text+"-"+(v+a)),f.push("."+l.eventRect+"-"+(v+a));b.svg.selectAll("."+l.shapes).selectAll(d).remove(),b.svg.selectAll("."+l.texts).selectAll(e).remove(),b.svg.selectAll("."+l.eventRects).selectAll(f).remove(),b.svg.select("."+l.xgrid).remove()}D.attr("transform",null).attr(b.xgridAttr),E.attr("transform",null),E.select("line").attr("x1",c.axis_rotated?0:p).attr("x2",c.axis_rotated?b.width:p),E.select("text").attr("x",c.axis_rotated?b.width:0).attr("y",p),H.attr("transform",null).attr("d",j),I.attr("transform",null).attr("d",k),J.attr("transform",null).attr("d",m),K.attr("transform",null).attr("cx",n).attr("cy",o),G.attr("transform",null).attr("x",q).attr("y",r).style("fill-opacity",b.opacityForText.bind(b)),F.attr("transform",null),F.select("rect").filter(b.isRegionOnX).attr("x",b.regionX.bind(b)).attr("width",b.regionWidth.bind(b)),c.interaction_enabled&&b.redrawEventRect(),B(),b.flowing=!1})}},h.selected=function(a){var b=this.internal,c=b.d3;return c.merge(b.main.selectAll("."+l.shapes+b.getTargetSelectorSuffix(a)).selectAll("."+l.shape).filter(function(){return c.select(this).classed(l.SELECTED)}).map(function(a){return a.map(function(a){var b=a.__data__;return b.data?b.data:b})}))},h.select=function(a,b,c){var d=this.internal,e=d.d3,f=d.config;f.data_selection_enabled&&d.main.selectAll("."+l.shapes).selectAll("."+l.shape).each(function(g,h){var i=e.select(this),j=g.data?g.data.id:g.id,k=d.getToggle(this,g).bind(d),m=f.data_selection_grouped||!a||a.indexOf(j)>=0,n=!b||b.indexOf(h)>=0,o=i.classed(l.SELECTED);i.classed(l.line)||i.classed(l.area)||(m&&n?f.data_selection_isselectable(g)&&!o&&k(!0,i.classed(l.SELECTED,!0),g,h):q(c)&&c&&o&&k(!1,i.classed(l.SELECTED,!1),g,h))})},h.unselect=function(a,b){var c=this.internal,d=c.d3,e=c.config;e.data_selection_enabled&&c.main.selectAll("."+l.shapes).selectAll("."+l.shape).each(function(f,g){var h=d.select(this),i=f.data?f.data.id:f.id,j=c.getToggle(this,f).bind(c),k=e.data_selection_grouped||!a||a.indexOf(i)>=0,m=!b||b.indexOf(g)>=0,n=h.classed(l.SELECTED);h.classed(l.line)||h.classed(l.area)||k&&m&&e.data_selection_isselectable(f)&&n&&j(!1,h.classed(l.SELECTED,!1),f,g)})},h.transform=function(a,b){var c=this.internal,d=["pie","donut"].indexOf(a)>=0?{withTransform:!0}:null;c.transformTo(b,a,d)},i.transformTo=function(a,b,c){var d=this,e=!d.hasArcType(),f=c||{withTransitionForAxis:e};f.withTransitionForTransform=!1,d.transiting=!1,d.setTargetType(a,b),d.updateTargets(d.data.targets),d.updateAndRedraw(f)},h.groups=function(a){var b=this.internal,c=b.config;return p(a)?c.data_groups:(c.data_groups=a,b.redraw(),c.data_groups)},h.xgrids=function(a){var b=this.internal,c=b.config;return a?(c.grid_x_lines=a,b.redrawWithoutRescale(),c.grid_x_lines):c.grid_x_lines},h.xgrids.add=function(a){var b=this.internal;return this.xgrids(b.config.grid_x_lines.concat(a?a:[]))},h.xgrids.remove=function(a){var b=this.internal;b.removeGridLines(a,!0)},h.ygrids=function(a){var b=this.internal,c=b.config;return a?(c.grid_y_lines=a,b.redrawWithoutRescale(),c.grid_y_lines):c.grid_y_lines},h.ygrids.add=function(a){var b=this.internal;return this.ygrids(b.config.grid_y_lines.concat(a?a:[]))},h.ygrids.remove=function(a){var b=this.internal;b.removeGridLines(a,!1)},h.regions=function(a){var b=this.internal,c=b.config;return a?(c.regions=a,b.redrawWithoutRescale(),c.regions):c.regions},h.regions.add=function(a){var b=this.internal,c=b.config;return a?(c.regions=c.regions.concat(a),b.redrawWithoutRescale(),c.regions):c.regions},h.regions.remove=function(a){var b,c,d,e=this.internal,f=e.config;return a=a||{},b=e.getOption(a,"duration",f.transition_duration),c=e.getOption(a,"classes",[l.region]),d=e.main.select("."+l.regions).selectAll(c.map(function(a){return"."+a})),(b?d.transition().duration(b):d).style("opacity",0).remove(),f.regions=f.regions.filter(function(a){var b=!1;return a["class"]?(a["class"].split(" ").forEach(function(a){c.indexOf(a)>=0&&(b=!0)}),!b):!0}),f.regions},h.data=function(a){var b=this.internal.data.targets;return"undefined"==typeof a?b:b.filter(function(b){return[].concat(a).indexOf(b.id)>=0})},h.data.shown=function(a){return this.internal.filterTargetsToShow(this.data(a))},h.data.values=function(a){var b,c=null;return a&&(b=this.data(a),c=b[0]?b[0].values.map(function(a){return a.value}):null),c},h.data.names=function(a){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",a)},h.data.colors=function(a){return this.internal.updateDataAttributes("colors",a)},h.data.axes=function(a){return this.internal.updateDataAttributes("axes",a)},h.category=function(a,b){var c=this.internal,d=c.config;return arguments.length>1&&(d.axis_x_categories[a]=b,c.redraw()),d.axis_x_categories[a]},h.categories=function(a){var b=this.internal,c=b.config;return arguments.length?(c.axis_x_categories=a,b.redraw(),c.axis_x_categories):c.axis_x_categories},h.color=function(a){var b=this.internal;return b.color(a)},h.x=function(a){var b=this.internal;return arguments.length&&(b.updateTargetX(b.data.targets,a),b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),b.data.xs},h.xs=function(a){var b=this.internal;return arguments.length&&(b.updateTargetXs(b.data.targets,a),b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),b.data.xs},h.axis=function(){},h.axis.labels=function(a){var b=this.internal;arguments.length&&(Object.keys(a).forEach(function(c){b.axis.setLabelText(c,a[c])}),b.axis.updateLabels())},h.axis.max=function(a){var b=this.internal,c=b.config;return arguments.length?("object"==typeof a?(m(a.x)&&(c.axis_x_max=a.x),m(a.y)&&(c.axis_y_max=a.y),m(a.y2)&&(c.axis_y2_max=a.y2)):c.axis_y_max=c.axis_y2_max=a,void b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})):{x:c.axis_x_max,y:c.axis_y_max,y2:c.axis_y2_max}},h.axis.min=function(a){var b=this.internal,c=b.config;return arguments.length?("object"==typeof a?(m(a.x)&&(c.axis_x_min=a.x),m(a.y)&&(c.axis_y_min=a.y),m(a.y2)&&(c.axis_y2_min=a.y2)):c.axis_y_min=c.axis_y2_min=a,void b.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})):{x:c.axis_x_min,y:c.axis_y_min,y2:c.axis_y2_min}},h.axis.range=function(a){return arguments.length?(q(a.max)&&this.axis.max(a.max),void(q(a.min)&&this.axis.min(a.min))):{max:this.axis.max(),min:this.axis.min()}},h.legend=function(){},h.legend.show=function(a){var b=this.internal;b.showLegend(b.mapToTargetIds(a)),b.updateAndRedraw({withLegend:!0})},h.legend.hide=function(a){var b=this.internal;b.hideLegend(b.mapToTargetIds(a)),b.updateAndRedraw({withLegend:!0})},h.resize=function(a){var b=this.internal,c=b.config;c.size_width=a?a.width:null,c.size_height=a?a.height:null,this.flush()},h.flush=function(){var a=this.internal;a.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},h.destroy=function(){var b=this.internal;return a.clearInterval(b.intervalForObserveInserted),a.onresize=null,b.selectChart.classed("c3",!1).html(""),Object.keys(b).forEach(function(a){b[a]=null}),null},h.tooltip=function(){},h.tooltip.show=function(a){var b,c,d=this.internal;a.mouse&&(c=a.mouse),a.data?d.isMultipleX()?(c=[d.x(a.data.x),d.getYScale(a.data.id)(a.data.value)],b=null):b=m(a.data.index)?a.data.index:d.getIndexByX(a.data.x):"undefined"!=typeof a.x?b=d.getIndexByX(a.x):"undefined"!=typeof a.index&&(b=a.index),d.dispatchEvent("mouseover",b,c),d.dispatchEvent("mousemove",b,c)},h.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0)};var z;i.isSafari=function(){var b=a.navigator.userAgent;return b.indexOf("Safari")>=0&&b.indexOf("Chrome")<0},i.isChrome=function(){var b=a.navigator.userAgent;return b.indexOf("Chrome")>=0},Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),"function"==typeof define&&define.amd?define("c3",["d3"],k):"undefined"!=typeof exports&&"undefined"!=typeof module?module.exports=k:a.c3=k}(window);
/*!
 * pickadate.js v3.5.6, 2015/04/20
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )
var supportsTransitions = document.documentElement.style.transition != null


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root and then prepare it.
                P.$root = $( '<div class="' + CLASSES.picker + '" id="' + ELEMENT.id + '_root" />' )
                prepareElementRoot()


                // Create the picker holder and then prepare it.
                P.$holder = $( createWrappedComponent() ).appendTo( P.$root )
                prepareElementHolder()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the hidden input as specified in the settings.
                if ( SETTINGS.containerHidden ) $( SETTINGS.containerHidden ).append( P._hidden )
                else $ELEMENT.after( P._hidden )


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$holder[0] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) {
                    P.$holder = $( createWrappedComponent() )
                    prepareElementHolder()
                    P.$root.html( P.$holder )
                }
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    focusPickerOnceOpened()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$holder[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$holder[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight )
                                if ( SETTINGS.closeOnSelect ) {
                                    P.close( true )
                                }
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    if ( SETTINGS.editable ) {
                        ELEMENT.focus()
                    }
                    else {
                        // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                        // The focus is triggered *after* the close has completed - causing it
                        // to open again. So unbind and rebind the event at the next tick.
                        P.$holder.off( 'focus.toOpen' ).focus()
                        setTimeout( function() {
                            P.$holder.on( 'focus.toOpen', handleFocusToOpenEvent )
                        }, 0 )
                    }
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder,

            'tabindex="-1"'
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, open the picker.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function(event) {
                    event.preventDefault()
                    P.open()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {
        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the holder picker element with all bindings.
      */
    function prepareElementHolder() {

        P.$holder.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                'focus.toOpen': handleFocusToOpenEvent,

                blur: function() {
                    // Remove the “target” class.
                    $ELEMENT.removeClass( CLASSES.target )
                },

                // When something within the holder is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$holder[0] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the holder so that users can click away
                            // from elements focused within the picker.
                            P.$holder[0].focus()
                        }
                    }
                }

            }).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$holder[0].focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                    if ( SETTINGS.closeOnSelect ) {
                        P.close( true )
                    }
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear()
                    if ( SETTINGS.closeOnClear ) {
                        P.close( true )
                    }
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$holder

    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })
    }


    // Wait for transitions to end before focusing the holder. Otherwise, while
    // using the `container` option, the view jumps to the container.
    function focusPickerOnceOpened() {

        if (IS_DEFAULT_THEME && supportsTransitions) {
            P.$holder.find('.' + CLASSES.frame).one('transitionend', function() {
                P.$holder[0].focus()
            })
        }
        else {
            P.$holder[0].focus()
        }
    }


    function handleFocusToOpenEvent(event) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // Add the “target” class.
        $ELEMENT.addClass( CLASSES.target )

        // Add the “focused” class to the root.
        P.$root.addClass( CLASSES.focused )

        // And then finally open the picker.
        P.open()
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close( true )
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));




/*!
 * Date picker for pickadate.js v3.5.6
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, {
            format: formatString,
            defaultValue: true
        })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || (!options.nav && !options.defaultValue) ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        // Regex pattern from http://stackoverflow.com/q/150033
        var word = string.match( /[^\x00-\x7F]+|\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        createMonthLabel = function() {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths ) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth,
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        createYearLabel = function() {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                return _.node( 'select',
                    _.group({
                        min: lowestYear,
                        max: highestYear,
                        i: 1,
                        node: 'option',
                        item: function( loopedYear ) {
                            return [

                                // The looped year and no classes.
                                loopedYear, 0,

                                // Set the value and selected index.
                                'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                            ]
                        }
                    }),
                    settings.klass.selectYear,
                    ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelYearSelect + '"'
                )
            }

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


    // Create and return the entire calendar.
    return _.node(
        'div',
        ( settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    ) +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, settings.klass.buttonToday,
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, settings.klass.buttonClear,
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, settings.klass.buttonClose,
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // Picker close behavior
        closeOnSelect: true,
        closeOnClear: true,

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',

            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));




/*!
 * Time picker for pickadate.js v3.5.6
 * http://amsul.github.io/pickadate.js/time.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var HOURS_IN_DAY = 24,
    MINUTES_IN_HOUR = 60,
    HOURS_TO_NOON = 12,
    MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR,
    _ = Picker._



/**
 * The time picker constructor
 */
function TimePicker( picker, settings ) {

    var clock = this,
        elementValue = picker.$node[ 0 ].value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format

    clock.settings = settings
    clock.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    clock.queue = {
        interval: 'i',
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse create validate',
        view: 'parse create validate',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    clock.item = {}

    clock.item.clear = null
    clock.item.interval = settings.interval || 30
    clock.item.disable = ( settings.disable || [] ).slice( 0 )
    clock.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( clock.item.disable )

    clock.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        clock.set( 'select', valueString, {
            format: formatString
        })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        clock.
            set( 'select', null ).
            set( 'highlight', clock.item.now )
    }

    // The keycode to movement mapping.
    clock.key = {
        40: 1, // Down
        38: -1, // Up
        39: 1, // Right
        37: -1, // Left
        go: function( timeChange ) {
            clock.set(
                'highlight',
                clock.item.highlight.pick + timeChange * clock.item.interval,
                { interval: timeChange * clock.item.interval }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            var $pickerHolder = picker.$root.children(),
                $viewset = $pickerHolder.find( '.' + settings.klass.viewset ),
                vendors = function( prop ) {
                    return ['webkit', 'moz', 'ms', 'o', ''].map(function( vendor ) {
                        return ( vendor ? '-' + vendor + '-' : '' ) + prop
                    })
                },
                animations = function( $el, state ) {
                    vendors( 'transform' ).map(function( prop ) {
                        $el.css( prop, state )
                    })
                    vendors( 'transition' ).map(function( prop ) {
                        $el.css( prop, state )
                    })
                }
            if ( $viewset.length ) {
                animations( $pickerHolder, 'none' )
                $pickerHolder[ 0 ].scrollTop = ~~$viewset.position().top - ( $viewset[ 0 ].clientHeight * 2 )
                animations( $pickerHolder, '' )
            }
        }, 1 ).
        on( 'open', function() {
            picker.$root.find( 'button' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button' ).attr( 'disabled', true )
        }, 1 )

} //TimePicker


/**
 * Set a timepicker item object.
 */
TimePicker.prototype.set = function( type, value, options ) {

    var clock = this,
        clockItem = clock.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        clockItem[ type ] = value
        return clock
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    clockItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = clock.queue[ type ].split( ' ' ).map( function( method ) {
        value = clock[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        clock.set( 'highlight', clockItem.select, options )
    }
    else if ( type == 'highlight' ) {
        clock.set( 'view', clockItem.highlight, options )
    }
    else if ( type == 'interval' ) {
        clock.
            set( 'min', clockItem.min, options ).
            set( 'max', clockItem.max, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( clockItem.select && clock.disabled( clockItem.select ) ) {
            clock.set( 'select', value, options )
        }
        if ( clockItem.highlight && clock.disabled( clockItem.highlight ) ) {
            clock.set( 'highlight', value, options )
        }
        if ( type == 'min' ) {
            clock.set( 'max', clockItem.max, options )
        }
    }

    return clock
} //TimePicker.prototype.set


/**
 * Get a timepicker item object.
 */
TimePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //TimePicker.prototype.get


/**
 * Create a picker time object.
 */
TimePicker.prototype.create = function( type, value, options ) {

    var clock = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value

    // If it’s a date object, convert it into an array.
    if ( _.isDate( value ) ) {
        value = [ value.getHours(), value.getMinutes() ]
    }

    // If it’s an object, use the “pick” value.
    if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.pick
    }

    // If it’s an array, convert it into minutes.
    else if ( $.isArray( value ) ) {
        value = +value[ 0 ] * MINUTES_IN_HOUR + (+value[ 1 ])
    }

    // If no valid value is passed, set it to “now”.
    else if ( !_.isInteger( value ) ) {
        value = clock.now( type, value, options )
    }

    // If we’re setting the max, make sure it’s greater than the min.
    if ( type == 'max' && value < clock.item.min.pick ) {
        value += MINUTES_IN_DAY
    }

    // If the value doesn’t fall directly on the interval,
    // add one interval to indicate it as “passed”.
    if ( type != 'min' && type != 'max' && (value - clock.item.min.pick) % clock.item.interval !== 0 ) {
        value += clock.item.interval
    }

    // Normalize it into a “reachable” interval.
    value = clock.normalize( type, value, options )

    // Return the compiled object.
    return {

        // Divide to get hours from minutes.
        hour: ~~( HOURS_IN_DAY + value / MINUTES_IN_HOUR ) % HOURS_IN_DAY,

        // The remainder is the minutes.
        mins: ( MINUTES_IN_HOUR + value % MINUTES_IN_HOUR ) % MINUTES_IN_HOUR,

        // The time in total minutes.
        time: ( MINUTES_IN_DAY + value ) % MINUTES_IN_DAY,

        // Reference to the “relative” value to pick.
        pick: value % MINUTES_IN_DAY
    }
} //TimePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
TimePicker.prototype.createRange = function( from, to ) {

    var clock = this,
        createTime = function( time ) {
            if ( time === true || $.isArray( time ) || _.isDate( time ) ) {
                return clock.create( time )
            }
            return time
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createTime( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createTime( to )
    }

    // Create relative times.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.hour, to.mins + ( from * clock.settings.interval ) ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.hour, from.mins + ( to * clock.settings.interval ) ];
    }

    return {
        from: createTime( from ),
        to: createTime( to )
    }
} //TimePicker.prototype.createRange


/**
 * Check if a time unit falls within a time range object.
 */
TimePicker.prototype.withinRange = function( range, timeUnit ) {
    range = this.createRange(range.from, range.to)
    return timeUnit.pick >= range.from.pick && timeUnit.pick <= range.to.pick
}


/**
 * Check if two time range objects overlap.
 */
TimePicker.prototype.overlapRanges = function( one, two ) {

    var clock = this

    // Convert the ranges into comparable times.
    one = clock.createRange( one.from, one.to )
    two = clock.createRange( two.from, two.to )

    return clock.withinRange( one, two.from ) || clock.withinRange( one, two.to ) ||
        clock.withinRange( two, one.from ) || clock.withinRange( two, one.to )
}


/**
 * Get the time relative to now.
 */
TimePicker.prototype.now = function( type, value/*, options*/ ) {

    var interval = this.item.interval,
        date = new Date(),
        nowMinutes = date.getHours() * MINUTES_IN_HOUR + date.getMinutes(),
        isValueInteger = _.isInteger( value ),
        isBelowInterval

    // Make sure “now” falls within the interval range.
    nowMinutes -= nowMinutes % interval

    // Check if the difference is less than the interval itself.
    isBelowInterval = value < 0 && interval * value + nowMinutes <= -interval

    // Add an interval because the time has “passed”.
    nowMinutes += type == 'min' && isBelowInterval ? 0 : interval

    // If the value is a number, adjust by that many intervals.
    if ( isValueInteger ) {
        nowMinutes += interval * (
            isBelowInterval && type != 'max' ?
                value + 1 :
                value
            )
    }

    // Return the final calculation.
    return nowMinutes
} //TimePicker.prototype.now


/**
 * Normalize minutes to be “reachable” based on the min and interval.
 */
TimePicker.prototype.normalize = function( type, value/*, options*/ ) {

    var interval = this.item.interval,
        minTime = this.item.min && this.item.min.pick || 0

    // If setting min time, don’t shift anything.
    // Otherwise get the value and min difference and then
    // normalize the difference with the interval.
    value -= type == 'min' ? 0 : ( value - minTime ) % interval

    // Return the adjusted value.
    return value
} //TimePicker.prototype.normalize


/**
 * Measure the range of minutes.
 */
TimePicker.prototype.measure = function( type, value, options ) {

    var clock = this

    // If it’s anything false-y, set it to the default.
    if ( !value ) {
        value = type == 'min' ? [ 0, 0 ] : [ HOURS_IN_DAY - 1, MINUTES_IN_HOUR - 1 ]
    }

    // If it’s a string, parse it.
    if ( typeof value == 'string' ) {
        value = clock.parse( type, value )
    }

    // If it’s a literal true, or an integer, make it relative to now.
    else if ( value === true || _.isInteger( value ) ) {
        value = clock.now( type, value, options )
    }

    // If it’s an object already, just normalize it.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = clock.normalize( type, value.pick, options )
    }

    return value
} ///TimePicker.prototype.measure


/**
 * Validate an object as enabled.
 */
TimePicker.prototype.validate = function( type, timeObject, options ) {

    var clock = this,
        interval = options && options.interval ? options.interval : clock.item.interval

    // Check if the object is disabled.
    if ( clock.disabled( timeObject ) ) {

        // Shift with the interval until we reach an enabled time.
        timeObject = clock.shift( timeObject, interval )
    }

    // Scope the object into range.
    timeObject = clock.scope( timeObject )

    // Do a second check to see if we landed on a disabled min/max.
    // In that case, shift using the opposite interval as before.
    if ( clock.disabled( timeObject ) ) {
        timeObject = clock.shift( timeObject, interval * -1 )
    }

    // Return the final object.
    return timeObject
} //TimePicker.prototype.validate


/**
 * Check if an object is disabled.
 */
TimePicker.prototype.disabled = function( timeToVerify ) {

    var clock = this,

        // Filter through the disabled times to check if this is one.
        isDisabledMatch = clock.item.disable.filter( function( timeToDisable ) {

            // If the time is a number, match the hours.
            if ( _.isInteger( timeToDisable ) ) {
                return timeToVerify.hour == timeToDisable
            }

            // If it’s an array, create the object and match the times.
            if ( $.isArray( timeToDisable ) || _.isDate( timeToDisable ) ) {
                return timeToVerify.pick == clock.create( timeToDisable ).pick
            }

            // If it’s an object, match a time within the “from” and “to” range.
            if ( $.isPlainObject( timeToDisable ) ) {
                return clock.withinRange( timeToDisable, timeToVerify )
            }
        })

    // If this time matches a disabled time, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( timeToDisable ) {
        return $.isArray( timeToDisable ) && timeToDisable[2] == 'inverted' ||
            $.isPlainObject( timeToDisable ) && timeToDisable.inverted
    }).length

    // If the clock is "enabled" flag is flipped, flip the condition.
    return clock.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        timeToVerify.pick < clock.item.min.pick ||
        timeToVerify.pick > clock.item.max.pick
} //TimePicker.prototype.disabled


/**
 * Shift an object by an interval until we reach an enabled object.
 */
TimePicker.prototype.shift = function( timeObject, interval ) {

    var clock = this,
        minLimit = clock.item.min.pick,
        maxLimit = clock.item.max.pick/*,
        safety = 1000*/

    interval = interval || clock.item.interval

    // Keep looping as long as the time is disabled.
    while ( /*safety &&*/ clock.disabled( timeObject ) ) {

        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while shifting to ' + timeObject.hour + ':' + timeObject.mins + '.'
        }*/

        // Increase/decrease the time by the interval and keep looping.
        timeObject = clock.create( timeObject.pick += interval )

        // If we've looped beyond the limits, break out of the loop.
        if ( timeObject.pick <= minLimit || timeObject.pick >= maxLimit ) {
            break
        }
    }

    // Return the final object.
    return timeObject
} //TimePicker.prototype.shift


/**
 * Scope an object to be within range of min and max.
 */
TimePicker.prototype.scope = function( timeObject ) {
    var minLimit = this.item.min.pick,
        maxLimit = this.item.max.pick
    return this.create( timeObject.pick > maxLimit ? maxLimit : timeObject.pick < minLimit ? minLimit : timeObject )
} //TimePicker.prototype.scope


/**
 * Parse a string into a usable type.
 */
TimePicker.prototype.parse = function( type, value, options ) {

    var hour, minutes, isPM, item, parseValue,
        clock = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = clock.settings.format
    }

    // Convert the format into an array and then map through it.
    clock.formats.toArray( options.format ).map( function( label ) {

        var
            substring,

            // Grab the formatting label.
            formattingLabel = clock.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ?
                _.trigger( formattingLabel, clock, [ value, parsingObject ] ) :
                label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            substring = value.substr( 0, formatLength )
            parsingObject[ label ] = substring.match(/^\d+$/) ? +substring : substring
        }

        // Update the time value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Grab the hour and minutes from the parsing object.
    for ( item in parsingObject ) {
        parseValue = parsingObject[item]
        if ( _.isInteger(parseValue) ) {
            if ( item.match(/^(h|hh)$/i) ) {
                hour = parseValue
                if ( item == 'h' || item == 'hh' ) {
                    hour %= 12
                }
            }
            else if ( item == 'i' ) {
                minutes = parseValue
            }
        }
        else if ( item.match(/^a$/i) && parseValue.match(/^p/i) && ('h' in parsingObject || 'hh' in parsingObject) ) {
            isPM = true
        }
    }

    // Calculate it in minutes and return.
    return (isPM ? hour + 12 : hour) * MINUTES_IN_HOUR + minutes
} //TimePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
TimePicker.prototype.formats = {

    h: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "standard" format.
        return string ? _.digits( string ) : timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON
    },
    hh: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected hour in "standard" format with a leading zero.
        return string ? 2 : _.lead( timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON )
    },
    H: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "military" format as a string.
        return string ? _.digits( string ) : '' + ( timeObject.hour % 24 )
    },
    HH: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "military" format with a leading zero.
        return string ? _.digits( string ) : _.lead( timeObject.hour % 24 )
    },
    i: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected minutes.
        return string ? 2 : _.lead( timeObject.mins )
    },
    a: function( string, timeObject ) {

        // If there's a string, then the length is always 4.
        // Otherwise check if it's more than "noon" and return either am/pm.
        return string ? 4 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'a.m.' : 'p.m.'
    },
    A: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise check if it's more than "noon" and return either am/pm.
        return string ? 2 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'AM' : 'PM'
    },

    // Create an array by splitting the formatting string passed.
    toArray: function( formatString ) { return formatString.split( /(h{1,2}|H{1,2}|i|a|A|!.)/g ) },

    // Format an object into a string using the formatting options.
    toString: function ( formatString, itemObject ) {
        var clock = this
        return clock.formats.toArray( formatString ).map( function( label ) {
            return _.trigger( clock.formats[ label ], clock, [ 0, itemObject ] ) || label.replace( /^!/, '' )
        }).join( '' )
    }
} //TimePicker.prototype.formats




/**
 * Check if two time units are the exact.
 */
TimePicker.prototype.isTimeExact = function( one, two ) {

    var clock = this

    // When we’re working with minutes, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with time representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return clock.create( one ).pick === clock.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return clock.isTimeExact( one.from, two.from ) && clock.isTimeExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two time units overlap.
 */
TimePicker.prototype.isTimeOverlap = function( one, two ) {

    var clock = this

    // When we’re working with an integer, compare the hours.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        return one === clock.create( two ).hour
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        return two === clock.create( one ).hour
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return clock.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
TimePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of times as “disabled”.
 */
TimePicker.prototype.deactivate = function( type, timesToDisable ) {

    var clock = this,
        disabledItems = clock.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( timesToDisable == 'flip' ) {
        clock.flipEnable()
    }

    else if ( timesToDisable === false ) {
        clock.flipEnable(1)
        disabledItems = []
    }

    else if ( timesToDisable === true ) {
        clock.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the times to disable.
    else {

        timesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( clock.isTimeExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //TimePicker.prototype.deactivate


/**
 * Mark a collection of times as “enabled”.
 */
TimePicker.prototype.activate = function( type, timesToEnable ) {

    var clock = this,
        disabledItems = clock.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( timesToEnable == 'flip' ) {
        clock.flipEnable()
    }

    else if ( timesToEnable === true ) {
        clock.flipEnable(1)
        disabledItems = []
    }

    else if ( timesToEnable === false ) {
        clock.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled times.
    else {

        timesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isRangeMatched

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( clock.isTimeExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isRangeMatched = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( clock.isTimeOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[2] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( clock.isTimeExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an overlap of range times,
            // make sure there are no “inverted” times because of it.
            if ( isRangeMatched ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( clock.isTimeOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //TimePicker.prototype.activate


/**
 * The division to use for the range intervals.
 */
TimePicker.prototype.i = function( type, value/*, options*/ ) {
    return _.isInteger( value ) && value > 0 ? value : this.item.interval
}


/**
 * Create a string for the nodes in the picker.
 */
TimePicker.prototype.nodes = function( isOpen ) {

    var
        clock = this,
        settings = clock.settings,
        selectedObject = clock.item.select,
        highlightedObject = clock.item.highlight,
        viewsetObject = clock.item.view,
        disabledCollection = clock.item.disable

    return _.node(
        'ul',
        _.group({
            min: clock.item.min.pick,
            max: clock.item.max.pick,
            i: clock.item.interval,
            node: 'li',
            item: function( loopedTime ) {
                loopedTime = clock.create( loopedTime )
                var timeMinutes = loopedTime.pick,
                    isSelected = selectedObject && selectedObject.pick == timeMinutes,
                    isHighlighted = highlightedObject && highlightedObject.pick == timeMinutes,
                    isDisabled = disabledCollection && clock.disabled( loopedTime ),
                    formattedTime = _.trigger( clock.formats.toString, clock, [ settings.format, loopedTime ] )
                return [
                    _.trigger( clock.formats.toString, clock, [ _.trigger( settings.formatLabel, clock, [ loopedTime ] ) || settings.format, loopedTime ] ),
                    (function( klasses ) {

                        if ( isSelected ) {
                            klasses.push( settings.klass.selected )
                        }

                        if ( isHighlighted ) {
                            klasses.push( settings.klass.highlighted )
                        }

                        if ( viewsetObject && viewsetObject.pick == timeMinutes ) {
                            klasses.push( settings.klass.viewset )
                        }

                        if ( isDisabled ) {
                            klasses.push( settings.klass.disabled )
                        }

                        return klasses.join( ' ' )
                    })( [ settings.klass.listItem ] ),
                    'data-pick=' + loopedTime.pick + ' ' + _.ariaAttr({
                        role: 'option',
                        label: formattedTime,
                        selected: isSelected && clock.$node.val() === formattedTime ? true : null,
                        activedescendant: isHighlighted ? true : null,
                        disabled: isDisabled ? true : null
                    })
                ]
            }
        }) +

        // * For Firefox forms to submit, make sure to set the button’s `type` attribute as “button”.
        _.node(
            'li',
            _.node(
                'button',
                settings.clear,
                settings.klass.buttonClear,
                'type=button data-clear=1' + ( isOpen ? '' : ' disabled' ) + ' ' +
                _.ariaAttr({ controls: clock.$node[0].id })
            ),
            '', _.ariaAttr({ role: 'presentation' })
        ),
        settings.klass.list,
        _.ariaAttr({ role: 'listbox', controls: clock.$node[0].id })
    )
} //TimePicker.prototype.nodes







/**
 * Extend the picker to add the component with the defaults.
 */
TimePicker.defaults = (function( prefix ) {

    return {

        // Clear
        clear: 'Clear',

        // The format to show on the `input` element
        format: 'h:i A',

        // The interval between each time
        interval: 30,

        // Picker close behavior
        closeOnSelect: true,
        closeOnClear: true,

        // Classes
        klass: {

            picker: prefix + ' ' + prefix + '--time',
            holder: prefix + '__holder',

            list: prefix + '__list',
            listItem: prefix + '__list-item',

            disabled: prefix + '__list-item--disabled',
            selected: prefix + '__list-item--selected',
            highlighted: prefix + '__list-item--highlighted',
            viewset: prefix + '__list-item--viewset',
            now: prefix + '__list-item--now',

            buttonClear: prefix + '__button--clear'
        }
    }
})( Picker.klasses().picker )





/**
 * Extend the picker to add the time picker.
 */
Picker.extend( 'pickatime', TimePicker )


}));




//# sourceMappingURL=vendor.js.map
