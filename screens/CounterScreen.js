import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}



const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    
    return (
        <View className='flex-1 justify-evenly  '>
            <Button className='border-2 border-black 'title="Increase" onPress={() => dispatch({ type: 'increment' })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrement' })} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

export default CounterScreen;