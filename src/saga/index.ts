import { put, takeEvery, call, all, select } from "redux-saga/effects";
import { FETCH_IMAGES } from "../constants/Actions";
import {
  fetchSucces,
  fetchError,
  pageCounter
} from "../models/actions/actions";
import ApiService from "../services/apiService";
import { StoreState } from "../types/types";

const apiService = new ApiService();

interface RootState {
  main: StoreState;
}

const getCounter = (state: RootState) => state.main.pageNumber;

function* getFetchImages() {
  try {
    const page = yield select(getCounter);
    const response = yield call(() => apiService.getImages(page));
    yield put(fetchSucces(response));
    yield put(pageCounter());
  } catch (error) {
    yield put(fetchError());
    throw new Error(error);
  }
}

function* responseFetchImages() {
  yield takeEvery(FETCH_IMAGES, getFetchImages);
}

export default function* rootSaga() {
  yield all([responseFetchImages()]);
}
