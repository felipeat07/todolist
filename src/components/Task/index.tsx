import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CheckBox from 'expo-checkbox';
import { styles } from "./style";

type Props = {
    taskContent: string;
    onRemove: ()=> void;
}

export function Task({ taskContent, onRemove }: Props){
const [isChecked, setChecked] = useState(false);

    return(
        <View style={styles.taskBox}>
            <CheckBox 
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#8284FA' : undefined}   
            />
            <Text 
                style={isChecked ? styles.taskTextSelected :  styles.taskText}
            >
                {taskContent}
            </Text>
            <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
                <Image style={styles.trashButtonImage} source={require('../../../assets/trash.png')}/>
            </TouchableOpacity>
            
        </View>
    )
}