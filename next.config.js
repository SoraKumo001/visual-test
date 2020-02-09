module.exports = {
  webpack: config => ({
    ...config,
    entry: async () => {
      const entries = await config.entry();
      const regexp = /\.stories\.js?$/; //ts,tsx -> js
      const keys = Object.keys(entries);
      keys.forEach(key => regexp.test(key) && delete entries[key]);
      return entries;
    }
  })
};
