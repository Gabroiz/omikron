var bootState = {
    preload: function(){
        game.load.image("progressBar", "media/jogo/img/progressBar.png");
    },
    
    create : function(){
        game.state.start("load");
    }
};