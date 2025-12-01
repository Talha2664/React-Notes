
<!-- 01
Create your project -->
npm create vite
cd my-project


<!-- 02
Install Tailwind CSS-->

npm install tailwindcss @tailwindcss/vite

<!-- 03
Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration. => vite.config.js -->

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


<!-- 04
Import Tailwind CSS -->

@import "tailwindcss";



