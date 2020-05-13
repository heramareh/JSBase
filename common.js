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