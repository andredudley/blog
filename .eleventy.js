const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Date filter (safe, no timezone shift for displayDate)
  eleventyConfig.addFilter("postDate", (dateInput, format = "MMMM d, yyyy") => {
    if (typeof dateInput === "string") {
      return DateTime.fromISO(dateInput).toFormat(format);
    }
    return DateTime.fromJSDate(dateInput, { zone: "local" }).toFormat(format);
  });
  // Copy your existing static site files through to _site
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("pages"); // if other static pages exist

  return {
    dir: {
      input: "log-src",   // ONLY Eleventy content lives here
      output: "log"
    }
  };
};
