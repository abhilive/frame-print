module.exports = function print(msg) {
    var stars = msg.replace(/./g, '*');
    console.log(stars);
    console.log(msg);
    console.log(stars);
}