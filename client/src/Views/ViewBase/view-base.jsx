import "./styleViewBase.css";
import NavBar from "../../Components/NavBar/NavBar";
import TopBar from "../../Components/TopBar/TopBar";

export default function ViewBase({topBar, navBar, carousel, filters, content, footBar}) {
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
            <div className="footer-container">{footBar}</div>
        </div>
    );
}