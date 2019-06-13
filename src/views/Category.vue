<template>
  <div class="search">
    <div class="searchContent clear">
      <div class="nav">
        <ul class="navList">
          <li
            v-for="(item, index) in goodsList"
            :key="index"
            :class="{ active: index == idx }"
            @click="tab(index)"
            v-text="item.fenlei"
          ></li>
        </ul>
      </div>
      <ul class="listContent" ref="listContent">
        <li v-for="(zhonglei, index1) in goodsList" :key="index1" v-show="idx == index1">
          <div class="commodityBox">
            <router-link
              v-for="(item, index) in zhonglei.a"
              :key="index"
              href="javascript:;"
              class="commodityList"
              :to="{ path: 'list', query: { keyword: item.names,keyword2:item.fenlei }}"
            >
              <img :src="item.imgUrl">
              {{ item.names }}
            </router-link>
            <!-- <a
              v-for="(item, index) in zhonglei.a"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{ item.names }}
            </a>-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { magGetter, mapGetters } from "vuex";
export default {
  created() {
    this.$store.state.isShowMHeader = true;
    this.$store.state.isShowMFooter = true;
  },
  data() {
    return {
      flag: null,
      idx: 0,
      goodsList: [
        {
          fenlei: "进口水果",
          a: [
            {
              fenlei: "jinKouShuiGuo",
              names: "全部",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "奇异果",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "车厘子",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "牛油果",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "提子",
              imgUrl:
                "https://img10.yiguoimg.com/e/items/2017/170615/9288709129511631_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "苹果",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709129478863_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "梨",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709129446095_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "柑桔橙柚",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709129413327_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "山竹",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709128921807_220.jpg"
            },

            {
              fenlei: "jinKouShuiGuo",
              names: "香蕉",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170615/9288709128889039_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "火龙果",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709128856271_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "椰子",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709128823503_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "芒果",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709128790735_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "凤梨",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709128692431_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "榴莲",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709128659663_220.jpg"
            },

            {
              fenlei: "jinKouShuiGuo",
              names: "时令水果",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709128594127_220.jpg"
            },
            {
              fenlei: "jinKouShuiGuo",
              names: "原箱水果",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170615/9288709128561359_220.jpg"
            }
          ]
        },
        {
          fenlei: "国产水果",
          a: [
            {
              fenlei: "guoChanShuiGuo",
              names: "全部",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170616/9288709172896464_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "苹果",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709128528591_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "梨",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709128495823_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "樱桃",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709128331983_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "柑桔橙柚",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709128463055_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "瓜",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709128397519_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "葡萄",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170615/9288709128364751_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "桃",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709128299215_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "莓",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709128200911_220.jpg"
            },

            {
              fenlei: "guoChanShuiGuo",
              names: "芒果",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709128069839_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "凤梨",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709128004303_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "芭乐",
              imgUrl:
                "https://img10.yiguoimg.com/e/items/2017/170615/9288709127938767_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "百香果",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709127905999_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "热带水果",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709127873231_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "时令水果",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709127840463_220.jpg"
            },
            {
              fenlei: "guoChanShuiGuo",
              names: "原箱水果",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709127807695_220.jpg"
            }
          ]
        },
        {
          fenlei: "精选肉类",
          a: [
            {
              fenlei: "jingXuanRouLei",
              names: "全部",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709152481999_220.jpg"
            },
            {
              fenlei: "jingXuanRouLei",
              names: "牛排",
              imgUrl:
                "https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg"
            },
            {
              fenlei: "jingXuanRouLei",
              names: "进口牛肉",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg"
            },
            {
              fenlei: "jingXuanRouLei",
              names: "国产牛肉",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg"
            },
            {
              fenlei: "jingXuanRouLei",
              names: "猪肉",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709152252623_220.jpg"
            },
            {
              fenlei: "jingXuanRouLei",
              names: "羊肉",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709152219855_220.jpg"
            },
            {
              fenlei: "jingXuanRouLei",
              names: "肉制品",
              imgUrl:
                "https://img10.yiguoimg.com/e/items/2017/170615/9288709152121551_220.jpg"
            }
          ]
        },
        {
          fenlei: "禽类蛋品",
          a: [
            {
              fenlei: "qinLeiDanPin",
              names: "全部",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170616/9288709173519056_220.jpg"
            },
            {
              fenlei: "qinLeiDanPin",
              names: "鸡",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709152449231_220.jpg"
            },
            {
              fenlei: "qinLeiDanPin",
              names: "鸭",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709152416463_220.jpg"
            },
            {
              fenlei: "qinLeiDanPin",
              names: "鹅/鸽/特色禽类",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709152383695_220.jpg"
            },
            {
              fenlei: "qinLeiDanPin",
              names: "蛋",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709152350927_220.jpg"
            }
          ]
        },
        {
          fenlei: "海鲜水产",
          a: [
            {
              fenlei: "haiXianShuiChan",
              names: "全部",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170619/9288709276607187_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "鳕鱼",
              imgUrl:
                "https://img13.yiguoimg.com/d/items/2018/180815/9570204213290255_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "虾仁",
              imgUrl:
                "https://img13.yiguoimg.com/d/items/2018/180803/9570202576037123_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "鱼",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170616/9288709169193680_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "三文鱼",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709169128144_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "虾",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709169062608_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "蟹",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709169029840_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "贝",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709168702160_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "活鲜",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170616/9288709168669392_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "海参",
              imgUrl:
                "https://img11.yiguoimg.com/d/items/2019/190423/9288737833494167_220.jpg"
            },
            {
              fenlei: "haiXianShuiChan",
              names: "加工水产",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709168472784_220.jpg"
            }
          ]
        },
        {
          fenlei: "即烹美食",
          a: [
            {
              fenlei: "jiPengMeiShi",
              names: "全部",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170619/9288709291909843_220.jpg"
            },
            {
              fenlei: "jiPengMeiShi",
              names: "独家秘制",
              imgUrl:
                "https://img10.yiguoimg.com/e/items/2017/170616/9288709173158608_220.jpg"
            },
            {
              fenlei: "jiPengMeiShi",
              names: "中华美食",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170616/9288709172994768_220.jpg"
            }
          ]
        },
        {
          fenlei: "乳品糕点",
          a: [
            {
              fenlei: "ruPinGaoDian",
              names: "全部",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170619/9288709271954131_220.jpg"
            },
            {
              fenlei: "ruPinGaoDian",
              names: "奶酪",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170616/9288709169816272_220.jpg"
            },
            {
              fenlei: "ruPinGaoDian",
              names: "乳品",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170616/9288709169685200_220.jpg"
            },
            {
              fenlei: "ruPinGaoDian",
              names: "面包",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170619/9288709300593363_220.jpg"
            },
            {
              fenlei: "ruPinGaoDian",
              names: "蛋糕",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709169619664_220.jpg"
            },
            {
              fenlei: "ruPinGaoDian",
              names: "甜点",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709168636624_220.jpg"
            }
          ]
        },
        {
          fenlei: "新鲜蔬菜",
          a: [
            {
              fenlei: "xinXianShuCai",
              names: "全部",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170616/9288709170143952_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "叶菜类",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709170799312_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "根茎类",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709170766544_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "茄果/瓜果类",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170616/9288709170733776_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "花菜/豆类",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709170701008_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "菌菇",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709170668240_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "沙拉菜",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170616/9288709170635472_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "豆制品",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709170504400_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "葱蒜类",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170616/9288709170438864_220.jpg"
            },
            {
              fenlei: "xinXianShuCai",

              names: "蔬菜组合",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170616/9288709170406096_220.jpg"
            }
          ]
        },
        {
          fenlei: "方便速食",
          a: [
            {
              fenlei: "fangBianSuShi",
              names: "全部",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170619/9288709271986899_220.jpg"
            },
            {
              fenlei: "fangBianSuShi",
              names: "冷冻点心",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709170111184_220.jpg"
            },
            {
              fenlei: "fangBianSuShi",
              names: "中式主食",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170616/9288709170045648_220.jpg"
            },
            {
              fenlei: "fangBianSuShi",
              names: "火锅料",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170616/9288709170012880_220.jpg"
            }
          ]
        },
        {
          fenlei: "粮油杂货",
          a: [
            {
              fenlei: "liangYouZaHuo",
              names: "全部",
              imgUrl:
                "https://img10.yiguoimg.com/e/items/2017/170615/9288709120729807_220.jpg"
            },
            {
              fenlei: "liangYouZaHuo",
              names: "米",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709120926415_220.jpg"
            },
            {
              fenlei: "liangYouZaHuo",
              names: "杂粮",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709120893647_220.jpg"
            },
            {
              fenlei: "liangYouZaHuo",
              names: "油",
              imgUrl:
                "https://img11.yiguoimg.com/e/items/2017/170615/9288709120762575_220.jpg"
            },
            {
              fenlei: "liangYouZaHuo",
              names: "干货",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709120664271_220.jpg"
            },
            {
              fenlei: "liangYouZaHuo",
              names: "果干/零食",
              imgUrl:
                "https://img13.yiguoimg.com/e/items/2017/170615/9288709120631503_220.jpg"
            }
          ]
        },
        {
          fenlei: "礼品礼券",
          a: [
            {
              fenlei: "liPinLiQuan",
              names: "全部",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709151761103_220.jpg"
            },
            {
              fenlei: "liPinLiQuan",
              names: "礼品礼盒",
              imgUrl:
                "https://img12.yiguoimg.com/e/items/2017/170615/9288709121516239_220.jpg"
            },
            {
              fenlei: "liPinLiQuxan",
              names: "礼卡礼券",
              imgUrl:
                "https://img14.yiguoimg.com/e/items/2017/170615/9288709151892175_220.jpg"
            },
            {
              fenlei: "liPinLiQuan",
              names: "原膳礼盒",
              imgUrl:
                "https://img09.yiguoimg.com/e/items/2017/170615/9288709151826639_220.jpg"
            }
          ]
        }
      ]
    };
  },
  methods: {
    tab(index) {
      this.idx = index;
      //   console.log(this.idx);
    }
  },
  computed: {
    ...mapGetters(["getdata"])
  }
};
</script>
<style lang="scss" scoped>
img {
  border: 0;
  vertical-align: middle;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.clear:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.search .searchContent {
  background: #fff;
  padding-top: 1.35rem;
  .nav {
    position: fixed;
    left: 0;
    top: 1.35rem;
    float: left;
    width: 2.77rem;
    height: 100%;
    overflow: hidden;
    z-index: 98;
  }
  .navList {
    width: 3.27rem;
    height: 100%;
    background: #f4f4f4;
    padding: 0rem 0.5rem 100px 0;
    overflow-y: scroll;
    box-sizing: border-box;
    li {
      padding: 0.64rem 0rem 0.64rem 0;
      text-align: center;
      font-size: 0.42rem;
      color: #333;
      height: 1.7rem;
      box-sizing: border-box;
    }
    li.active {
      color: #11b57c;
      border-left: 0.1rem solid #11b57c;
      background: #fff;
      box-sizing: border-box;
    }
  }
  .listContent {
    width: 100%;
    height: auto;
    background: #fff;
    padding-left: 2.77rem;
    box-sizing: border-box;
    li {
      width: 100%;
      overflow: hidden;
      .commodityBox {
        width: 100%;
        padding: 0.5rem 0rem 50px 0.6rem;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      .commodityList {
        float: left;
        display: inline-block;
        width: 2.76rem;
        height: 3.18rem;
        position: relative;
        padding-top: 2rem;
        text-align: center;
        box-sizing: border-box;
        font-size: 0.38rem;
        color: #808080;
        text-decoration: none;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 1.89rem;
          height: 1.89rem;
          margin: 0 0.43rem;
        }
      }
    }
  }
}
</style>
