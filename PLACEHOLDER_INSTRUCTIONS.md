# Placeholder Replacement Instructions

This portfolio website has been generated with placeholder content that you need to replace with actual data. This document provides a comprehensive guide on how to replace all placeholders.

## Overview

The website uses placeholder syntax in two forms:
1. **JSON Data Placeholders**: `{{placeholder_name}}` - These appear in JSON data files
2. **Image Placeholders**: Visual placeholders that display the placeholder name for easy identification

## Files Containing Placeholders

### 1. JSON Data Files (Located in `src/data/`)

#### `achievements.json`
Contains timeline achievement data. Replace the following placeholders:

- `{{organizing_body}}` - Name of the organization/body that organized the event
- `{{location}}` - Location where the achievement took place
- `{{achievement_description_1}}` through `{{achievement_description_9}}` - Detailed descriptions of each achievement
- `{{image_player_early}}` - Path to early career football images
- `{{image_press_photo}}` - Path to press highlight images
- `{{image_hero_coach}}` - Path to main coaching images
- `{{image_talent_fc_logo}}` - Path to Talent FC logo
- `{{image_talent_fc_gallery_1}}`, `{{image_talent_fc_gallery_2}}`, `{{image_talent_fc_gallery_3}}` - Paths to Talent FC gallery images
- `{{pdf_certificate_1}}`, `{{pdf_certificate_2}}` - Paths to certificate PDFs
- `{{pdf_press_article_1}}` - Path to press article PDFs
- `{{press_link}}` - External link to press coverage
- `{{university_name}}` - Name of the university
- `{{school_name}}` - Name of the school
- `{{press_outlet}}` - Name of the press outlet
- `{{tournament_name}}` - Name of the tournament
- `{{certification_body}}` - Name of the certifying body

#### `press.json`
Contains press coverage data. Replace the following placeholders:

- `{{publisher_name}}` - Name of the publication/publisher
- `{{press_excerpt_1}}`, `{{press_excerpt_2}}`, `{{press_excerpt_3}}` - Short excerpts from press articles
- `{{external_link_1}}`, `{{external_link_2}}`, `{{external_link_3}}` - Links to full press articles
- `{{image_press_photo}}`, `{{image_talent_fc_gallery_1}}`, `{{image_hero_coach}}` - Paths to press images
- `{{pdf_press_article_1}}`, `{{pdf_press_article_2}}` - Paths to press article PDFs

#### `talentfc.json`
Contains Talent FC club information. Replace the following placeholders:

- `{{contact_email}}` - Contact email address for Talent FC
- `{{youtube_channel_id}}` - YouTube channel ID for Talent FC
- `{{instagram_link}}` - Instagram profile link for Talent FC
- `{{timing_placeholder}}` - Training session timings
- `{{achievement_placeholder_1}}`, `{{achievement_placeholder_2}}`, `{{achievement_placeholder_3}}` - Additional club achievements
- `{{parent_name_1}}`, `{{player_name_1}}` - Names for testimonials
- `{{testimonial_1}}`, `{{testimonial_2}}` - Testimonial quotes
- `{{image_talent_fc_logo}}` - Path to Talent FC logo
- `{{image_talent_fc_gallery_1}}`, `{{image_talent_fc_gallery_2}}`, `{{image_talent_fc_gallery_3}}` - Paths to gallery images

### 2. Component Placeholders

#### Contact Page (`src/pages/Contact.tsx`)
- `{{contact_email}}` - Contact email address
- `{{contact_phone}}` - Contact phone number

#### Footer Component (`src/components/Footer.tsx`)
- `{{contact_email}}` - Contact email address
- `{{instagram_link}}` - Instagram profile link
- `{{youtube_channel_id}}` - YouTube channel ID

#### About Page (`src/pages/About.tsx`)
- `{{bio_paragraph_1}}`, `{{bio_paragraph_2}}`, `{{bio_paragraph_3}}` - Biography paragraphs

## How to Replace Placeholders

### Step 1: Prepare Your Media Files

1. **Organize your images and PDFs** in the `public/media` directory (create this directory if it doesn't exist):
   ```
   public/
   └── media/
       ├── images/
       │   ├── hero-coach.jpg
       │   ├── player-early.jpg
       │   ├── press-photo.jpg
       │   ├── talent-fc-logo.png
       │   ├── gallery-1.jpg
       │   ├── gallery-2.jpg
       │   └── gallery-3.jpg
       └── documents/
           ├── certificate-1.pdf
           ├── certificate-2.pdf
           ├── press-article-1.pdf
           └── press-article-2.pdf
   ```

2. **Reference media files** using relative paths like `/media/images/hero-coach.jpg`

### Step 2: Replace JSON Placeholders

#### For `achievements.json`:

1. Open `src/data/achievements.json`
2. Use Find & Replace (Ctrl+F or Cmd+F) to replace placeholders:
   - Search for: `{{image_hero_coach}}`
   - Replace with: `/media/images/hero-coach.jpg`
   - Repeat for all image and PDF placeholders

3. Replace text placeholders with actual content:
   - Search for: `{{achievement_description_1}}`
   - Replace with: Your actual achievement description

#### For `press.json`:

1. Open `src/data/press.json`
2. Replace all `{{publisher_name}}` with actual publisher names
3. Replace excerpt placeholders with actual article excerpts
4. Replace image paths and PDF paths
5. Replace external links with actual article URLs

#### For `talentfc.json`:

1. Open `src/data/talentfc.json`
2. Replace contact information:
   - `{{contact_email}}` → `info@talentfc.com`
   - `{{youtube_channel_id}}` → Your actual YouTube channel ID
   - `{{instagram_link}}` → `https://instagram.com/talentfc`
3. Replace timing placeholders with actual training times
4. Replace testimonials with real testimonials

### Step 3: Replace Component Placeholders

#### Update Contact Information:

1. Open `src/pages/Contact.tsx`
2. Replace `{{contact_email}}` and `{{contact_phone}}`

3. Open `src/components/Footer.tsx`
4. Replace social media placeholders

#### Update About Page:

1. Open `src/pages/About.tsx`
2. Replace `{{bio_paragraph_1}}`, `{{bio_paragraph_2}}`, and `{{bio_paragraph_3}}` with actual biography text

### Step 4: Update Gallery Images

1. Open `src/pages/Gallery.tsx`
2. Replace the placeholder image paths in the `galleryImages` array with actual image paths

## Testing Your Changes

After replacing placeholders:

1. **Run the development server**:
   ```bash
   npm run dev
   ```

2. **Check each page**:
   - Home page: Verify hero image, press previews, and Talent FC logo
   - About page: Check biography text
   - Achievements page: Verify timeline images and documents
   - Talent FC page: Check gallery, social media links
   - Press page: Verify press article images and links
   - Gallery page: Check all gallery images
   - Contact page: Verify contact information

3. **Test functionality**:
   - Click on timeline items to expand details
   - Click on gallery images to view full-size
   - Click on press cards to read articles
   - Test the contact form
   - Verify all navigation links work

## Important Notes

### Image Requirements:
- **Recommended formats**: JPG, PNG, WebP
- **Recommended sizes**:
  - Hero images: 1200x1500px (4:5 aspect ratio)
  - Gallery images: 800x800px (square)
  - Press images: 800x600px (4:3 aspect ratio)
  - Logo: 400x400px (square, transparent background PNG)

### PDF Requirements:
- Keep PDFs under 5MB for faster loading
- Use descriptive filenames

### External Links:
- Ensure all external links start with `https://`
- Test all external links to verify they work

### Contact Information:
- Use a valid email address that you check regularly
- Include a phone number with country code if applicable

## Bulk Replacement Tips

### Using VS Code or Similar Editor:

1. **Open Find & Replace** (Ctrl+Shift+H or Cmd+Shift+H)
2. **Enable "Use Regular Expression"** mode
3. **Search across all files** in the `src/data/` directory
4. Replace placeholders systematically

### Using Command Line (macOS/Linux):

```bash
# Example: Replace all instances of {{contact_email}}
find src -type f -name "*.json" -o -name "*.tsx" | xargs sed -i '' 's/{{contact_email}}/info@talentfc.com/g'
```

### Using Command Line (Windows PowerShell):

```powershell
# Example: Replace all instances of {{contact_email}}
Get-ChildItem -Path src -Recurse -Include *.json,*.tsx | ForEach-Object {
    (Get-Content $_.FullName) -replace '{{contact_email}}', 'info@talentfc.com' | Set-Content $_.FullName
}
```

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify file paths are correct and files exist
3. Ensure JSON syntax is valid (use a JSON validator)
4. Check that all quotes and commas are properly placed in JSON files

## Final Checklist

Before deploying your website, verify:

- [ ] All JSON placeholders replaced
- [ ] All images uploaded to `/public/media/images/`
- [ ] All PDFs uploaded to `/public/media/documents/`
- [ ] Contact information updated everywhere
- [ ] Social media links updated
- [ ] Biography text updated
- [ ] All external links tested and working
- [ ] Website tested on mobile and desktop
- [ ] Forms working correctly
- [ ] Navigation working on all pages
- [ ] Build completes without errors (`npm run build`)

---

**Generated Website Structure:**

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── TimelineVertical.tsx
│   ├── PressCard.tsx
│   └── GalleryGrid.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── TalentFC.tsx
│   ├── Press.tsx
│   ├── Gallery.tsx
│   └── Contact.tsx
├── data/
│   ├── achievements.json
│   ├── press.json
│   └── talentfc.json
└── App.tsx
```

---

**Color Palette Reference:**
- Ivory: #FBF9F6
- Soft Teal: #2F8F8F
- Warm Gold: #C99A52
- Charcoal: #1E1E1E

**Typography:**
- Headings: Playfair Display
- Body: Inter / Noto Sans
- Arabic Callouts: Noto Naskh Arabic
