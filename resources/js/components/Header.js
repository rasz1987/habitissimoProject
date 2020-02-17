import React from 'react'

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="#" title="habitissimo - Reformas y Servicios para el Hogar" >
          <img src="https://es.habcdn.com/static/img/web-logo.2x.png" alt="habitissimo" title="habitissimo - Reformas y Servicios para el Hogar" height="35" width="250" />
        </a>

        <div className="navbar-right">
          <img type="image/svg+xml" className="visible-lg" src="https://es.habcdn.com/static/img/small-pro-contacta.svg" width="100" height="100" />
          
          <p className="t-sm text-semibold hidden">
            ¿Eres un autónomo o tienes una empresa y quieres conseguir más clientes?
          </p>
          <a className="btn btn-lg btn-secondary reg-btn" href="#">
            ¡Regístrate gratis!
          </a>
        </div>
      </nav>
    </div>
    
        
           
            
                    
                     
                
        
  )
}

export default Header
