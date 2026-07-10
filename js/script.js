/* ============ Preloader ============ */
window.addEventListener('load',()=>{
  const p=document.querySelector('.preloader');if(p) setTimeout(()=>p.classList.add('hidden'),400);
});

/* ============ Theme toggle ============ */
const themeBtn=document.querySelector('[data-theme-toggle]');
const applyTheme=t=>{document.documentElement.dataset.theme=t;localStorage.setItem('mb-theme',t);
  if(themeBtn) themeBtn.innerHTML= t==='light'?'🌙':'☀️';
};
applyTheme(localStorage.getItem('mb-theme')||'dark');
themeBtn && themeBtn.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='light'?'dark':'light'));

/* ============ Mobile menu ============ */
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
toggle && toggle.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));

/* ============ Nav scrolled + scroll progress + to-top ============ */
const nav=document.querySelector('.nav');
const prog=document.querySelector('.scroll-progress');
const toTop=document.querySelector('.to-top');
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  nav && nav.classList.toggle('scrolled',y>20);
  toTop && toTop.classList.toggle('visible',y>400);
  if(prog){const h=document.documentElement.scrollHeight-window.innerHeight;prog.style.width=(y/h*100)+'%';}
});
toTop && toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============ Active nav highlighting ============ */
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===path) a.classList.add('active');
});

/* ============ Cursor ============ */
const dot=document.querySelector('.cursor-dot');
const ring=document.querySelector('.cursor-ring');
if(dot&&ring){
  let x=0,y=0,rx=0,ry=0;
  window.addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`});
  const loop=()=>{rx+=(x-rx)*.15;ry+=(y-ry)*.15;ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop)};
  loop();
  document.querySelectorAll('a,button,.glass').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
  });
}

/* ============ Button ripple ============ */
document.querySelectorAll('.btn').forEach(b=>b.addEventListener('click',function(e){
  const r=document.createElement('span');r.className='ripple';
  const d=Math.max(this.clientWidth,this.clientHeight);r.style.width=r.style.height=d+'px';
  const rect=this.getBoundingClientRect();r.style.left=(e.clientX-rect.left-d/2)+'px';r.style.top=(e.clientY-rect.top-d/2)+'px';
  this.appendChild(r);setTimeout(()=>r.remove(),600);
}));

/* ============ Typing effect ============ */
const typeEl=document.querySelector('.type-wrap');
if(typeEl){
  const words=(typeEl.dataset.words||'').split('|');
  let wi=0,ci=0,del=false;
  const tick=()=>{
    const w=words[wi];
    typeEl.textContent = del ? w.substring(0,ci--) : w.substring(0,ci++);
    let d= del?60:100;
    if(!del && ci===w.length+1){del=true;d=1600}
    else if(del && ci===-1){del=false;wi=(wi+1)%words.length;d=200}
    setTimeout(tick,d);
  };tick();
}

/* ============ Counter animation ============ */
const counters=document.querySelectorAll('[data-count]');
const runCount=el=>{
  const end=+el.dataset.count;let cur=0;const step=Math.max(1,Math.round(end/60));
  const t=setInterval(()=>{cur+=step;if(cur>=end){cur=end;clearInterval(t)}el.textContent=cur+(el.dataset.suffix||'')},25);
};

/* ============ IntersectionObserver reveal + counters + skill bars ============ */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      if(e.target.matches('[data-count]')) runCount(e.target);
      if(e.target.matches('.bar')) e.target.querySelector('span').style.width=e.target.dataset.value+'%';
      io.unobserve(e.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal,[data-count],.bar').forEach(el=>io.observe(el));

/* ============ Card tilt ============ */
document.querySelectorAll('.tilt').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateY(${px*8}deg) rotateX(${-py*8}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

/* ============ Contact form validation ============ */
const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();let ok=true;
    form.querySelectorAll('.field').forEach(f=>{
      const input=f.querySelector('input,textarea');
      const v=input.value.trim();let valid=v.length>0;
      if(input.type==='email') valid=valid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      f.classList.toggle('invalid',!valid);if(!valid) ok=false;
    });
    if(ok){
      const msg=form.querySelector('.form-msg');msg.textContent='✓ Message sent — thank you! I will reply within 24h.';
      msg.style.color='#22c55e';form.reset();
    }
  });
}
