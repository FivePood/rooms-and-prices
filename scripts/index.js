const as = document.getElementsByClassName("card__button");
for (i=0; i < as.length; i++){
  as[i].addEventListener("click", function (){reservation(event)}, false);
}

const ass = document.getElementsByClassName("card");
for (i=0; i < ass.length; i++){
  ass[i].addEventListener("click", function (){refusal(event)}, false);
}

function reservation() {
  event.preventDefault();
  event.cancelBubble = true;
  const div = event.target.closest(".card");
  div.onmouseleave = function () {
    div.classList.add("blackout");
  };
}

function refusal() {
  const div = event.target.closest(".card");
  div.classList.remove("blackout");
  div.onmouseleave = function() {
    div.classList.remove("blackout");
  };
}

(function() {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}