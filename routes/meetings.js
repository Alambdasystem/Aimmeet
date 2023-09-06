const express = require('express');
const router = express.Router();
const container = require('../cosmosDB'); // Use the Azure Cosmos DB integration

// Available times route

// ...

// Schedule meeting route
router.post('/schedule', async (req, res) => {
  const { contactId, dateTime } = req.body;

  try {
    // Trigger Azure Function for email notifications

    // Store meeting in Azure Cosmos DB
    const newItem = {
      contactId: contactId,
      dateTime: dateTime,
    };

    const { resource } = await container.items.create(newItem);
    res.status(201).json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Meeting scheduling failed' });
  }
});

module.exports = router;