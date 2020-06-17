import request from "../utils/http";
export function jokerlist(count, page) {
    const url = "/egj/getJoke?count=" + count + "&page=" + page + "&type=" + "video";
    // const url = "/egj/getJoke";
    return request({
        url: url,
        method: "get"
    });
}
export function jokerdetail(sid) {
    const url = "/egj/getSingleJoke?sid=" + sid;
    return request({
        url: url,
        method: "get"
    });
}
