const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing")
const {isLoggedIn, isOwner} = require("../middleware")

const listingController = require("../controllers/listings")
const multer = require(`multer`)
const {storage} = require("../cloudCongif")
const upload = multer({storage})


router.get("/search-json", async (req, res) => {
  const query = req.query.location || "";
  try {
    const listings = await Listing.find({
      location: { $regex: query, $options: "i" }
    });
    res.json(listings); // send JSON to frontend
  } catch(err){
    console.error(err);
    res.status(500).json([]);
  }
});



router.route("/")
.get(wrapAsync(listingController.index) )
.post(
    isLoggedIn,
    upload.single("image"),
    wrapAsync(listingController.createListings)
);


//new route
router.get("/new" , isLoggedIn, listingController.renderNewForm)


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put( isLoggedIn, isOwner ,
    upload.single("image"),
    wrapAsync(listingController.renderUpdateForm)
)
.delete( isLoggedIn, isOwner ,
    wrapAsync(listingController.deleteForm)
);
    
// Route to get listings by category
router.get("/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const listings = await Listing.find({ category: category.toLowerCase() });
      res.render("listings/index", { listings, category }); 
      // 👆 Render your page with filtered listings
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });







//edit route
router.get("/:id/edit", isLoggedIn, isOwner ,
    wrapAsync(listingController.renderEditForm)
);


module.exports = router;
