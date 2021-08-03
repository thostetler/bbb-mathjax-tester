MathJax.Hub.Config({
  HTML: ["input/TeX", "output/HTML-CSS"],
  TeX: {
    noErrors: { disabled: false },
    extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js"],
    noErrors: {
      inlineDelimiters: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      multiLine: true,
      style: {
        "font-size": "90%",
        "text-align": "left",
        color: "black",
        padding: "1px 3px",
        border: "1px solid",
      },
    },
    equationNumbers: { autoNumber: "AMS" },
  },
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
  },
  "HTML-CSS": { availableFonts: ["TeX"], linebreaks: { automatic: true } },
});
