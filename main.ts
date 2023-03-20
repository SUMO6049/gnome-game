scene.onOverlapTile(SpriteKind.Player, assets.tile`gold`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(10)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    gnome.setImage(assets.image`gnome`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    gnome.vy = -50
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gnome.isHittingTile(CollisionDirection.Bottom)) {
        gnome.vy += -300
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spike`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`sapphire`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ourple`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(30)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    gnome.setImage(assets.image`gnomeog`)
})
let gnome: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`sun`)
gnome = sprites.create(assets.image`gnomeog`, SpriteKind.Player)
gnome.setStayInScreen(true)
controller.moveSprite(gnome, 100, 0)
scene.cameraFollowSprite(gnome)
gnome.ay = 800
gnome.vy = 100
gnome.setPosition(0, 18)
info.setLife(3)
info.setScore(0)
let goblin = sprites.create(assets.image`goblin`, SpriteKind.Enemy)
goblin.ay = 800
goblin.follow(gnome, 15)
