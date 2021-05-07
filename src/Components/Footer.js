import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <div>
      <section id="footer">
        <div class="container scroll">
          <div class="row text-center text-xs-center text-sm-left text-md-left">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <h5>Quick links</h5>
              <ul class="list-unstyled quick-links">
                <li><a href="/home"><i class="fa fa-angle-double-right"></i>Home</a></li>
                <li><a href="/gallery"><i class="fa fa-angle-double-right"></i>Gallery</a></li>
                <li><a href="/vision"><i class="fa fa-angle-double-right"></i>Vision</a></li>
                <li><a href="/trustees"><i class="fa fa-angle-double-right"></i>Trustees</a></li>
                <li><a href="/contact"><i class="fa fa-angle-double-right"></i>Contact</a></li>
              </ul>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
              <h5>About</h5>
              <span class="about-body">Hima Shankaram Charitable Trust<br />is based in Visakhapatnam, Andhra Pradesh, India</span>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href=""><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="" target="_blank"><i class="fa fa-envelope"></i></a></li>
              </ul>
            </div>
            <hr />
          </div>  
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center">
              <p class="h6">© All right Reversed.</p>
            </div>
            <hr />
          </div>  
        </div>
      </section>
    </div>
  )
}

export default Footer
