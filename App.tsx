import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength:Yup.number()
  .min(4,'should be min of 4 charcters')
  .max(16,'should be max of 16 characters')
  .required('Length is required')
})
export default function App() {
  const[password,setPassword] = useState("")
const[ispassgenerated,setIspassgenerated] = useState(false)
const[lowerCase,setLowerCase] = useState(true)
const[upperCase,setUppercase] = useState(false)
const[numbers,useNumbers]= useState(false)
const[symbols,useSymbols] = useState(false)
const generatepasswordString = (passwordLength : number) =>{

}
const createPassword = (characters:string,passwordLength:number)=>{

}
const resetPasswordstate = ()=>{

}



  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})