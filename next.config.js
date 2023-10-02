/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
// };

// module.exports = {
//   images: {
//     unoptimized: true,
//   },
// };

// // module.exports = nextConfig;
