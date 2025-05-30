import { Link } from 'react-router-dom';

const ListItem = ({ to, icon, label, collapsed, isActive})=>{
    const baseClass = 'flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white'
    const activeClass = isActive ? 'bg-[#517666]' : 'hover:bg-white hover:text-[#36785c]'

    return (
        <li>
            <Link to={to} className={`${baseClass} ${activeClass}`}>
                {icon}
                {!collapsed && label}
            </Link>
        </li>
    )
}

export default ListItem;