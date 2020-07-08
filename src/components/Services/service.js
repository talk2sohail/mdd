import React from "react";
import Tilt from "react-tilt";

export const Service = ({ repair, img }) => {
  return (
    <>
      <Tilt className="Tilt" options={{ max: 35, scale: 1, reverse: true }}>
        <div className="Tilt-inner">
          <a
            style={{ cursor: "pointer" }}
            href="/repair"
            className="text-center"
          >
            <img src={img} alt={repair} />
            <div className="content">
              <h2 className="text-center">{repair}</h2>
            </div>
          </a>
        </div>
      </Tilt>
    </>
  );
};
