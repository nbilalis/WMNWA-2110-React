import{r as u,j as c,F as p,a as r,B as f,b as l,R as m,c as h}from"./vendor.2163446a.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};y();const d=0;function g({name:a}){const[o,i]=u.exports.useState(d);return c(p,{children:[c("h1",{children:["Hello, ",a,"!"]}),r("p",{children:"From your React app!"}),c("p",{children:["Clicked ",o," times"]}),c(f,{sx:{display:"inline-flex",justifyContent:"center",bgcolor:"background.paper",gap:1,p:1,m:1},children:[r(l,{type:"button",variant:"contained",onClick:()=>{i(n=>n+1)},children:"Increase"}),r(l,{type:"button",variant:"outlined",onClick:()=>{i(n=>n-1)},children:"Decrease"}),r(l,{type:"button",variant:"text",onClick:()=>{i(d)},children:"Reset"})]})]})}const b=()=>r(g,{name:"World"});m.render(r(h.StrictMode,{children:r(b,{})}),document.getElementById("root"));
