const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync");

const { isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews")


//Rviews
//Post route
router.post("/", isLoggedIn, reviewController.createReviews);

  //Delete reviews Route
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));


module.exports = router