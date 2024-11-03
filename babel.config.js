module.exports = function(api) {
    api.cache(true);
    return {
        presets: [ ],
        plugins: [
          "@babel/plugin-transform-react-jsx",
          "@babel/plugin-proposal-class-properties"
        ],
    };
};
