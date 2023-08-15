import * as vscode from 'vscode'

const px = vscode.commands.registerCommand('pixiu.px', () => {
  vscode.window.showInformationMessage('Welcome to use 曹操!')
})

export default px