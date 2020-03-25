import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import Filter4Icon from "@material-ui/icons/Filter4";
import Filter5Icon from "@material-ui/icons/Filter5";
import Filter6Icon from "@material-ui/icons/Filter6";
import Filter7Icon from "@material-ui/icons/Filter7";

import AppMenuItem from "./AppMenuItem";
// import Item from "antd/lib/list/Item";

import "./css/AppMenu.css";

const appMenuItems = [
  {
    name: "ROOT OF EQUATION",
    Icon: Filter1Icon,
    items: [
      {
        name: "Bisection",
        link: "/Bisection"
      },
      {
        name: "False",
        link: "/False"
      },
      {
        name: "Onepoint",
        link: "/Onepoint"
      },
      {
        name: "Newton",
        link: "/Newton"
      },
      {
        name: "Secant",
        link: "/Secant"
      },
    ]
  },
  {
    name: "Linear Algebra",
    Icon: Filter2Icon,
    items: [
      {
        name: "Cramer",
        link: "/Cramer"
      },
      {
        name: "Gauss",
        link: "/Gauss"
      },
      {
        name: "Jordan",
        link: "/Jordan"
      },
      {
        name: "Inverse",
        link: "/Inverse"
      },
      {
        name: "LU",
        link: "/LU"
      },
      // {
      //   name: "Cholesky",
      //   link: "/Cholesky"
      // },
      // {
      //   name: "Jacobi",
      //   link: "/Jacobi"
      // },
      // {
      //   name: "Seidel",
      //   link: "/Seidel"
      // },
      // {
      //   name: "Gradient",
      //   link: "/Gradient"
      // }
    ]
  },
  {
    name: "Interpolation",
    Icon: Filter3Icon,
    items: [
      {
        name: "Newton",
        link: "/Newton"
      },
      {
        name: "Lagrange",
        link: "/Lagrange"
      },
      {
        name: "Spline",
        link: "/Spline"
      },
      {
        name: "Spline",
        link: "/Inverse"
      }
    ]
  },
  {
    name: "Regression",
    Icon: Filter4Icon,
    items: [
      {
        name: "Linear",
        link: "/Linear"
      },
      {
        name: "Polynomial",
        link: "/Polynomial"
      },
      {
        name: "MultipleLinear",
        link: "/MultipleLinear"
      }
    ]
  },
  {
    name: "Integration",
    Icon: Filter5Icon,
    items: [
      {
        name: "CompositeTrapzoidal",
        link: "/CompositeTrapzoidal"
      },
      {
        name: "CompositeSimpson",
        link: "/CompositeSimpson"
      }
    ]
  },
  // {
  //   name: "Differentiation",
  //   Icon: Filter6Icon,
  //   items: [
  //     {
  //       name: "Forwardh",
  //       link: "/Forwardh"
  //     },
  //     {
  //       name: "ForwardH2",
  //       link: "/ForwardH2"
  //     },
  //     {
  //       name: "ForwardH2",
  //       link: "/ForwardH2"
  //     },
  //     {
  //       name: "Backwardh",
  //       link: "/Backwardh"
  //     },
  //     {
  //       name: "Backwardh2",
  //       link: "/Backwardh2"
  //     },
  //     {
  //       name: "Centralh",
  //       link: "/Centralh"
  //     },
  //     {
  //       name: "Centralh2",
  //       link: "/Centralh2"
  //     }
  //   ]
  // },
  {
    name: "ODE",
    Icon: Filter7Icon,
    items: [
      {
        name: "Euler",
        link: "/Euler"
      },
      {
        name: "Heun",
        link: "/Heun"
      },
      // {
      //   name: "Modified_Euler",
      //   link: "/Modified_Euler"
      // }
    ]
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: "100%"
    },
    navList: {
      width: drawerWidth
    },
    menuItem: {
      width: drawerWidth
    },
    menuItemIcon: {
      color: "#8080ff"
    }
  })
);

export default AppMenu;