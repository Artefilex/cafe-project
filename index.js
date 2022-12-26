let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}
const storage = new Storage()

// for submit form index
const userNameFromındexHtml = document.getElementById("userName")
const userNumberFromIndexHtml = document.getElementById("userNumber")
const userMailFromIndexHtml = document.getElementById("userMail")
const textareaFromIndexHtml = document.getElementById("textarea")
const indexForm = document.querySelector(".contact")


indexForm.addEventListener("submit",addStorage)

function addStorage(e){

  const name = userNameFromındexHtml.value 
  const number = userNumberFromIndexHtml.value
  const mail = userMailFromIndexHtml.value
  const message = textareaFromIndexHtml.value
  const footer = document.querySelector(".footer-infos")
  if( name === "" || number === ""|| mail === ""|| message === ""){
   
   let div= document.createElement("div")
   div.className = "alert alert-danger"
   div.textContent="Lütfen tüm alanlari doldurun"
   footer.insertBefore(div,footer.children[0])
   
   setTimeout(()=> div.remove(),2000)}
   else{
    let div= document.createElement("div")
    div.className = "alert alert-success"
    div.textContent="Mesajınız Başarıyla Gönderildi"
    footer.insertBefore(div,footer.children[0])
    setTimeout(()=> div.remove(),2000)
    storage.storageAddFromMainPage(name,number,mail,message)
   }
 
   deleteValues()
 

  e.preventDefault()}

  function deleteValues(){
    userNameFromındexHtml.value = ""
    userNumberFromIndexHtml.value= ""
    userMailFromIndexHtml.value= ""
    textareaFromIndexHtml.value=""
   }
 