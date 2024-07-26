import React from "react";
import "./Contacts.css";

import call from "./../images/call.webp";
import location from "./../images/location.jpg";
import mail from "./../images/mail.webp";

const Contacts = () => {
  return (
    <div className="contacts">
      <h2>Contact Us</h2>
      <h4>Medrisehub Private Limited </h4>
      <div className="completeContacts">
        <div className="contact">
          <div>
            <img src={call} className="call" />
          </div>
          <div>+91 701 307 1362</div>
        </div>
        <div className="mail">
            <div>
              <img src={mail} className="mail" />
            </div>
            <div>medrisehub@gmail.com</div>
        </div>
        <div className="address">
          <div>
            <img src={location} className="location" />
          </div>
          <div>
            Plot no.4-34 2 floor weaker section colony Ahmedguda, Dammaiguda
            <br /> keesara mandal medchal malkajgiri. Telangana pincode.500083
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
