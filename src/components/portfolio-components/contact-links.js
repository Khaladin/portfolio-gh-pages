import React, {Component} from 'react';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaGitHub from 'react-icons/lib/fa/github';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaFile from 'react-icons/lib/fa/file-text';

class ContactLinks extends Component {
  render() {
    return(
      <div class="section-links">
        <div class="row">
          <div class="col-1-of-5">
            <a href="https://www.linkedin.com/in/cory-hoban-182735125/">
            <div class="link-box">
              <div class="link-box__icon">
                <FaLinkedIn />
              </div>
              <p class="link-box__text">
                Find me on LinkedIn
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
            <a href="https://github.com/Khaladin">
            <div class="link-box">
              <div class="link-box__icon">
                <FaGitHub />
              </div>
              <p class="link-box__text">
                Find me on Github
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
          <a href="./CoryHobanResume2018.doc">
            <div class="link-box">
              <div class="link-box__icon">
                <FaFile />
              </div>
              <p class="link-box__text">
                Checkout my Resume
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
            <a href="mailto:hobancor@gmail.com">
            <div class="link-box">
              <div class="link-box__icon">
                <FaPaperPlane />
              </div>
              <p class="link-box__text">
                Send me an email
              </p>
            </div>
            </a>
          </div>

          <div class="col-1-of-5">
            <a href="http://coryhoban.blogspot.com/">
            <div class="link-box">
              <div class="link-box__icon">
                <FaPencil />
              </div>
              <p class="link-box__text">
                Checkout my Blog
              </p>
            </div>
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default ContactLinks;
