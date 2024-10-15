/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
   };
   /* GET 'Location info' page */
   const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
   };
   /* GET 'Location info2' page */
   const locationInfo2 = (req, res) => {
    res.render('location-info2', { title: 'Location info2' });
   };
   /* GET 'Add review' page */
   const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
   };
   module.exports = {
    homelist,
    locationInfo,
    locationInfo2,
    addReview
   };