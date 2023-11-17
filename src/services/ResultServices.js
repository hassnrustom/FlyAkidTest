import Api from "@/apis/Api";
import authHeader from "./auth-header";

const END_POINT = "v2/shopping/flight-offers";

class ResultServices {

  GetResult(originLocationCode, destinationLocationCode, departureDate) {
    return Api.get(`${END_POINT}`, { headers: authHeader(), params: {
        originLocationCode: originLocationCode,
        destinationLocationCode: destinationLocationCode,
        departureDate: departureDate,
        adults: 1
    } })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
}

export default new ResultServices();
