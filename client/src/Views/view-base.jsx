import "./styleViewBase.css";

export default function viewBase({topBar, navBar, carousel, filter, content, footBar}) {
    return (
        <div className="base-container">
            <div className={ carousel? "header-container with-carousel" : "header-container"}>
                <div className="topBar-container">{topBar}</div>
                <div className="navBar-container">{navBar}</div>
                {carousel &&<div className="carousel-container">{ carousel }</div>}
            </div>
            <div className="body-container">
                {filter && <div className="filter-container">{filter}</div>}
                <div className={filter? "content-container right": "content-container"}>{content}</div>
            </div>
            <div className="footer-container">{footBar}</div>
        </div>
    );
}