export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.0153a10e.js","app":"_app/immutable/entry/app.d79273bf.js","imports":["_app/immutable/entry/start.0153a10e.js","_app/immutable/chunks/index.d0c0af47.js","_app/immutable/chunks/singletons.59c0edad.js","_app/immutable/entry/app.d79273bf.js","_app/immutable/chunks/index.d0c0af47.js"],"stylesheets":[],"fonts":[]},
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
