import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //状态，只能在类中使用，并且继承的是react中Component,用于改变组件内状态的值
  state ={
    persons:[
      {name:'name1',count:1},
      {name:'name2',count:2},
      {name:'name3',count:3},
  ],
  otherState:'anything',
  showPersons:false
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
  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'name1',count:1},
        {name:event.target.value,count:2},
        {name:'name3',count:3},
      ]
    })
  }
  toggleHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons:!doesShow
    })
  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = ( <div>
        < Person myClick={this.switchNameHandler.bind(this,'miss')} name={this.state.persons[0].name} count={this.state.persons[0].count} />
        < Person changed={this.nameChangeHandler} name={this.state.persons[1].name} count={this.state.persons[1].count} />
        </div>)
    }
    return (
      // jsx
      // jsx中定义类名：className,在jsx中有且只有一个根容器，有两个同级的根标签会报错
      <div className="App">
        <h1>1234</h1>
        {/* 如果给方法加()，方法会在加载的时候执行，不管有没有点击按钮 ，传参：1.箭头函数传参2.bind*/}
        {/* <button onClick={()=>this.switchNameHandler("dengyt")}>更改状态值</button> */}
        <button style={style} onClick={this.switchNameHandler.bind(this,"dengyt")}>更改状态值</button>
        <button style={style} onClick={this.toggleHandler}>内容切换</button>
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
