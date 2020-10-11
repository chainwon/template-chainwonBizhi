var userisOpen = false;
function userShow(){
	$('.user-information').animate({
		opacity:'1',
		height: '200px',
	},200);
	$('.user-right').animate({
		top: '18px',
		marginRight: '1px',
		height: '59px',
		width: '59px',
	},200);
}
function userHide(){
	$('.user-information').animate({
		opacity:'0',
		height: '0px',
	},200);
	$('.user-right').animate({
		top: '3px',
		marginRight: '10px',
		height: '39px',
		width: '39px',
	},200);
}

//点击非菜单区域关闭菜单
$('body').on('click',function () {
	if (userisOpen) {
		userHide();
		userisOpen = false;
		return;
	}
});


// 点击头像区打开菜单
$('.user-avatar').on('click',function (ue) {
	ue.stopPropagation();
	if (userisOpen) {
		userHide();
		userisOpen = false;
		return;
	}
	userisOpen = true;
	userShow();
});


//点击菜单区域不能关闭菜单
$('.user-information').on('click',function(ue){
	ue.stopPropagation();
	if (userisOpen)  return;
});
