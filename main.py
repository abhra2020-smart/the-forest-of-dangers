Tree: Sprite = None
scene.set_background_color(9)
Abby = sprites.create(sprites.castle.hero_walk_front1, SpriteKind.player)
Abby.set_position(123, 49)
controller.move_sprite(Abby)
for index in range(randint(5, 80)):
    Tree = sprites.create(sprites.castle.tree_small_pine, SpriteKind.projectile)
    Tree.set_position(randint(10, 130), randint(10, 70))