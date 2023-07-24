import React, {useState} from 'react';
import { Button, Stack } from '@mui/material';
import { categories } from '../../Utils/constants';

const SideBar = ({ selectedcategory, setSelectedCategory} ) => {
 
 //use redux to replace the useStae functionality;

 // const [selectedcategory, setSelectedCategory] = useState('New')

return (

    <Stack 
    direction = 'row'
    sx={{ overflowY: 'auto', height:{  sx:'auto', md:'95%' },flexDirection:{ md:'column'} }}>
        {

            categories.map( (category) =>(
               <button 
               key={category.name}
               className='category-btn' 
                        style={{
                            background:category.name === selectedcategory && '#FC1503',
                            color:'white'}}
                            value={category.name}
                            onClick = { ()=>setSelectedCategory(category.name)}>
                <span style={{ color: category.name===selectedcategory ? 'white' : 'red', marginRight:'15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedcategory ? '1' : '0.8' }}>{category.name}</span>
               </button> 
            ))
        }

    </Stack>
  )

    }
export default SideBar