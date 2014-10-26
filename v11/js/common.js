var touchMethod = "tap";//tap

function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null;
}

/* localStorage 相关 */
function setstorage(name,value){
	if(window.localStorage){
		//fixed iPhone/iPad 'QUOTA_EXCEEDED_ERR' bug
		if( getstorage(name) !== undefined )
			delstorage(name);
		window.localStorage.setItem(name,value);
	}
}

function getstorage(name){
	var ret = null;
	if(window.localStorage){
		ret = window.localStorage.getItem(name);
	}
	if(ret === null || ret === undefined)
		return undefined;
	else
		return ret;
}

function delstorage(name){
	if(window.localStorage){
		if(name)
			window.localStorage.removeItem(name);
		else
			window.localStorage.clear();
	}
}

/* cookie 相关 */
function addcookie(name,value,expireHours){
	var cookieString=name+"="+escape(value)+"; path=/";
	//判断是否设置过期时间
	if(expireHours>0){
		var date=new Date();
		date.setTime(date.getTime+expireHours*3600*1000);
		cookieString=cookieString+"; expire="+date.toGMTString();
	}
	document.cookie=cookieString;
}

function getcookie(name){
	var strcookie=document.cookie;
	var arrcookie=strcookie.split("; ");
	for(var i=0;i<arrcookie.length;i++){
		var arr=arrcookie[i].split("=");
		if(arr[0]==name)return unescape(arr[1]);
	}
	return "";
}

function delcookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getcookie(name);
	if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}

function checklogin(state){
	if(state == 0){
		location.href = WapSiteUrl+'/tmpl/member/login.html';
		return false;
	}else {
		return true;
	}
}

function contains(arr, str) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === str) {
           return true;
        }
    }
    return false;
}

//判断是否是微信浏览器 2014-9-17 zhangyating
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

//屏蔽其他浏览器

function isWxBrowser(){
	if(isWeiXin() == false){
		alert('请在微信中打开链接^-^');
		//window.location.href ="http://o2o.exweixin.com/weka/wap/404.php?err_msg=请在微信中打开链接&get_href=1";
	}

}

/*用window.onload调用isWxBrowser()*/
window.onload=isWxBrowser;//不要括号