/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function domainGenerator() {
  let pronoun = ["the", "our", "their", "mine", "the", "some", "whom"];
  let adj = ["great", "big", "blue", "red", "small", "flat", "smart", "cool"];
  let noun = ["jogger", "racoon", "ant", "flower", "rabbit", "table"];
  let ext = [".net", ".com", ".edu"];
  let domain = [];

  for (let h = 0; h < pronoun.length; h++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          domain.push(pronoun[h] + adj[j] + noun[k] + ext[l]);
        }
      }
    }
  }

  var domainList = document.querySelector(".domain-list");
  domain.forEach(item => {
    var li = document.createElement("li");
    li.innerHTML = item;
    domainList.appendChild(li);
  });
}

// function sorter() {
//   domain.sort();
// }

var button = document.querySelector(".generator");
button.addEventListener("click", domainGenerator);

// var sort = document.querySelector(".sort");
// sort.addEventListener("click", sorter);
