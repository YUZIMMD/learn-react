import React from 'react'
import './Person.css'
// props是形参，给什么名字都没有关系
const person= (props) =>{
    return (
        <div className="person">
            {/* 属性传递方法 */}
            <p onClick={props.myClick}>nihao,{props.name}.我已经拥有{props.count}个作品</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}
export default person
