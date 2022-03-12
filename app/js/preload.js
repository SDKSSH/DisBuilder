const { ipcRenderer } = require('electron')
const UserSession = require("../utils/UserSession");
const Session = new UserSession();

getSession = () => {
    return Session;
}

send = (channel, ...msg) => {
    ipcRenderer.send(channel, msg);
}
