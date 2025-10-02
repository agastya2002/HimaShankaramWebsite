import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <section id="footer">
        <div className="container scroll">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><Link to="/home"><i className="fa fa-angle-double-right"></i>Home</Link></li>
                <li><Link to="/gallery"><i className="fa fa-angle-double-right"></i>Gallery</Link></li>
                <li><Link to="/vision"><i className="fa fa-angle-double-right"></i>Vision</Link></li>
                <li><Link to="/trustees"><i className="fa fa-angle-double-right"></i>Trustees</Link></li>
                <li><Link to="/contact"><i className="fa fa-angle-double-right"></i>Contact</Link></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <h5>About</h5>
              <span className="about-body">Hima Shankaram Charitable Trust is based in Visakhapatnam, Andhra Pradesh, India</span>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href=""><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href=""><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href=""><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
            <hr />
          </div>  
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
              <p className="h6">© All right Reversed.</p>
            </div>
            <hr />
          </div>  
        </div>
      </section>
    </div>
  )
}

export default Footer
