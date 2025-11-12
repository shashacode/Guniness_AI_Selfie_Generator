# 🍺 Guinness Selfie Generator - Netlify Version

Generate legendary selfies with Messi or Ronaldo while holding a pint of Guinness!

This is a static web application that can be deployed to Netlify (or any static hosting service) without any backend server.

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Easiest)

1. **Create a GitHub repository** with these files
2. **Go to [Netlify](https://app.netlify.com/)**
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub account
5. Select your repository
6. Click **"Deploy site"**
7. Done! Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify Drop

1. **Zip all files** in this folder (index.html, styles.css, app.js, netlify.toml)
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your zip file
4. Done! Your site will be live immediately

### Option 3: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 📖 How to Use

1. **Get OpenRouter API Key**
   - Visit [https://openrouter.ai/keys](https://openrouter.ai/keys)
   - Sign up or log in
   - Create a new API key
   - Copy your API key

2. **Use the App**
   - Open your deployed Netlify site
   - Enter your OpenRouter API key (it's stored locally in your browser)
   - Choose your footballer (Messi, Ronaldo, or Both)
   - Select a style (Casual, Photorealistic, etc.)
   - Upload your photo
   - Click "Generate Selfie"
   - Wait 10-30 seconds for your legendary selfie!
   - Download and share your result

## ⚙️ Features

- ✨ Generate selfies with Messi, Ronaldo, or both
- 🎨 Multiple style options
- 📸 Drag & drop or click to upload
- 💾 Download generated images
- 📂 View generation history (last 6 generations)
- 🔒 API key stored securely in browser localStorage
- 📱 Fully responsive design
- 🚀 No backend required - runs entirely in the browser

## 🛠️ Technology Stack

- **Frontend**: Pure HTML, CSS, JavaScript (Vanilla JS)
- **AI Model**: Google Gemini 2.5 Flash Image Preview (via OpenRouter)
- **Hosting**: Netlify (or any static hosting)
- **API**: OpenRouter

## 📁 Project Structure

```
netlify-version/
├── index.html       # Main HTML file
├── styles.css       # Styling
├── app.js          # JavaScript functionality
├── netlify.toml    # Netlify configuration
└── README.md       # This file
```

## 🔐 Security & Privacy

- ✅ API keys are stored locally in your browser (localStorage)
- ✅ API keys are never sent anywhere except directly to OpenRouter
- ✅ Images are processed client-side before being sent to OpenRouter
- ✅ No backend server means no data storage on our end
- ✅ History is stored locally in your browser

## 💰 Costs

The app uses OpenRouter's API to access Google's Gemini model:

- **Model**: `google/gemini-2.5-flash-image-preview`
- **Free Tier**: Available with `:free` suffix
- **Paid Tier**: Check [OpenRouter pricing](https://openrouter.ai/models)

To use the free tier, you can modify the model name in `app.js`:
```javascript
model: 'google/gemini-2.5-flash-image-preview:free'
```

## 🐛 Troubleshooting

### "API Error: 401"
- Your API key is invalid or expired
- Get a new key from [OpenRouter](https://openrouter.ai/keys)

### "API Error: 402"
- You've run out of credits on OpenRouter
- Add credits or use the free tier model

### "No image found in response"
- Try a smaller image (< 5MB)
- Try a different photo
- Check [OpenRouter Activity](https://openrouter.ai/activity) for API logs

### Image upload not working
- Ensure your image is PNG or JPEG format
- Check image size is under 5MB
- Try using a different browser

### History not showing
- Clear your browser cache
- Check browser localStorage is enabled
- Try in a different browser

## 🎨 Customization

You can easily customize the app:

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0F0F23;
    --secondary-color: #D4AF37;
    --accent-color: #8B4513;
}
```

### Change Model
Edit the model name in `app.js`:
```javascript
model: 'google/gemini-2.5-flash-image-preview'
```

### Add More Footballers
Edit the select options in `index.html` and update the logic in `app.js`

## 📊 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🔗 Useful Links

- [OpenRouter Dashboard](https://openrouter.ai/)
- [API Keys](https://openrouter.ai/keys)
- [Usage Stats](https://openrouter.ai/activity)
- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Netlify Documentation](https://docs.netlify.com/)

## 📝 Custom Domain

To use a custom domain on Netlify:

1. Go to your site settings on Netlify
2. Click "Domain management"
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## 🔄 Updates

To update your deployed site:

1. Make changes to your local files
2. Commit and push to GitHub (if using GitHub method)
3. Netlify will automatically rebuild and deploy

Or simply drag and drop the updated files to Netlify Drop.

## 📞 Support

For issues:
- OpenRouter API issues: [OpenRouter Support](https://openrouter.ai/)
- Netlify deployment issues: [Netlify Support](https://www.netlify.com/support/)

## 📄 License

This project is for educational and entertainment purposes.

---

Made with ❤️ using OpenRouter + Gemini 🍺⚽✨

Deployed on Netlify 🚀
