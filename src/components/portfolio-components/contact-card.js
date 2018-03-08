import React, {Component} from 'react'
import FaHome from 'react-icons/lib/fa/home';
import FaPhone from 'react-icons/lib/fa/phone';

class Contact extends Component {
  render() {
    return(
      <div class="section-contact">
        <div class="contact__card">
          <h2 class="contact__card-name">
            Cory Hoban
          </h2>
          <h3 class="contact__card-title">
            Software Engineering & Web Development
          </h3>
        </div>

        <div class="contact__card-about">
          <div class="contact__card-picture">
          </div>
          <div class="contact__card-about-mission info-text">
            <div>
              A highley driven software developer. Diligently spends free time creating personal projects
              and exploring new programming languages & frameworks. Seeking entery_level software development position.
            </div>
            <div>
              <ul class="fa-ul contact__card-list">
                <li><FaHome />4011 N Riverside Dr. Tampa Fl 33603</li>
                <li><FaPhone />810-923-0743 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
