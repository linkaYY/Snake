/**
 * 所有与游戏逻辑有关的代码
 * create by wlk  at  2018/05/10
 */


;(function ( w ) {


    //构建游戏对象函数
    var that;
    function Game ( map ) {
        this.food = new Food();
        this.snake = new Snake();
        this.map= map;
        that=this;
    }
    Game.prototype.start=function (  ) {
        this.food.render(this.map)
        this.snake.render(this.map)

        //调用蛇移动方法
        //调用蛇自动移动方法
        moveAuto()
        binkKey()
    }
    
    //蛇自动移动方法
    function moveAuto (  ) {
        var timeId = setInterval(function (  ) {
            this.snake.snakeMove(this.food,this.map);

        //获取蛇头坐标
            var snakeHeadX = this.snake.body[0].x*this.snake.width;
            var snakeHeadY = this.snake.body[0].y*this.snake.height;
            //判断撞墙
            if ( snakeHeadX >= map.offsetWidth || snakeHeadX <-1 || snakeHeadY >= map.offsetHeight || snakeHeadY < -1) {
                alert("GAME OVER")
                clearInterval(timeId);
                timeId = null
            }
             if (timeId !=null) {
                this.snake.render(this.map);
            }
        }.bind(that),200)
    }

    //根据按键来改变蛇的方向
    function binkKey (  ) {
        window.onkeydown = function (ev) {
            ev = ev || window.event;
            switch (ev.keyCode) {
                case 37:
                    if ( this.snake.direction != "right" ) {
                        this.snake.direction = "left"
                    }
                    break;
                case 38:
                    if ( this.snake.direction != "bottom" ) {
                        this.snake.direction = "top"
                    }
                    break;
                case 39:
                    if ( this.snake.direction != "left" ) {
                        this.snake.direction = "right"
                    }
                    break;
                case 40:
                    if ( this.snake.direction != "top" ) {
                        this.snake.direction = "bottom"
                    }
                    break;
            }
        }.bind(that);
    }


    w.Game = Game
}(window))