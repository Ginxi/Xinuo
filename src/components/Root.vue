<template>
  <div class="amber lighten-5 pt-0">
    <v-container class="white elevation-2 content">
      <v-layout>
        <v-flex>
          <div class="red darken-4">
            <v-layout>
              <v-flex dark xs6 class="left-flex">曦诺宝贝</v-flex>
              <v-flex dark xs6 style="text-align:right">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn flat dark v-on="on">
                      <v-icon medium>phone</v-icon>
                    </v-btn>
                  </template>
                  <span class="title-text">13571066745</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn flat dark v-on="on">
                      <v-icon medium>fab fa-weixin</v-icon>
                    </v-btn>
                  </template>
                  <span class="title-text">
                    <img
                      src="data:image/png;base64,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"
                    >
                  </span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </div>
          <v-tabs centered color="white" light icons-and-text show-arrows>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab href="#tab-1" @click="setSubcomponentId(0)">
              我们的产品
              <v-icon>child_care</v-icon>
            </v-tab>

            <v-tab href="#tab-2" @click="setSubcomponentId(1)">
              销售地点
              <v-icon>place</v-icon>
            </v-tab>

            <v-tab href="#tab-3" @click="setSubcomponentId(2)">
              关于我们
              <v-icon>supervised_user_circle</v-icon>
            </v-tab>

            <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i" >
              <v-card flat>
                <IndexSubComponent v-if="Id == 0" v-on:setId="setSubcomponentId"/>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <products v-if="Id > 2" :Id = "this.Id"/>
          <v-footer dark height="auto">
            <v-card flat tile class="red darken-4 white--text text-xs-center" width="100%">
              <v-card-text dark class="title">联络方式</v-card-text>
              <v-card-text dark>
                <v-icon medium>phone</v-icon>&nbsp;13571066745
              </v-card-text>
              <v-card-text>
                <v-icon medium>email</v-icon>&nbsp;360787577@qq.com
              </v-card-text>
              <v-card-text>
                <v-icon medium>fas fa-map-signs</v-icon>&nbsp;
              </v-card-text>
              <v-card-text>
                <v-icon medium>fab fa-weixin</v-icon>&nbsp;
                <img
                  src="data:image/png;base64,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"
                >
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="white--text">
                &copy;2019 —
                <strong>咸阳曦诺宝贝商贸有限公司</strong>
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
import IndexSubComponent from "@/components/IndexSubComponent";
import Products from "@/components/Products";

Vue.use(VueCarousel);
Vue.component("vue-carousel", VueCarousel);

export default {
  data() {
    return {
      Id: null,
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
    setSubcomponentId: function(key) {
      this.Id = key
      // console.log('key ' + key)
    }
  },
  components: {
    IndexSubComponent,
    Products
  },
  mounted() {
    this.Id = 0
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-text {
  font-size: 20px;
}
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
