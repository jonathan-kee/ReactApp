// NO NEEDED TO PUT SCRIPT TAG IN JSX FOR REACT, JUST IMPORT BOOTSTRAP BELOW
// Need to import bootstrap.min.js for phone nav bar to work, however...
// gh pages was not friendly to bootstrap.min.js, need to use cdn to work
// import './assets/bootstrap/js/bootstrap.min.js';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome.min.css';
import './assets/fonts/simple-line-icons.min.css';
// This import will compile error
// import newAge from './assets/js/new-age.js'

import googlePlay from './assets/img/google-play-badge.svg';
import iphone from './assets/img/iphone_6_plus_white_port.png';
import appStore from './assets/img/app-store-badge.svg';
import demoScreen from './assets/img/demo-screen-1.jpg';
import backgroundCta from './assets/img/bg-cta.jpg';
import backgroundPattern from './assets/img/bg-pattern.png';

function LandingPage(){
    return (<>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <title>Home - Brand</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli&display=swap"
        />
        
        <nav className="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              Brand
            </a>
            <button
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              className="navbar-toggler float-end"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#download">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header
          className="masthead"
          style={{
            background:
              `url(${backgroundPattern}), linear-gradient(to left, #7b4397, #dc2430)` 
          }}
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="mx-auto header-content">
                  <h1 className="mb-5">Hit download button to download an image!</h1>
                  <a
                    className="btn btn-outline-warning btn-xl"
                    role="button"
                    href={demoScreen}
                    download=""
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="col-lg-5 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div
                      className="device"
                      style={{
                        backgroundImage:
                        `url(${iphone})` 
                      }}
                    >
                      <div className="screen">
                        <img
                          className="img-fluid"
                          src={demoScreen}
                        />
                      </div>
                      <div className="button" />
                    </div>
                  </div>
                </div>
                <div className="iphone-mockup" />
              </div>
            </div>
          </div>
        </header>
        <section className="text-center bg-primary download" id="download">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">
                  Discover what all the buzz is about!
                </h2>
                <p>
                  Our app is available on any mobile device! Download now to get
                  started!
                </p>
                <div className="badges">
                  <a className="badge-link" href="#">
                    <img src={googlePlay} />
                  </a>
                  <a className="badge-link" href="#">
                    <img src={appStore} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div className="container">
            <div className="text-center section-heading">
              <h2>Unlimited Features, Unlimited Fun</h2>
              <p className="text-muted">
                Check out what you can do with this app theme!
              </p>
              <hr />
            </div>
            <div className="row">
              <div className="col-lg-4 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div
                      className="device"
                      style={{
                        backgroundImage:
                        `url(${iphone})`
                      }}
                    >
                      <div className="screen">
                        <img
                          className="img-fluid"
                          src={demoScreen}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 my-auto">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-screen-smartphone text-primary" />
                        <h3>Device Mockups</h3>
                        <p className="text-muted">
                          Put an image, video, animation, or anything else in the
                          screen!
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-camera text-primary" />
                        <h3>Flexible Use</h3>
                        <p className="text-muted">
                          Put an image, video, animation, or anything else in the
                          screen!
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-present text-primary" />
                        <h3>Free to Use</h3>
                        <p className="text-muted">
                          As always, this theme is free to download and use for any
                          purpose!
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-lock-open text-primary" />
                        <h3>Open Source</h3>
                        <p className="text-muted">
                          Since this theme is MIT licensed, you can use it
                          commercially!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="cta"
          style={{ backgroundImage: `url(${backgroundCta})`}}
        >
          <div className="cta-content">
            <div className="container">
              <h2>
                Stop waiting.
                <br />
                Start building.
                <br />
              </h2>
              <a
                className="btn btn-outline-warning btn-xl"
                role="button"
                href="#contact"
              >
                Let's Get Started!
              </a>
            </div>
          </div>
          <div className="overlay" />
        </section>
        <section className="bg-primary contact" id="contact">
          <div className="container">
            <h2>
              <span>We&nbsp;</span>
              <i className="fa fa-heart" />
              <span>&nbsp;new friends!</span>
            </h2>
            <ul className="list-inline list-social">
              <li className="list-inline-item social-twitter">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item social-facebook">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item social-google-plus">
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <div className="container">
            <p>©&nbsp;Brand 2022. All Rights Reserved.</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </footer>
      </>
      );
}

export default LandingPage;