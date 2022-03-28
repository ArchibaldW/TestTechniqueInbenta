(function(){"use strict";var e={9978:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var s=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"chat"}},[n("ul",{attrs:{id:"messages"}},e._l(e.messages,(function(t){return n("li",{key:t.id},[t.isBot?n("b",[e._v("Yoda :")]):n("b",[e._v("Me :")]),e._v(e._s(t.body)+" ")])})),0),n("ChatForm")],1)])},o=[],i=n(3019),a=n(629),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{directives:[{name:"show",rawName:"v-show",value:e.writing,expression:"writing"}]},[n("span",[e._v("YodaBot is writing...")])]),n("form",{attrs:{id:"messageForm",novalidate:"true"},on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",name:"message",id:"message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Send!"}})])])])},c=[],l=(n(1539),n(9669)),f=n.n(l),m={name:"ChatForm",data:function(){return{message:null,response:null,writing:!1}},methods:{sendMessage:function(){var e=this;this.message&&(this.$store.dispatch("messageFromUser",this.message),this.$emit("message",this.message),this.writing=!0,f().post("http://localhost:81/test_technique_inbenta/backend/",{message:this.message},{withCredentials:!0}).then((function(t){e.response=t.data,e.$store.dispatch("responseFromBot",e.response)})).catch((function(e){return console.log(e)})).finally((function(){return e.writing=!1})),this.message="")}}},g=m,p=n(1001),d=(0,p.Z)(g,u,c,!1,null,null,null),v=d.exports,h={name:"App",computed:(0,i.Z)({},(0,a.rn)(["messages"])),components:{ChatForm:v},created:function(){this.$store.dispatch("getConversation")}},b=h,w=(0,p.Z)(b,r,o,!1,null,null,null),y=w.exports;n(8862);s.Z.use(a.ZP);var _=new a.ZP.Store({state:{messages:[]},actions:{getConversation:function(e){var t=e.state,n=localStorage.getItem("conversation");n&&(t.messages=JSON.parse(n))},messageFromUser:function(e,t){var n=e.state,s={body:t,isBot:!1,id:n.messages.length};n.messages.push(s),localStorage.setItem("conversation",JSON.stringify(n.messages))},responseFromBot:function(e,t){var n=e.state,s={body:t,isBot:!0,id:n.messages.length};n.messages.push(s),localStorage.setItem("conversation",JSON.stringify(n.messages))}}});s.Z.config.productionTip=!1,new s.Z({store:_,render:function(e){return e(y)}}).$mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,o){if(!s){var i=1/0;for(l=0;l<e.length;l++){s=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,u=0;u<s.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[u])}))?s.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,i=s[0],a=s[1],u=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(t&&t(s);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},s=self["webpackChunktest_technique_inbenta"]=self["webpackChunktest_technique_inbenta"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(9978)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.dec1a5fa.js.map