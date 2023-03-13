import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

function AppButton({title}) {
    return (
        <TouchableOpacity onPress={() => console.log(title)}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                 {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    //add styles here
    textStyle:{
    color:'white',
    fontSize:50,
  }
})


export default AppButton;