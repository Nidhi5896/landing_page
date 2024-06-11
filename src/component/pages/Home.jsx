import Tool from "./Tool";
import './Home.css'
export default function Home()
{
    return (
        <>
        <h1 className="heading">Tools</h1>
          <div className="allTool">
          <Tool ToolName="url Scanner" Description="lorem ipsum" Source=".\add checker.jpg"/>
            <Tool ToolName="detector" Description="loremipsum"/>
            <Tool ToolName="url Scanner" Description="lorem ipsum"/>
            <Tool ToolName="detector" Description="loremipsum"/>
            <Tool ToolName="url Scanner" Description="lorem ipsum"/>
            <Tool ToolName="detector" Description="loremipsum"/>
            <Tool ToolName="url Scanner" Description="lorem ipsum"/>
            <Tool ToolName="detector" Description="loremipsum"/>
          </div>
           

        </>
        
    )
}