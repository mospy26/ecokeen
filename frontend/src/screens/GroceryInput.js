import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class GroceryInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            stage: 0,
            grocery: null,
            quantity: null,
        }
    }

    changeState = (toChange, value) =>{
        switch(toChange){
            case "grocery":
                this.setState({
                    grocery: value
                });
                break;
            case "quantity":
                this.setState({
                    quantity: value
                });
                break;
            default:
                break;
        }
    }

    incrementPage = () =>{
        if(this.state.stage>1){
            //handle submit
            //submit state to backend
        }
        else if(this.state.stage===0 && this.state.grocery || this.state.stage===1 && this.state.quantity){
            this.setState({
                stage: this.state.stage + 1,
            })
        }
    }

    renderPage = (question, options, toChange) =>{
        console.log(this.state)
        return (
            <View style={{backgroundColor:'white', flex:1}}>
                <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> BOUGHT SOME </Text>
                <Text style={{marginLeft: 20, color: 'black', fontSize: 40, fontWeight: 'bold', color:'#284142'}}> Groceries? </Text>
                <Text style={{marginLeft: 20, marginTop: 80, color: 'black', fontSize: 25, textAlign:'center', letterSpacing:1}}>{question}</Text>
                <DropDownPicker
                    items={options}
                    containerStyle={{height: 60, marginLeft: 20, marginRight: 20, marginTop: 20}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.changeState(toChange, item)}
                />
                <TouchableOpacity onPress={()=>{this.incrementPage()}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 12, marginTop: 20, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderSubmissionPage = () =>{
        return (
         <View style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
             <Image source={require('../../assets/submitted.png')} style={{alignItems:'center'}}/>
             <Text style={{marginLeft: 20, marginTop:40, color: 'black', fontSize: 40, fontWeight: 'bold', color:'#284142', textAlign:'center'}}> Submitted! </Text>
             <TouchableOpacity onPress={()=>{this.props.navigation.navigate("History")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 60, marginTop: 40, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>View History</Text>
            </TouchableOpacity>
         </View>
        )
     }

    render() {
        const groceryList = [
            {label: 'Doritos', value:"dor"},
            {label: 'Pringles', value:"pri"},
            {label: 'Smiths', value:"smi"},
            {label: 'Crackers', value:"cra"},
        ]
        const itemScale = [
            {label: '1 ', value:"1"},
            {label: '2 ', value:"2"},
            {label: '3 ', value:"3"},
            {label: '4 ', value:"4"},
            {label: '5', value:"5"},
        ]
        switch(this.state.stage){
            case 0:
               return this.renderPage("What did you buy?", groceryList, "grocery");
            case 1:
                return this.renderPage("How much did you buy?", itemScale, "quantity");
            default:
                return this.renderSubmissionPage();
        }
    }
}
