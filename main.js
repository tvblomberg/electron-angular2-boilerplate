const electron = require('electron');

const { app, BrowserWindow, globalShortcut } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });
    globalShortcut.register('CmdOrCtrl+Shift+d', () => {
        mainWindow.webContents.toggleDevTools();
    });

    mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

/* Due to OSX */
app.on("window-all-closed", () => {
    app.quit();
});