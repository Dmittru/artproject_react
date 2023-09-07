import React from 'react';
import {useNavigate} from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();
    const getBack = () => {
        navigate(-1);
    }

    return (
        <div
            className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
            <main
                className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
                <div className="max-w-lg lg:py-24">
                    <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Страница не найдена</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Страница не существует или была удалена.
                    </p>
                    <div className="mt-10">
                        <button onClick={()=>{getBack()}} className="text-sm font-semibold leading-7 text-indigo-600">
                            <span aria-hidden="true">&larr;</span> Вернуться назад
                        </button>
                    </div>
                </div>
            </main>
            <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
                <img
                    src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Page404;