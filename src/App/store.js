import { configureStore } from "@reduxjs/toolkit";
import { youtubeV3 } from "../Services/YouTubeV3";

export default configureStore({
    reducer:{
        [youtubeV3.reducerPath]:youtubeV3.reducer,

    },
})