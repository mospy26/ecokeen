import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Unauthenticated extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Unauthenticated")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 60, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
