const Listing = require("../models/listing")
// // const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// // const mapTokan = process.env.MAP_TOKAN;


// const geocodingClient = mbxGeocoding({ accessToken: mapTokan });


module.exports.index = async(req , res) =>{
    const allListings =  await Listing.find({})
    res.render("listings/index.ejs", {allListings})
 }

module.exports.renderNewForm = (req , res) =>{
    res.render("listings/new.ejs")
}

module.exports.showListing = async(req , res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews", populate: {path: "author"},
    }).populate("owner")
    if(!listing) {
      req.flash("error" , "Listing you requested for does not exist!")
      res.redirect("/listings")
    }
    res.render("listings/show.ejs", {listing});
}

module.exports.createListings = async (req, res) => {
    try {
      if (!req.user) {
        req.flash("error", "You must be signed in!");
        return res.redirect("/login");
      }
  
      const url = req.file?.path;
      const filename = req.file?.filename;
  
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;
      if (url && filename) {
        newListing.image = { url, filename };
      }
  
      // remove geometry assignment
      // newListing.geometry = ...
  
      const savedListing = await newListing.save();
      console.log("Saved Listing:", savedListing);
  
      req.flash("success", "Listing created!");
      res.redirect("/listings");
  
    } catch (err) {
      console.error("Error creating listing:", err);
      req.flash("error", `Could not create listing: ${err.message}`);
      res.redirect("/listings/new");
    }
  };
  

module.exports.renderUpdateForm = async(req, res) =>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id ,{...req.body.listing})
    if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
    }
    req.flash("success" , "Listing Updated!")
    res.redirect("/listings");
}

module.exports.deleteForm = async (req , res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id)
    console.log(deletedListing);
    req.flash("success" , "Listing Deleted")
    res.redirect("/listings");
}