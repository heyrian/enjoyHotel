<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
const router = useRouter()
const goLogin = () => {
  router.push('/login')
}
</script>

<template>
  <!-- <div class="homePage">
    我是首頁
    <button class="loginButton" @click="goLogin">前往登入頁</button>
  </div> -->
</template>
<style lang="scss">

</style>
