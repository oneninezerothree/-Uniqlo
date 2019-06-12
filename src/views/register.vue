<template>
  <div>
    <div class="wrap">
      <form>
        <div class="input-item">
          <div class="input-item-list">
            <input
              type="tel"
              placeholder="请输入您的手机号"
              @focus="focues"
              @blur="chaxun"
              value
              maxlength="11"
              v-model="user"
              v-bind:style="color"
            >
            <span class="btn-captcha">获取验证码</span>
          </div>
          <div class="input-item-list">
            <input type="text" placeholder="请输入您的验证码">
            <i class="close" style="display: none;"></i>
          </div>
          <div class="input-item-list">
            <input type="password" placeholder="请设定您的密码" v-model="password">
            <i class="close" style="display: none;"></i>
          </div>
          <div class="input-item-list">
            <input
              type="password"
              placeholder="请再次输入您的密码"
              v-model="passworda"
              @blur="bidui"
              :style="isok"
            >
            <i class="close" style="display: none;"></i>
          </div>
        </div>
        <div class="deal tc mt10 gray">
          <label for="label">
            <input type="checkbox" id="label">我已阅读
            <a class="green">《易果服务协议》</a>
            <a class="green">《隐私条款》</a>并同意
          </label>
        </div>
        <div class="btn-login">
          <button type="button" class="btn_green w60p" @click="reg">注册</button>
        </div>
        <div class="bottomcopyright">
          <em class="icon yiguo_logo"></em>
        </div>
      </form>
      <div class="mask" style="display: none;">
        <div class="content time timing">
          <div class="text">
            <div class="popup-box">
              <div class="top">
                <p class="txt1">请输入图片上的验证码</p>
                <i class="closeBtn"></i>
              </div>
              <div class="bottom">
                <input type="text" placeholder="请输入验证码">
                <img src class="yzcode">
              </div>
            </div>
          </div>
          <div class="buttons">
            <button class="submit">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	created(){
		this.$store.state.isShowMHeader = false;
		this.$store.state.isShowMFooter = false;
	},
  data() {
    return {
      user: null,
      password: null,
      passworda: null,
      color: {
        color: "black"
      },
      isok: {
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
            this.color.color = "red";
            this.user = null;
          } else {
            this.color.color = "green";
          }
        });
      } else {
        console.log("输入用户名不为空");
      }
    },

    focues() {
      this.color.color = "black";
    },

    bidui() {
      if (this.password === this.passworda) {
        this.isok.color = "green";
      } else {
        this.isok.color = "red";
        this.passworda = "";
      }
      if (this.passworda === "") {
        this.isok.color = "black";
      } else {
      }
    },

    reg() {
      if (this.passworda && this.user) {
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
        var data = `username=${this.user}&password=${this.password}`;
        ajax("post", "http://47.107.61.16:3000/reg", data, str => {
          str = JSON.parse(str).insertedCount;
          if (str == 1) {
            console.log("注册成功");
          } else {
            console.log("注册失败");
          }
        });
      } else {
        console.log("输入用户名不为空");
      }
    }
  }
};
</script>
<style>
html {
  font-size: 33.3333px;
}
</style>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  -webkit-text-size-adjust: none;
}
form {
  display: block;
  margin-top: 0em;
}
div,
span,
a,
header,
footer {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
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
.input-item-list {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}
.input-item-list input {
  display: block;
  width: 100%;
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

.btn-captcha,
.btn-captcha:hover {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0 0.2rem;
  box-sizing: border-box;
  line-height: 30px;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  background: #008842;
}

.input-item-list {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #e7e7e7;
}

.input-item-list input {
  display: block;
  width: 100%;
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
  display: inline-block;
  vertical-align: middle;
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
.input-item-list input {
  display: block;
  width: 100%;
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

.input-item-list input {
  display: block;
  width: 100%;
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
.mt10 {
  margin-top: 10px;
}

.tc {
  text-align: center;
}

.gray {
  color: #8d8a8a;
}

div,
span,
a,
header,
footer {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.deal label {
  display: inline-block;
  padding-left: 17px;
  position: relative;
}
label {
  cursor: default;
}

.tc {
  text-align: center;
}
.gray {
  color: #8d8a8a;
}
.deal input {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 2px;
  left: 0;
  -moz-appearance: checkbox;
  -webkit-appearance: checkbox;
}
textarea,
input {
  display: block;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

input[type="checkbox" i] {
  background-color: initial;
  cursor: default;
  -webkit-appearance: checkbox;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}
.green {
  color: #008842;
}

a {
  text-decoration: none;
  outline: 0;
}
label {
  cursor: default;
}
.tc {
  text-align: center;
}

.green {
  color: #008842;
}
a {
  text-decoration: none;
  outline: 0;
}
.btn-login {
  margin: 30px 30px 0;
  text-align: center;
}

.btn-login .w60p {
  width: 60%;
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
button {
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
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

.bottomcopyright {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
}
.yiguo_logo {
  width: 104px;
  height: 34px;
  background-image: url(//img02.yiguo.com/e/web/150924/00982/140710/yiguo_logo.png);
}

em {
  font-style: italic;
}
.bottomcopyright {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
}
element.style {
  display: none;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1010;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 2s;
}

.mask .content {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 11rem;
  height: 5rem;
  margin-left: -5.5rem;
  border-radius: 0.1rem;
  background-color: #fff;
}
.buttons {
  height: 1rem;
}
.buttons button {
  display: block;
  padding: 0.2rem 1rem;
  background: #008842;
  color: #fff;
  margin: 0 auto;
  border-radius: 3px;
  border: none;
}
</style>
