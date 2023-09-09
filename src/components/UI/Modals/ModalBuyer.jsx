import React, {Fragment, useEffect, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import Badges from "../Badges/Badges";

export default function ModalBuyer({description, trigger, onHide}) {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState({})
    const [closing, setClosing] = useState(false);

    const cancelButtonRef = useRef(null)

    useEffect(() => {
        if (trigger) {
            setContent(description);
            setOpen(trigger);
        } else {
            setContent({});
            setClosing(true);
        }
    }, [trigger]);

    useEffect(() => {
        if (!open) {
            setTimeout(() => {
                onHide()
            }, 250);
        }
    }, [open])
    const closeAll = (state) => {
        setOpen(state)
        if (!closing) {
            onHide();
        }
    }

    const files = [
        {
            title: 'Ботанический сад',
            size: '12 часов',
            source:
                'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'Ботанический сад',
            size: '12 часов',
            source:
                'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'Ботанический сад',
            size: '12 часов',
            source:
                'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
        {
            title: 'Ботанический сад',
            size: '12 часов',
            source:
                'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        },
    ]

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeAll}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full lg:max-w-7xl">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3"
                                                          className="text-xl font-semibold leading-6 text-gray-900">
                                                {content.title}
                                                <Badges badges={content.badges}/>
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className='mt-4'>
                                                    <div className="mx-auto max-w-7xl px-0 lg:px-0">
                                                        <div
                                                            className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                                                            {content.timeline && content.timeline.map((item) => (
                                                                <div key={item.name}>
                                                                    <time
                                                                        dateTime={item.dateTime}
                                                                        className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                                                                    >
                                                                        <svg viewBox="0 0 4 4"
                                                                             className="mr-4 h-1 w-1 flex-none"
                                                                             aria-hidden="true">
                                                                            <circle cx={2} cy={2} r={2}
                                                                                    fill="currentColor"/>
                                                                        </svg>
                                                                        {item.date}
                                                                        <div
                                                                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </time>
                                                                    <p className="mt-1 text-lg font-semibold leading-6 tracking-tight text-gray-900">{item.name}</p>
                                                                    <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/*{SOME SHT}*/}
                                                    </div>
                                                </div>

                                                {/*{OTHERS}*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => closeAll(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Закрыть
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
