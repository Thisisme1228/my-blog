/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        //staleTimes is an experimental feature that allows configuring the invalidation period of the client router cache.
        staleTimes: {
            dynamic: 30
        }
    }
};

export default nextConfig;

//npm i lucia @lucia-auth/adapter-prisma prisma @prisma/client @tanstack/react-query @tanstack/react-query-devtools @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/pm uploadthing @uploadthing/react arctic date-fns ky next-themes react-cropper react-image-file-resizer react-intersection-observer react-linkify-it stream-chat stream-chat-react

//npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss

//npx shadcn-ui@latest add button dialog dropdown-menu form input label skeleton tabs textarea toast tooltip
