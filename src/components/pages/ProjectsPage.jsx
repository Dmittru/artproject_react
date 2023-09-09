import React, {useEffect, useState} from 'react';
import {Transition} from "@headlessui/react";
import ProjectCards from "../UI/ProjectCards/ProjectCards";
import {getCards} from "../../utils/getCards";

const ProjectsPage = () => {
    const [anim, setAnim] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(() => setAnim(true), [])

    useEffect(() => {
        const fetchData = async () => {
            const coursesFetch = await getCards()
            setCards(coursesFetch);
        };
        fetchData().catch(console.error);
    }, []);
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    {!anim && <div className='py-20'/>}
                    <Transition
                        show={anim}
                        enter='transform transition ease-in-out duration-500 sm:duration-700'
                        enterFrom='-translate-y-8 opacity-0'
                        enterTo='translate-y-0 opacity-1'
                        leave='transform transition ease-in-out duration-500 sm:duration-700'
                        leaveFrom='translate-y-0 opacity-1'
                        leaveTo='-translate-y-8 opacity-0'
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Проекты
                            нашей студии</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                            Ознакомьтесь с нашими проектами и прилагающимся к ним курсам, и если вам понравится, то
                            переходите к подробному описанию.
                        </p>
                    </Transition>
                </div>
                <div className="mt-10 flex items-center">
                    <div className="h-px flex-auto bg-gray-300"/>
                </div>
            </div>
            {/*    CONTENT*/}
            {cards && <ProjectCards cards={cards}/>}

        </div>
    );
};

export default ProjectsPage;