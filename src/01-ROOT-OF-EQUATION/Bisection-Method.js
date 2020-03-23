import React, { Component } from "react";
import { Table } from "antd";
import "../css/screen.css";
import "antd/dist/antd.css";
import math from "mathjs";
import Plot from "react-plotly.js";

import { Alert, Form } from "reactstrap";

var dataInTable = [];
const columns = [
  {
    title: "Iteration",
    dataIndex: "iteration",
    key: "iteration"
  },
  {
    title: "XL",
    dataIndex: "xl",
    key: "xl"
  },
  {
    title: "XR",
    dataIndex: "xr",
    key: "xr"
  },
  {
    title: "XM",
    dataIndex: "xm",
    key: "xm"
  },
  {
    title: "Error",
    key: "error",
    dataIndex: "error"
  }
];

const xValues = math.range(-10, 10, 0.5).toArray();
var fx = " ";
class Bisection extends Component {
  constructor() {
    super();
    this.state = {
      fx: "",
      xl: 0,
      xr: 0,
      xm: 0,
      err: 0.0001,
      showGraph: false
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.bisection = this.bisection.bind(this);
  }
  bisection = (xl, xr) => {
    if (xl > xr) {
      window.alert("inputXL < inputXR");
    } else {
      fx = this.state.fx;
      var xm = this.state.xm;
      var xmOld = 0;
      var epsilon = parseFloat(0.0);
      var n = 0;
      var data = [];
      data["xl"] = [];
      data["xr"] = [];
      data["xm"] = [];
      data["error"] = [];

      do {
        xm = (xl + xr) / 2;
        epsilon = this.error(xm, xmOld).toFixed(8);

        data["xl"][n] = xl.toFixed(8);
        data["xr"][n] = xr.toFixed(8);
        data["xm"][n] = xm.toFixed(8);
        data["error"][n] = Math.abs(epsilon * 100).toFixed(8);

        if (this.func(xm) * this.func(xr) < 0) {
          xl = xm;
        } else {
          xr = xm;
        }

        n++;
        xmOld = xm;
      } while (Math.abs(epsilon) > this.state.err);
      // this.state.xm = xm
      this.createTable(data["xl"], data["xr"], data["xm"], data["error"]);
      this.setState({
        showGraph: true
      });
    }
  };
  func = X => {
    var expr = math.compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  };
  error = (xnew, xold) => {
    return Math.abs((xnew - xold) / xnew);
  };
  createTable = (xl, xr, xm, error) => {
    dataInTable = [];
    for (var i = 0; i < xl.length; i++) {
      dataInTable.push({
        iteration: i + 1,
        xl: xl[i],
        xr: xr[i],
        xm: xm[i],
        error: error[i]
      });
    }
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div class="content">
        <div class="container-fluid">
          <Alert color="primary">
            <h1>Bisection Method</h1>
          </Alert>

          <div class="card">
            <div class="card-body">
              <Form>
                <div class="form-row" onChange={this.handleChange}>
                  <div class="form-group col-md-12">
                    <label for="fx">
                      {" "}
                      <p className="text-primary">input Equal</p>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="fx"
                      placeholder="e^(-x/4)*(2-x)-1"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="xl">
                      <p className="text-primary">Number Start (XL)</p>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="xl"
                      placeholder="0"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="xr">
                      <p className="text-primary">Number End (XR)</p>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="xr"
                      placeholder="1"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div class="card-footer">
              <button
                class="btn btn-primary btn-lg btn-block"
                onClick={() =>
                  this.bisection(
                    parseFloat(this.state.xl),
                    parseFloat(this.state.xr)
                  )
                }
              >
                ENTER
              </button>
            </div>
          </div>

          <br />

          {this.state.showGraph && (
            <div class="card">
              <div class="card-body">
                <Plot
                  data={[
                    {
                      x: math.range(-10, 10, 0.5).toArray(),
                      y: xValues.map(function(x) {
                        return math.compile(fx).eval({ x: x });
                      }),
                      type: "scatter",
                      marker: { color: "red" }
                    },
                    {
                      x: [this.state.xm],
                      y: 0,
                      type: "scatter",
                      marker: { color: "orange", size: 12 }
                    }
                  ]}
                  layout={{ title: "Bisection Method" }}
                  style={{ width: "100%", float: "left", height: "370px" }}
                />
              </div>
            </div>
          )}

          <br />

          {this.state.showGraph && (
            <div class="card">
              <div class="card-body">
                <Table
                  bordered={true}
                  bodyStyle={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "black",
                    backgroundColor: "white"
                  }}
                  columns={columns}
                  dataSource={dataInTable}
                ></Table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Bisection;
