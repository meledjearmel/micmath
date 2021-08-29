class Canvas {

    constructor ()
    {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.ctx.translate(275, 275)
        this.drawCircle = this.drawCircle.bind(this)
        this.drawpointer = this.drawpointer.bind(this)
        this.setPoint = this.setPoint.bind(this)
        this.table = this.table.bind(this)
        this.getPosX = this.getPosX.bind(this)
        this.getPosY = this.getPosY.bind(this)
    }

    drawCircle ()
    {
        this.ctx.beginPath()
        this.ctx.arc(0, 0, 250, 0, Math.PI * 2, true);
        this.ctx.stroke()
    }

    drawpointer(x, y, move = false)
    {
        if (move) {
            this.ctx.moveTo(x, y)
        }
        this.ctx.arc(x, y, 0, 0, Math.PI * 2, true)
    }

    setPoint(modulo)
    {
        let angle = 360 / modulo
        let newAngle = angle;

        this.ctx.fillStyle = '#000'
        this.ctx.beginPath()
        for (let i = 0; i <= modulo; i++) {
            let radian = newAngle * Math.PI / 180
            let y = this.getPosY(radian)
            let x = this.getPosX(radian)
            this.drawpointer(x, -y)
            this.ctx.fillText((modulo - (modulo - i)), x+15, -y-15)
            this.drawpointer(x, y)
            this.ctx.fillText(i, x+15, y+15)
            this.drawpointer(-x, y)
            this.ctx.fillText(i, -x-15, y+15)
            this.drawpointer(-x, -y,)
            this.ctx.fillText(i, -x-15, -y-15)
            newAngle = newAngle < 360 ? newAngle + angle : 0
            console.log(newAngle, radian, x, y)
        }
        
        this.ctx.stroke()
       
    }

    getPosX (radian)
    {
        return Math.sqrt((250*250) - ((Math.cos(radian) * 250) * (Math.cos(radian) * 250)))
    }

    getPosY (radian)
    {
        return Math.sqrt((250*250) - ((Math.sin(radian) * 250) * (Math.sin(radian) * 250)))
    }

    table (value, stop, modulo)
    {
        this.setPoint(modulo)
        for (let i = 1; i <= stop; i++) {
            
        }
    }

}

Pic = new Canvas()

Pic.drawCircle()
Pic.table(2, 20, 60)