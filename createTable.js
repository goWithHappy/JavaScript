var table=document.createElement('table');
table.border=1;
table.width=300;

var caption=document.createElement('caption');
table.appendChild(caption);
caption.appendChild(document.createTextNode('人员表'));

var thead=document.createElement('thead');
table.appendChild(thead);

var tr=document.createElement('tr');
thead.appendChild(tr);

var th1=document.createElement('th');
var th2=document.createElement('th');
var th3=document.createElement('th');

tr.appendChild(th1);
th1.appendChild(document.createTextNode('name'));
tr.appendChild(th2);
th2.appendChild(document.createTextNode('age'));
tr.appendChild(th3);
th3.appendChild(document.createTextNode('sax'));

// 将节点数据加到body标签下
document.body.appendChild(table);