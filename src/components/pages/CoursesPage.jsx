import React, {useEffect, useState} from 'react';
import {CheckIcon} from '@heroicons/react/20/solid'
import {getCourses} from "../../utils/getCourses";
import ModalBuyer from "../UI/Modals/ModalBuyer";
import Badges from "../UI/Badges/Badges";
import {Transition} from "@headlessui/react";
import {useLocation} from "react-router-dom";


const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const [modalInfo, setModalInfo] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [anim, setAnim] = useState(false)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(()=>setAnim(true),[])

    useEffect(()=>{
        scrollToSection(queryParams.get('jump'))
    },[courses])

    const handleModal = (modalContent) => {
        setModalInfo(modalContent)
        setShowModal(prevState => !prevState);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
            <div className="bg-white py-24 sm:py-32 relative">
                <div
                    className="absolute inset-x-0 top-0 z-0 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                    aria-hidden="true"
                >
                    <div
                        className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
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
                    {courses.map((course, key) => {
                        return (
                            <div
                                key={key}
                                id={course.id}
                                className={`shadow-2xl mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none flex-col ${(key + 1) % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                            >
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                        {course.discoverInfo.title}
                                        <Badges badges={course.discoverInfo.badges}/>
                                    </h3>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        {course.description}
                                    </p>
                                    <button
                                        className="text-base font-semibold tracking-tight text-white p-1 rounded bg-indigo-600 text-center mt-6"
                                        onClick={()=>{
                                            handleModal(course.discoverInfo)
                                        }}
                                    >
                                        Узнать подробности &rarr;
                                    </button>
                                    <p className="mt-6 text-base leading-7 text-amber-600">
                                        {course.time}
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">{course.featuresPhrase}</h4>
                                        <div className="h-px flex-auto bg-gray-100"/>
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                    >
                                        {course.includedFeatures.map((feature, key) => (
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
                                        className='relative shadow-md rounded-2xl overflow-hidden bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10 min-h-full'
                                        style={{backgroundColor: course.bgColor[0], backgroundImage: course.bgColor[1]}}
                                    >
                                        {/*<img alt="" src={course.bgImg} className='absolute w-full h-full object-cover -z-0 -mt-10 lg:-mt-0 filter blur-sm'/>*/}
                                        {/*HERE ISSUE WITH IMG ON MOBILE*/}
                                        <div className="mx-auto max-w-xs px-8 z-10">
                                            <p className="text-base font-semibold text-gray-600">
                                                {course.discoverInfo.type}
                                                {course.discoverInfo.oldPrice &&
                                                    <span className='ml-2 p-0.5 bg-orange-600 text-white rounded'>
                                                {course.discoverInfo.oldPrice[0]}
                                            </span>}
                                            </p>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                {course.discoverInfo.oldPrice && <p
                                                    className="text-xl font-bold tracking-tight text-orange-500 line-through">
                                                    {course.discoverInfo.oldPrice[1]['ru']}
                                                </p>}
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                                    {course.discoverInfo.price['ru'][0]}
                                                </span>
                                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                                    {course.discoverInfo.price['ru'][1]}
                                                </span>
                                            </p>
                                            <a
                                                href="#"
                                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                {course.discoverInfo.buttonLabel}
                                            </a>
                                            <p className="mt-6 text-xs leading-5 text-gray-600">
                                                {course.underPriceDescription}
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