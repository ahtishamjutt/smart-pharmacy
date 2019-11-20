import React, { Component } from "react";

class AddMedicine extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div className="bradcam_area breadcam_bg overlay2">
            <h3>Add Medicine</h3>
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
                      <label for="exampleFormControlSelect1">Milligram</label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>50</option>
                        <option>100</option>
                        <option>250</option>
                        <option>500</option>
                        <option>1000</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                      <label for="batch_id">Batch ID</label>
                      <input
                        type="email"
                        className="form-control"
                        id="batch_id"
                        aria-describedby="emailHelp"
                        placeholder="Medicine Name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="quantity">Quantity</label>
                      <input
                        type="password"
                        className="form-control"
                        id="quantity"
                        placeholder="Milligram"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <form>
                    <div className="form-group">
                      <label for="medicine_name">Expiry Date</label>
                      <input
                        type="email"
                        className="form-control"
                        id="medicine_name"
                        aria-describedby="emailHelp"
                        placeholder="Medicine Name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="per_unit_price">Per Unit Price</label>
                      <input
                        type="password"
                        className="form-control"
                        id="per_unit_price"
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
export default AddMedicine;
