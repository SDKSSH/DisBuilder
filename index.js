const { app, BrowserWindow, ipcMain } = require('electron')
const autoUpdater = require('electron-updater').autoUpdater;
const path = require('path');
const url = require('url');
const ejse = require('ejs-electron');

const initWindow = () => {
    const frame = new BrowserWindow({
        width: 1080,
        height: 720,
        closable: true,
        center: true,
        fullscreenable: false,
        maximizable: false,
        hasShadow: true,
        webPreferences: {
            preload: __dirname+"/app/js/preload.js",
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    frame.setTitle("DisBuilder");
    frame.loadFile(path.join(__dirname, "app/home.ejs"))
}

app.whenReady().then(() => {
    initWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})