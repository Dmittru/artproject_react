import React from 'react';
import {ScaleLoader} from "react-spinners";

const Loader = () => {
    return (
        <ScaleLoader
            color="#36d7b7"
            className='p-20'
            speedMultiplier={0.85}
        />
    );
};

export default Loader;