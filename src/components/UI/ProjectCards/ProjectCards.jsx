import React from 'react';
import {Link} from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Badges from "../Badges/Badges";

const ProjectCards = ({cards}) => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        return (
            <>
                {cards.length > 0 ? cards.map((card, key) => {
                        const gradientStyle = {
                            backgroundImage: `linear-gradient(to right, ${card.gradient[0]}, ${card.gradient[1]})`,
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        };
                        return (
                            <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-32 sm:pb-24 xl:pb-0" key={card.id}>
                                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                                    <div
                                        className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                                        <div
                                            className={`aspect-[1097/1023] w-[68.5625rem] opacity-25`}
                                            style={gradientStyle}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`mx-auto flex max-w-7xl flex-col  items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 ${(key + 1) % 2 === 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:items-stretch`}>
                                    <div
                                        className="xl:-mt-8 w-full h-[30rem] sm:h-[48rem] md:h-[52rem] mt-20 xl:h-auto max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                                        <div className="relative h-full md:-mx-8 xl:mx-0 ">
                                            <div
                                                className='absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-center shadow-2xl overflow-hidden'>
                                                <Carousel images={card.photos} duration={3}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                                        <h1 className='text-white font-semibold text-4xl leading-9 mt-16 xl:mt-0 flex flex-wrap'>
                                            {card.title} <span className='mt-2 md:mt-0 flex'><Badges badges={card.badges}/></span>
                                        </h1>
                                        <figure className="relative isolate pt-6 sm:pt-12">
                                            <blockquote
                                                className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                                <p>
                                                    {card.description}
                                                </p>
                                            </blockquote>
                                            <figcaption className="mt-8 text-base">
                                                <div className="mb-4 font-semibold text-white">{card.miniTitle}</div>
                                                <Link
                                                    to={`/courses?jump=${card.id}`}
                                                    onClick={() => scrollToTop()}
                                                    className="text-gray-50 rounded px-2 py-1 bg-indigo-900">
                                                    Ознакомиться &rarr;
                                                </Link>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                    <div className='mt-20 text-center'>
                        <h1 className='text-3xl font-semibold'>
                            У нас ещё нет примеров!
                        </h1>
                        <p className='text-xl mt-4'>
                            Вернитесь позже, либо сообщите нам об ошибке.
                        </p>
                    </div>
                }
            </>
        );
    }
;

export default ProjectCards;