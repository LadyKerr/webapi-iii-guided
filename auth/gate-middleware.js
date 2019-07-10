module.exports = function gate(req, res, next) {
  const password = req.headers.password;

  if (password && password === "mellon") {
    next();
  } else {
    next(401); //passing eror handler message
  }
};

//this is a custom middleware to limit who can view the /paid portion of the app
// used for validation
//when a value is passed into next() it looks for a middleware with 4 arguments
