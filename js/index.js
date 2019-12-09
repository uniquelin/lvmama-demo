window.onload = function () {
    /*let city = document.querySelector(".city");
    let searchCityB = document.querySelector(".search-city>b");
    city.innerHTML = returnCitySN["cname"];
    searchCityB.innerHTML = returnCitySN["cname"];*/

    let cityDown = document.querySelector(".city-down");
    let jsonObj = initCityDate();
    let html = template("cities", jsonObj);
    cityDown.innerHTML = cityDown.innerHTML + html;
    // 初始广告栏
    adOpen();
    // 监听城市切换按钮
    cityActive();
    // 关闭广告栏
    adClose();
    // 初始化搜索框
    initSearch();
    // 初始化头部子导航栏
    initDownNav();
    // 初始化banner
    initBannerTap();
    // initBanner();
    changeBanner();
    initBannerTab();
    // 初始化秒杀区
    initSeckill();
    // 初始化楼层菜单
    initFloorMenu();
};

function initSearch() {
    let inpText = document.querySelectorAll(".search-text");
    let initText1 = "请输入目的地、主题、或关键词";
    let initText2 = "请输入目的地、主题或景区";
    for (let i=0; i<inpText.length; i++) {
        let item = inpText[i];
        item.index = i;
        item.onfocus = function () {
            if (this.value === initText1 || this.value === initText2) {
                this.value = "";
            }
            this.style.color = "#333";
        };
        item.onblur = function () {
            if (this.value.length === 0) {
                if (item.index === 1) {
                    this.value = "请输入目的地、主题或景区";
                } else {
                    this.value = "请输入目的地、主题、或关键词";
                }
                this.style.color = "#bbb";
            }
        }
    }
}

function initCityDate() {
    let jsonStr = '{\n' +
        '  "cities": [\n' +
        '    {\n' +
        '      "area": "华北",\n' +
        '      "list": [\n' +
        '        "北京",\n' +
        '        "天津",\n' +
        '        "太原",\n' +
        '        "唐山",\n' +
        '        "呼和浩特",\n' +
        '        "包头",\n' +
        '        "石家庄",\n' +
        '        "呼伦贝尔",\n' +
        '        "大同",\n' +
        '        "济南",\n' +
        '        "青岛",\n' +
        '        "日照",\n' +
        '        "烟台"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "华东",\n' +
        '      "list": [\n' +
        '        "上海",\n' +
        '        "南京",\n' +
        '        "杭州",\n' +
        '        "合肥",\n' +
        '        "厦门",\n' +
        '        "南昌",\n' +
        '        "苏州",\n' +
        '        "无锡",\n' +
        '        "宁波",\n' +
        '        "常州",\n' +
        '        "嘉兴",\n' +
        '        "南通",\n' +
        '        "扬州",\n' +
        '        "镇江",\n' +
        '        "绍兴",\n' +
        '        "温州",\n' +
        '        "金华",\n' +
        '        "台州",\n' +
        '        "盐城",\n' +
        '        "泰安",\n' +
        '        "芜湖",\n' +
        '        "黄山",\n' +
        '        "阜阳",\n' +
        '        "福州",\n' +
        '        "赣州",\n' +
        '        "宜春",\n' +
        '        "婺源",\n' +
        '        "泰州"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "东北",\n' +
        '      "list": [\n' +
        '        "沈阳",\n' +
        '        "大连",\n' +
        '        "哈尔滨",\n' +
        '        "长春",\n' +
        '        "齐齐哈尔",\n' +
        '        "延边"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "华中",\n' +
        '      "list": [\n' +
        '        "武汉",\n' +
        '        "洛阳",\n' +
        '        "张家界",\n' +
        '        "长沙",\n' +
        '        "郑州",\n' +
        '        "焦作",\n' +
        '        "宜昌",\n' +
        '        "神农架",\n' +
        '        "南阳"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "华南",\n' +
        '      "list": [\n' +
        '        "广州",\n' +
        '        "深圳",\n' +
        '        "南宁",\n' +
        '        "桂林",\n' +
        '        "海口",\n' +
        '        "三亚",\n' +
        '        "珠海",\n' +
        '        "清远",\n' +
        '        "东莞"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "西南",\n' +
        '      "list": [\n' +
        '        "成都",\n' +
        '        "重庆",\n' +
        '        "昆明",\n' +
        '        "丽江",\n' +
        '        "大理",\n' +
        '        "西双版纳",\n' +
        '        "香格里拉",\n' +
        '        "贵阳",\n' +
        '        "拉萨",\n' +
        '        "九寨沟",\n' +
        '        "西昌"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "西北",\n' +
        '      "list": [\n' +
        '        "西安",\n' +
        '        "银川",\n' +
        '        "西宁",\n' +
        '        "乌鲁木齐",\n' +
        '        "兰州",\n' +
        '        "嘉峪关",\n' +
        '        "榆林",\n' +
        '        "延安",\n' +
        '        "喀什",\n' +
        '        "喀纳斯"\n' +
        '      ]\n' +
        '    },\n' +
        '    {\n' +
        '      "area": "港澳台",\n' +
        '      "list": [\n' +
        '        "中国香港",\n' +
        '        "中国澳门"\n' +
        '      ]\n' +
        '    }\n' +
        '  ]\n' +
        '}';

    return JSON.parse(jsonStr);
}

function cityActive() {
    $(".city-btn").on("click", function (event) {
        let e = event || window.event;
        if ($(".city-box").hasClass("city-active")) {
            $(".city-box").removeClass("city-active");
        } else {
            $(".city-box").addClass("city-active");
        }
        e.stopPropagation();

        // console.log(document.querySelector(".city-box").className.includes("city-active"));  // includes 判断该字符串中是否包指定字符串
    });
    $(window).on("click", function () {
        $(".city-box").removeClass("city-active");
    })
}

function adOpen() {
    $(".ad-box").animate({height: "60px"}, 1000);
    $(".ad-main").css("display", "block");
}

function adClose() {
    $(".ad-close").on("click", function () {
        $(".ad").animate({height: "0px"}, 1000, function () {
            $(".ad").css("display", "none");
        });
    })
}

function initDownNav() {
    // 获取网页的宽度
    let screenX = getScreen().width - 17;
    // 鼠标移入移出时间
    $(".nav-menu").hover(function () {
        // 鼠标移入添加class
        $(this).addClass("hover_this");
        // 设置宽度
        $(this).children(".down-nav").css("width", screenX + "px");
        // 设置左偏移位置
        let navOffsetX = $(this).offset().left;
        $(this).children(".down-nav").css("left", -navOffsetX + "px");
        // 设置p元素左偏移位置
        let offsetX = navOffsetX + $(this).width() / 2;
        let pWidth = Math.floor($(this).find("p").width());
        let pLeft = Math.floor(offsetX - (pWidth * 0.5));
        let navBoxOffsetX = $(".nav-box").offset().left;
        // 判断
        if ($(this).index() === 1) {
            // 如果是第一个
            $(this).find("p").css("left", navBoxOffsetX + "px");
        } else {
            $(this).find("p").css("left", pLeft + "px");
        }
        // 设置span元素左偏移位置
        let sLeft = offsetX - $(this).find("span").width() / 2;
        $(this).find("span").css("left", sLeft + "px");
    }, function () {
        // 鼠标移出删除class
        $(this).removeClass("hover_this");
    })
}

let barImages = document.querySelectorAll(".banner-box>li");
function initBannerTap() {
    let barTap = document.querySelector(".banner-tap");
    for (let i=0; i<barImages.length; i++) {
        let oLi = document.createElement("li");
        barTap.appendChild(oLi);
    }
    // barTap.children[0].className = "active";
}
/*function initBanner() {
    let timeId = changeBanner();
    let banner = document.querySelector(".banner");
    banner.onmouseenter = function () {
        clearInterval(timeId);
    };
    banner.onmouseleave = function () {
        timeId = timeId();
    }
}*/
function changeBanner() {
    let barLis = document.querySelectorAll(".banner-tap>li");
    let currentImg = barImages[0];
    let currentTap = barLis[0];
    currentImg.style.opacity = "1";
    currentTap.className = "active";

    for (let i=0; i<barLis.length; i++) {
        let item = barLis[i];
        item.index = i;
        item.onmouseenter = function () {
            currentTap.className = "";
            this.className = "active";
            currentTap = this;

            currentImg.style.opacity = "0";
            barImages[this.index].style.opacity = "1";
            currentImg = barImages[this.index];
        }
    }

    // 创建定时器
    let currentIndex = 0, timeId;
    function timer() {
        timeId = setInterval(function () {
        currentImg.style.opacity = "0";
        currentTap.className = "";
        currentIndex++;
        if (currentIndex === barImages.length) {
            currentIndex = 0;
        }
        barImages[currentIndex].style.opacity = "1";
        currentImg = barImages[currentIndex];

        barLis[currentIndex].className = "active";
        currentTap = barLis[currentIndex];
    }, 4000);}
    // return timeId;
    timer();
    let barBox = document.querySelector(".banner-box");
    barBox.onmouseenter = function () {
        clearInterval(timeId);
    };
    barBox.onmouseleave = function () {
        timer();
    }
}

function initBannerTab() {
    let tabLis = document.querySelectorAll(".tab>li");
    let tabList = document.querySelectorAll(".list");
    let currentLi = tabLis[0];
    let currentList = tabList[0];
    currentLi.className = "active";
    currentList.style.display = "block";
    // 监听选项卡点击事件
    for (let i=0; i<tabLis.length; i++) {
        let item = tabLis[i];
        item.index = i;
        item.onclick = function () {
            currentLi.className = "";
            this.className = "active";
            currentLi = this;

            currentList.style.display = "none";
            tabList[item.index].style.display = "block";
            currentList = tabList[item.index];
        }
    }

    let oLis = document.querySelectorAll(".list-nav>li");
    let input = document.querySelectorAll(".list-search>li");
    let initLi = oLis[0];
    let initInp = input[0];
    initLi.className = "active";
    initInp.style.display = "block";
    for (let i=0; i< oLis.length; i++) {
        let item = oLis[i];
        item.index = i;
        item.onclick = function () {
            initLi.className = "";
            this.className = "active";
            initLi = this;

            initInp.style.display = "none";
            input[item.index].style.display = "block";
            initInp = input[item.index];
        }
    }
}

function initSeckill() {
    let lis = document.querySelectorAll(".seckill-tab>li");
    let currentLi = lis[0];
    currentLi.className = "active";
    for (let i=0; i<lis.length; i++) {
        let item = lis[i];
        item.onmouseenter = function () {
            currentLi.className = "";
            this.className = "active";
            currentLi = this;
        }
    }
}

function initFloorMenu() {
    let navLeft = document.querySelector(".nav-left");
    let navLis = document.querySelectorAll(".nav-left li");
    let currentLi = navLis[0];
    currentLi.className = "active";
    let seckill = document.querySelector(".seckill");
    let seckillOffsetY = seckill.offsetTop;
    let sections = document.querySelectorAll(".section");
    // 监听网页滚动
    window.onscroll = function () {
        // 获取网页滚动出去的偏移位
        let offsetY = getPageScroll().y + 70;
        // 控制楼层菜单显示
        if (offsetY >= seckillOffsetY) {
            navLeft.style.display = "block";
        } else {
            navLeft.style.display = "none";
        }
        // 控制楼层菜单选中
        for (let i=0; i<sections.length; i++) {
            let section = sections[i];
            let sectionOffsetY = section.offsetTop;
            let item = navLis[i];
            let itemOffsetY = item.offsetTop;
            if (offsetY >= sectionOffsetY - itemOffsetY) {
                currentLi.className = "";
                item.className = "active";
                currentLi = item;
            }
            let lastSection = document.querySelector(".section6");
            let lastOffsetY = lastSection.offsetTop;
            if (offsetY > lastOffsetY - itemOffsetY + 70) {
                navLeft.style.position = "absolute";
                navLeft.style.top = lastOffsetY - itemOffsetY + "px";
            } else {
                navLeft.style.position = "fixed";
                navLeft.style.top = "70px";
            }
        }
    }
    // 监听楼层菜单点击
    for (let i = 0; i < navLis.length; i++) {
        let item = navLis[i];
        item.onclick = function () {
            let section = sections[i];
            let sectionOffsetY = section.offsetTop;
            moveTo(sectionOffsetY - this.offsetTop - 70);
        }
    }
}
let timeId = null;
function moveTo(target) {
    clearInterval(timeId);
    timeId = setInterval(function () {
        let begin = getPageScroll().y;
        let step = (target - begin) * 0.1;
        begin += step;
        if (Math.abs(Math.abs(step)) <= 1) {
            clearInterval(timeId);
            window.scrollTo(0, target);
            return;
        }
        window.scrollTo(0, begin);
    }, 10)

}