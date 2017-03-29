<template>
    <section :class="['scroll_view ',{'scroll_y':scrollY,'scroll_x':scrollX}]"
             @scroll="scrollEvents($event)"
             :style="{height:scrollHeight}">
        <slot></slot>
    </section>
</template>


<script>
export default {
    name: "scroll-view",
    props: {
        "scroll-x": {
            type: Boolean,
            required: false,
            default: false
        },
        "scroll-y": {
            type: Boolean,
            required: false,
            default: false
        },
        "upper-threshold": {
            type: Number,
            required: false,
            default: 50
        },
        "lower-threshold": {
            type: Number,
            required: false,
            default: 50
        },
        "scroll-top": {
            type: Number,
            required: false,
            default: 0
        },
        "scroll-left": {
            type: Number,
            required: false,
            default: 0
        },
        "scroll-into-view": {
            type: String,
            required: false,
        },
        "bindscrolltoupper": {
            type: Function,
            required: false,
        },
        "bindscrolltolower": {
            type: Function,
            required: false,
        },
        "bindscroll": {
            type: Function,
            required: false
        },
        "height": {
            type: [Number, String],
            required: true,
            default: "100%",
        }
    },
    data() {
        return {
            "view-width": 0,
            "view-height": 0,
            "scroll-prev": 0,
            "intoViewId": this.scrollIntoView
        }
    },
    computed: {
        scrollHeight() {
            if (isNaN(Number(this.height))) {
                return this.height;
            } else {
                return this.height + "px";
            }
        }
    },
    methods: {
        scrollEvents(event) {
            let target = event.target;
            let clientWidth = this.getScrollAttr(target, "clientWidth");
            let clientHeight = this.getScrollAttr(target, "clientHeight");
            let scrollViewWidth = this.getScrollAttr(this, "view-width");
            let scrollViewHeight = this.getScrollAttr(this, "view-height");
            let scrollPrev = this.getScrollAttr(this, "scroll-prev");
            if (this.scrollX && !this.scrollY) { //仅x轴滚动
                let scrollLeft = this.getScrollAttr(target, "scrollLeft");
                if ((scrollLeft < scrollPrev) && scrollLeft <= this.upperThreshold) {
                    console.log("left");
                    this.bindscrolltoupper && this.bindscrolltoupper();
                } else if ((scrollViewWidth - scrollLeft - clientWidth) <= this.lowerThreshold && (scrollLeft > scrollPrev)) {
                    console.log("right");
                    this.bindscrolltolower && this.bindscrolltolower();
                }
                this.setScrollAttr(this, "scroll-prev", target.scrollLeft);
            } else if (this.scrollY && !this.scrollX) { //仅y轴滚动
                let scrollTop = this.getScrollAttr(target, "scrollTop");
                if ((scrollTop < scrollPrev) && scrollTop <= this.upperThreshold) {
                    console.log("top");
                    this.bindscrolltoupper && this.bindscrolltoupper();
                } else if ((scrollViewHeight - scrollTop - clientHeight) <= this.lowerThreshold && (scrollTop > scrollPrev)) {
                    console.log("bottom");
                    this.bindscrolltolower && this.bindscrolltolower();
                }
                this.setScrollAttr(this, "scroll-prev", target.scrollTop);
            } else if (this.scrollY && this.scrollX) { //双轴滚动
                throw new Error("暂时不支持双轴滚动");
            }
            this.bindscroll && this.bindscroll();
        },
        setScrollAttr(target, attr, val) {
            target[attr] = val;
        },
        getScrollAttr(target, attr) {
            return target[attr];
        },
        scrollDirection(event) {

        },
        scrollIntoViewFn(viewId) {
            viewId = viewId || this.intoViewId;
            if (viewId) {
                this.$el.querySelector("#" + viewId) && this.$el.querySelector("#" + viewId).scrollIntoView(true);
            }
        }
    },
    mounted: function () {
        var self = this;
        let rootDom = this.$el;
        this.setScrollAttr(this, "view-width", rootDom.scrollWidth);
        this.setScrollAttr(this, "view-height", rootDom.scrollHeight);
        this.setScrollAttr(rootDom, "scrollTop", this.scrollTop);
        this.setScrollAttr(rootDom, "scrollLeft", this.scrollLeft);
        this.scrollIntoViewFn();
    },
    watch: {
        intoViewId(newVal) {
            this.scrollIntoViewFn(newVal);
        }
    }
}
</script>



<style>
 ::-webkit-scrollbar {
    display: none;
}

.scroll_view {
    font-size: 0;
    width: 100%;
    display: block;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
}

.scroll_y {
    overflow-y: scroll;
    overflow-x: hidden;
}

.scroll_y>* {
    font-size: 14px;
    white-space: nowrap;
    display: block !important;
}

.scroll_x {
    overflow-x: scroll;
    overflow-y: hidden;
}

.scroll_x>* {
    font-size: 14px;
    white-space: nowrap;
    display: inline-block!important;
    word-spacing: 0;
}
</style>



