

/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const nextConfig = {
   
      // allow LAN/devices to access in dev mode
      allowedDevOrigins: ["http://192.168.1.41:3000"], 
      images: {
        remotePatterns: [new URL('http://res.cloudinary.com/dwfdjrlbk/**')],
      },
      turbopack: {
        root: __dirname, //  if your Next.js app lives in /frontend
      },
  };
  

export default nextConfig;
