
import * as vscode from 'vscode'

const progress = vscode.commands.registerCommand('pixiu.progress', () => {
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: "载入xxxx的进度...",
    cancellable: true
  }, (progress) => {
    // 初始化进度
    progress.report({ increment: 0 })

    setTimeout(() => {
      progress.report({ increment: 10, message: "在努力。。。." })
    }, 1000)

    setTimeout(() => {
      progress.report({ increment: 40, message: "马上了..." })
    }, 2000)

    setTimeout(() => {
      progress.report({ increment: 50, message: "这就结束..." })
    }, 3000)

    const p = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 5000)
    })

    return p
  })
})

export default progress