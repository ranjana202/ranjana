

window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
    fadeOut();
  
  }
  
function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 4000);
  }
  


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeoOut(){
    setInterval(loader,3000);
}
window.onload = fadeOut;

