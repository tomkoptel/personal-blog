module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './public/output.css',
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};

