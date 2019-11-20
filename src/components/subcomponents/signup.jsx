import React, { Component } from "react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
        <form id="test-form2" class="white-popup-block mfp-hide">
          <div class="popup_box ">
            <div class="popup_inner">
              <div class="logo text-center">
                <a href="#">
                  <img src="img/form-logo.png" alt="" />
                </a>
              </div>
              <h3>Resistration</h3>
              <form action="#">
                <div class="row">
                  <div class="col-xl-12 col-md-12">
                    <input type="email" placeholder="Enter email" />
                  </div>
                  <div class="col-xl-12 col-md-12">
                    <input type="password" placeholder="Password" />
                  </div>
                  <div class="col-xl-12 col-md-12">
                    <input type="Password" placeholder="Confirm password" />
                  </div>
                  <div class="col-xl-12">
                    <button type="submit" class="boxed_btn_green">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
