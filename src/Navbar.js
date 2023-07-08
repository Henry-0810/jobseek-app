import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navBar">
            <h1>Prodigy Hires</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/SignIn">Sign In</a>
                <a href="/SignUp">Sign Up</a>
            </div>
        </nav>
    )
}

export default Navbar;