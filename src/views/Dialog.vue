<template>
    <div>
        <el-button type="text" @click="sdConfig.dialogVisible = true">small Dialog
        </el-button>
        <el-button type="text" @click="ndConfig.dialogVisible = true">normal Dialog
        </el-button>
        <el-button type="text" @click="bdConfig.dialogVisible = true">big Dialog
        </el-button>
        <Sse-Dailog :config="sdConfig">
            这是一个小弹窗
        </Sse-Dailog>
        <Sse-Dailog :config="ndConfig">
            这是一个中弹窗
        </Sse-Dailog>
        <Sse-Dailog :config="bdConfig">
            这是一个大弹窗
        </Sse-Dailog>
    </div>
</template>

<script setup lang="ts">
import SseDailog from '../components/dialog/SseDialog.vue';
import { ref, } from 'vue';
let sdConfig = ref({
    title: "小弹窗",
    hasIcon: true,
    hasButton: true,
    dialogVisible: false,
    size: 'small',
})
let ndConfig = ref({
    title: "中弹窗",
    hasIcon: true,
    hasButton: true,
    dialogVisible: false,
    size: 'normal',
})
let bdConfig = ref({
    title: "大弹窗",
    hasIcon: true,
    hasButton: true,
    dialogVisible: false,
    size: 'big',
})
</script>

<style scoped lang="scss">
</style>