/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';
const nextIntlConfig = withNextIntl();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextIntlConfig(nextConfig);
