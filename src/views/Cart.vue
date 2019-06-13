<template>
  <div class="home">
    <div class="cart_gwc">
      <div class="gwc_feader_login">
        <div class="gwc_login">
          登录可同步购物车内商品
          <router-link to="/login" class="header_login_gwc">登录</router-link>
        </div>
        <div class="gwc_baoyou">全场满100元包邮，已包邮</div>
      </div>

      <div class="gwc_goods">
        <div class="goods_jihe">
          <div class="gwc_goodses" v-for="(goods , index) in goods" :key="index">
            <div class="gwcnm1">
              <i class="idoss"></i>
            </div>
            <div class="gwcnm2">
              <img :src="goods.imgsrc" alt>
            </div>
            <div class="gwcnm3">
              <div class="gwc_name" v-text="goods.name"></div>
              <div class="gwc_delete">
                <i class="_gwc_i"></i>
              </div>
              <div class="gwc_price">
                <span class="price_goods">
                  ￥
                  <span v-text="goods.price"></span>
                </span>
              </div>
              <div class="gwc_tianjia">
                <button class="jians" @click="jian(index)">-</button>
                <input type="text" v-model="goods.value" class="vals">
                <button class="jias" @click="jia(index)">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="gwc_like">
          <div>
            <h4 class="goods_like">-. 猜你喜欢 .-</h4>
          </div>
          <div>
            <!--  -->
          </div>
        </div>
      </div>

      <div class="gwc_bymoney">
        <div class="moneys1">
          <i class="idoss"></i>全选
        </div>

        <div class="moneys2">
          <p class="text_m1">
            合计（不含运费）：
            <span style="color:red">
              ￥
              <span class="all_price" v-text="all"></span>
            </span>
          </p>
          <p class="text_m2">
            已优惠：
            <span>
              ￥
              <span>0.00</span>
            </span>
          </p>
        </div>
        <div class="moneys3">
          去结算(
          <span class="howlog" v-text="goods.length"></span>)
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
	created() {
		this.$store.state.isShowMHeader = false;
		this.$store.state.isShowMFooter = true;
		this.$store.state.isloading = false;
	},
  data() {
    return {
      goods: [
        {
          name: "原尚南美白虾仁（中）250g",
          price: "32.90",
          imgsrc:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          value: "1"
        },
        {
          name: "原尚南美白虾仁（中）250g",
          price: "32.90",
          imgsrc:
            "https://img14.yiguoimg.com/d/items/2017/171130/9288715872871294_300.jpg",
          value: "1"
        }
      ],
      all: 0
    };
  },
  name: "cart",
  components: {
    Footer
  },
  //提前计算
  mounted: function() {
    for (let i = 0; i < this.goods.length; i++) {
      this.all += ~~this.goods[i].price * this.goods[i].value;
    }
  },
  methods: {
    jia(a) {
      this.goods[a].value = this.goods[a].value * 1 + 1;
      var bb = 0;
      for (var i = 0; i < this.goods.length; i++) {
        bb += this.goods[i].price * 1 * this.goods[i].value;
        this.all = bb.toFixed(2);
      }
    },
    jian(a) {
      var v = this.goods[a].value;
      if (v > 1) {
        this.goods[a].value = this.goods[a].value * 1 - 1;
        var bb = 0;
        for (var i = 0; i < this.goods.length; i++) {
          bb += this.goods[i].price * 1 * this.goods[i].value;
          this.all = bb.toFixed(2);
        }
      } else {
      }
    }
  }
};
</script>

<style>
html {
  font-size: 30.1932px;
  height: 100%;
  width: 100%;
}

body {
  background: #f4f4f4;
  font-size: 12px;
  color: #000;
  font-family: "Avenir", "PingFang SC", "\5FAE\8F6F\96C5\9ED1";
}
</style><style lang="scss" scoped>
@import url(./../../public/css/cart.css);

.home {
  height: 100%;
}
</style>
