/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        //staleTimes is an experimental feature that allows configuring the invalidation period of the client router cache.
        staleTimes: {
            dynamic: 30
        }
    },
    serverExternalPackages: ["@node-rs/argon2"]
};

export default nextConfig;