Ext.define('App.view.UserCreateDatetimeChart',{
	extend:'Ext.chart.Chart',
	style: 'background:#fff',
    animate: true,
    shadow: true,
    store: 'UserCreateDatetimeStore',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['data'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: '时间段用户注册数',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['name'],
        title: '时间段'
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
          trackMouse: true,
          width: 300,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle(storeItem.get('name') + ': 此时间段用户注册数量为' + storeItem.get('data')+'个用户');
          }
        },
        label: {
          display: 'insideEnd',
          'text-anchor': 'middle',
            field: 'data',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'name',
        yField: 'data'
    }]
});