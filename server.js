// Import necessary modules
const express = require("express");
const { VoiceResponse } = require("twilio").twiml;

// Create an instance of the Express application
const app = express();

// Define the port for the HTTP server
const HTTP_SERVER_PORT = 5000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

/**
 * Route to handle Twilio webhook requests
 * This endpoint will receive the webhook from Twilio when a call is answered
 */
app.post("/stream", (req, res) => {
  // Log the information about the answered call
  console.log("Received message:", req.body.AnsweredBy);

  // Create a new TwiML (Twilio Markup Language) response object
  const response = new VoiceResponse();

  // Add a <Connect> verb to the TwiML response to stream audio via WebSocket
  const connect = response.connect();
  connect.stream({
    url: // URL of the WebSocket server
  });

  // Set the response content type to XML
  res.set("Content-Type", "text/xml");
  
  // Send the TwiML response back to Twilio
  res.send(response.toString());
});

/**
 * Start the Express server
 * The server will listen on the specified port and log a message to the console
 */
app.listen(HTTP_SERVER_PORT, () => {
  console.log(`Express server running on http://localhost:${HTTP_SERVER_PORT}`);
});
