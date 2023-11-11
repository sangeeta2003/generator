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
  const[password,setPassword] = useState('')
const[ispassgenerated,setIspassgenerated] = useState(false)
const[lowerCase,setLowerCase] = useState(true)
const[upperCase,setUppercase] = useState(false)
const[numbers,setNumbers]= useState(false)
const[symbols,setSymbols] = useState(false)
const generatepasswordString = (passwordLength : number) =>{
let characterList = '';
const upperCase = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
const lowerCase = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
const digitalchar = '1234567890';
const specialChar = '!@#$%^&*()_+';
if(upperCase){
  characterList += upperCase
}
if(lowerCase){
  characterList += lowerCase
}
if(digitalchar){
  characterList += digitalchar
}
if(specialChar){
  characterList += specialChar
}
const passwordResult = createPassword(characterList,passwordLength)

setPassword(passwordResult)
setIspassgenerated(true)


}
const createPassword = (characters:string,passwordLength:number)=>{
let result = ""
for(let i=0;i < passwordLength ; i++){
const charcterIndex = Math.round(Math.random() *characters.length )
result += characters.charAt(charcterIndex)
}
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