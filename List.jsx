import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import { useWindowDimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Main() {
    const window = useWindowDimensions();

    const [text, setText] = useState('');
    const [components, setComponents] = useState<{ id: number, text: string }[]>([]);

    const displayText = (input: string): void => {
        setText(input);
    }

    // Function to add a new component to the array
    const addComponent = () => {
        if (text.trim()) {
            setComponents([...components, { id: components.length, text: text }]);
            setText(''); // Clear the text input after adding
        }
    };

    // Function to remove a component from the array
    const removeComponent = (indexToRemove: number) => {
        setComponents(components.filter((_, index) => index !== indexToRemove));
    };

    return (
    <View style={[styles.Frame, { height: window.height, width: window.width }]} >
        <View style={[styles.SearchBox, { height: window.height * 0.15, width: window.width * 0.95, top: window.height * 0.05 }]}>
            <TextInput value={text} onChangeText={displayText} style={[styles.textInput, { height: window.height * 0.08, width: window.width * 0.75 }]} placeholder="What's on your mind?" placeholderTextColor={'white'} />
                <View style={[styles.sButton, { height: window.height * 0.08, width: window.width * 0.16 }]} >
              <TouchableOpacity style={styles.opacity} onPress={addComponent} >
            <Text style={styles.applyTask}>Add</Text>
        </TouchableOpacity>
        </View>
 </View>

    <View style={[styles.contents, { height: window.height * 0.7, width: window.width * 0.95, top: window.height * 0.25 }]} >
        <ScrollView style={[styles.views]} >
            {components.map((component, index) => (
              <View style={[styles.taskview, { height: window.height * 0.1, width: window.width * 0.95 }]} key={index} >
                  <Text style={[styles.idText]}  >{index +1+'.'}</Text>
                    <TouchableOpacity style={[styles.deleteButton,{height: window.height * 0.04, width: window.width * 0.07}]} onPress={() => removeComponent(index)}>
                  <Text style={[styles.deleteButtonInner]} > <FontAwesomeIcon icon={faTrash} size={10} color="#BB2233" /> </Text>
                 </TouchableOpacity>
                <TouchableOpacity style={[styles.deleteButton1,{height: window.height * 0.04, width: window.width * 0.07}]} onPress={() => removeComponent(index)}>
                 <Text style={[styles.deleteButtonInner1]} > <FontAwesomeIcon icon={faPencil} size={10} color="#F9982F" /> </Text>
              </TouchableOpacity>
              <Text style={[styles.finalText,{}]}>{component.text}</Text>
            </View>
            ))}
        </ScrollView>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Frame: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: '#FAE3CF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SearchBox: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'white',
    },
    textInput: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: '#0A0F24',
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        top: 29,
        borderRadius: 50,
    },
    sButton: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: '#0A0F24',
        top: 29,
        left: 320,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacity: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: '#0A0F24',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    applyTask: {
        color: 'white',
        fontSize: 20,
    },
    contents: {
        display: 'flex',
        position: 'absolute',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskview: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    views: {
        flexDirection: 'column',
        gap: 10,
    },
    idText: {
        color: 'black',
        fontSize: 30,
        fontWeight:'700',
    },
    deleteButton: {
        display:'flex',
        position:'absolute',
        backgroundColor: 'transparent',
        left:'95%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    deleteButtonInner: {
        display:'flex',
        position:'absolute',
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    deleteButton1: {
        display:'flex',
        position:'absolute',
        backgroundColor: 'transparent',
        left:'82%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    deleteButtonInner1: {
        display:'flex',
        position:'absolute',
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight:'700',
    },
    finalText:{
        position:'absolute',
        color:'black',
        left:'15%',
        fontSize:20,
        fontWeight:'700',
    },
});
