import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

const API_KEY = '32343c3b6e3b4dc3b94174347230811'

// export const getCurrentWeather = async (value:string) => {
//   const response = await axiosInstance.get(`/current.json?key=${API_KEY}&q=${value}`)
//   return response.data
// }

export const getForecast = async (value: string) => {
  try {
    const response = await axiosInstance.get(`forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no`)
    return response.data
  } catch (error) {
    console.log(error);
  }

}


export const getCitiesList = async (value: string) => {
  try {
    const response = await axiosInstance.get(`search.json?key=32343c3b6e3b4dc3b94174347230811&q=${value}`)
    return response.data
  } catch (error) {
    console.log(error);
  }

}
