import { put, call, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actions/user';
import authService from '../../services/userService';

function* handleLoginRequest(action) {
  console.log("Payload:", action.payload);
  const { email, password } = action.payload.data;

  try {
    const user = yield authService.login({email, password});
    yield put(loginSuccess(user));
    action.payload.redirect();
  } catch (error) {
    console.log("Login Failed");
    yield put(loginFailure(error));
  }
}

function* handleRegisterRequest(action) {

  const { email, password, first_name, last_name } = action.payload.data;

  try {
    const user = yield authService.register({email, password, first_name, last_name});
    console.log("Registration done!");
    action.payload.redirect();
  } catch (error) {
    console.log("Registration Failed");
  }
}

function* handleLogoutRequest(action) {
  try {
    yield call(authService.logout, action.payload);
  } catch (errors) {
    console.log("errors: ", errors);
    //yield put(setErrors(errors.response.data));
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN_REQUEST', handleLoginRequest);
}

export function* watchLogout() {
  yield takeLatest('LOGOUT_REQUEST', handleLogoutRequest);
}

export function* watchRegister() {
  yield takeLatest('REGISTER_REQUEST', handleRegisterRequest);
}