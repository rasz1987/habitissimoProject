import React from 'react';

const Menu = (props) => {

  const { options } = props
  
  const list = options.map(opt => {

    return (
      <li key={opt} className="nav-item">
        <a className="nav-link" href="#">{opt}</a>
      </li>
    )
  })

  return (
    <div className="secondary-navbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav justify-content-between">
            {list}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu
