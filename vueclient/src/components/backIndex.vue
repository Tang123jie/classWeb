<template>
	<div class="backlogin">
		<div class="header">
			<div class="search-box" :class="{search_box_fouce:search_box_fouce}">
				<i class=" fa fa-search" aria-hidden="true"></i>
				<input  @focus="focusFn" @blur="blurFn" type="text" name="" id="" value="" placeholder="搜索..." />
			</div>

			<div class="headler">
				<div class="more" @click="toggleSlide">
					<i class="fa fa-bars" aria-hidden="true"></i>
					<ul :class="{showul:showExit}">
						<li>
							<a href="javascript:;" @click="logout">
								<i class="fa fa-sign-out" aria-hidden="true"></i>退出
							</a>
						</li>
						<li>
							<a href="javascript:;">修改密码</a>
							</li>
						<li>
							<a href="javascript:;">意见反馈</a>
							</li>
					</ul>
				</div>
				<img src="../assets/images/logo.jpg" alt="" />
			</div>
		</div>


		<!--侧面导航 -->
		<div class="sidenav_box">
        <img src="../assets/images/logo1.jpg" class="logo" alt="" />
		<ul class="sidenav">
        <li class="now">
		 <router-link to="/backIndex/indexContent">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span>网站首页</span>
     </router-link>
		</li>
        <li>
		 <router-link to="/backIndex/adminList">
                          <i class="fa fa-user-o" aria-hidden="true"></i>
                        <span>后台人员</span>
    </router-link>
		</li>
		<li>
			  <router-link to="/backIndex/studentList">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                        <span>学员管理</span>
        </router-link>
		</li>
		<li>
			  <router-link to="/backIndex/courseList">
                         <i class="fa fa-book" aria-hidden="true"></i>
                        <span>课程管理</span>
        </router-link>
		</li>

		</ul>
		</div>
  <!--中间内容部分-->
    <div class="content">
     <ul class="breadcrumb">
       <li>
         <a href="#/backIndex/">首页</a>
       </li>
       <li>{{ pageTitle }}</li>
     </ul>
     <router-view></router-view>
    </div>



	</div>
</template>

<script>
var pageTitleObj = {
  indexContent:"网站首页",
  adminList:"后台人员",
  studentList:"学员管理",
  courseList:"课程管理",
  courseEdit:"课程编辑"
}

export default {
  name: "backlogin",
  data() {
    return {
      search_box_fouce: false,
      showExit: false,
      pageTitle: pageTitleObj[ this.$route.path.substr( this.$route.path.lastIndexOf("/")+1 ) ] || "网站首页"
    }
  },
  methods: {
    focusFn() {
      //搜索框获取焦点，添加class
      this.search_box_fouce = true;
    },
    blurFn() {
      //搜索框失去焦点，去掉class
      this.search_box_fouce = false;
    },
    toggleSlide() {
      //显示和隐藏头像旁边的退出下拉框
      this.showExit = !this.showExit;
    },
    logout() {}
  },
   watch:{ //监控路径变化  当路径发送变化的时候，改变面包屑导航的显示
            $route: {
                handler: function (val, oldVal) {
                    var path = val.path;
                    this.pageTitle =  pageTitleObj[ path.substr( path.lastIndexOf("/")+1 ) ] || "网站首页";
                }
            }
   }
};
</script>

<style>
ul,
li {
  list-style: none;
}
.search-box {
  color: #979fa8;
  float: left;
  padding-top: 20px;
}
.header {
  height: 60px;
  background: #fff;
  margin-left: 80px;
  min-width: 740px;
}
.search-box i {
  margin: 0 12px 0 70px;
  transition: all 0.5s ease;
}
.search-box input {
  border: none;
  outline: none;
}
.search_box_fouce i {
  margin-left: 55px;
  color: #2c3d50;
}
.headler > * {
  float: right;
  margin-right: 20px;
  cursor: pointer;
}
.headler .more {
  font-size: 20px;
  color: #566a80;
  margin: 15px 30px 0 0;
  position: relative;
}
.headler .more:hover {
  color: #2c3d50;
}
.headler .more ul {
  font-size: 14px;
  position: absolute;
  right: 0;
  top: 55px;
  width: 120px;
  box-shadow: 0 1px 5px rgba(13, 62, 73, 0.2);
  transition: all 0.3s ease-out;
  height: 0;
  opacity: 0;
  overflow: hidden;
  text-align: center;
}
.headler .more .showul {
  height: auto;
  top: 45px;
  opacity: 1;
  border-top: 1px solid #979fa8;
}
.headler .more a {
  display: block;
  padding: 8px 10px;
  background: #fff;
  color: #566a80;
  text-decoration: none;
}
.headler .more a:hover {
  background: #f8f9fb;
}
.headler > img {
  width: 50px;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 30px;
}
.sidenav_box {
  width: 80px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  box-shadow: 0 1px 5px rgba(13, 62, 73, 0.2);
}
.sidenav_box .logo {
  width: 50px;
  margin: 20px 0 0 17px;
}
.sidenav {
  margin-top: 30px;
}
.sidenav li {
  margin-bottom: 20px;
}
.sidenav a{
  position: relative;
  width: 56px;
  height: 56px;
  margin: 0 auto;
  display: block;
  opacity: 0.6;
  text-decoration: none;
  transition: all 0.5s ease;
   cursor: pointer;
}
.sidenav a i{
  font-size: 20px;
  line-height: 56px;
  text-align: center;
  display: block;
  color: #566a80;
}
.sidenav a:hover {
  background: #f0f2f5;
  opacity: 1;
}
.sidenav a span {
  position: absolute;
  left: 55px;
  top: 15px;
  width: 0;
  padding: 5px 0;
  font-size: 12px;
  opacity: 0;
  border-radius: 3px;
  background: #000;
}
.sidenav a:hover span {
  opacity: 1;
  left: 65px;
  width: 60px;
  padding: 5px 20px;
  transition: none 0.5s ease-out;
  transition-property: opacity, left;
  color: #fff;
}
.sidenav a span::after{
  content:"";
  position: absolute;
  top:8px;
  left: -10px;
  border: 5px solid transparent;
  border-right-color: #000;
}
.content{
  min-height: 300px;
  min-width: 700px;
  margin: 20px 30px 0 100px;
}
.breadcrumb{
  border-radius: 4px;
  background: #fff;
  padding: 10px 15px;
}
.breadcrumb>li{
  display: inline-block;
  color: #777777;
}
.breadcrumb>li>a{
  color: #32475f;
  text-decoration: none;
}
.main{
  border-radius: 4px;
  color: #fff;
  margin-top: 10px;
}
</style>
