import React, { Component } from "react";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <nav id="nav-wrap" className="navbar navbar-expand-sm justify-content-center">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Order
              </a>
            </li>
          </ul>
        </nav>

      <div className="banner" stype={{top:"1px"}}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{height: "400px", width: "100%", position: "relative"}}>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="images/cakes/01.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="cakeTitle">Fruit Cake</h5>
                  <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>

          <div className="carousel-item">
          <img src="images/cakes/02.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="cakeTitle">Butterscotch Cake</h5>
                <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>
    
          <div className="carousel-item">
              <img src="/images/cakes/03.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              <h5 className="cakeTitle">Bisc Choco Cake</h5>
              <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>
          <div className="carousel-item">
          <img src="/images/cakes/05.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="cakeTitle">Pineapple Cake</h5>
                <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>
    
          <div className="carousel-item">
              <img src="/images/cakes/06.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              <h5 className="cakeTitle">Red Velvet Cake</h5>
              <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>

          <div className="carousel-item active">
            <img src="/images/cakes/07.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="cakeTitle">Strawberry Cake</h5>
                  <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>

          <div className="carousel-item">
          <img src="/images/cakes/08.jpg" style={{textAlign : "center", width :"50%", height: "760px"}} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="cakeTitle">Blueberry Cake</h5>
                <p className="cakeDesc">From Rs. 400.00 - Rs. 800.00</p>
              </div>
          </div>
         </div>
         <div className="carousel-indicators" style={{bottom:"-420px"}}>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
         </div>
        </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
