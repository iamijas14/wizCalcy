import React from 'react'
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Home = () => {



    const Screen1 = ({ navigation }) => {

        const goTOScreen2 = () => {
            navigation.navigate('Result')
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType='number-pad'
                    />
                    <View style={styles.btn}>
                        <Pressable
                            style={styles.add}
                        >
                            <Text style={styles.text}>
                                +
                            </Text>
                        </Pressable>
                        <Pressable
                            style={styles.add}
                        >
                            <Text style={styles.text}>
                                -
                            </Text>
                        </Pressable>
                    </View>
                    <Pressable
                        onPress={goTOScreen2}
                        style={styles.add}
                    >
                        <Text style={styles.text}>
                            =
                        </Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    const Screen2 = () => {
        return (
            <View>
                <Text>
                    Screen2
                </Text>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='WizCalcy'
                    component={Screen1}
                />

                <Stack.Screen
                    name='Result'
                    component={Screen2}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Home

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        marginTop: 250,
        alignItems: 'center',
        // justifyContent: 'center'
    },

    inputText: {
        borderWidth: 1,
        width: '90%',
        margin: 10
    },

    btn: {
        flexDirection: 'row'
    },

    add: {
        margin: 10
    },

    text: {
        fontSize: 50,
        borderWidth: 1,
        width: 100,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'center'
    }
})