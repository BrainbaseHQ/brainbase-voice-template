# Brainbase Kafka Template

This assignment requires you to create the Brainbase Kafka internal AI worker.

## Introduction

At Brainbase, we work on a lot of fun and exciting things. Unfortunately, creating integrations isn't one of them, but it is something that has to get done, so we want to make it as easy on ourselves as possible.

Your first task at Brainbase is to follow our motto and *make yourself useless* by making an AI worker that can take over this integration creation from you, so you can work on better things that actually excite you.

## Installing the template

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/BrainbaseHQ/brainbase-kafka-template
cd brainbase-kafka-template
```

Since the project uses only built-in Node.js modules, no additional npm installations are required.

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

### Milestone 1: Terminal Chat
For Milestone 1, all you need to do is connect the provided application to the OpenAI GPT-4 API to create a lite version of ChatGPT on the terminal. **No function calling or streaming necessary.**

#### Criteria
- [ ] The OpenAI API is successfully set up.
- [ ] The system is able to keep a conversation going.

### Milestone 2: Basic file tasks
For Milestone 2, you need to allow your basic chat app from Milestone 1 to create the correct file structure for a new app based on user instruction.

#### Criteria
- [ ] Functions `read_file`, `create_file`, `write_into_file` and `list_files_in_workspace` are created
- [ ] `read_file` logs out the contents of the file **with line numbers**, for example:
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
