import { useState, useEffect } from "react";
import iconGoUp from "../../images/icon-go-up.png"
import s from "./ButtonGoToTop.module.css"

const BttnGoToTop = () => {

    const [appearBttn, setAppearBttn] = useState();
    
    useEffect(() => {
      window.addEventListener("scroll", makeAppearBttn);
      makeAppearBttn();
      return () => {
        window.removeEventListener("scroll", makeAppearBttn);
      };
    }, [appearBttn]);
    
    function makeAppearBttn() {
      setAppearBttn(window.scrollY);
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
      <>
        {appearBttn > 700 ? (
          <div className={s.buttonGoUp} onClick={scrollToTop}>
            <img src={iconGoUp} alt="button to go up" />
          </div>
        ) : null}
      </>
    );
}

export default BttnGoToTop;


