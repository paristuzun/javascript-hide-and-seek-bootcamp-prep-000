function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
}
