import React, { useState } from 'react';
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from '../../components/Task';
import { styles } from './styles';

export function Home() {
    const [task, setTask] = useState<string[]>([])
    const [taskText, setTaskText] = useState('')

    function handleTaskAdd(){
        if(task.includes(taskText)){
          return Alert.alert("Já existe esta tarefa, adicione outra!")
        }

        setTask(prevState => [...prevState, taskText])
        setTaskText('')
    }

    function handleTaskRemove(task: string){
        setTask(prevState => prevState.filter(taskItem => taskItem !== task))
    }
    

    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTaskText}
                    value={taskText}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}
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
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task 
                        taskContent={item}
                        onRemove={()=> handleTaskRemove(item)} 
                    />
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