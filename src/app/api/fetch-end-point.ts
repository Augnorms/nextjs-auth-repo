import axios from "axios";

export const getResponse = async <T>(
  endpoint: string,
  loaderCallback: React.Dispatch<React.SetStateAction<boolean>>,
  setDataCallback: React.Dispatch<React.SetStateAction<T>>,
  setMessageCallback?: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    loaderCallback(true);
    const response = await axios.get(endpoint);

    if (response?.data?.status) {
      setDataCallback(response.data.data);
    } else {
      setMessageCallback && setMessageCallback("Unexpected response format");
    }
  } catch (err: any) { 
    setMessageCallback && setMessageCallback(err.message || "An error occurred");
  } finally {
    loaderCallback(false);
  }
};
