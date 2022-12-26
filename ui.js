class UI{
   constructor(){
    this.menuData = document.querySelector(".menu-data")
    this.all = document.getElementById("all")
    this.food =  document.getElementById("food")
    this.dessert =  document.getElementById("dessert")
    this.drink = document.getElementById("drink")
    this.allBtn= document.querySelector(".menu-buttons")
    this.activet = document.getElementsByClassName("activate")
    this.class = document.querySelectorAll(".section-data")
    // this.counts;
   }

//    activate(n){
//    this.counts = n
//    console.log(this.counts)
// }



    showMenu(data){
    
        
        data.forEach(datas => {
            let count = 0
            this.allBtn.addEventListener("click",(e)=>{
            //  let counts = this.activate(e.target)
            // console.log(counts)
        if(e.target.id== datas.id || e.target.id=="all"){
                if(e.target){
                count++
                    this.menuData.innerHTML+=
                    `
                        <div class="photo-possiton">
                        <img src="${datas.urls}" alt="">
                        </div>
                        ` 
                }
                if(count!= 1){
                    this.menuData.innerHTML=""
                count = 0
                }
               
        
            }

        }); 
    
    
    })


    }

    organization(data){
        data.forEach(datas=>{
            this.class.forEach((classNames)=>{
              if(datas.id == classNames.classList[2]){
                classNames.innerHTML+=`
                <div class="photo-possiton">
                <img src="${datas.organizasion}" alt="">
                </div> 
                `
               
              }
                
              })
         
        })
      
    }
}