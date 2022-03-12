const { app, BrowserWindow, ipcMain } = require('electron')

const initWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        closable: true,
        center: true,
        hasShadow: true,
        autoHideMenuBar: true
    })
    win.loadFile("./index.html")
}

app.whenReady().then(() => {
    initWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})