const { app, BrowserWindow, ipcMain } = require('electron')
const autoUpdater = require('electron-updater').autoUpdater;
const path = require('path');
const url = require('url');
const ejse = require('ejs-electron');

const initWindow = () => {
    const frame = new BrowserWindow({
        width: 800,
        height: 600,
        closable: true,
        center: true,
        hasShadow: true,
        webPreferences: {
            preload: path.join(__dirname, "app/js/preload.js"),
            nodeIntegration: true
        }
    })
    frame.setTitle("DisBuilder");
    frame.loadFile("./app/home.ejs")
}

app.whenReady().then(() => {
    initWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})