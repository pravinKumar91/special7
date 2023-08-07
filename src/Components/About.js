import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about" style={{height:"950px"}}>
        <Fade duration={1000}>
          <div className="row">
            <div style={{marginTop:"20px"}}>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Rupali Muke Profile Pic"
              />
            </div>

            <div style={{marginTop:"70px"}}>
              <h2>About Me</h2>
              <p>{bio}</p>
            </div>
          </div>
        </Fade>
        <p className="scrolldown">
          <a className="smoothscroll" href="#contact">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </section>
    );
  }
}

export default About;
