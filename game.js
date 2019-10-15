class Game{
    constructor(){
    
    }
    async start(){
        if(gamestate===0){
            player=new Player()
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new form();
            form.display()
        }
        c1 = createSprite(100,200)
        c1.addImage("c11",car1_img)
        c2 = createSprite(300,200)
        c2.addImage("c22",car2_img)
        c3 = createsprite(500,200)
        c3.addImage("c33",car3_img)
        c4 = createSprite(700,200)
        c4.addImage("c44",car4_img)
        cars =[c1,c2,c3,c4]
    }
    end(){
        game.update(2)
    }
       play(){
        form.hide()
        textSize(30)
        text("gamestart",120,100)
        Player.getPlayerInfo();
        var index=0;
        var x=175
        var y=0
        if(allPlayer!==undefined){
            var display_position = 130;
            for(var plr in allPlayer){
                index=index+1
                x=x+200
                y = displayHeight-allPlayer[plr].distance
                if(index===player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)

                }
                if(plr==="player"+player.index)
                fill("red")
                else
                fill("black")
                display_position+=20
                textSize(15)
                text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,display_position)
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50
            player.update()
        }
    }
    getState(){
        var gameStateRef=database.ref('gamestate')
        gameStateRef.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
}