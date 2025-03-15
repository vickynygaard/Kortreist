/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	register: false,
	skipWaiting: true,
})

module.exports = withPWA({
	reactStrictMode: true,
})
