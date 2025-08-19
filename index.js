const bulb=document.getElementById("myImage");
const onBtn=document.getElementById("onBtn");
const offBtn=document.getElementById("offBtn");

const on="bulbon.jpeg";
const off="bulboff.jpg";

onBtn.addEventListener("click", () => {
  bulb.src = on;
});

offBtn.addEventListener("click", () => {
  bulb.src = off;
});