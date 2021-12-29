import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import fetchGetUsers from "../requests/fetchUsers";

const url = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
    try {
        const response = await fetch(url, {
            method: "GET",
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

function* handleGetUsers() {
  try {
    const users = yield call(getUsers);
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;
