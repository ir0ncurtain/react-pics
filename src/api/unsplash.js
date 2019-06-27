import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 22211d8c44083f1906bed9f3adfab33ebe43c12a28d314749e3bd7f5bec0339c"
  }
});
