(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(0),i=a.n(c),r=a(11),s=a.n(r),o=(a(57),a(16)),l=(a(58),a(105)),j=a(108),u=a(110),b=a(111),d=Object(l.a)((function(e){return{root:{flexGrow:1,position:"relative"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function p(){var e=d();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(j.a,{position:"static",style:{backgroundColor:"salmon"},children:Object(n.jsx)(u.a,{children:Object(n.jsx)(b.a,{variant:"h6",className:e.title,children:"Movie Challenge"})})})})}var m=a(34),h=a(112),f=a(113),x=a(117),O=a(116),g=a(118),v=a(115),y=a.p+"static/media/pulp.546b47d8.jpg",k=Object(l.a)((function(e){return{title:{textAlign:"center",marginBottom:"7vh"},input:{backgroundColor:"white"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},active:{fill:"black"},notActive:{fill:"yellow",backgroundSize:"cover"},img:{width:"300px"},searchContainer:{display:"flex",height:"55vh",justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"10vh",backgroundImage:"url(".concat(y,")"),backgroundSize:"cover"},form:{display:"flex",alignItems:"center",justifyContent:"center"},starContainer:{display:"flex",alignItems:"center",justifyContent:"center"},text:{marginRight:"10px"},pictures:{backgroundColor:"white"},sss:{background:"white",borderRadius:"4px"}}}));function w(e){var t=e.popular,a=e.search,r=k(),s=Object(c.useState)([]),l=Object(o.a)(s,2),j=l[0],u=l[1],d=Object(c.useState)([]),p=Object(o.a)(d,2),y=p[0],w=p[1],N=Object(c.useState)(!1),C=Object(o.a)(N,2),S=C[0],_=C[1],I=Object(c.useState)(0),A=Object(o.a)(I,2),B=A[0],R=A[1],G=Object(c.useState)([2,4,6,8,10]),E=Object(o.a)(G,2),z=E[0];E[1];return Object(c.useEffect)((function(){w(t),u(a)})),Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(h.a,{}),Object(n.jsxs)(f.a,{className:r.searchContainer,children:[Object(n.jsxs)(b.a,{variant:"h3",className:r.title,children:["Your next favorite movie, ",Object(n.jsx)("b",{children:"here!"})]}),Object(n.jsxs)("form",{className:r.form,children:[Object(n.jsx)(g.a,{id:"combo-box-demo",options:j,getOptionLabel:function(e){return e.title},onChange:function(e,t){var a=t;a&&alert("".concat(a.title,": ").concat(a.overview))},style:{width:300,marginRight:50},renderInput:function(e){return Object(n.jsx)(x.a,Object(m.a)(Object(m.a)({},e),{},{placeholder:"Searching for a movie?",variant:"outlined",className:r.sss}))}}),Object(n.jsxs)("div",{className:r.starContainer,children:[Object(n.jsx)(b.a,{variant:"h6",className:r.text,children:"Filter by votes:"}),z.map((function(e){return Object(n.jsx)(v.a,{className:r.notActive,onClick:function(){var t;(t=e)!==B?(R(t),_(!0)):_(!1)}},e)}))]})]})]}),Object(n.jsx)(f.a,{className:r.pictures,children:Object(n.jsx)(O.a,{container:!0,spacing:3,justify:"center",alignItems:"center",children:S?y.map((function(e){if(e.vote_average>=B)return Object(n.jsx)(O.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:r.img,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path,"?api_key=67349d4aecf040b639d88fa295115406"),alt:e.title})},e.id)})):y.map((function(e){if(e.popularity>=1448.531)return Object(n.jsx)(O.a,{item:!0,xs:4,children:Object(n.jsx)("img",{className:r.img,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path,"?api_key=67349d4aecf040b639d88fa295115406"),alt:e.title})},e.id)}))})})]})}var N=Object(l.a)((function(e){return{root:{flexGrow:1,marginTop:"20px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"}}}));function C(){var e=N();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(j.a,{position:"static",style:{backgroundColor:"salmon"},children:Object(n.jsx)(u.a,{children:Object(n.jsx)(b.a,{variant:"p",className:e.title,children:"Twitter: @robmcelta"})})})})}var S=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),l=s[0],j=s[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=67349d4aecf040b639d88fa295115406").then((function(e){return e.json()})).then((function(e){return i(e.results)})),fetch("https://api.themoviedb.org/3/discover/movie?api_key=67349d4aecf040b639d88fa295115406&sort_by=release_date.asc").then((function(e){return e.json()})).then((function(e){return j(e.results)}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{}),Object(n.jsx)(w,{popular:a,search:l}),Object(n.jsx)(C,{})]})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.7ccb694d.chunk.js.map