<template>
  <div class="amber lighten-5 pt-0">
    <v-container class="white elevation-2 content">
      <v-layout>
        <v-flex>
          <div class="red darken-4">
            <v-layout>
              <v-flex dark xs6 class="left-flex">曦诺宝贝</v-flex>
              <v-flex dark xs6 style="text-align:right">
                <v-btn flat dark>
                  <v-icon medium>email</v-icon>&nbsp;361740979@qq.com
                </v-btn>
                <v-btn flat dark>
                  <v-icon medium>fab fa-weixin</v-icon>&nbsp;微信名
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
          <v-tabs centered color="white" light icons-and-text show-arrows>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab href="#tab-1" color="yello">
              婴儿食品
              <v-icon>fastfood</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              给宝宝的咨询
              <v-icon>info</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
              我们的产品
              <v-icon>child_care</v-icon>
            </v-tab>

            <v-tab href="#tab-4">
              我们的品质
              <v-icon>school</v-icon>
            </v-tab>

            <v-tab href="#tab-5">
              销售地点
              <v-icon>place</v-icon>
            </v-tab>

            <v-tab href="#tab-6">
              关于我们
              <v-icon>supervised_user_circle</v-icon>
            </v-tab>

            <v-tab-item v-for="i in 6" :key="i" :value="'tab-' + i">
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <vue-carousel
            :data="items"
            indicator-type="disc"
            indicator-trigger="hover"
            class="carousel"
          ></vue-carousel>
          <v-footer dark height="auto">
            <v-card flat tile class="red darken-4 white--text text-xs-center">
              <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-card-text>
              <V-layout>
                <v-flex xs6>
                  <v-card-text dark class="title">其他资料</v-card-text>
                  <ul>
                    <li>
                      <v-btn flat dark>
                        <v-icon medium>fas fa-leaf</v-icon>&nbsp;网站地图
                      </v-btn>
                    </li>
                    <li>
                      <v-btn flat dark>
                        <v-icon medium>fas fa-leaf</v-icon>&nbsp;条款及细则
                      </v-btn>
                    </li>
                    <li>
                      <v-btn flat dark>
                        <v-icon medium>fas fa-leaf</v-icon>&nbsp;关于我们
                      </v-btn>
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs6>
                  <v-card-text dark class="title">联络方式</v-card-text>
                  <ul>
                    <li>
                      <v-btn flat dark>
                        <v-icon medium>phone</v-icon>&nbsp;13571066745
                      </v-btn>
                    </li>
                    <li>
                      <v-btn flat dark>
                        <v-icon medium>email</v-icon>&nbsp;abc@qq.com
                      </v-btn>
                    </li>
                    <li>
                      <v-btn flat dark>
                        <v-icon medium>fab fa-weixin</v-icon>&nbsp;微信名
                      </v-btn>
                    </li>
                  </ul>
                </v-flex>
              </V-layout>
              <v-divider></v-divider>
              <v-card-text
                class="white--text pt-2"
              >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                &copy;2019 —
                <strong>企业名</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueCarousel from "@chenfengyuan/vue-carousel";

Vue.use(VueCarousel);
Vue.component("vue-carousel", VueCarousel);

export default {
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      items: [
        '<img style="  width: 1185px;  height: 500px; overflow: hidden;" class="carousel-content" @click="navigateTo(1)" src="http://image.tianyoudairy.com/tianyou/official/good/1533887461650-恬恩婴幼儿配方奶粉KV.jpg"/>',
        '<img style="  width: 1185px;  height: 500px;  overflow: hidden;" class="carousel-content" src="http://img.ytpp.com.cn//brandPic/2016/7/1209294138c.jpg"/>',
        '<img style="  width: 1185px;  height: 500px;  overflow: hidden;" class="carousel-content" src="https://gd1.alicdn.com/imgextra/i1/177961540/TB2VEckgBsmBKNjSZFFXXcT9VXa_!!177961540.png"/>'
      ]
    };
  },
  methods: {
    navigateTo(key) {
      console.log("key " + key);
    }
  },
  components: {
    VueCarousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-flex {
  font-size: 20px;
  color: white;
  text-align: left;
  margin: auto 10px;
}
.content {
  padding: 0px;
}
.carousel {
  max-height: 500px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
