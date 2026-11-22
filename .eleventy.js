module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk"
  };
};
