export const getUsers = () => {
    return {
      type: "GET_USERS_REQUESTED"
    };
};

export const postUser = (data) => {
  return {
    type: "POST_USER_REQUESTED",
    data: data
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER_REQUESTED",
    id
  };
};

export const updateUser = (data, id) => {
  return {
    type: "UPDATE_USER_REQUESTED",
    data: data,
    id: id
  };
};


