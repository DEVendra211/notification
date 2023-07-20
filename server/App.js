const express = require("express");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK (same code as before)
const serviceAccount = require("./firebase_credentials/practice-f2c1b-firebase-adminsdk-aubf7-73c3e23acb.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

// API endpoint to send push notification
app.post("/send-notification", (req, res) => {
  const { deviceRegistrationToken } = req.body;

  const message = {
    notification: {
      title: "New Message",
      body: "You have a new message.",
    },
    token: deviceRegistrationToken,
  };

  // Send the message
  admin.messaging().send(message)
    .then((response) => {
      console.log("Successfully sent notification:", response);
      res.json({ success: true });
    })
    .catch((error) => {
      console.error("Error sending notification:", error);
      res.status(500).json({ success: false, error: "Failed to send notification." });
    });
});

// Start the server on a specific port (e.g., 3000)
app.listen(5173, () => {
  console.log("Server started on port 3000");
});
