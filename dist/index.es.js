import n,{useEffect as t,forwardRef as e,useImperativeHandle as o}from"react";var r,c=function(){return c=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},c.apply(this,arguments)};function i(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]])}return e}"function"==typeof SuppressedError&&SuppressedError,function(n){n.ApiKey="API key",n.ContractCode="Contract Code"}(r||(r={}));var a=function(n){var t=n.paymentMethods,e=void 0===t?["CARD","ACCOUNT_TRANSFER"]:t,o=n.amount,a=n.apiKey,u=n.contractCode,s=i(n,["paymentMethods","amount","apiKey","contractCode"]);if(void 0===window)throw new Error("Unable to launch checkout");var p=[];return a?p.splice(p.indexOf(r.ApiKey),1):p.push(r.ApiKey),u?p.splice(p.indexOf(r.ContractCode),1):p.push(r.ContractCode),p.length>0?new Error("".concat(p.join(", ")," is invalid")):/^\d+(\.\d{1,2})?$/.test("".concat(o))?new Error("Invalid amount"):void window.MonnifySDK.initialize(c({apiKey:a,contractCode:u,amount:o,paymentMethods:e},s))},u=function(n){var e=n.callbacks,o=n.configs;t((function(){var n=document.createElement("script");return n.src="https://sdk.monnify.com/plugin/monnify.js",n.type="text/javascript",n.async=!0,document.body.appendChild(n),function(){document.body.removeChild(n)}}),[]);return{initialize:function(n){a(c(c(c({},n),o),e))}}},s=function(e){var o=e.children,r=e.style,c=e.className,u=i(e,["children","style","className"]);t((function(){var n=document.createElement("script");return n.src="https://sdk.monnify.com/plugin/monnify.js",n.type="text/javascript",n.async=!0,document.body.appendChild(n),function(){document.body.removeChild(n)}}),[]);return n.createElement("button",{className:c,style:r,onClick:function(){a(u)}},o)},p=e((function(n,e){var r=n.config,i=n.callbacks;return t((function(){var n=document.createElement("script");return n.src="https://sdk.monnify.com/plugin/monnify.js",n.type="text/javascript",n.async=!0,document.body.appendChild(n),function(){document.body.removeChild(n)}}),[]),o(e,(function(){return{initialize:function(n){a(c(c(c({},n),r),i))}}}),[]),null}));export{s as MonnifyButton,p as MonnifyCheckout,u as useMonnifyCheckout};
//# sourceMappingURL=index.es.js.map
