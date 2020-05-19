import axios from "axios";

const url = "https://cors-anywhere.herokuapp.com/http://disease.sh/v2/";

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
