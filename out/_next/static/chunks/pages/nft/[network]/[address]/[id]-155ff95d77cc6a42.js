(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[660],{7084:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft/[network]/[address]/[id]",function(){return n(3069)}])},3069:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var i=n(5893),r=n(7294),a=n(1163),c=n(8520),s=n.n(c),u=n(6076),o=n(220),l=n(9669),d=n.n(l);function f(t,e,n,i,r,a,c){try{var s=t[a](c),u=s.value}catch(o){return void n(o)}s.done?e(u):Promise.resolve(u).then(i,r)}var p,h=[{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],m={bsc:{name:"Binance",rpc:"https://bsc-dataseed.binance.org/"},matic:{name:"Matic",rpc:"https://polygon-rpc.com/"}},v=function(t){return t.startsWith("ipfs://")?t.replace("ipfs:/","https://ipfs.io/ipfs"):t},w=(p=s().mark((function t(e,n,i){var r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=new o.r(m[i].rpc),a=new u.CH(e,h,r),t.next=5,a.tokenURI(n);case 5:return t.abrupt("return",t.sent);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var t=this,e=arguments;return new Promise((function(n,i){var r=p.apply(t,e);function a(t){f(r,n,i,a,c,"next",t)}function c(t){f(r,n,i,a,c,"throw",t)}a(void 0)}))}),x=n(5675),y=function(t){var e=(0,a.useRouter)().query,n=e.network,c=e.address,s=e.id,u=(0,r.useState)(null),o=u[0],l=u[1],f=(0,r.useState)(null),p=(f[0],f[1]);if((0,r.useEffect)((function(){c&&s&&n&&w(c,s,n).then((function(t){return(e=t,new Promise((function(t,n){return d().get(v(e)).then((function(e){return t(e)})).catch((function(t){return n(t)}))}))).then((function(t){t=t.data,p(t.attributes),delete t.attributes,l(t)})).catch((function(t){return console.log(t)}));var e})).catch((function(t){return console.log(t)}))}),[c,s,n]),null===o)return(0,i.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center",children:[(0,i.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."}),(0,i.jsx)("p",{className:"w-1/3 text-center text-white",children:"This may take a few seconds."})]});return(0,i.jsx)("div",{className:"container m-auto my-10",children:(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 px-5",children:[(0,i.jsx)("div",{className:"nft-image",children:(null===o||void 0===o?void 0:o.image)&&(0,i.jsx)(x.default,{loader:function(t){var e=t.src,n=t.width,i=t.quality;return"".concat(e,"?w=").concat(n,"&q=").concat(i||75)},src:v(o.image),alt:null===o||void 0===o?void 0:o.name,width:500,height:500})}),(0,i.jsx)("div",{className:"nft-details col-span-2",children:Object.keys(o).map((function(t){return(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsx)("div",{className:"text-lg capitalize font-semibold",children:t}),(0,i.jsx)("div",{className:"text-sm",children:o[t]})]},t)}))})]})})}},6601:function(){}},function(t){t.O(0,[675,818,774,888,179],(function(){return e=7084,t(t.s=e);var e}));var e=t.O();_N_E=e}]);