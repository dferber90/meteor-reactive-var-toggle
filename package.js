Package.describe({
	name: 'dferber:reactive-var-toggle',
	version: '1.0.0',
	summary: 'Toggle boolean values of reactive variables.',
	git: 'https://github.com/dferber90/meteor-reactive-var-toggle',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	'use strict';
	
	api.imply('reactive-var');
});
