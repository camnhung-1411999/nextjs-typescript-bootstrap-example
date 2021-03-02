import axios from 'axios';
import axiosApiInstance from './axiosApiInstance';

const API_URL = `${process.env.BACKEND_URL}users/`;

class UserService {
  login(data) {
    return axios.post(`${API_URL}login`, { data }).then((response) => {
      if (response.data) {
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.data.accessToken),
        );
        localStorage.setItem(
          'refreshToken',
          JSON.stringify(response.data.refreshToken),
        );
      }
      return response.data;
    });
  }

  loginSocial(input) {
    return axios
      .post(`${API_URL}social`, {
        user: input.user,
        password: input.password,
        name: input.name,
        role: input.role,
      }).then(async (response) => {
        if (response.data) {
          localStorage.setItem(
            'accessToken',
            JSON.stringify(response.data.accessToken),
          );
          localStorage.setItem(
            'refreshToken',
            JSON.stringify(response.data.refreshToken),
          );
        }
        return response.data;
      });
  }

  logout() {
    return axiosApiInstance.put(`${API_URL}logout`);
  }

  register(input) {
    return axios
      .post(`${API_URL}register`, input)
      .then((response) => (response.data));
  }

  resetPassword(input) {
    return axios.post(`${API_URL}resetpassword`, { user: input });
  }

  update(data) {
    return axiosApiInstance.put(
      API_URL,
      data,
    );
  }

  getUser() {
    return axiosApiInstance.get(API_URL);
  }

  async getAllUser() {
    return axiosApiInstance.get(`${API_URL}list`);
  }
}
export default new UserService();
