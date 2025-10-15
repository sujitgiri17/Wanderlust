const mongoose = require("mongoose");
const initData = require("./data");
const listing = require("../models/listing");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
   };

const initDB = async () => {
    await listing.deleteMany({});
    initData.data =  initData.data.map((obj) => ({...obj, owner: "68cd05857da5eb428c2bdefa"}))
    await listing.insertMany(initData.data);
    console.log("Data was init");
}

initDB();