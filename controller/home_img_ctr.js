myapp.controller('home_img_ctr',['$scope','$http','$interval','$timeout',function($scope,$http,$interval,$timeout){
	$http({
		url:"json/img.json",
		type:"get" 
	}).success(function(res){
		$scope.imgList = res.imgs;
        $timeout(init);
	}); 

    function init(){
        var obj = {
            columns:4
        }
        water(obj);
    }

    //除了第一列,之后的节点插入前面已存在列数的最低列
    function water(obj){
        var imgList = $('.home_img .imgBox');
        var imgBox = $('.home_img');
        var img_min = [];
        var columns = obj.columns;
        var i = 0;
        var j = 0;
        var left = 0;
        var imgHeight = 0;
        //每个图片盒子的宽度
        var width = 1/columns*95;
        //图片盒子加总宽度为20%的left距离
        var imgLeft = 1/(columns-1)*5+width;
        //每列图片距离左侧距离的数组
        var imgLeftArr = [];
        for(var p = 0 ;p<columns;p++){
            imgLeftArr.push(p*imgLeft+'%');
        }
        imgList.css({'width':width+'%'});.
        for(; i< imgList.length;i+=4){
            if(i==0){
                for(;j<columns;j++){
                    img_min.push((imgList.eq(j).outerHeight(true)));
                    imgBox.append(imgList.eq(j));
                    imgList.eq(j).animate({'left':imgLeftArr[j]},1000);
                }
                continue;
            }

            for(var k=0; k<columns;k++){
                var cloneArr = img_min.slice();
                sortArr =  cloneArr.sort(function(a,b){
                    return a>b;
                });
                var index = img_min.indexOf(sortArr[0]);
                imgBox.append(imgList.eq(i+k));
                imgList.eq(i+k).animate({'top': img_min[index]+'px','left':imgLeftArr[index]},1000);
                imgHeight = (imgList.eq(i+k).outerHeight(true));
                img_min[index]+=imgHeight;
            }
        }
        for (var i = 0; i < columns; i++) {
            if(isNaN(img_min[i])){
                img_min.splice(i,1);
                i--;
                columns--;
            }
        }
        var max = img_min.sort(function(a,b){
                    return a<b;
                })[0];
        $('.home_img').height(max+'px');
        console.log(img_min)
    }
}])
