<template>
    <button :class="[buttonCls,typeCls,sizeCls,hoverCls]"
            :type="type"
            @mousedown="_hoverIn"
            @mouseup="_hoverLeave"
            :disabled="disabled"
            :plain="plain"
            :size="size">
        <i class="button_loading_wp"
           v-if="loading">
            <svg id="svgForStroke" class="button_loading" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="40%" stroke-width="1"></circle>
            </svg> 
        </i>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "mButton",
    props: {
        size: {
            type: String,
            default: "default"
        },
        type: {
            type: String,
            default: "default",
        },
        plain: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        "hover-class": {
            type: String,
            default: "button-hover"
        },
        "hover-start-time": {
            type: Number,
            default: 20
        },
        "hover-stay-time": {
            type: Number,
            default: 70
        }
    },
    data() {
        return {
            isHovered: false,
            hoverLeaveTimer: null,
            hoverLeaveTimer: null,
            sizeCls() {
                return "m_button_" + this.size
            },
            typeCls() {
                return "m_button_" + this.type
            },
        }
    },
    computed: {
        buttonCls() {
            return {
                "m_button": true,
                "button-hover": this.isHovered,
                "m_button_disabled": this.disabled
            }
        },
        hoverCls() {
            return this.isHovered ? this.hoverClass : ""
        }
    },
    methods: {
        _hoverIn() {
            clearTimeout(this.hoverLeaveTimer)
            var self = this;
            self.hoverInTimer = setTimeout(function () {
                self.isHovered = true;
            }, self.hoverStartTime)
        },
        _hoverLeave() {
            clearTimeout(this.hoverInTimer)
            var self = this;
            self.hoverLeaveTimer = setTimeout(function () {
                self.isHovered = false;
            }, self.hoverStayTime)
        }
    }
}
</script>
<style>
.m_button {
    position: relative;
    display: block;
    text-align: center;
    overflow: hidden;
    width: 100%;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding-left: 14px;
    padding-right: 14px;
    line-height: 2.6;
    font-size: 18px;
    border: none;
    outline: none;
}

button.m_button[type="default"] {
    color: #000000;
    background-color: #F8F8F8;
}

button.m_button[type="primary"] {
    color: #FFFFFF;
    background-color: #1AAD19;
}

button.m_button[type="warn"] {
    color: #FFFFFF;
    background-color: #E64340;
}

button.m_button::after {
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: 10px;
}


button.m_button[disabled] {
    color: rgba(255, 255, 255, 0.6);
}

button.m_button[disabled][type="primary"] {
    background-color: #9ED99D;
}

button.m_button[disabled][type="warn"] {
    background-color: #EC8B89;
}

button.m_button[disabled][type="default"] {
    color: rgba(0, 0, 0, 0.3);
    background-color: #F7F7F7;
}


button.m_button[plain] {
    color: #353535;
    border: 1px solid #353535;
    background-color: transparent;
}


button.m_button[plain][type="primary"] {
    color: #1aad19;
    border: 1px solid #1aad19;
    background-color: transparent;
}

button.m_button[plain][type="warn"] {
    color: #e64340;
    border: 1px solid #e64340;
    background-color: transparent;
}

button.m_button[plain][type="default"] {
    color: #353535;
    border: 1px solid #353535;
    background-color: transparent;
}


button.m_button[plain][disabled] {
    color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
}

button.m_button[plain][disabled][type="warn"] {
    color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
}

button.m_button[plain][disabled][type="primary"] {
    color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
}

button.m_button[plain][disabled][type="default"] {
    color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.2);
}



button.m_button[loading][type="primary"] {
    color: rgba(255, 255, 255, 0.6);
    background-color: #179B16;
}

button.m_button[loading][type="warn"] {
    color: rgba(255, 255, 255, 0.6);
    background-color: #CE3C39;
}



button.m_button[size="mini"] {
    width: auto;
    display: inline-block;
    line-height: 2.3;
    font-size: 13px;
    padding: 0 1.34em;
}

.m_button[size="mini"] .button_loading_wp {
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    vertical-align: middle;
}

.m_button .button_loading_wp {
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
}

.m_button .button_loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    stroke-dasharray: 1%, 300%;
    stroke-dashoffset: 0%;
    stroke: #ED6E5C;
    stroke-linecap: round;
    fill: none;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    animation: buttonLoading 3s linear infinite;
    -webkit-animation: buttonLoading 3s 0 linear infinite;
}

@-webkit-keyframes buttonLoading {
    0% {
        stroke-dasharray: 0%, 250%;
        stroke-dashoffset: 0%;
    }
    50% {
        stroke-dasharray: 250%, 250%;
        stroke-dashoffset: 0%;
    }
    100% {
        stroke-dasharray: 250%, 250%;
        stroke-dashoffset: -250%;
    }
}

@keyframes buttonLoading {
    0% {
        stroke-dasharray: 0%, 250%;
        stroke-dashoffset: 0%;
    }
    50% {
        stroke-dasharray: 250%, 250%;
        stroke-dashoffset: 0%;
    }
    100% {
        stroke-dasharray: 250%, 250%;
        stroke-dashoffset: -250%;
    }
}
</style>