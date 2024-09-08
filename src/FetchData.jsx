import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common["Authorization"] =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQ1NTlmNTQ0NDkwZmI4MTVkZTdkZGU5ODFlZDgxMyIsIm5iZiI6MTcyNTY4NjQ0Mi43NTI0MjUsInN1YiI6IjY2ZGJlMTEzNWMwN2M4YjE3NWVjNGZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f0IiZyp7tfiHLJCClFmANACSXb1J_9HDMdgEn3Gpubs';


export default async function fetchData(page = 1, query = "", endPoint) {
  const params = {
    page,
    query,
    api_key: "464559f544490fb815de7dde981ed813",
  };
  const respons = await axios.get(`${endPoint}`, { params });

  return respons.data;
}