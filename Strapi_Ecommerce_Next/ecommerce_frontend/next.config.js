/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ar"], 
    defaultLocale: "en"
  }
}

const loaders = [
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }
]



module.exports = nextConfig, loaders
