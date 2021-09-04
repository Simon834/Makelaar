import "./styleViewBase.css";
import NavBar from "../../Components/NavBar/NavBar";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";

export default function ViewBase({carousel, filters, content}) {
    return (
        <div className="base-container">
            <div className={ carousel? "header-container with-carousel" : "header-container"}>
                <div className="topBar-container"><TopBar/></div>
                <div className="navBar-container"><NavBar/></div>
                {carousel &&<div className="carousel-container">{ carousel }</div>}
            </div>
            <div className="body-container">
                {filters && <div className="filter-container">{filters}</div>}
                <div className={filters? "content-container right": "content-container"}>{content}</div>
            </div>
            <div className="footer-container"><Footer/></div>
        </div>
    );
}