import { useRef } from "react";

export function useOnDraw(onDraw){
    const canvasRef = useRef(null);
    const isDrawingRef = useRef(null);

    const prevPointRef = useRef(null);

    function setCanvasRef(ref){
        canvasRef.current = ref;
        initMouseMove();
        initMouseDown();
        initMouseUp();
    }

    function initMouseMove(){
        window.addEventListener('mousemove', (e)=>{
            if( isDrawingRef.current){
                console.log('crtam');
                let point = calculatePoint(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
                if( onDraw ) {
                    onDraw(ctx, point, prevPointRef.current);
                }
                prevPointRef.current = point;
            }
        })
    }

    function initMouseDown(){
        canvasRef.current.addEventListener("mousedown", (e)=>{
            console.log("Mouse is down");
            console.log(e);
            isDrawingRef.current = true;
        })
    }
    
    function initMouseUp(){
        canvasRef.current.addEventListener('mouseup', (e)=>{
            console.log("Mouse is up");
            console.log(e);
            isDrawingRef.current = false;
            prevPointRef.current = false;
        })
    }

    function calculatePoint(clientX, clientY){
        console.log("calculate point");
        let rect = canvasRef.current.getBoundingClientRect();
        return ({
            x: clientX - rect.left,
            y: clientY - rect.top
        });
    }

    return setCanvasRef;
}