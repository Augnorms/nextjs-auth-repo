import axios from "axios";

const sendRequest = async <T>(formData: T, endpoint: string) => {
  try {
    const response = await axios.post(endpoint, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSubmitHandler = <T>(
  formData: T,
  endpoint: string,
  callbackone: React.Dispatch<React.SetStateAction<boolean>>,
  callbacktwo: React.Dispatch<React.SetStateAction<boolean>>,
  callbackLoader: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async () => {
    try {
       callbackLoader(true);
      const response = await sendRequest(formData, endpoint);
      if (response.status) {
        callbackone(true);
        setTimeout(() => {
          callbackone(false);
        }, 3000);
      } else {
        callbacktwo(true);
        setTimeout(() => {
          callbacktwo(false);
        }, 3000);
      }
    } catch (error) {
      callbacktwo(true);
      setTimeout(() => {
        callbacktwo(false);
      }, 3000);
    }finally{
      callbackLoader(false);
    }
  };
};
