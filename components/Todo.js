
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
const Todo = ({title})=>{
    return (
        <View style={styles.todo_container}>
            {/*********************************************/}
            <View style={styles.left}>
                {/*********************************************/}
                <View style={styles.checked}>
                    <Icon name="check" size={16} color='#fafafa' />
                </View>
                {/*********************************************/}
                <View style={styles.todo_text}> 
                    <Text style={styles.todo_text_style}>{title}</Text>
                </View>
                {/*********************************************/}
            </View>
            {/*********************************************/}
            <View style={styles.right}>
                <Icon name="delete" size={30} />
            </View>
            {/*********************************************/}
        </View>
    )
}

const styles = StyleSheet.create({
    checked:{
        height:20,
        width:20,
        marginRight:10,
        borderRadius:6,
        backgroundColor:'#262626',
        alignItems:'center',
        justifyContent:'center',
        //marginLeft:15,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.3,
        shadowRadius:5,
        elevation:5,
    },
    unchecked:{
        height:20,
        width:20,
        marginRight:13,
        borderWidth:2,
        borderColor:'#e8e8e8',
        borderRadius:6,
        backgroundColor:'#fff',
        marginLeft:15,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:.3,
        shadowRadius:5,
        elevation:5,
    },
    left:{
        /*borderWidth:2,
        borderColor:'red',
        backgroundColor:'yellow',*/
        display:'flex',
        flexDirection:'row',
       
        alignItems:'center',
    },
    right:{
        justifyContent:'center',
    },
    todo_container:{
        borderWidth:2,
        borderColor:'green',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        marginHorizontal:10,
        padding:15,
        borderRadius:6,
    },
    todo_text:{
        flexWrap:'nowrap',
        maxWidth:250,
     
    },
    todo_text_style:{
       fontSize:15
    }
})

export default Todo;