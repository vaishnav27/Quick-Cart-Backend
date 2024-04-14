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
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWJjYTgzMTQxNTFlNjQ0OGY3MTMxNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEzMDk3ODMwfQ.GIFTRE6SDINiDAZQC0bTEM2RCmRqRgtZ3rZH_DvPviI";
  return token;
};
