# WelcomeSecurity Logo Guidelines

## Current Logo Files
- `images/logo/logo.svg` - Desktop logo (includes full text and security icon)
- `images/logo/logo-mobile.svg` - Mobile logo (simplified version)

## Logo Configuration in _config.yml
The logo paths and dimensions are configured in `_config.yml`:

```yaml
logo:
  mobile: "images/logo/logo-mobile.svg"
  mobile_height: "32px"
  mobile_width: "32px"  
  desktop: "images/logo/logo.svg"
  desktop_height: "32px"
  desktop_width: "120px"
```

## Current Logo Features
- Professional green and gray color scheme (#35996E green, dark gray text)
- Security-focused design with shield/lock elements
- "WelcomeSecurity" text with Danish tagline
- SVG format for scalability
- Optimized for both light and dark backgrounds

## Recommendations for Logo Updates
1. **Colors**: The current green (#35996E) works well with our updated color scheme (#16a085)
2. **Branding**: The logo already includes "WelcomeSecurity" branding
3. **Danish text**: Consider updating the Danish text to match our current messaging
4. **Favicon**: Create a favicon.ico version of the logo symbol for browser tabs
5. **Social media**: Create square versions for social media platforms

## Template Compatibility
The logo files are referenced in:
- `_config.yml` for configuration
- `_includes/logo.html` for display logic
- `_sass/components/_logo.scss` for styling

Keep these files when updating logos to maintain template compatibility during updates.

## Security Best Practices
- Use SVG format for vector graphics (current implementation ✓)
- Optimize file sizes for fast loading (current files are well optimized ✓)
- Include alt text for accessibility (handled by template ✓)
- Consider dark mode variants if implementing dark theme