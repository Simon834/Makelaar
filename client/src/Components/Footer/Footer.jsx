import { Fragment } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import logo from "../../images/logo-white-horizontal.png";
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <Fragment>
      <div className={style.footer}>
        <div className={style.contacto}>
          <div className={style.left_contact}>
            <div className={style.container_left}>
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

          <div className={style.right_contact}>
            <Instagram style={{ display: "block", margin: "7px" }} />
            <Facebook style={{ margin: "7px" }} />
          </div>
        </div>

        <div className={style.linea} />

        <div className={style.derechos}>© 2021 Makelaar.All Rights Reserved</div>

        <div className={style.linea} />

        <div className={style.logo_footer}>
          <img className={style.img} src={logo} alt="logo" />
        </div>
      </div>
    </Fragment>
  );
}
