# Laravel Mix + TailwindCSS + Alpine.js Setup for Shopify Themes

This guide outlines how to set up **Laravel Mix**, **TailwindCSS**, and **Alpine.js** for a Shopify theme with examples.

---

## **Step 1: Set Up Your Project**

### 1. **Initialize Node.js in Your Project**
If you don't have a `package.json` file yet, initialize Node.js in your project by running:
```bash
npm init -y
```

### 2. **Install Dependencies**
Run the following command to install all necessary dependencies:
```bash
npm install laravel-mix tailwindcss autoprefixer postcss alpinejs --save-dev
```

---

## **Step 2: Configure TailwindCSS**

### 1. **Initialize TailwindCSS**
Generate a `tailwind.config.js` file:
```bash
npx tailwindcss init
```

### 2. **Add Tailwind Directives to Your CSS File**
Create a `src/css/tailwind.css` file and add the following:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. **Configure TailwindCSS to Purge Unused Styles**
Update your `tailwind.config.js` file:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./config/*.json",
    "./layout/*.liquid",
    "./assets/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## **Step 3: Set Up Laravel Mix**

### 1. **Create a `webpack.mix.js` File**
Create `webpack.mix.js` in your project root and configure it:
```javascript
let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .js("src/js/app.js", "assets")
  .postCss("src/css/tailwind.css", "assets")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("tailwind.config.js")],
  });
```

### 2. **Add Scripts to `package.json`**
Update the `scripts` section in your `package.json`:
```json
"scripts": {
  "dev": "npx mix",
  "watch": "npx mix watch",
  "prod": "npx mix --production"
}
```

---

## **Step 4: Add Alpine.js**

### 1. **Create `src/js/app.js` File**
In your `src/js/app.js` file, import Alpine.js and initialize it:
```javascript
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
```

### 2. **Include the Compiled Script and style in head section of Your Theme**
Reference the compiled `app.js` and `tailwind.css` script in your Shopify theme's `theme.liquid` file:
```liquid
    <link href="{{ 'tailwind.css' | asset_url }}" rel="stylesheet">

    <script src="{{ 'app.js' | asset_url }}" defer="defer"></script>
```

---

## **Step 5: Run Laravel Mix**

### 1. **Compile Assets for Development**
Run the following command:
```bash
npm run dev
```

### 2. **Watch for Changes**
Automatically recompile assets during development:
```bash
npm run watch
```

### 3. **Compile Assets for Production**
Optimize and minify assets:
```bash
npm run prod
```

---

## **Step 6: Verify Setup**

### 1. **Test TailwindCSS**
Add TailwindCSS classes in your HTML or Liquid files:
```html
<div class="bg-blue-500 text-white p-4">
  TailwindCSS is working!
</div>
```

### 2. **Test Alpine.js**
Add an interactive Alpine.js component:
```html
<div x-data="{ open: false }">
  <button @click="open = !open" class="bg-green-500 text-white px-4 py-2">
    Toggle
  </button>
  <div x-show="open" class="mt-2 text-gray-700">
    Alpine.js is working!
  </div>
</div>
```