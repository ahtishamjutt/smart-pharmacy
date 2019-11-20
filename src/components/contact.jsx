import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="bradcam_area breadcam_bg overlay2">
          <h3>Contact</h3>
        </div>
        <section class="contact-section">
          <div class="container">
            <div class="d-none d-sm-block mb-5 pb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27037.020410167548!2d74.85883231212343!3d32.10635034784858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39195386748c99ed%3A0x58fa5441bb1acd47!2sNarowal%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1573714566896!5m2!1sen!2s"
                width="100%"
                height="600"
                frameborder="0"
                style={{ border: "0;" }}
                allowfullscreen=""
              ></iframe>
            </div>
            <div class="row">
              <div class="col-12">
                <h2 class="contact-title">Get in Touch</h2>
              </div>
              <div class="col-lg-8">
                <form
                  class="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control w-100"
                          name="message"
                          id="message"
                          cols="30"
                          rows="9"
                          onFocus="this.placeholder = ''"
                          onBlur="this.placeholder = 'Enter Message'"
                          placeholder=" Name"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control valid"
                          name="name"
                          id="name"
                          type="text"
                          onFocus="this.placeholder = ''"
                          onBlur="this.placeholder = 'Enter your name'"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control valid"
                          name="email"
                          id="email"
                          type="email"
                          onFocus="this.placeholder = ''"
                          onBlur="this.placeholder = 'Enter email address'"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                          onFocus="this.placeholder = ''"
                          onBlur="this.placeholder = 'Enter Subject'"
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <button
                      type="submit"
                      class="button button-contactForm boxed-btn"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-home"></i>
                  </span>
                  <div class="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-tablet"></i>
                  </span>
                  <div class="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-email"></i>
                  </span>
                  <div class="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
