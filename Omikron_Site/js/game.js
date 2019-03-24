var game = new Phaser.Game(900,650,Phaser.CANVAS,'#game');

    game.state.add("boot", bootState);
    game.state.add("load", loadState);
    game.state.add("menu", menuState);
    game.state.add("fase1", fase1State);
    game.state.add("fase2", fase2State);
    game.state.add("chefe1", chefe1State);
    game.state.add("end", endState);

    game.state.start("boot");

    