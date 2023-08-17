import * as vscode from 'vscode'
import config from '../utils/config'

const welcome = () => {
	console.log(`Congratulations, ${config.appName} is now active!`)
  vscode.window.showInformationMessage(`${config.appName} is ready`)
}

export default welcome