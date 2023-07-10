

let i = 0;
let txt = "                          I'm Mahmoud             I'm front-end developer (React).";
let speed = 200; 
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
    
  }
}

typeWriter();
