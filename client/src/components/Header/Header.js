import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="nav">
      <span className="navbar-brand">Laundry</span>
      <ul>
        <li className="nav-item">
          <span className="nav-link">Home</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Pricing</span>
        </li>
        <li className="nav-item">
          <span className="nav-link">Career</span>
        </li>
        <li className="nav-item">
          <span className="nav-link active">Sign In</span>
        </li>
      </ul>
    </div>
  );
}
