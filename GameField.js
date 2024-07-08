const standardSize = 40;
const cos60 = Math.cos(Math.PI/3);
const sin60 = Math.sin(Math.PI/3);
const heightMult = Math.sqrt(3) / 2;

class GameField {
  constructor(row, index, size) {
    this.row = row;
    this.index = index;
    this.size = (size == undefined) ? standardSize : size;
    
  }
  
  draw(ctx, centerX, centerY)
  {
      ctx.beginPath();
      
      if ((centerX == undefined) || (centerY == undefined))
      {
         centerX = this.size * (this.index - 1) * 3 + 160;
         centerY = this.size * this.row * heightMult + 130;
         if ((this.row % 2) == 0)
            centerX += this.size * 1.5;
      } 
      
      ctx.moveTo(centerX-this.size, centerY);
      ctx.lineTo(centerX-this.size * cos60, centerY - this.size * sin60);
      ctx.lineTo(centerX+this.size * cos60, centerY - this.size * sin60);
      ctx.lineTo(centerX+this.size, centerY);
      ctx.lineTo(centerX+this.size * cos60, centerY + this.size * sin60);
      ctx.lineTo(centerX-this.size * cos60, centerY + this.size * sin60);
      ctx.lineTo(centerX-this.size, centerY);

      /*
      ctx.moveTo(centerX-this.size / 2+0.5, centerY-this.size / 2+0.5);
      ctx.lineTo(centerX+this.size / 2+0.5, centerY-this.size / 2+0.5);
      ctx.lineTo(centerX+this.size+0.5, centerY+0.5);
      ctx.lineTo(centerX+this.size / 2+0.5, centerY + this.size / 2+0.5);
      ctx.lineTo(centerX- this.size / 2+0.5, centerY + this.size / 2+0.5);
      ctx.lineTo(centerX- this.size+0.5, centerY+0.5);
      ctx.lineTo(centerX-this.size / 2+0.5, centerY-this.size / 2+0.5);
      */
      // Draw the Path
      ctx.stroke();
      
      ctx.fillText(`${this.row}, ${this.index}`, centerX-10, centerY);
  }
}