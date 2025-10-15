const Review = require("../models/reviews")
const Listing = require("../models/listing");

module.exports.createReviews = async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) return res.status(404).send("Listing not found");
  
      const newReview = new Review({
        rating: req.body.rating,
        comment: req.body.comment
      });
      newReview.author = req.user._id
  
      await newReview.save();
  
      // Link review to listing
      listing.reviews.push(newReview._id);
  
      await listing.save();
      req.flash("success" , "New Review Created!")
      res.redirect(`/listings/${listing._id}`);
    } catch (err) {
      console.error("Error saving review:", err);
      res.status(500).send("Something went wrong: " + err.message);
    }
  }

  module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "Review Deleted!")
    res.redirect(`/listings/${id}`);
}