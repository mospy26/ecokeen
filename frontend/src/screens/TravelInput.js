import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image, TouchableOpacity} from 'react-native'
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

    //TODO: add error repsonse whem trying to increment on nu   ll value
    incrementPage = () =>{
        if(this.state.stage>2){
            //handle submit
            //submit state to backend
        }
        else if((this.state.stage===0 && this.state.carBrand) || (this.state.stage===1 && this.state.distanceTravlled) || (this.state.stage===2 && this.state.petrolType)){
            this.setState({
                stage: this.state.stage + 1,
            })
        }
    }

    renderPage = (question, options, toChange) =>{
        console.log(this.state)
        return (
            <View style={{backgroundColor:'white', flex:1}}>
                <Text style={{marginLeft: 20, marginTop: 40, color: 'black', fontSize: 15}}> DID YOU </Text>
                <Text style={{marginLeft: 20, color: 'black', fontSize: 40, fontWeight: 'bold', color:'#284142'}}> Travel? </Text>
                <Text style={{marginLeft: 20, marginTop: 80, color: 'black', fontSize: 25, textAlign:'center', letterSpacing:1}}>{question}</Text>
                <DropDownPicker
                    items={options}
                    containerStyle={{height: 40, marginLeft: 20, marginRight: 20, marginTop: 20}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
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
             <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TravelHistory")}} style={{elevation: 8, backgroundColor: "#284243", borderRadius: 5, paddingVertical: 20, paddingHorizontal: 60, marginTop: 40, marginLeft: 20, marginRight:20}}>
                    <Text style={{fontSize: 18, color: "#fff", fontWeight: "bold", alignSelf: "center",textTransform: "uppercase"}}>View History</Text>
            </TouchableOpacity>
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
