import React , {useState, useEffect} from 'react';
import { Box, Typography, Stack,CircularProgress,useMediaQuery } from '@mui/material';
import {SideBar, Videos} from '../../Components';
import { fetchFromApi } from '../../Services/YouTubeV3';




const Feed = () => {
 
   const year = new Date().getFullYear();
   const [selectedcategory, setSelectedCategory] = useState('New');
   const [videos, setVideos]= useState([])

    
     useEffect(() => {

      fetchFromApi(`search?part=snippet&q=${selectedcategory}`).then( (data)=>setVideos(data.items) )
          
     }, [selectedcategory])
     


  return (
   
     <Stack  sx={{ flexDirection:{ sx: "column", md:"row " }}}>

        <Box sx={{ height:{ sx: 'auto', md:'95vh'}, borderRight:'1px solid #3d3d3d', px:{ sx:0, md:2} }}>

           <SideBar  selectedcategory ={selectedcategory} setSelectedCategory={setSelectedCategory}/>

            <Typography sx={{ color:'#fff', mt:1.5}} className='copyright' variant='body2' >
                Copyright {year} Design Ajibola Shokunbi
            </Typography>


        </Box>

        <Box sx={{overflowY: 'auto', height:'90vh', flex:2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color:'white'}}>
          {selectedcategory}<span style={{ color:'#F31503'}}> Videos here </span>
          </Typography>

          <Videos videos={videos} />

        </Box>


     </Stack>

  )
}

export default Feed