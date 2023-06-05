export const loginRequest = (requestData) => {
    return {
      type: 'LOGIN_REQUEST',
      payload: requestData
    };
  };

export const registerRequest = (requestData) => {
      return {
        type: 'REGISTER_REQUEST',
        payload: requestData
      };
    };
  
export const loginSuccess = (user) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: user
    };
  };
  

  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error
    };
  };


  export const logoutRequest = (setIsAuthenticated) => {
      return {
        type: 'LOGOUT_REQUEST',
        payload: setIsAuthenticated
      };
  };