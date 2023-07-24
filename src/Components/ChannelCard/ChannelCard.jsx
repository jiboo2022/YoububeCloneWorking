import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { Box,Card, CardMedia,CardContent,Typography } from '@mui/material';
import { demoProfilePicture } from '../../Utils/constants';



const ChannelCard = ({ChannelDetail,marginTop}) => (
   
    <Box 
    sx={{ 
      boxShadow:'none', borderRadius:'20px', justifyContent:'center', alignItems:'center',
      width:{ xs:'356px', md:'320px'}, height:'320px', margin:'auto',marginTop
      }} 
    >
      <Link to={`/channel/${ChannelDetail?.id?.channelId }`}>

        <CardContent 
        sx={{ 
          diaplay:'flex', flexDirection:'column', justifyContent:'center',textAlign:'center', color:'#fff'
          }}>

          <CardMedia 
            image={ ChannelDetail?.snippet?.thumbnails?.high?.url  || demoProfilePicture} 
            alt={ChannelDetail?.snippet?.title}
            sx={{ borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'1px solid #e3e3e3'}} 
          />
          <Typography variant ='h6'>
            { ChannelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize:14, ml:'5px', color:'gray' }} />
          </Typography>

        </CardContent>


      </Link>


    </Box>  
  
  
  )


export default ChannelCard