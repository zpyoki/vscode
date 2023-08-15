import * as vscode from 'vscode'

const msg = vscode.commands.registerCommand('pixiu.helloWorld', () => {
  vscode.window.showInformationMessage('第一个demo弹出信息!')
  vscode.window.showWarningMessage('第一个警告信息')
  vscode.window.showErrorMessage('第一个错误信息!')
})

export default msg