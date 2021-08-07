(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,d,s,l,u,b,j,f,h,g,x,m,O,p,k,v=t(1),w=t.n(v),D=t(14),y=t.n(D),T=t(2),z=t(3),C=Object(T.b)(r||(r=Object(z.a)(['\nhtml {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: "Montserrat", sans-serif;\n    font-size: 18px;\n    background: ',";\n  }\n\n"])),(function(n){return n.theme.color.gallery})),S=t(4),M=(t(24),T.d.form(o||(o=Object(z.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n\n    @media(max-width: ","px) {\n            grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax}))),N=T.d.input(i||(i=Object(z.a)(["\n    padding: 10px;\n    border: 2px solid ",";\n    \n    "])),(function(n){return n.theme.color.alto})),F=T.d.button(c||(c=Object(z.a)(["\n    padding: 10px;\n    background-color: ",";\n    color: ",";\n    border: none;\n    transition: 0.4s;\n\n    &:hover {\n        filter: brigthtness(110%);\n        transform: scale(1.1);\n}\n\n    &:active {\n        filter: brightness(120%);\n}\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white})),A=t(0),H=function(n){var e=n.addNewTask,t=Object(v.useState)(""),r=Object(S.a)(t,2),o=r[0],i=r[1],c=Object(v.useRef)(null);return Object(A.jsxs)(M,{onSubmit:function(n){n.preventDefault();var t=o.trim();t&&(e(t),i(""),c.current.focus())},children:[Object(A.jsx)(N,{ref:c,value:o,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return i(e.value)}}),Object(A.jsx)(F,{children:"Dodaj zadanie"})]})},I=T.d.ul(a||(a=Object(z.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),J=T.d.li(d||(d=Object(z.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 2px slid ",";\n\n    \n    ","\n"])),(function(n){return n.theme.color.alto}),(function(n){return n.hidden&&Object(T.c)(s||(s=Object(z.a)(["\n    display: none;\n    "])))})),L=T.d.span(l||(l=Object(z.a)(["\n","\n"])),(function(n){return n.done&&Object(T.c)(u||(u=Object(z.a)(["\n    text-decoration: line-through;\n    "])))})),P=T.d.button(b||(b=Object(z.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: bacground 0.4;\n\n    ","\n\n    ","\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.toggleDone&&Object(T.c)(j||(j=Object(z.a)(["\n        background: ",";\n    "])),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(T.c)(f||(f=Object(z.a)(["\n        background: ",";\n    "])),(function(n){return n.theme.color.crimson}))})),B=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return Object(A.jsx)(I,{children:e.map((function(n){return Object(A.jsxs)(J,{hidden:n.done&&t,children:[Object(A.jsx)(P,{toggleDone:!0,onClick:function(){return o(n.id)},children:n.done?"\u2714":""}),Object(A.jsx)(L,{done:n.done,children:n.content}),Object(A.jsx)(P,{remove:!0,onClick:function(){return r(n.id)},children:"\ud83e\uddfa"})]},n.id)}))})},E=T.d.div(h||(h=Object(z.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]))),G=T.d.button(g||(g=Object(z.a)(["\n    background: transparent;\n    border: none;\n    margin: 0 0 0 20px;\n    transition: 0.4s;\n    color: ",";\n\n    @media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 10px;\n    }\n\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n\n    &:disabled {\n        color: ",";\n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.silver})),U=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone;return Object(A.jsx)(E,{children:e.length>0&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(G,{onClick:r,children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(A.jsx)(G,{onClick:o,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},R=T.d.section(x||(x=Object(z.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.alto})),q=T.d.header(m||(m=Object(z.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 2px solid ",";\n    padding: 20px;\n\n    @media(max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.color.alto}),(function(n){return n.theme.breakpoint.mobileMax})),K=T.d.h2(O||(O=Object(z.a)(["\n    font-size: 20px;\n    margin: 0;\n"]))),Q=T.d.div(p||(p=Object(z.a)(["\n    padding: 20px;\n"]))),V=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(A.jsxs)(R,{children:[Object(A.jsxs)(q,{children:[Object(A.jsx)(K,{children:e}),r]}),Object(A.jsx)(Q,{children:t})]})},W=function(n){var e=n.title;return Object(A.jsx)("header",{children:Object(A.jsx)("h1",{children:e})})},X=T.d.div(k||(k=Object(z.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n    \n"]))),Y=function(n){var e=n.children;return Object(A.jsx)(X,{children:e})},Z=t(18),$=t(6),_=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]};var nn=function(){var n=Object(v.useState)(!1),e=Object(S.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(v.useState)(_),e=Object(S.a)(n,2),t=e[0],r=e[1];return Object(v.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object($.a)(Object($.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object($.a)(Object($.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(Z.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),i=o.tasks,c=o.removeTask,a=o.toggleTaskDone,d=o.setAllDone,s=o.addNewTask;return Object(A.jsxs)(Y,{children:[Object(A.jsx)(W,{title:"Lista zada\u0144"}),Object(A.jsx)(V,{title:"Dodaj nowe zadanie",body:Object(A.jsx)(H,{addNewTask:s})}),Object(A.jsx)(V,{title:"Lista zada\u0144",body:Object(A.jsx)(B,{tasks:i,hideDone:t,removeTask:c,toggleTaskDone:a}),extraHeaderContent:Object(A.jsx)(U,{tasks:i,hideDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:d})})]})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};y.a.render(Object(A.jsx)(w.a.StrictMode,{children:Object(A.jsxs)(T.a,{theme:{color:{black:"#000",silver:"#ccc",alto:"#ddd",gallery:"#eee",white:"#fff",teal:"#008080",crimson:"#db143c",forestGreen:"#228c22"},breakpoint:{mobileMax:767}},children:[Object(A.jsx)(C,{}),Object(A.jsx)(nn,{})]})}),document.getElementById("root")),en()}},[[29,1,2]]]);
//# sourceMappingURL=main.f6e87123.chunk.js.map