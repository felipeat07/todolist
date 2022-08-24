import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CheckBox from 'expo-checkbox';
import { styles } from "./style";
import { CheckedContext } from "../../../contexts/CheckedContext";

type Props = {
    taskContent: string;
    onRemove: ()=> void;
    countRemoveTask: ()=> void;
}



export function Task({ taskContent, onRemove, countRemoveTask }: Props){
    const { countFinishedTask, isChecked, setChecked } = useContext(CheckedContext)

  
    return(
        <View style={styles.taskBox}>
            <CheckBox 
                style={styles.checkbox}
                value={isChecked}
                onValueChange={()=> setChecked(!isChecked)}
                color={isChecked ? '#8284FA' : undefined}   
                onTouchStart={countFinishedTask}
            />
            <Text 
                style={isChecked ? styles.taskTextSelected :  styles.taskText}
            >
                {taskContent}
            </Text>
            <TouchableOpacity style={styles.trashButton} onPress={onRemove} onPressIn={countRemoveTask}>
                <Image style={styles.trashButtonImage} source={require('../../../assets/trash.png')}/>
            </TouchableOpacity>
            
        </View>
    )
}