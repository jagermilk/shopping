import axios from "axios";
export function request(config) {
  //   return new Promise((resolve, reject) => {
  //     const instance = axios.create({
  //       baseURL: "http://152.136.185.210:7878/api/hy66",
  //       timeout: 5000,
  //     });
  //     instance(config)
  //       .then((res) => {
  //         resolve(res);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   })
  //方式一 返回一个promise函数
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000,
  });

  //方式二 直接返回instance，默认是一个promise对象
  //方式三 传入三个参数，config，success，failure
  instance.interceptors.request.use(
    (res) => {
      return res
    },
    (err) => {
      return err
    }
  )
  instance.interceptors.response.use(
    (res) => {
      return res.data
    },
    (err) => {
      return err
    }
  )
  instance.interceptors.response;
  return instance(config);
}
