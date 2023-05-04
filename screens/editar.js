import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';
import BackButton from '../icons/backButton';

export default function PantallaEditar({navigation, route}) {

const { id, name, role, address, salary } = route.params;

return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.navigate("Usuarios")} />
            <Text style={styles.paragraph}>
                Para editar el id = {id}
            </Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder="Rol"
                value={role}
            />

            <TextInput
                style={styles.input}
                placeholder="Dirección"
                value={address}
            />

            <TextInput
                style={styles.input}
                placeholder="Salario"
                value={salary.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
        marginTop: 0,
        paddingTop: 15
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 370,
        textAlign: 'center',
        borderRadius: 6,
        fontSize: 15,
        marginBottom: 30,
    }
});