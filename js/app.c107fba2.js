webpackJsonp([1],{0:function(e,t,a){e.exports=a("NHnr")},G3BA:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("/5sW"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),a("router-view")],1)},i=[],o=a("XyMi");function r(e){a("G3BA")}var l=null,u=!1,c=r,m=null,v=null,d=Object(o["a"])(l,s,i,u,c,m,v),h=d.exports,p=a("/ocq"),f=a("mtWM"),b=a.n(f),_={name:"SlackInvite",data:function(){return{email:"",message:"",status:"",hasResponse:""}},methods:{handleInvite:function(){var e=this;b.a.post("https://8jecx91igd.execute-api.us-east-1.amazonaws.com/dev/invite",{email:this.email}).then(function(t){switch(e.hasResponse=t.data,e.status=t.data.ok,t.data.error){case"already_invited":e.message="This email has already been invited! Please check your inbox for the invitation - if you can't find it reach out to help@denverdevs.org.";break;case"user_disabled":e.message="The account associated with this email has been disabled. Please reach out to help@denverdevs.org.";break;case"invalid_email":e.message="That email is invalid. Please check it and try again.";break;case"bad_invite_domain":e.message="That invite domain doesn't look right";break;default:e.message="Success!";break}}).catch(function(t){console.error(t),e.message="Uh oh, somethings wrong here (and it's on us) - reach out to help@denverdevs.org."})}}},g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"slack-invite"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.handleInvite(t)}}},[a("label",[e._v("\n      Email:\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("button",{attrs:{type:"submit"}},[e._v("Submit")]),e.hasResponse?a("div",{staticClass:"message",class:[e.status?"invite-success":""]},[e._v("\n      "+e._s(e.message)+"\n    ")]):e._e()])])},k=[];function x(e){a("xejZ")}var w=!1,y=x,j="data-v-8d16e23e",E=null,T=Object(o["a"])(_,g,k,w,y,j,E),$=T.exports,I={name:"home",components:{SlackInvite:$}},O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("SlackInvite")],1)},P=[],S=!1,C=null,A=null,H=null,M=Object(o["a"])(I,O,P,S,C,A,H),N=M.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],G=null,W=!1,Z=null,q=null,z=null,D=Object(o["a"])(G,R,B,W,Z,q,z),J=D.exports;n["a"].use(p["a"]);var U=new p["a"]({routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:J}]});n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(e){return e(h)}}).$mount("#app")},xejZ:function(e,t){}},[0]);
//# sourceMappingURL=app.c107fba2.js.map