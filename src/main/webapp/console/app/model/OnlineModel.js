Ext.define('App.model.OnlineModel', {
	extend: 'Ext.data.Model',
	fields: [
	         {name: 'id',type: 'string'},
	         {name: 'loginname',type: 'string'},
	         {name: 'ip', type: 'string'},
	         {name: 'createdatetime',  type: 'string'},
	         {name: 'type',  type: 'string'}
	]
});