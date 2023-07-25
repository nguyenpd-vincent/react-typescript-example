// Placeholder service for fetching ramen product data from the server
import axios from 'axios';
const fetchRamenProducts = async () => {

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=329b6d29b7321768&large_area=Z011&format=json',
//   headers: {"Access-Control-Allow-Origin": "*"}
// };

// const data = axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
//   return response.data;
// })
// .catch((error) => {
//   console.log("error",error);
// });
const data = fetch("/api/hotpepper/gourmet/v1/?key=329b6d29b7321768&large_area=Z011&format=json")
  .then(async (response) => {
    console.log('response.json() :>> ', await response.json());
    return response.json();
  })
  .catch((error) => {
    console.log('error :>> ', error);
    // Handle any errors
  });

  // const data = client.get('?key=329b6d29b7321768&large_area=Z011&format=json').then((response) => {
  //   console.log('response :>> ', response);
  //   return response;
  // }).catch((error) => {
  //   console.log('error :>> ', error);
  //   return error;
  // })
  // const response = await fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=329b6d29b7321768&large_area=Z011&format=json',{
  //   mode: 'no-cors',
  //   // method: 'GET',

  // }).then((data) => data).catch((error) => error)
  //   {
  //     mode: 'cors'
  //   });
  // console.log('response', response);

  return data;
};

const fetchRamenProductById = async (id: number): Promise<any> => {
  // Implement API call to fetch ramen product data by ID
  // Return the fetched data as an object
  return { id: 1, name: 'Ramen 1', price: 5.99 };
};

const RamenProductServices = { fetchRamenProducts, fetchRamenProductById }
export default RamenProductServices;