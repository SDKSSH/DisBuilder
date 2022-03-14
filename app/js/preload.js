const { ipcRenderer } = require('electron')
const UserSession = require("../utils/UserSession");
const Session = new UserSession();
const Discord = require("../utils/Discord");

getDiscord = Discord;

getSession = () => {
    return Session;
}

send = (channel, ...msg) => {
    ipcRenderer.send(channel, msg);
}

