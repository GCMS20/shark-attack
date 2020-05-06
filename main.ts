sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.ashes, 200)
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . c c 
. . . c 4 d 4 4 4 4 4 1 c c 4 c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
. c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
. f 4 4 4 4 1 c c 4 4 d f f . . 
. . f f 4 d 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . c c f f f . . . . . . . . . . . 
. . . . . . . . . . f f f f f f f f f c b b b b f . . . . . . . . . . . 
. . . . . . . . . f b b b b b b b b b f f f b f . . . . . . . . . . . . 
. . . . . . . . . f b b 1 1 1 b f f b b b b f f . . . . . . . . . . . . 
. . . . . . . . . f b 1 1 1 1 1 f f b b b b b c f f . . . . . . . . . . 
. . . . . . . . . f 1 c c c c 1 1 b b c b c b c c c f . . . . . . . . . 
. . . . . . . . . . f c 1 c 1 c 1 b b b c b c b c c c f . . . c c c c c 
. . . . . . . . . . . . c 3 3 3 1 b b b c b c b c c c c f c c d d b b c 
. . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c b d d b c c . 
. . . . . . . . . . . c 3 3 1 c 1 1 b b b b b c c c c c c c b b c c . . 
. . . . . . . . . . c c 1 3 c 1 1 1 b b b b c c c c c c f f b c c f . . 
. . . . . . . . . . c 1 1 1 1 1 1 c b b b c c c c c b b c . f c c f . . 
. . . . . . . . . . . c c 1 1 1 1 c b b b f d d d d d c . . f b b c f . 
. . . . . . . . . . . . . c c c f f b d b b f d d d c . . . . f b b f . 
. . . . . . . . . . . . . . . . . . f b d b b f c c . . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . . f f f 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
