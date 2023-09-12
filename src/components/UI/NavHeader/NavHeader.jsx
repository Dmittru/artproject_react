import React, {useState} from 'react';
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import '../../styles/NavHeader.css'
import icon from './icons8-dailyart-50.png';
import {Link} from "react-router-dom";
import LoginLayout from "../LoginLayout/LoginLayout";

const NavHeader = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [loginHide, setLoginHide] = useState(false);
    const loginHandler = () => {
        setLoginHide(prevState => !prevState)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const navigation = [
        {name: 'Главная', href: '/'},
        {name: 'Галерея', href: '/gallery'},
        {name: 'Проекты', href: '/projects'},
        {name: 'Курсы', href: '/courses'},
    ]

    return (
        <>
            {loginHide && <LoginLayout onHide={loginHandler} visible={loginHide}/>}
            <header className="group border-[1px] border-gray-700 bg-gray-900 z-30 fixed -top-14 hover:top-0 transition-all duration-300 w-1/2 left-1/2 transform -translate-x-1/2 rounded-b-2xl">
                <nav className="opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex flex-1">
                        <div className="hidden lg:flex lg:gap-x-4">
                            {navigation.map((item,key) => (
                                <Link key={key}
                                      onClick={()=>scrollToTop()}
                                      to={item.href}
                                      className="text-sm font-semibold leading-6 text-gray-200">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                    <Link to='/' className="-m-1.5 p-0">
                        <span className="sr-only">Your Company</span>
                        {/*ADD COMP NAME*/}
                        <img className="h-12 w-auto"
                             src={icon} alt="Logo"/>
                    </Link>
                    <div className="flex flex-1 justify-end">
                        <button
                            className="text-sm font-semibold leading-6 text-gray-200"
                            onClick={() => {
                                loginHandler();
                            }}
                        >
                            Войти <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10"/>
                    <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-1">
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Закрыть меню</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <Link to='/' className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                {/*ADD COMP NAME*/}
                                <img
                                    className="h-8 w-auto"
                                    src={icon}
                                    alt="Logo"
                                />
                            </Link>
                            <div className="flex flex-1 justify-end">
                                <button
                                    className="text-sm font-semibold leading-6 text-gray-200"
                                    onClick={() => {
                                        loginHandler();
                                    }}
                                >
                                    Войти <span aria-hidden="true">&rarr;</span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 space-y-2">
                            {navigation.map((item,key) => (
                                <Link
                                    key={key}
                                    to={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        {/*AFTER CLICK IN MOBILE ADD CLOSE MENU AND MAY ADD FUNC AUTOMIZER WHEN CLICK ON LINK IN MENU*/}

        </>
    );
};

export default NavHeader;