module.exports = {
   withAuth: (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
},
 format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  
};