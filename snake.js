/**
 * 所有和蛇有关的代码
 * create by wlk  at  2018/05/10
 */

;(function ( w ) {


    //随机产生一个十六进制的颜色的函数.
    function getColorForRandom(){
        var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];  //下标0-15
        var str = "#";
        //循环产生 6个 0-15的数.
        for(var i = 0 ; i < 6; i++){
            var num = Math.floor(Math.random()*16);
            //根据这个随机数,在arr数组中去取值.
            str += arr[num];
        }
        return str;
    }

    //构建蛇对象函数
    function Snake ( width,height,dicration ) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = dicration || "right"
        this.body = [
            {x:3,y:1,bgColor:"red"},
            {x:2,y:1,bgColor:"yellow"},
            {x:1,y:1,bgColor:"blue"}
        ]
    }

    //声明一个空数组来保存蛇的每一节
    var list = [];

    //让蛇显示在map上
    Snake.prototype.render = function ( ) {
        removeSnake(map)
        for ( var i = 0 ; i < this.body.length ; i++) {
            //声明一个变量来保存蛇的每一节
            var unit = this.body[i];
            var snakes = document.createElement("div");
            snakes.style.position = "absolute";
            snakes.style.width = this.width + "px";
            snakes.style.height = this.height +"px";
            snakes.style.left = unit.x*this.width +"px";
            snakes.style.top = unit.y*this.height+"px";
            snakes.style.backgroundColor = unit.bgColor;
            map.appendChild(snakes);
            //把每一节存进数组
            list.push(snakes);
        }
    }

    Snake.prototype.snakeMove = function ( food,map ) {
        //蛇身移动,后一节的坐标索引设置为前一节

        for ( var i = this.body.length-1 ; i > 0 ; i--) {
            this.body[i].x = this.body[i-1].x
            this.body[i].y = this.body[i-1].y
        }
        //蛇头移动
        switch (this.direction) {
            case "top":
                this.body[0].y--;
                break;
            case "bottom":
                this.body[0].y++;
                break;
            case "left":
                this.body[0].x--;
                break;
            case "right":
                this.body[0].x++;
                break;
        }

        //吃一个长一节身体
        //保存最后一节
        var lastSnake = this.body[this.body.length-1]
        //蛇头的坐标
        var snakeHeadX = this.body[0].x * this.width;
        var snakeHeadY = this.body[0].y * this.height;
        //食物的坐标
        var foodX = food.x;
        var foodY = food.y;

        //测试食物和蛇头坐标
        // console.log("snakeHeadX----------"+snakeHeadX);
        // console.log("snakeHeadY----------"+snakeHeadY);
        // console.log("foodX----------"+foodX);
        // console.log("foodY----------"+foodY);

        if (  snakeHeadX==foodX && snakeHeadY==foodY) {
            //加一节

            this.body.push({
                x:lastSnake.x,
                y:lastSnake.y,
                bgColor:getColorForRandom()
            });
            console.log(this.body);
            food.render(map);
        }
    }
    
    function removeSnake ( map ) {
        for ( var i = 0 ; i < list .length ; i ++) {
            map.removeChild(list[i])
        }
        //清空数组
        list=[];
    }


    w.Snake = Snake;

}(window))