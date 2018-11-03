import React from 'react';
import Person from './Person/Person';
// 无状态组件（有状态组件和无状态组件：有状态组件是类，可以使用状态，只有继承类component ，并且拥有生命周期函数）（当前组件如果不需要存储数据或者无数据变化，则用有状态组件，否则使用无状态组件更好）
const persons = (props)=>{
 return props.persons.map((person,index)=>{
     return <Person 
            myClick={()=>props.clicked(index)}
            name={person.name}
            count = {person.count}
            key={person.id}
            changed={(event)=>props.changed(event,person.id)}
     />
 })
}
export default persons;