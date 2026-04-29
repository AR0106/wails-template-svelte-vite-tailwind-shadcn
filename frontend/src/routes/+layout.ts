// Required by adapter-static: prerender all pages as static HTML
// SSR must be disabled since Wails serves static files (no Node server)
export const prerender = true;
export const ssr = false;
