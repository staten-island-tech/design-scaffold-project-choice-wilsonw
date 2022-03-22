module.exports = function(elventyConfig){
    elventyConfig.addPassthroughCopy("src/style");
    elventyConfig.addPassthroughCopy("src/img");
    return{
        dir: {
            input:"src",
            output:"dist",
        },
    };
};