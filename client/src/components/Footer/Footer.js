import React from "react";
import CopyRight from "./CopyRight";
import Referels from "./Referels";
import SocialLinks from "./SocialLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Referels />
      <SocialLinks />
      <CopyRight />
    </div>
  );
}
