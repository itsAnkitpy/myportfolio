# Project Images Organization Guide

## 📁 Folder Structure

Each project has its own folder matching the project `slug` from `lib/data.ts`.

```
projects/
  ├── project-management-system/
  │   ├── hero.png              # Main thumbnail (required)
  │   ├── dashboard.png         # Feature screenshot
  │   ├── mobile-view.png       # Mobile responsiveness
  │   ├── analytics.png         # Another key feature
  │   └── video-thumbnail.png   # Video preview (optional)
  │
  ├── git-commit-dating-app/
  │   ├── hero.png
  │   ├── swipe-feature.png
  │   ├── messaging.png
  │   └── video-thumbnail.png
  │
  └── [project-slug]/
      ├── hero.png              # Always required
      └── [descriptive-name].png
```

## 🎯 Image Naming Conventions

### Required Images
- **`hero.png`** - Main project image (shown on homepage)
  - Dimensions: 1200x800px (3:2 aspect ratio)
  - Max size: 150KB
  - Format: PNG or WebP

### Optional Images
- **`dashboard.png`** - Main interface view
- **`mobile-view.png`** - Mobile responsiveness
- **`[feature-name].png`** - Key feature screenshots
- **`video-thumbnail.png`** - Video preview with play button overlay

## 📏 Image Specifications

| Type | Dimensions | Max Size | Format |
|------|------------|----------|--------|
| Hero/Thumbnail | 1200x800px | 150KB | PNG/WebP |
| Gallery | 1200x800px | 100KB | PNG/WebP |
| Mobile | 375x667px | 80KB | PNG/WebP |
| Video Thumbnail | 1200x675px (16:9) | 120KB | PNG/WebP |

## 🔧 How to Add Images to a Project

### 1. Create Project Folder (if not exists)
```bash
mkdir -p public/assets/images/projects/your-project-slug
```

### 2. Add Your Images
Place optimized images in the project folder:
```
public/assets/images/projects/your-project-slug/
  ├── hero.png
  ├── feature-1.png
  └── feature-2.png
```

### 3. Update data.ts
```typescript
{
  id: 1,
  slug: "your-project-slug",
  title: "Your Project",
  image: "/assets/images/projects/your-project-slug/hero.png",
  images: {
    hero: "/assets/images/projects/your-project-slug/hero.png",
    gallery: [
      "/assets/images/projects/your-project-slug/feature-1.png",
      "/assets/images/projects/your-project-slug/feature-2.png"
    ],
    mobile: "/assets/images/projects/your-project-slug/mobile-view.png",
    videoThumbnail: "/assets/images/projects/your-project-slug/video-thumbnail.png"
  },
  video: {
    loomUrl: "https://www.loom.com/share/your-video-id",
    duration: "2:45"
  },
  // ... rest of fields
}
```

## 🎨 Image Optimization Tips

### Before Adding Images:
1. **Compress images** - Use tools like TinyPNG, Squoosh, or ImageOptim
2. **Use WebP format** when possible (with PNG fallback)
3. **Resize to exact dimensions** - Don't rely on CSS/HTML resizing
4. **Remove metadata** - Strip EXIF data to reduce file size

### Recommended Tools:
- **Online**: [Squoosh.app](https://squoosh.app), [TinyPNG](https://tinypng.com)
- **CLI**: `sharp-cli`, `imagemagick`
- **Bulk**: Use Next.js Image Optimization (automatic)

## ✅ Checklist for Each Project

- [ ] Hero image added (`hero.png`)
- [ ] 2-4 gallery images showing key features
- [ ] Mobile view screenshot (if applicable)
- [ ] All images optimized (<150KB each)
- [ ] Images using WebP or PNG format
- [ ] Proper aspect ratios maintained
- [ ] Updated `lib/data.ts` with image paths
- [ ] Video thumbnail added (if you have Loom demo)

## 📝 Example: Complete Project Setup

```typescript
// In lib/data.ts
{
  id: 1,
  slug: "project-management-system",
  title: "Project/Employee Management System",
  shortDescription: "A comprehensive management system...",
  image: "/assets/images/projects/project-management-system/hero.png",
  images: {
    hero: "/assets/images/projects/project-management-system/hero.png",
    gallery: [
      "/assets/images/projects/project-management-system/dashboard.png",
      "/assets/images/projects/project-management-system/tasks-view.png",
      "/assets/images/projects/project-management-system/analytics.png"
    ],
    mobile: "/assets/images/projects/project-management-system/mobile-view.png",
    videoThumbnail: "/assets/images/projects/project-management-system/video-thumbnail.png"
  },
  video: {
    loomUrl: "https://www.loom.com/share/abc123def456",
    duration: "3:20"
  },
  tags: ["Laravel", "PHP", "Javascript", "Bootstrap"],
  // ... rest of project data
}
```

## 🚀 Migration from Old Structure

If you have existing images in `/assets/images/`, move them:

```bash
# Move existing project images to their folders
mv public/assets/images/cineImg.png public/assets/images/projects/project-management-system/hero.png
mv public/assets/images/gitcommitImg.png public/assets/images/projects/git-commit-dating-app/hero.png
mv public/assets/images/ecommImg.png public/assets/images/projects/ecommerce-website/hero.png
```

Then update the paths in `lib/data.ts`.

## 🎯 Benefits of This Structure

- ✅ Easy to manage multiple images per project
- ✅ Clear organization (each project owns its assets)
- ✅ Scalable (add more images without cluttering)
- ✅ Matches your URL structure (`/projects/[slug]`)
- ✅ Better version control (track changes per project)
- ✅ SEO-friendly naming

