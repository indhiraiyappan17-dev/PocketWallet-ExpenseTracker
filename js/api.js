fetch("https://dummyjson.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("API Loaded Successfully", data);
  })
  .catch(error => {
    console.log("Error:", error);
  });