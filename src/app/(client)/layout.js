import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <h1>nav bar</h1>
      {children}
      <h1>footer</h1>
    </>
  );
};

export default DashboardLayout;
