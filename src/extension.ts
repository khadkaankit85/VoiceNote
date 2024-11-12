// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
console.log("voice-comment is activated");
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "voice-comment" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.workspace.onDidChangeTextDocument((event) => {
    // Check if the change is in a comment
    const doc = event.document;
    const range = event.contentChanges[0]?.range;
    if (range && range.start.line === range.end.line) {
      // Ensure it's a single line change
      const lineText = doc.lineAt(range.start.line).text.trim();
      console.log(lineText);
      if (lineText.includes("#voice:")) {
        const shouldStart = vscode.window.showQuickPick([
          "Record Voice Comment",
        ]);
        console.log("the value of should start is ", shouldStart);

        // Add logic for triggering the voice recorder here
      }
    }
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
