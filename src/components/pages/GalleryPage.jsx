import React, {useEffect, useState} from 'react';
import PhotoGrid from "../UI/PhotoGrid/PhotoGrid";
import {getGallery} from "../../utils/getGallery";
import {Link} from "react-router-dom";
import Headler from "../UI/Headler/Headler";
import BackImage from "../UI/BackImage/BackImage";

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
        <div className="bg-amber-100/30 py-24 relative sm:py-32 px-4 sm:px-32">
            <BackImage image='https://cdn.discordapp.com/attachments/1150445325451006104/1150891506874458234/NEWQQQ.jpg'/>
            <Headler
                title='Галерея учеников арт-студии'
                description='В данном разделе вы можете ознакомиться с работами и
                    узнать уникальные детали, которым обучаются'
                opacityVal = '.25'
            />
            <div className="mt-10 mb-14 flex items-center relative"
                 style={{zIndex: 1}}
            >
                <div className="h-px flex-auto bg-gray-50/75 rounded"/>
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
