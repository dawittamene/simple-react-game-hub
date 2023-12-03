import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4d994c0cb20143319ffffe135cca357b'
    }
})