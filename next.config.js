/** @type {import('next').NextConfig} */
require('dotenv').config()

module.exports = {
  env: {
    NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    CHALLENGE: process.env.CHALLENGE
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}
