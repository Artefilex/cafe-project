
// for headerr

const iconClass= document.querySelector(".fa") 
const humberger = document.getElementById("showHamburgerMenu")
const navbarItems= document.querySelector(".navbar-item")



iconClass.addEventListener("click",(e)=>{
    if ( e.target.classList[1] ==="fa-bars"){
    iconClass.classList.add("fa-times")
    iconClass.classList.remove("fa-bars")
    navbarItems.classList.add("active")
    }else{
        iconClass.classList.add("fa-bars")
        iconClass.classList.remove("fa-times")
        navbarItems.classList.remove("active")
        
    } 
    
})
// header and



// slide show home start
function activeClass(n){
  activeforbuttons(n)
  // ui.activate(n)
 
}
function activeforbuttons(n){
  let activateNumber = document.querySelectorAll(".buttons-activate")
  for(let i = 0 ; i < activateNumber.length; i++ ){
   
    activateNumber[i].className= activateNumber[i].className.replace(" activet", "")
   
  }
 activateNumber[n-1].className += " activet"



}

const ui = new UI()


fetch("./menudata.json").then(function(resp){
  return resp.json()
}).then(function(data){
        ui.showMenu(data)
        
        
  });

  fetch("./menudata.json").then(function(resp){
    return resp.json()
  }).then(function(data){
          ui.organization(data)
    });

 
   