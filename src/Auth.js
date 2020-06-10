import jwt from "jsonwebtoken";

const Auth = {
	signUpAuth: (token) => {
		sessionStorage.setItem("uuid", token);
	},
	signInAuth: (token2) => {
		localStorage.setItem("uuid", token2);
	},
	getNameFromJWT: () => {
		if (localStorage.getItem("uuid")) {
			const t = localStorage.getItem("uuid");
			const decoded = jwt.decode(t);
			const { name } = decoded;
			return name;
		} else if (sessionStorage.getItem("uuid")) {
			const t = sessionStorage.getItem("uuid");
			const decoded = jwt.decode(t);
			const { name } = decoded;
			return name;
		}
		return "";
	},
	logout: () => {
		localStorage.removeItem("uuid");
		sessionStorage.removeItem("uuid");
		localStorage.removeItem("cart-item");
	},
	getAuth: () => {
		if (localStorage.getItem("uuid")) {
			const { _id } = jwt.decode(localStorage.getItem("uuid"));
			if (_id && _id.length) return true;
		} else if (sessionStorage.getItem("uuid")) {
			const { _id } = jwt.decode(sessionStorage.getItem("uuid"));
			if (_id && _id.length) return true;
		}
		return false;
	},
};
export default Auth;
