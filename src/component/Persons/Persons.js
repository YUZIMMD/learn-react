import React ,{Component}from 'react';
import Person from './Person/Person';
// 无状态组件（有状态组件和无状态组件：有状态组件是类，可以使用状态，只有继承类component ，并且拥有生命周期函数）（当前组件如果不需要存储数据或者无数据变化，则用有状态组件，否则使用无状态组件更好）
class Persons extends Component{
    constructor(props){
        super(props);
        console.log('5')
      }
      componentWillMount(){
        console.log('6')
      }
      componentDidMount(){
        console.log('8')
      }
    //   更新组件生命周期钩子函数
    // 状态改变，获取到下个阶段的props
    componentWillReceiveProps(nextProps){
     console.log(nextProps);
    }
    // 判断是否进入下一个状态，来控制组件更新
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState);
        return nextProps.persons !== this.props.persons;
    }
    // 将要进行渲染
    componentWillUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
    }
    // 已经渲染完
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState);
    }
 render(){
     console.log('7')
     return this.props.persons.map((person,index)=>{
     return <Person 
            myClick={()=>this.props.clicked(index)}
            name={person.name}
            count = {person.count}
            key={person.id}
            changed={(event)=>this.props.changed1(event,person.id)}
     />
 })
}
}
export default Persons;