<template>
  <div>
    <vue-carousel :data="items" indicator-type="disc" indicator-trigger="hover" class="carousel"></vue-carousel>
    <v-layout class="pt-2 pb-2 pl-2 pr-2">
      <v-flex xs5 offset-xs1>
        <v-card>
          <v-img
            style="display:inline-block"
            height="200px"
            width="200px"
            src="https://gd2.alicdn.com/imgextra/i2/2681774540/TB2g5FwJFmWBuNjSspdXXbugXXa_!!2681774540.jpg"
          ></v-img>
          <div>
            <v-card-title style="display:block">
              <span>安纽希超级GOLD+羊乳粉</span>
            </v-card-title>
            <v-card-actions style="display:inline-block">
              <v-btn flat color="orange" @click="setSubcomponentId(3)">查看详情</v-btn>
            </v-card-actions>
          </div>
        </v-card>

        <v-card>
          <v-img
            style="display:inline-block"
            height="200px"
            width="200px"
            src="https://gd2.alicdn.com/imgextra/i3/2681774540/TB25k_vJHSYBuNjSspiXXXNzpXa_!!2681774540.jpg"
          ></v-img>
          <div>
            <v-card-title style="display:block">
              <span>安纽希GOLD+牛奶粉</span>
            </v-card-title>
            <v-card-actions style="display:inline-block">
              <v-btn flat color="orange" @click="setSubcomponentId(4)">查看详情</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card>
          <v-img
            style="display:inline-block"
            height="200px"
            width="200px"
            src="https://gd3.alicdn.com/imgextra/i3/4017436931/TB2P6y3IkyWBuNjy0FpXXassXXa_!!4017436931.jpg"
          ></v-img>
          <div>
            <v-card-title style="display:block">
              <span>恬恩婴儿配方奶粉</span>
            </v-card-title>
            <v-card-actions style="display:inline-block">
              <v-btn flat color="orange" @click="setSubcomponentId(5)">查看详情</v-btn>
            </v-card-actions>
          </div>
        </v-card>
        <v-card>
          <v-img
            style="display:inline-block"
            height="200px"
            width="200px"
            src="https://gd1.alicdn.com/imgextra/i1/177961540/TB2PXc9uv5TBuNjSspcXXbnGFXa_!!177961540.jpg"
          ></v-img>
          <div>
            <v-card-title style="display:block">
              <span>卓维乐纸尿裤</span>
            </v-card-title>
            <v-card-actions style="display:inline-block">
              <v-btn flat color="orange" @click="setSubcomponentId(6)">查看详情</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
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
      items: [
        '<img style="  width: 1185px;  height: 500px; overflow: hidden;" class="carousel-content" @click="navigateTo(1)" src="http://image.tianyoudairy.com/tianyou/official/good/1533887461650-恬恩婴幼儿配方奶粉KV.jpg"/>',
        '<img style="  width: 1185px;  height: 500px;  overflow: hidden;" class="carousel-content" src="http://img.ytpp.com.cn//brandPic/2016/7/1209294138c.jpg"/>',
        '<img style="  width: 1185px;  height: 500px;  overflow: hidden;" class="carousel-content" src="https://gd1.alicdn.com/imgextra/i1/177961540/TB2VEckgBsmBKNjSZFFXXcT9VXa_!!177961540.png"/>'
      ]
    };
  },
  methods: {
    setSubcomponentId(key) {
       this.$emit('setId', key)
    }
  },
  components: {
    VueCarousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  max-height: 500px;
}
</style>
