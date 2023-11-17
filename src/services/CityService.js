import Api from "@/apis/Api";
import authHeader from "./auth-header";

const END_POINT = "v1/reference-data/locations/cities";

class CityService {

  SearchCiteies(input_search) {
    return Api.get(`${END_POINT}`, { headers: authHeader(), params: {keyword: input_search} })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}

export default new CityService();
