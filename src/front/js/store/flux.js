import { URLbase } from "../../../../secrets";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			isLoggedIn: false,
			accessToken: null,

		},
		actions: {

			login: (email, password) => {
				// fetch
				const post = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};

				console.log("info login desde las actions", post);

				fetch(
					`${URLbase}/api/login`,
					post
				)

					.then((response) => response.json())
					.then((result) => {
						console.log('result from actions', result)
						setStore({
							user: result?.user,
							accessToken: result?.access_token,
							isLoggedIn: true,
						})
					})
					.catch((error) => console.log("error", error));
			},

			logout: () => {

				setStore({
					user: null,
					isLoggedIn: false,
					accessToken: null,
				})
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
