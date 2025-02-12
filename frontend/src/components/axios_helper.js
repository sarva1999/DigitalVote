import axios from "axios";

axios.defaults.baseURL="http://localhost:4005"
axios.defaults.headers.post["Content-Type"]="application/json"


export const request =(method,url,data)=>{
    return axios({
        method,
        url,
        data
    }
    )
}
