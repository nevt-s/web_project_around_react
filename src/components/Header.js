import HeaderLogo from '../images/header/logo/logo.png';

function Header(){
    return(
        <>
            <header className="header">
                <img src={HeaderLogo} alt="header logo" className="header__logo" />
            </header>
        </>
    )
}

export default Header;