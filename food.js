/**
 * 所以与食物有关的代码
 * create by wlk  at  2018/05/10
 */

;(function ( w ) {

    //构建食物对象
    function Food ( width,height,bgColor,x,y ) {
        this.width = width || 20;
        this.height = height || 20;
        this.bgColor = bgColor || "green";
        this.x = x || 0;
        this.y = y || 0;
    }


    //声明一个数组来保存食物
    var list = [];

    //将食物显示在map里
    Food.prototype.render = function ( map ) {
        removeFood(map)
        this.x = Math.floor(Math.random()*map.offsetWidth/this.width)*this.width;
        this.y = Math.floor(Math.random()*map.offsetHeight/this.height)*this.height;
        var foods = document.createElement("div");
        foods.style.position = "absolute"
        foods.style.width = this.width+"px";
        foods.style.height = this.height+"px";
        foods.style.backgroundColor = this.bgColor;
        foods.style.top = this.y + "px";
        foods.style.left = this.x + "px";
        map.appendChild(foods)
        //把食物装进数组
        list.push(foods)
    }
    
    function removeFood ( map ) {
        for ( var i = 0 ; i < list .length ; i ++) {
            map.removeChild(list[i])
        }
        list = [];
    }




    w.Food = Food;
}(window))