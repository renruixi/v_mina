<template>
    <div class="m_input_container">
        <input :class="mInputClass"
               :type="type"
               :name="name"
               :value="currentValue"
               :placeholder="placeholder"
               :disabled="disabled"
               :focus="focus"
               :maxlength="maxlength"
               :minlength="minlength"
               ref="m_input"
               @input="onInput"
               @focus="onFocus"
               @blur="onBlur"
               @keyup="onKeyup" />
        <img :class="clearBtnClass"
             @click="clearInput"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkZGM0UwRjA3QkZCMTFFNUE0QTVBQzhGRkVEMTg4NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkZGM0UwRjE3QkZCMTFFNUE0QTVBQzhGRkVEMTg4NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RkYzRTBFRTdCRkIxMUU1QTRBNUFDOEZGRUQxODg0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RkYzRTBFRjdCRkIxMUU1QTRBNUFDOEZGRUQxODg0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsUqb/kAAAJeSURBVHjavJc/SBxBFMbHNYpiPG1UEFIkHjYBlTQ2KfzTiKYLhlhHsbYwSipLvUaLVGLAygQ0qdSzESMY0oksUQI5SRcVGz2jEaLg9+Q7ONedndnbu3vw45a7mfd9x8x7O1OSTCaVZTwEfaATtIHHoIa/nYLfYAdsgBXw1ybpA4sxcTAGBkCVZkw9aQfD4Bx8BFMgFZTcCfitAkyCXTAYIO4XVZyzSxMVYQ00ge/85+Uq95C5b5krbmvgGfjGdc5XSK4t5g40IC7XQIPKfzQwd1xnoBIsgTpVuJDcn6l1z8AEaFWFjxZq3TEgm25EFS9GMkuRMTAOygyT/oAO8NMwbhFcG8aUUfPWQDWbjElcOuAm6AowIWX7ij3AZOK1aIuBXosmI8mu+HygMSHiCT7Pgy8WzapXDHRbrNkj8BU80ZjIFldsPv0Websd7koVwcSwj/iUbUU4rAAVwcRsjuK31ScGYiFLKGPCO+9NSHGJmJNjHb8Hac93qxYl6vsySoec491wMUN1BEVaDOxHEB8FPwKqwxT7YsCNIJ7QbMxOSxOuGFiPIK6rjkOWpynWHW6ec8PAmgBxPxPNYMGQ80K05VB6Bj6xjHTxjp8nGnGviVLQaDAgh9azEh7L5dW4Z/FGzFf8B0/Br0wfkKPzdBHPAzMi7ncicosg7vqdiCT+gZfguIDix9S40J2KZSl6wFEBxI+YO2W6F2yD53leDpc5t21vRine8xLcsVF2e4K5UmHvhpfsgFIuc9nrZhGynz5w7hhz5Xw7lnIZ4lH6hed6XpvVoLKv58u21/MbAQYA0NiOXuAfWNcAAAAASUVORK5CYII=" />
    </div>
</template>
<script>
export default {
    name: "mInput",
    props: {
        type: {
            type: String,
            default: "text"
        },
        pattern: {
            type: RegExp
        },
        disabled: {
            type: [Boolean, String],
            default: false
        },
        value: {
            type: [String, Number]
        },
        name: {
            type: String,
        },
        maxlength: {
            type: Number,
            required: false,
        },
        minlength: {
            type: Number,
            required: false,

        },
        placeholder: {
            required: false,
            type: String
        },
        focus: {
            required: false,
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            currentValue: this.value,
            clearBtnShow: false,
            passValid: false
        }
    },
    computed: {
        clearBtnClass() {
            return {
                "m_clearinput": true,
                "m_hide": !this.clearBtnShow
            }
        },
        mInputClass() {
            return {
                "m_input": true,
                "error": !this.passValid
            }
        }
    },
    watch: {
        value(val, oldValue) {
            this.setCurrentValue(val);
        }
    },
    methods: {
        setCurrentValue(val) {
            this.currentValue = val;
        },
        clearBtnStatus(event) {
            let value = event.target.value;
            if (value !== "" && value.length >= 1) {
                this.clearBtnShow = true;
            } else {
                this.clearBtnShow = false;
            }
        },
        clearInput() {
            this.currentValue = "";
            this.clearBtnShow = false;
        },
        onInput(event) {
            let value = event.target.value;
            let maxLen = this.maxlength;
            if (value.length >= maxLen) {
                this.setCurrentValue(value.substring(0, maxLen))
            } else {
                this.setCurrentValue(value)
            }

            this.$emit("input", event);
        },
        onBlur(event) {
            this.valid(event)
            this.$emit("blur", event)
        },
        onKeyup(event) {
            this.clearBtnStatus(event);
            this.$emit("keyup", event);
        },
        onFocus(event) {
            this.clearBtnStatus(event)
            this.$emit("focus", event)
        },
        valid(event) {
            let value = event.target.value;
            if (this.pattern && !this.pattern.test(value)) {
                this.passValid = false;
            } else if (value.length > this.maxlength || value.length < this.minlength) {
                this.passValid = false;
            } else {
                this.passValid = true;
            }
            return false;
        }
    }
}
</script>
<style>
.m_hide {
    display: none!important;
}

img.m_clearinput {
    width: 16px;
    height: auto;
    position: absolute;
    right: .4rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}


.m_input_container input {
    border: none;
    outline: 0;
    display: inline-block;
    -webkit-appearance: none;
}

.m_input_container .m_input {
    height: 1.17rem;
    line-height: 1.17rem;
    position: relative;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #d8d8d8;
    background-color: #f6f6f6;
    font-size: 15px;
    color: #404040;
    padding: 0 15px;
    box-sizing: border-box;
}
</style>