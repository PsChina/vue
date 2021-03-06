## TimePicker

这是一个初步封装的组件

效果:

![time-picker](https://github.com/PsChina/Vue/blob/master/images/time-picker.jpg)

## TimeRangePicker

外部依赖
```bash
npm i mint-ui -S #基于Mint-UI的 mt-picker 封装

npm i easy-filter -S #fotmatTime date 过滤器
```

这个组件是可以复用的 api

### 属性

| props | 作用 | 类型 | 默认值 |
| :--:| :--:| :--: | :--: |
| startYear | 可选最小年份 | Number、String | 前20年 |
| endYear | 可选最大年份 | Number、String | 后20年 |
| startText | 开始时间 labelText | String | 开始时间 |
| endText | 结束时间 labelText | String | 结束时间 |
| okText | 确认按钮文本 | String | 确认 |
| cancelText | 取消按钮文本 | String | 取消 |
| toast | 当结束时间早于开始时间的提示 | String | 结束时间不能早于开始时间 |
| dateUnits | 时间单位 | Array | ['','',''] |

### 事件

| events | 作用 |
| :--:| :--:|
| ok | 点击确认时的回调 |
| cancel | 点击取消时的回调 |


### 例子

```html
<template>
    <range-picker
    v-show="showTimePicker"
    :startYear="new Date().getFullYear()-20"
    :endYear="new Date().getFullYear()"
    :dateUnits="['年','月','日']"
    @ok="onOk"
    @cancel="hideSelector"
    >
    </range-picker>
</template>
<script>
export default {
    data(){
        return {
            showTimePicker: false,
            timeRange: ''
        }
    },
    methods: {
        toggleTimePicker() {
        this.showTimePicker = !this.showTimePicker
        },
        onOk(val) {
        this.timeRange = `${val[0].replace(/-/ig, '/')}-${val[1].replace(/-/ig, '/')}`
        this.hideSelector()
        },
        hideSelector() {
        this.toggleTimePicker()
        this.show = false
        } 
    }
}
</script>
```

### 效果

![time-picker](https://github.com/PsChina/Vue/blob/master/images/range-picker.gif)