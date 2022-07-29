const mongoose = require("mongoose");
const url = process.env.MONGODB_PATH;
// Im putting all my function inside of the export bloc , so that i can use it outside
//the function mongoose.connect receives  two parameters the url adress and the initialization of the parser and topology
module.exports = {
  databse_connexion: () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("database connected !!"));
  },
};
