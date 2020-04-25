// import axios from "axios";
// import { getToken } from "./store";
const axios = require("axios");
const environment = process.env.NODE_ENV;

let api_url =
	environment === "production" ? "production_url" : "http://localhost:5000/api";

class apiCall {
	getToken = () => {
		// This method return the token of the logged user
		let token =
			localStorage.getItem("token") !== null ||
			localStorage.getItem("token") !== undefined
				? localStorage.getItem("token")
				: null;
		if (token !== null) {
			return token;
		} else {
			return null;
		}
	};
	post = (url, payload, token = null) =>
		new Promise((resolve, reject) => {
			axios({
				url: `${api_url}${url}`,
				method: "POST",
				headers: {
					Authorization: token !== null ? token : undefined,
					"Content-Type": "application/json",
				},
				data: payload,
			})
				// .post(api_url + url, data, token !== null ? { headers } : undefined)
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

// const api = new apiCall();
// const token = api.getToken();
// console.log(token);
