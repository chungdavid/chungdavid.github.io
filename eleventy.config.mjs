export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/scripts/");
    eleventyConfig.addPassthroughCopy("src/styles/");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/particles.json");

    eleventyConfig.setInputDirectory('src/');
	eleventyConfig.setOutputDirectory('_site/');
};

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};