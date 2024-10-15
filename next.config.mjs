// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import nextConfig from "./next.config.js";
import webpack from "./webpack.config.mjs";

nextConfig.webpack = webpack;

export default nextConfig;
