import axios from "axios";

const url = "https://cors-anywhere.herokuapp.com/http://disease.sh/v2/";

// get global data
export const fetchGlobalData = async () => {
  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(`${url}/all`);
    return { cases, recovered, deaths, updated };
  } catch (error) {
    console.log("Error has occured, can't load data");
  }
};

// get countries data

// get single country data
