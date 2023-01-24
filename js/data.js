/* exported data */
var data = {
  genreTagEntry: []
};

var previousinputJSON = localStorage.getItem('inputvalues');
if (previousinputJSON !== null) {
  data = JSON.parse(previousinputJSON);
}
window.addEventListener('beforeunload', function () {
  var inputJSON = JSON.stringify(data);
  this.localStorage.setItem('inputvalues', inputJSON);
});
