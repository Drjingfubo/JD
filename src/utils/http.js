import axios from "axios";
import { Toast } from "@nutui/nutui";
// create an axios instance
const service = axios.create({
    baseURL: "", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        // if (store.getters.token) {
        //   // let each request carry token
        //   // ['X-Token'] is a custom headers key
        //   // please modify it according to the actual situation
        //   config.headers['X-Token'] = getToken()
        // }
        config.withCredentials = true;
        config.xsrfCookieName = "csrftoken";
        config.xsrfHeaderName = "X-CSRFToken";
        const regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
        config.headers["X-CSRFToken"] =
            document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
        // const regsessionid = /.*sessionid=([^;.]*).*$/;
        // const sessionid = document.cookie.match(regsessionid)[1];
        // localStorage.setItem("sessionid", sessionid);
        return config;
    },
    error => {
        // do something with request error
        console.log(error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data;
        // console.log(res)
        if (!res) {
            // Message({
            //   message: res.message || 'Error',
            //   type: 'error',
            //   duration: 5 * 1000
            // })
            Toast.fail(res.message || "网络错误");
        } else {
            return res;
        }
        // if the custom code is not 20000, it is judged as an error.
        // if (res.code !== 20000 || res.coe !== 200) {
        //   Message({
        //     message: res.message || 'Error',
        //     type: 'error',
        //     duration: 5 * 1000
        //   })

        //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //     // to re-login
        //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //       confirmButtonText: 'Re-Login',
        //       cancelButtonText: 'Cancel',
        //       type: 'warning'
        //     }).then(() => {
        //       store.dispatch('user/resetToken').then(() => {
        //         location.reload()
        //       })
        //     })
        //   }
        //   return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //   return res
        // }
    },
    error => {
        console.log("err" + error); // for debug
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        Toast.fail("网络错误", error.message);
        return Promise.reject(error);
    }
);

export default service;
