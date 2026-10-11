const { pool } = require("../config/database");

// POST: Save contact form message
const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Normalize input
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanSubject = String(subject).trim();
    const cleanMessage = String(message).trim();

    // Validate field lengths
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 200 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // Check empty strings
    if (!cleanName || !cleanSubject || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Fields cannot contain only spaces.",
      });
    }

    // Save message to database
    const [result] = await pool.execute(
      `INSERT INTO contact_messages
       (name, email, subject, message)
       VALUES (?, ?, ?, ?)`,
      [cleanName, cleanEmail, cleanSubject, cleanMessage]
    );

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully.",
      data: {
        id: result.insertId,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
};
