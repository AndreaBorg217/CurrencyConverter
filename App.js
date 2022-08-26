/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect, useMemo} from 'react';

 import {StyleSheet, View, TextInput, Text, TouchableOpacity, FlatList, Image, StatusBar} from 'react-native';
 import DropDownPicker from 'react-native-dropdown-picker';
 import axios from 'axios'

DropDownPicker.setTheme("DARK");
DropDownPicker.setListMode("MODAL");

 
 const App = () => {
  const [data, setData] = useState()
  const [rates, setRates] = useState()

  const getSymbols = (json) =>{
    var symbols = [];
    for(var i in json?.rates)
      symbols.push({label: i, value: i});
    return symbols;
  }

   const [openFrom, setOpenFrom] = useState(false);
   const [value, setValue] = useState();
   const [baseCurrencies, setBases] = useState();
   const [from, setFrom] = useState('EUR')
 
   const [openTo, setOpenTo] = useState(false);
   const [resultCurrencies, setResult] = useState();
   const [to, setTo] = useState('EUR')
   const [output, setOutput] = useState(0);

   const [text, setText] = useState('');

   useMemo(() => {
    setRates(data?.rates)
    setBases(getSymbols(data))
    setResult(getSymbols(data))
  }, [data])


useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get('https://api.apilayer.com/exchangerates_data/latest?apikey=' + key + '&base=EUR')
    if(response){
      const data = response.data
      setData(data)
    }
  }
  fetchData().catch((error) => {console.error(error)});
}, [])



useEffect(() => {
  if(text) setOutput(((text * data?.rates[to])/data?.rates[from]).toFixed(4))
}, [text, data, from, to])

 
 const handleClick = (num) => {
   setText(prev => prev.concat(num));
 }
 
 
 const Key = ({content}) => {
   return(
       <TouchableOpacity style = {styles.key} onPress = {() => handleClick(content)}>
           <Text style = {styles.content}>{content}</Text>
       </TouchableOpacity>
   );
 };
 
 const numpad = ['7', '8', '9', '4', '5', '6', '1', '2', '3']
 const finalRow = ['0', '.']
 
   return (
     <View style = {styles.container}>
     <StatusBar translucent={true}></StatusBar>
         <View style = {styles.dropdownContainerIn}>
           <TextInput
             keyboardType = "number-pad"
             style = {styles.toAmount}
             placeholder="Amount"
             placeholderTextColor="white" 
             value = {text}
             editable = {false}
             maxLength = {18}
           />
           <DropDownPicker
             placeholder={from}
             open={openFrom}
             items={baseCurrencies}
             setOpen={setOpenFrom}
             onOpen={() => setOpenTo(false)}
             setItems={setBases}
             onSelectItem={(from) => {setFrom(from.label)}}
             style={styles.dropdown}
             textStyle={styles.dropdownText}
             dropDownContainerStyle={styles.dropdownOption}
             searchable = {true}
             searchPlaceholder="Search"
         />
       </View>
       {!openFrom?(
        <View style = {styles.dropdownContainerOut}>
          <View style = {styles.outCont}>
            <Text style = {styles.output}>{output}</Text>
          </View>
            <DropDownPicker
              placeholder={to}
              open={openTo}
              items={resultCurrencies}
              setOpen={setOpenTo}
              onOpen={() => setOpenFrom(false)}
              setItems={setResult}
              onSelectItem={(to) => {setTo(to.label)}}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropDownContainerStyle={styles.dropdownOption}
              searchable = {true}
              searchPlaceholder="Search"
          />
        </View>
       ): <View style = {styles.placeholder}/>}

      <View style = {styles.keyboard}>
       <FlatList
          data = {numpad}
          style = {styles.numpad}
          renderItem= {({item}) => <Key content = {item}/>}
          keyExtractor={(item, index) => index}
          numColumns = {3}
       />
       <FlatList
          style = {styles.finalRow}
          data = {finalRow}
          renderItem= {({item}) => <Key content = {item}/>}
          keyExtractor={(item, index) => index}
          numColumns = {3}
       />
       <TouchableOpacity style = {styles.bigKey} onPress={()=> {setText(''); setOutput(0)}}>
        <Text style = {styles.content}>AC</Text>
       </TouchableOpacity>
       <TouchableOpacity style = {styles.bigKey} onPress={()=> {setText(text.slice(0, text.length-1)); setOutput(text/2)}}>
        <Image style = {styles.arrow} source={require('./assets/arrow.png')}/>
       </TouchableOpacity>
      </View>

   </View>
   );
 };
 
 const styles = StyleSheet.create({
 container:{ 
   backgroundColor: '#123',
   alignItems: 'center',
   justifyContent: 'center',
   flex: 1,
 },
 text:{
   fontSize: 30,
   fontWeight: 'bold'
 },
 dropdown:{
   backgroundColor: "transparent",
   borderColor: 'white',
   borderWidth: 3,
   width: 120,
   height: 60,
   borderRadius: 3,
 },
 dropdownText:{
   fontSize: 15,
   fontWeight: 'bold',
   color: 'white',
 },
 dropdownContainerIn:{
   flexDirection: 'row',
   transform: [{translateX: 140}, {translateY: 160}],
   marginRight: 20,
   marginTop: 90
 },
 dropdownContainerOut:{
   flexDirection: 'row',
   transform: [{translateX: 140},{translateY: 220}],
 },
 toAmount:{
   width: 220,
   height: 60, 
   borderColor: 'white',
   borderWidth: 3,
   borderRadiusLeft: 3,
   borderRightWidth: 0,
   color: 'white',
   fontSize: 20,
   paddingLeft: 15,
 },
 outCont:{
   width: 220,
   height: 60, 
   borderColor: 'white',
   borderWidth: 3,
   borderRadiusLeft: 3,
   borderRightWidth: 0,
   paddingTop: 13,
   paddingLeft: 15,
 }, 
 output:{
   color: 'white',
   fontSize: 20,
 },
 key:{
  width: 90,
  height: 70,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 3,
  borderRadius: 15
 },
 content:{
  color: 'black',
  fontSize: 20,
  fontWeight: 'bold'
 },
 keyboard:{
  transform: [{translateX: -45},{translateY: 400}],

 },
 finalRow:{
  transform: [{translateX: 90},{translateY: -205}],
 },
 numpad:{
  transform: [{translateY: -70}]
 },
 bigKey:{
  backgroundColor: 'orange',
  width: 90,
  height: 140,
  borderColor: 'black',
  borderWidth: 3,
  borderRadius: 15,
  transform: [{translateX: 270},{translateY: -620}],
  alignItems: 'center',
  justifyContent: 'center',
 },
 arrow:{
  width: 25,
  height: 25,
 },
 placeholder:{
  width: 340,
  height: 60
 }
 });
 
 export default App;
 