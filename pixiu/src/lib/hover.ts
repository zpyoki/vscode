import * as vscode from 'vscode'

const hover = vscode.languages.registerHoverProvider('javascript', {
  provideHover(document, position, token) {
    const fileName = document.fileName
    const word = document.getText(document.getWordRangeAtPosition(position))
    // console.log(1, document)
    // console.log(2, position)
    // console.log(3, token)
    // console.log(4, '这个就是悬停的文字', word)
    // 支持markdown语法
    return new vscode.Hover(
    `### 我就是返回的信息!
      1. 第一项：
        - 第一个元素
        - 第二个元素
      2. 第二项：
        - 第一个元素
        - 第二个元素
  `)
  }
 }
)

export default hover