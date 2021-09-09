import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GIfGridItem';



const GifGrid = ({category}) =>{
    
    const {data, loading} = useFetchGifs(category);
    
    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="content">
                {data.map( img => <GifGridItem key={img.id} {...img} />)}
            </div>
        </>
    );
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;