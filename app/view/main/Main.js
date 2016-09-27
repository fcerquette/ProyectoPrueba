/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ProyectoPrueba.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'ProyectoPrueba.view.main.MainController',
        'ProyectoPrueba.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>Este seria un cambio para la version master y para develop.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Hice un cambio lalala Epw-01.ahora agrego epw-03</h2>'
        },{
        	title: 'Esto trajo conflictos'
        	,items:[{
        		html: 'lo resolvi'
        	},{
        		html: 'me dieron Epw-o6 que es una nueva funcionalidad'
        	},{
        		html: 'me falto decir que agregue la foto EPW-08'
        	}]

        }]
    }]
});
