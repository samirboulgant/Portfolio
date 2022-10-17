
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('main-content');
const currentBtn = document.getElementsByClassName('active-btn');

function PageTransition(){
    //button click active class
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
         currentBtn[0].classList.remove("active-btn") ;
            this.className += ' active-btn';
            document.querySelector(".active").classList.remove("active");
            document.getElementById(sectBtn[i].dataset.id).classList.add("active"); 
        })
       
    }
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

 
}
PageTransition();