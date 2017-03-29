import Vue from "vue"


const smyLoadingContrutor = Vue.extend(require("./loading.vue"))

smyLoadingContrutor.prototype.close = function(){
    this.show = false;
    this.$el.addEventListener("transitionend", function(event){
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
    })
}

let root = new smyLoadingContrutor({
    el:document.createElement("div")
})

//root不接受 body html元素的挂载




let smyLoading = (options={}) =>{
    root.show = true;
    root.message = options.message;

    document.body.appendChild(root.$el)

    return root;
}


smyLoading.close = function(){
    return root.close()
}

export default smyLoading;
