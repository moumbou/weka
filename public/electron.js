const { BrowserWindow, app } = require("electron");

let win = null;

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
