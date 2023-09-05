import React from 'react';

const PhotoGrid = ({ photos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, key) => (
                <div
                    key={key}
                    className="relative filter grayscale-0 hover:grayscale-0 transition-all duration-500 group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105"
                >
                    <img src={photo.url} alt={`Photo ${key}`} className="object-cover w-full h-full" />
                    <div className="absolute flex justify-end flex-col inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
                        <div className='rounded rounded-t-2xl  p-2 bg-' style={{backgroundColor:'rgba(17,24,39,.5)'}}>
                            <h3 className='text-xl font-semibold mb-2'> {photo.author}</h3>
                            <p className='text-base mb-2'> {photo.description}</p>
                        {/*    NON ASYNC HEIGhtS ON DESCtop PROPERTY gridAutoRows:'auto' DOESNT WORK*/}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
