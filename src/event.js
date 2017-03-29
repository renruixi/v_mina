function Events(type, target, currentTarget, detail) {
  this.type = options.type;
  this.timeStamp = Date.now();
  this.rootTarget = target;
  this.srcTarget = currentTarget;
}

Events.prototype.currentTarget = function () {
  return {
    id: this.srcTarget.$el.id,
    dataset: this.srcTarget.$el.dataset,
  }
};

Events.prototype.target = function () {
  return {
    id: this.srcTarget.$el.id,
    dataset: this.srcTarget.$el.dataset,
  }
};


Events.prototype.detail = function () {

};
