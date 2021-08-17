const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/modules/__layout.svelte"),
	() => import("../../../src/routes/modules/index.svelte"),
	() => import("../../../src/routes/modules/lesson-1.md"),
	() => import("../../../src/routes/modules/lesson-2.md"),
	() => import("../../../src/routes/modules/module-1.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/modules/index.svelte
	[/^\/modules\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/modules/lesson-1.md
	[/^\/modules\/lesson-1\/?$/, [c[0], c[3], c[5]], [c[1]]],

	// src/routes/modules/lesson-2.md
	[/^\/modules\/lesson-2\/?$/, [c[0], c[3], c[6]], [c[1]]],

	// src/routes/modules/module-1.svelte
	[/^\/modules\/module-1\/?$/, [c[0], c[3], c[7]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];