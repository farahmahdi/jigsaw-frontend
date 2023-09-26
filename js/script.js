var scroll=document.getElementById("scroll");
const selfService = document.getElementById("selfService");
let offset;
scroll.onclick = () => {
  offset=selfService.offsetTop;
    window.scrollTo({
       top:offset-55,
        behavior: 'smooth'
    });
  }