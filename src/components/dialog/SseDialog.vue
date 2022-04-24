<template>
    <el-dialog v-model="config.dialogVisible" :title="defaultConfig.title" :width="width"
        :draggable="defaultConfig.draggable" :fullscreen="fullscreen">
        <template #title>
            <div slot="title" class="el-dialog-slot__title">
                <span class="el-dialog__title">{{ defaultConfig.title }}</span>
                <span class="el-dialog-slot__titlespan">
                    <button class="el-dialog-slot__titlebtn" @click="fullscreenDia" title="最大化">
                        大
                    </button>
                </span>
            </div>
        </template>
        <slot></slot>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { configProviderContextKey } from 'element-plus';
import { ref, defineProps, PropType, reactive } from 'vue'
interface DialogProps {
    title: string,
    draggable?: boolean,
    hasIcon: boolean,
    hasButton: boolean,
    fullScreenBtn?: boolean,
    dialogVisible: boolean,
    size: 'small' | 'normal' | 'big',
    width?: string,
}
const props = defineProps({
    config: {
        type: Object as PropType<DialogProps>,
        required: true,
    }
})
const defaultConfig = reactive({
    size: 'small',
    width: '',
    title: '提示',
    dialogVisible: false,
    fullScreenBtn: true,
    btnTxt: ['确定', '取消'],
    buttonVisible: true,
    draggable: true,
    ...props.config
})
const widthObj = {
    small: '400px',
    normal: '800px',
    big: '1200px',
}
let width = ref('420px')
if (defaultConfig.width) {
    width.value = defaultConfig.width
} else {
    width.value = defaultConfig.size ? widthObj[defaultConfig.size] : widthObj.normal
}


let fullscreen = ref(false)
const fullscreenDia = () => {
    fullscreen.value = !fullscreen.value
}
</script>


<style scoped lang="scss">
</style>