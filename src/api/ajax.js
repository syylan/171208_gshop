import axios from 'axios'
export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {
    //执行异步Ajax请求
    let promise
    if (type==='GET'){
      //准备url query数据
      let dataStr=''//数据拼接 将data里的值拼接到url里面
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if (dataStr!==''){
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
        url=url+'?'+dataStr
      }
      promise=axios.get(url)
    }else {
      promise=axios.post(url,data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
