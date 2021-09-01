import "./sViewBase.css";

export default function viewBase({filter}) {
    return (
        <div className="base-container">
            <div className="header-container">
                <div className="topBar-container"></div>
                <div className="navBar-container"></div>
                <div className="carousel-container"></div>
            </div>
            <div className="body-container">
                <div className="filter-container"></div>
                <div className={filter && "content-container right" : "content-container"}></div>
            </div>
            <div className="footer-container"></div>
        </div>
    );
}
