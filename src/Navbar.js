import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navBar">
            <h1>Prodigy Hires</h1>
            <div className="links">
                <a href="/">Home</a>
                <span> | </span>
                <a href="/SignIn">Sign In</a>
                <span></span>
                <a href="/Register">Register</a>
            </div>
        </nav>
    )
}

export default Navbar;