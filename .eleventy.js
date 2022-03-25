module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/style");
    eleventyConfig.addPassthroughCopy("src/img");
    return{
        dir: {
            input:"src",
            output:"dist",
        },
    };
};