(this.webpackJsonppostrequest=this.webpackJsonppostrequest||[]).push([[0],{21:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),s=n(15),a=n.n(s),o=(n(21),n(5)),j=n(16),u=n.n(j),i=n(0);var b=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),j=a[0],b=a[1],l=Object(c.useState)(""),p=Object(o.a)(l,2),O=p[0],d=p[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={Id:n,Title:j,Body:O},c=u.a.post("https://jsonplaceholder.typicode.com/posts",e);console.log(e,c)},className:"container",children:[Object(i.jsx)("label",{children:"Enter ID"}),Object(i.jsx)("input",{type:"number",onChange:function(t){r(t.target.value)}}),Object(i.jsx)("label",{children:"Enter Title"}),Object(i.jsx)("input",{type:"text",onChange:function(t){b(t.target.value)}}),Object(i.jsx)("label",{children:"Enter Body"}),Object(i.jsx)("input",{type:"text",onChange:function(t){d(t.target.value)}}),Object(i.jsx)("button",{children:"Submit"})]})})};var l=function(){return Object(i.jsx)(b,{})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2cc50fcb.chunk.js.map