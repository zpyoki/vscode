import * as vscode from 'vscode'
import msg from './lib/msg'
import nav from './lib/nav'
import progress from './lib/progress'
// import hover from './lib/hover'
import px from './lib/px'
import welcome from './lib/welcome'
import hi from './lib/hi'

export function activate(context: vscode.ExtensionContext) {
	welcome()

	context.subscriptions.push(hi)
	context.subscriptions.push(msg)
	context.subscriptions.push(px)
	context.subscriptions.push(nav)
	context.subscriptions.push(progress)
	// context.subscriptions.push(hover)
}

export function deactivate() {}
