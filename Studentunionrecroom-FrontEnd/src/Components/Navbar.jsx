import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from '../pictures/1443ce62-849a-4887-90a7-4ab1b56a7c0e.jpg';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>University Student Union</h3>
			<img src={logo} alt="Logo"/>
			<nav ref={navRef}>
				<a href="/">Registration</a>
				<a href="/List">Check</a>
				<a href="/Prices">Prices</a>
				<a href="/Rules">Rules</a>
				<a href="https://asicsulb.org/corporate/enjoy/games-center">About us</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;