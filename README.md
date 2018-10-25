
PROJECT

This is a react app built to track information regarding patrol activities surrounding state reporting requirements for speed grant enforcement. This app was built to be incredibly simple. The hope is it can be expanded upon but mostly used as a project base to learn react components. 

Requirements
For development, you will only need Node.js installed on your environement. And please use the appropriate Editorconfig plugin for your Editor (not mandatory).

Node
Node is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

$ node --version
v0.10.24

$ npm --version
1.3.21
Node installation on OS X
You will need to use a Terminal. On OS X, you can find the default terminal in /Applications/Utilities/Terminal.app.


Install


Start & watch

Simple build for production

Update sources
Some packages usages might change so you should run npm prune & npm install often. A common way to update is by doing

$ git pull
$ npm prune
$ npm install
To run those 3 commands you can just do

$ npm run pull
Note: Unix user can just link the git-hooks/post-merge:

Enable git hooks (unix only :/)
$ npm run create-hook-symlinks
post-merge (≃ npm install)
This hook will npm prune && npm install each time you git pull something if the package.json has been modified.

pre-commit (≃ npm test)
This hook will just ensure you will commit something not broken bye pruning npm packages not in the package.json & eventually reinstall missings/not correctly removed packages. Then it will try a production build.

Languages & tools
HTML

JavaScript
React is used for UI.
CSS


