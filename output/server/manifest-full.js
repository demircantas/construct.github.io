export const manifest = {
	appDir: "_app",
	appPath: "construct.github.io/_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.40220f99.js","app":"_app/immutable/entry/app.03ffb4ab.js","imports":["_app/immutable/entry/start.40220f99.js","_app/immutable/chunks/index.d0c0af47.js","_app/immutable/chunks/singletons.8f4899e9.js","_app/immutable/entry/app.03ffb4ab.js","_app/immutable/chunks/index.d0c0af47.js"],"stylesheets":[],"fonts":[]},
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
