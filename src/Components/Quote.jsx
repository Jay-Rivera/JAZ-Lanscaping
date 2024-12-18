import React from "react";
import { Link } from "react-router-dom";

function Quote() {
  return (
    <div className="quote__section">
      <h1>Ready For A Quote?</h1>
      <Link to="/Contact" className="button">
        Contact Us
      </Link>
    </div>
  );
}

export default Quote;
