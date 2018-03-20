<template>
	<div class="backlogin">
		<div class="header">
			<div class="search-box">
				<i class=" fa fa-search" aria-hidden="true"></i>
				<input  @focus="pocusFn" @blur="blurFn" type="text" placeholder="搜索..." />
			</div>
			
			<div class="headler">
				<div class="more">
					<i class="fa fa-bars" aria-hidden="true"></i>
					<ul>
						<li>
							<a href="javascript:;">
								<i class="fa fa-sign-out"></i>退出
							</a>
							
						</li>
						<li>修改密码</li>
						<li>意见反馈</li>
					</ul>
				</div>
				<img src="../assets/images/logo.jpg" />
			</div>	
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.search-box{
		color: #979fa8;
		float: left;
		padding-top: 20px;
	}
	.header{
		height: 60px;
		 background: #fff;
		 margin-left: 80px;
		 min-width: 740px;
	}
	.search-box i{
		margin: 0 12px 0 70px;
		transition: all 0.5s ease;
	}
	.search-box input{
		border: none;
	    outline: none;
	}
	.headler{
		float: right;
		margin-right: 20px;
		cursor: pointer;
	}
	.headler .more{
		font-size: 20px;
		color: #566a80;
		margin: 15px 30px 0 0;
		position: relative;
	}
	.headler .more:hover{
		color:#2c3d50;
	}
	.headler .more ul{
		font-size: 14px;
		position: absolute;
		top: 55px;
		width: 120px;
		right: 0;
		height: 0;
		overflow: hidden;
	}
</style>