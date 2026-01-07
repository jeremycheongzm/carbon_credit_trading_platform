const express = require('express');
const prisma = require('../config/db');
const router = express.Router();

// Get all requests
router.get('/', async (req, res) => {
  const requests = await prisma.request.findMany();
  res.json(requests);
});

// Create a new request
router.post('/', async (req, res) => {
  const { companyName, carbonQuantity, carbonPrice, requestReason } = req.body;

  const request = await prisma.request.create({
    data: {
      companyName,
      carbonQuantity,
      carbonPrice,
      requestReason,
      requestType: 'Buy',
    },
  });

  res.json(request);
});

module.exports = router;
