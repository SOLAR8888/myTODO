(this["webpackJsonpsolar-todo-client"]=this["webpackJsonpsolar-todo-client"]||[]).push([[0],{40:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),s=n.n(r),o=(n(40),n(21));function i(){}var u,l,b=Object(a.createContext)({token:null,userId:null,login:i,logout:i,isAuthenticated:!1}),j=Object(a.createContext)(),d=n(1),O=function(){var e=Object(a.useContext)(j),t=Object(a.useContext)(b);return Object(d.jsxs)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-dark",children:[Object(d.jsx)("div",{className:"navbar-brand",children:"TODOwe4ka"}),t.isAuthenticated&&Object(d.jsx)("button",{onClick:function(){t.logout(),e.hide()},type:"button",className:"btn btn-outline-light m-1",children:"\u0412\u044b\u0439\u0442\u0438"})]})},p=function(){var e=Object(a.useContext)(j),t=e.alert,n=e.hide;return t.visible?Object(d.jsxs)("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible"),children:[Object(d.jsx)("strong",{children:"success"===t.type?"\u0423\u0445 \u0442\u044b! ":"\u042d\u043c\u043c... "}),t.text,Object(d.jsx)("button",{onClick:n,type:"button",className:"btn-close","aria-label":"Close"})]}):null},h=n(6),f=n(7),x=n(2),m="SHOW_ALERT",v="HIDE_ALERT",g="SHOW_LOADER",y="ADD_NOTE",N="FETCH_NOTES",w="REMOVE_NOTE",k="UPDATE_NOTE",C=(u={DEFAULT:function(e){return e}},Object(f.a)(u,m,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},n),{},{visible:!0})})),Object(f.a)(u,v,(function(e){return Object(x.a)(Object(x.a)({},e),{},{visible:!1})})),u),E=function(e,t){return(C[t.type]||C.DEFAULT)(e,t)},S=function(e){var t=e.children,n=Object(a.useReducer)(E,{visible:!1}),c=Object(h.a)(n,2),r=c[0],s=c[1],o=function(){return s({type:v})};return Object(d.jsx)(j.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";s({type:m,payload:{text:e,type:t}}),setTimeout(o,3e3)},hide:o,alert:r},children:t})},T=n(3),_=Object(a.createContext)(),A=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(j),s=Object(a.useContext)(_).addNote,o=Object(a.useContext)(b).token;return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?(s(n,o),c("")):r.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u043f\u0443\u0441\u0442\u0430\u044f")},className:"form-inline",children:Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",value:n,onChange:function(e){c(e.target.value)}}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})})},D=function(e){var t=e.notes,n=e.filter,c=Object(a.useContext)(_),r=c.removeNote,s=c.updateNote,o=Object(a.useContext)(b).token;return Object(d.jsx)("ul",{className:"list-group",children:t.filter((function(e){switch(n){case 0:return!0;case 1:return e.done;case 2:return!e.done}return!0})).map((function(e){return Object(d.jsxs)("li",{className:"list-group-item note",children:[Object(d.jsxs)("div",{className:"note-text",children:[Object(d.jsxs)("strong",{style:e.done?{textDecoration:"line-through"}:{},children:[" ",e.text," "]}),Object(d.jsx)("div",{className:"text-info text-sm-start",children:new Date(e.createdAt).toLocaleString()})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){return s(e._id,!e.done,o)},type:"button",className:e.done?"btn btn-success btn-sm mx-1":"btn btn-outline-success btn-sm mx-1",children:"\ud83d\uddf8"}),Object(d.jsx)("button",{onClick:function(){return r(e._id,o)},type:"button",className:"btn btn-outline-danger btn-sm mx-1",children:"\xd7"})]})]},e.id)}))})},F=function(e){var t=e.filter,n=e.setFilter;return Object(d.jsx)("div",{className:"filter",children:Object(d.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(d.jsx)("button",{onClick:function(){return n(0)},type:"button",className:"btn btn".concat(0===t?"":"-outline","-secondary"),children:"\u0412\u0441\u0435"}),Object(d.jsx)("button",{onClick:function(){return n(1)},type:"button",className:"btn btn".concat(1===t?"":"-outline","-secondary"),children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}),Object(d.jsx)("button",{onClick:function(){return n(2)},type:"button",className:"btn btn".concat(2===t?"":"-outline","-secondary"),children:"\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"})]})})},I=function(){var e=Object(a.useContext)(_),t=(e.loading,e.notes),n=e.fetchNotes,c=Object(a.useContext)(b).token,r=Object(a.useState)(0),s=Object(h.a)(r,2),o=s[0],i=s[1];return Object(a.useEffect)((function(){n(c)}),[]),Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(A,{}),Object(d.jsx)("hr",{}),Object(d.jsx)(F,{filter:o,setFilter:i}),Object(d.jsx)(D,{notes:t,filter:o})]})},P=n(5),L=n.n(P),R=n(12),B=function(){var e=Object(a.useContext)(b),t=Object(a.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),n=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(h.a)(r,2),o=s[0],i=s[1];return{loading:n,request:Object(a.useCallback)(function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a,r,s,o,u=arguments;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,r=u.length>3&&void 0!==u[3]?u[3]:{},c(!0),e.prev=4,a&&(a=JSON.stringify(a),r["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:a,headers:r});case 8:return s=e.sent,e.next=11,s.json();case 11:if(o=e.sent,s.ok){e.next=14;break}throw new Error(o.message||"\u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430 \u0432\u044b\u0448\u043b\u0430");case 14:return c(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(4),c(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(a.useCallback)((function(){return i(null)}),[])}}(),c=n.loading,r=n.error,s=n.request,o=n.clearError,i=Object(a.useState)({email:"",password:""}),u=Object(h.a)(i,2),l=u[0],j=u[1];Object(a.useEffect)((function(){t(r),o()}),[r,t,o]);var O=function(e){j(Object(x.a)(Object(x.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))},p=function(){var e=Object(R.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/auth/register","POST",Object(x.a)({},l));case 3:n=e.sent,t(n.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var t=Object(R.a)(L.a.mark((function t(){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s("/api/auth/login","POST",Object(x.a)({},l));case 3:n=t.sent,e.login(n.token,n.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h5",{className:"card-header",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"form-floating mb-3",children:[Object(d.jsx)("input",{onChange:O,type:"email",className:"form-control",id:"email",name:"email",placeholder:"name@example.com"}),Object(d.jsx)("label",{htmlFor:"email",children:"Email address"})]}),Object(d.jsxs)("div",{className:"form-floating",children:[Object(d.jsx)("input",{onChange:O,type:"password",className:"form-control",id:"password",name:"password",placeholder:"Password"}),Object(d.jsx)("label",{htmlFor:"password",children:"Password"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{onClick:m,disabled:c,className:"btn btn-primary m-1",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(d.jsx)("button",{onClick:p,disabled:c,className:"btn btn-outline-primary",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},H=(n(50),"userData"),U=n(35),J=(l={},Object(f.a)(l,g,(function(e){return Object(x.a)(Object(x.a)({},e),{},{loading:!0})})),Object(f.a)(l,y,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:[].concat(Object(U.a)(e.notes),[n])})})),Object(f.a)(l,N,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:n,loading:!1})})),Object(f.a)(l,w,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:e.notes.filter((function(e){return e._id!==n}))})})),Object(f.a)(l,k,(function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{notes:e.notes.map((function(e){return e._id===n.id&&(e.done=n.flag),e}))})})),Object(f.a)(l,"DEFAULT",(function(e){return e})),l),W=function(e,t){return(J[t.type]||J.DEFAULT)(e,t)},z=n(16),M=n.n(z),K=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE||"http://localhost:5000",q=function(e){var t=e.children,n=Object(a.useContext)(j),c=Object(a.useReducer)(W,{notes:[],loading:!1}),r=Object(h.a)(c,2),s=r[0],o=r[1],i=function(){return o({type:g})},u=function(){var e=Object(R.a)(L.a.mark((function e(t){var n,a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),n={headers:{Authorization:"Bearer "+t}},e.next=4,M.a.get("".concat(K,"/api/note/"),n);case 4:a=e.sent,c=Object.keys(a.data).map((function(e){return Object(x.a)(Object(x.a)({},a.data[e]),{},{id:e})})),o({type:N,payload:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(R.a)(L.a.mark((function e(t,a){var c,r,s,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={text:t},r={headers:{Authorization:"Bearer "+a}},e.prev=2,e.next=5,M.a.post("".concat(K,"/api/note/add"),c,r);case 5:s=e.sent,i=Object(x.a)(Object(x.a)({},s.data.note),{},{id:s.data.note._id}),200===s.status&&n.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430","success"),o({type:y,payload:i}),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),new Error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(R.a)(L.a.mark((function e(t,a){var c,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={id:t},r={headers:{Authorization:"Bearer "+a}},e.next=4,M.a.post("".concat(K,"/api/note/remove"),c,r);case 4:200===e.sent.status&&n.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430","warning"),o({type:w,payload:t});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(R.a)(L.a.mark((function e(t,a,c){var r,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:t,done:a},s={headers:{Authorization:"Bearer "+c}},e.next=4,M.a.post("".concat(K,"/api/note/update"),r,s);case 4:200===e.sent.status&&n.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430","success"),o({type:k,payload:{id:t,flag:a}});case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(d.jsx)(_.Provider,{value:{showLoader:i,addNote:l,removeNote:b,fetchNotes:u,updateNote:O,loading:s.loading,notes:s.notes},children:t})};var V=function(){var e=function(){var e=Object(a.useState)(null),t=Object(h.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(h.a)(r,2),o=s[0],i=s[1],u=Object(a.useCallback)((function(e,t){c(e),i(t),localStorage.setItem(H,JSON.stringify({userId:t,token:e}))}),[]),l=Object(a.useCallback)((function(){c(null),i(null),localStorage.removeItem(H)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(H));e&&e.token&&u(e.token,e.userId)}),[u]),{login:u,logout:l,token:n,userId:o}}(),t=e.token,n=e.login,c=e.logout,r=e.userId,s=!!t,i=function(e){return e?Object(d.jsxs)(T.d,{children:[Object(d.jsx)(T.b,{path:"/",exact:!0,component:I}),Object(d.jsx)(T.a,{to:"/"})]}):Object(d.jsxs)(T.d,{children:[Object(d.jsx)(T.b,{path:"/",exact:!0,component:B}),Object(d.jsx)(T.a,{to:"/"})]})}(s);return Object(d.jsx)(S,{children:Object(d.jsx)(b.Provider,{value:{token:t,userId:r,login:n,logout:c,isAuthenticated:s},children:Object(d.jsx)(q,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)("div",{className:"container pt-4",children:[Object(d.jsx)(p,{}),i]})]})})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(68).config(),s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root")),G()}},[[72,1,2]]]);
//# sourceMappingURL=main.6bd059e0.chunk.js.map