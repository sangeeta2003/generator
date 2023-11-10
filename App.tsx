import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'Yup'
const passwordSchema = Yup.object().shape({
  passwordLength:Yup.number()
  .min(4,'should be min of 4 charcters')
  .max(16,'should be max of 16 characters')
  .required('Length is required')
})
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})