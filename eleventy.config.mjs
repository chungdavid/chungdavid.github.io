function slugify(str = "") {
    return String(str)
        .trim()
        .toLowerCase()
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/scripts/");
    eleventyConfig.addPassthroughCopy("src/styles/");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/particles.json");

    eleventyConfig.setInputDirectory('src/');
	eleventyConfig.setOutputDirectory('_site/');

    eleventyConfig.addFilter("slugify", slugify);
    eleventyConfig.addCollection("projectFilters", function (collectionApi) {
        const items = collectionApi.getFilteredByGlob("src/content/project-cards/*.md");
        const map = new Map(); // key=slug, value=label

        for (const item of items) {
            const filters = item.data.filters || [];
            for (const label of filters) {
                const key = slugify(label);
                map.set(key, label);
            }
        }

    return Array.from(map.entries())
        .map(([key, label]) => ({ key, label }))
        .sort((a, b) => a.label.localeCompare(b.label));
    });

    eleventyConfig.addCollection("welcome", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/welcome.md");
    });
    eleventyConfig.addCollection("about", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/about.md");
    });
    eleventyConfig.addCollection("projects", function (collectionApi) {
        return collectionApi.getFilteredByGlob("src/content/projects.md");
    });
    eleventyConfig.addCollection("projectCards", function (collectionApi) {
        return collectionApi
        .getFilteredByGlob("src/content/project-cards/*.md")
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