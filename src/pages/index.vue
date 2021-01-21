<template>
  <div class="home">
    <div class="head">
      <router-link class="flex-1 text-center search-box text-xs" to="/search">
        <i class="el-icon-search" />
      </router-link>
      <div class="play-icon-box">
        <span class="iconfont icon-icon_MyMusicBook" />
      </div>
    </div>
    <el-carousel
      v-if="baner.length"
      class="box-border px-2 rounded-sm"
      height="180px"
    >
      <el-carousel-item v-for="item in baner" :key="item.bannerId">
        <div
          class="h-full bg-cover relative rounded-sm"
          :style="{ backgroundImage: `url(${item.pic})` }"
        >
          <span
            class="absolute right-0 bottom-0 px-2 py-1 text-xs text-white opacity-70 rounded-tl-none"
            :style="{ backgroundColor: `${item.titleColor}` }"
            >{{ item.typeTitle }}</span
          >
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { get } from '@/common/request'
import { ref } from 'vue'
interface Banner {
  pic: string
  typeTitle: string
  titleColor: string
  bannerId: string
}
const baner = ref<Banner[]>([])
Promise.all([get('/api/banner?type=2')]).then(([resBanner]) => {
  handleBanner(resBanner)
})

function handleBanner(resBanner: unknown) {
  baner.value = (resBanner as { banners: Banner[] })?.banners.map(
    ({ pic, typeTitle, titleColor, bannerId }) => ({
      pic,
      typeTitle,
      titleColor,
      bannerId,
    })
  )
}
</script>

<style lang="scss">
.home {
  padding-bottom: 15vw;
  .head {
    display: flex;
    padding: 0.5em;
    .search-box {
      background-color: #f6f6f6;
      padding: 0.3em 0;
      color: #666;
    }
    .play-icon-box {
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
      border: 1px solid #ccc;
      text-align: center;
      margin-left: 10px;
      .icon-icon_MyMusicBook {
        line-height: 8vw;
      }
    }
  }
}
.el-carousel__indicators {
  white-space: nowrap;
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .el-carousel__indicator.is-active {
    .el-carousel__button {
      background-color: lightgreen;
    }
  }
}
</style>
