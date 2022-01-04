import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import fetchGetUsers from "../requests/fetchUsers";

const url = "https://61ccc684198df60017aec228.mockapi.io/users";

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

const postUser = async (state) => {
  try {
      const response = await fetch(url, {
          method: "POST",
          body: state.data
      });
      return await response.json();
  } catch (error) {
      throw error;
  }
};

const deleteUser = async (id) => {
  try {
      const response = await fetch(`https://61ccc684198df60017aec228.mockapi.io/users/${id}`, {
          method: "DELETE"
      });
      return await response.json();
  } catch (error) {
      throw error;
  }
};

const updateUser = async (data, id) => {
  try {
      const response = await fetch(`https://61ccc684198df60017aec228.mockapi.io/users/${id}`, {
          method: "PUT",
          body: data,
          mode: 'cors'
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

function* handlePostUser(data) {
  try {
    yield call(postUser, data);
    yield put({ type: "POST_USER_SUCCESS" });
  } catch (err) {
    yield put({ type: "POST_USERS_FAILED", message: err.message });
  }
}

function* handleDeleteUser(state) {
  try {
    yield call(deleteUser, state.id);
    yield put({ type: "DELETE_USER_SUCCESS" });
  } catch (err) {
    yield put({ type: "POST_USERS_FAILED", message: err.message });
  }
}

function* handleUpdateUser(state) {
  try {
    yield call(updateUser, state.data, state.id);
    yield put({ type: "UPDATE_USER_SUCCESS" });
  } catch (err) {
    yield put({ type: "UPDATE_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
  yield takeLatest("POST_USER_REQUESTED", handlePostUser);
  yield takeLatest("DELETE_USER_REQUESTED", handleDeleteUser);
  yield takeLatest("UPDATE_USER_REQUESTED", handleUpdateUser);
}

export default watcherUserSaga;
