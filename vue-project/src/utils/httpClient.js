import axios from 'axios'
import qs from 'qs'


const _Url = 'http://10.3.133.68:88/';


function getUrl(url){
//    console.log(url);
   //判断传入的url路径是否是http开头
   if(url.startsWith("http") || url.startsWith("https")){
       return url;
   }
   //不是http开头，进行路径的拼接
   return `${_Url}${url}`;
}


const Http = {
   get:(url,query)=> new Promise((resolve,reject)=>{
       //new Promise 是为进行在vue store里面进行异步传值
       var path = getUrl(url);
       // console.log('get222',path,query);
       //get请求
       axios.get(path,{params:query}).then((res1,error)=>{
           if(res1){
               resolve (res1);
           }else{
               reject (error);
           }
       })
   }),

   post:(url,query)=> new Promise((resolve,reject)=>{
       //new Promise 是为进行在vue store里面进行异步传值
       var path = getUrl(url);
       //post请求
    //    console.log('post',url,query);
       axios({
           url:path,
           method:'post',
           data: qs.stringify(query),
           headers:{
               'Content-Type': 'application/x-www-form-urlencoded'

           }
       }).then((res1,error)=>{

           if(res1){
               resolve (res1);
           }else{
               reject (error);
           }

       })
   }),
//    post:(url,query)=> new Promise((resolve,reject)=>{
//     //new Promise 是为进行在vue store里面进行异步传值
//     var path = getUrl(url);
//     //post请求
//  //    console.log('post',url,query);
//     axios({
//         url:path,
//         method:'post',
//         data: qs.stringify(query),
//         headers:{
//             'Content-Type': 'application/x-www-form-urlencoded',
//             "auth": window.localStorage.getItem('token')
//         },
//         transformRequest: [function (data) {
//             let ret = ''
//             for (let it in data) {
//               ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//             }
//             return ret
//         }], 

//     }).then(res => {
//         if(!res.data.status && res.data.message == "unauth"){
//             router.push({name: 'login'});
//             return false;
//         }				
//         resolve(res.data)
//     }).catch(error => {
        
//         reject(error)
//     })         
// }),
   poststr(_url, _params){
        var url = _url && _url.startsWith('http') ? _url : `${baseUrl}/${_url}`;
        return new Promise((resolve, reject) => {
            axios({
                url: url,
                method: 'post',
                data: _params || {},
                //目的是设置符合post请求的请求头

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    authorization: window.localStorage.getItem('dktoken')
                }
            }).then(res => {
                // if(!res.data.status && res.data.error == "unauthorized"){
                //     router.push('login');
                //     console.log(res);
                //     return false;
                // }               
                resolve(res)
            }).catch(error => {
                
                reject(error)
            })
        })
    }

}

export default Http; 
