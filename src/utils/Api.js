import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.timeout = 3000;
axios.defaults.headers["Content-Type"] = "application/json";
const BASE_URL = process.env.REACT_APP_API_URL_BASE;

axios.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      throw new Error(err);
    }
);

export class Api {
  static customAxios = axios.create({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    }
  });

  static getUrl(url) {
    if (!url || typeof url !== 'string') {
      throw new Error('url is illegal');
    }
    if (url.indexOf('http') < 0) {
      if (url[0] !== '/') {
        url = '/' + url;
      }
      return BASE_URL + url;
    }

    return url;
  }

  static async post (endpoint, data) {
    const bodyData = JSON.stringify(data);

    return this.customAxios.post(this.getUrl(endpoint), bodyData);
  }

  static async get (endpoint, params) {
    return this.customAxios.get(this.getUrl(endpoint), {
      params: params,
    });
  }

  static async put (endpoint, data, params) {
    const bodyData = JSON.stringify(data);

    return this.customAxios.put(this.getUrl(endpoint), bodyData, {
      params: params
    });
  }

  static async delete (endpoint, data, params) {

    return this.customAxios.delete(this.getUrl(endpoint), {
      params: params
    });
  }
}