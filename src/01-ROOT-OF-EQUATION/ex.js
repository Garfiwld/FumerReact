import React, { Component } from "react";
import math from "mathjs";
class ex extends Component {

  // แก้สมาการ X
  funcal = (X) => {
    var expression = document.getElementById("inputEqual").value;
    var expr = math.compile(expression);
    let scope = {
      x: parseFloat(X)
    };
    return expr.eval(scope);
  };
  methodFalse = () => {
    var table = document.getElementById("outputTable");
    var xl = document.getElementById("inputXL").value;
    var xr = document.getElementById("inputXR").value;
    var xmOld = xr;
    var xm = 0;
    var n = 0;
    var errPer = 50;
    // var check = parseFloat(0.0);
    if (
      document.getElementById("outputTable").getElementsByTagName("tr").length >
      0
    );
    do {
      // if (xl != xr) {
      var fxR = this.funcal(xr).toFixed(8);
      var fxL = this.funcal(xl).toFixed(8);
      xm = (xl * fxR - (xr * fxL) / (fxR - fxL)).toFixed(8);
      //     check = Math.abs(xm - xmOld).toFixed(8);
      // } else {
      //     check = 0;
      // }

      console.log(n);

      // หา error
      if (n > 0) {
        errPer = Math.abs(((xm - xmOld) / xm) * 100).toFixed(8);
        console.log(errPer);
      }
      n++;
      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(n);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      // Add some text to the new cells:
      cell1.innerHTML = n;
      cell1.setAttribute("id", "cell");
      cell2.innerHTML = xl;
      cell2.setAttribute("id", "cell");
      cell3.innerHTML = xr;
      cell3.setAttribute("id", "cell");
      cell4.innerHTML = xm;
      cell4.setAttribute("id", "cell");
      cell5.innerHTML = errPer;
      cell5.setAttribute("id", "cell");

      if (this.funcal(xm) * this.funcal(xr) < 0) {
        xl = xm;
      } else {
        xr = xm;
      }
      xmOld = xm;
    } while (errPer > 0.0000001);
  };

  render() {
    return (
      <div class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputEqual">input Equal</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEqual"
                      placeholder="e^(-x/4)*(2-x)-1"
                      value="e^(-x/4)*(2-x)-1"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputXL">Number Start (XL)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputXL"
                      placeholder="0"
                      value="0"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputXR">Number End (XR)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputXR"
                      placeholder="1"
                      value="1"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                onclick={() => this.methodFalse(
                  parseFloat(this.state.inputXL),
                  parseFloat(this.state.inputXR)
                )}
              >
                ENTER
              </button>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-body">
              <div id="plot" class="pot1"></div>
            </div>
          </div>
          <br />
          <div class="card">
            <div class="card-body">
              <table id="outputTable" class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Iteration</th>
                    <th scope="col">XL</th>
                    <th scope="col">XR</th>
                    <th scope="col">XM</th>
                    <th scope="col">Error(%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="list-data">
                    <td id="Iteration"></td>
                    <td id="xl1"></td>
                    <td id="xr1"></td>
                    <td id="x"></td>
                    <td id="error"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default ex;
