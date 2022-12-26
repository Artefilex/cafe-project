class Storage{

    constructor(){
        
  
    }
    storageDataFromMainPage(){
        let users;
        if(localStorage.getItem("usersMassage")===null){
            users = [];
        }else{
            users = JSON.parse(localStorage.getItem("usersMassage"))
        }
        return users
        
    }
    storageAddFromMainPage(name,number,mail,message){
        let users = this.storageDataFromMainPage()
        users.push(name,number,mail,message)
        localStorage.setItem("userMassage",JSON.stringify(users))
    }
}