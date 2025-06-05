const https = require("https");
const fs = require("fs");
const path = require("path");

const images = {
  // About page images
  "about-hero.jpg":
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  "mission.jpg": "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "story.jpg": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "quality.jpg": "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  "innovation.jpg":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "customer.jpg": "https://images.unsplash.com/photo-1552581234-26160f608093",

  // Contact page images
  "contact-hero.jpg":
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a",
  "contact-office.jpg":
    "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "contact-map.jpg":
    "https://images.unsplash.com/photo-1524661135-423995f22d0b",

  // Profile page images
  "profile-banner.jpg":
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
  "profile-avatar.jpg":
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",

  // Orders page images
  "orders-hero.jpg":
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
  "order-1.jpg": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "order-2.jpg": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "order-3.jpg": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, "public", "images", filename);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
  });
};

const downloadAllImages = async () => {
  // Create images directory if it doesn't exist
  const imagesDir = path.join(__dirname, "public", "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Download all images
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error);
    }
  }
};

downloadAllImages();
