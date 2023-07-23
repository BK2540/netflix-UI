import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false); //function to check on scroll or not

    window.onscroll = () => {
        setIsScroll(window.pageYOffset === 0 ? false : true); //if on scroll set isScroll to true
        return () => (window.onscroll = null);
    };

  return (
    //funcion for change bg of navbar while scrolling
    <div className={isScroll ? 'navbar scroll' : 'navbar'}>  
        <div className="container">
            <div className="left">
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
                    alt='logo'
                />

                <Link to ="/" className='link'>
                    <span>Homepage</span>
                </Link>
                <Link to ="/series" className='link'>
                    <span>TV Shows</span>
                </Link>
                <Link to ="/movies" className='link'>
                    <span>Movies</span>
                </Link>              
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications  className='icon'/>
                <img 
                    src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="user" 
                />

                <div className="profile">
                    <ArrowDropDown  className='icon'/>
                    <div className="options">
                        <span>Setting</span>
                        <span>Log Out</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar