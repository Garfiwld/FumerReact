import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import Filter1Icon from "@material-ui/icons/Filter1";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";

import AppMenuItem from "./AppMenuItem";
// import Item from "antd/lib/list/Item";

import "./css/AppMenu.css";

const appMenuItems = [
  {
    name: "ROOT OF EQUATION",
    Icon: Filter1Icon,
    items: [
      {
        name: "BisectionMethod",
        link: "/Bisection-Method"
      },
      {
        name: "False position Method",
        link: "/False-position-Method"
      },
      {
        name: "One-point iteration Method",
        link: "/One-point-iteration-Method"
      },
      {
        name: "Newton raphson Method",
        link: "/Newton-raphson-Method"
      },
      {
        name: "Secant Method",
        link: "/Secant-Method"
      }
    ]
  },
  {
    name: "Orders",
    link: "/orders",
    Icon: IconShoppingCart
  },
  {
    name: "Customers",
    link: "/customers",
    Icon: IconPeople
  },
  {
    name: "Reports",
    link: "/reports",
    Icon: IconBarChart
  },
  {
    name: "Nested Pages",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Level 2"
      },
      {
        name: "Level 2",
        items: [
          {
            name: "Level 3"
          },
          {
            name: "Level 3"
          }
        ]
      }
    ]
  }
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
      color: "#97c05c"
    }
  })
);

export default AppMenu;
