
/******************排序算法*******************************/
/**
 生成record
 @param arr 待排序数组
 */
function createRecord(arr){
    let record = [], len = arr.length;
    for(let i=0; i< len; i++){
        record[i] = {
            "data" : arr[i],
            "index" : i,
        };
    }
    return record;
}
/***************************************************************/
/**
 设置演示用的dom的样式
 @param doms dom对象
 @param arr 待排序数组
 */
function domStyle(doms,arr){
    const MAX = 255;
    const MIN = 0;
    for(let i = 0,len = doms.length; i < len; i++){
        /*颜色随机生成*/
        let r = Math.floor(Math.random()*(MAX-MIN+1) + MIN);
        let g = Math.floor(Math.random()*(MAX-MIN+1) + MIN);
        let b = Math.floor(Math.random()*(MAX-MIN+1) + MIN);
        doms[i].innerText = arr[i];
        let startColor = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0 + ")";
        let endColor = "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
        doms[i].style.background = "radial-gradient(circle at 50% 50%,"+startColor+","+ endColor+")";
        reset(doms);
    }
}
/**
 重置
 @param doms
 */
function reset(doms){
    let w = doms[0].offsetWidth;
    for(let i=0,len=doms.length; i<len; i++){
        doms[i].style.left = w * i + "px";
    }
}
/**
 生成完全二叉树样式
 @param doms 球体数组
 */
function createTree(arr){
    var pdom=document.getElementById("domTree");
    for(var i=0;i<arr.length;i++){
        var pdiv = document.createElement("div");
        var cdiv=document.createElement("div");
        pdiv.setAttribute("class","bubble");
        cdiv.setAttribute("class","shadow");
        pdiv.appendChild(cdiv);
        pdom.appendChild(pdiv);
    }
}
/**
 演示
 @param doms 演示用的dom对象
 @param arr states数组对象
 @param btn 对应按钮
 */
function domOpera(doms,arr,btn){
    let i = 0,len = arr.length;
    btn.setAttribute("disabled","disabled");
    /*console.log(arr);*/
    /*
    for(let i = 0; i<arr.length; i++){
        timeout(i);
    }*/
function timeout(){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            let tempLeft = doms[arr[i].first].style.left;
            //doms[arr[i].first].style.transform = "translateX(" + doms[arr[i].second].style.left + ")";
            doms[arr[i].first].style.left = doms[arr[i].second].style.left;
            doms[arr[i].second].style.left = tempLeft;
            i++;
            if(i<len) timeout();
            else{
                timer = setTimeout(function(){
                    /*reset(doms);*/
                    btn.removeAttribute("disabled");
                },2000);
            }
        },1000);
    }
    timeout();
}
/*随机生成数组*/
this.arr=[];
function  createArr(num){
    let arr = this.arr;
    arr.length = 0;
    this.arrLen = num || this.arrLen;
    for (let i = 0; i < this.arrLen; i++) {
        let num=Math.random()*100;
        arr.push(Math.floor(num));
    }
    this.createTree(arr);
}
/*获取输入数组*/
function getArray(){
    let array = document.getElementById("array");
    let arr_template= array.value.split(',');
    let arr=this.arr;
    for(let i=0;i<arr_template.length;i++){
        arr.push(Number(arr_template[i]));
    }
    this.createTree(arr);
}
