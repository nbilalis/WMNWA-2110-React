import{r as a,s as h,j as c,F as f,a as t,C as m,T as g,B as y,L as x,b as v,I as u,d as M,c as C,v as T,e as b,f as A,u as L,g as E,h as k,R as O,i as P,S as D}from"./vendor.1d511df2.js";const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(o){if(o.ep)return;o.ep=!0;const e=i(o);fetch(o.href,e)}};I();function R(){const[d,r]=a.exports.useReducer((e,n)=>{switch(n.type){default:case"ADD":return[...e,n.payload];case"REMOVE":return e.filter(l=>l.id!==n.payload.id)}},[]),i=e=>{const n=e.target,{value:l}=n;e.code==="Enter"&&l&&(r({type:"ADD",payload:{id:T(),text:l}}),n.value="")},s=e=>{r({type:"REMOVE",payload:{id:e}})},o=h("div")(({theme:e})=>({backgroundColor:e.palette.background.paper}));return c(f,{children:[c("h2",{children:["Todos ",t(m,{label:d.length})]}),t(g,{variant:"standard",id:"add-todo",label:"Add a new Todo:",onKeyPress:i}),t(y,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t(o,{children:t(x,{dense:!1,children:d.map(e=>t(v,{secondaryAction:t(u,{onClick:()=>s(e.id),edge:"end","aria-label":"delete",children:t(M,{})}),children:t(C,{primary:e.text},e.id)}))})})})]})}const p=a.exports.createContext({toggleColorMode:()=>{}});function j({children:d}){const[r,i]=a.exports.useState("light"),s=a.exports.useMemo(()=>({toggleColorMode:()=>{i(e=>e==="light"?"dark":"light")}}),[]),o=a.exports.useMemo(()=>b({palette:{mode:r}}),[r]);return t(p.Provider,{value:s,children:t(A,{theme:o,children:d})})}function F(){const d=L(),r=a.exports.useContext(p);return t(u,{sx:{ml:1},onClick:r.toggleColorMode,color:"inherit",children:d.palette.mode==="dark"?t(E,{}):t(k,{})})}function S(){return c(j,{children:[t("h1",{children:"YATA!"}),t(R,{}),t(F,{})]})}O.render(t(P.StrictMode,{children:t(D,{injectFirst:!0,children:t(S,{})})}),document.getElementById("root"));
