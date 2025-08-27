const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const router = express.Router();

// Replace <db_password> with your actual password and update user & cluster info
const uri = "mongodb+srv://JayaPrakash:<Mkoi@89000>@cluster0.8saivez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish or error
    await client.close();
  }
}

run().catch(console.dir);

// Error-handling middleware
router.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

// Ensure router is exported
if (typeof module !== 'undefined' && !module.exports) {
    module.exports = router;
}
