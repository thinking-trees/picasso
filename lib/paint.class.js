/**
 * Provides the paint used by brush.
 **/
class Paint {

  get() {
    let args = process.argv.slice(2);
    let paints = [];
    for(let arg of args) {
      paints.push(`${arg}`);
    }

    return paints.join('\n');
  }

}

module.exports = Paint;
