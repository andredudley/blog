const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime
      .fromJSDate(dateObj, { zone: "utc" }) // treat input as UTC
      .toLocal()                            // convert to your local time
      .toFormat(format);
  });
};




  return {
    dir: {
      input: "log-src",
      includes: "_includes",
      output: "log"
    }
  };