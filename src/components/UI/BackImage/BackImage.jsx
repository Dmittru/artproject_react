import React, {useEffect, useState} from 'react';

const BackImage = ({image}) => {
    const [anim, setAnim] = useState(false);
    useEffect(()=>setAnim(true),[]);

    return (
        <div
            className="absolute inset-x-0 top-0 flex overflow-hidden"
        >
            <img
                src={image}
                alt=""
                className={`w-auto object-cover transition-all duration-1000 filter ${anim ? 'grayscale-0 min-h-[70vh]' : 'grayscale min-h-[50vh]'}`}
                style={{
                    zIndex: 0,
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 70%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 70%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 70%, transparent 100%)',
                }}
            />
        </div>
    );
};

export default BackImage;