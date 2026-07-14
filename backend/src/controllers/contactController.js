import Contact from '../models/Contact.js';

// ───────────────────────── Public endpoint ─────────────────────────
// Called from the Next.js /api/contact route after it sends the notification email.

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof phone !== 'string'
    ) {
      return res.status(400).json({ error: 'Name, email and phone are required.' });
    }

    const contact = await Contact.create({
      name: name.trim().substring(0, 100),
      email: email.trim().substring(0, 200),
      phone: phone.trim().substring(0, 20),
      company: company ? String(company).trim().substring(0, 200) : '',
      message: message ? String(message).trim().substring(0, 2000) : '',
    });

    res.status(201).json(contact);
  } catch (error) {
    console.error('[CONTACT]', error.message);
    res.status(500).json({ error: 'An internal error occurred.' });
  }
};

// ───────────────────────── Admin (CMS) endpoints ─────────────────────────
// Mounted behind the existing protect + editorOrAdmin JWT middleware (see
// routes/contactAdminRoutes.js).

export const getAdminContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'contacted', 'not_interested'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status.' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    );
    if (!contact) return res.status(404).json({ error: 'Contact not found' });

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
