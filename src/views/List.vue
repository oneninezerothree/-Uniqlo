<template>
  <div class="productList">
    <div class="tabNav line-bottom">
      <div class="tabMain">
        <div
          v-for="(tab,index) in tabName"
          :key="index"
          :class="{'active':index==activeIdx}"
          @click="show(index,num),changeStaer();sortList(index,getdata.data.data,num)"
        >
          {{tab.title}}
          <i v-if="tab.flag" :class=" state? 'drop' :'litre' "></i>
        </div>
      </div>
    </div>
    <div class="pruductShow" v-if="getdata.data">
      <div
        class="productContent line-bottom"
        v-for="(item,index) in getdata.data.data"
        :key="index"
        v-show ="getRenderList(item.zhonglei,item.fenlei)"
        @click="goTo(item.CommodityId)"
      >
        <div class="img">
          <!---->
          <img :src="item.SmallPic">
        </div>
        <div class="inforPro">
          <p class="title">{{item.CommodityName}}</p>
          <p class="txt">{{item.SubTitle}}</p>
          <i class="label" v-if="item.PromotionTag">{{item.PromotionTag}}</i>
          <!---->
          <p class="price">
            <span class="priceRed">¥{{item.SellPrice}}</span>
            <span class="standard" style="text-decoration: line-through;" v-if="item.SellPrice<item.OriginalPrice">¥{{item.OriginalPrice}}</span>
            <span class="standard">{{item.Spec}}</span>
            <span class="addCart"></span>
            <!---->
          </p>
        </div>
      </div>
      <div class="noMore" style>
        <p>没有更多了</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import request from "../libs/request";

export default {
  created() {
		this.$store.state.isShowMHeader = false;
		this.$store.state.isShowMFooter = false;
    this.keyword = this.getKeyword();
    this.$store.state.isloading = true;
    this.getShopList();
  },
  data() {
    return {
      idx: 0,
      activeIdx: 0,
      state: true,
      num:1,//升序1，降序2
      tabName: [
        { title: "销量", flag: false },
        { title: "新品", flag: false },
        { title: "价格", flag: true }
      ],
      renderList: [],
      keyword: "",
      keyword2:"",
    };
  },
  methods: {
    show(index,numbers) {
      this.idx = index;
      this.activeIdx = index;
      if(numbers == 1){
        this.num = 2
      } else if (numbers == 2) {
        this.num =1
      }
    },
    getKeyword() {
      return this.$route.query.keyword;
    },
    getRenderList(names,fenleis) {
      let a =  names.indexOf(this.keyword);
      // console.log('query:----',this.$route.query.keyword2)
      // console.log('fenleis:----',fenleis);
      if (
        this.keyword == "全部" &&
        this.$route.query.keyword2 == fenleis
      ) {
        return true;
      } else if (
        a > -1  &&
        this.$route.query.keyword2 == fenleis
      ) {
        return true;
      } else {
        return false;
      }
    },
    changeStaer() {
      if (this.activeIdx === 2) {
        this.state = !this.state;
      }
    },
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf6683dd44e0c5e99486044/example/yiguolist#!method=get"
      });
      this.$store.state.shopList = data;
			this.$store.state.isloading = false;
    },
    goTo(data) {
      this.$router.push({ name: 'detail', params: { goodsid: data }});
    },
    sortList(idx,data,num){
      //排序方法
      //通过idx判断用价格、销量、code来排序
      if(idx == 0){
        //用销量排序
        data.sort(function(a,b){
          return a.sale - b.sale
        })
      }
      else if (idx == 1){
        //用商品code排序
        data.sort(function(a,b){
          return a.CommodityCode - b.CommodityCode
        })
      }
      else if(idx == 2 && num==1){
        //用商品售价升序
        data.sort(function(a,b){
          return a.SellPrice - b.SellPrice
        })
      }
      else if(idx == 2 && num==2){
        //用商品售价降序
        data.sort(function(a,b){
          return b.SellPrice - a.SellPrice
        })
      }
    }
  },
  computed: {
    ...mapGetters(["getdata"])
  }
};
</script>
<style lang="scss" scoped>
.tabNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.36rem;
  z-index: 103;
  background: #fff;
}
.tabMain {
  display: flex;
  div.active {
    border-bottom: 2px solid #11b57c;
    box-sizing: border-box;
    color: #11b57c;
  }
  div {
    flex: 1;
    font-size: 0.4rem;
    padding: 0.36rem 0;
    text-align: center;
    color: #808080;
    overflow: hidden;
    box-sizing: border-box;
    i {
      display: inline-block;
      width: 0.18rem;
      height: 0.26rem;
      background: url(//img06.yiguoimg.com/d/web/170830/00911/152542/priceone.png)
        no-repeat;
      background-size: 100% 100%;
      vertical-align: middle;
    }
    i.drop {
      background: url(//img07.yiguoimg.com/d/web/180508/01313/150959/pricethree.png)
        no-repeat;
      background-size: 100% 100%;
    }
    i.litre {
      background: url(//img05.yiguoimg.com/d/web/180508/01313/150959/pricetwo.png)
        no-repeat;
      background-size: 100% 100%;
    }
  }
}
.line-bottom:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #ddd;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.productList {
  text-align: left;
  .pruductShow {
    padding-top: 1.36rem;
  }
  .productContent {
    z-index: 10;
    position: relative;
    padding: 0.5rem 0.32rem;
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    .img {
      position: relative;
      float: left;
      width: 3.47rem;
      img {
        width: 3.47rem;
        height: 3.47rem;
      }
    }
    .inforPro {
      float: right;
      width: 8rem;
      .title {
        font-size: 0.46rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 0.6rem;
      }
      .txt {
        font-size: 0.36rem;
        color: #808080;
        padding: 0.3rem 0 0.3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .label {
        font-size: 0.36rem;
        line-height: 0.36rem;
        margin-bottom: 0.15rem;
        padding: 0.13rem 0.2rem 0.11rem;
        margin-right: 0.2rem;
        border: 1px solid #11b57c;
        border-radius: 0.12rem 0 0.12rem 0;
        font-style: normal;
        color: #11b57c;
        background: #fff;
        max-width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .price {
        position: relative;
        height: 0.8rem;
        padding-top: 0.3rem;
        z-index: 10;
        .priceRed {
          font-size: 0.46rem;
          color: #fd3d3d;
          padding-right: 0.45rem;
          line-height: 0.8rem;
        }
        .standard {
          font-size: 0.34rem;
          color: #808080;
          line-height: 0.8rem;
          padding-right: 0.2rem;
        }
        .addCart {
          z-index: 100;
          position: absolute;
          right: 0.5rem;
          top: 0.3rem;
          width: 0.8rem;
          height: 0.8rem;
          background: url(//img05.yiguoimg.com/d/web/180508/01311/150610/add.png)
            no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .noMore {
    position: relative;
    width: 3.5rem;
    height: 1rem;
    margin: 1.5rem auto 0.5rem;
    border-top: 1px solid #808080;
    p {
      font-size: 0.38rem;
      color: #808080;
      position: absolute;
      top: -0.22rem;
      left: 50%;
      margin-left: -1.5rem;
      background: #f4f4f4;
      width: 3rem;
      text-align: center;
    }
  }
}
</style>


