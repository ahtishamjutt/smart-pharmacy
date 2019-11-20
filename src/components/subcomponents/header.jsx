import React, { Component } from "react";
import Login from "./login";
import SignUp from "./signup";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <div class="header-area ">
            <div id="sticky-header" class="main-header-area">
              <div class="container-fluid p-0">
                <div class="row align-items-center no-gutters">
                  <div class="col-xl-2 col-lg-2">
                    <div class="logo-img">
                      <Link to="/">
                        <img src="img/logo.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div class="col-xl-7 col-lg-7">
                    <div class="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link class="active" to="/">
                              home
                            </Link>
                          </li>
                          <li>
                            <Link to="/packages">
                              Medicine<i className="ti-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/addmedicine">Add Medicine</Link>
                              </li>
                              <li>
                                <Link to="/deletmedicine">Delete Medicine</Link>
                              </li>
                              <li>
                                <Link to="/updatemedicine">
                                  Update Medicine
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/blog">Stock</Link>
                          </li>
                          <li>
                            <Link to="/support">Support</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div class="log_chat_area d-flex align-items-center">
                      <a href="#test-form" class="login popup-with-form">
                        <i class="flaticon-user"></i>
                        <span>log in</span>
                      </a>
                      <div class="live_chat_btn">
                        <a class="boxed_btn_green" href="#">
                          <i class="flaticon-chat"></i>
                          <span>Live Chat</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default Header;
