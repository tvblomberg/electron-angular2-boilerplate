const electron = require('electron');

const { app, BrowserWindow, globalShortcut, ipcMain } = electron;

const fs = require('fs');
const os = require('os');
const path = require('path');
const ipc = electron.ipcMain;
const shell = electron.shell;
const say = require('say');

let mainWindow;
let online = "ONLINE";
say.speak("Application started Mr. Tommy");
console.log(say);
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });
    globalShortcut.register('CmdOrCtrl+Shift+d', () => {
        mainWindow.webContents.toggleDevTools();
    });

    ipcMain.on('online', (event, status) => {
        var changed = online.toUpperCase() !== status.toUpperCase() ? true : false;

        if (changed) {
            shell.beep();
            if (status.toUpperCase() === "ONLINE") {
                say.speak("Application has gone online");
            } else {
                say.speak("Application has gone offline");
            }
        }

        online = status;
    });

    mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });


    ipc.on('print-to-pdf', function (event) {
        const pdfPath = path.join(os.tmpdir(), 'print.pdf')
        const win = BrowserWindow.fromWebContents(event.sender)
        // Use default printing options
        win.webContents.printToPDF({}, function (error, data) {
            if (error) throw error
            fs.writeFile(pdfPath, data, function (error) {
                if (error) {
                    throw error
                }
                shell.openExternal('file://' + pdfPath)
                event.sender.send('wrote-pdf', pdfPath)
            })
        })
    })
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

/* Due to OSX */
app.on("window-all-closed", () => {
    app.quit();
});