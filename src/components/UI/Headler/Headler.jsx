import React, {useEffect, useState} from 'react';
import {Transition} from "@headlessui/react";

const Headler = ({title, description, opacityVal}) => {
    const [anim, setAnim] = useState(false);
    useEffect(() => setAnim(true), []);
    const opacityValue = anim ? opacityVal : 0;
    const opacityStyle = { opacity: opacityValue };
    return (
        <div className="mx-auto max-w-2xl sm:text-center relative flex justify-center items-center">
            {!anim && <div className='py-20'/>}
            <div
                style={opacityStyle}
                className={`absolute transition-all transform-gpu duration-1000 min-w-[110%] min-h-[130%] bg-gray-950 filter blur-xl -z-0`}/>
            <Transition
                show={anim}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='-translate-y-8 opacity-0'
                enterTo='translate-y-0 opacity-1'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-y-0 opacity-1'
                leaveTo='-translate-y-8 opacity-0'
            >
                <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl text-center">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-200 text-center">
                    {description}
                </p>
            </Transition>
        </div>
    );
};

export default Headler;