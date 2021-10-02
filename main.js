const {app, BrowserWindow} = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        width: 1300,
        height: 725,
        minWidth: 1300,
        minHeight: 725,
        frame: false,
        icon: 'ss2Icon.jpg',
        webPreferences: {
            noreIntegration: true
        }
    });
    win.loadFile("startup.html");
}
app.whenReady().then(createWindow);