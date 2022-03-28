(function(){"use strict";var e={978:function(e,t,s){var n=s(144),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"chat"}},[s("ul",{attrs:{id:"messages"}},e._l(e.messages,(function(t){return s("li",{key:t.id},[t.isBot?s("b",[e._v("Yoda :")]):s("b",[e._v("Me :")]),e._v(e._s(t.body)+" ")])})),0),s("ChatForm")],1)])},o=[],i=s(629),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.writing,expression:"writing"}]},[s("span",[e._v("YodaBot is writing...")])]),s("form",{attrs:{id:"messageForm",novalidate:"true"},on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[s("p",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",name:"message",id:"message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("input",{attrs:{type:"submit",value:"Send!"}})])])])},u=[],c=s(669),l=s.n(c),m={name:"ChatForm",data(){return{message:null,response:null,writing:!1}},methods:{sendMessage(){this.message&&(this.$store.dispatch("messageFromUser",this.message),this.$emit("message",this.message),this.writing=!0,l().post("http://localhost:81/test_technique_inbenta/backend/",{message:this.message},{withCredentials:!0}).then((e=>{this.response=e.data,this.$store.dispatch("responseFromBot",this.response)})).catch((e=>console.log(e))).finally((()=>this.writing=!1)),this.message="")}}},g=m,p=s(1),f=(0,p.Z)(g,a,u,!1,null,null,null),h=f.exports,d={name:"App",computed:{...(0,i.rn)(["messages"])},components:{ChatForm:h},created(){this.$store.dispatch("getConversation")}},v=d,b=(0,p.Z)(v,r,o,!1,null,null,null),w=b.exports;n.Z.use(i.ZP);var y=new i.ZP.Store({state:{messages:[]},actions:{getConversation({state:e}){var t=localStorage.getItem("conversation");t&&(e.messages=JSON.parse(t))},messageFromUser({state:e},t){var s={body:t,isBot:!1,id:e.messages.length};e.messages.push(s),localStorage.setItem("conversation",JSON.stringify(e.messages))},responseFromBot({state:e},t){var s={body:t,isBot:!0,id:e.messages.length};e.messages.push(s),localStorage.setItem("conversation",JSON.stringify(e.messages))}}});n.Z.config.productionTip=!1,new n.Z({store:y,render:e=>e(w)}).$mount("#app")}},t={};function s(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[u])}))?n.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(u)var l=u(s)}for(t&&t(n);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},n=self["webpackChunktest_technique_inbenta"]=self["webpackChunktest_technique_inbenta"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(978)}));n=s.O(n)})();
//# sourceMappingURL=app.ac2013ac.js.map