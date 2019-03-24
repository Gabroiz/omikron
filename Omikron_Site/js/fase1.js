var fase1State = {
    create: function(){
        game.add.tileSprite(0, 0, game.width, game.height, "bg");
        
        player = game.add.sprite(450,600,"player");
        player.anchor.set(0.5);
        
        weapon = game.add.weapon(15, "shoot");
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletAngleOffset = 90;
        weapon.bulletSpeed = 400;
        weapon.fireRate = 120;
        
        game.physics.enable(player,Phaser.Physics.ARCADE);
        
        weapon.trackSprite(player, 0, -10);
        controls = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    },
    
    update: function(){
        player.body.collideWorldBounds = true
        var speed = 430;
        var speedN = -430
        
        player.body.acceleration.x = 0;
        player.body.acceleration.y = 0;
        player.body.drag.set(400);
        player.body.maxVelocity.set(430);
        
        if(controls.left.isDown){
            player.body.acceleration.x = speedN;
        } else
        if(controls.right.isDown){
            player.body.acceleration.x = speed;
        }
        if(controls.up.isDown){
            player.body.acceleration.y = speedN;
        } else
        if(controls.down.isDown){
            player.body.acceleration.y = speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            weapon.fire();
        }
    },
    
    render: function(){
        //weapon.debug();
    }
};