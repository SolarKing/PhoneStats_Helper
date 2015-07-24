// module to control application life
var app = require('app');

// module to create native browser window
var BrowserWindow = require('browser-window');

// report crashes to electron servers
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
