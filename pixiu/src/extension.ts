import * as vscode from 'vscode'
import msg from './lib/msg'
import nav from './lib/nav'
import progress from './lib/progress'
// import hover from './lib/hover'
// import px from './lib/px'

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, "PiXiu" is now active!')

	// context.subscriptions.push(px)
	context.subscriptions.push(msg)
	context.subscriptions.push(nav)
	context.subscriptions.push(progress)
	// context.subscriptions.push(hover)
}

export function deactivate() {}
