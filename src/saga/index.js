import { all } from 'redux-saga/effects';
import home from './home';

const sagas = function* sagas() {
  yield all([home()]);
};

export default sagas;
