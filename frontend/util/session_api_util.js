export const signup = (credentials, success, error) => {
  $.ajax({
    url: "http://localhost:3000/api/users",
    method: "POST",
    data: {user: credentials},
    success,
    error
  });
};

export const login = (credentials, success, error) => {
  $.ajax({
    url: "http://localhost:3000/api/session",
    method: "POST",
    data: {user: credentials},
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: "http://localhost:3000/api/session",
    method: "DELETE",
    success,
    error
  })
};
