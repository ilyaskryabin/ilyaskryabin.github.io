(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(41)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),i=n(17),l=n(6),s=n(19),m=n(7),u=[{name:"Mobileapp",path:"mobileapp",miniImg:"https://media.discordapp.net/attachments/592272227353886741/592272296475885599/mobileapp.jpg",img:"https://media.discordapp.net/attachments/592272227353886741/593366300802154498/mobileapp.jpg",technology:["Gulp","Pug","SCSS","BEM","FlexBox","SmartGrid","jQuery","Sprite SVG"],bgColor:["#17d1ac","#727272"],colorText:["white","white"]},{name:"Onetown",path:"onetown",miniImg:"https://media.discordapp.net/attachments/592272227353886741/592272304055255040/onetown.jpg",img:"https://media.discordapp.net/attachments/592272227353886741/593379245061832726/respy-web-template.jpg",technology:["Gulp","Pug","SCSS","BEM","FlexBox","jQuery","Slick","Sprite PNG"],bgColor:["#2a63c1","#373c44"],colorText:["white","white"]},{name:"Respect",path:"respect",miniImg:"https://media.discordapp.net/attachments/592272227353886741/592272307905495047/respect.jpg",img:"https://media.discordapp.net/attachments/592272227353886741/594107563599986710/respect.jpg",technology:["Gulp","Pug","SCSS","BEM","FlexBox","SmartGrid","jQuery","Slick","Sprite PNG","Sprite SVG"],bgColor:["#1f2025","#e5e4e2"],colorText:["white","black"]},{name:"Spirit8",path:"spirit8",miniImg:"https://media.discordapp.net/attachments/592272227353886741/592272308677115916/spirit8.jpg",img:"https://media.discordapp.net/attachments/592272227353886741/593362045869752330/spirit8.jpg",technology:["Gulp","Pug","SCSS","BEM","FlexBox","SmartGrid","jQuery","Slick","Sprite PNG","Sprite SVG"],bgColor:["#292929","#fcac45"],colorText:["white","black"]},{name:"Fit App",path:"fitapp",miniImg:"https://media.discordapp.net/attachments/592272227353886741/592272292604805120/fitapp.jpg",img:"https://media.discordapp.net/attachments/592272227353886741/593388868724719626/FitApp.jpg",technology:["Webpack","Pug","SCSS","Bootstrap","jQuery","Rellax","Font Icon"],bgColor:["#2ecc71","#5a5a5a"],colorText:["white","white"]},{name:"Big Shop",path:"big-shop",miniImg:"https://media.discordapp.net/attachments/592272227353886741/594107971642982410/Big-shop-mini.jpg",img:"https://media.discordapp.net/attachments/592272227353886741/594107560047411200/Big-shop.jpg",technology:["React","JSX","SCSS","BEM","Bootstrap","JS"],bgColor:["#9f8dfd","#5a5a5a"],colorText:["white","white"]}];var d="SHOW_MODAL",p="SHOW_MODAL_CONTENT",h="CLOSE_MODAL",b="CLOSE_MODAL_CONTENT",f="OPEN_ACCORDION",g="CLOSE_ACCORDION",v="CHANGE_ACCORDION_CONTENT",E="GET_CHILDREN_BTN_MENU",_=!1;var C=[{id:1,name:"Mobileapp",path:"mobileapp",img:"https://media.discordapp.net/attachments/592272227353886741/592272296475885599/mobileapp.jpg",technology:["gulp","pug","scss","\u0411\u042d\u041c-class","flexbox","smartgrid","jquery","SVG-sprite"]}];var j=!1;var O="";var N=[];var y=Object(l.combineReducers)({reducerDB:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:u},reducerModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case d:case h:return a;default:return e}},reducerModalContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case p:case b:return a;default:return e}},reducerAccordion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:case g:return a;default:return e}},reducerAccordionContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v:return a;default:return e}},reducerChildrenBtnMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case E:return a;default:return e}}}),S=n(1),k=n(2),A=n(4),M=n(3),w=n(5),x=(n(29),n(30),n(31),function(){return{type:d,payload:!0}}),B=function(){return{type:h,payload:!1}},T=function(e){return{type:b,payload:e}},G=function(){return{type:b,payload:[]}},I=function(){return{type:f,payload:!0}},D=function(){return{type:g,payload:!1}},R=function(e){return{type:v,payload:e}},L=function(e){return{type:E,payload:e}},P=function(e){for(var t=e,n=0;n<t.length;n++){var a=t[n].className.split(" "),c=a.findIndex(function(e){return"active"===e});if(-1!==c){a.splice(c,1),t[n].className=a.join(" ");break}}},F=function(e){var t=e.className.split(" ");t.push("active"),e.className=t.join(" ")},H=function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(A.a)(this,Object(M.a)(t).call(this,e))).openAccordion=function(e){var t=e.target.dataset.menu,a=e.target,c=n.props,o=c.reducerAccordionContent,r=c.reducerChildrenBtnMenu;o!==t&&(n.props.closeAccordion(),P(r),F(a),setTimeout(function(){n.props.changeAccordionContent(t),n.props.openAccordion()},800))},n.parentButtons=c.a.createRef(),n}return Object(w.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.getChildrenBtnMenu(this.parentButtons.current.children)}},{key:"render",value:function(){return c.a.createElement("div",{className:"menu",ref:this.parentButtons},c.a.createElement("button",{onClick:this.openAccordion,"data-menu":"skills",className:"menu__btn"},"\u041d\u0430\u0432\u044b\u043a\u0438"),c.a.createElement("button",{onClick:this.openAccordion,"data-menu":"contacts",className:"menu__btn"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))}}]),t}(a.Component),J=Object(m.b)(function(e){return{reducerAccordionContent:e.reducerAccordionContent,reducerChildrenBtnMenu:e.reducerChildrenBtnMenu}},function(e){return Object(l.bindActionCreators)({openAccordion:I,closeAccordion:D,changeAccordionContent:R,getChildrenBtnMenu:L},e)})(H),Q=(n(32),n(33),["HTML","CSS","JS","Bootstrap","BEM","SCSS/SASS","LESS","Stylus","React","Redux","Pug","JQuery"]),V=function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=Q.map(function(e,t){return c.a.createElement("li",{key:t},e)});return c.a.createElement("section",{className:"skills"},c.a.createElement("ul",{className:"skills__list"},e))}}]),t}(a.Component),W=n(14),q=(n(34),function(e){function t(e){var n;return Object(S.a)(this,t),(n=Object(A.a)(this,Object(M.a)(t).call(this,e))).btnEvent=function(e){clearTimeout(n.timerId),n.setState({text:e.target.dataset.value,classActive:!0}),n.timerId=setTimeout(function(){n.setState({text:"",classActive:!1})},3e3)},n.state={phone:"+7(977)852-07-91",email:"isconst808@gmail.com",text:"",classActive:!1},n.timerId=0,n}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.state,t=e.phone,n=e.email,a=e.text,o=e.classActive;return c.a.createElement("section",{className:"contacts"},c.a.createElement("div",{className:"contacts__btn-block"},c.a.createElement(W.a,{className:"contacts__btn",text:"+79778520791"},c.a.createElement("a",{href:"tel:+79778520791",onClick:this.btnEvent,className:"contacts__btn-inner","data-value":t},c.a.createElement("i",{className:"fas fa-phone-alt contacts__btn-icon","data-value":t}))),c.a.createElement(W.a,{className:"contacts__btn",text:"isconst808@gmail.com"},c.a.createElement("div",{onClick:this.btnEvent,className:"contacts__btn-inner","data-value":n},c.a.createElement("i",{className:"fas fa-envelope contacts__btn-icon","data-value":n}))),c.a.createElement("a",{href:"https://t.me/isconst808",target:"_blank",rel:"noreferrer noopener",className:"contacts__btn"},c.a.createElement("div",{className:"contacts__btn-inner"},c.a.createElement("i",{className:"fab fa-telegram-plane contacts__btn-icon"}))),c.a.createElement("p",{className:"contacts__msg ".concat(o?"active":"")},a,c.a.createElement("span",null,"\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"))))}}]),t}(a.Component)),U=function(e){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(A.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(o)))).renderAccordionContent=function(){switch(n.props.reducerAccordionContent){case"skills":return c.a.createElement(V,null);case"contacts":return c.a.createElement(q,null);default:return null}},n.onCloseAccordion=function(){P(n.props.reducerChildrenBtnMenu),n.props.closeAccordion(),setTimeout(function(){n.props.changeAccordionContent("")},700)},n}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.reducerAccordion?"active":"";return c.a.createElement("div",{className:"accordion"},c.a.createElement("div",{className:"container accordion__container"},c.a.createElement("div",{className:"accordion__content ".concat(e)},this.renderAccordionContent()),c.a.createElement("button",{className:"close-btn accordion__btn-close",onClick:this.onCloseAccordion},c.a.createElement("span",{className:"close-btn__inner"}))))}}]),t}(a.Component),X=Object(m.b)(function(e){return{reducerAccordion:e.reducerAccordion,reducerAccordionContent:e.reducerAccordionContent,reducerChildrenBtnMenu:e.reducerChildrenBtnMenu}},function(e){return Object(l.bindActionCreators)({closeAccordion:D,changeAccordionContent:R},e)})(U),z=function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header__inner"},c.a.createElement("img",{src:"https://media.discordapp.net/attachments/597732979275595802/597733008048390145/islogo.png",alt:"islogo",className:"logo"}),c.a.createElement(J,null))),c.a.createElement(X,null))}}]),t}(a.Component),K=(n(35),n(36),n(37),function(e){var t=e.data,n=t.technology,a=t.bgColor,o=t.colorText;return c.a.createElement("ul",{className:"is-modal-content__list"},function(e){var t=0,n="",r="";return e.map(function(e,i){return void 0!==a&&(t<a.length?(r=o[t],n=a[t],t++):(r=o[t=0],n=a[t],t++)),c.a.createElement("li",{key:i,style:{backgroundColor:n,color:r}},e)})}(n))}),Y=function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.modalContent.map(function(e,t){var n=e.name,o=e.img,r=e.technology,i=e.path,l={technology:r,bgColor:e.bgColor,colorText:e.colorText};return c.a.createElement(a.Fragment,{key:t},c.a.createElement("div",{className:"is-modal-content__info"},c.a.createElement("h2",{className:"is-modal-content__title"},n),c.a.createElement("section",{className:"is-modal-content__info-box"},c.a.createElement("div",{className:"is-modal-content__info-block is-modal-content__list"},c.a.createElement("h5",null,"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"),c.a.createElement(K,{data:l})),c.a.createElement("div",{className:"is-modal-content__info-block is-modal-content__links"},c.a.createElement("h5",null,"\u0421\u0441\u044b\u043b\u043a\u0438"),c.a.createElement("div",{className:"is-modal-content__link-block"},c.a.createElement("a",{className:"is-modal-content__link",href:"https://isconst808.github.io/".concat(i,"/index.html"),target:"_blank",rel:"noreferrer noopener"},c.a.createElement("i",{className:"fas fa-external-link-alt"}),c.a.createElement("p",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044c ",c.a.createElement("span",null,n))),c.a.createElement("a",{href:"https://github.com/isconst808/".concat(i),className:"is-modal-content__link",target:"_blank",rel:"noreferrer noopener"},c.a.createElement("i",{className:"fab fa-github"}),c.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 ",c.a.createElement("span",null,"GitHub"))))))),c.a.createElement("div",{className:"is-modal-content__img-temp"},c.a.createElement("img",{src:o,alt:n})))});return c.a.createElement("div",{className:"is-modal-content"},e)}}]),t}(a.Component),Z=Object(m.b)(function(e){return{modalContent:e.reducerModalContent}})(Y),$=function(e){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(A.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(c)))).onCloseModel=function(e){"modal"===e.target.dataset.name&&(n.props.closeModal(),n.props.closeModalContent())},n}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props.modalActive?"active":"";return c.a.createElement("div",{className:"is-modal ".concat(e),onClick:this.onCloseModel,"data-name":"modal"},c.a.createElement("div",{className:"is-modal__block container",onClick:this.onCloseModel,"data-name":"modal"},c.a.createElement("div",{className:"is-modal__inner","data-name":"modal"},c.a.createElement("button",{className:"close-btn is-modal__btn-close","data-name":"modal"},c.a.createElement("span",{className:"close-btn__inner"})),c.a.createElement(Z,null))))}}]),t}(a.Component),ee=Object(m.b)(function(e){return{modalActive:e.reducerModal,modalContent:e.reducerModalContent}},function(e){return Object(l.bindActionCreators)({closeModal:B,closeModalContent:G},e)})($),te=(n(38),n(39),function(){return c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"https://codepen.io/isconst808/",target:"_blank",rel:"noopener noreferrer",className:"links__btn"},c.a.createElement("i",{className:"fab fa-codepen"})),c.a.createElement("a",{href:"https://github.com/isconst808",target:"_blank",rel:"noopener noreferrer",className:"links__btn"},c.a.createElement("i",{className:"fab fa-github"})))}),ne=function(e){function t(){var e,n;Object(S.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(A.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(o)))).showModal=function(e){var t=n.props.db.filter(function(t){return t.name===e.target.alt});n.props.showModal(),n.props.showModelContent(t)},n.void=function(){for(var e=[],t=3-n.props.db.length%3,a=0;a<t;a++)e.push(Math.ceil(1e4*Math.random()));return e.map(function(e){return c.a.createElement("div",{className:"col-md-4 void__block",key:e},c.a.createElement("div",{className:"void__inner"},c.a.createElement("span",null,"\u0414\u043b\u044f \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0440\u0430\u0431\u043e\u0442")))})},n}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=this.props.db.map(function(t,n){var a=t.miniImg,o=t.name;return c.a.createElement("div",{className:"col-md-4 img-block",key:n},c.a.createElement("img",{src:a,alt:o,onClick:e.showModal}))});return c.a.createElement("section",{className:"content"},c.a.createElement("div",{className:"container content__container"},c.a.createElement(te,null),c.a.createElement("div",{className:"row"},t,this.void())))}}]),t}(a.Component),ae=Object(m.b)(function(e){return{db:e.reducerDB,modal:e.reducerModal}},function(e){return Object(l.bindActionCreators)({showModal:x,showModelContent:T},e)})(ne),ce=function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(ee,null),c.a.createElement(z,null),c.a.createElement(ae,null))}}]),t}(a.Component),oe=(n(40),Object(l.createStore)(y,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(s.a))));r.a.render(c.a.createElement(m.a,{store:oe},c.a.createElement(ce,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6526b8e3.chunk.js.map