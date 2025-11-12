# 🍺 Guinness Selfie Generator - Netlify Version

Generate legendary selfies with Messi or Ronaldo while holding a pint of Guinness!

This is a static web application deployed to Netlify and Streamlit server.

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


## 📄 License

This project is for educational and entertainment purposes.

---

Made with ❤️ using OpenRouter + Gemini 🍺⚽✨

Deployed on Netlify 🚀
