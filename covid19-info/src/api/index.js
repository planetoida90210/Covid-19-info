import axios from "axios";

// get global data
const url =
  "https://cors-anywhere.herokuapp.com/https://corona.lmao.ninja/v2/all?yesterday";

// get global data
export const fetchGlobalData = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);
    return data;
  } catch (error) {
    console.log("Error has occured, can't load data");
  }
};
// get countries data

// get single country data
