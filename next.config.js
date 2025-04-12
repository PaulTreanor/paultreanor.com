module.exports = {
  output: {
    // Export in the format expected by GitHub Pages
    // or any static site hosting service
    publicDirectory: "/",
  },
  // Next.js 12 style config for static export
  images: {
    loader: 'custom',
    disableStaticImages: true,
    unoptimized: true,
  },
};
