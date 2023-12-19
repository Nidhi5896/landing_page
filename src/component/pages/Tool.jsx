import './Tool.css'
export default  function Tool({ToolName,Description,Source}){
    return(
        <>
        <div className="toolContainer">
        <p>{ToolName}</p>
        <img className='image' src={Source}></img>
            <p>{Description}</p>
        </div>
        </>
    )

}