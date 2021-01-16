module.exports = {
  extend: "@vuepress/theme-default",
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "vuepress-plugin-container",
      {
        type: "img-row",
        before: (img) =>
          `<div class="img-row left">${img}<div class="row-content">`,
        after: "</div></div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "img-row-right",
        before: (img) =>
          `<div class="img-row right">${img}<div class="row-content">`,
        after: "</div></div>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "table",
        before: '<div class="table">',
        after: "</div>",
      },
    ],
  ],
}
