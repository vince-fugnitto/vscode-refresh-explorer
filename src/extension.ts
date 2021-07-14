import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vscode-refresh-explorer.refresh', () => {
		vscode.commands.executeCommand('workbench.files.action.refreshFilesExplorer');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
