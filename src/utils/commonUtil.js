function getStylebase(elem, style) {
    if (elem.currentStyle) {
        return elem.currentStyle[style];
    } else {
        return getComputedStyle(elem, false)[style];
    }
}


export const getStyle = function(elem, style) {
    if (!elem || !style) {
        return;
    }
    switch (style) {
        case "opacity":
            try {
                return elem.filters.item('alpha').opacity / 100;
            } catch (e) {
                return 1.0;
            }
            break;
        default:
            return (elem.style[style] || getStylebase(elem, style));
    }
}