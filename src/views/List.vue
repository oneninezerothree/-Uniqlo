<template>
  <div class="productList">
    <div class="tabNav line-bottom">
      <div class="tabMain">
        <div
          v-for="(tab,index) in tabName"
          :key="index"
          :class="{'active':index==activeIdx}"
          @click="[show(index),changeState()]"
        >
          {{tab.title}}
          <i v-if="tab.flag" :class="state? 'drop' :'litre' "></i>
        </div>
      </div>
    </div>
    <div class="pruductShow"  v-if="getdata.data">
      <div class="productContent line-bottom" v-for="(item,index) in getdata.data.data" :key="index" :CommodityCode="item.CommodityCode">
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
            <span class="priceRed">{{item.SellPrice}}</span>
            <span class="standard" style="text-decoration: line-through;" v-if="item.SellPrice<item.OriginalPrice">{{item.OriginalPrice}}</span>
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
    this.getShopList();
    this.$store.state.isShowMHeader = false;
    this.$store.state.isShowMFooter = true;
  },
  data() {
    return {
      idx: 0,
      activeIdx: 0,
      state: true,
      tabName: [
        { title: "销量", flag: false },
        { title: "新品", flag: false },
        { title: "价格", flag: true }
      ],
      renderList: []
    };
  },
  methods: {
    show(index) {
      this.idx = index;
      this.activeIdx = index;
      
    },
    changeState(){
        if(this.activeIdx===2){
           this.state=!this.state; 
        }
        
    },
    async getShopList() {
      const { g, p } = request;
      const data = await g({
        url:
          "https://www.easy-mock.com/mock/5cf6683dd44e0c5e99486044/example/yiguolist#!method=get"
      });
      this.$store.state.shopList = data;
    },
    goTo(data) {
        $route.push('/xiangqing?'+ data)
    }
  },
  computed: {
        ...mapGetters(['getdata']),
	},
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
}
</style>


