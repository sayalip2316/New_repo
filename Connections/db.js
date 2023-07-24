const mongoose = require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(process.env.MONGOURL)


module.exports={connection}

// Deployed link=https://gray-hilarious-millipede.cyclic.app/