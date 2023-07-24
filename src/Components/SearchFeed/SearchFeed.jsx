import React , {useState, useEffect} from 'react';
import { Box, Typography} from '@mui/material';
import {Videos} from '../../Components';
import { fetchFromApi } from '../../Services/YouTubeV3';
import { useParams } from 'react-router-dom';





const SearchFeed = () => {

   const {searchTerm}  = useParams();
   const [videos, setVideos]= useState([]);

    
     useEffect(() => {

      fetchFromApi(`search?part=snippet&q=${searchTerm}`).then( (data)=>setVideos(data.items) )
          
     }, [searchTerm])
     


  return (
   
        <Box sx={{overflowY: 'auto', height:'90vh', flex:2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color:'white'}}>
          Searched Result For :<span style={{ color:'#F31503'}}>{searchTerm} Videos here </span>
          </Typography>

          <Videos videos={videos} />

        </Box>


  )
}

export default SearchFeed