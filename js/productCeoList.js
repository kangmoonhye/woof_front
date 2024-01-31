const backend = "http://localhost:8080"

const getProductList = async () => {
  // http://localhost:8080/productCeo/listCeo
  let response = await axios.get(backend+"/productCeo/listCeo");
  return response.data.result;
};