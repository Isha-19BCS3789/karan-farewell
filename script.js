const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const body=document.body;
const bootLines=[
  ["Initializing Karan OS…",""],
  ["Loading leadership module…","OK"],
  ["Loading team shield…","OK"],
  ["Loading technical judgement…","OK"],
  ["Loading sarcasm engine…","999%"],
  ["Loading cricket side quest…","OK"],
  ["Caching team memories…","OK"],
  ["WARNING: migration detected.",""],
  ["Karan.exe has accepted a new opportunity.",""]
];
const bootBox=$("#bootLines"), progress=$("#bootProgress"), enter=$("#enterBtn");
let bi=0;
function bootStep(){
  if(bi<bootLines.length){
    const [text,status]=bootLines[bi];
    const p=document.createElement("p");
    p.innerHTML=`&gt; ${text} ${status?`<span class="ok">[${status}]</span>`:""}`;
    bootBox.appendChild(p);
    progress.style.width=`${((bi+1)/bootLines.length)*100}%`;
    bi++; setTimeout(bootStep,bi>6?520:330);
  }else enter.classList.remove("hidden");
}
window.addEventListener("load",()=>{body.classList.add("locked");setTimeout(bootStep,350)});
enter.addEventListener("click",()=>{$("#boot").classList.add("done");body.classList.remove("locked");setTimeout(()=>$("#boot").remove(),900)});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("pointermove",e=>{$("#cursorGlow").style.left=e.clientX+"px";$("#cursorGlow").style.top=e.clientY+"px"});

const quotes=["“Interesting choice.”","“Have you tried reading the error?”","“Let’s not deploy this on Friday.”","“That is… one way to do it.”","“Works on my machine.”","“We’ll handle it.”","“I have questions.”"];
$("#quoteBtn").addEventListener("click",()=>{$("#quoteOutput").textContent=quotes[Math.floor(Math.random()*quotes.length)]});

$$(".memory").forEach(card=>card.addEventListener("click",()=>{
  $("#lightboxImg").src=card.querySelector("img").src;
  $("#lightboxImg").alt=card.querySelector("img").alt;
  $("#lightboxCaption").textContent=card.dataset.caption;
  $("#lightbox").classList.add("active"); $("#lightbox").setAttribute("aria-hidden","false"); body.classList.add("locked");
}));
function closeLightbox(){$("#lightbox").classList.remove("active");$("#lightbox").setAttribute("aria-hidden","true");body.classList.remove("locked")}
$("#lightboxClose").addEventListener("click",closeLightbox);$("#lightbox").addEventListener("click",e=>{if(e.target===$("#lightbox"))closeLightbox()});

$("#fixBtn").addEventListener("click",()=>{
  const o=$("#fixOutput");o.textContent="Searching organisation-wide registry…";
  setTimeout(()=>o.textContent="No compatible replacement found. Incident remains open.",1300);
});

const responses={
 help:"Available commands: karan, stay, goodbye, thankyou, sarcasm",
 karan:"Searching… Karan has migrated successfully. Team still processing emotions.",
 stay:"Permission denied. New adventure already accepted.",
 goodbye:"Command not recognised. Try: thankyou",
 thankyou:"Accepted. Impact saved permanently. ♥",
 sarcasm:quotes[Math.floor(Math.random()*quotes.length)].replaceAll("“","").replaceAll("”","")
};
$("#terminalForm").addEventListener("submit",e=>{
  e.preventDefault();const input=$("#terminalInput"),cmd=input.value.trim().toLowerCase();if(!cmd)return;
  const out=$("#terminalOutput");out.insertAdjacentHTML("beforeend",`<p><b>&gt; ${cmd}</b></p><p>${responses[cmd]||"Unknown command. The manager would probably ask whether you read the documentation."}</p>`);
  input.value="";out.scrollTop=out.scrollHeight;
});

const finale=$("#videoFinale"), finalVideo=$("#finalVideo"), pre=$("#preVideo"), after=$("#afterVideo");
$("#lastThingBtn").addEventListener("click",()=>{
  finale.classList.add("active");finale.setAttribute("aria-hidden","false");body.classList.add("locked");
  pre.style.opacity="1";after.classList.remove("show");finalVideo.style.opacity="0";
  setTimeout(()=>{pre.style.opacity="0";finalVideo.style.opacity="1";finalVideo.currentTime=0;finalVideo.play().catch(()=>{});},2200);
});
$("#closeFinale").addEventListener("click",()=>{finalVideo.pause();finale.classList.remove("active");finale.setAttribute("aria-hidden","true");body.classList.remove("locked")});
finalVideo.addEventListener("ended",()=>{finalVideo.style.opacity="0";setTimeout(()=>{after.classList.add("show");launchConfetti()},700)});

function launchConfetti(){
 const c=$("#confetti"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
 const p=Array.from({length:170},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.4,r:3+Math.random()*5,v:2+Math.random()*5,a:Math.random()*6.28,s:(Math.random()-.5)*.18,h:[88,260,355,48][Math.floor(Math.random()*4)]}));
 let frames=0;function draw(){x.clearRect(0,0,c.width,c.height);p.forEach(q=>{q.y+=q.v;q.x+=Math.sin(q.y*.02)*1.4;q.a+=q.s;x.save();x.translate(q.x,q.y);x.rotate(q.a);x.fillStyle=`hsl(${q.h} 90% 65%)`;x.fillRect(-q.r,-q.r,q.r*2,q.r);x.restore()});if(frames++<400)requestAnimationFrame(draw)}draw();
}
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeLightbox();if(finale.classList.contains("active"))$("#closeFinale").click()}});
