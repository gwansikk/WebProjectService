import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <ul className="list-none">
          <li className="text-bold text-l">AlgorithmDay</li>
          <li>gwansikk@icloud.com</li>
          <li>
            <div className="flex">
              <p className="m-0">Copyright © 2023 gwansikk. 모든 권리 보유.</p>
            </div>
          </li>
          <p className="m-0">v1.0.0-beta1</p>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
