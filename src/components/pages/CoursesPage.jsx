import React, {useEffect, useState} from 'react';
import {CheckIcon} from '@heroicons/react/20/solid'
import {getCourses} from "../../utils/getCourses";
import ModalBuyer from "../UI/Modals/ModalBuyer";
import Badges from "../UI/Badges/Badges";
import {Transition} from "@headlessui/react";


const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const [modalInfo, setModalInfo] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [anim, setAnim] = useState(false)

    useEffect(()=>setAnim(true),[])

    const handleModal = (modalContent) => {
        setModalInfo(modalContent)
        setShowModal(prevState => !prevState);
    }

    useEffect(() => {
        const fetchData = async () => {
            const coursesFetch = await getCourses()
            setCourses(coursesFetch);
        };
        fetchData().catch(console.error);
    }, []);

    return (
        <>
            <ModalBuyer description={modalInfo} trigger={showModal} onHide={()=>setShowModal(false)}/>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        {!anim && <div className='py-20'/> }
                        <Transition
                            show={anim}
                            enter= 'transform transition ease-in-out duration-500 sm:duration-700'
                            enterFrom= '-translate-y-8 opacity-0'
                            enterTo='translate-y-0 opacity-1'
                            leave='transform transition ease-in-out duration-500 sm:duration-700'
                            leaveFrom= 'translate-y-0 opacity-1'
                            leaveTo= '-translate-y-8 opacity-0'
                        >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Курсы по
                            обучению</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                            Каждый из пройденных курсов включает в себя от 8 до 24 часов занятий, профессиональное
                            курирование преподавателя, а также аккредитованный сертификат по окончанию прохождения.
                            Ознакомьтесь с каждым из них!
                        </p>
                        </Transition>
                    </div>
                    <div className="mt-10 flex items-center">
                        <div className="h-px flex-auto bg-gray-300"/>
                    </div>
                    {courses.map((card, key) => {
                        return (
                            <div
                                key={key}
                                className={`shadow-2xl mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ${(key + 1) % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                        {card.discoverInfo.title}
                                        <Badges badges={card.discoverInfo.badges}/>
                                    </h3>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        {card.description}
                                    </p>
                                    <button
                                        className="text-base font-semibold tracking-tight text-white p-1 rounded bg-indigo-600 text-center mt-6"
                                        onClick={()=>{
                                            handleModal(card.discoverInfo)
                                        }}
                                    >
                                        Узнать подробности &rarr;
                                    </button>
                                    <p className="mt-6 text-base leading-7 text-amber-600">
                                        {card.time}
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">{card.featuresPhrase}</h4>
                                        <div className="h-px flex-auto bg-gray-100"/>
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                    >
                                        {card.includedFeatures.map((feature, key) => (
                                            <li key={key} className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600"
                                                           aria-hidden="true"/>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
                                    <div
                                        className='shadow-md rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10 min-h-full'
                                        style={{backgroundColor: card.bgColor[0], backgroundImage: card.bgColor[1]}}
                                    >
                                        <div className="mx-auto max-w-xs px-8">
                                            <p className="text-base font-semibold text-gray-600">
                                                {card.discoverInfo.type}
                                                {card.discoverInfo.oldPrice &&
                                                    <span className='ml-2 p-0.5 bg-orange-600 text-white rounded'>
                                                {card.discoverInfo.oldPrice[0]}
                                            </span>}
                                            </p>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                {card.discoverInfo.oldPrice && <p
                                                    className="text-xl font-bold tracking-tight text-orange-500 line-through">
                                                    {card.discoverInfo.oldPrice[1]['ru']}
                                                </p>}
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                    {card.discoverInfo.price['ru'][0]}
                                                </span>
                                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                    {card.discoverInfo.price['ru'][1]}
                                                </span>
                                            </p>
                                            <a
                                                href="#"
                                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                {card.discoverInfo.buttonLabel}
                                            </a>
                                            <p className="mt-6 text-xs leading-5 text-gray-600">
                                                {card.underPriceDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default CoursesPage;