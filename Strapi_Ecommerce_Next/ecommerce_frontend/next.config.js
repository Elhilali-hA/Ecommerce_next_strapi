/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const loaders = [
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }
]

module.exports = nextConfig, loaders
