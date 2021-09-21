import { useHistory } from "react-router";
import style from "./GoogleMap.module.css";

export default function InfoWindow(props) {
  const history = useHistory();
  const { name, address, price, img, id } = props;
  console.log("id", id);
  return (
    <div className={style.infoWindow}>
      <div className={style.imgContainer}>
        <img src={img} alt="" className={style.infoIMG} />
        <div className={style.infoPrice}>
          $ {new Intl.NumberFormat().format(price)}
        </div>
      </div>
      <div className={style.infoContent}>
        <div className={style.infoTitle}>{name}</div>
        <div className={style.infoAddress}>{address}</div>
        <div
          className={style.infoLink}
          onClick={() => history.push(`/property/${id}`)}
        >
          Ver mas...
        </div>
      </div>
    </div>
  );
}
