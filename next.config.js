const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	cacheOnFrontEndNav: true, // Ensures navigation works without full reloads
  });
  
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/Kortreist" : ""; // Define basePath BEFORE using it
  
  const nextConfig = withPWA({
	output: "export", // Enables static export for GitHub Pages
	images: {
	  unoptimized: true, // Required for GitHub Pages
	},
	basePath,
	assetPrefix: isProd ? "/Kortreist/" : "",
	reactStrictMode: true,
	trailingSlash: true, // Ensures GitHub Pages compatibility
	swcMinify: true,
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath, // Makes it available in the client
	  },
  });
  
  module.exports = nextConfig;
  