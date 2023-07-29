import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <nav>
      <div className='nav-right'>
        {user ? (
          <button onClick={() => signOut(getAuth())}>Log Out</button>
        ) : (
          <button onClick={() => navigate('/login')}>Log In</button>
        )}
      </div>

      <button className='mobile-menu-button' onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-links ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
