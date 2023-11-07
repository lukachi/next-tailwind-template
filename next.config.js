/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: [
            `@import "@/styles/_functions.scss";`,
            `@import "@/styles/_mixins.scss";`,
        ].join(''),
    },
}

module.exports = nextConfig
