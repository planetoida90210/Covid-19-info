import axios from "axios";

// get global data
const url = "https://cors-anywhere.herokuapp.com/http://corona.lmao.ninja/v2/";

// get global data
export const fetchGlobalData = async () => {
  try {
    const { data } = await axios.get(`${url}/all?yesterday`);
    return data;
  } catch (error) {
    console.log("Error has occured, can't load data");
  }
};
// get countries data
export const fetchCountriesData = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data;
  } catch (error) {
    console.log("Error has occured, cant't load data");
  }
};
// get single country data
