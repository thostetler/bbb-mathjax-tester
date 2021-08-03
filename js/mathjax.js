const updateText = (text) => {
  const math = /\$.*<(sub|SUB)>(.*?)<\/(sub|SUB)>.*\$/g;
  const matches = text.matchAll(math);
  for (const match of matches) {
    console.log(match);
  }
  return text;
};

window.renderMathJax = function () {
  const el = document.getElementById("mathjax");
  el.innerHTML = updateText(el.innerHTML);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
  const node = MathJax.Hub.getAllJax(el)[0];
  console.log(node);
  // if (typeof node.rerender === "function") {
  //   node.rerender();
  // }
};

window.absChange = function () {
  const ta = document.getElementById("abstract");
  const out = document.getElementById("mathjax");
  out.innerHTML = ta.value;
  window.renderMathJax();
};

MathJax.Hub.Register.MessageHook("Math Processing Error", function (message) {
  //  do something with the error.  message[2] is the Error object that records the problem.
  console.log(message);
});

MathJax.Hub.Register.MessageHook("TeX Jax - parse error", function (message) {
  // do something with the error.  message[1] will contain the data about the error.
  console.log(message);
});

// run initially
window.renderMathJax();
