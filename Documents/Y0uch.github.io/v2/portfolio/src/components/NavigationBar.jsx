import React from "react";
import "./NavigationBar.css";
// import { Link, NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"
      ></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      ></link>

    <div className="navbar-name-container">
      <a class="navbar-brand" href="/"><h5>Youngjun Cho</h5></a>  
    </div>    

    <div class="container">
      <div className="navbarItems">
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">Designs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/illustrations">Illustrations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about-me">About Me</a>
            </li>
          </ul>
        </nav>
      </div>

        
    </div>


      {/* <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">Designs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Illustrations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
      </nav> */}
    </>
  );
}
