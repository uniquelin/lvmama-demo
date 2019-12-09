/**
 * 获取CSS样式
 * @param ele
 * @param attr
 * @returns {string}
 */
function getCSSAttrValue(ele, attr) {
    if (ele.currentStyle) {
        return ele.currentStyle[attr];
    } else {
        return window.getComputedStyle(ele, null)[attr];
    }
}

/**
 * 匀速动画封装
 * @param  ele
 * @param json
 * @param step
 * @param fn
 */
function linearAnimation(ele, json, step, fn) {
    // 清除定时器
    clearInterval(ele.timer);
    // 设置定时器
    ele.timer = setInterval(function () {
        // 创建个旗帜
        let flag = true;
        // 遍历json
        for (let key in json) {
            // 获取起始位置和终点位置
            let begin = parseInt(getCSSAttrValue(ele, key)) || 0;
            let target = json[key];
            // 判断方向
            let dir = (begin - target) > 0 ? -step : step;
            // 计算新的位置
            begin += dir;
            // 判断元素是否到达目标值
            if (Math.abs(target - begin) > Math.abs(dir)) {
                flag = false;
            } else {
                begin = target;
            }
            ele.style[key] = begin + "px";
        }
        // 判断是否都到达终点
        if (flag) {
            // 清楚定时器
            clearInterval(ele.timer);
            // 判断是否有函数
            fn && fn();
        }
    }, 20)
}

/**
 * 缓动动画封装
 * @param ele
 * @param json
 * @param fn
 */
function easeAnimation(ele, json, fn) {
    // 清除定时器
    clearInterval(ele.timer);
    // 设置定时器
    ele.timer = setInterval(function () {
        // 创建个旗帜
        let flag = true;
        // 遍历json
        for (let key in json) {
            // 获取初始位置和终点位置
            let begin = parseInt(getCSSAttrValue(ele, key)) || 0;
            let target = json[key];
            // 记录步长
            let step = (target - begin) * 0.2;
            // 判断是否向上取整
            step = (target > begin) ? Math.ceil(step) : Math.floor(step);
            // 计算新的位置
            begin += step;
            ele.style[key] = begin + "px";
            // 判断
            if (begin !== target) {
                flag = false;
            }

            if (flag) {
                clearInterval(ele.timer);
                fn && fn();
            }
        }
    }, 50)
}

/**
 * 添加事件
 * @param ele
 * @param name
 * @param fn
 */
function addEvent(ele, name, fn) {
    if (ele.attachEvent) {
        ele.attachEvent("on" + name, fn);
    } else {
        ele.addEventListener(name, fn);
    }
}

/**
 * 获取网页的宽度和高度
 * @returns {{width: number, height: number}}
 */
function getScreen() {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode === "CSS1Compat") {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

/**
 * 获取网页滚动的距离
 * @returns {{x: number, y: number}}
 */
function getPageScroll() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else if (document.compatMode === "BackCompat") {
        return {
            x: document.body.scrollLeft,
            y: document.body.scrollTop
        }
    } else {
        return {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        }
    }
}


/**
 * 函数防抖
 * @param fn
 * @param delay
 */
function debounce(fn, delay) {
    let timerId = null;
    return function () {
        let self = this;
        let args = arguments;
        timerId && clearTimeout(timerId);
        timerId = setTimeout(function () {
            fn().apply(self, args);
        }, delay || 1000);
    }
}

/**
 * 函数节流
 * @param fn
 * @param delay
 * @returns {Function}
 */
function throttle(fn, delay) {
    let timerId = null;
    let flag = true;
    return function () {
        if (!flag) return;
        flag = false;
        let self = this;
        let args = arguments;
        timerId && clearTimeout(timerId);
        timerId = setTimeout(function () {
            flag = true;
            fn.apply(self, args);
        }, delay || 1000);
    }
}