import HttpService from "./HttpService";

class userService extends HttpService {
  login = async (credentials) => {
    const { data } = await this.client.post("/login/", credentials);
    console.log("Data:", data);
    localStorage.setItem("token", data.access);
    // return data.user;
  };
  register = async (userData) => {
    const { data } = await this.client.post("/register/", userData);
    //localStorage.setItem("token", data.token);
    return data.user;
  };
  logout = async (setIsAuthenticated) => {
    //await this.client.post("/logout");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
}

const authService = new userService();

export default authService;