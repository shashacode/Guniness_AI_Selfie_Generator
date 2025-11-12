# 🚀 Quick Deployment Guide

## Fastest Way: Netlify Drop (No Account Needed!)

1. **Zip the files**
   - Select all files: `index.html`, `styles.css`, `app.js`, `netlify.toml`
   - Right-click → "Compress" (Mac) or "Send to → Compressed folder" (Windows)

2. **Go to Netlify Drop**
   - Visit: https://app.netlify.com/drop
   - You don't even need an account!

3. **Drag & Drop**
   - Drag your zip file onto the page
   - Wait a few seconds
   - Your site is LIVE! 🎉

4. **Get your URL**
   - Netlify will give you a URL like: `https://random-name-12345.netlify.app`
   - Share it with anyone!

---

## Better Way: GitHub + Netlify (Recommended)

### Step 1: Push to GitHub

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Sign up with GitHub (free)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub**
5. Select your repository
6. Click **"Deploy site"**
7. Done! ✅

### Step 3: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to update your DNS

---

## Using Netlify CLI (For Developers)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize (first time only)
netlify init

# Deploy
netlify deploy --prod
```

---

## What You Need Before Using the App

1. **OpenRouter API Key** (Free to get!)
   - Visit: https://openrouter.ai/keys
   - Sign up
   - Create API key
   - Copy it

2. That's it! The app runs in the browser.

---

## Free Tier Option

To use the free tier model, edit `app.js` line ~107:

```javascript
// Change this:
model: 'google/gemini-2.5-flash-image-preview'

// To this:
model: 'google/gemini-2.5-flash-image-preview:free'
```

---

## Need Help?

- **Netlify Issues**: https://answers.netlify.com/
- **OpenRouter Issues**: https://openrouter.ai/
- **Can't deploy**: Try the Netlify Drop method first!

---

🍺 Happy Deploying! ⚽✨
