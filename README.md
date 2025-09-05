# Shanmukha Tharun Turpudi - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a clean design that showcases Shanmukha's skills and experience.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: CSS animations and JavaScript transitions
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Contact Form**: Functional form with validation and notifications
- **Skill Progress Bars**: Animated progress indicators for technical skills
- **Project Gallery**: Hover effects and interactive overlays
- **Timeline Layout**: Professional experience and education display
- **Particle Effects**: Subtle background animations in hero section
- **Theme Toggle**: Dark/light mode option
- **Scroll to Top**: Convenient navigation button
- **Loading Animation**: Professional preloader
- **SEO Optimized**: Proper meta tags and structured content
- **Performance Optimized**: Lazy loading and efficient code

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── animations.css     # Animation styles
├── js/
│   ├── main.js           # Main JavaScript functionality
│   ├── navigation.js     # Navigation and smooth scrolling
│   └── animations.js     # Animation triggers
├── assets/
│   ├── images/           # Profile and project images
│   │   ├── profile.jpg           # Profile photo (400x400px recommended)
│   │   ├── sgpa-calculator.jpg  # Project screenshot (600x400px recommended)
│   │   └── sports-website.jpg   # Project screenshot (600x400px recommended)
│   └── icons/            # Custom icons if needed
└── README.md
```

## 🛠️ Setup Instructions

### 1. Clone or Download
```bash
git clone <repository-url>
cd portfolio-website
```

### 2. Open in Browser
Simply open `index.html` in your web browser, or serve it using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Or simply open index.html in your browser
```

### 3. Customize Content

#### Personal Information
Edit the following sections in `index.html`:

- **Hero Section**: Update name, title, and description
- **About Section**: Modify personal description and stats
- **Experience**: Update work experience details
- **Skills**: Adjust skill levels and categories
- **Projects**: Update project descriptions and links
- **Education**: Modify educational background
- **Contact**: Update contact information

#### Styling
- `css/style.css`: Main styling, colors, layout
- `css/animations.css`: Animation keyframes and effects

#### Functionality
- `js/main.js`: Contact form, notifications, theme toggle
- `js/navigation.js`: Navigation and scrolling
- `js/animations.js`: Scroll animations and effects

### 4. Add Images

Replace placeholder images in the `assets/images/` folder:

1. **Profile Photo**: `profile.jpg` (400x400px recommended)
2. **Project Screenshots**:
   - `sgpa-calculator.jpg` (600x400px recommended)
   - `sports-website.jpg` (600x400px recommended)

### 5. Update Links

Update the following links in `index.html`:

- LinkedIn profile URL
- Project demo and source code links
- Email address
- Phone number

## 🎨 Customization Options

### Color Scheme
Modify the color variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #fbbf24;
    --text-color: #1f2937;
    --bg-color: #ffffff;
}
```

### Fonts
The website uses Google Fonts (Inter). To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify font-family in `css/style.css`

### Animations
Control animation timing and effects in `css/animations.css`:

- Adjust animation durations
- Modify keyframe animations
- Change easing functions

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify/Vercel
1. Connect your GitHub repository
2. Deploy automatically
3. Get a custom domain if desired

### Traditional Hosting
1. Upload all files to your web server
2. Ensure proper file permissions
3. Test all functionality

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## 📈 Performance Optimization

The website includes several performance optimizations:

- **Lazy Loading**: Images load only when needed
- **Minified Code**: CSS and JavaScript are optimized
- **Efficient Animations**: Uses CSS transforms and opacity
- **Font Optimization**: Uses font-display: swap

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images are in the correct folder
2. **Animations not working**: Ensure all CSS and JavaScript files are loading properly
3. **Form not submitting**: Check browser console for JavaScript errors
4. **Mobile menu not working**: Verify viewport meta tag is present

### Development Tools

- **Browser DevTools**: Inspect elements, debug JavaScript
- **Lighthouse**: Test performance, accessibility, SEO
- **Responsive Design Mode**: Test different screen sizes

## 📄 License

This project is open source. Feel free to use and modify it for your own portfolio.

## 🤝 Contributing

If you'd like to contribute improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you need help customizing or have questions:

- Check the browser console for errors
- Verify all file paths are correct
- Ensure you're using a modern browser
- Test on different devices and screen sizes

---

**Built with ❤️ using HTML, CSS, and JavaScript**
