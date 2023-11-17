import axios from "axios";

const Api = axios.create({
  baseURL: "https://test.api.amadeus.com/",
});

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      // Request was canceled
      return Promise.reject(error);
    }
    if (!navigator.onLine) {
      alert("No internet connection");
    }

    if (error.response) {
      if (error.response.status >= 500 && error.response.status <= 599) {
        alert("Server Error");
      }

      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.pathname = "/";
      } else if (error.response.status === 404) {
        this.$router.push({
          name: "not-found",
        });
      } else {
        console.log("HTTP Error:", error.response.status, error.response.data);
      }
    } else if (error.request) {
      // Network error
      window.alert(error.message, "Network");
    } else {
      // Other errors
      console.error("Error:", error);
    }

    return Promise.reject(error);
  }
);
export default Api;
