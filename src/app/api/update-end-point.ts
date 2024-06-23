import axios from "axios"

export const updateResponse = async <T>(
  formData: T,
  endpoint: string,
  callbackone: React.Dispatch<React.SetStateAction<boolean>>,
  callbacktwo: React.Dispatch<React.SetStateAction<boolean>>,
  callbackLoader: React.Dispatch<React.SetStateAction<boolean>>,
  restcallback:()=>void
)=>{
  try{
   callbackLoader(true)
   const response = await axios.post(endpoint, formData);
   if (response.status) {
        callbackone(true);
        setTimeout(() => {
          callbackone(false);
        }, 3000);
        restcallback();
    }else {
        callbacktwo(true);
        setTimeout(() => {
          callbacktwo(false);
        }, 3000);
      }
  }catch(error){
       callbacktwo(true);
        setTimeout(() => {
          callbacktwo(false);
        }, 3000);
  }finally{
    callbackLoader(false)
  }
}