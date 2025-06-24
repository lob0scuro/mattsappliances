import React from "react";

const Footer = () => {
  return (
    <footer>
      <h4 className="footerHead">Matt's Appliances, LLC</h4>
      <div className="locationBlock">
        <div className="location">
          <div>
            <p className="city">Lake Charles</p>
            <p className="street">2600 Common St.</p>
            <p className="address">Lake Charles, LA, 70601</p>
          </div>
          <div>
            <p className="hours">Hours of Operation</p>
            <ul>
              <li>
                <p>Mon-Fri</p>
                <p>10am - 6pm</p>
              </li>
              <li>
                <p>Sat</p>
                <p>10am - 5pm</p>
              </li>
              <li>
                <p>Sun</p>
                <p>Closed</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="location">
          <div>
            <p className="city">Jennings</p>
            <p className="street">314 E Shankland Ave.</p>
            <p className="address">Jennings, LA, 70546</p>
          </div>
          <div>
            <p className="hours">Hours of Operation</p>
            <ul>
              <li>
                <p>Mon-Thur</p>
                <p>9:30am - 5pm</p>
              </li>
              <li>
                <p>Fri</p>
                <p>10:30am - 5pm</p>
              </li>
              <li>
                <p>Sat</p>
                <p>9:30am - 4pm</p>
              </li>
              <li>
                <p>Sun</p>
                <p>Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
