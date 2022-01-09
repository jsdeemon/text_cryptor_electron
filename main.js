const { app, BrowserWindow, Menu } = require('electron') 

let mainWindow 

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600
    })

    mainWindow.loadURL('https://reactmsgcryptor.web.app')
}

app.on('ready', () => {
    createMainWindow()
     // menu 
     const mainMenu = Menu.buildFromTemplate(menu)
     Menu.setApplicationMenu(mainMenu)
})

const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click: () => app.quit()
            }
        ]
    }
]