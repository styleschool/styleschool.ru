/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextConfig = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            output: 'export',
            images: { unoptimized: true },
        }
    } else {
        return {
            output: 'export',
            images: { unoptimized: true },
            basePath: '/vshsdt'
        }
    }
}

module.exports = nextConfig
