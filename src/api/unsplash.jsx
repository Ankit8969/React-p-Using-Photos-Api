import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID f6trr0cLd_EmfDVjWKQy4W1UiI5r4jHKO9w-p5sJrsw",
  },
});
