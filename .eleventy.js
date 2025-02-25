module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
    return {
      dir: {
        input: "src",
        includes: "_includes",
        output: "_site"
      }
    };
  };