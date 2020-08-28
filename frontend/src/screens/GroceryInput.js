import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
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
        //need to add check for null values on state, currently possible to submit without selecting a value
        if(this.state.stage>2){
            //handle submit
            //submit state to backend
        }
        else{
            this.setState({
                stage: this.state.stage + 1,
            })
        }
    }

    renderPage = (question, options, toChange) =>{
        console.log(this.state)
        return (
            <View>
                <Text> Bought some Groceries? </Text>
                <Text>{question}</Text>
                <DropDownPicker
                    items={options}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.changeState(toChange, item)}
                />
                <Button title="Next" onPress={()=>{this.incrementPage()}}/>
            </View>
        )
    }

    renderSubmissionPage = () =>{
        return (
         <View>
             <Text> Submitted! </Text>
             <Button title="View History"/>
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
