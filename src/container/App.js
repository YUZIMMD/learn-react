import React, { Component } from 'react';
import './App.css';
import Persons from '../component/Persons/Persons';
import MyHeader from '../component/Header/Header'
// 有状态组件
class App extends Component {
  // 构造函数自动获取props
  constructor(props){
    super(props);
      //状态，只能在类中使用，并且继承的是react中Component,用于改变组件内状态的值
    this.state ={
      persons:[
        {id:1,name:'name1',count:1},
        {id:2,name:'name2',count:2},
        {id:3,name:'name3',count:3},
    ],
    otherState:'anything',
    showPersons:false
    }
    console.log('1')
  }
  componentWillMount(){
    console.log('2')
  }
  componentDidMount(){
    console.log('4')
  }
  switchNameHandler=(newName)=>{
    console.log('21321321');
    // this指向当前类
    this.setState({
      persons:[
        {name:newName,count:1},
        {name:'name2',count:2},
        {name:'name3',count:3},
      ]
    })
  }
  nameChangeHandler=(event,id)=>{
    // 判断是否在数组中并且返回下标值
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    }) 
    // 获取数组中id等于这个的那个对象
    const person = {...this.state.persons[personIndex]};
    // 改变对象属性name
    person.name = event.target.value;
    // 获取全部的数组
    const persons =[...this.state.persons];
    // 替换其中id等于这个的那个对象
    persons[personIndex]=person;
    // 更新整个数组
    this.setState({
      persons:persons
    })
  }
  toggleHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    })
  }
  deletePersonHandler=(PersonIndex)=>{
    // const persons = this.state.persons;
    // 用操作运算符接收数据
    const persons = [...this.state.persons];
    persons.splice(PersonIndex,1);
    this.setState({
      persons:persons
    })
  }
  render() {
    console.log('3')
    let persons = null;
    if(this.state.showPersons){
     persons = <Persons 
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed1={this.nameChangeHandler}
                  />
      // ( <div>
      //   {/* 循环遍历 */}
      //   {
      //     this.state.persons.map((personn,index)=>{
      //       return <Person changed={(event)=>this.nameChangeHandler(event,personn.id)} myClick={this.deletePersonHandler.bind(this,index)} name={personn.name} count={personn.count} key={personn.id} />
      //     })
      //   }
      //   {/* < Person myClick={this.switchNameHandler.bind(this,'miss')} name={this.state.persons[0].name} count={this.state.persons[0].count} />
      //   < Person changed={this.nameChangeHandler} name={this.state.persons[1].name} count={this.state.persons[1].count} /> */}
      //   </div>)
    }
    return (
      // jsx
      // jsx中定义类名：className,在jsx中有且只有一个根容器，有两个同级的根标签会报错
      <div className="App">
        {/* <h1>1234</h1> */}
        {/* 如果给方法加()，方法会在加载的时候执行，不管有没有点击按钮 ，传参：1.箭头函数传参2.bind*/}
        {/* <button onClick={()=>this.switchNameHandler("dengyt")}>更改状态值</button> */}
        {/* <button style={style} onClick={this.switchNameHandler.bind(this,"dengyt")}>更改状态值</button> */}
        {/* <button style={style} onClick={this.toggleHandler}>内容切换</button> */}
        {/* 头部组件 */}
        <MyHeader persons ={this.state.persons} clicked={this.toggleHandler} switchFun={this.switchNameHandler} appTile={this.props.title}/>
        {/* {
          this.state.showPersons?  <div>
          < Person myClick={this.switchNameHandler.bind(this,'miss')} name={this.state.persons[0].name} count={this.state.persons[0].count} />
          < Person changed={this.nameChangeHandler} name={this.state.persons[1].name} count={this.state.persons[1].count} />
          </div>:null
        } */}
        {persons}
      </div>
    );
  }
}

export default App;
