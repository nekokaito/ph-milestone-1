import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
     <>
     <Hello></Hello>
      <Person></Person>
     </>
      
  )
}

function Hello() {
 return (
         <h1>Hello World</h1>
         
 ) 
}

function Person() {
  const his_name = 'Kaito';
  const age = 24;
  const skills = ['Java', 'C/C++', 'JavaScript'];

  return (
    <>
     <p>Name : {his_name}</p>
     <p>Age : {age}</p>
     {
      skills.map((skill) => (
         <p>{skill}</p>
      ) )
     }
    </>
     
     
  )

}

export default App
