import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const generateRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    const addColor = () => {
        const newColor = generateRandomColor();
        setColors([...colors, newColor]);
    };

    return (
        <View style={styles.container}>
            <Button title="Add Color" onPress={addColor} />
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View style={{ ...styles.colorBox, backgroundColor: item }} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    colorBox: {
        height: 100,
        width: 100,
        margin: 10,
    },
});

export default ColorScreen;
