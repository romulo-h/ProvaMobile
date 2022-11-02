import {Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import React, { useEffect, useState } from "react";
 
export default function App() {

  const [text, setText] = useState<string>('');
  const [num1, setNum1] = useState<number>();
  const [num2, setNum2] = useState<number>();

  return (
    <ScrollView>
      <View>
        <Text style={{textAlign: "center", fontSize: 25, fontWeight:"500"}}>Prova de Mobile</Text>
        <TextInput
          style={{marginLeft: 10, fontSize: 20}}
          placeholder='Digite aqui seu texto...'
          onChangeText={(string) => { setText(string); }}
        />
        <TextInput
          style={{marginLeft: 10, fontSize: 20}}
          placeholder='Numero 01'
          keyboardType="number-pad"
          onChangeText={(number) => { setNum1(Number(number)); }}
        />
        <TextInput
          style={{marginLeft: 10, fontSize: 20}}
          placeholder='Numero 02'
          keyboardType="number-pad"
          onChangeText={(number) => { setNum2(Number(number)); }}
        />
        <Text style={{marginLeft: 10, fontSize: 20}}>{text}</Text>
        <Text style={{marginLeft: 10, fontSize: 20}}>{num1}</Text>
        <Text style={{marginLeft: 10, fontSize: 20}}>{num2}</Text>
      </View>
    </ScrollView>
  );
}