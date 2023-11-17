import store from "../store/index"
export default function authHeader() {
    let token = store.state.mainToken
    return {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    
}
