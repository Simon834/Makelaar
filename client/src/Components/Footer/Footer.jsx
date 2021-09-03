import { Fragment } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import logo from "../../images/logo-white-horizontal.png";

import "./Footer.css";
export default function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <div className="contacto">
          <div className="left_contact">
            <div className="container_left">
              <MailOutlineIcon style={{ margin: "7px" }} />
              makelaar.com.arg
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WhatsAppIcon style={{ margin: "7px" }} />
              +31 989 88999
            </div>
          </div>

          <div className="right_contact">
            <Instagram style={{ display: "block", margin: "7px" }} />
            <Facebook style={{ margin: "7px" }} />
          </div>
        </div>

        <div className="linea" />

        <div className="derechos">© 2021 Makelaar.All Rights Reserved</div>

        <div className="linea" />

        <div className="logo_footer">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </Fragment>
  );
}
