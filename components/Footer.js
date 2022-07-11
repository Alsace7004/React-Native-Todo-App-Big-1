
import { StyleSheet,Text,View ,TextInput,TouchableOpacity} from "react-native";



const Footer = ()=>{
    return(
        <View style={styles.footer}>
                
                <TextInput style={styles.input} placeholderTextColor='#000' placeholder="Type some text here..."/>
                <TouchableOpacity activeOpacity={0.9}>
                        <View style={styles.footer_plus}>
                            <Text style={styles.footer_plus_text}>+</Text>
                        </View>
                </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        /*borderWidth:2,
        borderColor:'red',*/

        position:'absolute',
        bottom:0,
        width:'100%',
        padding:20,

        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#2ecc71',
        borderTopWidth:2,
        borderTopColor:'#7f8c8d',
    },
 
    footer_plus:{
        backgroundColor:'#2ecc71',
        width:50,
        height:50,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',

        shadowColor:'red',
        shadowOffset:{
            width:1,
            height:2
        },
        shadowOpacity:.3,
        shadowRadius:5,
        elevation:5,
    },
    footer_plus_text:{
        fontWeight:'900',
        fontSize:35,
        color:'#fff'
      
    },
    input:{
        borderWidth:2,
        borderColor:'#7f8c8d',
    
        width:'80%',
        paddingHorizontal:10,
        backgroundColor:'#fff',
        borderRadius:50,
     
        
    },
})

export default Footer;