const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTkwN2I0Njg2ZjRmZTE4N2UyNjBmMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEyOTQ3MTEzfQ.0m2AQEXq0OxoZm9-HzKRCMwn5Kxr09_c-eGbKPzV57E";
  return token;
};
