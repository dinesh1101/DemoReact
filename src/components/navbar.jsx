import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          Total Items{" "}
          <span className="badge badge-pill badge-secondary ">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
