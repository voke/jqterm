!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),a=n(s),u=r(3),c=r(4),l=n(c),h=r(5),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(h),f=function(e){return u.TextUtils.isWordChar(e)||"-"===e};CodeMirror.defineOption("autocomplete",!1,function(e,t){var r=this;if(!1!==t){CodeMirror.autocomplete&&CodeMirror.autocomplete.core&&CodeMirror.autocomplete.core.disconnect();var n=new p(e);CodeMirror.registerHelper("autocomplete","core",n),CodeMirror.defineExtension("addKeywordsFromString",function(e){var t=this.state.autocomplete,r=[];p.textToWords(e,t.isWordChar,function(e){-1===t.userKeywords.indexOf(e)&&e.length&&(e[0]<"0"||e[0]>"9")&&-1===t.keywords.indexOf(e)&&r.push(e)}),t.cm.setOption("keywords",t.userKeywords.concat(r)),t.reset()}),CodeMirror.defineExtension("setKeywords",function(e){r.setOption("keywords",e),r.state.autocomplete.reset()})}});var p=function(){function e(t){i(this,e),g.call(this);var r=document.createElement("span");r.className="widget-autocomplete",this.hint=r,this.dictionary=new a.default,this.mark=null;this.mode=t.getOption("mode");this.cm=t,t.on("change",this.change),t.on("keydown",this.keydown),t.on("beforeChange",this.beforeChange),t.on("cursorActivity",this.cursorActivity),t.on("mousedown",this.clear),t.state.autocomplete=this,this.reset()}return o(e,[{key:"disconnect",value:function(){var e=this.cm;e.off("change",this.change),e.off("keydown",this.keydown),e.off("beforeChange",this.beforeChange),e.off("cursorActivity",this.cursorActivity),e.off("mousedown",this.clear)}},{key:"reset",value:function(){var t=this,r=this.cm;this.clear(),this.currentHint="",this.dictionary.reset();var n="css"===this.cm.getOption("source")?f:u.TextUtils.isWordChar;this.isWordChar=r.getOption("isWordChar")||n,e.textToWords(r.getValue(),this.isWordChar,function(e){e.length&&(e[0]<"0"||e[0]>"9")&&t.dictionary.addWord(e)}),this.keywords=d[r.getOption("source")]||[],this.keywords.forEach(function(e){return t.dictionary.addWord(e)}),this.userKeywords=r.getOption("keywords")||[],this.userKeywords.forEach(function(e){return t.dictionary.addWord(e)})}},{key:"getLines",value:function(e,t){return this.cm.getRange({line:e.line,ch:0},{line:t.line})}},{key:"dismiss",value:function(){this.clear()}},{key:"select",value:function(){this.currentHint&&(this.cm.replaceRange(this.currentHint,this.cursor,this.cursor,"+input"),this.clear())}},{key:"showHint",value:function(e,t){this.clear();for(var r=this.cm,n=r.getCursor(),i=r.getLine(n.line),o="",s=i.length;s--;){var a=i[s];if(!this.isWordChar(a))break;o=a+o}if(o){var u=this.dictionary.wordsWithPrefix(o);if(0!==u.length){var c=u[0].substr(o.length);this.hint.innerText=c,this.currentHint=c,this.mark=r.setBookmark(n,{widget:this.hint,insertLeft:!1})}}}}],[{key:"textToWords",value:function(e,t,r){for(var n=-1,i=0;i<e.length;++i)t(e.charAt(i))?-1===n&&(n=i):(-1!==n&&r(e.substring(n,i)),n=-1);-1!==n&&r(e.substring(n))}}]),e}(),g=function(){var e=this;this.keydown=function(t,r){if(e.currentHint)switch(r.which){case l.default.Tab.code:case l.default.Enter.code:case l.default.Right.code:e.select(),r.preventDefault();break;default:e.dismiss()}},this.beforeChange=function(t,r){var n=e.getLines(r.from,r.to);p.textToWords(n,e.isWordChar,function(t){-1===e.userKeywords.indexOf(t)&&t.length&&(t[0]<"0"||t[0]>"9")&&-1===e.keywords.indexOf(t)&&e.dictionary.removeWord(t)})},this.cursorActivity=function(){var t=e.cm.getCursor();e.cursor&&t.line!==e.cursor.line&&t.ch!==e.cursor.ch&&e.clear(),e.cursor=t},this.change=function(t,r){var n=r.from,i=r.to;"setValue"===r.origin&&e.reset(),t.startOperation(),e.cursor=e.cm.getCursor(),e.showHint(n,i),t.endOperation()},this.clear=function(){e.mark&&e.mark.clear(),e.hint.innerText="",e.currentHint=""}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(2),s=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){function e(){n(this,e),this._words=new Map,this._index=new s.default}return i(e,[{key:"addWord",value:function(e){var t=this._words.get(e)||0;++t,this._words.set(e,t),this._index.add(e)}},{key:"removeWord",value:function(e){var t=this._words.get(e)||0;if(t){if(1===t)return this._words.delete(e),void this._index.remove(e);--t,this._words.set(e,t)}}},{key:"wordsWithPrefix",value:function(e){return this._index.words(e)}},{key:"hasWord",value:function(e){return this._words.has(e)}},{key:"wordCount",value:function(e){return this._words.get(e)||0}},{key:"reset",value:function(){this._words.clear(),this._index.clear()}}]),e}();t.default=a},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){n(this,e),this.clear()}return i(e,[{key:"add",value:function(e){var t=this._root;++this._wordsInSubtree[this._root];for(var r=0;r<e.length;++r){var n=e[r],i=this._edges[t][n];i||(this._freeNodes.length?i=this._freeNodes.pop():(i=this._size++,this._isWord.push(!1),this._wordsInSubtree.push(0),this._edges.push({__proto__:null})),this._edges[t][n]=i),++this._wordsInSubtree[i],t=i}this._isWord[t]=!0}},{key:"remove",value:function(e){if(!this.has(e))return!1;var t=this._root;--this._wordsInSubtree[this._root];for(var r=0;r<e.length;++r){var n=e[r],i=this._edges[t][n];--this._wordsInSubtree[i]||(delete this._edges[t][n],this._freeNodes.push(i)),t=i}return this._isWord[t]=!1,!0}},{key:"has",value:function(e){for(var t=this._root,r=0;r<e.length;++r)if(!(t=this._edges[t][e[r]]))return!1;return this._isWord[t]}},{key:"words",value:function(e){e=e||"";for(var t=this._root,r=0;r<e.length;++r)if(!(t=this._edges[t][e[r]]))return[];var n=[];return this._dfs(t,e,n),n}},{key:"_dfs",value:function(e,t,r){this._isWord[e]&&r.push(t);var n=this._edges[e];for(var i in n)this._dfs(n[i],t+i,r)}},{key:"longestPrefix",value:function(e,t){for(var r=this._root,n=0,i=0;i<e.length&&(r=this._edges[r][e[i]]);++i)t&&!this._isWord[r]||(n=i+1);return e.substring(0,n)}},{key:"clear",value:function(){this._size=1,this._root=0,this._edges=[{__proto__:null}],this._isWord=[!1],this._wordsInSubtree=[0],this._freeNodes=[]}}]),e}();t.default=o},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=t.TextUtils={isStopChar:function(e){return e>" "&&e<"0"||e>"9"&&e<"A"||e>"Z"&&e<"_"||e>"_"&&e<"a"||e>"z"&&e<="~"},isWordChar:function(e){return!o.isStopChar(e)&&!o.isSpaceChar(e)},isSpaceChar:function(e){return o._SpaceCharRegex.test(e)},isWord:function(e){for(var t=0;t<e.length;++t)if(!o.isWordChar(e.charAt(t)))return!1;return!0},isOpeningBraceChar:function(e){return"("===e||"{"===e},isClosingBraceChar:function(e){return")"===e||"}"===e},isBraceChar:function(e){return o.isOpeningBraceChar(e)||o.isClosingBraceChar(e)},textToWords:function(e,t,r){for(var n=-1,i=0;i<e.length;++i)t(e.charAt(i))?-1===n&&(n=i):(-1!==n&&r(e.substring(n,i)),n=-1);-1!==n&&r(e.substring(n))},lineIndent:function(e){for(var t=0;t<e.length&&o.isSpaceChar(e.charAt(t));)++t;return e.substr(0,t)},isUpperCase:function(e){return e===e.toUpperCase()},isLowerCase:function(e){return e===e.toLowerCase()},splitStringByRegexes:function(e,t){function r(e,t,o){if(t>=i.length)return void n.push({value:e,position:o,regexIndex:-1});var s,a=i[t],u=0;for(a.lastIndex=0;null!==(s=a.exec(e));){var c=e.substring(u,s.index);c&&r(c,t+1,o+u);var l=s[0];n.push({value:l,position:o+s.index,regexIndex:t}),u=s.index+l.length}var h=e.substring(u);h&&r(h,t+1,o+u)}for(var n=[],i=[],o=0;o<t.length;o++){var s=t[o];s.global?i.push(s):i.push(new RegExp(s.source,s.flags?s.flags+"g":"g"))}return r(e,0,0),n}};o._SpaceCharRegex=/\s/,o.Indent={TwoSpaces:"  ",FourSpaces:"    ",EightSpaces:"        ",TabCharacter:"\t"},o.BalancedJSONTokenizer=function(){function e(t,r){n(this,e),this._callback=t,this._index=0,this._balance=0,this._buffer="",this._findMultiple=r||!1,this._closingDoubleQuoteRegex=/[^\\](?:\\\\)*"/g}return i(e,[{key:"write",value:function(e){this._buffer+=e;for(var t=this._buffer.length,r=this._buffer,n=this._index;n<t;++n){var i=r[n];if('"'===i){if(this._closingDoubleQuoteRegex.lastIndex=n,!this._closingDoubleQuoteRegex.test(r))break;n=this._closingDoubleQuoteRegex.lastIndex-1}else if("{"===i)++this._balance;else if("}"===i){if(--this._balance<0)return this._reportBalanced(),!1;if(!this._balance&&(this._lastBalancedIndex=n+1,!this._findMultiple))break}else if("]"===i&&!this._balance)return this._reportBalanced(),!1}return this._index=n,this._reportBalanced(),!0}},{key:"_reportBalanced",value:function(){this._lastBalancedIndex&&(this._callback(this._buffer.slice(0,this._lastBalancedIndex)),this._buffer=this._buffer.slice(this._lastBalancedIndex),this._index-=this._lastBalancedIndex,this._lastBalancedIndex=0)}},{key:"remainder",value:function(){return this._buffer}}]),e}(),o.TokenizerFactory=function(){},o.TokenizerFactory.prototype={createTokenizer:function(){}},o.isMinified=function(e){var t=10,r=0;do{var n=e.indexOf("\n",r);if(n<0&&(n=e.length),n-r>500&&"//#"!==e.substr(r,3))return!0;r=n+1}while(--t>=0&&r<e.length);return!1}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={Tab:{code:9,name:{mac:"⇥",other:"Tab"}},Enter:{code:13,name:{mac:"↩",other:"Enter"}},Right:{code:39,name:"→"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.javascript=["charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search","length from concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight","keys assign entries values","prototype apply call bind","break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with eval","Promise class extends let const yield static async await setTimeout clearTimeout setInterval clearInterval requestAnimationFrame cancelAnimationFrame window document getElementById getElementsByTagName querySelector querySelectorAll","console log trace resolve reject decodeURIComponent confirm prompt alert encodeURIComponent encodeURI decodeURI escape unescape","onblur onclick onerror onfocus onkeydown onkeypress onkeyup onmouseover onload onmouseup onmousedown onsubmit","Array Date hasOwnProperty Infinity isFinite isNaN isPrototypeOf Math NaN Number Object String toString undefined valueOf"].reduce(function(e,t){return t.split(" ").forEach(function(t){return e.push(t)}),e},[]),t.html=["!DOCTYPE ","abbr","acronym","address","applet","area","article","aside","audio","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rp","rt","ruby","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","ul","var","video","wbr"]}]);