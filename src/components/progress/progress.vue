<template>
    <section class="v_progress_wrap flex-wrp h-middle v-middle">
        <section class="v_progress" :style="{height:strokeWidth+'px'}">
            <transition appear @before-appear="beforeAppear" @after-appear="afterAppear">
                <div :style="{height:'100%',backgroundColor:color}" class="progress-item"></div>
            </transition>
        </section>
        <p :style="{fontSize:strokeWidth+'px'}" class="v_progress_text" v-if="showInfo">{{percentText}}%</p>
    </section>
</template>
<script>
    export default {
        name: "smyProgress",
        props: {
            "percent": {
                type: Number,
                required: false,
                default: 10
            },
            "show-info": {
                type: Boolean,
                required: false,
                default: false
            },
            "stroke-width": {
                type: Number,
                required: false,
                default: 6
            },
            "color": {
                type: String,
                required: false,
                default: "#09BB07"
            },
            "active": {
                type: Boolean,
                required: false,
                default: false
            },
            "active-time": {
                type: Number,
                required: false,
                default: 500
            }
        },
        data() {
            return {
                percentText: 0
            }
        },
        methods: {
            beforeAppear(el) {
                el.style.width = 0;
                if (this.active) {
                    el.style.transition = "all " + this.activeTime / 1000 + "s";
                }
            },
            afterAppear(el) {
                var self = this;
                if (self.active && self.showInfo) {
                    var percentTime = setInterval(function() {
                        if (self.percentText == self.percent) {
                            clearInterval(percentTime)
                        } else {
                            self.percentText++;
                        }
                    }, self.activeTime / self.percent)
                } else {
                    self.percentText = self.percent;
                }
                el.style.width = this.percent + "%";
            }
        }
    }
</script>
<style>
    .h-middle {
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-pack: center;
        box-pack: center;
    }

    .v-middle {
        -webkit-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        align - items: center;
    }

    .v_progress {
        width: 100%;
        background-color: #eee;
        border-radius: 4px;
    }

    .v_progress_text {
        margin-left: 15px;
    }

    .flex-wrp {
        display: -webkit-box;
        display: box;
        display: -webkit-flex;
        display: flex;
    }
</style>
