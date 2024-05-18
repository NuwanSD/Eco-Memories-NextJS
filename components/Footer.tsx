import React from "react";

const Footer = () => {
  return (
    <div className="py-5 border-t">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Eco-Memories. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
