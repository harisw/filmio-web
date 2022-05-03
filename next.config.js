/** @type {import('next').NextConfig} */

const env = {
  GRAPHQL_SERVER: process.env.GRAPHQL_SERVER,
}

module.exports = {
  reactStrictMode: true,
  env,
}