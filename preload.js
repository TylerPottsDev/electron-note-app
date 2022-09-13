const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	title: "My Notes App",
	createNote: (data) => ipcRenderer.invoke('create-file', data)
})