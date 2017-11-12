function shake(obj,attr){
	var pos=parseInt(getStyle(obj,attr));
	var arr=[];//20 -20 18 -18 16 ...2 -2 0
	var num=0;
	for(var i=20;i>0;i-=2){
		arr.push(i,-i);
	}
		arr.push(0);
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		obj.style[attr]=pos+arr[num]+'px';
		num++;
		if(num==arr.length){
			clearInterval(obj.timer);
		}
	},50);
}