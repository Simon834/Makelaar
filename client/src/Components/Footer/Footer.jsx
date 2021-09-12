import { Fragment } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import logo from "../../images/logo-white-horizontal.png";
import style from "./Footer.module.css"
import { preload } from "../../Functions/api/precarga"



export default function Footer() {
  return (
    <Fragment>
      <div className={style.footer}>
        <div className={style.contacto}>
          <div className={style.left_contact}>
            <div className={style.container_left}>
              <MailOutlineIcon style={{ margin: "7px" }} />
            info_makelaar
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <WhatsAppIcon style={{ margin: "7px" }} />
              +54911456982365
            </div>
          </div>

          <div className={style.right_contact}>
            <Instagram style={{ display: "block", margin: "7px" }} onClick={()=>window.open('https://www.instagram.com/makelaar.inmobiliaria/', '_blank')}/>
            <Facebook style={{ margin: "7px" }} onClick={()=>window.open('https://m.facebook.com/Makelaar-110691244682513/', '_blank')}/>
          </div>
        </div>

        <div className={style.linea} />

        <div className={style.derechos}>© 2021 Makelaar.All Rights Reserved</div>

        <div className={style.linea} />

        <div className={style.logo_footer}>
          <img className={style.img} src={logo} alt="logo" onClick={e=>preload()}/>
          <em onClick={e=>preload()}>+</em>
        </div>

       </div>
    </Fragment>
  );
}
