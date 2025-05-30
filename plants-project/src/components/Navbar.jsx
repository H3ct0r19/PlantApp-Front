import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosInformationCircleOutline as About } from "react-icons/io";
import { RiPlantLine as Plant } from "react-icons/ri";
import { ListElement } from '../components'; 


const Navbar = () => {
const location = useLocation()
const [collapsed, setCollapsed] = useState(false)

const btnActive = (path) =>{
    return location.pathname === path ? true : false;
    }

const navLinks = [
    { to: '/', label: 'Home', icon: <GoHome size={20} /> },
    { to: '/plants', label: 'Plants', icon: <Plant size={20} /> },
    { to: '/about', label: 'About', icon: <About size={20} /> }
]

    return (
        <nav className={`h-full bg-[#355545] p-4 transition-all duration-300 flex flex-col ${ collapsed ? 'w-20' : 'w-64' }`}> 

            <div className={`mb-6 flex ${collapsed ? 'justify-center': 'justify-between'} items-center`}>
                {!collapsed && <h1 className="text-2xl font-bold text-white">PlantApp🌵</h1>}

                <button onClick={() => setCollapsed(!collapsed)} className="text-white text-xl p-2 hover:bg-white hover:text-[#36785c] rounded">
                    <FaBars/>
                </button>

            </div>

            <ul className="space-y-2">
                {navLinks.map(link => (
                    <ListElement 
                        key={link.to}
                        to={link.to}
                        icon={link.icon}
                        label={link.label}
                        collapsed={collapsed}
                        isActive={btnActive(link.to)}
                    />
                ))}
            </ul>
        </nav>
)
}

export default Navbar
