import request from "../utils/http";
import Qs from "qs";
export function loginApi(username, password) {
    let data = { username: username, pwd: password };
    data = Qs.stringify(data);
    return request({
        url: "/api/login",
        method: "post",
        data
    });
}
export function registApi(username, password) {
    let data = { username: username, pwd: password };
    data = Qs.stringify(data);
    return request({
        url: "/api/register",
        method: "post",
        data
    });
}
