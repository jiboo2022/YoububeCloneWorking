import React,{useState, useEffect} from 'react';
import { Link , useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Videos, VideoCard} from '../../Components';
import { fetchFromApi } from '../../Services/YouTubeV3';



const VideoDetails = () => {

  const {id} = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect( ()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then( (data)=>setVideoDetails(data.items[0]));
    
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then( (data)=>setVideos(data.items[0]))
  },[id]);

  

   if (!videoDetails?.snippet) return 'loadingVideoDetails....';

   if (!videos?.snippet) return 'LoadingVideos....';

  const { snippet:{ title,channelId,channelTitle,}, statistics:{viewCount, likeCount} } = videoDetails;

  //console.log('related info',videos);

  return (
    <Box display='flex' minHeight='95vh'>
      <Stack  direction={{ xs:'column', md:'row'}}>
        <Box flex={1}>

           <Box sx={{ width:'100%', position:'sticky', top:'86px'}}>
             <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`}
              
              className='react-player' controls /> 

             <Typography color='#fff' p={2} variant='h5' fontWeight='bold'>
              { title ? title : 'demo title here' }
             </Typography> 
              <Stack direction='row' justifyContent='space-between' py={1} px={2} sx={{color:'#fff'}}>
                <Link to={`/channel/${channelId}`} >
                  <Typography variants={{ sm:'subtitle1', md:'h6'}} color='#fff'>
                   {channelTitle}
                   <CheckCircle  sx={{fontSize:'12px', color:'gray', ml:'5px' }}/>
                   </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                 <Typography variant='body1' sx={{ opacity:0.7}}>
                    {parseInt(viewCount).toLocaleString()} Views
                 </Typography>
                 <Typography variant='body1' sx={{ opacity:0.7}}>
                    {parseInt(likeCount).toLocaleString()} Views
                 </Typography>

                </Stack>
              </Stack>

           </Box>

        </Box>


      </Stack>

        <Box px={2} py={{ md:1, xs:5}} justifyContent='center' alignItems='center'>
        
          <Videos  videos={videos}/>
        </Box>

    </Box>
  )
}

export default VideoDetails