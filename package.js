Package.describe({
	name: 'dferber:reactive-var-toggle',
	version: '1.0.2',
	summary: 'Toggle boolean values of reactive variables.',
	git: 'https://github.com/dferber90/meteor-reactive-var-toggle',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	'use strict';
	
	api.versionsFrom('1.0');
	api.use('reactive-var');
	api.addFiles('toggle.js', 'client');
});
