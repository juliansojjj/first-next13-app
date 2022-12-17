/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname:'/200'
      },
    ],
  },
  // {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'i.picsum.photos',
  //       pathname:'/id/**/200/200.jpg?hmac=**'
  //     },
  //   ],
  // }

  experimental:{
    appDir:true
  },
  reactStrictMode: true,
  swcMinify: true,
  
}



module.exports = nextConfig
