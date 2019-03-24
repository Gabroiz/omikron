var menuState = {
    create: function(){
        var txtGame = game.add.text(game.world.centerX,200,"Omikron",{font:"80px Arial",fill:"#fff"});
            txtGame.anchor.set(.5);
        
        var txtStart = game.add.text(game.world.centerX, 700,"Press Start",{font:"40px Arial",fill:"#fff"});
            txtStart.anchor.set(.5);
        
        game.add.tween(txtStart).to({y:300},1000).start();
        
        game.time.events.add(1000,function(){
            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
                enterKey.onDown.addOnce(this.starGame,this);
        },this);
    },
    
    starGame: function(){
        game.state.start("fase1");
    }
};