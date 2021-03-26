import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput, TouchableOpacity,ScrollView, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task,setTask] = useState()
  const [taskItems,setTaskItems] = useState([])



  const handleAddTask = () => {
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const completeTask = (index) =>{
    let  itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  return (
   <View style={styles.container}>
    
    <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Tasks</Text> 
          <ScrollView >
           
          <View style={styles.items}>
             
              {
                taskItems.map( (item,index) =>{
                return (
                        <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                          <Task  text={item} />
                        </TouchableOpacity>
                      )
               }
                )
              }
          </View>         
          </ScrollView>
     
      </View>

      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
      >
        <TextInput 
            style={styles.input} 
            placeholder={'write a task'}
            onChangeText={text => setTask(text)}
            value={task}
            />
        <TouchableOpacity onPress={()=> task != null ? handleAddTask() : '' }>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
     
      <StatusBar style="auto" />
   </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7DBDD',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
    marginBottom:110
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  
  },
  input:{
   paddingVertical:15,
   paddingHorizontal:15,
   backgroundColor:'#fff',
   borderRadius:60,
   borderColor:'#C0C0C0',
   borderWidth:1,
   width:250
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius: 60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});
