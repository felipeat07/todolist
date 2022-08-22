import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        <Image 
                            source={require('../../../assets/plus.png')} 
                        />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.status}>
                <Text style={styles.createStatus}>Criadas</Text>
                <Text style={styles.finishStatus}>Concluídas</Text>
            </View>

        </View>
    )
}