import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Home() {
    const [task, setTask] = useState<string[]>([])


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
                <Text style={styles.createStatus}>
                    Criadas
                </Text>
                <View style={styles.statuscount}>
                    <Text style={styles.textcount}>0</Text>
                </View>
                <Text style={styles.finishStatus}>Concluídas</Text>
                <View style={styles.statuscount}>
                    <Text style={styles.textcount}>0</Text>
                </View>
            </View>



            <FlatList
                data={task}
                renderItem={() => (
                    <View />
                )}
                ListEmptyComponent={() => (
                    <>
                        <View style={styles.hrline} />
                        <Image
                            source={require('../../../assets/Clipboard.png')}
                            style={styles.listEmptyImg}
                        />

                        <Text style={styles.listEmptyTextUpper}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptyTextDown}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>

                    </>
                )}
            />


        </View>
    )
}