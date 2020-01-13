function hero () {
    hero1 = sprites.create(img`
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 
1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 1 
1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
`, SpriteKind.Player)
    hero1.setPosition(76, 101)
    controller.moveSprite(hero1)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
function doSomething () {
	
}
function overlap () {
    game.over(true)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
`, 0, 0)
}
let projectile2: Sprite = null
let hero1: Sprite = null
hero()
game.onUpdateInterval(200, function () {
    projectile()
    score()
})
