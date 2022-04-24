<template>
    <el-container>
        <el-header>
            <div class="logo" @click="changIsCollapse">
                SuenSmartElement
            </div>
        </el-header>
        <el-container>
            <el-aside width="auto">
                <el-menu default-active="2" :collapse="isCollapse" class="el-menu-vertical-demo">
                    <el-menu-item index="2">
                        <el-icon>
                            <icon-menu />
                        </el-icon>
                        <span>弹窗</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>常规表格</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>常规表单</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
let isCollapse = ref(false);
let changIsCollapse = () => {

    console.log(
        'isCollapse',
        isCollapse.value
    );

    isCollapse.value = !isCollapse.value;
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>