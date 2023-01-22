// code here
var output = "";
var minutes = Math.floor(detik / 60);
var seconds = detik % 60;
if (seconds < 10) {
    seconds = "0" + seconds;
}
output = minutes + ":" + seconds;

console.log(output);