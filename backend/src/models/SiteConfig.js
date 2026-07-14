import mongoose from 'mongoose';

const siteConfigSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      required: true,
      default: 'Admin Panel',
    },
    siteDescription: {
      type: String,
    },
    contactEmail: {
      type: String,
    },
    heroImages: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const SiteConfig = mongoose.model('SiteConfig', siteConfigSchema);
export default SiteConfig;
