import React, {useEffect, useState} from 'react';
import {Transition} from "@headlessui/react";
import ProjectCards from "../UI/ProjectCards/ProjectCards";
import {getCards} from "../../utils/getCards";
import BackImage from "../UI/BackImage/BackImage";
import Headler from "../UI/Headler/Headler";

const ProjectsPage = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const coursesFetch = await getCards()
            setCards(coursesFetch);
        };
        fetchData().catch(console.error);
    }, []);
    return (
        <div className="bg-gray-950 py-24 sm:py-32 relative">
            <BackImage
                image='https://cdn.discordapp.com/attachments/1150445325451006104/1150794613548916786/NEW2xLcce-6_GHQtsMHTly6Gold.jpg'/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Headler
                    title='Проекты нашей студии'
                    description='Ознакомьтесь с нашими проектами и прилагающимся к ним курсам, и если вам понравится, то
                    переходите к подробному описанию.'
                    opacityVal='.5'
                />
                <div className="mt-10 flex items-center relative"
                     style={{zIndex: 1}}
                >
                    <div className="h-px flex-auto bg-gray-50/75 rounded"/>
                </div>
            </div>
            {cards && <ProjectCards cards={cards}/>}
        </div>
    );
};

export default ProjectsPage;