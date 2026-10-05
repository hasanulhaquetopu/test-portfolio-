/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 90 keeps the hero portrait crisp; everything else uses the default.
    qualities: [75, 90],
  },
};

export default nextConfig;
