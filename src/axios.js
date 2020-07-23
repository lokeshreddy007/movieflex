import axios from "axios";

// Base URL Request to movie database

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3"
});

export default instance;