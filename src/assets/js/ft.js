 
	var contextPath = window.location.protocol+'//'+window.location.host;
	var canvas , c_w , c_h ;
	var family ;
	var context;

	var parents = [];
	var children = [];
	var baseImgSize = {
		w : 80,
		h : 80
	}
	var irect = {w : 80 , h :30}

	var familyCanvasDiv = document.getElementById('familyCanvasDiv');

	var data = {
		my : {
			sex : 1,
			age : 35,
			name : '张三'
		},
		p :[{
			sex : 1,
			age : 70,
			name : '张父'
		},{
			sex : 2,
			age : 70,
			name : '张母'
		}],
		c : [{
			sex : 1 ,
			age : 12,
			name : '张小小'
		}],
		w : [{
			sex : 2,
			age : 35,
			name : '张妻'
		}]
	}

	var generationHeight = 150;

	window.onresize = function(){
		init()
	}

	function init(){
		var e;
		familyCanvasDiv = document.getElementById('familyCanvasDiv');
		canvas = document.getElementById("icanvas");
		canvas.width = familyCanvasDiv.offsetWidth < 700 ? 700 : familyCanvasDiv.offsetWidth;
		canvas.height = familyCanvasDiv.offsetHeight;
		context = canvas.getContext("2d");
		c_w = canvas.width;
		c_h = canvas.height;
		e = centerPoint()

		calcPosition(e.centerX,e.centerY,data.p,1)
		calcPosition(e.centerX,e.centerY,data.c,-1)
		calcPosition(e.centerX,e.centerY,data.w,0)

		selfs(e.centerX,e.centerY,data.my);


		getImg(data.p)
		getImg(data.c)
		getImg(data.w)


		doDrawPerson(data.p)
		doDrawPerson(data.c)
		doDrawPerson(data.w)
		drawPerson(e.centerX,e.centerY,data.my.url,'',baseImgSize.w,baseImgSize.h)

		calcLineEndpoint(data.p,1)
		calcLineEndpoint(data.c,-1)
		calcLineEndpoint(data.w,0)

		drawLine(data.p,1)
		drawLine(data.c,-1)
		drawLine(data.w,0)
		drawLineSelf(data.my,data.w[0]);

		calcRect(data.p)
		calcRect(data.c)
		calcRect(data.w)
		calcRect(data.my)

		console.log(data)
	}

	 

	function selfs(centerX,centerY,obj){
		obj.x = centerX;
		obj.y = centerY;
		obj.url = getImageurl(obj.sex, obj.age);
		calcLineEndpointSelf(obj);
	}

	function centerPoint(){
		var centerX, centerY;
		if(1){
			centerX = c_w/2  - baseImgSize.w/2;
			centerY = c_h/2 - baseImgSize.h/2;
		}
		return {centerX : centerX, centerY : centerY}
	}

	function getImg(arr){
		for(var z in arr){
			var str = getImageurl(arr[z].sex, arr[z].age)
			arr[z].url = str;
		}
	}

	function getImageurl(sex, age) {
		var path = "http://localhost:8088/js/customerInfo/image/";
		if (sex == 2) {
			if (age < 20) {
				return path + "girl.jpg";
			} else if (age > 60) {
				return path + "oldwomen.jpg";
			} else {
				return path + "she.jpg";
			}
		} else {
			if (age < 20) {
				return path + "boy.jpg";
			} else if (age > 60) {
				return path + "oldman.jpg";
			} else {
				return path + "he.jpg";
			}
		}
	}

	function doDrawPerson(arr){
		for(var k in arr){
			drawPerson(arr[k].x,arr[k].y,arr[k].url,'',baseImgSize.w,baseImgSize.h)
		}
	}

	function drawPerson(x,y,imgUrl,text,w,h){
		var img = new Image();
		img.src = imgUrl;
		try{
			context.drawImage(img, x, y, w, h);

		}catch(e){

		}
		try{
			img.onload = function () { //图片下载完毕时异步调用callback函数。
				try{
					context.drawImage(this, x, y,w,h);
				}catch(e){

				}
			};
		}catch(e){
			 
		}
	}



	function calcPosition(centerX,centerY,arr,rankings){

		var wifeDistance = 300;
		var share = c_w/(arr.length+1);
		 
		if(rankings > 0){
			for(var i in arr){
				 
				arr[i].y = centerY - generationHeight;
				arr[i].x = (parseInt(i)+1)*share - baseImgSize.w/2;
			}
		}else if(rankings < 0){
			if (arr.length == 1){
				for(var i in arr){
					arr[i].y = centerY + generationHeight;
					arr[i].x = centerX + wifeDistance/2;
				}
			}else{

				for(var i in arr){
					arr[i].y = centerY + generationHeight;
					arr[i].x = (parseInt(i)+1)*share;
				}
			}
			
		}else {
			for(var i in arr){
				arr[i].y = centerY;
				arr[i].x = centerX + wifeDistance;
			}
		}
		
	}

	function drawLine(arr,rankings){
		if(rankings > 0){
			for(var g in arr){
				var t_x = arr[g].d_lp.x,
				t_y = arr[g].d_lp.y,
				t_y_end = t_y+(generationHeight-baseImgSize.h)/2;
				lineStats(context,t_x,t_y,t_x,t_y_end)
				arr[g].d_lpend = {
					x : t_x,
					y : t_y_end
				}
			}
			var starPoint = {
				x : arr[0].d_lpend.x,
				y : arr[0].d_lpend.y,
			}
			var endPoint = {
				x : arr[arr.length-1].d_lpend.x,
				y : arr[arr.length-1].d_lpend.y,
			}
			lineStats(context,starPoint.x,starPoint.y,endPoint.x,endPoint.y);
		}else if(rankings < 0){
			if(arr.length == 1 ){
				for(var c in arr){
					var u_x = arr[c].u_lp.x,
					u_y = arr[c].u_lp.y,
					u_y_end = u_y - (generationHeight-baseImgSize.h)/2;

					lineStats(context,u_x,u_y,u_x,u_y_end);
				}
			}else{
				for(var c in arr){
					var u_x = arr[c].u_lp.x,
					u_y = arr[c].u_lp.y,
					u_y_end = u_y - (generationHeight-baseImgSize.h)/2;

					lineStats(context,u_x,u_y,u_x,u_y_end);
					arr[c].u_lpend = {
						x : u_x,
						y : u_y_end
					}
				}
				
				var starPoint = {
					x : arr[0].u_lpend.x,
					y : arr[0].u_lpend.y,
				}
				var endPoint = {
					x : arr[arr.length-1].u_lpend.x,
					y : arr[arr.length-1].u_lpend.y,
				}
				lineStats(context,starPoint.x,starPoint.y,endPoint.x,endPoint.y);
			}

			
		}else {
			for(var n in arr){
				var d_x = arr[n].d_lp.x,
				d_y = arr[n].d_lp.y,
				d_y_end = d_y+(generationHeight-baseImgSize.h)/2;
				lineStats(context,d_x,d_y,d_x,d_y_end);
				arr[n].d_lpend = {
					x : d_x,
					y : d_y_end
				}
			}
		}
		
	}

	function drawLineSelf(obj,wife) {
	 	var d_x = obj.d_lp.x,
			d_y = obj.d_lp.y,
			d_y_end = d_y+(generationHeight-baseImgSize.h)/2;
			lineStats(context,d_x,d_y,d_x,d_y_end);

		var u_x = obj.u_lp.x,
			u_y = obj.u_lp.y,
			u_y_end = u_y - (generationHeight)/2 + baseImgSize.h/2;

			lineStats(context,u_x,u_y,u_x,u_y_end);
		obj.d_lpend = {
			x : d_x,
			y : d_y_end
		}
		if (wife) {
			lineStats(context,obj.d_lpend.x,obj.d_lpend.y,wife.d_lpend.x,wife.d_lpend.y);
		}
	}

	function lineStats(context,s_x,s_y,e_x,e_y){
		context.moveTo(s_x,s_y);
		context.lineTo(e_x,e_y);
		context.lineWidth = 1;
		context.strokeStyle = "#f4943e";  
		context.stroke();
	}


	function calcLineEndpoint(arr,rankings){
		if(rankings > 0){
			for(var j in arr){
				arr[j].d_lp = {
					x : arr[j].x+baseImgSize.w/2,
					y : arr[j].y+baseImgSize.h
				}
			}
		}else if(rankings < 0){
			for(var q in arr){
				arr[q].u_lp = {
					x : arr[q].x+baseImgSize.w/2,
					y : arr[q].y
				}
			}
		}else {
			for(var r in arr){
				arr[r].u_lp = {
					x : arr[r].x+baseImgSize.w/2,
					y : arr[r].y
				};
				arr[r].d_lp = {
					x : arr[r].x+baseImgSize.w/2,
					y : arr[r].y+baseImgSize.h
				}
			}
		}
	}

	function calcLineEndpointSelf(obj){
		obj.u_lp = {
			x : obj.x+baseImgSize.w/2,
			y : obj.y
		};
		obj.d_lp = {
			x : obj.x+baseImgSize.w/2,
			y : obj.y+baseImgSize.h
		}
	}

	function drawRect(context,x,y,w,h){
		context.beginPath();
		context.fillStyle="#faba00";
		context.fillRect(x,y,w,h);
		context.stroke();
	}

	function calcRect(arr){
		
		if(Array.isArray(arr)){
			for(var l in arr){
				arr[l].rect = {
					x : arr[l].x,
					y : arr[l].y + baseImgSize.h,
					w : irect.w,
					h : irect.h,
					t_c_x : arr[l].x + irect.w/2,
					t_c_y : arr[l].y + baseImgSize.h + irect.h/2+6,
				}
				var dr = arr[l].rect;
				drawRect(context,dr.x,dr.y,dr.w,dr.h);
				drawText(context,arr[l]['name'],dr.t_c_x,dr.t_c_y);
			}
		}else{
			arr.rect = {
				x : arr.x,
				y : arr.y + baseImgSize.h,
				w : irect.w,
				h : irect.h,
				t_c_x : arr.x + irect.w/2,
				t_c_y : arr.y + baseImgSize.h + irect.h/2+6,
			}
			var dr = arr.rect;
			drawRect(context,dr.x,dr.y,dr.w,dr.h);
			drawText(context,arr['name'],dr.t_c_x,dr.t_c_y);
		}
		
	}


	function drawText(context,str,x,y){
		context.fillStyle = "#FFF";
		context.font = "16px '微软雅黑'";
		context.textAlign = "center";
		context.fillText(str,x,y);
	}

 	export{
 		init
 	}