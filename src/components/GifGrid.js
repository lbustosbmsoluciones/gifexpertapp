import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import Skeleton from '@mui/material/Skeleton';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>

            <div className='card-grid'>

                {loading ?
                    Array.from(new Array(9)).map((item, index) => (
                        <div className='card'>
                            <Skeleton animation="wave" variant="rectangular" width={350} height={250} />
                            <Skeleton animation="wave" width={350} variant="text" />
                        </div>
                    ))
                : images.map((img) => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                    )) 
                }

            </div>
        </>
    );
};

