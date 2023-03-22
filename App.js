import { useState } from "react";
import { useFonts } from 'expo-font'; //pass
import { StatusBar } from 'expo-status-bar'; //pass
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";



export default function App() {
  const [keys, setKeys] = useState([])
  const [result, setResult] = useState("")
  let combination = ''
  function getResult() {
    for (let i = 0; i<keys.length; i++){
      combination = combination + keys[i]
    }
    const executeStringNumber = eval(combination)
    setResult('=' + executeStringNumber);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <Text style={styles.output}>
        {keys}{result}
        </Text>
      <View style={styles.container_keys}>
        <TouchableOpacity onPress={() => setKeys([...keys, '1'])}>
          <Text style={styles.keys}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '2'])}>
          <Text style={styles.keys}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '3'])}>
          <Text style={styles.keys}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '+'])}>
          <Text style={styles.keys}>+</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.container_keys}>
        <TouchableOpacity onPress={() => setKeys([...keys, '4'])}>
          <Text style={styles.keys}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '5'])}>
          <Text style={styles.keys}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '6'])}>
          <Text style={styles.keys}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '-'])}>
          <Text style={styles.keys}>-</Text>
        </TouchableOpacity>
        </View>
        

        <View style={styles.container_keys}>
        <TouchableOpacity onPress={() => setKeys([...keys, '7'])}>
          <Text style={styles.keys}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '8'])}>
          <Text style={styles.keys}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '9'])}>
          <Text style={styles.keys}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '*'])}>
          <Text style={styles.keys}>*</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.container_keys}>
        <TouchableOpacity onPress={() => setKeys([...keys, '('])}>
          <Text style={styles.keys}>(</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '0'])}>
          <Text style={styles.keys}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, ')'])}>
          <Text style={styles.keys}>)</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys([...keys, '/'])}>
          <Text style={styles.keys}>/</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.container_keys}>
        <TouchableOpacity onPress={() => setKeys([])}>
          <Text style={styles.keys}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setKeys(keys.slice(0, -1))}>
          <Text style={styles.keys}>{'<='}</Text>
        </TouchableOpacity>
        </View>


        <TouchableOpacity onPress={() => getResult()}>
          <Text style={styles.output}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#666",
    alignItems: "center",
    justifyContent: "center",
  },

  container_keys : {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  keys: {
    display: "flex",
    backgroundColor: "#223333",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: "#666",
    fontSize: 30,
    color: "#fff",
    width: 80,
    height: 80,
  },

  output : {
    display: "flex",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 35,
    color: "#fff",
    backgroundColor: "#223333",
    width: 319,
    padding: 10,
    marginVertical: 3,
    
  }
});
  
