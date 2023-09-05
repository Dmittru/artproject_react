import React from 'react';
import {useNavigate} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Page404 = () => {
    const navigate = useNavigate();
    const getBack = () => {
        navigate(-1);
    }

    return (
        <div className='inset-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-8'>
            <h1 className='font-bold text-6xl mb-10 text-center '>
                Страница не найдена
            </h1>
            <p className='text-center text-3xl font-semibold mb-6 '>
                Ошибка 404: Перезагрузите страницу<br/>или её не существует
            </p>
            <button
                onClick={()=>{getBack()}}
                className="bg-white text-black font-semibold px-4 py-2 rounded"
            >
                    Вернуться назад <FontAwesomeIcon icon={faArrowRight}/>
            </button>

        </div>
    );
};

export default Page404;