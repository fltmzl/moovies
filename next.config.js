const withPWAInit = require('next-pwa')

const isDev = process.env.NODE_ENV !== "production"

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
  disable: isDev,

  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    }
  ],
});


const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  images: {
    domains: ["image.tmdb.org"]
  }
}

module.exports = withPWA(nextConfig)
