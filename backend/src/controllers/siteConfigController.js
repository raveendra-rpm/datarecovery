import multer from 'multer';
import path from 'path';
import fs from 'fs';
import SiteConfig from '../models/SiteConfig.js';

// Multer storage for site images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/site';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `site-media-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

export const uploadSiteMedia = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// @desc    Get site configuration
// @route   GET /api/site-config
// @access  Public
export const getSiteConfig = async (req, res) => {
  try {
    let config = await SiteConfig.findOne();
    if (!config) {
      config = await SiteConfig.create({ siteName: 'Data Storage Solutions' });
    }
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching site config' });
  }
};

// @desc    Update site configuration
// @route   PUT /api/site-config
// @access  Private/Admin
export const updateSiteConfig = async (req, res) => {
  try {
    const { siteName, siteDescription, contactEmail, heroImages } = req.body;

    let config = await SiteConfig.findOne();
    if (!config) {
      config = new SiteConfig();
    }

    if (siteName !== undefined) config.siteName = siteName;
    if (siteDescription !== undefined) config.siteDescription = siteDescription;
    if (contactEmail !== undefined) config.contactEmail = contactEmail;
    if (heroImages !== undefined) config.heroImages = heroImages;

    const updatedConfig = await config.save();
    res.json(updatedConfig);
  } catch (error) {
    res.status(500).json({ message: 'Server Error updating site config' });
  }
};

// @desc    Upload a single image for the site (e.g. hero image)
// @route   POST /api/site-config/upload-image
// @access  Private/Admin
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file provided' });
    }
    const imageUrl = `/uploads/site/${req.file.filename}`;
    res.status(200).json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image' });
  }
};
