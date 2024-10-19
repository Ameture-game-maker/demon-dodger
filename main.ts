controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
info.onScore(30, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . 7 f f f f 7 . . 
        . f 2 2 2 2 2 2 f . 
        f 2 d f 2 2 f d 2 f 
        f 2 2 2 2 2 2 2 2 f 
        f 2 2 9 d d 9 2 2 f 
        f 2 2 9 9 9 9 2 2 f 
        . f f 2 2 2 2 f f . 
        . . . f f f f . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(5)
})
info.onScore(10, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . 7 f f f f 7 . . 
        . f 2 2 2 2 2 2 f . 
        f 2 d f 2 2 f d 2 f 
        f 2 2 2 2 2 2 2 2 f 
        f 2 2 9 d d 9 2 2 f 
        f 2 2 9 9 9 9 2 2 f 
        . f f 2 2 2 2 f f . 
        . . . f f f f . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
info.onScore(50, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . 7 f f f f 7 . . 
        . f 2 2 2 2 2 2 f . 
        f 2 d f 2 2 f d 2 f 
        f 2 2 2 2 2 2 2 2 f 
        f 2 2 9 d d 9 2 2 f 
        f 2 2 9 9 9 9 2 2 f 
        . f f 2 2 2 2 f f . 
        . . . f f f f . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(5)
})
info.onScore(20, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . 7 f f f f 7 . . 
        . f 2 2 2 2 2 2 f . 
        f 2 d f 2 2 f d 2 f 
        f 2 2 2 2 2 2 2 2 f 
        f 2 2 9 d d 9 2 2 f 
        f 2 2 9 9 9 9 2 2 f 
        . f f 2 2 2 2 f f . 
        . . . f f f f . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(5)
})
info.onScore(40, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . 7 f f f f 7 . . 
        . f 2 2 2 2 2 2 f . 
        f 2 d f 2 2 f d 2 f 
        f 2 2 2 2 2 2 2 2 f 
        f 2 2 9 d d 9 2 2 f 
        f 2 2 9 9 9 9 2 2 f 
        . f f 2 2 2 2 f f . 
        . . . f f f f . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(5)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level0`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 f 2 f 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 2 f 2 f 2 2 f . . . . 
    . . . f 2 2 f 2 f 2 2 f . . . . 
    . . . f 2 2 f f f 2 2 f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . f f f f . . 
        . f 4 4 4 4 f . 
        f 4 f 4 4 f 4 f 
        f 4 4 4 4 4 4 f 
        f 4 f f f f 4 f 
        f 4 f 4 4 f 4 f 
        . f 4 4 4 4 f . 
        . . f f f f . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
