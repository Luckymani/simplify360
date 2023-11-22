import React from "react";
import "../styles/info.css";

function InfoSection(props) {
  const { id, headding, para, image, color,bg} = props.values;
  return (
    <section className={`info-section ${id}`}>
      <img className={`background ${id}-bg`} src={`images/backgrounds/${bg}.svg`}></img>
      <div className="section-wrapper">
        <div className="info-container">
          <div className="content-wrapper">
            <h1>{headding}</h1>
            <p className="pfs-2">{para}</p>
                <button className="btn" style={{ background: color }}>
                Read More
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="81"
                    height="79"
                    viewBox="0 0 81 79"
                    fill="none"
                >
                    <path
                    d="M0.611979 73C0.611979 75.9455 2.99979 78.3333 5.94531 78.3333C8.89083 78.3333 11.2786 75.9455 11.2786 73C11.2786 70.0545 8.89083 67.6667 5.94531 67.6667C2.99979 67.6667 0.611979 70.0545 0.611979 73ZM5.94531 74C17.5759 74 35.2127 70.3547 50.4384 59.412C65.7055 48.4396 78.4914 30.167 80.3862 1.06497L78.3904 0.935029C76.5349 29.433 64.0584 47.1604 49.2712 57.788C34.4426 68.4453 17.2331 72 5.94531 72V74Z"
                    fill={color}
                    />
                </svg>
                </button>
          </div>
          <div className="image-wrapper">
            <img
              src={`images/sections/${image}.png`}
              alt="image goes here"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
