/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
}

module.exports = withMDX(nextConfig)
