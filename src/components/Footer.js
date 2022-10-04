import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="cloud">
          <hr />
          <ul className="list-none">
            <li className="text-bold text-l">AlgorithmDay</li>
            <li>Seorit@icloud.com</li>
            <li>
              <div className="flex">
                <p className="m-0">Copyright © 2022 void *Studio. 모든 권리 보유.</p>
              </div>
            </li>
            <p className="m-0">v1.0.0-beta1</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
