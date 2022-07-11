
import {View,Text,StyleSheet} from 'react-native';

const Header = ()=>{
    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>Todo List</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        paddingTop:50,
        /*borderWidth:2,
        borderColor:'red',*/
        paddingHorizontal:15,
        paddingVertical:15,
        backgroundColor:'#2ecc71',
        borderBottomWidth:2,
        borderBottomColor:'#7f8c8d',
     
    },
    header_text:{
        fontSize:20,
        fontWeight:"700",
        color:'#fff'
    },
});

export default Header;
