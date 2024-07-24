# Brainbase Voice Template

This assignment requires you to create and deploy the Brainbase Voice service.

## Introduction

At Brainbase, one of our most popular workers is our Voice worker which can make and receive natural sounding, low-latency calls.

Your first task at Brainbase is to create and deploy a simple version of this service.

## Installing the template

### Prerequisites

Before you begin, ensure you have Node.js and Python installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/) and [Python official website](https://www.python.org/).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/BrainbaseHQ/brainbase-voice-template
cd brainbase-voice-template
```

### Using ngrok

To make your local endpoints publicly available, you will need to use `ngrok`. You can learn more about ngrok [here](https://ngrok.com/) but for the most part, it will be enought to use

```bash
ngrok http PORT
```

to create a public endpoint for your service at `localhost:PORT`.

### Creating and connecting a Twilio phone number

For this project, you will need to create a phone number on Twilio, here's a rundown of the necessary steps:

1. Sign up for a Twilio account at twilio.com
2. Buy a phone number: Twilio usually charges around $1/mo for a phone number + usage cost which is a couple cents in most cases. We will be able to reimburse you for any charges up to $50 on Twilio after the take-home project.
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/3c353caa-0858-4549-b7bf-23075b674e9e">
3. Point the phone number to the public endpoint for the server
<img width="1512" alt="image" src="https://github.com/user-attachments/assets/22d6f988-5d21-4781-bb6f-dade89c28699">

## Components

The assignment has the following components:

- `server.js`: Primary server that will receive the call details from Twilio
- `sockets.js/sockets.py`: The websocket server to send and receive voice stream

## Milestones

**This is a challenging assignment.** Therefore you're given the following milestones that get progressively more difficult, and provide necessary structure for how to implement the entire system.

### Milestone 1: Echophone
For Milestone 1, you need to implement a service that will repeat the caller's speech back to them, by setting up the Websocket server and the server which will route the Twilio call here.

#### Criteria
- [X] [THIS HAS BEEN PROVIDED FOR YOU] `server.js/server.py` is successfully set up to receive call from Twilio and reroute to websocket server.
- [ ] `sockets.js/sockets.py` successfully receives audio from the Twilio connection and can repeat the speech back to the caller.
- [ ] Every Twilio number has its own unique identifier which gets passed into the websocket endpoint (the websocket should know which `call_id` each call is when processing).

### Milestone 2: AI voice
For Milestone 2, you need to modify your sockets.js service to be able to have a conversation with the user. Speech coming into websocket is transcribed to text, sent to OpenAI, response is returned, response is converted to speech, and response is finally sent back to the Twilio client.

**TIP: While you can implement all of these from scratch, you can use Pipecat for some/most/all. [Pipecat](https://github.com/pipecat-ai/pipecat) is an open-source, free AI package that has a lot of these services built in and makes it easy to create pipelines.

#### Criteria
- [ ] TTS (Deepgram) is correctly implemented
- [ ] LLM (OpenAI) is correctly implemented
- [ ] STT (ElevenLabs) is correctly implemented
- [ ] <1 second latency from end of caller speech to start of AI speech
- [ ] User can have a call with the AI on the Twilio number 
- [ ] The system can run an unlimited number of these turns

### Milestone 3: Scale up
For Milestone 3, you need to scale this voice service up to be able to take over 100 concurrent calls, by Dockerizing the service and deploying on Kubernetes.

#### Criteria
- [ ] Service Dockerized
- [ ] Running on Kubernetes locally with correct ports and permissions
- [ ] >100 concurrency

## Final run
Once all three milestones are succesfully completed, you should now have an AI worker that you can have a conversation with by calling the provided number!
