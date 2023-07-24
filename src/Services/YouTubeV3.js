import axios from "axios";

const youTubev3key = process.env.REACT_APP_YOUTUBEV3_KEY;

const Base_Url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: { 
     maxResults: '9'
    },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBEV3_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

 
 
  export const fetchFromApi = async (url)=>{

    try {

        const { data} = await axios.get(`${Base_Url}/${url}`,options);

         return data;
        
    } catch (error) {

        console.log(error)
        
    }

  



  }


  