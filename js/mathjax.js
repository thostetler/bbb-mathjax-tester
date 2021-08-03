window.renderMathJax = function () {
  const el = document.getElementById("mathjax");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, el]);
  const node = MathJax.Hub.getAllJax(el)[0];
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
