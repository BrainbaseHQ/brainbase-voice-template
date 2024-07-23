# Brainbase Kafka Template

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

### Making the Script Executable

To make the `main.js` script executable, run the following command:

```bash
chmod +x main.js
```

### Linking the Package

Link the package globally on your system to run it from anywhere using `npx`. Navigate to the project directory and run:

```bash
npm link
```

### Usage

To start the chat application, you can use the following command from anywhere in your terminal:

```bash
npx brainbase-kafka-template
```

Alternatively, you can also run the script directly using Node.js if you are in the project directory:

```bash
node main.js
```

### Exiting the Chat

To exit the chat, simply type `exit` and hit enter. The application will close.

## Components

The assignment has the following components:

- `main.js`: Primary part where the terminal chat application runs
- `functions.js`: Some utility functions that need to be implemented for Kafka to be able to interact with the file system (feel free to add more functions as you need)
- `log_utils.js`: Some utility functions for logs (no need to touch)
- `/boilerplate`: This is what an application code should look like

## Milestones

**This is a challenging assignment.** Therefore you're given the following milestones that get progressively more difficult, and provide necessary structure for how to implement the entire system.

### Milestone 1: Echophone
For Milestone 1, you need to implement a service that will repeat the caller's speech back to them, by setting up the Websocket server and the server which will route the Twilio call here.

#### Criteria
- [ ] `server.js/server.py` is successfully set up to receive call from Twilio and reroute to websocket server.
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

### Milestone 3: Interruptions
For Milestone 3, you need to add the ability to be interrupted to the AI voice service so that when the caller starts talking in the middle of the AI's speech, the AI is able to stop and listent to the caller.

#### Criteria
- [ ] Interruptability threshold is adjustable
- [ ] <1 second latency from end of caller speech to start of AI speech

### Milestone 4: Scale up
For Milestone 4, you need to scale up this voice service to be able to take over 100 concurrent calls, by Dockerizing the service and deploying on Kubernetes.

#### Criteria
- [ ] Interruptability threshold is adjustable
- [ ] <1 second latency from end of caller speech to start of AI speech

      
```bash
1. const { action_1 } = require('/actions/action_1.js');
2. 
3. export const app = {
4.     name: '<app_name>', // e.g. 'google-calendar'
5.     displayName: '<APP_NAME>', // e.g. 'Google Calendar'
6.     authors: ['Kafka'],
7. ...
```
**This is very important for the next milestone.**
- [ ] The necessary functions are created as [tools](https://platform.openai.com/docs/guides/function-calling)  
- [ ] The file structure:
```bash
apps/
└── <app_name>/
    ├── index.js
    └── actions/
        └── <action_name>.js
```
is created. `index.js` should have the **exact** content of of `/boilerplate/index.js` and `actions/<action_name>.js` should have the **exact** content of `/boilerplate/actions/<action_name>.js`.

### Milestone 3: URL parsing and file modification
For the last milestone, you need to allow Kafka to **modify** the created files.

#### Criteria
- [ ] Function `modify_file` is created. This function replaces a certain line range in a file with the provided code segment.
- [ ] Function `read_web_page` is created. This is used to allow reading the text content from a provided url for the documentation.
- [ ] Kafka can use these functions to implement the `run` method of the created action in the file according to documentation.

## Final run
Once all three milestones are succesfully completed, you should now have an AI worker that you can have a conversation with and have it create integrations in the boilerplate format!

## Notes
The important thing here isn't that Kafka is able to perfectly create every integration without any manual intevention, it is that creating integrations with Kafka is faster and overall a better experience than us creating them from scratch. This symbiosis is what we strive to provide our customers with Brainbase as well.
