import React from 'react';
import "./css/Contact.css";


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max">
        {/* <h2 className="title">Contact Me</h2> */}
        <div className="contact-content">
          <div className="left column">


            <div className="icons">
              <div className="icons-content">
                <i className="fas fa-user"></i>
                <div className="info">
                  <img src='./img/minju2.jpeg' alt="minju" className="minjupic" />

                </div>
              </div>

              <div className="icons-content">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  {/* <div className="head">E-mail</div>
                  <div className="tail">minjujang222@gmail.com</div> */}
                </div></div>

              <div className="icons-content">
                <i className="fas fa-map-marked-alt"></i>
                <div className="info">
                  <div className="s">

                  <div className="site">
                    <a href="https://www.instagram.com/minj_1104/" target="_blank" rel="noopener noreferrer">
                      <img src="./img/instagram.png" alt="Instagram" />
                    </a>
                  </div>
                  <div className="site">
                    <a href="https://m.blog.naver.com/hse09135?tab=1" target="_blank" rel="noopener noreferrer">
                      <img src="./img/blog.png" alt="Blog" />
                    </a>
                  </div>
                  <div className="site">
                    <a href="https://github.com/minjujdd" target="_blank" rel="noopener noreferrer">
                      <img src="./img/github.png" alt="GitHub" />
                    </a>
                  </div>
</div>
               
              </div>
            </div>


        </div>
      </div>

      <div className="right column">
        <div className="contact-text">Message me!</div>
        <form action="#" method="POST">
          <div className="fields">
            <div className="field name">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="field email">
              <input type="email" placeholder="E-mail" required />
            </div>
          </div>
          <div className="field subject">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="field content-area">
            <textarea cols="30" rows="10" placeholder="Content.." required></textarea>
          </div>
          <div className="sendn">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
      </div >
    </section >
  );
}

export default Contact;
