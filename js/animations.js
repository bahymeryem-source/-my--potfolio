/* Parallax on hero visual */
const visual=document.querySelector('.avatar-wrap');
if(visual){
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;visual.style.transform=`translateY(${y*.08}px)`;
  });
}
/* Animated gradient shift on hero */
let hue=0;
setInterval(()=>{
  hue=(hue+1)%360;
  document.documentElement.style.setProperty('--brand-2',`hsl(${260+Math.sin(hue*0.02)*20},80%,65%)`);
},80);
