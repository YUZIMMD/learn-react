import React from 'react';
 const  MyHeader =(props)=>{
    const style={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      }
    return(
        <div>
            <h1>1234</h1>
            {/* 如果给方法加()，方法会在加载的时候执行，不管有没有点击按钮 ，传参：1.箭头函数传参2.bind*/}
            {/* <button onClick={()=>this.switchNameHandler("dengyt")}>更改状态值</button> */}
            <button style={style} onClick={props.switchFun.bind(this,"dengyt")}>更改状态值</button>
            <button style={style} onClick={props.clicked}>内容切换</button>
            </div>
    )
 }
 export default MyHeader;