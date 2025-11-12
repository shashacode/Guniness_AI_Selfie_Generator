# 🎨 Customization Guide

Easy ways to customize your Guinness Selfie Generator!

## 🎨 Change Colors

Edit `styles.css` (line 10-17):

```css
:root {
    --primary-color: #0F0F23;      /* Main dark color */
    --secondary-color: #D4AF37;    /* Gold accent */
    --accent-color: #8B4513;       /* Brown accent */
    --success-color: #28a745;      /* Success green */
    --danger-color: #dc3545;       /* Error red */
}
```

### Color Scheme Ideas:

**Classic Guinness:**
```css
--primary-color: #0F0F23;  /* Black */
--secondary-color: #D4AF37; /* Gold */
--accent-color: #8B4513;    /* Brown */
```

**Modern Blue:**
```css
--primary-color: #1e3a8a;  /* Deep Blue */
--secondary-color: #3b82f6; /* Bright Blue */
--accent-color: #60a5fa;    /* Light Blue */
```

**Vibrant Red:**
```css
--primary-color: #991b1b;  /* Dark Red */
--secondary-color: #ef4444; /* Red */
--accent-color: #f87171;    /* Light Red */
```

---

## 🤖 Change AI Model

Edit `app.js` (line ~107):

### Use Free Model:
```javascript
model: 'google/gemini-2.5-flash-image-preview:free'
```

### Use Different Models:
```javascript
// Stable Diffusion
model: 'stability-ai/stable-diffusion-xl'

// DALL-E 3 (more expensive)
model: 'openai/dall-e-3'

// Other Gemini variants
model: 'google/gemini-2.0-flash-exp'
```

Check [OpenRouter Models](https://openrouter.ai/models) for all options.

---

## ⚽ Add More Footballers

### Step 1: Update HTML (`index.html` line ~42):

```html
<select id="footballer" class="select-field">
    <option value="ronaldo">Ronaldo</option>
    <option value="messi">Messi</option>
    <option value="both">Both</option>
    <option value="neymar">Neymar</option>
    <option value="mbappe">Mbappé</option>
</select>
```

### Step 2: Update JavaScript (`app.js` line ~158):

```javascript
// Add new cases
if (footballer === 'messi') {
    footballerDesc = "Lionel Messi in his Argentina national team jersey";
} else if (footballer === 'ronaldo') {
    footballerDesc = "Cristiano Ronaldo in his Portugal national team jersey";
} else if (footballer === 'neymar') {
    footballerDesc = "Neymar in his Brazil national team jersey";
} else if (footballer === 'mbappe') {
    footballerDesc = "Kylian Mbappé in his France national team jersey";
} else {
    footballerDesc = "Lionel Messi in his Argentina jersey and Cristiano Ronaldo in his Portugal jersey";
}
```

---

## 🎭 Add More Styles

### Step 1: Update HTML (`index.html` line ~50):

```html
<select id="style" class="select-field">
    <option value="casual">Casual</option>
    <option value="photorealistic">Photorealistic</option>
    <option value="cinematic">Cinematic</option>
    <option value="professional">Professional</option>
    <option value="cartoon">Cartoon</option>
    <option value="vintage">Vintage</option>
</select>
```

No JavaScript changes needed - it uses the style value directly!

---

## 📝 Change Text/Copy

### Title
Edit `index.html` (line ~68):
```html
<h1>🍺 Your Custom Title Here</h1>
```

### Subtitle
Edit `index.html` (line ~69):
```html
<p class="subtitle">Your custom subtitle here!</p>
```

### Button Text
Edit `index.html` (line ~110):
```html
<button id="generateBtn" class="generate-btn" disabled>
    🎨 Your Custom Button Text
</button>
```

---

## 🖼️ Change Image Prompt

Edit `app.js` (line ~165-170):

```javascript
const prompt = `Your custom prompt here. 
Describe exactly what you want the AI to generate.
Be specific about setting, pose, lighting, etc.`;
```

### Tips for Good Prompts:
- Be specific about what you want
- Mention lighting, setting, mood
- Describe poses and expressions
- Include style keywords (photorealistic, cinematic, etc.)

---

## 🎯 Change Max File Size

Edit `app.js` (line ~51):

```javascript
// Change from 5MB to 10MB
if (file.size > 10 * 1024 * 1024) {
    showAlert('Image size must be less than 10MB', 'error');
    return;
}
```

---

## 📱 Change Responsive Breakpoint

Edit `styles.css` (line ~86):

```css
/* Change from 968px to your preferred width */
@media (max-width: 1200px) {
    .main-content {
        grid-template-columns: 1fr;
    }
}
```

---

## 🔒 Remove API Key Input

If you want to hardcode your API key (not recommended for public sites):

Edit `app.js` (line ~158):
```javascript
// Replace this:
const apiKey = apiKeyInput.value.trim();

// With this:
const apiKey = 'your-api-key-here';
```

Then hide the input in `styles.css`:
```css
#apiKey {
    display: none;
}
```

⚠️ **Warning**: Don't do this if your site is public! Others can steal your API key.

---

## 🌐 Add Custom Domain

1. Go to Netlify Dashboard
2. Site Settings → Domain Management
3. Add Custom Domain
4. Update your DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## 🎨 Complete Redesign

Want a completely different look?

1. **Keep the same structure** in `index.html`
2. **Rewrite** `styles.css` with your design
3. **Leave** `app.js` as is (or modify carefully)

The JavaScript functionality will still work!

---

## 💡 Advanced: Add Features

### Add Loading Animation
Edit `styles.css` to customize `.progress-fill` animation

### Add Sound Effects
Add this to `app.js` after successful generation:
```javascript
const audio = new Audio('success-sound.mp3');
audio.play();
```

### Add Social Sharing
Add buttons in `index.html`:
```html
<button onclick="shareOnTwitter()">Share on Twitter</button>
```

---

## 🐛 Testing Changes

1. Make changes to files
2. Save
3. If using Netlify:
   - Push to GitHub → Auto deploys
   - Or drag to Netlify Drop again
4. Test your site!

---

## 📚 Need Help?

- Check `README.md` for full documentation
- Visit [OpenRouter Docs](https://openrouter.ai/docs)
- Visit [Netlify Docs](https://docs.netlify.com/)

---

Happy customizing! 🎨✨
