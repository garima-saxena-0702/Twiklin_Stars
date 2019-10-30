class Particle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.timeExisted = 600;
        this.angle = 0;
    }
}

Particle.prototype.endParticle = function() {
    delete this;
}
