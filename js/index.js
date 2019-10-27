$(function(){
	// 为导航添加事件
	$(".left_nav").on("click","li",function(){
		//点击时li底色变化
		var url = $(this).attr("url");
		$(".left_nav li").removeClass("current");
		$(this).addClass("current");
		$("#wrapper").load(url);

		//面包屑
		var str = $(this).text();
		$(".mb_nav").empty();
		$(".mb_nav").append($(`<span>主页/`+str+`</span>`));
		
	})

	// 模拟点击第一个li
	$(".left_nav li:first-child").trigger("click");

	
})   


