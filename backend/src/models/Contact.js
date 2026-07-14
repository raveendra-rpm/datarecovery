import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, default: '' },
    message: { type: String, default: '' },
    // 'new' = just submitted, not yet triaged by the admin.
    status: {
      type: String,
      enum: ['new', 'contacted', 'not_interested'],
      default: 'new',
    },
  },
  { timestamps: true },
);

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
