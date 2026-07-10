/* Lightweight canvas particles */
(function(){
  const c=document.getElementById('particles');if(!c) return;
  const ctx=c.getContext('2d');let w,h,ps=[];
  const resize=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight};
  const init=()=>{ps=[];const n=Math.min(70,Math.floor(w/22));
    for(let i=0;i<n;i++)ps.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+.5});
  };
  const draw=()=>{
    ctx.clearRect(0,0,w,h);
    for(const p of ps){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(139,92,246,.6)';ctx.fill();
    }
    for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){
      const a=ps[i],b=ps[j];const dx=a.x-b.x,dy=a.y-b.y;const d=Math.hypot(dx,dy);
      if(d<120){ctx.strokeStyle=`rgba(99,102,241,${(1-d/120)*.35})`;ctx.lineWidth=.6;
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    }
    requestAnimationFrame(draw);
  };
  window.addEventListener('resize',()=>{resize();init()});
  resize();init();draw();
})();
