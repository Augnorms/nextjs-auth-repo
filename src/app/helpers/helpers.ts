 export const handleType = (idx:number)=>{
     if(idx==0 || idx==1 || idx==5 || idx==6 ) {
        return "text"
     }else if(idx == 4){
        return "email"
     }else if(idx==2 || idx==3){
        return"password"
     }else{
        return"date"
     }
  }

  export const handlelabel = (idx:number)=>{
    switch(idx){
        case 0:
         return "firstname"

        case 1:
         return "lastname"
         
        case 2:
         return "password"
         
        case 3:
         return "repeat password"
         
        case 4:
         return "email"  

        case 5:
         return "phonenumber" 

        case 6:
         return "country"
         
        case 7:
         return "dateofbirth"  
    }
  }

  export const handleplaceholder = (idx:number)=>{
        switch(idx){
        case 0:
         return "Enter first name here..."

        case 1:
         return "Enter last name here..."
         
        case 2:
         return "Enter password here..."
         
        case 3:
         return "Enter repeat password here..."
         
        case 4:
         return "Enter email here..."  

        case 5:
         return "Enter phonenumber here..." 

        case 6:
         return "Enter country here..."
         
        case 7:
         return "Enter dateofbirth here..."  
    }
  }