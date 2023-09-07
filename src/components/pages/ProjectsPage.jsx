import React, {useEffect, useState} from 'react';
import {Transition} from "@headlessui/react";

const ProjectsPage = () => {
    const [anim, setAnim] = useState(false)

    useEffect(() => setAnim(true), [])
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
            <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-32 sm:pb-24 xl:pb-0">
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                        <div
                            className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
                <div
                    className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                    <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                        <div className="relative h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                            <img
                                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                        <figure className="relative isolate pt-6 sm:pt-12">
                            <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                <p>
                                    Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc
                                    suscipit
                                    tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget
                                    tellus non nibh
                                    scelerisque bibendum.
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 text-base">
                                <div className="font-semibold text-white">Judith Black</div>
                                <div className="mt-1 text-gray-400">CEO of Tuple</div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;