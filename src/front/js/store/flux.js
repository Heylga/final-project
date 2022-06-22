

const getState = ({ getStore, getActions, setStore }) => {

  return {
    store: {
      URLbase: process.env.BACKEND_URL,
			user: JSON.parse(localStorage.getItem("user")) || {},
			isLoggedIn: JSON.parse(localStorage.getItem("user")) || false,
			token: localStorage.getItem("token") || null,
			favorite: [],
      message: null,
      books: [],
      book: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      
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
					process.env.BACKEND_URL + "/api/login/",
					post
				)

					.then((response) => response.json())
					.then((result) => {
						console.log('>>>> result from actions', result)
						setStore({
							user: result?.user,
							token: result?.token,
							isLoggedIn: true,
						})


						localStorage.setItem("user", JSON.stringify(result.user))
						localStorage.setItem("token", result.token)

						console.log("info del user desde local storage---->>>>", JSON.parse(localStorage.getItem("user")))
					})
					.catch((error) => console.log("error", error));
			},

			logout: () => {

				setStore({
					user: null,
					isLoggedIn: false,
					token: null,
				})

				localStorage.removeItem("token")
				localStorage.removeItem("user")
				localStorage.removeItem("user_name")
				localStorage.removeItem("first_name")
				localStorage.removeItem("user_name")
				localStorage.removeItem("city")

			},
      
      
      addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorite];
				updatedList.splice(id, 1);
				setStore({ favorite: [...updatedList] });
			},
      
      
      fetchBooks: () => {
        fetch(process.env.BACKEND_URL + "/api/books", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ books: data.results }));
      },

      fetchBook: (id) => {
        console.log("fechtBook");
        const store = getStore();
        fetch(process.env.BACKEND_URL + "/api/book/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setStore({ book: result.results });
            console.log("BOOK =====", store.book);
          })
          .catch((error) => console.log("error", error));
        // .then((promiseResponse) => {
        //   promiseResponse.json();
        //   console.log("resp =", promiseResponse);
        // })
        // .then((data) => setStore({ book: data.results }))
        // .catch((error) =>
        //   console.log("Error loading message from backend", error)
        // );
      },
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
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
      },
    },
  };
};

export default getState;
