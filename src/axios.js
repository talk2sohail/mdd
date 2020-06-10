// import axios from "axios";
// import { getToken } from "./store";
const axios = require("axios");
const environment = process.env.NODE_ENV;

let api_url =
	environment === "production" ? "https://imran-bhai.herokuapp.com/api" : "http://localhost:5000/api";

class apiCall {
	getToken = () => {
		// This method return the token of the logged user
		let token = localStorage.getItem("uuid")
			? localStorage.getItem("uuid")
			: sessionStorage.getItem("uuid")
			? sessionStorage.getItem("uuid")
			: null;

		if (token !== null) {
			return token;
		} else {
			return null;
		}
	};
	post = (url, payload = null, token = null) =>
		new Promise((resolve, reject) => {
			axios({
				url: `${api_url}${url}`,
				method: "POST",
				headers: {
					Authorization: token !== null ? token : undefined,
				},
				data: payload ? payload : null,
			})
				.then(function (response) {
					resolve(response);
				})
				.catch(function (error) {
					reject(error);
				});
		});

	get = (url, token) =>
		new Promise((resolve, reject) => {
			axios({
				url: `${api_url}${url}`,
				method: "GET",
				headers: {
					Authorization: token !== null ? token : undefined,
				},
			})
				// .get(api_url + url, { headers })
				.then(function (response) {
					resolve(response);
				})
				.catch(function (error) {
					reject(error);
				});
		});
}

export default new apiCall();
