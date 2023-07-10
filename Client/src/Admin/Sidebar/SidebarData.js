import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import {TbReport} from "react-icons/tb"

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Architects",
    path: "/exterior_designer",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Interior Designers",
    path: "/interior_designer",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text"
  },
  {
    title: "Designs",
    path: "/design",
    icon: <MdOutlineDesignServices />,
    cName: "nav-text",
  },  
  // {
  //   title: "Add Designer",
  //   path: "/addDesigner",
  //   icon: <AiIcons.AiOutlineUserAdd />,
  //   cName: "nav-text",
  // },
  {
    title: "Chart",
    path: "/chart",
    icon: <AiIcons.AiOutlineLineChart />,
    cName: "nav-text",
  },
  // {
  //   title: "Messages",
  //   path: "/message",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text",
  // },
  {
    title: "Faq",
    path: "/faq",
    icon: <AiIcons.AiFillQuestionCircle />,
    cName: "nav-text",
  },
  {
    title: "Report",
    path: "/ReportGenerator",
    icon: <TbReport/>,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/",
    icon: <AiIcons.AiOutlineLogout />,
    cName: "nav-text",
  },
];
