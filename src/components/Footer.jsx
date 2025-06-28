import React from "react";

const Footer = () => {
  return (
    <footer>
      <h3 className="footerHead">Matt's Appliances, LLC</h3>
      <div className="locationBlock">
        <div className="location">
          <h5>Lake Charles</h5>
          <div>
            <div className="address">
              <p className="street">2600 Common St.</p>
              <p className="city">Lake Charles, LA, 70601</p>
            </div>
            <div className="hours">
              <h5>Hours of Operation</h5>
              <div>
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
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.0624741413594!2d-93.21691492444538!3d30.20676431086189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863b8681115273e9%3A0xb60e4a9e29e2d4ed!2sMatt&#39;s%20New%20%26%20Used%20Appliances!5e0!3m2!1sen!2sus!4v1751086049275!5m2!1sen!2sus"
            width="250"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="location">
          <h5>Jennings</h5>
          <div>
            <div className="address">
              <p className="street">314 E Shankland Ave.</p>
              <p className="city">Jennings, LA, 70546</p>
            </div>
            <div className="hours">
              <h5>Hours of Operation</h5>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6870.513798538509!2d-92.65933995577487!3d30.231850779168763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863b5b84b91f0cd9%3A0xca1202e28625cdc3!2sMatt&#39;s%20New%20%26%20Used%20Appliances%20-%20Jennings!5e0!3m2!1sen!2sus!4v1751086193613!5m2!1sen!2sus"
            width="250"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
