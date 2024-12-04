export default function mouse(){
    const stilus = {backgroundColor:'#222', color:'#fff', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}

    const mouseMexe = (ev) => {
        console.log(ev.clientX, ev.clientY)
    }
    return (
        <div style={stilus} onMouseMove={mouseMexe}>
           <span>Eixo X: ? </span>
           <span>Eixo Y: ?</span>
        </div>
    );
}