var loadState = {
    preload: function(){
        var loading = game.add.text(game.world.centerX,330,"Carregando...",{font:"15px Arial",fill:"#fff"});
            loading.anchor.set(.5);
        
        var progressBar = game.add.sprite(game.world.centerX,350,"progressBar");
            progressBar.anchor.set(.5);
        game.load.setPreloadSprite(progressBar);
        
        game.load.image("bg","Img/jogo/background.png");
        game.load.image("enemy","jogo/img/enemy.png");
        game.load.image("player","Img/jogo/ship.png");
        game.load.image("shoot","Img/jogo/shoot.png");
        game.load.image("enemy2","Img/jogo/enemy2.png");
        
        //game.load.audio("shootSfx","media/jogo/sfx/shoot.ogg");
        //game.load.audio("hitSfx","media/jogo/sfx/hit.ogg");
        //game.load.audio("dieSfx","media/jogo/sfx/playerDie.ogg");
        //game.load.audio("killSfx","media/jogo/sfx/enemyDie.ogg");
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var bullet;
        var bullets;
        var bulletTime = 0;
    },
    
    create: function(){
        game.state.start("menu");
    }
};