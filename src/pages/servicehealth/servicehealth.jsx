import "./servicehealth.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const ServiceHealth = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="servicehealth">
      <Sidebar />
      <div className="servicehealthContainer">
        <Navbar />
        <div className="tabs">
            <Tabs value={selectedTab} onChange={handleChange} centered textColor="primary"
            indicatorColor="secondary"
            >
            <Tab label="Overview" />
            <Tab label="Issue history" issue history/>
            <Tab label="Reported issue" />
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ServiceHealth;