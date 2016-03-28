
$(function(){
		//alert("aaa");
		$("#code").empty();
		
		var num=parseInt(Math.random()*1000000);
		//var string = "张三";
		var arr = [ "Q张W三T" , "A李四Z" , "王BS五" , "KHSDHW" , "PJWEHCG" , "￥$@&" , "甲骨文" , "编程语言" , "中国" , "大日本" , "棒子"];
		
		var index = parseInt(Math.random() * 10 ); 
		var val = num*2 + arr[index] + num;
		
		//alert( val ); // 随机生成的乱码 ，手机扫一扫得到的内容
		
		//alert( num + string +arr[4] );
		// var num = Math.;
		
		
		var div = $("<div>").css({
			"width" : "200px",
			"height" : "200px",
			"background":"red"
			});
		
		var tencent = "http://www.qq.com/"; // 腾讯网主页
		// tencent += 1000000000 *  Math.random();
		//var app = "http://a.app.qq.com/o/simple.jsp?pkgname=com.yourdream.app.android&g_f=991653"; // app下载页面
		var str = toUtf8( tencent ); // 将随机字符串val 传递到下面的 toUtf8() 方法中
		
		// 顶部的 二维码
		var qrTopObj = {
			render: "canvas", // canvas 比 table 效率快；table兼容低版本浏览器
			width: 260, // 二维码大小
			height:260,
			text: str ,// 二维码内容
			background : "pink", // 二维码的前后景色
            foreground : "green"
		};
		$("#codeTop").qrcode(qrTopObj); // qrcode()是插件中的方法
		
		// 底部的 二维码
		var qrBottomObj = {
			render: "canvas", // canvas 比 table 效率快；table兼容低版本浏览器
			width: 260, // 二维码大小
			height:260,
			text: str ,// 二维码内容
			background : "pink", // 二维码的前后景色
            foreground : "green"
		};
		$("#codeBottom").qrcode(qrBottomObj);
});



/* qrcode插件将传入进来的内容转换成二维码 */
function toUtf8(str) {   
    var out, i, len, c;   
    out = "";   
    len = str.length;   
    for(i = 0; i < len; i++) {   
    	c = str.charCodeAt(i);   
    	if ((c >= 0x0001) && (c <= 0x007F)) {   
        	out += str.charAt(i);   
    	} else if (c > 0x07FF) {   
        	out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));   
        	out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));   
        	out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
    	} else {   
        	out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));   
        	out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));   
    	}   
    }   
    return out;   
}  