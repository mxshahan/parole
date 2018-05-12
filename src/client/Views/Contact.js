import React from 'react';
import Container from '../Components/Container';
import Row from '../Components/Row';

const Contact = () => (
  <section>
    <Container>
      <div className="section-heading">
          <h1 className="text-center">Get Contacted With Us</h1>
      </div>
      <div className="content">
        <Row className="contact-top">
          <div className="col-md-6">
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.528052517073!2d91.85622205000001!3d24.91053075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750553f0bb112bf%3A0x609ec1bb21b3706a!2sJalalabad+Ragib-Rabeya+Medical+College+%26+Hospital!5e0!3m2!1sen!2sbd!4v1526130374861" width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
          </div>
        </Row>
        <div className="col-md-8 offset-2">
          <form className="form-group" id="contactForm"> 
            <h3 className="text-center mb-5">Fill This Form To Contact Us or Become Partner With Us</h3>
            <Row>
              <div className="col-md-6">
                <input type="text" name="fname" className="form-control" placeholder="First Name"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="lname" className="form-control" placeholder="Last Name"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="email" className="form-control" placeholder="Email"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" className="form-control" placeholder="Phone"/>
              </div>
              <div className="col-md-12">
                <textarea className="form-control" placeholder="Type Your Message Here..."></textarea>
              </div>
            </Row>
            <div className="text-center mt-4">
              <button className="btn btn-2x btn-pri text-uppercase">Send To Us</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </section>
)

export default Contact
