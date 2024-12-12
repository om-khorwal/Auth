const mongoose =  require("mongoose")
const mongourl = process.env.MONGO_URL

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongourl);
  console.log("mongoconnect")
}

