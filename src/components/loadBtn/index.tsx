import React from "react";
import "./style.css";
import Spinner from "../spinner";

const LoadBtn: React.FC<{ loadMore: () => void, load: boolean }> = ({
  loadMore,
  load
}) => (
  <>
    {load ? (
      <Spinner />
    ) : (
      <button className="splash__load_btn" onClick={loadMore}>
        Load more
      </button>
    )}
  </>
);

export default LoadBtn;
