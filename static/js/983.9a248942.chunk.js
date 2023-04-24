"use strict";(self.webpackChunkwallet_leopards_team_FRONTEND=self.webpackChunkwallet_leopards_team_FRONTEND||[]).push([[983],{8079:function(e,a,n){n(2791);a.Z=n.p+"static/media/symbol-defs.6d0e5ae131b3fdfd40e27afe99f917c7.svg"},6451:function(e,a,n){n.r(a),n.d(a,{default:function(){return We}});var t=n(885),c=n(8687),o=n(9616),s=n(5607),r=n(2791),l=n(6542),i=n(5581),d="ModalAddTransaction_closeBtn__KUoYn",m="ModalAddTransaction_box__Y41ZK",u="ModalAddTransaction_title__Wzy3o",_=n(2431),x=n(8617),h="ModalAddTransactionCheckbox_checkboxInfo__flVEV",b="ModalAddTransactionCheckbox_checkboxText__fdHit",f="ModalAddTransactionCheckbox_checkboxLabel__8-IHO",j="ModalAddTransactionCheckbox_checkboxIconBox__ZMmRM",p="ModalAddTransactionCheckbox_checkbox__xIemf",N="ModalAddTransactionCheckbox_checkboxIcon__WkWBj",g=n(3329),T=function(e){var a=e.onHandleCheckbox,n=e.checkboxStatus;return(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("span",{className:b,style:n?{color:"#24CCA7"}:{color:"#e0e0e0"},children:"Income"}),(0,g.jsxs)("label",{className:f,onClick:a,children:[(0,g.jsx)("input",{className:p,type:"checkbox"}),(0,g.jsx)("div",{className:j,onClick:a,children:n?(0,g.jsx)(x.r7I,{className:N}):(0,g.jsx)(x.XhU,{className:N})})]}),(0,g.jsx)("span",{className:b,style:n?{color:"#e0e0e0"}:{color:"#FF6596"},children:"Expense"})]})},v=n(1413),y=n(5705),F=n(1724),C=n(1799),M=n.n(C),w=(n(1778),n(7425)),I=function(e){var a,n=(a=e?new Date(Date.parse(e)):new Date).getDate();n<10&&(n="0"+n);var t=a.getMonth()+1;return t<10&&(t="0"+t),n+"."+t+"."+a.getFullYear()},H={container:"ModalAddTransactionForm_container__mInSF",addBtn:"ModalAddTransactionForm_addBtn__knwpQ",active:"ModalAddTransactionForm_active__9yLuK",addForm:"ModalAddTransactionForm_addForm__isvQk",addFormInputContainer:"ModalAddTransactionForm_addFormInputContainer__MQziW",categoryLabel:"ModalAddTransactionForm_categoryLabel__2r4J7",addFormInputCategory:"ModalAddTransactionForm_addFormInputCategory__QX5mk",scaleTitle:"ModalAddTransactionForm_scaleTitle__lpfO+",openMenuBtn:"ModalAddTransactionForm_openMenuBtn__+aSFk",openMenuBtnIcon:"ModalAddTransactionForm_openMenuBtnIcon__tA3ma",sumBox:"ModalAddTransactionForm_sumBox__0LsIO",addFormInputSum:"ModalAddTransactionForm_addFormInputSum__Cj1YJ",dateBox:"ModalAddTransactionForm_dateBox__qBGHe",addFormInputDate:"ModalAddTransactionForm_addFormInputDate__QHGQQ",dataBtn:"ModalAddTransactionForm_dataBtn__DRe3G",dataBtnIcon:"ModalAddTransactionForm_dataBtnIcon__r8pPK",commentBox:"ModalAddTransactionForm_commentBox__P4h0C",addFormTextarea:"ModalAddTransactionForm_addFormTextarea__7Ktvu",errorSum:"ModalAddTransactionForm_errorSum__4MYYF",errorComment:"ModalAddTransactionForm_errorComment__XsI45"},k=n(2605),B="ModalAddTransactionFormMenu_menu__drs0q",A="ModalAddTransactionFormMenu_menuItem__fXKa-",Z=function(e){var a=e.handleCategory,n=e.handleBlur,t=(0,r.useRef)(null);(0,r.useEffect)((function(){t.current.focus()}),[]);var o=(0,c.v9)(k.p.getCategories);return(0,g.jsx)("ul",{ref:t,className:B,onBlur:function(){return setTimeout((function(){n()}),150)},tabIndex:"1",children:o.map((function(e){var n=e._id,t=e.name;return(0,g.jsx)("li",{className:A,onClick:function(e){e.preventDefault(),a(n,t)},children:t},n)}))})},S=n(9184),D=/^\d+(\.\d{0,2})?$/,P=F.Ry().shape({amount:F.Rx().test((function(e){return void 0===e||D.test(e)})).min(.01,"Please, enter an amount min 0.01").max(25e5,"Please, enter an amount max 2500000!").required("Amount is required"),comment:F.Z_().trim().max(100,"Maximum 100 symbols").matches(/(^[ A-Za-z\u0401\u0404\u0406\u0407\u0410-\u044F\u0451\u0454\u0456\u0457\u0490\u0491]+$)/,"Please, enter only letters")}),L={amount:"",comment:""},E=function(e){var a=e.checkboxStatus,n=e.onClick,o=(0,r.useState)((new Date).toISOString()),s=(0,t.Z)(o,2),l=s[0],i=s[1],d=(0,r.useState)(I()),m=(0,t.Z)(d,2),u=m[0],_=m[1],h=(0,r.useState)(!1),b=(0,t.Z)(h,2),f=b[0],j=b[1],p=(0,r.useState)("10"),N=(0,t.Z)(p,2),T=N[0],F=N[1],C=(0,r.useState)("Other expenses"),k=(0,t.Z)(C,2),B=k[0],A=k[1],D=(0,c.I0)(),E=new Date,R=new Date("December 31, 2018 23:59:59"),$=function(e){j(!0)},W=function(e){j(!1)};return(0,g.jsx)(y.J9,{initialValues:L,validationSchema:P,onSubmit:function(e,t){t.resetForm;var c=e.amount,o=e.comment;if(a){if(""===o){var s={transactionType:a,amount:1*Number(c).toFixed(2),date:l};return D(S.ZP.addTransaction(s)),void n()}var r={transactionType:a,comment:o,amount:1*Number(c).toFixed(2),date:l};return D(S.ZP.addTransaction(r)),void n()}if(""===o){var i={transactionType:a,category:T,amount:Number(c),date:l};return D(S.ZP.addTransaction(i)),void n()}var d={transactionType:a,category:T,comment:o,amount:Number(c),date:l};D(S.ZP.addTransaction(d)),n()},children:(0,g.jsxs)(y.l0,{className:H.addForm,children:[(0,g.jsxs)("div",{className:H.addFormInputContainer,children:[!a&&(0,g.jsxs)("label",{className:H.categoryLabel,children:[(0,g.jsx)(y.gN,{className:H.addFormInputCategory,type:"text",placeholder:"Select a category",name:"category",value:B,onClick:f?W:$,autoComplete:"off",readOnly:!0}),(0,g.jsx)("button",{className:H.openMenuBtn,type:"button",onClick:f?W:$,children:f?(0,g.jsx)(x.lVW,{className:H.openMenuBtnIcon}):(0,g.jsx)(x.kzR,{className:H.openMenuBtnIcon})}),f&&(0,g.jsx)(Z,{handleCategory:function(e,a){F(e),A(a),W()},handleBlur:W})]}),(0,g.jsxs)("label",{className:H.sumBox,children:[(0,g.jsx)(y.gN,{className:H.addFormInputSum,type:"text",placeholder:"0.00",name:"amount",autoComplete:"off"}),(0,g.jsx)(y.Bc,{className:H.errorMessage,name:"amount",component:"div",render:function(e){return"Please, enter an amount min 0.01"===e||"Please, enter an amount max 2500000!"===e||"Amount is required"===e?(0,g.jsx)("div",{className:H.errorSum,children:e}):(0,g.jsx)("div",{className:H.errorSum,children:"Digits only, no more than two after the decimal point"})}})]}),(0,g.jsx)("label",{className:H.dateBox,children:(0,g.jsx)(M(),{timeFormat:!1,renderInput:function(e,a){return(0,g.jsxs)("div",{className:H.dataBox,children:[(0,g.jsx)(y.gN,(0,v.Z)((0,v.Z)({},e),{},{className:H.addFormInputDate,type:"text",placeholder:"date",name:"date",autoComplete:"off",value:u,readOnly:!0})),(0,g.jsx)("button",{className:H.dataBtn,type:"button",onClick:a,children:(0,g.jsx)(w.FVH,{className:H.dataBtnIcon})})]})},isValidDate:function(e){return e.isBefore(E)&&e.isAfter(R)},dateFormat:"DD.MM.YYYY",closeOnSelect:!0,initialValue:new Date,onChange:function(e){var a=e._d;i(a.toISOString()),_(I(a))}})}),(0,g.jsxs)("label",{className:H.commentBox,children:[(0,g.jsx)(y.gN,{className:H.addFormTextarea,name:"comment",component:"textarea",placeholder:"Comment",onKeyPress:function(e){13===e.charCode&&e.preventDefault()}}),(0,g.jsx)(y.Bc,{className:H.errorMessage,name:"comment",component:"div",render:function(e){return(0,g.jsx)("div",{className:H.errorComment,children:e})}})]})]}),(0,g.jsx)("button",{type:"submit",className:H.addBtn,children:"Add"})]})})},R=function(){var e=(0,c.I0)(),a=(0,r.useState)(!1),n=(0,t.Z)(a,2),o=n[0],s=n[1],l=function(){e((0,i.Ru)(!1))},x=function(e){"Escape"===e.code&&l()};return(0,r.useEffect)((function(){return document.addEventListener("keydown",x),document.body.style.overflow="hidden",function(){document.removeEventListener("keydown",x),document.body.style.overflow=""}})),(0,g.jsx)(_.Z,{onClose:l,onClick:function(e){e.currentTarget===e.target&&l()},children:(0,g.jsxs)("div",{className:m,children:[(0,g.jsx)("h2",{className:u,children:"Add transaction"}),(0,g.jsx)(T,{onHandleCheckbox:function(e){e.currentTarget===e.target&&s(!o)},checkboxStatus:o}),(0,g.jsx)(E,{checkboxStatus:o,onClick:l}),(0,g.jsx)("button",{className:d,type:"button",onClick:l,children:"cancel"})]})})},$=n(1283),W=function(e){return e.finance.totalBalance},O=function(e){return e.finance.data},Y=function(e){return e.finance.isLoading},q=function(e){return e.finance.totalQuantityTransactions},Q={balanceContainer:"Balance_balanceContainer__C-AFQ",balanceAmount:"Balance_balanceAmount__8yfJl",text:"Balance_text__4bKjj"};var V=n.p+"static/media/hryvniaLogo.8b72370dad1354da2a1e4c59fe17fa4c.svg",K=function(){var e=(0,c.v9)(W);return(0,g.jsxs)("div",{className:Q.balanceContainer,children:[(0,g.jsx)("p",{className:Q.text,children:"Your balance"}),(0,g.jsxs)("div",{className:Q.balanceAmount,children:[(0,g.jsx)("img",{className:Q.balanceLogo,src:V,alt:"logo of hryvnia"}),(0,g.jsx)("p",{children:e?(Math.round(100*e)/100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):"0.00"})]})]})},G=n(4450),U=n(2982),z=n(5861),J=n(4687),X=n.n(J),ee="HomeTabMobile_operationList__DeGuN",ae="HomeTabMobile_loader__BsNEt",ne="HomeTabMobile_operationItem__LlPAE",te="HomeTabMobile_operationItemUl__x8cSy",ce="HomeTabMobile_operationInfo__e95EB",oe="HomeTabMobile_operationInfoIncome__Td8yy",se="HomeTabMobile_operationInfoExpence__bQeCU",re="HomeTabMobile_mobileTableHeader__GkyyR",le="HomeTabMobile_mobileTableInfo__YP8+k",ie="HomeTabMobile_category__GIVFa",de="HomeTabMobile_mobileTableInfoCategory__CJTxo",me="HomeTabMobile_mobileTableInfoIncome__E8lxu",ue="HomeTabMobile_mobileTableInfoExpence__s2gTq",_e="HomeTabMobile_mobileDelete__W9edK",xe=n(2195),he=n(7689),be=n(1807),fe=n(5562),je=n(6856),pe=function(e){var a=e.currentPage,n=e.setCurrentPage,t=e.fetching,o=e.setFetching,s=(0,c.I0)(),l=(0,c.v9)(Y),i=(0,c.v9)(q),d=(0,c.v9)(O);function m(){return m=(0,z.Z)(X().mark((function e(a,t){var c,s;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i>d.length)){e.next=9;break}return e.next=3,xe.tu.get("transactions?page=".concat(a,"&limit=20"));case 3:return c=e.sent,s=c.data,e.next=7,t(S.ZP.updateTransactionsNew(s));case 7:n((function(e){return e+1})),o(!1);case 9:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}(0,r.useEffect)((function(){t&&function(e,a){m.apply(this,arguments)}(a,s)}),[t]);var u=(0,c.v9)(O)||[];(0,r.useEffect)((function(){u.length<10&&s(S.ZP.updateTransactions())}),[]);var _=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100&&o(!0)};(0,r.useEffect)((function(){return window.addEventListener("scroll",_),function(){return window.removeEventListener("scroll",_)}}));var x=function(e){return e?(0,U.Z)(e).sort((function(e,a){return Number(a.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/,"$1$2$3"))-Number(e.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/,"$1$2$3"))})):[]}((0,c.v9)(O));function h(e){return!0===e.transactionType?"".concat(ce," ").concat(oe):"".concat(ce," ").concat(se)}function b(e){return!0===e.transactionType?"".concat(le," ").concat(me):"".concat(le," ").concat(ue)}function f(e){return!0===e.transactionType?"+":"-"}function j(e){var a=e.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/,"$3.$2.$1");return a.slice(0,6)+a.slice(-2)}return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("ul",{className:ee,children:l?(0,g.jsx)("li",{className:ae,children:(0,g.jsx)(he.a,{height:"80",width:"80"})}):x.map((function(e){var a;return(0,g.jsx)("li",{className:ne,children:(0,g.jsxs)("ul",{className:te,children:[(0,g.jsxs)("li",{className:h(e),children:[(0,g.jsx)("span",{className:re,children:"Date"}),(0,g.jsx)("span",{className:le,children:j(e)})]}),(0,g.jsxs)("li",{className:h(e),children:[(0,g.jsx)("span",{className:re,children:"Type"}),(0,g.jsx)("span",{className:le,children:f(e)})]}),(0,g.jsxs)("li",{className:"".concat(h(e)," ").concat(ie),children:[(0,g.jsx)("span",{className:re,children:"Category"}),(0,g.jsx)("span",{className:"".concat(le," ").concat(de),children:null!==(a=e.category)&&void 0!==a&&a.name?e.category.name:"Income"})]}),(0,g.jsxs)("li",{className:h(e),children:[(0,g.jsx)("span",{className:re,children:"Comment"}),(0,g.jsx)("span",{className:le,children:(0,g.jsx)(be.default,{text:e.comment||"",length:16,onClick:function(){fe.Notify.info(e.comment)}})})]}),(0,g.jsxs)("li",{className:h(e),children:[(0,g.jsx)("span",{className:re,children:"Sum"}),(0,g.jsx)("span",{className:b(e),children:(Math.round(100*e.amount)/100).toFixed(2)})]}),(0,g.jsxs)("li",{className:h(e),children:[(0,g.jsx)("span",{className:re,children:"Balance"}),(0,g.jsx)("span",{className:le,children:(Math.round(100*e.remainingBalance)/100).toFixed(2)})]}),(0,g.jsxs)("li",{className:"".concat(h(e)),children:[(0,g.jsx)("span",{className:re,children:"Delete"}),(0,g.jsx)("button",{className:_e,onClick:function(){return function(e){fe.Confirm.show("Confirm deletion","Do you want to delete this transaction?","Yes","No",(function(){s(S.ZP.deleteTransaction(e._id))}),(function(){}),{cancelButtonBackground:"#ff6596",okButtonBackground:"#24cca7",titleColor:"#24cca7"})}(e)},children:(0,g.jsx)(je.ZkW,{size:25,fill:"rgb(110, 120, 232)"})})]})]})},e._id)}))})})},Ne={container:"HomeTab_container__zaA2p",homeTabWrapper:"HomeTab_homeTabWrapper__-pyAd",table:"HomeTab_table__SKmrr",loadingWrapper:"HomeTab_loadingWrapper__mxbrd",loader:"HomeTab_loader__LxTqn",tableContent:"HomeTab_tableContent__D67I-",tableHeader:"HomeTab_tableHeader__2BX84",deleteRow:"HomeTab_deleteRow__BGu1L",deleteButton:"HomeTab_deleteButton__bw6MQ",deleteSVG:"HomeTab_deleteSVG__3h5D1",tableRow:"HomeTab_tableRow__aFiXH",tableRowItem:"HomeTab_tableRowItem__FJBi2",textAllignLeft:"HomeTab_textAllignLeft__mxeL-",typePosition:"HomeTab_typePosition__9eUvc",tableTitle:"HomeTab_tableTitle__oAUaW",date:"HomeTab_date__vWfeL",type:"HomeTab_type__ZhpEw",category:"HomeTab_category__UCjzD",comment:"HomeTab_comment__9q1i1",sum:"HomeTab_sum__12jlL",balance:"HomeTab_balance__-L1qs",sumColorIncome:"HomeTab_sumColorIncome__Jv4ZF",sumColorExpense:"HomeTab_sumColorExpense__TgxQ8",buttonShowDelete:"HomeTab_buttonShowDelete__JjDEl",buttonShowDeleteYellow:"HomeTab_buttonShowDeleteYellow__W4pSO"},ge=n(8079),Te=n(3853),ve=n(828),ye=function(e){var a=e.currentPage,n=e.setCurrentPage,o=e.fetching,s=e.setFetching,l=(0,r.useState)(!1),i=(0,t.Z)(l,2),d=i[0],m=i[1],u=(0,c.I0)(),_=(0,r.useRef)(),x=(0,c.v9)(Y),h=(0,c.v9)(q),b=(0,c.v9)(O);function f(){return f=(0,z.Z)(X().mark((function e(a,t){var c,o;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(h>b.length)){e.next=9;break}return e.next=3,xe.tu.get("transactions?page=".concat(a,"&limit=20"));case 3:return c=e.sent,o=c.data,e.next=7,t(S.ZP.updateTransactionsNew(o));case 7:n((function(e){return e+1})),s(!1);case 9:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}(0,r.useEffect)((function(){o&&function(e,a){f.apply(this,arguments)}(a,u)}),[o]);var j=(0,c.v9)(O);(0,r.useEffect)((function(){j.length<20&&u(S.ZP.updateTransactions())}),[]);var p=function(e){return e?(0,U.Z)(e).sort((function(e,a){return Number(a.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/,"$1$2$3"))-Number(e.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/,"$1$2$3"))})):[]}((0,c.v9)(O));function N(e){return!0===e.transactionType?"".concat(Ne.tableRowItem," ").concat(Ne.sum," ").concat(Ne.sumColorIncome):"".concat(Ne.tableRowItem," ").concat(Ne.sum," ").concat(Ne.sumColorExpense)}function T(e){return!0===e.transactionType?"+":"-"}function v(e){var a=e.date.replace(/^(\d+)-(\d+)-(\d+)\D.+$/,"$3.$2.$1");return a.slice(0,6)+a.slice(-2)}return(0,g.jsx)(g.Fragment,{children:x?(0,g.jsxs)("div",{className:Ne.loadingWrapper,children:[(0,g.jsx)("table",{className:Ne.table,children:(0,g.jsx)("thead",{className:Ne.tableHeaderTh,children:(0,g.jsxs)("tr",{className:Ne.tableHeader,children:[(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.date),children:"Date"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.type),children:"Type"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.category),children:"Category"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.comment),children:"Comment"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.sum),children:"Sum"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.balance),children:"Balance"})]})})}),(0,g.jsx)("div",{className:Ne.loader,children:(0,g.jsx)(he.a,{height:"80",width:"80"})})]}):(0,g.jsxs)("div",{className:Ne.homeTabWrapper,children:[(0,g.jsx)("button",{className:d?"".concat(Ne.buttonShowDeleteYellow," ").concat(Ne.buttonShowDelete):Ne.buttonShowDelete,onClick:function(){m((function(e){return!e}))},children:d?(0,g.jsx)(ve.sQZ,{color:"#ff6596",size:14}):(0,g.jsx)(Te.IYd,{size:18})}),(0,g.jsxs)("table",{className:Ne.table,children:[(0,g.jsx)("thead",{className:Ne.tableHeaderTh,children:(0,g.jsxs)("tr",{className:Ne.tableHeader,children:[(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.date),children:"Date"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.type),children:"Type"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.category),children:"Category"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.comment),children:"Comment"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.sum),children:"Sum"}),(0,g.jsx)("th",{className:"".concat(Ne.tableTitle," ").concat(Ne.balance),children:"Balance"})]})}),(0,g.jsx)("tbody",{className:Ne.tableContent,onScroll:function(e){e.target.scrollHeight-(e.target.scrollTop+_.current.clientHeight)<100&&s(!0)},ref:_,children:p.map((function(e){var a;return(0,g.jsxs)("tr",{className:Ne.tableRow,children:[d?(0,g.jsx)("td",{className:Ne.deleteRow,children:(0,g.jsx)("button",{className:Ne.deleteButton,onClick:function(){return function(e){u(S.ZP.deleteTransaction(e._id))}(e)},children:(0,g.jsx)("svg",{className:Ne.deleteSVG,children:(0,g.jsx)("use",{href:"".concat(ge.Z,"#icon-delete")})})})}):"",(0,g.jsx)("td",{className:"".concat(Ne.tableRowItem," ").concat(Ne.date," ").concat(Ne.textAllignLeft),children:v(e)}),(0,g.jsx)("td",{className:"".concat(Ne.tableRowItem," ").concat(Ne.type," ").concat(Ne.textAllignLeft," ").concat(Ne.typePosition),children:T(e)}),(0,g.jsx)("td",{className:"".concat(Ne.tableRowItem," ").concat(Ne.category," ").concat(Ne.textAllignLeft),children:null!==(a=e.category)&&void 0!==a&&a.name?e.category.name:"Income"}),(0,g.jsx)("td",{className:"".concat(Ne.tableRowItem," ").concat(Ne.comment," ").concat(Ne.textAllignLeft),children:(0,g.jsx)(be.default,{text:e.comment||"",length:16,onClick:function(){fe.Notify.info(e.comment)}})}),(0,g.jsx)("td",{className:N(e),children:(Math.round(100*e.amount)/100).toFixed(2)}),(0,g.jsx)("td",{className:"".concat(Ne.tableRowItem," ").concat(Ne.balance),children:(Math.round(100*e.remainingBalance)/100).toFixed(2)})]},e._id)}))})]})]})})},Fe="Navigation_nav__MsE7Z",Ce="Navigation_nav__link__-JGkw",Me="Navigation_icon__wrapper__jVWmj",we="Navigation_text__c-eXu",Ie="Navigation_active__link__2UbeK",He="Navigation_svg__llWmC",ke="Navigation_fonts__ymyaU",Be="Navigation_fonts1__ZqNNn",Ae="Navigation_fonts2__ToobO",Ze="Navigation_fonts3__O8kei",Se=n(1087),De=function(e){return e.isActive?Ie:Ce},Pe=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(s.Z,{queries:{small:"(max-width:767px)",medium:"(min-width:768px)"},children:function(e){return(0,g.jsxs)(r.Fragment,{children:[e.small&&(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("nav",{className:Fe,children:[(0,g.jsx)(Se.OL,{to:"/",className:De,children:(0,g.jsx)("div",{className:Me,children:(0,g.jsx)("svg",{className:He,children:(0,g.jsx)("use",{href:"".concat(ge.Z,"#icon-home")})})})}),(0,g.jsx)(Se.OL,{to:"/statistic",className:De,children:(0,g.jsx)("div",{className:Me,children:(0,g.jsx)("svg",{className:He,children:(0,g.jsx)("use",{href:"".concat(ge.Z,"#icon-statistics")})})})}),(0,g.jsx)(Se.OL,{to:"/currency",className:De,children:(0,g.jsx)("div",{className:Me,children:(0,g.jsx)("svg",{className:He,children:(0,g.jsx)("use",{href:"".concat(ge.Z,"#icon-currency")})})})})]})}),e.medium&&(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("nav",{className:Fe,children:[(0,g.jsxs)(Se.OL,{to:"/",className:De,children:[(0,g.jsx)("div",{className:Me,children:(0,g.jsx)("svg",{className:He,children:(0,g.jsx)("use",{href:"".concat(ge.Z,"#icon-home")})})}),(0,g.jsx)("p",{className:we,children:"Home"})]}),(0,g.jsxs)(Se.OL,{to:"/statistic",className:De,children:[(0,g.jsx)("div",{className:Me,children:(0,g.jsx)("svg",{className:He,children:(0,g.jsx)("use",{href:"".concat(ge.Z,"#icon-statistics")})})}),(0,g.jsx)("p",{className:we,children:"Statistics"})]}),(0,g.jsxs)("div",{className:ke,children:[(0,g.jsx)("p",{className:Be,children:"."}),(0,g.jsx)("p",{className:Ae,children:"."}),(0,g.jsx)("p",{className:Ze,children:"."})]})]})})]})}})})},Le="HomePage_pageWrapper__TWxsU",Ee="HomePage_financeWrapper__Kq-cV",Re="HomePage_financeWrapper__dashboard__DBCvi",$e="HomePage_financeWrapper__nav__hq2P+",We=function(){var e=(0,r.useState)(2),a=(0,t.Z)(e,2),n=a[0],i=a[1],d=(0,r.useState)(!1),m=(0,t.Z)(d,2),u=m[0],_=m[1],x=(0,o.TH)(),h="/statistic"===x.pathname,b="/currency"===x.pathname,f=(0,c.v9)(l.M.showModalAddTransaction);return(0,g.jsxs)("div",{className:Le,children:[(0,g.jsx)(s.Z,{queries:{small:"(max-width: 767px)",medium:"(min-width: 768px) and (max-width: 1279px)",large:"(min-width: 1280px)"},children:function(e){return(0,g.jsxs)(g.Fragment,{children:[e.small&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Pe,{}),(0,g.jsxs)("div",{className:Re,children:[!h&&!b&&(0,g.jsx)(K,{}),!h&&!b&&(0,g.jsx)(pe,{currentPage:n,setCurrentPage:i,fetching:u,setFetching:_})]}),b&&(0,g.jsx)(G.Z,{}),h&&(0,g.jsx)($.Z,{})]}),e.medium&&(0,g.jsxs)(g.Fragment,{children:[b&&(0,g.jsx)(o.Fg,{to:"/"}),(0,g.jsxs)("div",{className:Ee,children:[(0,g.jsxs)("div",{className:Re,children:[(0,g.jsxs)("div",{className:$e,children:[(0,g.jsx)(Pe,{}),(0,g.jsx)(K,{})]}),(0,g.jsx)(G.Z,{})]}),h&&(0,g.jsx)($.Z,{}),!h&&(0,g.jsx)(ye,{currentPage:n,setCurrentPage:i,fetching:u,setFetching:_})]})]}),e.large&&(0,g.jsxs)(g.Fragment,{children:[b&&(0,g.jsx)(o.Fg,{to:"/"}),(0,g.jsxs)("div",{className:Ee,children:[(0,g.jsxs)("div",{className:Re,children:[(0,g.jsx)(Pe,{}),(0,g.jsx)(K,{}),(0,g.jsx)(G.Z,{})]}),h&&(0,g.jsx)($.Z,{}),!h&&(0,g.jsx)(ye,{currentPage:n,setCurrentPage:i,fetching:u,setFetching:_})]})]})]})}}),f&&(0,g.jsx)(R,{})]})}}}]);
//# sourceMappingURL=983.9a248942.chunk.js.map