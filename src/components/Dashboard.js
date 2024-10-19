import React, { useState } from 'react';
import checkIcon from '../assets/checkIcon.svg';
import book from '../assets/book.svg';
import book2 from '../assets/book2.svg';
import clock from '../assets/clock.svg';
import badge from '../assets/badge.png';
import person from '../assets/person.png';
import arrow from '../assets/arrow.svg';
import info from '../assets/info.svg';
import badge_logged_in from '../assets/badge_logged_in.png'
function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cards = [
        { id: 1, lecturesTotal: 'Вкупно лекции', lecturesRemaining: 'Преостанати лекции', averageTime: '25 минути' },
        { id: 2, lecturesTotal: 'Вкупно лекции', lecturesRemaining: 'Преостанати лекции', averageTime: '30 минути' },
        { id: 3, lecturesTotal: 'Вкупно лекции', lecturesRemaining: 'Преостанати лекции', averageTime: '20 минути' },
    ];
    const second_cards = [
        { id: 1, cardText: 'Курсеви во тек.', textColor: 'text-orange-600','number': 3 },
        { id: 2, cardText: 'Завршени курсеви.', textColor: 'text-blue-600','number': 5 },
        { id: 3, cardText: 'Поминато време на учење.', textColor: 'text-red-600','number': 2 },
        { id: 4, cardText: 'Освоени беџови.', textColor: 'text-green-600', 'number': 1 },
        { id: 5, cardText: 'Потребни курсеви за следен беџ.', textColor: 'text-teal-600','number': 4 },
    ];
    const daysOfWeek = ['П', 'В', 'С', 'Ч', 'П', 'С', 'Н'];

    return (
        <div className="mx-auto px-10">
            <div className="bg-gray-100 ">
                <div className="welcome-section flex justify-between">
                    <h1 className='text-6xl font-bold p-10'>Добредојде, {isLoggedIn ? 'назад,' : ''}Томи!</h1>
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-500 text-white p-4 rounded-lg">
                            <p>
                                Твојата финансиска иднина започнува <br />тука! За почеток, избравме курсеви<br />
                                според твоите интереси.
                            </p>
                        </div>
                        <img src={person} alt="Person" />
                    </div>
                </div>
                <section className="mt-10 p-3">
                    {isLoggedIn ? (
                        <div className="p-6 ">
                            <p className="text-xl font-semibold">Продолжи каде што застана:</p>

                            <div className="bg-white mt-5 p-5 border rounded">
                                <div className="flex items-center space-x-2 mb-4">
                                    <img src={checkIcon} alt="Check Icon" className="w-6 h-6" />
                                    <p className="text-l font-bold">Лична финансиска гимнастика</p>
                                </div>
                                <p>Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.</p>
                                <div className="flex mt-20 mb-1 text-base font-medium text-blue-700 dark:text-blue-500"><p className="ml-auto">40%</p></div>
                                <div className="relative w-full bg-gray-400 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                                    <div className="bg-orange-300 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                    <div className="absolute -top-1 left-[40%] w-5 h-5 bg-white border-4 border-blue-600 rounded-full transform -translate-x-1/2"></div>
                                </div>

                                <div className="flex">
                                    <div className="flex items-center">
                                        <img src={book} alt="Book Icon" className="w-5 h-5" />
                                        <p className="font-medium">{cards[0].lecturesTotal} : 6</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={book2} alt="Book Icon 2" className="w-5 h-5" />
                                        <p className="font-small">{cards[0].lecturesRemaining} : 0</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={clock} alt="Clock Icon" />
                                        <p>Просечно време на читање: {cards[0].averageTime}</p>
                                    </div>     
                                </div>
                                <button className="mt-5 bg-green-600 text-white py-2 px-4 border hover:border-transparent rounded">Продолжи курс</button>
                            </div>
                        </div>
                        ) : (
                            <>
                                <h1 className="text-2xl font-bold mb-4">Препорачано за тебе:</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {cards.map((card) => (
                                        <div key={card.id} className="bg-white p-6 rounded-lg shadow-md">
                                            <div className="flex items-center space-x-2 mb-4">
                                                <img src={checkIcon} alt="Check Icon" className="w-6 h-6" />
                                                <h2 className="font-bold text-lg">Лична финансиска гимнастика</h2>
                                            </div>
                                            <div className="flex mb-4">
                                                <div className="flex items-center">
                                                    <img src={book} alt="Book Icon" className="w-5 h-5" />
                                                    <p className="font-medium">{card.lecturesTotal} : 6</p>
                                                </div>
                                                <div className="flex items-center ms-4 space-x-2">
                                                    <img src={book2} alt="Book Icon 2" className="w-5 h-5" />
                                                    <p className="font-medium">{card.lecturesRemaining} : 0</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 mb-4">
                                                <img src={clock} />
                                                <p>Просечно време на читање: {card.averageTime}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <button className="bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded">
                                                    Брз преглед
                                                </button>
                                                <button className="bg-green-500 text-white px-4 py-2 rounded">Започни сега</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                
                            </>
                        )}
                </section>
                <div className="flex items-center justify-center mt-4 mb-4">
                    <button className="flex bg-orange-600 text-white px-3 py-2 mb-5 rounded">
                        Разгледај повеќе <img className="ms-2 mt-1" src={arrow} />
                    </button>
                </div>
            </div>
            <div className="flex justify-between mt-4 mb-4 space-x-5">
                <div className="bg-gray-100 flex flex-col w-1/6 h-48 border rounded-lg p-4">
                    <div className="ms-auto"><img src={info} /></div>
                    <img src={isLoggedIn ? badge_logged_in : badge} className="h-5/6" />
                    </div>
                {second_cards.map(card => (
                    <div key={card.id} className="bg-gray-100 flex flex-col items-start justify-between w-1/6 h-48 border rounded-lg p-4">
                        <div className={`${card.textColor} text-lg`}>{card.cardText}</div>
                        <div className="flex items-center justify-between w-full mt-auto">
                            <h1 className={`${card.textColor} text-4xl font-bold`}>|</h1>
                            <h1 className={`${card.textColor} text-4xl font-bold`}> {isLoggedIn ? card.number : 0}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-10 space-x-10 mb-10">
                <div className="bg-gray-100 flex flex-col w-1/3 h-96 border rounded-lg p-4">
                    <h1 className="text-3xl font-bold">Планирај ја твојата<br />патека на учење</h1>
                    <p className="mt-8">Определи го твоето време за учење и почни да<br />ја градиш твојата финансиска иднина со<br />твое темпо.</p>
                    <div>
                        <button className="mt-8 flex bg-teal-600 w-1/2 text-white px-3 py-2 rounded">
                            Избери време <img className="ms-8 mt-1" src={arrow} />
                        </button>
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-col w-1/3 h-96 border rounded-lg p-4">
                    <h1 className="text-3xl font-bold">Твојата неделна<br />активност</h1>
                    <p className="pt-8">Приказ на твојата неделна активност</p>
                    <div className="flex flex-col mt-auto items-center">
                        <div className="flex justify-between w-full max-w-xl">
                            {daysOfWeek.map((day, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center"></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between w-full max-w-xl mt-2">
                            {daysOfWeek.map((_, index) => (
                                <div key={index} className="flex justify-center ">
                                    <span>{daysOfWeek[index]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 flex flex-col w-1/3 h-96 border rounded-lg p-4">
                    <h1 className="text-3xl font-bold">Штедомер</h1>
                    <p className="mt-16 pb-5">Штедомерот е алатка што пресметува заштеда<br />според приходи и трошоци и нуди совети за<br />постигнување финансиски цели.</p>
                    <div>
                        <button className="mt-4 flex bg-purple-900 w-1/2 text-white px-3 py-2 rounded">
                            Избери време <img className="ms-8 mt-1" src={arrow} />
                        </button>
                    </div>
                </div>
            </div>
        <div>
            <div className="bg-gray-200 p-7">
                <h1 className="text-4xl font-bold.">Твоите курсеви</h1>
                <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card) => (
                        <div key={card.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center space-x-2 mb-4">
                                <img src={checkIcon} alt="Check Icon" className="w-6 h-6" />
                                <h2 className="font-bold text-lg">Лична финансиска гимнастика</h2>
                            </div>
                            <p>Научи ги основите на управувањето со пари – буџетирање, штедење и трошење, така што ќе си ја подобриш финансиската кондиција.</p>
                      
                            <div className="flex mt-10 mb-1 text-base font-medium text-black-700 dark:text-black-500"><p className="ml-auto">35%</p></div>
                            <div className="relative w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div className="bg-green-400 h-2 rounded-full" style={{ width: '35%' }}></div>
                            </div>  
                            <div className="flex mb-4">
                                <div className="flex items-center space-x-2">
                                    <img src={book} alt="Book Icon" className="w-5 h-5" />
                                    <p className="font-medium">{card.lecturesTotal} : 6</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src={book2} alt="Book Icon 2" className="w-5 h-5" />
                                    <p className="font-medium">{card.lecturesRemaining} : 0</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <img src={clock} />
                                <p>Просечно време на читање: {card.averageTime}</p>
                            </div>
                        
                            <div className="flex mt-10 justify-between">
                                <button className="bg-transparent hover:bg-gray-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded">
                                 Брз преглед
                                </button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded">Продолжи курс</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
