const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
<<<<<<< HEAD

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
=======
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime
      .fromJSDate(dateObj, { zone: "utc" }) // treat input as UTC
      .toLocal()                            // convert to est
      .toFormat(format);
  });
};



>>>>>>> parent of 40a0075 (more fixes for log dates)

  return {
    dir: {
      input: "log-src",
      includes: "_includes",
      output: "log"
    }
  };