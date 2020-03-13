import React from 'react';
import CatTable from '../Components/CatTable';
    
export const Home = (props) => {
    return (
        <React.Fragment>
            <h1>Home</h1>
            {props.data.map(i => <CatTable key={i.file_id} content={i}/>)}
        </React.Fragment>
    );
};