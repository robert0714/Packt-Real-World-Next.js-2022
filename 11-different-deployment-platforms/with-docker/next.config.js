// next.config.js
module.exports = {
    // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    // output: 'export',
    distDir: 'dist',
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }