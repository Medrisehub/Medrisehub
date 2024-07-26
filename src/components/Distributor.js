import React from "react";
import avatar from "./../images/av.png";

import "./Distributor.css";

const Distributor = () => {
  return (
    <div className="distributors">
      <h2>Our Distributors</h2>
      <div className="gridline">
        <div className="pdcontact">
          <div className="avatar">
            <img src={avatar} className="avatar" />
          </div>
          <div className="dtl">
            <div><b>Sai Pharma Distributors</b></div>
            <div>Hyderabad</div>
            <div>+91 9394503426</div>
          </div>
        </div>

        <div className="pdcontact">
          <div className="avatar">
            <img src={avatar} className="avatar" />
          </div>
          <div className="dtl">
            <div><b>Vishal Pharma</b></div>
            <div>Hyderabad</div>
            <div>+91 9391117751</div>
          </div>
        </div>

        <div className="pdcontact">
          <div className="avatar">
            <img src={avatar} className="avatar" />
          </div>
          <div className="dtl">
            <div><b>Abhiram agencies</b></div>
            <div>Kamareddy</div>
            <div>+91 9299996602</div>
          </div>
        </div>
        <div className="pdcontact">
          <div className="avatar">
            <img src={avatar} className="avatar" />
          </div>
          <div className="dtl">
            <div><b>SriSai Marketers</b></div>
            <div>Nizamabad</div>
            <div>+91 7989392068</div>
          </div>
        </div>
        <div className="pdcontact">
          <div className="avatar">
            <img src={avatar} className="avatar" />
          </div>
          <div className="dtl">
            <div><b>Almas Agencies</b></div>
            <div>Khammam </div>
            <div>+91 9440419778</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
