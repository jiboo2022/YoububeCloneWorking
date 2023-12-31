import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Videos, ChannelCard, VideoCard} from '../../Components';
import { Box } from '@mui/material';
import { fetchFromApi } from '../../Services/YouTubeV3';


const ChannelDetails = () => {

   const {id} = useParams();
   const [ channeldetail, setChannelDetail] =  useState(null);
   const [videos , setVideos] = useState([]);

   console.log(channeldetail, videos);


   useEffect( () =>{

    fetchFromApi(`channels?part=snippet&id=${id}`).then( (data)=> setChannelDetail(data.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then( (data)=> setVideos(data.items))

   },[id])



  return (

   <Box minHeight='95vh'>
     <Box>
      <div 
      style={{ 
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', height:'300px',zIndex:10
        }} />

       <ChannelCard  ChannelDetail={channeldetail}   marginTop="-110px"/>
     </Box>

     <Box p={2} display='flex'>

        <Box sx={{ mr:{sm:'100px'} }}>
        <Videos  videos={videos}/>
        </Box> 


     </Box>
   </Box>
  )
}

export default ChannelDetails