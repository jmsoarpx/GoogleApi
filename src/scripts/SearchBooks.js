const axios = require("axios");
const GetRepos = async (name, index) =>
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=10&startIndex=${index}`)
    .then((resp) => resp.data);

export default GetRepos;
