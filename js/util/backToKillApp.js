//引用一定要在mui.js之后
var first = null;
mui.back = function() {
	closeApp();
};


function closeApp () {
	plus.runtime.quit();
	//处理逻辑：1秒内，连续两次按返回键，则退出应用；
	//首次按键，提示‘再按一次退出应用’
//	if (!first) {
//		first = new Date().getTime();
//		mui.toast('再按一次退出应用');
//		setTimeout(function() {
//			first = null;
//		}, 1000);
//	} else {
//		if (new Date().getTime() - first < 1000) {
//			plus.runtime.quit();
//		}
//	}
}
