const { BrowserWindow, app, ipcMain } = require("electron");
const electron = require("electron");
const arff = require("node-arff");
const path = require("path");

let win = null;

const dialog = electron.dialog;

//* Disable error dialogs by overriding
dialog.showErrorBox = function (title, content) {
  console.log(`${title}\n${content}`);
};

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1024,
    height: 600,
    minWidth: 1024,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      webSecurity: false,
    },
    show: false,
  });

  win.loadURL("http://localhost:3000");

  win.webContents.on("did-finish-load", (e) => {
    win.show();
  });
}

//* APP FUNCTIONS
app.whenReady().then(createWindow);

//* IPC MAIN
ipcMain.on("get:data", (e, args) => {
  arff.load(args, (err, data) => {
    if (err) return console.log(err);

    console.log(data)
    arff.toString(data, (err, result) => {
      e.sender.send('get:data', result)
    });
  });
});
