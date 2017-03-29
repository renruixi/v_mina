import Vue from "vue"


const smyToastConstructor = Vue.extend(require("./toast.vue"))


smyToastConstructor.prototype.remove = function(){
    this.$el.addEventListener("transitionend", function(event){
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
    })
    this.closed = true;
}


let root = new smyToastConstructor({
    el:document.createElement("div")
});


let smyToast = (options = {})=>{
    root.closed =false;
    root.text = options.text;
    root.position = options.position;
    root.duration = options.duration || 3000;
    clearTimeout(root.timer)

    document.body.appendChild(root.$el);

    root.timer = setTimeout(function(){
        if(root.closed){
            return;
        }
        root.remove();
    }, root.duration)


    return root;
}

export default smyToast
