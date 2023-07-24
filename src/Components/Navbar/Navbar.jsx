import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../../Utils/constants'; 
import { SearchBar} from '../../Components';


const Navbar = () => (

    <Stack 
        direction='row'
        alignItems='center' 
        sx={{ backgroundColor:' #000', position:'static', top:0, justifyContent:'space-between'}}>

        <Link to='/' style={{  display:'flex', alignItems:'center', marginTop:'2x'}}>
            <img src={logo} alt='logo' height={45} />
        </Link>

        <SearchBar />

    </Stack>
  )


export default Navbar