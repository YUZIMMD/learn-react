import React ,{Component}from 'react'
import './Person.css'
// props是形参，给什么名字都没有关系
class Person extends Component{
    constructor(props){
        super(props);
        console.log('9')
      }
      componentWillMount(){
        console.log('10')
      }
      componentDidMount(){
        console.log('12')
      }
    render(){
        console.log('11')
        return (
            <div className="person">
                {/* 属性传递方法 */}
                <p onClick={this.props.myClick}>nihao,{this.props.name}.我已经拥有{this.props.count}个作品</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </div>
        )
    }
}
export default Person
