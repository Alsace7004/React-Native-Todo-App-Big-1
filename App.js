import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './components/Todo';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
        <Todo title="salut"/>
        <Todo title="Hello!!! I'm a todo component"/>
        <Todo title="Hello!!! I'm a todo component,Hello!!! I'm a todo component,"/>
        <Todo title="Hello!!! I'm a todo component,Hello!!! I'm a todo component,Hello!!! I'm a todo component"/>
        <Todo title="Good bye!!! see you later"/>
      <Footer/>
       <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
