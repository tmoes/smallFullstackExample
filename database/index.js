const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mushrooms', { useUnifiedTopology: true }, {useNewmushroom_pic_urlParser: true });

let mushroomSchema = mongoose.Schema({
  mushroom_name: String,
  mushroom_common_name: String,
  region: Object,
  mushroom_pic_url: String,
  mushroom_caveats: String
});

var Mushroom = mongoose.model('mushrooms', mushroomSchema);

// Dropping the DB so it can be repopulated
//______________________________________________________________
const MongoClient = require("mongodb");
const url = 'mongodb://localhost:27017/';
const databasename = "mushrooms";// Database name
MongoClient.connect(url).then((client) => {

    const connect = client.db(databasename);

    // Collection name
    const collection = connect.collection("mushrooms");

    collection.drop();  // Dropping the collection

    console.log("Dropping successful");
}).catch((err) => {
    console.log(err.Message);
})
// _____________________________________________________________
// Populating DB
let save = data => {
  return new Promise( (resolve, reject) => {
    var counter = 0;
    data.forEach( mushroom => {
      var tempMushroom = new Mushroom(
        {
          mushroom_name: mushroom.mushroom_name,
          mushroom_common_name: mushroom.mushroom_common_name,
          region: mushroom.region,
          mushroom_pic_url: mushroom.mushroom_pic_url,
          mushroom_caveats: mushroom.mushroom_caveats
        }
      );
      // if (!Mushroom.findOne({"mushroom_name": tempMushroom.mushroom_name})) {
        tempMushroom.save( err => {
          if (err) {
            console.log('Error saving data in DB: ', err);
          }
          counter++;
          if (counter === data.length) {
            resolve();
          }
        });
      // }
    });
  })
}

// Searching DB
let getMushroomsByRegion = function(regions, callback) {
  let query = {};
  if (regions === 'Northwest') {
    query = {"region.Northwest": true};
  } else if (regions === 'Northeast') {
    query = {"region.Northeast": true};
  } else if (regions === 'Southwest') {
    query = {"region.Southwest": true};
  } else if (regions === 'Southeast') {
    query = {"region.Southeast": true};
  } else if (regions === 'Midwest') {
    query = {"region.Midwest": true};
  } else if (regions === 'Rocky_Mountains') {
    query = {"region.Rocky_Mountains": true};
  }

  Mushroom.find(query).exec( (err, mushrooms) => {
    if (err) {
      console.log('MongoDB QUERY failed:', err);
    } else {
      mushroomList = [];
      mushrooms.forEach( mushroom  => {
        mushroomList.push(
          {
            mushroom_name: mushroom.mushroom_name,
            mushroom_common_name: mushroom.mushroom_common_name,
            mushroom_pic_url: mushroom.mushroom_pic_url,
            mushroom_caveats: mushroom.mushroom_caveats
          }
        );
      })
      callback(mushroomList);
    }
  });
}

module.exports.getMushroomsByRegion = getMushroomsByRegion;
module.exports.save = save;