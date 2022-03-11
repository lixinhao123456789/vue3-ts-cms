import axios from "axios"

// axios的实例对象
// axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
//   console.log(res);
// })

// promise 多个请求
// axios.all([
//   axios.get("http://123.207.32.32:8000/home/multidata"),
//   axios.get("http://123.207.32.32:8000/home/multidata")
// ]).then(res=>{
//   console.log(res);
// })


// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return err
  }
)

axios.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return err
  }
)
