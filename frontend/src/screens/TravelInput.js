import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default class TravelInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            stage: 0,
            carBrand: null,
            distanceTravlled: null,
            petrolType: null
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
                <Text> Did you travel? </Text>
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

    changeState = (toChange, value) =>{
        switch(toChange){
            case "carBrand":
                this.setState({
                    carBrand: value
                });
                break;
            case "distanceTravlled":
                this.setState({
                    distanceTravlled: value
                });
                break;
            case "petrolType":
                this.setState({
                    petrolType: value
                });
                break;
            default:
                break;
        }
    }

    render() {
        const carBrands = [
            { label: 'Hyundai', value: 'hyundai'},
            { label: 'Ford', value: 'ford'},
            { label: 'Holden', value: 'holden'},
            { label: 'Audi', value: 'audi'},
            { label: 'Tesla',value: 'tesla'},
            ]
        const distancesTravelled = [
            {label: '0 - 1 kilometers', value:"0-1"},
            {label: '1 - 2 kilometers', value:"1-2"},
            {label: '2 - 4 kilometers', value:"2-4"},
            {label: '4 - 6 kilometers', value:"4-6"},
            {label: '6 - 8 kilometers', value:"6-8"},
            {label: '8 - 10 kilometers', value:"8-10"},
            {label: '10 - 15 kilometers', value:"10-15"},
            {label: '15 - 30 kilometers', value:"15-30"},
            {label: '30 - 50 kilometers', value:"30-50"},
            {label: '50 - 100 kilometers', value:"50-100"},
            {label: '100+ kilometers', value:"100+"},
        ]
        const petrolTypes=[
            {label: 'Diesal', value: 'diesal'},
            {label: 'Unleaded 95', value: 'ul95'},
            {label: 'Unleaded 97', value: 'ul97'},
        ]

        switch(this.state.stage){
            case 0:
               return this.renderPage("What is your Car Brand?", carBrands, "carBrand");
            case 1:
                return this.renderPage("How far did you travel?", distancesTravelled, "distanceTravlled");
            case 2:
               return this.renderPage("What type of petrol did you use?", petrolTypes, "petrolType");
            default:
                return this.renderSubmissionPage();
        }
    }
}
