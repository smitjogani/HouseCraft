import React from "react";
import "./App.css";

import { Route, Switch, Redirect, Router } from "react-router-dom";

import Home from "./Component/routes/Home";
import Designers from "./Component/routes/Designers";
import Design from "./Component/routes/Designs";
import InteriorDesigner from "./Component/Designer/Interior Designer/InteriorDesignerHome"
import About from "./Component/routes/About";
import Contact from "./Component/routes/Contactus";
import Profiledesigner from "./Component/Designer/ArchitectProfile/ArchitectClickProfile"
import InteriorProfile from "./Component/Designer/InteriorProfile/InteriorClickProfile"

import Admin from "./Admin/Dash/Admin_dash";
import adminExteriorDesigners from "./Admin/Designers/Admin_Designers"
import adminInteriorDesigner from "./Admin/Designers/Interior/Interior"
import adminDesigns from "./Admin/Designs/Admin_Designs"
import adminDesignProfile from "./Admin/Designs/Design_Profile/ContactDesignProfile"
import adminChart from "./Admin/Chart/Admin_chart"
import adminAddDesigner from "./Admin/CreateDesigner/createDesigner"
import adminInsertPage from "./Designer/Designer_profile/insert/Insert"
import adminDesignerProfile from "./Component/Profile/p/Clickprofile"
import adminInteriorProfile from "./Admin/Designers/Interior/Interior"
import adminDesignContact from "./Admin/Designs/Design_Profile/ContactDesignProfile"
import adminReport from "./Admin/Report/Report"
import adminFaq from "./Admin/Faq/Faq"

import DesiderPanel from "./Designer/Designer_dashboard/Designer_dashboard";
import designerDesigns from "./Designer/Designer_designs/Designer_designs"
import designerChart from "./Designer/Designer_chart/Designer_chart"
import designerProfile from "./Designer/Designer_profile/Designer_profile"
import designerInsertPage from "./Designer/Designer_profile/insert/Insert"
import designerAddProduct from "./Designer/Designer_addProduct/DesAddProduct"
import designerUpdateDesign from "./Designer/Designer_addProduct/UpdateDesign/UpdateDesign"

import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" component={Home} />
        <Route path="/Designers" component={Designers} />
        <Route path="/interiorDesigners" component={InteriorDesigner} />
        <Route path="/Designs" component={Design} />
        <Route path="/About" component={About} />
        <Route path="/Contactus" component={Contact} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Designerprofile/:id" component={Profiledesigner} />
        <Route path="/InteriorProfile/:id" component={InteriorProfile} />

        <Route path="/dashboard" component={Admin} />
        <Route path="/exterior_designer" component={adminExteriorDesigners} />
        <Route path="/interior_designer" component={adminInteriorDesigner} />
        <Route path="/design" component={adminDesigns} />
        <Route path="/adminDesignProfile" component={adminDesignProfile}/>
        <Route path="/chart" component={adminChart} />
        <Route path="/profile_insert" component={adminInsertPage} />
        <Route path="/architect_profile/:id" component={adminDesignerProfile} />
        <Route path="/interior_profile/:id" component={adminInteriorProfile} />
        <Route path="/ReportGenerator" component={adminReport} />
        <Route path="/adminDesignContact" component={adminDesignContact}/>
        <Route path="/faq" component={adminFaq} />

        <Route path="/designer_dashboard" component={DesiderPanel} />
        <Route path="/designer_designs" component={designerDesigns} />
        <Route path="/designer_chart" component={designerChart} />
        <Route path="/designer_dashprofile" component={designerProfile} />
        <Route path="/profile_insert" component={designerInsertPage} />
        <Route path="/designer_addProduct" component={designerAddProduct} />
        <Route path="/designer_updateDesign/:id" component={designerUpdateDesign} />
      </Switch>
    </>
  );
}

export default App;