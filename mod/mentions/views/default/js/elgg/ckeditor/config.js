define(function(require) {
	var elgg = require('elgg');
	var $ = require('jquery');

	return {
		//toolbar: [['Bold', 'Italic', 'Underline', 'RemoveFormat'], ['Strike', 'NumberedList', 'BulletedList', 'Undo', 'Redo', 'Link', 'Unlink', 'Image', 'Blockquote', 'Paste', 'PasteFromWord', 'Maximize']],
		toolbarGroups: [
		    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		    //{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		    { name: 'links' },
		    { name: 'insert' },
		    //{ name: 'forms' },
		    { name: 'tools' },
		    // { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
		    //{ name: 'others' },
		    '/',
		    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		    { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		    // { name: 'styles' },
		    // { name: 'colors' },
		    //{ name: 'about' }
		    ],
		removeButtons: 'Subscript,Superscript,Font,Iframe', // To have Underline back
		allowedContent: true,
		baseHref: elgg.config.wwwroot,
		removePlugins: 'liststyle,contextmenu,tabletools,resize',
		extraPlugins: 'blockimagepaste',
		defaultLanguage: 'en',
		language: elgg.get_language(),
		skin: 'moono',
		uiColor: '#FFFFFF',
		fontDefaultLabel: 'Arial',
		contentsCss: elgg.get_simplecache_url('css', 'elgg/wysiwyg.css'),
		disableNativeSpellChecker: false,
		disableNativeTableHandles: false,
		removeDialogTabs: 'image:advanced;image:Link;link:advanced;link:target',
		autoGrow_maxHeight: $(window).height() - 100,
    extraPlugins: 'mentions'
	};
});
