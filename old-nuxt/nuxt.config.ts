// Copyright (c) 2024 <Godwin peter. O>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// Project: gpproton.github.io
// Author: Godwin peter. O (me@godwin.dev)
// Created At: Sun 15 Dec 2024 16:49:03
// Modified By: Godwin peter. O (me@godwin.dev)
// Modified At: Sun 15 Dec 2024 16:49:03

import path from 'path';
import pkg from './package.json';
import { MyPreset } from './prime-preset';

// TODO: use as refrence
// https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/
export default defineNuxtConfig({

	modules: [
		'@vite-pwa/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		[
			'@nuxt/eslint',
			{
				checker: {
					lintOnStart: true,
					fix: true,
				},
				config: {
					stylistic: {
						indent: 'tab',
						semi: true,
						quotes: 'single',
					},
				},
			},
		],
		[
			'@pinia/nuxt',
			{
				cookieOptions: {
					sameSite: 'none',
				},
				storage: 'localStorage',
			},
		],
		[
			'@primevue/nuxt-module',
			{
				usePrimeVue: true,
				options: {
					theme: {
						preset: MyPreset,
						options: {
							darkModeSelector: '.test', // 'system',
						},
					},
				},
			},
		],
		[
			'@nuxtjs/i18n',
			{
				vueI18n: './i18n.config.ts',
			},
		],
		[
			'nuxt-content-git',
			{
				createdAtName: 'createdAt',
				updatedAtName: 'updatedAt',
			},
		],
		[
			'@nuxt/content',
			{
				highlight: {
					theme: 'one-dark-pro',
					preload: [
						'css',
						'scss',
						'json',
						'js',
						'ts',
						'html',
						'bash',
						'vue',
						'yaml',
					],
				},
			},
		],
	],

	ssr: true,

	components: {
		global: true,
		dirs: ['~/components'],
	},
	devtools: { enabled: true },

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [],
		},
	},

	css: ['primeicons/primeicons.css'],

	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},

	content: {
		navigation: {
			fields: ['author', 'publishedAt', 'tags'],
		},
		// TODO: Review if necessary
		sources: {
			content: {
				driver: 'fs',
				prefix: '/blog',
				base: path.resolve(__dirname, 'articles'),
			},
		},
	},

	runtimeConfig: {
		public: {
			APP_VERSION: pkg.version,
			APP_NAME: pkg.name,
			APP_MODE: process.env?.NODE_ENV,
		},
	},
	compatibilityDate: '2024-09-16',

	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/sitemap.xml', '/api/search.json'],
		},
		minify: true,
	},
});
