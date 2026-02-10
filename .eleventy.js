const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  // Date filter (fixes the one-day-off bug)
  eleventyConfig.addFilter("postDate", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime
      .fromJSDate(dateObj, { zone: "utc" })
      .toLocal()
      .toFormat(format);
  });



  return {
    dir: {
      input: "log-src",
      includes: "_includes",
      output: "log"
    }
  };
};
