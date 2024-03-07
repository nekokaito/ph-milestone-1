import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
     <>
     <Hello></Hello>
      <Person></Person>
      <h3>Salary Monthly</h3>
      <Salary jan="5000" feb={6000} march={7510} april={10177}></Salary>
     </>
      
  )
}

function Hello() {
 return (
         <h1>Person Information</h1>
         
 ) 
}

function Person() {
  const his_name = 'Kaito';
  const age = 24;
  const skills = ['Java', 'C/C++', 'JavaScript'];
  const personStyle = {
     border : '2px solid blue',
     borderRadius : '16px',
     margin: '10px',
     padding: '10px',
     fontWeight: 'bold'
  }

  return (
    <div style={personStyle}>
      <p>Name : {his_name}</p>
     <p>Age : {age}</p>
     <p>Skill</p>
     {
      skills.map((skill) => (
        <>
         <hr />
         <p>{skill}</p>
        </>

      ) )
     }
    </div>
     
     
  )

}
function Salary({jan=0,feb=0,march=0,april=0}) {
  const salaryStyle = {
    border : '2px solid green',
    borderRadius : '16px',
    margin: '10px',
    padding: '10px',
    fontWeight: 'bold'
 }

  console.log(jan);
  return (
    <div style={salaryStyle}>
    <p>January : {jan} ৳</p>
    <p>Feb : {feb} ৳</p>
    <p>March : {march} ৳</p>
    <p>April : {april} ৳</p>
    
    </div>
  )
    
}

export default App
