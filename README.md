# qrcode
qrcode生成二维码

## 扫一扫进入对应的页面
![image](https://github.com/xiaojiandong/qrcode/blob/master/img/view.png)

## qrcode局部代码：
```js
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
```
