class Player{
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;    
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",data => {
            allPlayer = data.val()
        } )
    }
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })

    }
    update(name){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            'name':this.name,
            'distance':this.distance
        })
    }
}