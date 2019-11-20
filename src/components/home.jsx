import React, { Component } from "react";
import Header from "./subcomponents/header";
import Login from "./subcomponents/login";
import SignUp from "./subcomponents/signup";
import Footer from "./subcomponents/footer";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="slider_area">
          <div class="single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2">
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-xl-9">
                  <div class="slider_text text-center">
                    <h3>Medicine in your hand</h3>
                    <div class="find_dowmain">
                      <form action="#" class="find_dowmain_form">
                        <input type="text" placeholder="Find your Medicine" />
                        <button type="submit">Search</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="data_center_area">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="section_title text-center mb-100">
                  <h3>Our Services available in following cities</h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="location">
                  <div class="pulse_group">
                    <span>
                      <div class="address_on_hover d-none d-lg-block">
                        <div class="address_inner">
                          <i class="fa fa-map-marker"></i>
                          <h3>Lahore, Pakistan</h3>
                          <p>
                            It is a long established fact that <br />a reader
                          </p>
                        </div>
                      </div>
                    </span>
                    <span>
                      <div class="address_on_hover d-none d-lg-block">
                        <div class="address_inner">
                          <i class="fa fa-map-marker"></i>
                          <h3>Narowal , Pakistan</h3>
                          <p>
                            It is a long established fact that <br />a reader
                          </p>
                        </div>
                      </div>
                    </span>
                    <span>
                      <div class="address_on_hover d-none d-lg-block">
                        <div class="address_inner">
                          <i class="fa fa-map-marker"></i>
                          <h3>Sydney, Australia</h3>
                          <p>
                            It is a long established fact that <br />a reader
                          </p>
                        </div>
                      </div>
                    </span>
                    <span>
                      <div class="address_on_hover d-none d-lg-block">
                        <div class="address_inner">
                          <i class="fa fa-map-marker"></i>
                          <h3>Sydney, Australia</h3>
                          <p>
                            It is a long established fact that <br />a reader
                          </p>
                        </div>
                      </div>
                    </span>
                  </div>
                  <img src="img/banner/map.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="faq_area">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="accordion_heading">
                  <h3>Frequently Ask Question</h3>
                </div>
                <div id="accordion">
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i class="flaticon-info"></i> Is WordPress hosting
                          worth it?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <i class="flaticon-info"></i> What are the advantages{" "}
                          <span>of WordPress hosting over shared?</span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                      style={{}}
                    >
                      <div class="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i class="flaticon-info"></i> Will you transfer my
                          site?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="heading_4">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_4"
                          aria-expanded="false"
                          aria-controls="collapse_4"
                        >
                          <i class="flaticon-info"></i> Why should I host with
                          Hostza?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_4"
                      class="collapse"
                      aria-labelledby="heading_4"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="heading_5">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse_5"
                          aria-expanded="false"
                          aria-controls="collapse_5"
                        >
                          <i class="flaticon-info"></i> How do I get started{" "}
                          <span>with Shared Hosting?</span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse_5"
                      class="collapse"
                      aria-labelledby="heading_5"
                      data-parent="#accordion"
                    >
                      <div class="card-body">
                        Our set he for firmament morning sixth subdue darkness
                        creeping gathered divide our let god moving. Moving in
                        fourth air night bring upon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lets_launch launch_bg_1 overlay2">
          <div class="launch_text text-center">
            <h3>Let’s Launch your new pharmacy store online</h3>
            <div class="chat">
              <a class="boxed_btn_green" href="#">
                <i class="flaticon-chat"></i>
                <span>Live Chat</span>
              </a>
              <a class="boxed_btn_green2" href="#">
                <span>get start now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
