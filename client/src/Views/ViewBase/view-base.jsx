import "./styleViewBase.css";
import NavBar from "../../Components/NavBar/NavBar";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { Fragment } from "react";
import Chat from '../../Components/chat/Chat'
import ButtonToGoUp from "../../Components/ButtonGoToTop/ButtonGoToTop"

export default function ViewBase({ carousel, filters, content, propertyMap }) {
  return (
    <div className="base-container">
      <div
        className={
          carousel ? "header-container with-carousel" : "header-container"
        }
      >
        <div className="topBar-container">
          <TopBar />
        </div>
        <div className="navBar-container">
          <NavBar />
        </div>
        {carousel && (
          <Fragment>
            <div className="carousel-container">{carousel}</div>
            {/* <div className="Separador" style={{ width: "100%" }}>
              <div className="container">
                <p>DATOS 1</p>
              </div>
              <div className="container">
                <p>DATOS 2</p>
              </div>
              <div className="container">
                <p>DATOS 3</p>
              </div>
            </div> */}
          </Fragment>
        )}
      </div>
      <div>
        {propertyMap && (
          <>
            <div className="map-container">{propertyMap}</div>
          </>
        )}
      </div>

      <div className="body-container">
        {filters && <div className="filter-container">{filters}</div>}
        <div
          className={filters ? "content-container right" : "content-container"}
        >
          {content}
        </div>
      <div className="btn">
      <Chat />
      </div>
      </div>
      <ButtonToGoUp/>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
