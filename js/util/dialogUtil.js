var loadingWindow;
function toast(str) {
	plus.nativeUI.toast(str,{duration:"long"});
}
function showLoading(str) {
	loadingWindow = plus.nativeUI.showWaiting(str);
}

function closeLoading(){
	loadingWindow.close();
}

function showAlert(message, title, func) {
	plus.nativeUI.alert(message, func, title,'确认');
}

function showConfirm(message, title, confirmFunc, cancelFunc){
	var buttons=['确认','取消'];
	plus.nativeUI.confirm(message,function(e){
		var i = e.index;
		if(i>=0){
			if(i==0){
				//确认
				confirmFunc(); 
			} else {
				//取消
				cancelFunc();
			}
			
		} else {
			//后退键
			cancelFunc();
		}
	},title,buttons);
}
function showPrompt(message, title, placeholder, func) {
	var bts=["确认","取消"];
	plus.nativeUI.prompt(message,function(e){
		var i=e.index;
		if(i==0){
			func(e.value);
		}
	},title,placeholder,bts);
}
