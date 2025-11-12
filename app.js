// State management
let uploadedImageData = null;
let generationHistory = [];

// DOM Elements
const apiKeyInput = document.getElementById('apiKey');
const footballerSelect = document.getElementById('footballer');
const styleSelect = document.getElementById('style');
const photoInput = document.getElementById('photoInput');
const uploadBox = document.getElementById('uploadBox');
const uploadPrompt = document.getElementById('uploadPrompt');
const uploadedImage = document.getElementById('uploadedImage');
const imageInfo = document.getElementById('imageInfo');
const generateBtn = document.getElementById('generateBtn');
const progressBar = document.getElementById('progressBar');
const resultSection = document.getElementById('resultSection');
const generatedImage = document.getElementById('generatedImage');
const downloadBtn = document.getElementById('downloadBtn');
const historySection = document.getElementById('historySection');
const historyGrid = document.getElementById('historyGrid');

// Load saved API key from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedApiKey = localStorage.getItem('openrouter_api_key');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
    }
    
    // Load history from localStorage
    const savedHistory = localStorage.getItem('generation_history');
    if (savedHistory) {
        try {
            generationHistory = JSON.parse(savedHistory);
            updateHistoryDisplay();
        } catch (e) {
            console.error('Error loading history:', e);
        }
    }
});

// Save API key to localStorage when changed
apiKeyInput.addEventListener('change', () => {
    localStorage.setItem('openrouter_api_key', apiKeyInput.value);
});

// File upload handling
uploadBox.addEventListener('click', () => {
    photoInput.click();
});

uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
});

photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
});

function handleFileUpload(file) {
    if (!file) return;
    
    // Validate file type
    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        showAlert('Please upload a PNG or JPEG image', 'error');
        return;
    }
    
    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
        showAlert('Image size must be less than 5MB', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            // Display uploaded image
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            uploadPrompt.style.display = 'none';
            
            // Store base64 data
            uploadedImageData = e.target.result.split(',')[1];
            
            // Show image info
            imageInfo.style.display = 'block';
            imageInfo.textContent = `Size: ${img.width}x${img.height} pixels | Format: ${file.type.split('/')[1].toUpperCase()} | ${(file.size / 1024).toFixed(1)} KB`;
            
            // Enable generate button
            generateBtn.disabled = false;
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Generate button click handler
generateBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();
    
    if (!apiKey) {
        showAlert('Please enter your OpenRouter API key', 'error');
        return;
    }
    
    if (!uploadedImageData) {
        showAlert('Please upload a photo first', 'error');
        return;
    }
    
    await generateSelfie(apiKey);
});

async function generateSelfie(apiKey) {
    // Disable button and show progress
    generateBtn.disabled = true;
    progressBar.style.display = 'block';
    resultSection.style.display = 'none';
    
    const footballer = footballerSelect.value;
    const style = styleSelect.value;
    
    // Build footballer description
    let footballerDesc;
    if (footballer === 'messi') {
        footballerDesc = "Lionel Messi in his Argentina national team jersey";
    } else if (footballer === 'ronaldo') {
        footballerDesc = "Cristiano Ronaldo in his Portugal national team jersey";
    } else {
        footballerDesc = "Lionel Messi in his Argentina jersey and Cristiano Ronaldo in his Portugal jersey";
    }
    
    // Create prompt
    const prompt = `Create a ${style} image where the person in the provided photo is taking a selfie with ${footballerDesc}. The person should be holding a pint of Guinness beer with the iconic dark stout and creamy white head. All people are looking at the camera as if taking a group selfie. The setting in the original image should be maintained. The person's face from the original image should be preserved exactly as it appears. Make it look natural and celebratory, like they just met their football heroes. The Guinness glass should be clearly visible and recognizable.`;
    
    try {
        // Call OpenRouter API
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': window.location.href,
                'X-Title': 'Guinness Selfie Generator'
            },
            body: JSON.stringify({
                model: 'google/gemini-2.5-flash-image-preview',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: 'I will provide my photo:'
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: `data:image/png;base64,${uploadedImageData}`
                                }
                            },
                            {
                                type: 'text',
                                text: prompt
                            }
                        ]
                    }
                ],
                modalities: ['image'],
                n: 1
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Parse response
        const message = data.choices[0].message;
        let imageFound = false;
        let generatedImageUrl = null;
        
        // Method 1: Check content field
        if (message.content && Array.isArray(message.content)) {
            for (const part of message.content) {
                if (part.type === 'output_image' || part.type === 'image_url') {
                    if (part.image_url && part.image_url.url) {
                        generatedImageUrl = part.image_url.url;
                        imageFound = true;
                        break;
                    }
                }
            }
        }
        
        // Method 2: Check images field
        if (!imageFound && message.images && Array.isArray(message.images)) {
            for (const image of message.images) {
                if (image.image_url && image.image_url.url) {
                    generatedImageUrl = image.image_url.url;
                    imageFound = true;
                    break;
                }
            }
        }
        
        if (imageFound && generatedImageUrl) {
            // Display generated image
            generatedImage.src = generatedImageUrl;
            resultSection.style.display = 'block';
            
            // Add to history
            const historyItem = {
                timestamp: new Date().toISOString(),
                footballer: footballer,
                style: style,
                imageUrl: generatedImageUrl
            };
            generationHistory.unshift(historyItem);
            
            // Keep only last 20 items
            if (generationHistory.length > 20) {
                generationHistory = generationHistory.slice(0, 20);
            }
            
            // Save to localStorage
            localStorage.setItem('generation_history', JSON.stringify(generationHistory));
            
            // Update history display
            updateHistoryDisplay();
            
            // Scroll to result
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            showAlert('Selfie generated successfully! 🎉', 'success');
        } else {
            throw new Error('No image found in the API response');
        }
        
    } catch (error) {
        console.error('Generation error:', error);
        showAlert(`Error: ${error.message}`, 'error');
        
        // Show troubleshooting tips
        const troubleshootDiv = document.createElement('div');
        troubleshootDiv.className = 'alert alert-warning';
        troubleshootDiv.style.marginTop = '20px';
        troubleshootDiv.innerHTML = `
            <strong>💡 Troubleshooting:</strong><br>
            1. Check your OpenRouter API key is valid<br>
            2. Verify you have credits/quota on OpenRouter<br>
            3. Visit <a href="https://openrouter.ai/activity" target="_blank">OpenRouter Activity</a> to see API logs<br>
            4. Try a smaller image (< 5MB)<br>
            5. Check your internet connection
        `;
        
        if (!document.querySelector('.alert-warning')) {
            generateBtn.parentElement.appendChild(troubleshootDiv);
            setTimeout(() => troubleshootDiv.remove(), 10000);
        }
    } finally {
        // Re-enable button and hide progress
        generateBtn.disabled = false;
        progressBar.style.display = 'none';
    }
}

// Download button handler
downloadBtn.addEventListener('click', () => {
    const footballer = footballerSelect.value;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const filename = `guinness_selfie_${footballer}_${timestamp}.png`;
    
    // Create download link
    const link = document.createElement('a');
    link.href = generatedImage.src;
    link.download = filename;
    link.click();
});

// Update history display
function updateHistoryDisplay() {
    if (generationHistory.length === 0) {
        historySection.style.display = 'none';
        return;
    }
    
    historySection.style.display = 'block';
    historyGrid.innerHTML = '';
    
    // Show last 6 items
    const itemsToShow = generationHistory.slice(0, 6);
    
    itemsToShow.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const date = new Date(item.timestamp);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        
        historyItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.footballer} - ${item.style}">
            <div class="history-item-info">
                <p><strong>${item.footballer.charAt(0).toUpperCase() + item.footballer.slice(1)}</strong> - ${item.style.charAt(0).toUpperCase() + item.style.slice(1)}</p>
                <p style="font-size: 0.8rem; color: #6c757d;">${dateStr}</p>
            </div>
        `;
        
        // Click to view full size
        historyItem.addEventListener('click', () => {
            generatedImage.src = item.imageUrl;
            resultSection.style.display = 'block';
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        
        historyGrid.appendChild(historyItem);
    });
}

// Alert function
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Insert after generate button
    generateBtn.parentElement.insertBefore(alert, progressBar);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}
