let PTM = 20;
let sprites = [];
let world, renderer, particleSystem,particleSystem1;

let gravity = new Box2D.b2Vec2(0, -10);



function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function createBox(x, y, w, h, fixed,ang) {
    let bd = new Box2D.b2BodyDef();
    if (!fixed) {
        bd.set_type(2);
    }
    bd.set_position(new Box2D.b2Vec2(x, y));

    let body = world.CreateBody(bd);

    let shape = new Box2D.b2PolygonShape;
    shape.SetAsBox(w, h);
    body.CreateFixture(shape, 1.0);

    let sprite = PIXI.Sprite.from(PIXI.Texture.WHITE);
    sprite.width = w * PTM * 2;
    sprite.height = h * PTM * 2;
    sprite.anchor.set(0.5);
    sprite.body = body;
    sprite.rotation = ang;
    renderer.stage.addChild(sprite);
    sprites.push(sprite);
    return body;
}

function createParticleSystem() {
    let psd = new Box2D.b2ParticleSystemDef();
    psd.set_radius(0.1);
    
    particleSystem = world.CreateParticleSystem(psd);
    particleSystem.SetMaxParticleCount(50000);
    
    let dummy = PIXI.Sprite.from(PIXI.Texture.EMPTY);
    renderer.stage.addChild(dummy);

    particleSystemSprite = new LiquidfunSprite(particleSystem);
    renderer.stage.addChild(particleSystemSprite);
}

function createParticleSystem1() {
    let psd1 = new Box2D.b2ParticleSystemDef();
    psd1.set_radius(0.1);
    
    particleSystem1 = world.CreateParticleSystem(psd);
    particleSystem1.SetMaxParticleCount(50000);
    
    let dummy1 = PIXI.Sprite.from(PIXI.Texture.EMPTY);
    renderer.stage.addChild(dummy1);

    particleSystemSprite1 = new WaterfunSprite(particleSystem);
    renderer.stage.addChild(particleSystemSprite1);
}



function spawnParticles(radius, x, y,) {
    let color = new Box2D.b2ParticleColor(255,255,0, 255);

    let flags = (1<<5);

    let pgd = new Box2D.b2ParticleGroupDef();
    let shape = new Box2D.b2CircleShape()
    shape.set_m_radius(radius);
    pgd.set_shape(shape);
    pgd.set_color(color);
    pgd.set_flags(flags);
    
    shape.set_m_p(new Box2D.b2Vec2(x, y));
    group = particleSystem.CreateParticleGroup(pgd);
    return group;
}

function spawnRed(radius, x, y,) {
    let color = new Box2D.b2ParticleColor(255,255,0, 255);
   
    let flags = (1<<5);

    let wtr = new Box2D.b2ParticleGroupDef();
    let shape1 = new Box2D.b2CircleShape()
    shape1.set_m_radius(radius);
    wtr.set_shape(shape1);
    wtr.set_color(color);
    wtr.set_flags(flags);
    
    
    shape1.set_m_p(new Box2D.b2Vec2(x, y));
    group1 = particleSystem.CreateParticleGroup1(wtr);
    return group1;
}



function init() {
    // stats
    let stats = new Stats();
    document.body.appendChild(stats.domElement);

    // renderer
    let w = window.innerWidth;
    let h = window.innerHeight;
    renderer = new PIXI.Application(w, h, {backgroundColor : 0x000000});
    document.body.appendChild(renderer.view);



    renderer.stage.position.x = w/2;
    renderer.stage.position.y = h/2;

    // world
    world = new Box2D.b2World(gravity);

    createBox(0, -12, 3, .15, true, 0);
    createBox(-2.85, -3, .15, 9, true, 0);
    createBox(2.85, -3, .15, 9, true, 23);
    

    createParticleSystem();
    

    renderer.ticker.add(function() {
        for (let i=0,s=sprites[i];i<sprites.length;s=sprites[++i]) {
            let pos = s.body.GetPosition();
            s.position.set(pos.get_x()*PTM, -pos.get_y()*PTM)
            s.rotation = -s.body.GetAngle();
        }
        stats.update();
    });

    // update loop
    function update() {
        world.Step(1/60, 8, 3);
    }
    window.setInterval(update, 1000 / 60);

    renderer.view.addEventListener("click", function(e) {
        let x = ((e.clientX - renderer.view.offsetLeft) - w/2) / PTM;
        let y = (-(e.clientY - renderer.view.offsetTop) + h/2) / PTM;
        if (e.shiftKey) {
            spawnRed(1, x, y);
        } else {
            spawnParticles(1, x, y);
        }
    });
};

window.addEventListener("load", init);
