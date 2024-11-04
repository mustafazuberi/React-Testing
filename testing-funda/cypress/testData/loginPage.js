const loginPage = {
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    selectors: {
      usernameInput: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
      passwordInput: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
      loginButton: ".oxd-button",
    },
    credentials: {
      username: "Admin",
      password: "admin123",
    },
  };

  export default loginPage
