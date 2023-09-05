import React from 'react';
import {Link} from "react-router-dom";
import {faEnvelope, faShare} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faTiktok, faVk, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    const navigation = {
        main: [
            {name: 'О нас', href: '#'},
            {name: 'Блог', href: '#'},
            {name: 'Работа', href: '#'},
            {name: 'Нажмите', href: '#'},
            {name: 'Доступность', href: '#'},
            {name: 'Партнёры', href: '#'},
        ],
        social: [
            {
                name: 'VK',
                href: 'vk.com',
                icon: <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faVk}/>,
            },
            {
                name: 'Instagram',
                href: 'instagram.com',
                icon: <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faInstagram}/>,
            },
            {
                name: 'TikTok',
                href: 'tiktok.com',
                icon: <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faTiktok}/>,
            },
            {
                name: 'YouTube',
                href: 'youtube.com',
                icon: <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faYoutube}/>,
            },
            {
                name: 'Mail',
                href: 'gmail.com',
                icon: <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faEnvelope}/>,
            },
            {
                name: 'Share',
                href: 'this-site.com',
                icon: <FontAwesomeIcon className="h-6 w-6" aria-hidden="true" icon={faShare}/>,
            },
        ],
    }

    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            {item.icon}
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; {new Date().getFullYear()} Арт-Студия, Все права защищены
                </p>
            </div>
        </footer>
    );
};

export default Footer;