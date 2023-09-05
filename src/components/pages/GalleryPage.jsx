import React, {useEffect, useState} from 'react';
import PhotoGrid from "../UI/PhotoGrid/PhotoGrid";
import {getGallery} from "../../utils/getGallery";
import {Link} from "react-router-dom";

const GalleryPage = () => {
    const [gallery, setGallery] = useState([])
    const [fetchCalled, setFetchCalled] = useState(1)
    const [allFetched, setAllFetched] = useState(false);

    const fetchData = async (calls = fetchCalled) => {
        setFetchCalled(prevState => prevState + 1)
        if (allFetched) {
            return;
        }
        try {
            const galleryFetch = await getGallery(calls);
            if (galleryFetch === 'end') {
                setAllFetched(prevState => !prevState)
            } else {
                setGallery((prevGallery) => [...prevGallery, ...galleryFetch]);

            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="bg-white py-24 sm:py-32 px-4 sm:px-32">
            <h1 className="text-4xl font-bold mb-4 text-center ">Галерея учеников арт-студии</h1>
            <p className="text-base mb-4 text-center text-gray-500">В данном разделе вы можете ознакомиться с работами и
                узнать уникальные детали, которым обучаются</p>
            <div className="my-12 mb-16 flex items-center">
                <div className="h-px flex-auto bg-gray-300"/>
            </div>
            <PhotoGrid photos={gallery}/>
            <div className='w-full flex justify-center items-center pt-10 px-20'>
                {allFetched ?
                    <h3 className='text-center text-xl'>Вы просмотрели всю галерею,<br/>можете выбрать один из наших
                        наши курсов<br/>
                        <Link onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }}
                              to='/courses'
                              className='underline text-2xl'>
                            Перейти
                        </Link>
                    </h3> :
                    <button
                        className='bg-black text-white font-semibold px-4 py-2 rounded'
                        onClick={() => {
                            fetchData()
                        }}
                    >Загрузить ещё</button>
                }
            </div>
        </div>
    );
};

export default GalleryPage;
