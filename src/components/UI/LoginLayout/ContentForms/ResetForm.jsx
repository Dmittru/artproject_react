import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const ResetForm = ({changer}) => {
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateForm(newEmail);
    };

    const validateForm = (newEmail) => {
        setIsFormValid(newEmail.length > 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform your login logic here
        console.log('resets...');
    }

    return (
        // <form className='flex flex-col items-center space-y-4 mb-10'>
        //     <div>
        //         <label className="block text-base text-gray-200 font-semibold">Email адрес</label>
        //         <input
        //             type='email'
        //             value={email}
        //             onChange={handleEmailChange}
        //             required
        //             className='max-w-md bg-gray-800 rounded-lg p-2 text-base outline-4 outline-gray-950'
        //         />{/*max w md maybe issue AND OUTLINE ERR*/}
        //     </div>
        //     <button
        //         type="submit"
        //         disabled={!isFormValid}
        //         className={`min-w-full ${isFormValid ? 'bg-sky-800' : 'bg-sky-950 hover:cursor-not-allowed'} rounded-lg p-2 text-base transition-all`}
        //         onClick={(e)=>{handleSubmit(e)}}
        //     >
        //         Отправить письмо
        //     </button>
        // </form>
        //     ADD ALL WAYS ANSWER FROM SERVER, CREATE SUCCESS FORM, PREVENT THROTT ON CLIENT & SERVER AND mAY ADD IS VALID EMAIL
        <>
            <p className="mt-2 text-sm leading-6 text-gray-500 space-x-2">
                <button onClick={() => changer('login')}
                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Вход
                </button>
                <span>&middot;</span>
                <button onClick={() => changer('register')}
                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Регистрация
                </button>
            </p>

            <div className="mt-6">
                <div>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Email адрес аккаунта
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/*<div className="flex items-center justify-between">*/}
                            {/*<div className="flex items-center">*/}
                            {/*    <input*/}
                            {/*        id="remember-me"*/}
                            {/*        name="remember-me"*/}
                            {/*        type="checkbox"*/}
                            {/*        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"*/}
                            {/*    />*/}
                            {/*    <label htmlFor="remember-me"*/}
                            {/*           className="ml-3 block text-sm leading-6 text-gray-700 cursor-pointer">*/}
                            {/*        Запомнить меня*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*CAPTCHA HERE*/}

                        <div>
                            <button
                                type="submit"
                                onClick={(e) => {
                                    handleSubmit(e)
                                }}
                                disabled={!isFormValid}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:cursor-pointer hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Отправить письмо
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResetForm;