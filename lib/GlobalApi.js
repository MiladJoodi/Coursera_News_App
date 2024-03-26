import { data } from "autoprefixer";

const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'https://65e24749a8583365b3181601.mockapi.io'
})

// Server Side
const getUnis = () => axiosClient.get('/unis').then(resp => {
    return resp.data;
})

// Client Side
const getCategory = () => axiosClient.get("/categories?populate=*");


// Server Side
const getCategoryList = () => axiosClient.get('/categories?populate=*').then(resp => {
    return resp.data.data;
})

// All Products
const getAllProducts = () => axiosClient.get("/products?populate=*").then(resp => {
    return resp.data.data
})

// Get Product By Category
const getProductsByCategory = (category) => axiosClient.get('/products?filters[categories][name][$in]=' + category + "&populate=*")
    .then(resp => {
        return resp.data.data;
    })

    // Register User
const registerUser = (username, email, password) => axiosClient.post('/auth/local/register', {
    username:username,
    email:email,
    password:password
})

// Sign In User
const SignIn = (email, password)=> axiosClient.post('/auth/local',{
    identifier: email,
    password:password
})

// Add To Cart
const addToCart = (data, jwt)=> axiosClient.post('/user-carts', data, {
    headers:{
        Authorization: 'Bearer ' +jwt
    }
})

    // Use to get total cart item counter
    const getCartItems = (userId, jwt)=>axiosClient.get('/user-carts?filters[userId][$eq]='+userId+'&populate=*', {
        headers: {
            Authorization: 'Bearer '+jwt
        }
    }).then(resp=>{
        return data.data;
    })


export default {
    getUnis,
    getCategory,
    getCategoryList,
    getAllProducts,
    getProductsByCategory,
    registerUser,
    SignIn,
    addToCart,
    getCartItems,
}