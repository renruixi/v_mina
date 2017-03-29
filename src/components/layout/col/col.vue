<template>
    <div :class="['smy-col', colClass]" :style={colStyle}>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SmyCol",
        props: {
            grid: {
                type: Number,
                default: 20
            },
            gutter: {
                type: [Number]
            },
            xs: {
                type: [Number]
            },
            sm: {
                type: [Number]
            },
            md: {
                type: [Number]
            },
            lg: {
                type: [Number]
            },
            offset: {
                type: [Number]
            }
        },
        computed: {
            colClass() {
                var ret = [];
                ["grid", "offset"].forEach(size => {
                    if (this[size]) {
                        if (size !== "grid") {
                            ret.push(`smy-col-${size}-${this[size]}`);
                        } else {
                            ret.push(`smy-col-${this[size]}`);
                        }
                    }
                });
                ["xs", "sm", "md", "lg"].forEach(size => {
                    if (typeof this[size] === 'number') {
                        ret.push(`smy-col-${size}-${this[size]}`);
                    }
                });
                return ret;
            },
            colStyle() {
                var ret = {};
                if (this.gutter) {
                    ret.paddingLeft = ret.paddingRight = this.gutter + 'px';
                }
                return ret;
            }
        }
    }
</script>

<style scoped lang="scss">
    .smy-col {
        border-radius: 4px;
    }
    
    @for $i from 1 through 20 {
        .smy-col-#{$i} {
            float: left;
            box-sizing: border-box;
            width: (1 / 20 * $i * 100%);
        }
        .smy-col-offset-#{$i} {
            margin-left: (1 / 20 * $i * 100%);
        }
    }
    
    @media (max-width: 768px) {
        @for $i from 1 through 20 {
            .smy-col-xs-#{$i} {
                width: (1 / 20 * $i * 100%);
            }
            .smy-col-xs-offset-#{$i} {
                margin-left: (1 / 20 * $i * 100%);
            }
        }
    }
    
    @media (min-width: 768px) {
        @for $i from 1 through 20 {
            .smy-col-sm-#{$i} {
                width: (1 / 20 * $i * 100%);
            }
            .smy-col-sm-offset-#{$i} {
                margin-left: (1 / 20 * $i * 100%);
            }
        }
    }
    
    @media (min-width: 992px) {
        @for $i from 1 through 20 {
            .smy-col-md-#{$i} {
                width: (1 / 20 * $i * 100%);
            }
            .smy-col-md-offset-#{$i} {
                margin-left: (1 / 20 * $i * 100%);
            }
        }
    }
    
    @media (min-width: 1200px) {
        @for $i from 1 through 20 {
            .smy-col-lg-#{$i} {
                width: (1 / 20 * $i * 100%);
            }
            .smy-col-lg-offset-#{$i} {
                margin-left: (1 / 20 * $i * 100%);
            }
        }
    }
</style>