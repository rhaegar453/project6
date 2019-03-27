import React, { Component } from "react";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">
        <i class="fas fa-folder-open" style={{marginRight:"5px"}}></i>
          <b>FolderLy</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
