<template>
  <div class="search">
    <div class="searchContent clear">
      <div class="nav">
        <ul class="navList">
          <li
            v-for="(item,index) in fenlei"
            :key="index"
            :class="{'active':index==activeidx}"
            @click="tab(index)"
            v-text="item"
          >进口水果</li>
          <!-- <li class>国产水果</li>
          <li class>精选肉类</li>
          <li class>禽类蛋品</li>
          <li class>海鲜水产</li>
          <li class>即烹美食</li>
          <li class>乳品糕点</li>
          <li class>新鲜蔬菜</li>
          <li class>方便速食</li>
          <li class>粮油杂货</li>
          <li class>礼品礼券</li>-->
        </ul>
      </div>
      <ul class="listContent">
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.jinkou"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.guochan"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.roulei"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.qinlei"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.haixian"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.meishi"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in listgaodian"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.shucai"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.sushi"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.zahuo"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
        <li>
          <div class="commodityBox">
            <a
              v-for="(item,index) in list.lipin"
              :key="index"
              href="javascript:;"
              class="commodityList"
            >
              <img :src="item.imgUrl">
              {{item.names}}
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idx: null,
      activeidx: null,
      fenlei: [
        "进口水果",
        "国产水果",
        "精选肉类",
        "禽类蛋品",
        "海鲜水产",
        "即烹美食",
        "乳品糕点",
        "新鲜蔬菜",
        "方便速食",
        "粮油杂货",
        "礼品礼券"
      ],
      list: {
        jinkou: [
          {
            names: "全部",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg"
          },
          {
            names: "奇异果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg"
          },
          {
            names: "车厘子",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg"
          },
          {
            names: "牛油果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg"
          },
          {
            names: "提子",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170615/9288709129511631_220.jpg"
          },
          {
            names: "苹果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709129478863_220.jpg"
          },
          {
            names: "梨",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709129446095_220.jpg"
          },
          {
            names: "柑桔橙柚",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709129413327_220.jpg"
          },
          {
            names: "山竹",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128921807_220.jpg"
          },

          {
            names: "香蕉",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128889039_220.jpg"
          },
          {
            names: "火龙果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128856271_220.jpg"
          },
          {
            names: "椰子",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128823503_220.jpg"
          },
          {
            names: "芒果",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128790735_220.jpg"
          },
          {
            names: "凤梨",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128692431_220.jpg"
          },
          {
            names: "榴莲",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128659663_220.jpg"
          },

          {
            names: "时令水果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128594127_220.jpg"
          },
          {
            names: "原箱水果",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128561359_220.jpg"
          }
        ],
        guochan: [
          {
            names: "全部",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170616/9288709172896464_220.jpg"
          },
          {
            names: "苹果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128528591_220.jpg"
          },
          {
            names: "梨",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128495823_220.jpg"
          },
          {
            names: "樱桃",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128331983_220.jpg"
          },
          {
            names: "柑桔橙柚",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128463055_220.jpg"
          },
          {
            names: "瓜",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128397519_220.jpg"
          },
          {
            names: "葡萄",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128364751_220.jpg"
          },
          {
            names: "桃",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128299215_220.jpg"
          },
          {
            names: "莓",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128200911_220.jpg"
          },

          {
            names: "芒果",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128069839_220.jpg"
          },
          {
            names: "凤梨",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128004303_220.jpg"
          },
          {
            names: "芭乐",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170615/9288709127938767_220.jpg"
          },
          {
            names: "百香果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709127905999_220.jpg"
          },
          {
            names: "热带水果",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709127873231_220.jpg"
          },
          {
            names: "时令水果",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709127840463_220.jpg"
          },
          {
            names: "原箱水果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709127807695_220.jpg"
          }
        ],
        roulei: [
          {
            names: "全部",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709152481999_220.jpg"
          },
          {
            names: "牛排",
            imgUrl:
              "https://img10.yiguoimg.com/d/items/2018/180803/9570202619127043_220.jpg"
          },
          {
            names: "进口牛肉",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709152318159_220.jpg"
          },
          {
            names: "国产牛肉",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709152285391_220.jpg"
          },
          {
            names: "猪肉",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709152252623_220.jpg"
          },
          {
            names: "羊肉",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709152219855_220.jpg"
          },
          {
            names: "肉制品",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170615/9288709152121551_220.jpg"
          }
        ],
        qinlei: [
          {
            names: "全部",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170616/9288709173519056_220.jpg"
          },
          {
            names: "鸡",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709152449231_220.jpg"
          },
          {
            names: "鸭",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709152416463_220.jpg"
          },
          {
            names: "鹅/鸽/特色禽类",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709152383695_220.jpg"
          },
          {
            names: "蛋",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709152350927_220.jpg"
          }
        ],
        haixian: [
          {
            names: "全部",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170619/9288709276607187_220.jpg"
          },
          {
            names: "鳕鱼",
            imgUrl:
              "https://img13.yiguoimg.com/d/items/2018/180815/9570204213290255_220.jpg"
          },
          {
            names: "虾仁",
            imgUrl:
              "https://img13.yiguoimg.com/d/items/2018/180803/9570202576037123_220.jpg"
          },
          {
            names: "鱼",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170616/9288709169193680_220.jpg"
          },
          {
            names: "三文鱼",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170616/9288709169128144_220.jpg"
          },
          {
            names: "虾",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709169062608_220.jpg"
          },
          {
            names: "蟹",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709169029840_220.jpg"
          },
          {
            names: "贝",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709168702160_220.jpg"
          },
          {
            names: "活鲜",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170616/9288709168669392_220.jpg"
          },
          {
            names: "海参",
            imgUrl:
              "https://img11.yiguoimg.com/d/items/2019/190423/9288737833494167_220.jpg"
          },
          {
            names: "加工水产",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170616/9288709168472784_220.jpg"
          }
        ],
        meishi: [
          {
            names: "全部",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170619/9288709291909843_220.jpg"
          },
          {
            names: "独家秘制",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170616/9288709173158608_220.jpg"
          },
          {
            names: "中华美食",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170616/9288709172994768_220.jpg"
          }
        ],
        gaodian: [
          {
            names: "全部",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170619/9288709271954131_220.jpg"
          },
          {
            names: "奶酪",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170616/9288709169816272_220.jpg"
          },
          {
            names: "乳品",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170616/9288709169685200_220.jpg"
          },
          {
            names: "面包",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170619/9288709300593363_220.jpg"
          },
          {
            names: "蛋糕",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709169619664_220.jpg"
          },
          {
            names: "甜点",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709168636624_220.jpg"
          }
        ],
        shucai: [
          {
            names: "全部",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170616/9288709170143952_220.jpg"
          },
          {
            names: "叶菜类",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170616/9288709170799312_220.jpg"
          },
          {
            names: "根茎类",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170616/9288709170766544_220.jpg"
          },
          {
            names: "茄果/瓜果类",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170616/9288709170733776_220.jpg"
          },
          {
            names: "花菜/豆类",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709170701008_220.jpg"
          },
          {
            names: "菌菇",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170616/9288709170668240_220.jpg"
          },
          {
            names: "沙拉菜",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170616/9288709170635472_220.jpg"
          },
          {
            names: "豆制品",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170616/9288709170504400_220.jpg"
          },
          {
            names: "葱蒜类",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170616/9288709170438864_220.jpg"
          },
          {
            names: "蔬菜组合",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170616/9288709170406096_220.jpg"
          }
        ],
        sushi: [
          {
            names: "全部",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg"
          },
          {
            names: "奇异果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg"
          },
          {
            names: "车厘子",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg"
          },
          {
            names: "牛油果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg"
          },
          {
            names: "提子",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170615/9288709129511631_220.jpg"
          },
          {
            names: "苹果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709129478863_220.jpg"
          },
          {
            names: "梨",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709129446095_220.jpg"
          },
          {
            names: "柑桔橙柚",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709129413327_220.jpg"
          },
          {
            names: "山竹",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128921807_220.jpg"
          },

          {
            names: "香蕉",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128889039_220.jpg"
          },
          {
            names: "火龙果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128856271_220.jpg"
          },
          {
            names: "椰子",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128823503_220.jpg"
          },
          {
            names: "芒果",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128790735_220.jpg"
          },
          {
            names: "凤梨",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128692431_220.jpg"
          },
          {
            names: "榴莲",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128659663_220.jpg"
          },

          {
            names: "时令水果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128594127_220.jpg"
          },
          {
            names: "原箱水果",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128561359_220.jpg"
          }
        ],
        zahuo: [
          {
            names: "全部",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg"
          },
          {
            names: "奇异果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg"
          },
          {
            names: "车厘子",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg"
          },
          {
            names: "牛油果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg"
          },
          {
            names: "提子",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170615/9288709129511631_220.jpg"
          },
          {
            names: "苹果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709129478863_220.jpg"
          },
          {
            names: "梨",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709129446095_220.jpg"
          },
          {
            names: "柑桔橙柚",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709129413327_220.jpg"
          },
          {
            names: "山竹",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128921807_220.jpg"
          },

          {
            names: "香蕉",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128889039_220.jpg"
          },
          {
            names: "火龙果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128856271_220.jpg"
          },
          {
            names: "椰子",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128823503_220.jpg"
          },
          {
            names: "芒果",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128790735_220.jpg"
          },
          {
            names: "凤梨",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128692431_220.jpg"
          },
          {
            names: "榴莲",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128659663_220.jpg"
          },

          {
            names: "时令水果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128594127_220.jpg"
          },
          {
            names: "原箱水果",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128561359_220.jpg"
          }
        ],
        lipin: [
          {
            names: "全部",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg"
          },
          {
            names: "奇异果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943127244_220.jpg"
          },
          {
            names: "车厘子",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170612/9288708942996172_220.jpg"
          },
          {
            names: "牛油果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170612/9288708943192780_220.jpg"
          },
          {
            names: "提子",
            imgUrl:
              "https://img10.yiguoimg.com/e/items/2017/170615/9288709129511631_220.jpg"
          },
          {
            names: "苹果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709129478863_220.jpg"
          },
          {
            names: "梨",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709129446095_220.jpg"
          },
          {
            names: "柑桔橙柚",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709129413327_220.jpg"
          },
          {
            names: "山竹",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128921807_220.jpg"
          },

          {
            names: "香蕉",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128889039_220.jpg"
          },
          {
            names: "火龙果",
            imgUrl:
              "https://img12.yiguoimg.com/e/items/2017/170615/9288709128856271_220.jpg"
          },
          {
            names: "椰子",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128823503_220.jpg"
          },
          {
            names: "芒果",
            imgUrl:
              "https://img13.yiguoimg.com/e/items/2017/170615/9288709128790735_220.jpg"
          },
          {
            names: "凤梨",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128692431_220.jpg"
          },
          {
            names: "榴莲",
            imgUrl:
              "https://img11.yiguoimg.com/e/items/2017/170615/9288709128659663_220.jpg"
          },

          {
            names: "时令水果",
            imgUrl:
              "https://img14.yiguoimg.com/e/items/2017/170615/9288709128594127_220.jpg"
          },
          {
            names: "原箱水果",
            imgUrl:
              "https://img09.yiguoimg.com/e/items/2017/170615/9288709128561359_220.jpg"
          }
        ]
      }
    };
  },
  methods: {
    tab(index) {
      this.idx = index;
      this.activeidx = index;
    }
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

