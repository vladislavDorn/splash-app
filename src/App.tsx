import React, { useEffect } from "react";
import ApiService from "./services/apiService";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "./types/types";
import { fetchSucces, pageCounter } from "./models/actions/actions";
import { imageData } from "./types/interfaces";

import Header from "./components/header";
import ImagesList from "./components/imagesList";
import LoadBtn from "./components/loadBtn";

interface RootState {
  main: StoreState;
}

interface RootDispatch {
  fetchSucces: (data: Array<imageData>) => void;
  pageCounter: (count: number) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootState & RootDispatch;

const App = ({ main, fetchSucces, pageCounter }: Props) => {
  const apiService = new ApiService();

  useEffect(() => {
    if (!main.images.length) {
      apiService.getImages().then(res => fetchSucces(res));
    }
  });

  const loadMore = () => {
    apiService.getImages(main.pageNumber + 1).then(res => {
      fetchSucces(res)
      pageCounter(main.pageNumber + 1)
    });
  };

  return (
    <>
      <Header />
      <ImagesList main={main} />
      <LoadBtn loadMore={loadMore}/>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  main: state.main
});

const mapDispatchToProps: RootDispatch = {
  fetchSucces,
  pageCounter
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
