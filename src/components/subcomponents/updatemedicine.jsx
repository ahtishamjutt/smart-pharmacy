import React, { Component } from "react";
class UpdateMedicine extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div className="bradcam_area breadcam_bg overlay2">
            <h3>Update Medicine</h3>
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

export default UpdateMedicine;
