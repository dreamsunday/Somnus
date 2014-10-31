Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('App',app.basePath+'/console/app');
Ext.require([
    'App.apply.BtnSearch', 
    'App.apply.EmptySearch'
]);
Ext.define('App.view.OnlineView',{
	extend:'Ext.grid.Panel',
	alias:'widget.onlineview',
	store:'OnlineStore',
	columns:[Ext.create("Ext.grid.RowNumberer",{}),{
		text : '登录名',
		dataIndex : 'loginname',
		width : 200
	},{
		text : 'IP地址',
		dataIndex : 'ip',
		width : 200
	},{
		text : '创建时间',
		dataIndex : 'createdatetime',
		width : 150,
		sortable : true
	},{
		text:'类别',
		dataIndex:'type',
		renderer:function(value){
			switch (value){
				case '0':
					return "<span style='color:gray;font-weight:bold;'>注销系统</span>";
				case '1':
					return "<span style='color:green;font-weight:bold;'>登录系统</span>";
			}
		}
	}],
	dockedItems:[{
		xtype : 'toolbar',
		dock : 'top',
		items:[{
			xtype:'textfield',
			name:'QUERY_t#loginname_S_LK',
			fieldLabel:'登录名',
			labelWidth : 50,
			width: 200
		},{
			xtype:'textfield',
			name:'QUERY_t#ip_S_LK',
			fieldLabel:'IP地址',
			labelWidth : 50,
			width: 200
		},{
			xtype : 'combo',
			fieldLabel : '类别',
			labelWidth : 50,
			width: 150,
			name:'QUERY_t#type_S_EQ',
			store : {
				fields:[{name:'text',type:'string'},{name:'value',type:'string'}],
				data:[{text:'登录系统',value:'1'},{text:'注销系统',value:'0'}]
			},
			valueField : 'value',
			displayField : 'text',
			queryMode : 'local',
			emptyText:'请选择'
		},{
			xtype:'datefield',
			name:'QUERY_t#createdatetime_D_GE',
			format:'Y-m-d H:i:s',
			fieldLabel:'创建时间',
			labelWidth : 60,
			width: 220
		},'—',{
			xtype:'datefield',
			format:'Y-m-d H:i:s',
			name:'QUERY_t#createdatetime_D_LE',
			width: 160
		},{
			xtype:'btnsearch',
			store: 'OnlineStore',
			paramName:['QUERY_t#loginname_S_LK','QUERY_t#ip_S_LK','QUERY_t#type_S_EQ','QUERY_t#createdatetime_D_GE','QUERY_t#createdatetime_D_LE'],
			text:'过滤'
		}]
	},{
		xtype:'pagingtoolbar',
		store: 'OnlineStore',
		dock :'bottom',
		displayInfo: true
}],
	viewConfig:{
		forceFit:true,
		loadMask:true,
		stripeRows:true
	}
})