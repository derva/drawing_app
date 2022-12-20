// import { useOnDraw } from './Hooks'
import { useOnDraw } from "./Hooks";

const Canvas = ({width,height,color}) =>{

    const setCanvasRef = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint){
        drawLine(prevPoint, point, ctx, color, 5)
    }

    function drawLine(start,end,ctx,color,width){
        start = start ?? end;
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2*Math.PI);
        ctx.fill();
    }

    return(
        <div>
            <canvas 
            width={width}
            height={height}
            style={{border: "1px solid black"}}
            ref={setCanvasRef}
            />
        </div>
    )
}

export default Canvas;

