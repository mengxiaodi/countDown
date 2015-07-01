/*
	djs_time说明
	id:'包含倒计时内容的标签ID'
	timeStamp:从服务器回来的时间戳
	fn:回调函数
	colonTag:'倒计时的冒号标签，可不填'
	@author by mengxiaodi 
	email:1104252528@qq.com
*/
var djs_time={
	id:null,
	timerInterval:null,
	colonTag:null,
	newTimer:function(obj){
		this.init.prototype = djs_time;
		return new this.init(obj);
	},
	//添加0
	addZero:function(num){
		if(num.toString().length===1){
			return "0"+num;
		}else{
			return num;
		}
	},
	//刷新页面，并负值
	fresh : function(){
		var	timeStamp=this.timeStamp--;
		 var __d=parseInt(timeStamp/3600/24);
		 var __h=this.addZero(parseInt((timeStamp/3600)%24)+__d*24);
		 var __m=this.addZero(parseInt((timeStamp/60)%60));
		 var __s=this.addZero(parseInt(timeStamp%60));
		 var htmls='';
		 //__d+"天 "+__h+"小时"+__m+"分"+__s+"秒"
		 if(this.colonTag){
			this.eleWrap.innerHTML=__h+'<'+this.colonTag+'>:</'+this.colonTag+'>'+__m+'<'+this.colonTag+'>:</'+this.colonTag+'>'+__s;
		 }else{
			this.eleWrap.innerHTML=__h+':'+__m+':'+__s; 
		}
		 if(timeStamp<=0){
			 this.eleWrap.innerHTML="00:00:00";
			 clearInterval(this.timerInterval);
			 this.timerInterval=null;
			 console.log(1);
			 this.fn();
		 }
	},
	showInterval : function(){	
		var _this=this;
		this.timerInterval=window.setInterval(function(){_this.fresh();},1000);
	},
	init : function(obj){
		this.eleWrap=document.getElementById(obj.id);
		this.timeStamp=obj.timeStamp;		
		this.colonTag=obj.colonTag;
		this.showInterval();
		this.fn=obj.fn;
	}							
}

