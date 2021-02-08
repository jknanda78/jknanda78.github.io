(this["webpackJsonpidentity-app"]=this["webpackJsonpidentity-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"Type",(function(){return te})),a.d(n,"setGlobalNotification",(function(){return ae})),a.d(n,"unsetGlobalNotification",(function(){return ne}));var r={};a.r(r),a.d(r,"Type",(function(){return re})),a.d(r,"addNewInput",(function(){return ie})),a.d(r,"createNewForm",(function(){return oe})),a.d(r,"onBlurInput",(function(){return ce})),a.d(r,"onChangeInput",(function(){return le})),a.d(r,"onFormSubmit",(function(){return ue})),a.d(r,"clearForm",(function(){return se})),a.d(r,"formSubmission",(function(){return de}));var i={};a.r(i),a.d(i,"Type",(function(){return Ue})),a.d(i,"httpRequest",(function(){return Me}));var o=a(0),c=a.n(o),l=a(9),u=a.n(l),s=a(15),d=a(33),m=a(54);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f,E,b,p,v,O,_=a(11),y=a(72),h=a(8),N=a(160),I="@@observable/HTTP_REQUEST",g=Object(N.a)(Object(h.a)({},"@@post/SET_USER_PROFILE",(function(e,t){return t.payload?Object.assign({},e,t.payload):e})),{firstName:"",lastName:"",email:"",phoneNumber:""}),T=Object(N.a)((f={},Object(h.a)(f,"@@notify/SET_GLOBAL_NOTIFICATION",(function(e,t){return t.payload?Object.assign({},e,t.payload,{notify:!0}):e})),Object(h.a)(f,"@@notify/UNSET_GLOBAL_NOTIFICATION",(function(e){return Object.assign({},e,{notify:!1,notifyType:"",notifyMessage:""})})),f),{notify:!1,notifyType:"info",notifyMessage:""}),j=Object(N.a)((E={},Object(h.a)(E,I,(function(e,t){return Object.assign({},e,{isSubmitting:!0})})),Object(h.a)(E,"@@observable/HTTP_REQUEST_FAILURE",(function(e){return Object.assign({},e,{isSubmitting:!1})})),Object(h.a)(E,"@@observable/HTTP_REQUEST_SUCCESS",(function(e){return Object.assign({},e,{isSubmitting:!1})})),E),{isSubmitting:!1}),S=a(22),A=(b={},Object(h.a)(b,"VALID_EMAIL_REGX",/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),Object(h.a)(b,"PASS_LENGTH_REGX",/^.{7,15}$/),Object(h.a)(b,"VALID_PASS_REGEX",/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).*$/),b),L=(p={},Object(h.a)(p,"ENTER_VALID_EMAIL","Please enter a valid email address."),Object(h.a)(p,"PASS_LENGTH_NOT_MET_ERR","Password must be 9 to 15 characters."),Object(h.a)(p,"VALID_PASS_ERR","Must have at least 1 number, 1 uppercase and 1 special character."),Object(h.a)(p,"EMPTY_FIELD_ERR","Please enter a valid "),p),R=(v={},Object(h.a)(v,"email",(function(e){if(!A.VALID_EMAIL_REGX.test(e))return L.ENTER_VALID_EMAIL})),Object(h.a)(v,"password",(function(e){return A.PASS_LENGTH_REGX.test(e)?A.VALID_PASS_REGEX.test(e)?void 0:L.VALID_PASS_ERR:L.PASS_LENGTH_NOT_MET_ERR})),Object(h.a)(v,"default",(function(e){if(0===e.length)return L.EMPTY_FIELD_ERR})),v),C=function(e){return function(t){return t[e]}},P=Object(N.a)((O={},Object(h.a)(O,"@@form-field/ADD_NEW_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r={error:"",fieldId:a.fieldId,hasError:!1,hasValue:!1,validator:a.validator,value:""},i=function(e,t,a){return e.forEach((function(e){e.formId===t&&(e.fields=[a].concat(Object(S.a)(e.fields)))})),e}(e.forms,n,r);return{forms:Object(S.a)(i)}})),Object(h.a)(O,"@@form/CREATE_NEW_FORM",(function(e,t){return{forms:[{fields:[],formId:t.payload.formId,isPristine:!0,isSubmitting:!1,isValid:!1}].concat(Object(S.a)(e.forms))}})),Object(h.a)(O,"@@form-field/ONBLUR_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r=a.fieldId,i=function(e,t,a){return e.forEach((function(e){if(e.formId===t){e.isPristine=!1;var n=e.fields,r=!0;n.forEach((function(e){if(e.fieldId===a){var t=e.value,n=e.validator,i=C(n)(R)(t);i?(e.error=i,e.hasError=!0,r=!1):(e.error="",e.hasError=!1)}})),e.isValid=r}})),e}(e.forms,n,r);return{forms:Object(S.a)(i)}})),Object(h.a)(O,"@@form-field/ONCHANGE_INPUT_FIELD",(function(e,t){var a=t.payload,n=a.formId,r=a.fieldId,i=a.value,o=function(e,t,a,n){return e.forEach((function(e){e.formId===t&&(e.isPristine=!1,e.fields.forEach((function(e){e.fieldId===a&&(n.length?(e.hasValue=!0,e.value=n):(e.hasValue=!1,e.value=""))})))})),e}(e.forms,n,r,i);return{forms:Object(S.a)(o)}})),Object(h.a)(O,"@@form/SUBMIT_FORM",(function(e,t){var a=t.payload.formId,n=function(e,t){return e.forEach((function(e){if(e.formId===t){e.isPristine=!1;var a=e.fields,n=!0;a.forEach((function(e){var t=e.value,a=e.validator,r=C(a)(R)(t);r?(e.error=r,e.hasError=!0,n=!1):(e.error="",e.hasError=!1)})),e.isValid=n}})),e}(e.forms,a);return{forms:Object(S.a)(n)}})),Object(h.a)(O,"@@form/CLEAR_FORM",(function(e){return Object.assign({},e,{})})),O),{forms:[]}),F=Object(_.c)({formManager:P,globalNotification:T,observable:j,router:d.c,userProfile:g}),w=a(71),U=a.n(w),M=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i,c=o.data,l=o.method,u=o.url,s=o.success;return r===I&&setTimeout((function(){U()({method:l,url:u,data:c}).then((function(t){e.dispatch({type:"@@observable/HTTP_REQUEST_SUCCESS",payload:t}),s&&e.dispatch({type:s,payload:{data:c,res:t}})})).catch((function(t){e.dispatch({type:"@@observable/HTTP_REQUEST_FAILURE",payload:t})}))}),2e3),t(a)}}},D=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i;if("@@observable/HTTP_REQUEST_FAILURE"===r){var c,l=(null===o||void 0===o||null===(c=o.response)||void 0===c?void 0:c.data)||{},u=l.message,s=l.alert;e.dispatch({type:"@@notify/SET_GLOBAL_NOTIFICATION",payload:{notifyType:s,notifyMessage:u}})}return t(a)}}},k=a(52),G=function(e){return function(t){return function(a){var n=a||{},r=n.type,i=n.payload,o=void 0===i?{}:i;if("@@navigate2/APP_ROUTE"===r&&o.challenge){var c=o.challenge;e.dispatch(H.push(c))}else if("@@observable/HTTP_REQUEST_SUCCESS"===r&&o.data){var l=(null===o||void 0===o?void 0:o.data)||{},u=l.challenge;Object(k.a)(l,["challenge"]);e.dispatch(H.push(u))}return t(a)}}},B=function(e){return function(e){return function(t){var a=t||{},n=a.type,r=a.payload,i=(void 0===r?{}:r).data;if("CREATE_PASSWORD_CREDENTIAL"===n&&window.PasswordCredential){var o=new window.PasswordCredential({id:i.email,name:i.email,password:i.password});navigator.credentials.store(o)}return e(t)}}},H=Object(y.a)(),V=Object(d.b)(H),q=a(13),x=a(30),W=a(31),Q=a(35),X=a(34),z=a(159),$=a(152),Z=a(163),J=Object($.a)((function(e){return Object(Z.a)({root:{display:"flex",justifyContent:"center",marginBottom:5}})})),Y=function(e){var t=e.blurHandler,a=e.changeHandler,n=Object(k.a)(e,["blurHandler","changeHandler"]),r=J();return c.a.createElement("div",{className:r.root},c.a.createElement(z.a,Object.assign({},n,{onBlur:t,onChange:a,variant:"outlined"})))},K=function(e){Object(Q.a)(a,e);var t=Object(X.a)(a);function a(e){var n;Object(x.a)(this,a),(n=t.call(this,e)).handleOnBlur=function(e){var t=n.props,a=t.actions,r=t.formId,i=t.id;a.onBlurInput({formId:r,fieldId:i})},n.handleOnChange=function(e){var t=n.props,a=t.actions,r=t.formId,i=t.id;a.onChangeInput({formId:r,fieldId:i,value:e.currentTarget.value})};var r=e.formId,i=e.id,o=e.validator;return e.actions.addNewInput({formId:r,fieldId:i,validator:o}),n}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props,t=e.formId,a=e.formManager,n=e.editable,r=void 0===n||n,i=e.id,o=e.label,l=e.placeholder,u=void 0===l?"":l,s=e.type,d=e.value,m=void 0===d?"":d,f=function(){var e="";return a.forms.forEach((function(a){a.formId===t&&a.fields.forEach((function(t){t.fieldId===i&&t.hasError&&(e=t.error)}))})),e}();return r?c.a.createElement(Y,Object.assign({},f?{error:!0}:{},{type:s,id:i,label:o,placeholder:u,blurHandler:this.handleOnBlur,changeHandler:this.handleOnChange})):c.a.createElement("div",null,c.a.createElement("label",{htmlFor:i},o),c.a.createElement("p",null,m))}}]),a}(c.a.Component),ee=a(162),te={UNSET_GLOBAL_NOTIFICATION:"@@notify/UNSET_GLOBAL_NOTIFICATION",SET_GLOBAL_NOTIFICATION:"@@notify/SET_GLOBAL_NOTIFICATION"},ae=Object(ee.a)(te.SET_GLOBAL_NOTIFICATION),ne=Object(ee.a)(te.UNSET_GLOBAL_NOTIFICATION),re={ADD_NEW_INPUT_FIELD:"@@form-field/ADD_NEW_INPUT_FIELD",CREATE_NEW_FORM:"@@form/CREATE_NEW_FORM",CLEAR_FORM:"@@form/CLEAR_FORM",ONBLUR_INPUT_FIELD:"@@form-field/ONBLUR_INPUT_FIELD",ONCHANGE_INPUT_FIELD:"@@form-field/ONCHANGE_INPUT_FIELD",SUBMIT_FORM:"@@form/SUBMIT_FORM"},ie=Object(ee.a)(re.ADD_NEW_INPUT_FIELD),oe=Object(ee.a)(re.CREATE_NEW_FORM),ce=Object(ee.a)(re.ONBLUR_INPUT_FIELD),le=Object(ee.a)(re.ONCHANGE_INPUT_FIELD),ue=Object(ee.a)(re.ONCHANGE_INPUT_FIELD),se=Object(ee.a)(re.CLEAR_FORM),de=Object(ee.a)(re.SUBMIT_FORM),me=Object.assign({},r,n),fe=Object(s.b)((function(e){return{formManager:e.formManager}}),(function(e){return{actions:Object(_.b)(me,e)}}))(K),Ee=a(161),be=(a(114),Object($.a)((function(e){return Object(Z.a)({root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}))),pe=function(e){var t=e.message,a=e.type;return c.a.createElement("div",{className:be().root},c.a.createElement(Ee.a,{severity:a},t))},ve=function(e){var t=e.children,a=e.notify,n=e.notifyMessage,r=e.notifyType,i=e.title;return c.a.createElement("div",{className:"standard"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("section",{className:"logo"},c.a.createElement("div",null,"jsfunfoo { }")),c.a.createElement("section",{className:"notify"},a?c.a.createElement(pe,{type:r,message:n}):null),c.a.createElement("main",null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,i)),c.a.createElement("section",{className:"content"},t)),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021"))))},Oe=a(164),_e=Object($.a)((function(e){return Object(Z.a)({root:{display:"flex",justifyContent:"center"}})})),ye=function(e){var t=e.actions,a=e.onClick,n=e.id,r=e.value,i=_e();return c.a.createElement("div",{className:i.root},c.a.createElement(Oe.a,{id:n,component:"button",variant:"body2",onClick:function(e){t.unsetGlobalNotification(),"function"===typeof a&&a(e)}},r))},he=Object.assign({},n),Ne=Object(s.b)((function(){return{}}),(function(e){return{actions:Object(_.b)(he,e)}}))(ye),Ie=a(157),ge=a(158),Te=Object($.a)((function(e){return Object(Z.a)({root:{display:"flex",alignItems:"center",marginBottom:10},wrapper:{margin:e.spacing(1),position:"relative",width:"100%"},button:{color:"#fff",backgroundColor:"#0065ff",width:"100%",padding:12,"&:hover":{backgroundColor:"#013f9e"}},buttonProgress:{color:"#3f51b5",position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),je=function(e){var t=e.actions,a=e.onClick,n=e.id,r=e.type,i=e.value,o=e.observable.isSubmitting,l=Te();return c.a.createElement("div",{className:l.root},c.a.createElement("div",{className:l.wrapper},c.a.createElement(Ie.a,{color:"primary",className:l.button,disabled:!!o||void 0,id:n,onClick:function(e){t.unsetGlobalNotification(),"function"===typeof a&&a(e)},type:r,value:i,variant:"contained"},i),o&&c.a.createElement(ge.a,{size:24,className:l.buttonProgress})))},Se=Object.assign({},n),Ae=Object(s.b)((function(e){return{observable:e.observable}}),(function(e){return{actions:Object(_.b)(Se,e)}}))(je),Le=Object($.a)((function(e){return Object(Z.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"95%"}}})})),Re=function(e){var t=e.children,a=e.id,n=e.submitHandler,r=Le();return c.a.createElement("form",{id:a,className:r.root,onSubmit:n,noValidate:!0},t)},Ce=function(e){Object(Q.a)(a,e);var t=Object(X.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).handleOnSubmit=function(e){var t=n.props,a=t.actions,r=t.formManager,i=t.id,o=t.onSubmit,c=[],l=!1;e.preventDefault(),a.formSubmission({formId:i}),r.forms.forEach((function(e){e.formId===i&&(l=e.isValid,c=e.fields)}));var u={};c.forEach((function(e){var t,a=e.fieldId,n=e.value;(t=a,function(e){return function(a){return e[t]=a}})(u)(n)})),"function"===typeof o&&o(e,u,l)},e.actions.createNewForm({formId:e.id}),n}return Object(W.a)(a,[{key:"render",value:function(){return c.a.createElement(Re,Object.assign({submitHandler:this.handleOnSubmit},this.props))}}]),a}(c.a.Component),Pe=Object.assign({},r,n),Fe=Object(s.b)((function(e){return{formManager:e.formManager}}),(function(e){return{actions:Object(_.b)(Pe,e)}}))(Ce),we=function(e){var t=e.actions,a=e.history,n=e.notification,r=n.notify,i=n.notifyMessage,o=n.notifyType,l=a.push;return c.a.createElement(ve,{notify:r,notifyMessage:i,notifyType:o,title:"Sign in to your account"},c.a.createElement("div",null,c.a.createElement(Fe,{id:"SIGN_IN",onSubmit:function(e,a,n){n&&t.httpRequest({data:{email:a.email_address,password:a.pwd},method:"post",url:"/account/login"})}},c.a.createElement(fe,{formId:"SIGN_IN",id:"email_address",label:"Email address (required)",type:"email",validator:"email"}),c.a.createElement(fe,{formId:"SIGN_IN",id:"pwd",label:"Password (required)",type:"password",validator:"default"}),c.a.createElement(Ae,{type:"submit",id:"sign_in",value:"Sign in"}),c.a.createElement(Ne,{id:"createAccountLink",value:"Create account",onClick:function(){return l("/createAccount")}}))))},Ue={HTTP_REQUEST:I},Me=Object(ee.a)(Ue.HTTP_REQUEST),De=Object.assign({},r,n,i),ke=Object(s.b)((function(e){return{notification:e.globalNotification}}),(function(e){return{actions:Object(_.b)(De,e)}}))(we),Ge=function(e){var t=e.history.push,a="CREATE_ACCOUNT",n=e.notification,r=n.notify,i=n.notifyMessage,o=n.notifyType;return c.a.createElement(ve,{notify:r,notifyMessage:i,notifyType:o,title:"Create account"},c.a.createElement("div",null,c.a.createElement(Fe,{id:a,onSubmit:function(t,a,n){n&&e.actions.httpRequest({data:{firstName:a.first_name,lastName:a.last_name,email:a.email_address,pwd:a.pwd},method:"post",url:"/account/createAccount",success:"CREATE_PASSWORD_CREDENTIAL"})}},c.a.createElement(fe,{formId:a,id:"first_name",label:"First name (required)",type:"text",validator:"default"}),c.a.createElement(fe,{formId:a,id:"last_name",label:"Last name (required)",type:"text",validator:"default"}),c.a.createElement(fe,{autocomplete:"username",formId:a,id:"email_address",label:"Email address (required)",type:"email",validator:"email"}),c.a.createElement(fe,{autocomplete:"new-password",formId:a,id:"pwd",label:"Password (required)",type:"password",validator:"password"}),c.a.createElement(Ae,{type:"submit",id:"create_account",value:"Create Account"}),c.a.createElement(Ne,{id:"signInLink",value:"Sign in",onClick:function(){return t("/login")}}))))},Be=Object.assign({},n,i),He=Object(s.b)((function(e){return{notification:e.globalNotification}}),(function(e){return{actions:Object(_.b)(Be,e)}}))(Ge),Ve=(a(115),function(e){var t=e.children,a=e.notifyMessage,n=e.notifyType,r=e.title;return c.a.createElement("div",{className:"profile"},c.a.createElement("header",null,c.a.createElement("h1",null,"{ .js }")),c.a.createElement("section",{className:"breadcrumbs"},c.a.createElement("h2",null,r)),a?c.a.createElement("section",{className:"notification"},c.a.createElement("div",{className:"message ".concat(n)},a)):null,c.a.createElement("section",{className:"main"},t),c.a.createElement("section",{className:"footer"},c.a.createElement("footer",null,"\xa9 copyright 2021")))}),qe=(a(116),function(e){Object(Q.a)(a,e);var t=Object(X.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nameEditable:!1,emailEditable:!1,phoneEditable:!1},e.toggleEditName=function(t,a){e.setState({nameEditable:a})},e.toggleEditEmail=function(t,a){e.setState({emailEditable:a})},e.toggleEditPhone=function(t,a){e.setState({phoneEditable:a})},e.handleOnLogout=function(){e.props.actions.httpRequest({data:{},method:"post",url:"/account/logout"})},e}return Object(W.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.userProfileState,n=t.notification,r=a.firstName,i=a.lastName,o=a.email,l=a.phoneNumber,u=n.notify,s=n.notifyMessage,d=n.notifyType;return c.a.createElement(Ve,{notify:u,notifyMessage:s,notifyType:d,title:"Update profile"},c.a.createElement("div",{className:"editProfile"},c.a.createElement("div",null,c.a.createElement(Ne,{id:"logoutLink",value:"Logout",onClick:this.handleOnLogout})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(fe,{editable:this.state.nameEditable,id:"first_name",label:"First name (required)",type:"text",value:r}),c.a.createElement(fe,{editable:this.state.nameEditable,id:"last_name",label:"Last name (required)",type:"text",value:i}),c.a.createElement("div",{className:"buttons"},this.state.nameEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditName",value:"Cancel",onClick:function(t){return e.toggleEditName(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updateName",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editName",value:"Edit",onClick:function(t){return e.toggleEditName(t,!0)}},"Edit"))))),c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(fe,{editable:this.state.emailEditable,id:"email_address",label:"Email address (required)",type:"email",value:o}),c.a.createElement("div",{className:"buttons"},this.state.emailEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditEmail",value:"Cancel",onClick:function(t){return e.toggleEditEmail(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updateEmail",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editEmail",value:"Edit",onClick:function(t){return e.toggleEditEmail(t,!0)}},"Edit"))))),c.a.createElement("li",null,c.a.createElement("form",null,c.a.createElement(fe,{editable:this.state.phoneEditable,id:"phone_number",label:"Phone number (required)",type:"email",value:l}),c.a.createElement("div",{className:"buttons"},this.state.phoneEditable?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"secondary"},c.a.createElement("button",{type:"button",id:"cancelEditPhone",value:"Cancel",onClick:function(t){return e.toggleEditPhone(t,!1)}},"Cancel")),c.a.createElement("div",{className:"primary"},c.a.createElement("button",{type:"submit",id:"updatePhone",value:"Submit"},"Submit"))):c.a.createElement("div",{className:"buttonAsLink"},c.a.createElement("button",{type:"button",id:"editPhoneNumber",value:"Edit",onClick:function(t){return e.toggleEditPhone(t,!0)}},"Edit"))))))))}}]),a}(c.a.Component)),xe=Object.assign({},n,i),We=Object(s.b)((function(e){return{notification:e.globalNotification,userProfileState:e.userProfile}}),(function(e){return{actions:Object(_.b)(xe,e)}}))(qe),Qe=function(e){var t=e.context,a=void 0===t?{}:t;return c.a.createElement(q.d,null,a.ssr?null:c.a.createElement(q.a,{exact:!0,from:"/",to:"/login"}),c.a.createElement(q.b,{exact:!0,path:"/login",component:ke,key:"acount-signin"}),c.a.createElement(q.b,{exact:!0,path:"/createAccount",component:He,key:"acount-create-account"}),c.a.createElement(q.b,{exact:!0,path:"/user/profile",component:We,key:"acount-user-profile"}))},Xe=(a(117),function(){var e=window.__REDUX_STATE__||{};window.__REDUX_STATE__&&delete window.__REDUX_STATE__;var t=[G,M,D,V,B],a=(0,_.d)(_.a.apply(void 0,t));return Object(_.e)(F,e,a)}());u.a.hydrate(c.a.createElement(s.a,{store:Xe},c.a.createElement(d.a,{history:H,store:Xe},c.a.createElement(m.a,null,c.a.createElement(Qe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(118)}},[[85,1,2]]]);
//# sourceMappingURL=main.afa913b9.chunk.js.map