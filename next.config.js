/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

const nextConfig = (phase) =>  {
  if(phase=== PHASE_DEVELOPMENT_SERVER) { 
    return {  
      reactStrictMode: true,
      env: { 
        mongodb_username:'vishwajeet', 
        mongodb_password:'vishwajeet', 
        mongodb_clustorname:'cluster0', 
        mongodb_database:'my-site-dev'
      }
    }
  }
  return {  
    reactStrictMode: true,
    env: { 
      mongodb_username:'vishwajeet', 
      mongodb_password:'vishwajeet', 
      mongodb_clustorname:'cluster0', 
      mongodb_database:'my-site-new'
    }
  }
  
}

module.exports = nextConfig
