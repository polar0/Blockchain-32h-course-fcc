(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(32542)}])},73193:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(85893),s=n(214),r=n.n(s);function i(){var e=function(){window.open("https://github.com/polar0/full-blockchain-solidity-course-js","_blank")};return(0,a.jsxs)("footer",{className:r().footer,children:[(0,a.jsx)("a",{href:"https://polarzero.xyz/",target:"_blank",children:"Built by polarzero"}),(0,a.jsx)("i",{className:"fa-brands fa-github icon-footer",onClick:e})]})}},37673:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(85893),s=n(41664),r=n.n(s),i=n(82674);function o(){return(0,a.jsxs)("nav",{children:[(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(r(),{href:"/",children:(0,a.jsx)("a",{className:"title",children:"NFT Marketplace"})})}),(0,a.jsxs)("div",{className:"links",children:[(0,a.jsx)(r(),{href:"/",children:(0,a.jsx)("button",{className:"nav-btn",children:"Home"})}),(0,a.jsx)(r(),{href:"/mint-nft",children:(0,a.jsx)("button",{className:"nav-btn",children:(0,a.jsx)("span",{className:"highlight bold",children:"Mint"})})})]}),(0,a.jsx)("div",{className:"connect-btn",children:(0,a.jsx)(i.NL,{showBalance:!1,showNe:!0,accountStatus:{smallScreen:"avatar",largeScreen:"avatar"},chainStatus:{smallScreen:"icon",largeScreen:"full"}})})]})}},32542:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var a=n(85893),s=n(37673),r=n(73193),i=n(214),o=n.n(i),c=n(47568),l=n(70655),d=JSON.parse('[{"type":"constructor","payable":false,"inputs":[]},{"type":"error","name":"NftMarketplace__AlreadyListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NftMarketplace__NoProceeds","inputs":[]},{"type":"error","name":"NftMarketplace__NotApprovedForMarketplace","inputs":[]},{"type":"error","name":"NftMarketplace__NotListed","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}]},{"type":"error","name":"NftMarketplace__NotOwner","inputs":[]},{"type":"error","name":"NftMarketplace__PriceMustBeAboveZero","inputs":[]},{"type":"error","name":"NftMarketplace__PriceNotMet","inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}]},{"type":"error","name":"NftMarketplace__TransferFailed","inputs":[]},{"type":"event","anonymous":false,"name":"ItemBought","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"event","anonymous":false,"name":"ItemCanceled","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ItemListed","inputs":[{"type":"address","name":"seller","indexed":true},{"type":"address","name":"nftAddress","indexed":true},{"type":"uint256","name":"tokenId","indexed":true},{"type":"uint256","name":"price","indexed":false}]},{"type":"function","name":"buyItem","constant":false,"stateMutability":"payable","payable":true,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"cancelListing","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"getListing","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"tuple","components":[{"type":"uint256","name":"price"},{"type":"address","name":"seller"}]}]},{"type":"function","name":"getProceeds","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"user"}],"outputs":[{"type":"uint256","name":"proceeds"}]},{"type":"function","name":"listItem","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"price"}],"outputs":[]},{"type":"function","name":"updateListing","constant":false,"payable":false,"inputs":[{"type":"address","name":"nftAddress"},{"type":"uint256","name":"tokenId"},{"type":"uint256","name":"newPrice"}],"outputs":[]},{"type":"function","name":"withdrawProceeds","constant":false,"payable":false,"inputs":[],"outputs":[]}]'),u=n(67225),p=n(25675),m=n.n(p),f=n(4774),h=n(82369),y=n(71577),x=n(86856),v=n(40044),g=n(45605),b=n(10133),N=n(55678),j=n(67976),k=n(61744),w=n(67294);function A(e){var t=e.props,n=e.isVisible,s=e.hideModal,r=this,i=function(e,t){"updateListing"===t&&J(),"cancelListing"===t&&G(),H(!0),e&&e.stopPropagation()},o=function(e){console.log(e),"ACTION_REJECTED"===e.code?N.Am.error("Transaction rejected."):N.Am.error("Error updating listing."),d()},d=function(e){s(),H(!1),e&&e.stopPropagation()},u=function(e){M(""===e.target.value?"0":e.target.value),""!==e.target.value&&e.target.value<=0?(L(!1),B("Price must be greater than 0.")):""!==e.target.value&&k.parseEther(e.target.value).toString()===E?(L(!1),B("The new price is the same as the old one.")):""===e.target.value?L(!1):(L(!0),B(""))},p=t.marketplaceAddress,m=t.marketplaceAbi,A=t.nftAddress,I=t.tokenName,_=t.tokenId,E=t.price,S=(0,w.useState)("0"),T=S[0],M=S[1],C=(0,w.useState)(!1),Z=C[0],L=C[1],P=(0,w.useState)(""),F=P[0],B=P[1],O=(0,w.useState)(!1),D=O[0],H=O[1],V=(0,j.yL)().network,Y=(0,f.N)(p,m,"updateListing",[A,_,k.parseEther(T)],{onSuccess:K,onError:o},n&&A&&""!==_&&T&&"0"!==T),J=Y.write,R=Y.isLoading,U=(0,f.N)(p,m,"cancelListing",[A,_],{onSuccess:K,onError:o},n&&A&&""!==_),G=U.write,z=U.isLoading;function K(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,c.Z)(function(e){return(0,l.__generator)(this,function(t){switch(t.label){case 0:return[4,N.Am.promise(e.wait(1),{pending:"Updating listing...",success:"Listing updated!",error:"Error updating listing."})];case 1:return t.sent(),d(),M("0"),[2]}})})).apply(this,arguments)}return(0,a.jsx)(h.Z,{title:"Update Listing",open:n,onOk:function(e){return i(e,"updateListing")},onCancel:d,onClose:d,okText:"Update",footer:[(0,a.jsx)(y.Z,{type:"primary",danger:!0,loading:z||D,onClick:function(e){return i(e,"cancelListing")},children:"Cancel listing"},"unlist"),(0,a.jsxs)("div",{className:"wrap-btn",children:[(0,a.jsx)(y.Z,{onClick:d,children:"Cancel"},"back"),(0,a.jsx)(y.Z,{type:"primary",disabled:!Z,loading:R||D,onClick:function(){return i(r,"updateListing")},children:"Ok"},"submit")]}),],children:(0,a.jsxs)("div",{className:"update-listing",children:[(0,a.jsxs)("div",{className:"title",children:[(0,a.jsxs)("div",{className:"name",children:[I," "]}),(0,a.jsxs)("div",{className:"token-id",children:["#",_]})]}),(0,a.jsx)(x.Z,{type:"number",autoFocus:!0,placeholder:"New price",prefix:"maticmum"===V.name?(0,a.jsx)(b.T,{name:"matic",width:20,style:"icon"}):(0,a.jsx)(b.T,{name:"eth",width:20,style:"icon"}),addonAfter:(0,a.jsx)(v.Z,{title:"Enter the new price (in ".concat("maticmum"===V.name?"MATIC":"ETH",")"),children:(0,a.jsx)(g.Z,{style:{color:"rgba(255,255,255,.75)"}})}),onChange:u,min:0}),(0,a.jsx)("div",{className:"error-message",children:F})]})})}var I=function(e){var t;return Number(parseFloat(k.formatUnits(e,18)).toFixed(4))},_=n(2593);function E(e){var t=e.props,n=e.isVisible,s=e.hideModal,r=function(e){B(),S(!0),e.stopPropagation()},i=function(e){console.error(e.message),"ACTION_REJECTED"===e.code?N.Am.error("Transaction rejected."):N.Am.error("Error buying item."),o()},o=function(e){s(),S(!1),e&&e.stopPropagation()},d=t.marketplaceAddress,u=t.marketplaceAbi,p=t.nftAddress,m=t.tokenName,y=t.tokenId,x=t.price,v=(0,j.yL)().network,g=(0,j.mA)().address,k=(0,j.KQ)({addressOrName:g}).data,A=(0,w.useState)(!1),E=A[0],S=A[1],T=(0,w.useState)(!0),M=T[0],C=T[1],Z=(0,w.useState)(0),L=Z[0],P=Z[1],F=(0,f.N)(d,u,"buyItem",[p,y,{value:x}],{onSuccess:function(e){return D.apply(this,arguments)},onError:i},n&&p&&""!==y&&x),B=F.write,O=F.isLoading;function D(){return(D=(0,c.Z)(function(e){return(0,l.__generator)(this,function(t){switch(t.label){case 0:return[4,N.Am.promise(e.wait(1),{pending:"Buying item...",success:"Item bought!",error:"Error buying item."})];case 1:return t.sent(),o(),[2]}})})).apply(this,arguments)}return F.isSuccess,(0,w.useEffect)(function(){if(x&&k){var e=_.O$.from(k.value),t=_.O$.from(x);e.lt(t)?(C(!1),P(t.sub(e).toString())):(C(!0),P(0))}},[x]),(0,a.jsx)(h.Z,{title:"Buy item",open:n,onOk:r,onCancel:o,onClose:s,okButtonProps:{loading:O||E,disabled:!M},okText:"Buy",children:(0,a.jsxs)("div",{className:"buy-item",children:[(0,a.jsxs)("div",{className:"title",children:[(0,a.jsxs)("div",{className:"name",children:[m," "]}),(0,a.jsxs)("div",{className:"token-id",children:["#",y]})]}),(0,a.jsx)("div",{className:"price",children:(0,a.jsxs)("div",{className:"value",children:["maticmum"===v.name?(0,a.jsx)(b.T,{name:"matic",width:20,style:"color"}):(0,a.jsx)(b.T,{name:"eth",width:20,style:"color"}),I(x)]})}),k?(0,a.jsxs)("div",{className:"balance",children:["You have","maticmum"===v.name?(0,a.jsx)(b.T,{name:"matic",width:20,style:"icon"}):(0,a.jsx)(b.T,{name:"eth",width:20,style:"icon"}),(0,a.jsxs)("span",{className:"ether-value",children:[" ",I(k.value.toString())," "]}),"in your wallet."]}):"",!M&&(0,a.jsxs)("div",{className:"error-message",children:["You need"," ",(0,a.jsx)("span",{className:"ether-value",children:I(L)})," ","more ","maticmum"===v.name?"MATIC":"ETH"," to buy this item."]})]})})}var S=n(26303);function T(e){var t,n=e.nftAttributes,s=e.marketplaceAddress,r=function(e){"update"===e?U(!0):"buy"===e&&K(!0)},i=n.nftAddress,o=n.tokenId,p=n.price,h=n.seller,y=(0,j.mA)().address,x=(0,j.yL)().network,v=(0,w.useState)(!1),g=v[0],k=v[1],_=(0,w.useState)(""),T=_[0],M=_[1],C=(0,w.useState)(""),Z=C[0],L=C[1],P=(0,w.useState)(""),F=P[0],B=P[1],O=(0,w.useState)(!1),D=O[0],H=O[1],V=(0,w.useState)(!1),Y=(V[0],V[1]),J=(0,w.useState)(!1),R=J[0],U=J[1],G=(0,w.useState)(!1),z=G[0],K=G[1],Q=(0,f.p)(i,u,"tokenURI",[o],o);function W(){return X.apply(this,arguments)}function X(){return(X=(0,c.Z)(function(){var e,t,n,a;return(0,l.__generator)(this,function(t){switch(t.label){case 0:if(!Q)return[3,6];return e={},[4,fetch(Q.replace("ipfs://","https://ipfs.io/ipfs/")).catch(function(e){console.log(e)})];case 1:if(!((n=t.sent())&&429===n.status))return[3,2];return console.log("Too many requests"),e.uri="",e.name="",e.description="",k(!1),setTimeout(function(){W()},5e3),[3,5];case 2:if(!n)return[3,4];return[4,n.json()];case 3:return a=t.sent(),e.uri=a.image.replace("ipfs://","https://ipfs.io/ipfs/"),e.name=a.name,e.description=a.description,k(!0),[3,5];case 4:e.uri="",e.name="",e.description="",k(!1),N.Am.error("Error fetching NFT data. Please refresh."),t.label=5;case 5:M(e.uri),L(e.name),B(e.description),t.label=6;case 6:return H(y.toLowerCase()===h.toLowerCase()||void 0===h),[2]}})})).apply(this,arguments)}return(0,w.useEffect)(function(){y&&W(),U(!1),K(!1)},[y]),(0,a.jsxs)("div",{className:"nft-card",onMouseEnter:function(){return Y(!0)},onMouseLeave:function(){return Y(!1)},onClick:function(){return D?r("update"):r("buy")},children:[(0,a.jsx)(A,{props:{marketplaceAddress:s,marketplaceAbi:d,nftAddress:i,tokenName:Z,tokenId:o,price:p},isVisible:R,hideModal:function(){return U(!1)}},"update-listing-modal"),(0,a.jsx)(E,{props:{marketplaceAddress:s,marketplaceAbi:d,nftAddress:i,tokenName:Z,tokenId:o,price:p},isVisible:z,hideModal:function(){return K(!1)}},"buying-modal"),(0,a.jsx)("div",{className:"image",children:T?(0,a.jsx)(m(),{src:T,loader:function(){return T},unoptimized:!0,width:300,height:300}):(0,a.jsx)(S.Z.Image,{style:{width:300,height:300},loading:!g,active:!0,className:"nft-skeleton"})}),(0,a.jsxs)("div",{className:"properties",children:[(0,a.jsxs)("div",{className:"name",children:[Z," ",(0,a.jsxs)("span",{className:"token-id",children:["#",o]})]}),(0,a.jsx)("div",{className:"description",children:F}),(0,a.jsx)(S.Z,{paragraph:{rows:1},loading:!g,active:!0})]}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsxs)("div",{className:"price",children:["maticmum"===x.name?(0,a.jsx)(b.T,{name:"matic",width:20,style:"color"}):(0,a.jsx)("i",{className:"fa-brands fa-ethereum"}),I(p)]}),(0,a.jsx)("div",{className:"seller",children:D?"You":"".concat(h.slice(0,6),"...").concat(h.slice(-4))})]}),(0,a.jsx)("div",{className:"actions",children:D?(0,a.jsxs)("div",{className:"action-edit-item",children:[(0,a.jsx)("div",{children:"Update"}),(0,a.jsx)("i",{className:"fa-solid fa-pen"})]}):(0,a.jsxs)("div",{className:"action-buy-item",children:[(0,a.jsxs)("div",{children:["Buy"," ","maticmum"===x.name?(0,a.jsx)(b.T,{name:"matic",width:20,style:"color"}):(0,a.jsx)("i",{className:"fa-brands fa-ethereum"}),I(p)]}),(0,a.jsx)("i",{className:"fa-solid fa-cart-shopping"})]})})]})}var M=n(48036),C=n(89325),Z=n(63750);function L(e){var t=e.isVisible,n=e.hideModal,s=function(){navigator.clipboard.writeText(_),N.Am.info("NFT Contract address copied to clipboard!")},r=function(e){console.error(e.message),"ACTION_REJECTED"===e.code?N.Am.error("Transaction rejected."):N.Am.error("Error listing item."),i()},i=function(e){n(),L(!1),H(!1),J(""),G(""),e&&e.stopPropagation()},o=(0,j.yL)().network,p=(0,w.useState)(null),m=p[0],A=p[1],I=(0,w.useState)(null),_=I[0],E=I[1],S=(0,w.useState)(!1),T=S[0],L=S[1],P=(0,w.useState)(!1),F=P[0],B=P[1],O=(0,w.useState)(!1),D=O[0],H=O[1],V=(0,w.useState)(""),Y=V[0],J=V[1],R=(0,w.useState)(""),U=R[0],G=R[1],z=(0,w.useState)(""),K=z[0],Q=z[1],W=(0,w.useState)(""),X=W[0],$=W[1],q=(0,f.N)(_,u,"approve",[m,Y],{onSuccess:function(e){return ec.apply(this,arguments)},onError:r},t&&m&&""!==Y),ee=q.write,et=q.isLoading,en=(0,f.N)(m,d,"listItem",[_,Y,K],{onSuccess:function(e){return el.apply(this,arguments)},onError:r},_&&""!==Y&&K),ea=en.write,es=en.isLoading,er=en.refetch;function ei(e,t){return eo.apply(this,arguments)}function eo(){return(eo=(0,c.Z)(function(e,t){return(0,l.__generator)(this,function(n){return"approveMarketplace"!==t||ee?"listItem"!==t||ea?("approveMarketplace"===t&&ee(),"listItem"===t&&ea(),L(!0),e&&e.stopPropagation(),[2]):(N.Am.error("It looks like you have not approved the marketplace yet. Please wait for the approval to go through."),[2]):(N.Am.error("Please check if you own this NFT"),[2])})})).apply(this,arguments)}function ec(){return(ec=(0,c.Z)(function(e){return(0,l.__generator)(this,function(t){switch(t.label){case 0:return[4,N.Am.promise(e.wait(1),{pending:"Approving marketplace...",success:"Item approved for marketplace. You can now list it.",error:"Error approving marketplace."})];case 1:return t.sent(),er(),H(!0),L(!1),[2]}})})).apply(this,arguments)}function el(){return(el=(0,c.Z)(function(e){return(0,l.__generator)(this,function(t){switch(t.label){case 0:return console.log("here"),[4,N.Am.promise(e.wait(1),{pending:"Listing item...",success:"Item listed!",error:"Error listing item."})];case 1:return t.sent(),i(),[2]}})})).apply(this,arguments)}function ed(e,t){return eu.apply(this,arguments)}function eu(){return(eu=(0,c.Z)(function(e,t){var n;return(0,l.__generator)(this,function(n){if(null===e&&B(!1),"tokenId"===t)J(e);else if("price"===t){if(G(e),null===e)return[2];Q(k.parseEther(e.toString()).toString())}return[2]})})).apply(this,arguments)}return(0,w.useEffect)(function(){o.chainId&&M[o.chainId]&&(A(M[o.chainId].NftMarketplace[0]||""),E(M[o.chainId].BasicNft[0]||""))},[o.chainId]),(0,w.useEffect)(function(){var e="number"!=typeof U||U<=0||"number"!=typeof Y||Y<0;e?B(!1):B(!0),e&&""!==U&&""!==Y?$("Invalid price or token ID."):$("")},[U,Y]),(0,a.jsx)(h.Z,{title:"List item",open:t,onOk:ei,onCancel:i,onClose:n,footer:[(0,a.jsx)(y.Z,{onClick:i,children:"Cancel"},"back"),(0,a.jsxs)("div",{className:"wrap-btn",children:[(0,a.jsx)(y.Z,{type:"primary",disabled:D||!F,loading:et||T,onClick:function(e){return ei(e,"approveMarketplace")},children:"1 - Approve Marketplace"},"approve"),(0,a.jsx)(y.Z,{type:"primary",disabled:!D,loading:es||T,onClick:function(e){return ei(e,"listItem")},children:"2 - List Item"},"submit")]}),],okText:"List",children:(0,a.jsxs)("div",{className:"list-item",children:[(0,a.jsxs)("div",{className:"list-address",children:[(0,a.jsx)("label",{htmlFor:"list-address-input",children:"NFT Address"}),(0,a.jsx)(x.Z,{id:"list-address-input",type:"text",value:_,suffix:(0,a.jsxs)("div",{className:"nft-address-tooltip",children:[(0,a.jsx)("i",{className:"fa-solid fa-copy",onClick:s}),(0,a.jsx)(v.Z,{title:"The address of the NFT Contract",children:(0,a.jsx)(g.Z,{style:{color:"rgba(255,255,255,.75)"}})})]}),disabled:!0})]}),(0,a.jsxs)("div",{className:"list-token-id",children:[(0,a.jsx)("label",{htmlFor:"list-token-id-input",children:"Token ID"}),(0,a.jsx)(C.Z,{id:"list-token-id-input",type:"number",autoFocus:!0,placeholder:"0",prefix:(0,a.jsx)(Z.nvr,{}),addonAfter:(0,a.jsx)(v.Z,{title:"Enter the ID of the token you want to list",children:(0,a.jsx)(g.Z,{style:{color:"rgba(255,255,255,.75)"}})}),onChange:function(e){return ed(e,"tokenId")},min:0,value:Y})]}),(0,a.jsxs)("div",{className:"list-price",children:[(0,a.jsx)("label",{htmlFor:"list-price-input",children:"Price"}),(0,a.jsx)(C.Z,{id:"list-price-input",type:"number",placeholder:"0",prefix:"maticmum"===o.name?(0,a.jsx)("div",{className:"icon-wrapper",children:(0,a.jsx)(b.T,{name:"matic",width:16,style:"icon"})}):(0,a.jsx)("div",{className:"icon-wrapper",children:(0,a.jsx)(b.T,{name:"eth",width:16,style:"icon"})}),addonAfter:(0,a.jsx)(v.Z,{title:"Enter the price for the NFT (in ".concat("maticmum"===o.name?"MATIC":"ETH",")"),children:(0,a.jsx)(g.Z,{style:{color:"rgba(255,255,255,.75)"}})}),onChange:function(e){return ed(e,"price")},min:0,value:U})]}),(0,a.jsx)("div",{className:"error-message",children:X})]})})}function P(e){var t=e.isVisible,n=e.hideModal,s=function(e){if("0"===_.toString()){N.Am.error("You have no proceeds to withdraw.");return}S(),g(!0),e.stopPropagation()},r=function(e){console.error(e.message),"ACTION_REJECTED"===e.code?N.Am.error("Transaction rejected."):N.Am.error("Error withdrawing proceeds."),i()},i=function(e){n(),g(!1),e&&e.stopPropagation()},o=(0,j.mA)().address,u=(0,j.yL)().network,p=(0,w.useState)(""),m=p[0],y=p[1],x=(0,w.useState)(!1),v=x[0],g=x[1],k=(0,w.useState)(""),A=k[0];k[1];var _=(0,f.p)(m,d,"getProceeds",[o],o),E=(0,f.N)(m,d,"withdrawProceeds",[],{onSuccess:function(e){return C.apply(this,arguments)},onError:r},t&&_&&"0"!==_.toString()),S=E.write,T=E.isLoading;function C(){return(C=(0,c.Z)(function(e){return(0,l.__generator)(this,function(t){switch(t.label){case 0:return[4,N.Am.promise(e.wait(1),{pending:"Withdrawing proceeds...",success:"Proceeds withdrawn!",error:"Error withdrawing proceeds"})];case 1:return t.sent(),i(),[2]}})})).apply(this,arguments)}return(0,w.useEffect)(function(){u.chainId&&M[u.chainId]&&y(M[u.chainId].NftMarketplace[0]||"")},[u.chainId]),(0,a.jsxs)(h.Z,{title:"Withdraw Proceeds",open:t,onOk:s,onCancel:i,onClose:n,okButtonProps:{loading:T||v},okText:"Withdraw",children:[(0,a.jsxs)("div",{className:"withdraw-proceeds",children:[(0,a.jsx)("div",{className:"title",children:"Your proceeds"}),(0,a.jsx)("div",{className:"price",children:(0,a.jsxs)("div",{className:"value",children:["maticmum"===u.name?(0,a.jsx)(b.T,{name:"matic",width:20,style:"icon"}):(0,a.jsx)(b.T,{name:"eth",width:20,style:"icon"}),(0,a.jsx)("span",{children:_&&I(_.toString()||"0")})]})})]}),(0,a.jsx)("div",{className:"error-message",children:A})]})}var F=n(7297),B=n(17283);function O(){var e=(0,F.Z)(['\n  {\n    activeItems(\n      first: 1000\n      where: { buyer: "0x0000000000000000000000000000000000000000" }\n    ) {\n      id\n      buyer\n      seller\n      nftAddress\n      tokenId\n      price\n    }\n  }\n']);return O=function(){return e},e}var D=(0,B.Ps)(O()),H=n(27950),V=n(55850);function Y(e){var t=e.updateApolloClient,n=function(e){"all"===e.target.value?m(!1):m(!0)},i=(0,j.mA)(),c=i.isDisconnected,l=i.address,d=(0,j.yL)().network,u=(0,w.useState)(!1),p=u[0],m=u[1],f=(0,w.useState)(!1),h=f[0],x=f[1],v=(0,w.useState)(!1),g=v[0],b=v[1],N=(0,w.useState)(!1),k=N[0],A=N[1],I=(0,w.useState)(""),_=I[0],E=I[1],S=d.chainId?d.chainId.toString():"31337",C=(0,V.a)(D),Z=C.loading,F=(C.error,C.data);return(0,w.useEffect)(function(){M[S]&&E(M[S].NftMarketplace[0]),"goerli"===d.name||"maticmum"===d.name||"arbitrum-goerli"===d.name?A(!1):A(!0),t(d.name)},[d.chainId]),(0,a.jsxs)("div",{className:"page",children:[(0,a.jsx)("header",{className:o().header,children:(0,a.jsx)(s.Z,{})}),(0,a.jsx)("main",{className:o().main,children:(0,a.jsx)("div",{className:"content",children:(0,a.jsxs)("div",{className:"home-container",children:[(0,a.jsx)(L,{isVisible:h,hideModal:function(){return x(!1)}}),(0,a.jsx)(P,{isVisible:g,hideModal:b}),(0,a.jsxs)("div",{className:"home-actions",children:[c?(0,a.jsx)("div",{}):Z?"":F&&0===F.activeItems.length?(0,a.jsx)("div",{}):(0,a.jsxs)("div",{className:"action-filters",children:[(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("div",{children:"Filters"}),(0,a.jsx)("i",{className:"fa-solid fa-filter"})]}),(0,a.jsxs)(H.ZP.Group,{className:"filter-group",onChange:n,defaultValue:"all",buttonStyle:"solid",disabled:k,children:[(0,a.jsx)(H.ZP.Button,{className:"filter-btn",value:"all",children:"All"}),(0,a.jsx)(H.ZP.Button,{className:"filter-btn",value:"owned",children:"Your listings"})]})]}),(0,a.jsxs)("div",{className:"home-actions-btns",children:[(0,a.jsx)(y.Z,{type:"primary",className:"mint-btn action-withdraw",onClick:function(){return b(!0)},disabled:k,children:"Proceeds"}),(0,a.jsx)(y.Z,{type:"primary",className:"mint-btn action-sell",onClick:function(){return x(!0)},disabled:k,children:"Sell"})]})]}),c?(0,a.jsx)("div",{className:"box-container error",children:"You must connect your wallet to see recently listed NFTs."}):k?(0,a.jsx)("div",{className:"box-container error",children:"You are on an unsupported network. Please change to Goerli or Mumbai."}):Z?(0,a.jsx)("div",{className:"loader"}):F&&0===F.activeItems.length?(0,a.jsx)("div",{className:"box-container error",children:"No NFT listed on the marketplace yet."}):(0,a.jsx)("div",{className:"home-nft",children:F&&F.activeItems.filter(function(e){return!p||e.seller===l}).map(function(e){return(0,a.jsx)(T,{nftAttributes:e,marketplaceAddress:_},"".concat(e.nftAddress).concat(e.tokenId))})})]})})}),(0,a.jsx)(r.Z,{})]})}},4774:function(e,t,n){"use strict";n.d(t,{N:function(){return o},p:function(){return i}});var a=n(41799),s=n(69396),r=n(67976);function i(e,t,n,a,s){var i=(0,r.do)({addressOrName:e,contractInterface:t,functionName:n,args:a,enabled:s}),o=i.data,c=i.isError;return(i.isLoading,c)?(console.log("Error reading from contract"),null):o}function o(e,t,n,i,o,c){var l,d=(0,r.PJ)({addressOrName:e,contractInterface:t,functionName:n,args:i,enabled:c}),u=d.config,p=(d.status,d.error,d.refetch),m=(0,r.GG)((0,s.Z)((0,a.Z)({},u),{onSuccess:o.onSuccess,onError:o.onError})),f=m.data,h=m.write,y=(0,r.BX)({hash:null==f?void 0:f.hash,confirmations:1});return{write:h,isLoading:y.isLoading,isSuccess:y.isSuccess,refetch:p}}},214:function(e){e.exports={main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},67225:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"approved","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"event","anonymous":false,"name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"operator","indexed":true},{"type":"bool","name":"approved","indexed":false}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"tokenId","indexed":true}]},{"type":"function","name":"TOKEN_URI","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getApproved","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getTokenCounter","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getTokenOwner","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"isApprovedForAll","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"operator"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"mintNft","constant":false,"payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"ownerOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"address"}]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]},{"type":"function","name":"safeTransferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"},{"type":"bytes","name":"data"}],"outputs":[]},{"type":"function","name":"setApprovalForAll","constant":false,"payable":false,"inputs":[{"type":"address","name":"operator"},{"type":"bool","name":"approved"}],"outputs":[]},{"type":"function","name":"supportsInterface","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"bytes4","name":"interfaceId"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"tokenURI","constant":true,"stateMutability":"pure","payable":false,"inputs":[{"type":"uint256","name":"tokenId"}],"outputs":[{"type":"string"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"tokenId"}],"outputs":[]}]')},48036:function(e){"use strict";e.exports=JSON.parse('{"5":{"NftMarketplace":["0x246fe124957897A2eb2E3Edd4d5AB3b726c993C6"],"BasicNft":["0x2EfeEfde77CB1af6310A5137C32840b74873F0a2"]},"80001":{"NftMarketplace":["0xc9F76d13D9695B0956072F150D12d83935f72eB1"],"BasicNft":["0x6e082e54A362d931526DB09b37a38E1747BEfdf0"]},"421613":{"NftMarketplace":["0xc9F76d13D9695B0956072F150D12d83935f72eB1"],"BasicNft":["0x6e082e54A362d931526DB09b37a38E1747BEfdf0"]}}')}},function(e){e.O(0,[13,114,841,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);