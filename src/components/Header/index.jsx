import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector(state => state.user);
    return (
        <header>
            <nav className="main-nav">
                {user}
                <Link className="main-nav-logo" to="/">
                    <img
                    data-testid="header-image-testid"
                    className="main-nav-logo-image"
                    src={process.env.PUBLIC_URL + '/assets/img/argentBankLogo.png'}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header