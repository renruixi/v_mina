import Vue from "vue"

const noticeConstructor = Vue.extend(require("./baseNotice.vue"))

noticeConstructor.prototype.close = function(){
    this.show = false;
    this.$el.addEventListener("transitionend", function(event){
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
    })
}


let root = new noticeConstructor({
    el:document.createElement("div")
})



let smyNotice = (options = {}) =>{
    root.show = true;
    root.title = options.title || "提示";
    root.message = options.message || "";
    root.cancelHide = options.cancelHide || false;
    root.cancelValue = options.cancelValue || "取消";
    root.cancelFunc - options.cancelFunc || function(){};
    root.okValue = options.okValue || "确定";
    root.okFunc = options.okFunc || function(){};
    root.callback = options.callback || function(){};
    document.body.appendChild(root.$el);

    return root;
}



smyNotice.confirm = function(options = {}){
    return smyNotice(options)
};

smyNotice.alert = (options={})=>{
    options.cancelHide = true;
    return smyNotice(options)
}

smyNotice.close = function(){
    return root.close();
}


export default smyNotice;




