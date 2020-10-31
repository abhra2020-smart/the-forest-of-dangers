let Tree: Sprite = null
scene.setBackgroundColor(9)
let Abby = sprites.create(sprites.castle.heroWalkFront1, SpriteKind.Player)
Abby.setPosition(75, 55)
controller.moveSprite(Abby)
for (let index = 0; index < randint(5, 160); index++) {
    Tree = sprites.create(sprites.castle.treeSmallPine, SpriteKind.Projectile)
    Tree.setPosition(randint(10, 130), randint(10, 70))
}
