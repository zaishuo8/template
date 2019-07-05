import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Counter',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>{this.props.count}</Text>
                <Button
                    title="Increment"
                    onPress={() => this.props.dispatch({ type: 'INCREMENT' })}
                />
                <Button
                    title="Decrement"
                    onPress={() => this.props.dispatch({ type: 'DECREMENT' })}
                />

                <Button
                    title="Go to detail static count screen"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default connect(state => ({ count: state.count }))(HomeScreen);
