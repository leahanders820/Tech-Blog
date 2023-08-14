// controllers/homeController.js
const router = require('express').Router();


// Render the homepage
router.get('/', (req, res) => {
  console.log('homeroute');
  res.render('home'); // Renders 'views/home.handlebars'
});

module.exports = router;