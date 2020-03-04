import React from "react";
import "./style.css";

const LoadBtn: React.FC<{ loadMore: () => void }> = ({ loadMore }) => (
  <button className="splash__load_btn" onClick={loadMore}>
    Load more
  </button>
);

export default LoadBtn;
