import React from 'react';
import vibeon from '../assets/vibeon.png'
import person from '../assets/person.svg'
import dashboard_icon from '../assets/dashboard_icon.svg'
import list_icon from '../assets/list_icon.svg'
import piggybank from '../assets/piggybank.svg'
import feedback from '../assets/feedback.svg'
import logout from '../assets/logout.svg'

const Sidebar = () => {
    return (
        <div className="w-1/3 bg-gray-100 text-white" style={{ height: '800px', width:'50% !important' }}>
            <div className="mt-4">
                <div className="flex"><img className="mx-auto" src={vibeon}/></div>
                <nav className="flex flex-col mt-5">
                    <a href="#" className="flex items-center p-4 mx-4 border rounded border-gray-100 text-blue-600 hover:bg-gray-200">
                        <img src={dashboard_icon} alt="Главен панел" className="w-4 h-4 mr-2" />
                        <span>Главен панел</span>
                    </a>
                    <a href="#" className="flex items-center p-4 mx-4 border rounded border-gray-100 text-blue-600 hover:bg-gray-200">
                        <img src={person} alt="Мој профил" className="w-4 h-4 mr-2" />
                        <span>Мој профил</span>
                    </a>
                    <a href="#" className="flex items-center p-4 mx-4 border rounded border-gray-100 text-blue-600 hover:bg-gray-200">
                        <img src={list_icon} alt="Курсеви" className="w-4 h-4 mr-2" />
                        <span>Курсеви</span>
                    </a>
                    <a href="#" className="flex items-center p-4 mx-4 border rounded border-gray-100 text-blue-600 hover:bg-gray-200">
                        <img src={piggybank} alt="Штедомер" className="w-4 h-4 mr-2" />
                        <span>Штедомер</span>
                    </a>
                </nav>
            </div>

            <div className="mt-60">
                <nav className="flex flex-col">
                    <a href="#" className="flex items-center p-4 mx-4 border rounded border-gray-100 text-blue-600 hover:bg-gray-200">
                        <img src={feedback} alt="Фидбек" className="w-4 h-4 mr-2" />
                        <span>Фидбек</span>
                    </a>
                    <a href="#" className="flex items-center p-4 mx-4 border rounded border-gray-100 text-blue-600 hover:bg-gray-200">
                        <img src={logout} alt="Одјави се" className="w-4 h-4 mr-2" />
                        <span>Одјави се</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
