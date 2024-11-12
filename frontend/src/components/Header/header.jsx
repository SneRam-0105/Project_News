import './header.css'
import logo from '../../assets/LOGO.png'

function Header() {
    return (
        <div className="headerbar">


            <div className="logo">
                <img src={logo} alt="EduNews Logo" />

            </div>
            <div className="nav-links">
                <a href="#">Information-Technology</a>
                <a href="#">Business</a>
                <a href="#">Education</a>
            </div>
            <div className="login">LOGIN</div>
        </div>



    )
}

export default Header;