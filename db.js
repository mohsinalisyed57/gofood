const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://mohsin5755:zTfdw0tTSWCAlzVG@cluster0.hzrdoe7.mongodb.net/gofoodmern?retryWrites=true&w=majority'; // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority

const fetchFoodData = async (callback) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("database connected Successfully")
    // Retrieve food_item collection data
    const foodCollection = await mongoose.connection.db.collection("food_item");
    const foodData = await foodCollection.find({}).toArray();

    // Retrieve food_category collection data
    const categoryCollection = await mongoose.connection.db.collection("food_catagory");
    const categoryData = await categoryCollection.find({}).toArray();

    // Invoke the callback function with the retrieved data
    callback(null, foodData, categoryData);
  } catch (error) {
    callback(error);
  }
};
module.exports = fetchFoodData