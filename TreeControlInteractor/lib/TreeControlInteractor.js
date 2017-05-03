!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.TreeControlInteractor=t(require("react")):e.TreeControlInteractor=t(e.react)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":c(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=r(l),d=(n(9),n(13)),p=r(d),h=n(7);n(12);var v=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.cachedChildTabs,n.icon=(0,h.IconSelector)("arrow_bullet"),n.PortalTabsParameters=e.PortalTabsParameters,n.fullyChecked=2,n.individuallyChecked=1,n.unchecked=0,n}return u(t,e),s(t,[{key:"componentWillMount",value:function(){this.setState({tabs:[]}),this.init()}},{key:"init",value:function(){var e=this,t=function(){var t=e.generateSelectionObject(e.state.tabs);e.props.OnSelect(t)};this.props.getInitialPortalTabs(this.PortalTabsParameters,function(n){var r=[n.Results];e.setState({tabs:r},function(){t()})})}},{key:"requestDescendantTabs",value:function(e,t){var n=this,r=[],o=function(e){return r=e.map(function(e){return Array.isArray(e.ChildTabs)?null:e.ChildTabs=[],e})},i=function(e){return a(e,o)},a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(function(t){return t(e)})},u=function(e){r.forEach(function(t){var n=parseInt(t.ParentTabId)===parseInt(e.TabId);n?e.ChildTabs.push(t):null})};this.props.getDescendantPortalTabs(this.PortalTabsParameters,e,function(r){var o=function(t){var r=function(){var e=function(){t.ChildTabs=t.ChildTabs.map(function(e){return e.CheckedState=e.HasChildren?n.fullyChecked:n.individuallyChecked,e})},r=function(){t.ChildTabs=t.ChildTabs.map(function(e){return e.CheckedState=n.unchecked,e})};t.CheckedState?e():r()},o=function(){return null};parseInt(t.TabId)===parseInt(e)?r():o()},a=r.Results;i(a),n.traverse(u),n.traverse(o),n.setState({tabs:n.state.tabs}),t()})}},{key:"generateSelectionObject",value:function(e){return{TabId:parseInt(e.TabId),ParentTabId:parseInt(e.ParentTabId),CheckedState:e.CheckedState,Name:e.Name}}},{key:"traverse",value:function(e){var t=this.state.tabs,n=t,r=[];r.push(n);var o=r.length>0,i=function u(){var n=r.length?r.shift():null,i=function(){return n.forEach(function(n){Array.isArray(n.ChildTabs)?e(n,t):null,Array.isArray(n.ChildTabs)&&n.ChildTabs.length?r.push(n.ChildTabs):null,o?u():a()})},c=function(){return null};n?i():c()},a=function(){return null};i()}},{key:"findParent",value:function(e){var t={},n=function(e){t=e||{}},r=function(t){var r=parseInt(t.TabId)===parseInt(e.ParentTabId);r?n(t):null};return this.traverse(r),t}},{key:"updateTree",value:function(e){var t=null,n=function(n,r){n=JSON.parse(JSON.stringify(e)),t=r},r=function(t,r){parseInt(t.TabId)===parseInt(e.TabId)?n(t,r):null};this.traverse(r),this.setState({tabs:t}),this["export"](this.state.tabs)}},{key:"reAlignTree",value:function(){var e=this,t=[],n=function(e){var n;return e.ChildTabs.length?(n=t).push.apply(n,o(e.ChildTabs)):null};this.traverse(n);var r=function(n){t=[];var r=0,o=[],i=[];n.ChildTabs.forEach(function(e){e.HasChildren?o.push(e):i.push(e)});var a=i.length+o.length*e.fullyChecked;switch(i.forEach(function(t){t.CheckedState===e.individuallyChecked?r+=1:null}),o.forEach(function(t){switch(!0){case t.CheckedState===e.fullyChecked:return void(r+=2);case t.CheckedState===e.individuallyChecked:return void(r+=1);default:return}}),!0){case r===a&&n.HasChildren:n.CheckedState=n.CheckedState===e.individuallyChecked?e.fullyChecked:n.CheckedState;break;case 0!==r&&r===a&&!n.HasChildren:n.CheckedState=e.individuallyChecked;break;case 0!==r&&r<a:n.CheckedState=n.CheckedState===e.fullyChecked?e.individuallyChecked:n.CheckedState}e.updateTree(n)};t.forEach(function(){return e.traverse(r)})}},{key:"export",value:function(){var e=this,t=[],n=[],r=[],o=function(e){return e.filter(function(e){return!!e.CheckedState})},i=function(t){return t.filter(function(t){return t.CheckedState===e.fullyChecked})},a=function(t){return t.filter(function(t){return t.CheckedState===e.individuallyChecked})},u=function(e,t){return e.filter(function(e){var n=!1;return t.forEach(function(t){return t.TabId===e.ParentTabId?n=t:null}),n===!1})},c=function(n){return t.push(e.generateSelectionObject(n))};this.traverse(c),t=o(t),r=i(t),n=a(t),n=u(n,r),r=u(r,r);var s=r.concat(n);this.props.OnSelect(s)}},{key:"render",value:function(){return f["default"].createElement(p["default"],{icon_type:"arrow_bullet",tabs:this.state.tabs,"export":this["export"],PortalTabsParameters:this.PortalTabsParameters,getDescendantPortalTabs:this.requestDescendantTabs.bind(this),fullyChecked:this.fullyChecked,individuallyChecked:this.individuallyChecked,unchecked:this.unchecked,updateTree:this.updateTree.bind(this),reAlignTree:this.reAlignTree.bind(this),findParent:this.findParent.bind(this)})}}]),t}(l.Component);t["default"]=v},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):y=-1,h.length&&u())}function u(){if(!v){var e=o(a);v=!0;for(var t=h.length;t;){for(p=h,h=[];++y<t;)p&&p[y].run();y=-1,t=h.length}p=null,v=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],v=!1,y=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(){d=!1}function o(e){if(!e)return void(l!==h&&(l=h,r()));if(e!==l){if(e.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+t.join(", "));l=e,r()}}function i(e){return o(e),l}function a(e){p.seed(e),f!==e&&(r(),f=e)}function u(){l||o(h);for(var e,t=l.split(""),n=[],r=p.nextValue();t.length>0;)r=p.nextValue(),e=Math.floor(r*t.length),n.push(t.splice(e,1)[0]);return n.join("")}function c(){return d?d:d=u()}function s(e){var t=c();return t[e]}var l,f,d,p=n(27),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:i,seed:a,lookup:s,shuffled:c}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";function n(e,t,n,o,i,a,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,u,c],f=0;s=new Error(t.replace(/%s/g,function(){return l[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(1))},function(t,n){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.global={styles:{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"block";return{display:e}},listStyle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";return{listStyle:e}},textAlign:function(e){return{textAlign:e}},"float":function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";return{"float":e}},clearFix:function(e){return{clear:e}},padding:function(e){var t=e.top,n=void 0===t?0:t,r=e.left,o=void 0===r?0:r,i=e.right,a=void 0===i?0:i,u=e.bottom,c=void 0===u?0:u,s=e.all,l=void 0===s?void 0:s,f=e.horizontal,d=void 0===f?void 0:f,p=e.vertical,h=void 0===p?void 0:p;return{padding:" "+(l||h||n)+"px\n                                "+(l||d||a)+"px\n                                "+(l||h||c)+"px\n                                "+(l||d||o)+"px"}},margin:function(e){var t=e.top,n=void 0===t?0:t,r=e.left,o=void 0===r?0:r,i=e.right,a=void 0===i?0:i,u=e.bottom,c=void 0===u?0:u,s=e.all,l=void 0===s?void 0:s,f=e.horizontal,d=void 0===f?void 0:f,p=e.vertical,h=void 0===p?void 0:p;return{margin:"\n                              "+(l||h||n)+"px\n                              "+(l||d||a)+"px\n                              "+(l||h||c)+"px\n                              "+(l||d||o)+"px"}},width:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%";return{width:""+e+t}},height:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return{height:""+e+t}},backgroundColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"orange";return{backgroundColor:e}},merge:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.apply(void 0,[{}].concat(t))}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconSelector=void 0;var r=n(14);t.IconSelector=function(e){switch(e){case"arrow_bullet":return r.ArrowIcon;default:return r.ArrowIcon}}},function(e,t,n){(function(t){"use strict";var r=n(3),o=r;"production"!==t.env.NODE_ENV&&!function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(a){}};o=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];e.apply(void 0,[n].concat(o))}}}(),e.exports=o}).call(t,n(1))},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},i=!0;e.exports=n(19)(o,i)}else e.exports=n(18)()}).call(t,n(1))},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){"use strict";function r(e,t){for(var n,r=0,i="";!n;)i+=e(t>>4*r&15|o()),n=t<Math.pow(16,r+1),r++;return i}var o=n(26);e.exports=r},function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.id,r,""]]);n(29)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":u(t))&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":u(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),l=r(s),f=(n(9),n(7)),d=n(6);n(12);var p=d.global.styles,h=p["float"](),v=p.merge,y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.icon_type;return n.icon=(0,f.IconSelector)(r),n["export"]=e["export"],n.getDescendantPortalTabs=e.getDescendantPortalTabs,n}return a(t,e),c(t,[{key:"_traverse",value:function(e){var t=this,n=this.props.tabs,r=[];r.push(n);var o=r.length>0,i=function u(){var n=r.length?r.shift():null,i=function(){return n.forEach(function(n){Array.isArray(n.ChildTabs)?e(n,t.props.tabs):null,Array.isArray(n.ChildTabs)&&n.ChildTabs.length?r.push(n.ChildTabs):null,o?u():a()})},c=function(){return null};n?i():c()},a=function(){return null};i()}},{key:"_mapToParentTabs",value:function(e,t){var n=this,r=function(e){return Object.keys(e).length>0};e=this.props.findParent(e);var o=function a(){e?t(e):null,e=parseInt(e.TabId)!==-1?n.props.findParent(e):{},r(e)?a():i()},i=function(){return null};o()}},{key:"_mapToChildTabs",value:function(e,t){var n=e.ChildTabs,r=[];r.push(n);var o=r.length>0,i=function u(){var e=r.length?r.shift():null,n=function(){return e.forEach(function(e){Array.isArray(e.ChildTabs)?t(e):null,Array.isArray(e.ChildTabs)&&e.ChildTabs.length?r.push(e.ChildTabs):null,o?u():a()})},i=function(){return null};e?n():i()},a=function(){return null};i()}},{key:"setCheckedState",value:function(e){var t=this,n=function(){return e.HasChildren?t.selectParent(e):t.selectIndividual(e)};e.CheckedState?this.resetCheckedState(e):n()}},{key:"mapParentCheckedState",value:function(e){var t=this,n=[];e.ChildTabs.map(function(e){return e.CheckedState!==t.props.unchecked?n.push(!0):n.push(!1)}),n.indexOf(!1)!==-1?e.CheckedState=this.props.individuallyChecked:e.CheckedState=this.props.fullyChecked,this.props.updateTree(e)}},{key:"resetCheckedState",value:function(e){var t=this,n=function(e){e.CheckedState=t.props.unchecked,e.ChildrenSelected=!1,t.props.updateTree(e)},r=function(){e.CheckedState=t.props.unchecked,e.ChildrenSelected=!1,t.props.updateTree(e)};e.HasChildren?this._mapToChildTabs(e,n):r(),e.CheckedState=this.props.unchecked,e.ChildrenSelected=!1,this.props.updateTree(e);var o=this.props.findParent(e);this.setParentCheckedState(o),this.props.reAlignTree()}},{key:"setParentCheckedState",value:function(e){var t=this,n=e.ChildTabs||[],r=n.length,o=[],i=function(){switch(e.ChildrenSelected=!0,!0){case o.filter(function(e){return!!e}).length===r:return e.CheckedState=e.CheckedState===t.props.individuallyChecked?t.props.fullyChecked:e.CheckedState,void t.props.updateTree(e);case o.indexOf(!0)!==-1:return e.CheckedState=e.CheckedState===t.props.fullyChecked?t.props.individuallyChecked:e.CheckedState,void t.props.updateTree(e)}t.props.updateTree(e)},a=function(){e.CheckedState=t.props.individuallyChecked,e.ChildrenSelected=!1,t.props.updateTree(e)};n.forEach(function(e){return e.CheckedState?o.push(!0):o.push(!1)}),o.indexOf(!0)!==-1?i():a()}},{key:"selectParent",value:function(e){var t=this,n=function(e){switch(!0){case e.HasChildren===!0:return e.CheckedState=t.props.fullyChecked,e.ChildrenSelected=!0,void t.props.updateTree(e);case e.HasChildren===!1:return e.CheckedState=t.props.individuallyChecked,e.ChildrenSelected=!1,void t.props.updateTree(e)}};e.CheckedState=this.props.fullyChecked,e.ChildrenSelected=!0,this._mapToChildTabs(e,n),this.props.updateTree(e);var r=this.props.findParent(e);this.setParentCheckedState(r),this.props.reAlignTree()}},{key:"selectIndividual",value:function(e){e.CheckedState=this.props.individuallyChecked,e.ChildrenSelected=!1,this.props.updateTree(e);var t=this.props.findParent(e);this.setParentCheckedState(t),this.props.reAlignTree()}},{key:"expandParent",value:function(e){var t=this,n=e.HasChildren&&e.ChildTabs.length>0,r=function(){return e.IsOpen=!e.IsOpen},o=function(){t.props.getDescendantPortalTabs(e.TabId,function(){e.IsOpen=!e.IsOpen,t.props.updateTree(e)})};n?r():o(),this.props.updateTree(e)}},{key:"render_icon",value:function(e){var t=p.width(100),n="90deg"===e,r=l["default"].createElement("div",{style:v(t)},l["default"].createElement(this.icon,{animate:n,reset:!1,direction:e}));return r}},{key:"render_Bullet",value:function(e){var t=e.HasChildren,n=e.IsOpen&&e.ChildTabs.length?"90deg":"0deg",r=t?this.render_icon(n):function(){return null};return r}},{key:"render_ListBullet",value:function(e,t){var n=this,r=function(){var r=p.width(20,"px"),o=p.height(20,"px");return l["default"].createElement("div",{onClick:function(){return t()},style:v(h,r,o)},n.render_Bullet.call(n,e))}();return r}},{key:"render_ListCheckbox",value:function(e){var t=this,n=function(){return l["default"].createElement("div",{style:v(h)},l["default"].createElement("input",{type:"checkbox",onChange:function(){return t.setCheckedState.call(t,e)},checked:e.CheckedState}),l["default"].createElement("label",{onClick:function(){return t.setCheckedState.call(t,e)}}))}();return n}},{key:"render_tabName",value:function(e){var t=function(){var t=p.margin({top:10});return l["default"].createElement("span",{style:v(t)},e.Name)}();return t}},{key:"render_li",value:function(e){var t=this,n=function(){return e.map(function(e){var n=t.render_tabName(e),r=t.render_ListCheckbox(e),o=t.render_ListBullet.call(t,e,t.expandParent.bind(t,e)),i=t.render_tree(e.ChildTabs),a=function(e){var n=e.ChildTabs,r=function(){var n=[],r=function(e){var r=e.CheckedState!==t.props.unchecked;r?n.push(!0):n.push(!1)};t._mapToChildTabs(e,r);var o=n.indexOf(!0)!==-1;return o},o=function(){return null};return n.length?r():o()},u=function(){return l["default"].createElement("li",{key:e.Name},e.HasChildren?o:null,r,n,e.HasChildren&&a(e)||e.HasChildren&&e.CheckedState?l["default"].createElement("span",null,"*"):l["default"].createElement("span",null),i)},c=t.props.findParent(e),s=c.IsOpen||parseInt(e.TabId)===-1?u():null;return s})}();return n}},{key:"render_tree",value:function(e){var n=this,r=function(){return l["default"].createElement(t,{tabs:e,icon_type:"arrow_bullet",updateTree:n.props.updateTree.bind(n),reAlignTree:n.props.reAlignTree.bind(n),findParent:n.props.findParent.bind(n),fullyChecked:n.props.fullyChecked,individuallyChecked:n.props.individuallyChecked,unchecked:n.props.unchecked,"export":n.props["export"],PortalTabsParameters:n.props.PortalTabsParameters,getDescendantPortalTabs:n.props.getDescendantPortalTabs})}();return r}},{key:"render",value:function(){var e=p.listStyle(),t=this.render_li(this.props.tabs);return l["default"].createElement("ul",{className:"page-picker",style:v(e)},t)}}]),t}(s.Component);t["default"]=y},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":c(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowIcon=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(5),f=o(l),d=n(6),p=n(21),h=r(p),v=n(20),y=d.global.styles,b=y.merge,m=function(e){return{transition:"all .15s ease-in",cursor:"pointer",width:"100%",transform:"rotate("+e+")"}};t.ArrowIcon=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.direction=e.direction,n.id=h.generate(),n.shouldAnimate=e.animate,n.state={},n}return u(t,e),s(t,[{key:"onMouseDown",value:function(){this.state.arrow_bullet||(this.arrow_bullet=document.getElementById(this.id)),this.animate(this.shouldAnimate)}},{key:"animate",value:function(e){var t=this,n=function(){t.setState({selected:!t.state.selected});var e=t.arrow_bullet.style;e.transform=t.state.selected?"rotate(0deg)":"rotate(90deg)"},r=function(){return null};e?n():r()}},{key:"reset",value:function(e){e&&this.setState({selected:!1})}},{key:"render",value:function(){var e=y.margin({top:-3}),t=y.padding({all:2}),n=m(this.direction);return f["default"].createElement("div",{dangerouslySetInnerHTML:{__html:v},id:this.id,style:b(e,t,n),ref:this.id,src:v,alt:"arrow_icon",onMouseDown:this.onMouseDown.bind(this)})}}]),t}(l.Component)},function(e,t,n){t=e.exports=n(16)(),t.push([e.id,'.page-picker{padding-left:40px}.page-picker svg{margin-top:2px}.page-picker input[type=checkbox]:checked+label:after{content:"";position:absolute;width:1.2ex;height:.3ex;top:.9ex;left:.4ex;border:3px solid #21a3da;border-top:none;border-right:none;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.page-picker input[type=checkbox]{line-height:2.1ex}.page-picker input[type=checkbox],.page-picker input[type=radio]{visibility:hidden;position:absolute;z-index:-1}.page-picker input[type=checkbox]+label{position:relative;overflow:hidden;cursor:pointer}.page-picker input[type=checkbox]+label:before{content:"";display:inline-block;vertical-align:-25%;height:2ex;width:2ex;background-color:#fff;border:1px solid #a6a6a6;box-shadow:inset 0 2px 5px rgba(0,0,0,.25);margin-right:.5em}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){(function(t){"use strict";function r(e,n,r,c,s){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{o("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",c||"React class",r,l),f=e[l](n,l,c,r,null,a)}catch(d){f=d}if(i(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,l,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=s?s():"";i(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(4),i=n(8),a=n(10),u={};e.exports=r}).call(t,n(1))},function(e,t,n){"use strict";var r=n(3),o=n(4);e.exports=function(){function e(){o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){(function(t){"use strict";var r=n(3),o=n(4),i=n(8),a=n(10),u=n(17);e.exports=function(e,n){function c(e){var t=e&&(_&&e[_]||e[P]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function r(r,s,f,d,p,h,v){if(d=d||E,h=h||f,v!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var y=d+":"+f;!u[y]&&c<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,d),u[y]=!0,c++)}return null==s[f]?r?new l(null===s[f]?"The "+p+" `"+h+"` is marked as required "+("in `"+d+"`, but its value is `null`."):"The "+p+" `"+h+"` is marked as required in "+("`"+d+"`, but its value is `undefined`.")):null:e(s,f,d,p,h)}if("production"!==t.env.NODE_ENV)var u={},c=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function d(e){function t(t,n,r,o,i,a){var u=t[n],c=w(u);if(c!==e){var s=S(u);return new l("Invalid "+o+" `"+i+"` of type "+("`"+s+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return f(t)}function p(){return f(r.thatReturnsNull)}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var c=w(u);return new l("Invalid "+o+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<u.length;s++){var f=e(u,s,r,o,i+"["+s+"]",a);if(f instanceof Error)return f}return null}return f(t)}function v(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){var u=w(a);return new l("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return f(t)}function y(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||E,u=O(t[n]);return new l("Invalid "+o+" `"+i+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+a+"`."))}return null}return f(t)}function b(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(s(a,e[u]))return null;var c=JSON.stringify(e);return new l("Invalid "+o+" `"+i+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV?i(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,r.thatReturnsNull)}function m(e){function t(t,n,r,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=w(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an object."));for(var s in u)if(u.hasOwnProperty(s)){var f=e(u,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null}return f(t)}function g(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){var c=e[u];if(null==c(t,n,r,o,i,a))return null}return new l("Invalid "+o+" `"+i+"` supplied to "+("`"+r+"`."))}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV?i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,r.thatReturnsNull)}function k(){function e(e,t,n,r,o){return T(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return f(e)}function C(e){function t(t,n,r,o,i){var u=t[n],c=w(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` "+("supplied to `"+r+"`, expected `object`."));for(var s in e){var f=e[s];if(f){var d=f(u,s,r,o,i+"."+s,a);if(d)return d}}return null}return f(t)}function T(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(T);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!T(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!T(i[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function w(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function S(e){var t=w(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function O(e){return e.constructor&&e.constructor.name?e.constructor.name:E}var _="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",E="<<anonymous>>",I={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:p(),arrayOf:h,element:v(),instanceOf:y,node:k(),objectOf:m,oneOf:b,oneOfType:g,shape:C};return l.prototype=Error.prototype,I.checkPropTypes=u,I.PropTypes=I,I}}).call(t,n(1))},function(e,t){e.exports='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048;" xml:space="preserve">\r\n<path d="M1365.8,1023.7L682.2,1793V255L1365.8,1023.7z"></path>\r\n</svg>'},function(e,t,n){"use strict";e.exports=n(24)},function(e,t,n){"use strict";
function r(e){var t="",n=Math.floor(.001*(Date.now()-c));return n===i?o++:(o=0,i=n),t+=a(u.lookup,s),t+=a(u.lookup,e),o>0&&(t+=a(u.lookup,o)),t+=a(u.lookup,n)}var o,i,a=n(11),u=n(2),c=1459707606518,s=6;e.exports=r},function(e,t,n){"use strict";function r(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=n(2);e.exports=r},function(e,t,n){"use strict";function r(t){return u.seed(t),e.exports}function o(t){return f=t,e.exports}function i(e){return void 0!==e&&u.characters(e),u.shuffled()}function a(){return s(f)}var u=n(2),c=(n(11),n(23)),s=n(22),l=n(25),f=n(28)||0;e.exports=a,e.exports.generate=a,e.exports.seed=r,e.exports.worker=o,e.exports.characters=i,e.exports.decode=c,e.exports.isValid=l},function(e,t,n){"use strict";function r(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),n=e.length,r=0;r<n;r++)if(t.indexOf(e[r])===-1)return!1;return!0}var o=n(2);e.exports=r},function(e,t){"use strict";function n(){if(!r||!r.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return r.getRandomValues(e),48&e[0]}var r="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=n},function(e,t){"use strict";function n(){return o=(9301*o+49297)%233280,o/233280}function r(e){o=e}var o=1;e.exports={nextValue:n,seed:r}},function(e,t){"use strict";e.exports=0},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],u=o[2],c=o[3],s={css:a,media:u,sourceMap:c};n[i]?n[i].parts.push(s):t.push(n[i]={id:i,parts:[s]})}return t}function i(e,t){var n=y(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var n,r,o;if(t.singleton){var i=m++;n=b||(b=u(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],c=p[u.id];c.refs--,i.push(c)}if(e){var s=o(e);r(s,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete p[c.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}])});