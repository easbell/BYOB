var Nightmare = require('nightmare');
var fs = require('fs');
var nightmare = Nightmare({ show: false });

nightmare
  .goto('https://projects.propublica.org/politwoops/?state=CO')
  .wait(1000)
  .evaluate(function () {
    var tweetNodes = document.querySelectorAll('.content');
    var list = [].slice.call(tweetNodes);
    return list.map(function(node){
      return node.innerText
    });
  })
  .end()
  .then(function(anchors){
    fs.writeFileSync('data.json', JSON.stringify(anchors));
    console.log('Done!');
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });