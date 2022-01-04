const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const users = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USERS_REQUESTED":
        return { ...state, loading: true };
      case "GET_USERS_SUCCESS":
        return { ...state, loading: false, users: action.users };
      case "GET_USERS_FAILED":
        return { ...state, loading: false, error: action.message };
      case "POST_USER_REQUESTED":
        return { ...state, loading: false };
      case "DELETE_USER_REQUESTED":
        return { ...state, loading: false };
      case "UPDATE_USER_REQUESTED":
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default users;