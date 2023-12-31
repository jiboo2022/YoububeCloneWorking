import React from 'react';
import { Stack,Box, Typography } from '@mui/material';
import {VideoCard, ChannelCard} from '../../Components'

const Videos = ({ videos}) => {

  if (!videos.length) return 'Loading.....';

   console.log('videos from details',videos);
  return (
      <Stack direction = 'row' flexWrap='wrap' justifyContent='start' gap={2}>
        {
            videos.map( (item, index)=>(
              <Box key ={index}>
                { item.id.videoId && <VideoCard video={item}/>}
                { item.id.channelId && <ChannelCard ChannelDetail={item}/>}
              </Box>
            ))

        }
      </Stack>
  )
}

export default Videos