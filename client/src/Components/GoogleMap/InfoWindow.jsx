import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import style from "./GoogleMap.module.css";
import CloseIcon from "@material-ui/icons/Close";

export default function InfoWindow(props) {
  const history = useHistory();
  const { name, address, price, img, id, setShow } = props;

  const handleClick = () => {
    setShow(null);
  };
  return (
    <div className={style.infoWindow}>
      <IconButton className={style.buttonClose}>
        <CloseIcon
          className={style.buttonIcon}
          fontSize="small"
          color="#848484"
          type="submit"
          onClick={handleClick}
        >
          X
        </CloseIcon>
      </IconButton>
      <div className={style.imgContainer}>
        <img src={img} alt={id} className={style.infoIMG} />
      </div>
      <div className={style.infoContent}>
        <div className={style.infoTitle}>{name}</div>
        <hr />
        <div className={style.infoAddress}>{address}</div>
        <div className={style.infoPrice}>
          $ {new Intl.NumberFormat().format(price)}
        </div>
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
