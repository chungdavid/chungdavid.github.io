export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/scripts/");
    eleventyConfig.addPassthroughCopy("src/styles/");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/particles.json");

    eleventyConfig.setInputDirectory('src/');
	eleventyConfig.setOutputDirectory('_site/');

    eleventyConfig.addCollection("projects", function (collectionApi) {
        return collectionApi
        .getFilteredByGlob("src/content/projects/*.md")
        .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addFilter("monthYear", function (dateObj) {
        return dateObj.toLocaleDateString("en-US", {month: "short", year: "numeric"});
    });
};

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};