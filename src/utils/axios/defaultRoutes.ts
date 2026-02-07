import axios from "axios";
import { toaster } from "../../components/ui/toaster";

const token = sessionStorage.getItem("token");
const host = window.location.host.split('.')

const defaultAPI=()=> axios.create({
  baseURL:
    host[0] == "192" ? `${import.meta.env.VITE_API_URL}/api/v1`: 
    host[0] == "172" ?`${import.meta.env.VITE_API_SERVER}/api/v1`:
    `${import.meta.env.VITE_API_URL_BASE}/api/v1`,
  timeout: 3000,
});

defaultAPI().interceptors.request.use(
  (config) => {
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    toaster.create({
      type: "error",
      title: error.message,
    });
    console.log(error);
  }
);

defaultAPI().interceptors.response.use(
  function (response) {
    console.log(response)
    return response;
  },
  function (error) {
    toaster.create({
      type: "error",
      title: error.message,
    });
    console.log(error);
  }
);

export default defaultAPI();
