export const setAuthToken = (user) => {
  // create currentUser object
  const currentUser = {
    email: user.email,
  };
  console.log(currentUser);

  //! get JWT Token
  fetch('https://genius-car-server-side-nine.vercel.app/jwt', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // local storage is the easiest but not the best place to store token
      localStorage.setItem('genius-token', data.token);
    });
};
