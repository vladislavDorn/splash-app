import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "./types/types";
import { fetchLoad } from "./models/actions/actions";

import Header from "./components/header";
import ImagesList from "./components/imagesList";
import LoadBtn from "./components/loadBtn";

interface RootState {
  main: StoreState;
}

interface RootDispatch {
  fetchLoad: () => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootState & RootDispatch;

const App = ({ main, fetchLoad }: Props) => {
  useEffect(() => {
    fetchLoad();
  }, [fetchLoad]);

  const loadMore = () => fetchLoad();

  return (
    <>
      <Header />
      <ImagesList main={main} />
      <LoadBtn loadMore={loadMore} load={main.load} />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  main: state.main
});

const mapDispatchToProps: RootDispatch = {
  fetchLoad
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
