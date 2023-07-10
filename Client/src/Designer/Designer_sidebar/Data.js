import React from "react";
import * as AiIcons from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {BiMessageSquareAdd} from "react-icons/bi"

export const Data = [
  {
    title: "Dashboard",
    path: "/designer_dashboard",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Designs",
    path: "/designer_designs",
    icon: <MdOutlineDesignServices />,
    cName: "nav-text",
  },
  {
    title: "Add Designs",
    path: "/designer_addProduct",
    icon: <BiMessageSquareAdd/>,
    cName: "nav-text",
  },
  {
    title: "Chart",
    path: "/designer_chart",
    icon: <AiIcons.AiOutlineLineChart />,
    cName: "nav-text",
  },
  // {
  //   title: "Payment",
  //   path: "/designer_payment",
  //   icon: <MdOutlinePayments/>,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Blog",
  //   path: "/designer_blog",
  //   icon: <ImBlogger/>,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Messages",
  //   path: "/designer_message",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text",
  // },
  {
    title: "Profile",
    path: "/designer_dashprofile",
    icon: <CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
