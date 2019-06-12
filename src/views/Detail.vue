<template>
	<div class="detail">
		<div class="downLoad line-bottom">
			<i class="close"></i>
			<div class="downIn">
				<i class="ygLogo"></i>
				<p>
					易果生鲜
					<br />
					新人立享80元优惠券
				</p>
			</div>
			<a href="javascript:;" class="open">立即打开</a>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.state.isShowMHeader = false
		this.$store.state.isShowMFooter = true;
	}
};
</script>

<style>
.downLoad {
	position: relative;
	padding: 0 2.95rem 0 3.15rem;
	box-sizing: border-box;
	background: #fff;
}
.downLoad .close {
	position: absolute;
	left: 0;
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	background: url(//img06.yiguoimg.com/d/web/170830/00915/154221/icon_arrow.png);
	background-size: 0.53rem 0.53rem;
}
.downLoad .downIn {
	text-align: left;
	height: 1.5rem;
}
.downLoad .downIn .ygLogo {
	display: inline-block;
	position: absolute;
	left: 1.65rem;
	top: 50%;
	margin-top: -0.65rem;
	width: 1.3rem;
	height: 1.3rem;
	background: url(//img05.yiguoimg.com/d/web/170830/00911/152542/ygicon.png) no-repeat;
	background-size: 100% 100%;
}
.downLoad .downIn p {
	padding: 0.3rem 0;
	box-sizing: border-box;
	font-size: 0.42rem;
	color: #333;
	line-height: 0.47rem;
}
.downLoad .open {
	position: absolute;
	right: 0.32rem;
	top: 50%;
	margin-top: -0.45rem;
	display: inline-block;
	width: 2.6rem;
	background: #11b57c;
	border-radius: 3px;
	text-align: center;
	color: #fff;
	font-size: 0.42rem;
	padding: 0.25rem 0;
}
</style>
