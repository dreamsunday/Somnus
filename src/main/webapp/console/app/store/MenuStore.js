Ext.define("App.store.MenuStore",{
	extend:'Ext.data.TreeStore',
	model:'App.model.MenuModel',
	proxy:{
		type:'ajax',
		url:app.contextPath + '/base/syresource!doNotNeedSecurity_getMainMenu.action',
		reader:"json",
		extractResponseData: function(response) {
              var json = Ext.loadFilter(Ext.JSON.decode(response.responseText),{parentField : 'pid'});
              Ext.each(json,function(record){
            	  if(Ext.isEmpty(record.children)){
            		  record.expanded = false;
            		  record.leaf = true;
            	  }else{
            		  record.expanded = true;
            	  }
              });
              response.responseText = Ext.JSON.encode(json);
              return response  
          }
	},
	autoLoad: true
});