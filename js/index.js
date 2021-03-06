$(function(){

	// 头部选项事件
	$(".header .menu .menu-contain .contain-ul li").bind("mouseover",function(event){
		$(this).find("i").css("transform","rotate(180deg)");
		$(".header .submenu-container .subm-ul").addClass("dis-none");
		$(".header .submenu-container .all-exm").addClass("dis-none");
		$(".header .submenu-container ."+$(this).attr("data-class")+"").removeClass("dis-none");
		event.stopPropagation();
	}).bind("mouseleave",function(event){
		$(this).find("i").css("transform","rotate(0deg)");
		$(".header .submenu-container .subm-ul").addClass("dis-none");
		$(".header .submenu-container .all-exm").addClass("dis-none");
		event.stopPropagation();
	});
	
	// 左侧导航
	$(".content-wp .navbar-container .navbar-list .navbar-list-item").bind("mouseover",function(event){
		$(".content-wp .navbar-container .navbar-list .navbar-list-item").removeClass("navbar-list-item-hover");
		$(this).addClass("navbar-list-item-hover");
		
		$(".content-wp .navbar-container .navbar-list-item-section").css("display","none");
		$("div[datatype='"+$(this).attr("datatype")+"']").css("display","block");
		event.stopPropagation();
	}).bind("mouseleave",function(event){
		$(".content-wp .navbar-container .navbar-list .navbar-list-item").removeClass("navbar-list-item-hover");
		$(".content-wp .navbar-container .navbar-list-item-section").css("display","none");
		event.stopPropagation();
	});
})