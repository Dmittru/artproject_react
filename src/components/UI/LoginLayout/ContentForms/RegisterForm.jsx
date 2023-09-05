import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = ({changer}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newIsCheked = !isChecked
        setIsChecked(newIsCheked);
        validateForm(email, password, passwordCheck, username, newIsCheked);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateForm(newEmail, password, passwordCheck, username, isChecked);
    };

    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setUsername(newUsername);
        validateForm(email, password, passwordCheck, newUsername, isChecked);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validateForm(email, newPassword, passwordCheck, username, isChecked);
    };

    const handlePasswordCheckChange = (e) => {
        const newPassword = e.target.value;
        setPasswordCheck(newPassword);
        validateForm(email, password, newPassword, username, isChecked);
    };

    const validateForm = (newEmail, newPassword, newPasswordCheck, newUsername, newIsChecked) => {
        setIsFormValid(newEmail.length > 0 &&
            newPassword.length > 0 && newPasswordCheck.length > 0 &&
            newPassword === newPasswordCheck &&
            newUsername.length > 0 &&
            newIsChecked
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, password, passwordCheck, isChecked, ' FORM STATUS:', isFormValid)
        // ADD ALERT AREAS WHERE ISNT GOOD VALUE
        console.log('Sign up...');
    }

    return (
        <>
            <p className="mt-2 text-sm leading-6 text-gray-500">
                Уже есть аккаунт?{' '}
                <button onClick={() => changer('login')}
                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Войти
                </button>
            </p>

            <div className="mt-2">
                <div>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="username"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Имя
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="name"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

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
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <FontAwesomeIcon
                                    icon={faEye}
                                    className='hover:cursor-pointer absolute right-0 h-6 mr-3'
                                    style={{top: '20%'}}
                                    onClick={() => {
                                        setShowPassword(prevState => !prevState)
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="passwordCheck"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Повторите пароль
                            </label>
                            <div className="mt-2 relative">
                                <input
                                    id="passwordCheck"
                                    name="passwordCheck"
                                    type={showPassword === false ? 'password' : 'text'}
                                    value={passwordCheck}
                                    onChange={handlePasswordCheckChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <input
                                    id="accept-policy"
                                    name="accept-policy"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                                />
                                <label htmlFor="accept-policy"
                                       className="ml-3 block text-sm leading-6 text-gray-700 cursor-pointer">
                                    Я согласен с правилами сервиса
                                    {/*    ADD POPUP WITH POLICY*/}
                                </label>
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
                                Зарегестрироваться
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
        //     PREVENT ERRORS SERVER LIKE ODD NICKNAMES ETC
        //     ADD GOOGLE AUTH & BTN
    );
};

export default RegisterForm;