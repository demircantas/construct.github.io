export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.708be7ad.js","app":"_app/immutable/entry/app.715fd25e.js","imports":["_app/immutable/entry/start.708be7ad.js","_app/immutable/chunks/index.d0c0af47.js","_app/immutable/chunks/singletons.7611a0be.js","_app/immutable/entry/app.715fd25e.js","_app/immutable/chunks/index.d0c0af47.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
