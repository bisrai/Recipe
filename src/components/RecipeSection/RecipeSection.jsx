import React from 'react'
import "./RecipeSection.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import recipe1 from "../../assets/recipe-1.jpg"
import recipe2 from "../../assets/recipe-2.jpg"
import recipe3 from "../../assets/recipe-3.jpg"
import recipe4 from "../../assets/recipe-4.jpg"
import recipe5 from "../../assets/recipe-5.jpg"
import recipe6 from "../../assets/recipe-6.jpg"
import recipe7 from "../../assets/recipe-7.jpg"
import recipe8 from "../../assets/recipe-8.jpg"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function RecipeSection() {
    return (
        <>
            <ImageList style={{ width: "100%", margin:"auto" }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={<span style={{marginLeft:"14px"}}>{item.title}</span>}
                            subtitle={<span style={{marginLeft:"14px"}}>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}

            </ImageList>

            <Stack className='paginationn' spacing={2}>
                <Pagination count={10} size="large"/>
            </Stack>
        </>

    )
}


const itemData = [
    {
        img: recipe1,
        title: 'Samosa recipe',
        author: '@recipies',
    },
    {
        img: recipe2,
        title: 'Panipuri',
        author: '@recipies',
    },
    {
        img: recipe3,
        title: 'Idli',
        author: '@recipies',
    },
    {
        img: recipe4,
        title: 'Vada pav',
        author: '@recipies',
    },
    {
        img: recipe5,
        title: 'Mutton curry',
        author: '@recipies',
    },
    {
        img: recipe6,
        title: 'Salad',
        author: '@recipies',
    },
    {
        img: recipe7,
        title: 'White Rice',
        author: '@recipies',
    },
    {
        img: recipe8,
        title: 'Dal makhani',
        author: '@recipies',
    },
];


export default RecipeSection