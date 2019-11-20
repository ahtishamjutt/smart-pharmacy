import React, { Component } from "react";
class DeleteMedicine extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div className="bradcam_area breadcam_bg overlay2">
            <h3>Delete Medicine</h3>
          </div>
          <div className="float-right" style={{ marginTop: "30px" }}>
            <aside className="single_sidebar_widget search_widget">
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Keyword"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Search Keyword'"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="button">
                        <i className="ti-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </aside>
          </div>
          <div className="package_prsing_area">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <form>
                    <div className="form-group">
                      <label for="medicine_name">Medicine Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="medicine_name"
                        aria-describedby="emailHelp"
                        placeholder="Medicine Name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        Example select
                      </label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                      <label for="medicine_name">Medicine Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="medicine_name"
                        aria-describedby="emailHelp"
                        placeholder="Medicine Name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="milligram">Milligram</label>
                      <input
                        type="password"
                        className="form-control"
                        id="milligram"
                        placeholder="Milligram"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                      <label for="medicine_name">Medicine Name</label>
                      <input
                        type="email"
                        className="form-control"
                        id="medicine_name"
                        aria-describedby="emailHelp"
                        placeholder="Medicine Name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="milligram">Milligram</label>
                      <input
                        type="password"
                        className="form-control"
                        id="milligram"
                        placeholder="Milligram"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteMedicine;
