import React from 'react'

const Navbar = ({dark , changeTheme}) => {
  return (
    <nav className={dark ? "navbar bg-dark " : "navbar bg-light "}>
    <div className="container-fluid">
      <span className={dark ? "navbar-brand mb-0 h1 text-light " : "navbar-brand mb-0 h1 text-dark "}>EXPENSE MANAGER</span>
      <span className="navbar-brand mb-0 h1 text-light ">
          <button className="btn btn-dark btn-outline-light rounded-0" onClick={()=>changeTheme()}>{dark ? "Light Mode" : "Dark Mode" }</button>

          
      </span>
    </div>
  </nav>
  )
}

export default Navbar
