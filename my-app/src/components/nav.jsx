import logo from './ironhackLogo'
import menu from './navMenuIcon'

function Nav() {
    return (
        <div className='navBar'>
            <img src={logo} className="logo" alt="logo" />
            <img src={menu} alt="menu" />
            
        </div>

    )
}

export default Nav