import React from "react";
import { StoreState } from "../../types/types";
import "./style.css";

interface IImagesList {
  main: StoreState;
}

const ImagesList = ({ main }: IImagesList) => {
  return (
    <div className="container">
      <div className="splash__images_list">
        {main.images.length
          ? main.images.map(
              ({ id, urls, alt_description, width, height, likes }, index) => {
                return (
                  <div
                    id={id}
                    className={`splash__images_item ${
                      height > width ? "vertical" : ""
                    }`}
                    key={index}
                  >
                    <div className="splash__images_stat_wrapper">
                      <span className="splash__images_stat">{likes}</span>
                    </div>
                    <img src={urls.regular} alt={alt_description} />
                  </div>
                );
              }
            )
          : null}
      </div>
    </div>
  );
};

export default ImagesList;
