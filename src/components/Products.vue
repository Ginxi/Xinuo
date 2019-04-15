<template>
<div>
<h3 class="title-content pt-5 pb-5">{{title[Id-3]}}</h3>
<angoat v-if="Id == 3"/>
<ancow v-if="Id == 4"/>
<tianen v-if="Id == 5"/>
<zhuoweile v-if="Id == 6"/>
</div>
</template>

<script>
import Tianen from '@/components/Tianen'
import Angoat from '@/components/AnniuxiGoat'
import Ancow from '@/components/AnniuxiCow'
import Zhuoweile from '@/components/Zhuoweile'

export default {
  data() {
    return {
      title: [
        "安纽希超级GOLD+羊乳粉",
        "安纽希GOLD+牛奶粉",
        "恬恩婴儿配方奶粉",
        "卓维乐纸尿裤"
      ]
    };
  },
  components: {
    Tianen,
    Angoat,
    Ancow,
    Zhuoweile
  },
  props: {
      Id: Number,
      required: true
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-content {
  font-size: 40px;
  color: #B71C1C;
}
</style>
