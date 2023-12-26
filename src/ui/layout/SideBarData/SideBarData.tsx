import React from "react";

import {SidebarItem   } from "./sidebaritem";
import { AiFillAppstore } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

export const SideBarData: SidebarItem[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiFillAppstore />,
    subnav: [
      {
        title: "",
        path: "/home",
        icon: <MdArrowDropDown />,
      },
      {
        title: "Analytics",
        path: "./analytics",
        icon: <AiFillAppstore />,
      },
      // {
      //   title: "Socail",
      //   path: "/socail",
      //   icon: <AiFillAppstore />,
      // },
      // {
      //   title: "Saas",
      //   path: "/home",
      //   icon: <AiFillAppstore />,
      // },
    ],
  },
  {
    title: "Project",
    path: "",
    icon: <AiFillAppstore />,
    subnav: [
      {
        title: "",
        path: "/home",
        icon: <MdArrowDropDown />,
      },
      {
        title: "List",
        path: "/list",
        icon: <AiFillAppstore />,
      },
      // {
      //   title: "Detail",
      //   path: "/Setting",
      //   icon: <AiFillAppstore />,
      // },
    
    ],
  },
  {
    title:  "   Auth ",
    path: "",
    icon: <AiFillAppstore />,
    subnav: [
        {
          title: "",
          path: "/home",
          icon: <MdArrowDropDown />,
        },
        {
          title: "SignIn",
          path: "/",
          icon: <AiFillAppstore />,
        },
        {
          title: "SignUp",
          path: "/signup",
          icon: <AiFillAppstore />,
        },
        {
            title: "Reset Password",
            path: "/password",
            icon: <AiFillAppstore />,
          },
          {
            title: "404 Page",
            path: "/PageNotFound",
            icon: <AiFillAppstore />,
          },
          
      
      ],

  }
];

export default SideBarData;
