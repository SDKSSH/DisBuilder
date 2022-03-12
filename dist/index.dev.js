"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    ipcMain = _require.ipcMain;

var initWindow = function initWindow() {
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    closable: true,
    center: true,
    hasShadow: true,
    autoHideMenuBar: true
  });
  win.loadFile("./index.html");
};

app.whenReady().then(function () {
  initWindow();
});
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});