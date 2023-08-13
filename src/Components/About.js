import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "/special7/images/" + this.props.data.image;
    const bio = this.props.data.bio;

    return (
      <section id="about" style={{height:"950px"}}>
        <div>
          <Fade duration={1000}>
            <div className="row">
              <div style={{marginTop:"20px"}}>
                <img
                className="profile-pic"
                src={profilepic}
                alt="Rupali Wanare Profile Pic"
                />
                </div>

              <div style={{marginTop:"70px"}}>
              <h2>About Me</h2>
              <p>{bio}</p>
              </div>
            </div>
          </Fade>
        </div>
        <div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#contact">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
