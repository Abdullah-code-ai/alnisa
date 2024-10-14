import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/logo.png'
// import Button from './Button'
const Navbar = () => {
  return (
   <>
   
   <nav className="navbar navbar-dark navbar-expand-lg text-light   nav">
    {/*  bg-light */}
        <div className="container-fluid">
          <a className="navbar-brand " href="#a">
          <img src={logo} alt="" width={200} />
          
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/About'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Pricing'>Pricing</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to='/Noorani-Qaida'>Noorani Qaida</Link></li>
                  <li><Link className="dropdown-item" to='/Quran-recitation-online'>Online Quran Recitation Course</Link></li>
                 
                  <li><Link className="dropdown-item" to='/Online-Quran-Memorization'>Online Quran Memorization</Link></li>

                  <li><Link className="dropdown-item" to='/Tafseer'> Online Quran Tafseer</Link></li>
                  <li><Link className="dropdown-item" to='/Quran-with-Tajweed'> Quran with Tajweed</Link></li>
                  <li><Link className="dropdown-item" to='/Quran-Translation'>Online Quran Translation</Link></li>

                  
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to='/Blogs'>Blogs</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to='/Contact'>Contact Us</Link>
              </li>
              
            </ul>
           <div className="d-flex me-5"></div>
          </div>
        </div>
      </nav>

   
   {/* <Button /> */}
   
   
   
   
   
   </>
  )
}

export default Navbar
