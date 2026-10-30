const bar=document.querySelector('.sticky');
const learning=document.querySelector('#learning');
const next=document.querySelector('#next');
const update=()=>bar.classList.toggle('show',learning.getBoundingClientRect().top<window.innerHeight*.65 && next.getBoundingClientRect().top>window.innerHeight*.75);
window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
document.querySelectorAll('[data-cta]').forEach(a=>a.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('managara:cta',{detail:{placement:a.dataset.cta,destination:a.href}}))));
