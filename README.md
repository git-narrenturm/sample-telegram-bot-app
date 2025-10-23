## Description

Sample app for telegram bot initialization.

Uses straght-forward aproach on loading predefined bots on application startup.

Just for testing purposes.

## Project setup

```
npm i
```

## Environment variables
Create `.env` file in root folder with the following variables:
```
PORT=
BOT_TOKEN_1=
BOT_TOKEN_2=
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

App will start on 3000 port by default

## Routes
1. Initialize a new bot
```
POST
/bots
```
Payload:
```
{
  "id: <predefined bot uuid used for internal purposes>,
  "name": <custom bot name used for internal purposes>,
  "token": <pregenerated bot token>
}
```

2. Send a message via bot
```
POST
/bots/send
```
Payload:
```
{
  "botId": <predefined bot uuid used for internal purposes>,
  "chatId": <chat identification number>,
  "text": <message to send>
}
```
