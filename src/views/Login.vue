<template>
  <div>
    <div class="wrap">
      <form>
        <div class="input-item">
          <div class="input-item-list username">
            <span class="icon-username"></span>
            <input
              type="text"
              placeholder="请输入您的用户名"
              v-model="user"
              @blur="chaxun"
              @focus="focues"
              v-bind:style="color"
            >
            <i class="close" style="display: block;"></i>
          </div>
          <div class="input-item-list password">
            <span class="icon-password"></span>
            <input type="password" placeholder="请输入您的密码" v-model="password">
            <i class="close" style="display: none;"></i>
          </div>
          <div class="input-item-list password">
            <input type="text" placeholder="请输入验证码" style="width: 65%; border: none; float: left;">
            <img
              src="data:image/gif;base64,R0lGODlhMgAWAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAAAyABYAAAj/AIkpE0hwoMGCCA8qTMhwoTJl+yJKnPhHYqYbxD5l3KhR4yJlmSBGDDRxn66SEYllkkhP4saByQRqMriv2D6HAleWjCGxzT6dUR5CSKaJI8qIyVASi6hxIkFQMpVpcul06dJ9SwEdXeppXziJn1JGzCMRzr5hyjRAREsMrURGAodNhLhOmjVUeIlddaqMHSpVoPaVQ+WHMGFAS9f5aTS1pFSUmbxJyzVCmjRUhPZN2lcD674SulDROEtrmOHClPYlI+Rns1KREofou/uOyT6/qer5EEtMnytUxE6Z9mPTabLCxR3vlSgPFbWJrqT1uqpMxD5hqFK1FeYnHTEmBz/x//Lzp7FYrMoAnZlY9xYxQwKS0UJ1a1+rpFgx/Y22bx0qQymFFdEui5Uk4EASKZMBMb+Fk8xAX9AizS0IEgOVf7hENN9pqDRCWoFOpQTRC2cpgwwq0vhi4VnNAIcVUckM81svoGDnhzOnZXgcKslJNMUwoKxETB7P7DOPKqlEhBZ2qKgI1UCfZLfMPvmgUseUE4EyDyph8JdhSk2g5xIxu0jz1T5T5UDLO8/4B0tEfqkyUC0BuEdHZ5dAVAuIEQ0A4FII7iNEROSgEg5U+5BzmS/9/aUhfRbOZ8lcaLXihyMSzSNSUgJNpM9loKKIynRG4pUJXqm4sY8+qJRCITExBZLGamF++EGHH1ks4wVWTbEQ0TyWgVqGKugNJAweqEYj0Jap8LePEqAMQ0yVtVZLHpY0SYToURFJQcxMpYToEmwWdjrRGymBYt5y+1yATElyjUmUZ/tEexRbEaE77nncHhXYPrsSFWi/3MaIEgYlzUJwSQKze5QU42oCY7mwWohWSOUqxNZAFWsE0kDRSsVxTgMFBAA7"
              class="yzcode"
            >
          </div>
        </div>
        <div class="login-option">
          <span class="retrieve_password">
            <a href="javascript:;">忘记密码?</a>
          </span>
        </div>
        <div class="btn-login clearfix">
          <button type="button" class="btn_green myleft" @click="login">登录</button>
          <button type="button" class="btn_white myright">
            <router-link to="/register">立即注册</router-link>
          </button>
        </div>
      </form>
      <div class="bottomcopyright">
        <em class="icon yiguo_logo"></em>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	created() {
		this.$store.state.isShowMHeader = false;
		this.$store.state.isShowMFooter = false;
	},
  data() {
    return {
      user: null,
      password: null,
      color: {
        color: "black"
      }
    };
  },
  methods: {
    chaxun() {
      var ajax = (type, url, data, fn) => {
        //1.创建对象
        var xhr = new XMLHttpRequest();

        //2.参数设置  open('')
        if (type.toLowerCase() == "get") {
          if (data) {
            //如果是get方式并且有数据
            url = url + "?" + data;
          }
          xhr.open(type, url, true);
          xhr.send(null);
        } else {
          //post方式
          xhr.open(type, url, true);
          //请求头设置
          xhr.setRequestHeader(
            "content-type",
            "application/x-www-form-urlencoded"
          );
          xhr.send(data);
        }

        //接收数据
        xhr.onreadystatechange = () => {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              //成功接收数据
              //				var str = xhr.responseText;
              if (fn) {
                //把数据传到外部使用
                fn(xhr.responseText);
              }
            } else {
              //如果出错给个提示
              alert("出错了，状态码是：" + xhr.status);
            }
          }
        };
      };

      if (this.user) {
        var data = `username=${this.user}`;
        ajax("post", "http://47.107.61.16:3000/chaxun", data, str => {
          if (str == "yes") {
            this.color.color = "green";
          } else {
            this.color.color = "red";
            this.user = null;
          }
        });
      } else {
        console.log("输入用户名不为空");
      }
    },

    focues() {
      this.color.color = "black";
    },

    login() {
      function ajax(type, url, data, fn) {
        //1.创建对象
        var xhr = new XMLHttpRequest();

        //2.参数设置  open('')
        if (type.toLowerCase() == "get") {
          if (data) {
            //如果是get方式并且有数据
            url = url + "?" + data;
          }
          xhr.open(type, url, true);
          xhr.send(null);
        } else {
          //post方式
          xhr.open(type, url, true);
          //请求头设置
          xhr.setRequestHeader(
            "content-type",
            "application/x-www-form-urlencoded"
          );
          xhr.send(data);
        }

        //接收数据
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              //成功接收数据
              //				var str = xhr.responseText;
              if (fn) {
                //把数据传到外部使用
                fn(xhr.responseText);
              }
            } else {
              //如果出错给个提示
              alert("出错了，状态码是：" + xhr.status);
            }
          }
        };
      }
      if (this.user && this.password) {
        var data = `username=${this.user}&password=${this.password}`;

        ajax("post", "http://47.107.61.16:3000/login", data, function(str) {
          if (str == "yes") {
          } else {
          }
        });
      } else {
        console.log("用户名和密码输入不为空！");
      }
    }
  }
};
</script>
<style>
html {
  font-size: 33.3333px;
}

* {
  padding: 0;
  margin: 0;
  -webkit-text-size-adjust: none;
}
div,
span,
a,
header,
footer {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
<style lang="scss" scoped>
.input-item {
  border: 1px solid #d9dfd5;
  border-width: 1px 0;
  margin-top: 30px;
  padding: 0 0 0 20px;
  background: #fff;
}
div {
  display: block;
}
.login-option {
  margin: 15px 30px 0 20px;
}

.input-item-list {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}

.icon-username {
  background: url(//img07.yiguoimg.com/e/web/160104/02423/150313/icon_username.png)
    no-repeat;
  background-size: 100% 100%;
}

.icon-password,
.icon-username {
  display: block;
  position: absolute;
  top: 20px;
  left: 0;
  width: 18px;
  height: 20px;
}

.password input,
.username input {
  padding: 0 0 0 30px;
}

.input-item-list input {
  display: block;
  height: 30px;
  font-size: 16px;
  border: none;
  background: none;
}
textarea,
input {
  display: block;
  border: none;
  outline: none;
  -webkit-appearance: none;
}
input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}

element.style {
  display: none;
}

.close {
  display: none;
  position: absolute;
  right: 0.28rem;
  top: 50%;
  margin-top: -0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url(//img05.yiguoimg.com/d/web/170830/00913/153914//icon-close.png);
  background-size: 100% 100%;
}
i {
  font-style: italic;
}

.input-item-list {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}

.icon-password {
  background: url(//img07.yiguoimg.com/e/web/160104/02423/150313/icon_password.png)
    no-repeat;
  background-size: 100% 100%;
}

.icon-password,
.icon-username {
  display: block;
  position: absolute;
  top: 20px;
  left: 0;
  width: 18px;
  height: 20px;
}

.password input,
.username input {
  padding: 0 0 0 30px;
}

.input-item-list input {
  display: block;
  height: 30px;
  font-size: 16px;
  border: none;
  background: none;
}

textarea,
input {
  display: block;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

input[type="password" i] {
  -webkit-text-security: disc !important;
}

.close {
  display: none;
  position: absolute;
  right: 0.28rem;
  top: 50%;
  margin-top: -0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url(//img05.yiguoimg.com/d/web/170830/00913/153914//icon-close.png);
  background-size: 100% 100%;
}

i {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}

i {
  font-style: italic;
}

.input-item-list:last-child {
  border: none;
}

.input-item-list {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}

element.style {
  width: 65%;
  border: none;
  float: left;
}

.password input,
.username input {
  padding: 0 0 0 30px;
}
.input-item-list input {
  display: block;
  height: 30px;
  font-size: 16px;
  border: none;
  background: none;
}

textarea,
input {
  display: block;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

.yzcode {
  height: 30px;
  margin-left: 5px;
}

img {
  border: 0;
  vertical-align: middle;
}

.login-option {
  margin: 15px 30px 0 20px;
}
.retrieve_password {
  float: left;
  width: 45%;
  text-align: left;
}

.login-option a {
  color: #008842;
  font-size: 15px;
}

a {
  text-decoration: none;
  outline: 0;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.retrieve_password {
  float: left;
  width: 45%;
  text-align: left;
}

.login-option:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.btn-login {
  margin: 30px 30px 0;
  text-align: center;
}

.btn-login button {
  display: inline-block;
  width: 45%;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.btn_green {
  color: #fff;
  background: #008842;
}

.myleft {
  float: left;
}

button {
  -webkit-appearance: button;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;

  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-image: initial;
}

.btn-login {
  margin: 30px 30px 0;
  text-align: center;
}

.btn-login .btn_white {
  border: 1px solid #008842;
  color: #008842;
  background: #fff;
}

.btn-login button {
  display: inline-block;
  width: 45%;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.myright {
  float: right;
}

.bottomcopyright {
  width: 100%;
  text-align: center;
  bottom: 15px;
  left: 0;
  padding: 10px;
  position: absolute;
  box-sizing: border-box;
}
.yiguo_logo {
  width: 104px;
  height: 34px;
  background-image: url(//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png);
  background-size: 100% 100%;
  margin: 0 auto;
  display: block;
}
em {
  font-style: italic;
}

.bottomcopyright {
  width: 100%;
  text-align: center;
  bottom: 15px;
  left: 0;
  padding: 10px;
  position: absolute;
  box-sizing: border-box;
}
</style>
