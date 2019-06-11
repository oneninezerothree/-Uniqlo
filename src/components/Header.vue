<template>
	<div class="first-screen-top" style="padding-left: 2.2rem;">
		<div class="first-screen-search">
			<a href="javascript:;" class="btn"></a>
			<span class="btn-search">请输入商品名称</span>
		</div>
		<a class="first-screen-adress" style="width: 2.2rem;">
			广州
			<i class="arrow"></i>
		</a>
	</div>
</template>

<script></script>

<style>
.first-screen-top {
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	box-sizing: border-box;
	width: 100%;
	height: 1.24rem;
	padding: 0.17rem 0.32rem 0.17rem 2.2rem;
	background: linear-gradient(90deg, #39da85, #01b27a);
}
.first-screen-search {
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 0.9rem;
	padding: 0 0.4rem 0 1.06rem;
	border-radius: 0.45rem;
	background: #fff;
}
.first-screen-search .btn {
	position: absolute;
	top: 0.12rem;
	left: 0.18rem;
	width: 0.66rem;
	height: 0.66rem;
	background: url(//img07.yiguoimg.com/d/web/190515/00191/152133/home-search.png) no-repeat;
	background-size: 100% 100%;
}
.first-screen-search .btn-search {
	position: absolute;
	top: 0.06rem;
	left: 0.9rem;
	height: 0.8rem;
	line-height: 0.8rem;
	font-size: 0.4rem;
	color: #999;
}
.first-screen-adress {
	position: absolute;
	top: 0.32rem;
	left: 0;
	width: 2.2rem;
	height: 0.6rem;
	line-height: 0.64rem;
	text-align: center;
	font-size: 0.46rem;
	color: #fff;
}
.first-screen-adress .arrow {
    display: inline-block;
    width: .24rem;
    height: .13rem;
    margin: 0 0 0 .16rem;
    vertical-align: .09rem;
    background: url(//img05.yiguoimg.com/e/web/161222/01858/110628/arrow.png) no-repeat;
    background-size: 100% 100%;
}
</style>
