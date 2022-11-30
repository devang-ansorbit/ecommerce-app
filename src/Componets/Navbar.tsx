import '../module.css'
import CartSvg from '../svg/CartSvg'
import UserSvg from '../svg/UserSvg';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="flex w-11/12 m-auto border justify-between">
            <div className="flex-none w-1/5 h-14 border">
                <h1 id='navbar_title'>SajuGuru</h1>
            </div>
            <div className="flex w-2/4 h-14 border justify-between p-3">
                <h3>Home</h3>
                <h3>Contact</h3>
                <h3>About</h3>
                <h3>Contact</h3>
                <h3>Blog</h3>
                <h3>Document</h3>
            </div>
            <div className="flex w-20 h-14 border justify-evenly items-center">
                <div>
                    <Link to='/cart'>
                        <CartSvg style={{ width: '20px', height: '20px' }} />
                    </Link>
                </div>
                <div>
                    <UserSvg style={{ width: '20px', height: '20px' }} />
                </div>
            </div>
        </div>
    )
}
export default Navbar