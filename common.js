/**
 * 获取指定格式的日期和时间
 * @param dt
 * @returns {string}
 */
function getDate(dt){
    var year = dt.getFullYear();
    var month = dt.getMonth()+1;
    var day = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    month = zifull(month);
    day = zifull(day);
    hour = zifull(hour);
    minute = zifull(minute);
    second = zifull(second);
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

/**
 * 自动补0
 * @param s
 * @returns {string}
 */
function zifull(s){
    return s<10?"0"+s:s;
}

/**
 * 根据id获取元素
 * @param id
 * @returns {HTMLElement}
 */
function my$(id) {
    return document.getElementById(id);
}

/**
 * 设置text
 * @param element
 * @param text
 */
function setInnerText(element, text) {
    if (typeof element.textContent=="undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}

/**
 * 获取元素文本内容
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.textContent=="undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

/**
 * 为任意元素绑定任意事件，兼容ie8
 * @param element
 * @param type
 * @param fnName
 */
function addEventListener(element, type, fnName) {
    if (element.addEventListener) {
        element.addEventListener(type, fnName, false);
    }else if(element.attachEvent) {
        element.attachEvent("on"+type, fnName);
    }else {
        element["on"+type] = fnName;
    }
}

/**
 * 为任意元素解绑任意事件，兼容ie8
 * @param element
 * @param type
 * @param fnName
 */
function removeEventListener(element, type, fnName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    }else if(element.detachEvent) {
        element.detachEvent("on"+type, fnName);
    }else {
        element["on"+type] = null;
    }
}