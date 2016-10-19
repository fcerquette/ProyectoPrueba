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
        html: '<ul><li>Florenciaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa cerqueteeeeeeeeeeeee ticket 1.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        },{

        	text:'button2'
},{
        	text: 'Button1''

        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'CLIENTES',
            html: '<h2>CONFLICTOOOO </h2>'
        },{
        	 title: 'PROVEEDORES'
        	,html: '<h2> EPW-11</h2>'

        },{
        	title: 'Button 3'
        	hola:'3'
        }]
    }]
});
