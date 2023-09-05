import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({changer}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateForm(newEmail, password);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validateForm(email, newPassword);
    };

    const validateForm = (newEmail, newPassword) => {
        setIsFormValid(newEmail.length > 0 && newPassword.length > 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)

        // Perform your login logic here
        console.log('Logging in...');
    }

    return (
        <>
            <p className="mt-2 text-sm leading-6 text-gray-500">
                Всё ещё нет аккаунта?{' '}
                <button onClick={()=>changer('register')} className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Зарегистрироваться
                </button>
            </p>

            <div className="mt-10">
                <div>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Email адрес
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

                        <div>
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Пароль
                            </label>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword === false ? 'password' : 'text'}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <FontAwesomeIcon
                                    icon={faEye}
                                    className='hover:cursor-pointer absolute right-0 h-6 mr-3'
                                    style={{top:'20%'}}
                                    onClick={() => {
                                        setShowPassword(prevState => !prevState)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                                />
                                <label htmlFor="remember-me"
                                       className="ml-3 block text-sm leading-6 text-gray-700 cursor-pointer">
                                    Запомнить меня
                                </label>
                            </div>

                            <div className="text-sm leading-6">
                                <button onClick={()=>changer('reset')} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Забыли пароль?
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={(e) => {
                                    handleSubmit(e)
                                }}
                                disabled={!isFormValid}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:cursor-pointer hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginForm;