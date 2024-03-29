
const getState = ({ getStore, getActions, setStore }) => {

  return {

    //STORE (to store information)

    store: {

      user: JSON.parse(localStorage.getItem("user")) || {},
      isLoggedIn: JSON.parse(localStorage.getItem("user")) || false,
      token: localStorage.getItem("token") || null,
      usersbooks: [],
      users: [],
      books: [],
      booksInSeach: [],
      book: [],
      userPosition: { latitude: 51.892689, longitude: -8.466676 },
    },


    //ACTIONS (are called via appContext)

    actions: {

      setSearchingBooks: (books) => {
        const store = getStore();
        setStore({ booksInSeach: books })
        console.log("BOOK =====", store.books);
      },

      // REGISTRATION (INSIDE /SIGNUP) AND LOGIN USER

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
          .catch((error) => alert("the password or email are wrong"));
      },



      logout: () => {

        setStore({
          user: null,
          isLoggedIn: false,
          token: null,
        })

        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.removeItem("user")
        localStorage.removeItem("name")
        localStorage.removeItem("city")

      },


      // EDIT INFORMATION


      editUserInformation: (user_id) => {
        const put = {
          method: 'PUT',
          headers: {

            "Content-Type": "application/json",
          },
          body: JSON.stringify(user_id),
        };

        console.log("info login desde las actions", put);

        fetch("https://3001-heylga-finalproject-h03o5cax6rs.ws-eu63.gitpod.io"  + "/api/edit-profile/" + user_id, put)

          .then(response => response.text())
          .then(result => console.log('>>>> result from actions', result))
          .catch(error => console.log('error', error));
      },



      changePassword: (user_id) => {
        const put = {
          method: 'PUT',
          headers: {

            "Content-Type": "application/json",
          },
          body: JSON.stringify(user_id),
        };

        console.log("info login desde las actions", put);

        fetch("https://3001-heylga-finalproject-h03o5cax6rs.ws-eu63.gitpod.io" + "/api/security", put)

          .then(response => response.text())
          .then(result => console.log('>>>> result from actions', result))
          .catch(error => console.log('error', error));
      },


      // BOOKS

      fetchUsersBooks: () => {


        fetch(process.env.BACKEND_URL + "/api/booksbyuser", {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ usersbooks: data.results }));
      },


      // FETCH BOOK & BOOKS (GET METHOD)


      fetchBook: (book_id) => {
        console.log("fechtBook");
        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/book/" + book_id, {

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
      },

      fetchBooks: () => {

          fetch(process.env.BACKEND_URL + "/api/books", 

          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ books: data.results }));
      },


      // FETCH USER & USERS (GET METHOD)

      fetchUsers: () => {

        // fetch(process.env.BACKEND_URL + "/api/users", {
        fetch(process.env.BACKEND_URL + "/api/users", {

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((promiseResponse) => promiseResponse.json())
          .then((data) => setStore({ users: data.results }));
      },


      fetchUser: (user_id) => {

        const store = getStore();

        fetch(process.env.BACKEND_URL + "/api/user/" + user_id, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setStore({ user: result.results });
            console.log("USER =====", store.user);
          })
          .catch((error) => console.log("error", error));
        // .then(response => response.json())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
      },

      // MAP

      getUserPosition: async () => {

        await navigator.geolocation.getCurrentPosition((position) => {
          console.log({ latitude: position.coords.latitude, longitude: position.coords.longitude })
          setStore({
            userPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude }
          })
        }, alert('remember to allow your position'))
      },


    },
  };

};

export default getState;
