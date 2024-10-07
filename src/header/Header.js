import { useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
    const selector = useSelector((store)=>store.role.currentRole)
    const path = useLocation()
    const pathName = path.pathname;
    
    return(
        <div>
            <h1 className="font-bold text-3xl flex justify-center mb-5">Defect Tracker</h1>
            <div className='flex flex-row justify-around'>{selector === 'Tester' && 
                <Link to="/add">
                    <h1 className={`${pathName === "/add" ? "hidden" : "flex"}`}>Add defects</h1>
                </Link>
            }
            {
                pathName === '/add' && <Link to="/home"><h1 className='flex w-full  pb-2'>View defects</h1></Link>
            }
            <Link to="/">Logout</Link></div>
        </div>
    )
}

export default Header;