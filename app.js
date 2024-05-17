


kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,2,1,2]
})


loadSprite("floor", "mySprites/floor.png")
loadSprite("coin", "mySprites/coin.png")
loadSprite("cloud", "mySprites/cloud.png")
loadSprite("player", "mySprites/player.png")
loadSprite("playerVolteado", "mySprites/playerVolteado.png")
loadSprite("fire", "mySprites/fire.png")

scene("main", () => {
    layers(["obj", "ui"], "obj")

    const mapa = [
       " W                      W",
        "X     P                            X",
        "X                    S             X",
        "X              -                   X",
        "X          --          -           X",
        "X        --                        X",
        "X     -                      F     X",
        "=============           ==     =====",
    ]


    const config = {
        height: 60,
        width: 30,
        "=":[sprite("floor"), "piso", solid()],
        "S":[sprite("coin"), "moneda", scale(.5)],
        "-":[sprite("floor"), "plataforma", scale(.6), solid()],
        "W":[sprite("cloud"), "nube"],
        "F":[sprite("fire"), "fuego", scale(.5)],
    }

    const nivel = addLevel(mapa, config)

    const basuquero = add([
        sprite("player"),
        pos(125,100),
        scale(.7),
        body(),
        "player",
    ])

    const speed = 200 

    keyDown("right", () =>{
        basuquero.changeSprite("player")
        basuquero.move(speed,0)
    })
    
    keyDown("left", () =>{
        basuquero.changeSprite("playerVolteado")
        basuquero.move(-speed,0)
    })

    
    keyPress("space", () =>{
        basuquero.changeSprite("player")
        if (basuquero.grounded()) {
            basuquero.jump(400)
        }
    })

    
})

start("main")

let audio = new Audio("music.mp3")
audio.play()