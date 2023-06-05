export const getUser = (state) => state.user.user;

export const isLoggedIn = (state) => state.user.user !== null;