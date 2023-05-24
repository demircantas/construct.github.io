export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.8c62b5d1.js","app":"_app/immutable/entry/app.efc4c939.js","imports":["_app/immutable/entry/start.8c62b5d1.js","_app/immutable/chunks/index.d0c0af47.js","_app/immutable/chunks/singletons.2231c7eb.js","_app/immutable/entry/app.efc4c939.js","_app/immutable/chunks/index.d0c0af47.js"],"stylesheets":[],"fonts":[]},
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
