import React, {useEffect, useState} from 'react';
import {CheckIcon} from '@heroicons/react/20/solid'
import {getCourses} from "../../utils/getCourses";
import ModalBuyer from "../UI/Modals/ModalBuyer";
import Badges from "../UI/Badges/Badges";
import {Transition} from "@headlessui/react";
import {useLocation} from "react-router-dom";
import BackImage from "../UI/BackImage/BackImage";
import Headler from "../UI/Headler/Headler";


const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    const [modalInfo, setModalInfo] = useState({})
    const [showModal, setShowModal] = useState(false)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        scrollToSection(queryParams.get('jump'))
    }, [courses])

    const handleModal = (modalContent) => {
        setModalInfo(modalContent)
        setShowModal(prevState => !prevState);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
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
            <ModalBuyer description={modalInfo} trigger={showModal} onHide={() => setShowModal(false)}/>
            <div className="bg-indigo-950 py-24 sm:py-32 relative">
                <BackImage
                    image='https://cdn.discordapp.com/attachments/1150445325451006104/1150756998783180910/01Rstbc8dUJ3qbK-ypDsm.jpg'/>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10"
                     style={{zIndex: 1}}
                >
                    <Headler
                        title='Курсы по обучению'
                        description='Каждый из пройденных курсов включает в себя от 8 до 24 часов занятий, профессиональное
                            курирование преподавателя, а также аккредитованный сертификат по окончанию прохождения.
                            Ознакомьтесь с каждым из них!'
                        opacityVal='.5'
                    />
                    <div className="mt-10 flex items-center">
                        <div className="h-px flex-auto bg-gray-50/75"/>
                    </div>
                    {courses.map((course, key) => {
                        return (
                            <div
                                key={key}
                                id={course.id}
                                className={`bg-white/90 shadow-2xl mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none flex-col ${(key + 1) % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(229,231,235,.9) 0%, rgba(255,255,255,.9) 20%)',
                                }}
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
                                        onClick={() => {
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
                                                <span
                                                    className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
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