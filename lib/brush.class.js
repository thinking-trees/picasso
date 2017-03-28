const figlet = require('figlet');

/**
 * Way to brush the input text.
 **/
class Brush {

  draw(paint) {
    figlet(paint.get(), (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.info(data);
    });
  }

}

module.exports = Brush;
