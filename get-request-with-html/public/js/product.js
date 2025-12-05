const handleFormSubmit = (e) => {
  e.preventDefault();

  const productName = e.target.productName.value;
  const obj = {
    productName: productName,
  };

  axios
    .post("http://localhost:3000/products", obj)
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
