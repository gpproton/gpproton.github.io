import { SitemapStream, streamToPromise } from 'sitemap';
import { serverQueryContent } from '#content/server';

export default defineEventHandler(async (event) => {
	// Fetch all documents
	const docs = await serverQueryContent(event).find();
	const sitemap = new SitemapStream({
		hostname: 'https://godwin.dev',
	});
	// Add URLs to the sitemap

	const sitemapCommon = {
		changefreq: 'daily',
		lastmod: new Date().toISOString(),
		priority: 0.7,
	};
	for (const webpage of ['/', '/blog/']) {
		sitemap.write({
			url: webpage,
			...sitemapCommon,
		});
	}

	for (const doc of docs) {
		if (doc.published)
			sitemap.write({
				url: doc._path + '/',
				...sitemapCommon,
			});
	}

	sitemap.end();
	return streamToPromise(sitemap);
});
