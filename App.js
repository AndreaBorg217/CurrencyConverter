/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';

 import {StyleSheet, View, TextInput, Text, TouchableOpacity, FlatList, Image} from 'react-native';
 import DropDownPicker from 'react-native-dropdown-picker';
 import axios from 'axios'

DropDownPicker.setTheme("DARK");
DropDownPicker.setListMode("MODAL");

 
 const App = () => {
  const [data, setData] = useState()
  const [rates, setRates] = useState()

  const getSymbols = (json) =>{
    var symbols = [];
    for(var i in json.rates)
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

useEffect(() => {
  const fetchData = async () => {
    //const response = await axios.get('https://api.apilayer.com/fixer/latest?apikeyCh2wBSjnrmV8Zfov5zDJ7hOi5KLyBMzb=&base=EUR')
    const data = {
      "base": "EUR",
      "date": "2022-08-10",
      "rates": {
        "AED": 3.79306,
        "AFN": 93.462654,
        "ALL": 117.648625,
        "AMD": 419.042488,
        "ANG": 1.862,
        "AOA": 443.616601,
        "ARS": 138.432724,
        "AUD": 1.454947,
        "AWG": 1.858832,
        "AZN": 1.751838,
        "BAM": 1.973015,
        "BBD": 2.086049,
        "BDT": 98.125219,
        "BGN": 1.952193,
        "BHD": 0.389274,
        "BIF": 2110.291122,
        "BMD": 1.032685,
        "BND": 1.423081,
        "BOB": 7.113389,
        "BRL": 5.218979,
        "BSD": 1.033189,
        "BTC": 4.2956063e-05,
        "BTN": 82.107561,
        "BWP": 12.947043,
        "BYN": 2.608318,
        "BYR": 20240.619521,
        "BZD": 2.082519,
        "CAD": 1.31894,
        "CDF": 2066.402346,
        "CHF": 0.972562,
        "CLF": 0.033223,
        "CLP": 916.734997,
        "CNY": 6.943458,
        "COP": 4419.745809,
        "CRC": 690.971663,
        "CUC": 1.032685,
        "CUP": 27.366144,
        "CVE": 111.891208,
        "CZK": 24.335418,
        "DJF": 183.939233,
        "DKK": 7.440535,
        "DOP": 56.02272,
        "DZD": 147.862918,
        "EGP": 19.791611,
        "ERN": 15.49027,
        "ETB": 53.904469,
        "EUR": 1,
        "FJD": 2.238189,
        "FKP": 0.869869,
        "GBP": 0.843683,
        "GEL": 2.793453,
        "GGP": 0.869869,
        "GHS": 9.103138,
        "GIP": 0.869869,
        "GMD": 55.970636,
        "GNF": 9087.624887,
        "GTQ": 7.991529,
        "GYD": 216.150575,
        "HKD": 8.103838,
        "HNL": 25.352136,
        "HRK": 7.512474,
        "HTG": 131.212589,
        "HUF": 393.523095,
        "IDR": 15266.642176,
        "ILS": 3.368292,
        "IMP": 0.869869,
        "INR": 81.654993,
        "IQD": 1507.719617,
        "IRR": 43734.195467,
        "ISK": 140.135417,
        "JEP": 0.869869,
        "JMD": 157.289466,
        "JOD": 0.732229,
        "JPY": 136.975348,
        "KES": 123.234915,
        "KGS": 84.917972,
        "KHR": 4246.399661,
        "KMF": 497.598713,
        "KPW": 929.416194,
        "KRW": 1339.748317,
        "KWD": 0.316218,
        "KYD": 0.860991,
        "KZT": 494.108897,
        "LAK": 15727.787612,
        "LBP": 1567.103051,
        "LKR": 368.830537,
        "LRD": 158.514826,
        "LSL": 17.145959,
        "LTL": 3.049249,
        "LVL": 0.624661,
        "LYD": 5.034378,
        "MAD": 10.600479,
        "MDL": 19.888731,
        "MGA": 4321.785365,
        "MKD": 62.064984,
        "MMK": 2171.204436,
        "MNT": 3247.442164,
        "MOP": 8.351057,
        "MRO": 368.668249,
        "MUR": 47.141041,
        "MVR": 15.883162,
        "MWK": 1050.240127,
        "MXN": 20.626223,
        "MYR": 4.600594,
        "MZN": 65.916197,
        "NAD": 17.140469,
        "NGN": 432.37455,
        "NIO": 37.077642,
        "NOK": 9.822287,
        "NPR": 131.371976,
        "NZD": 1.607973,
        "OMR": 0.397551,
        "PAB": 1.033189,
        "PEN": 4.062069,
        "PGK": 3.640175,
        "PHP": 57.199885,
        "PKR": 231.708596,
        "PLN": 4.670592,
        "PYG": 7109.454407,
        "QAR": 3.760007,
        "RON": 4.907934,
        "RSD": 117.349102,
        "RUB": 63.381049,
        "RWF": 1062.632525,
        "SAR": 3.882415,
        "SBD": 8.499554,
        "SCR": 13.162331,
        "SDG": 589.147398,
        "SEK": 10.367803,
        "SGD": 1.413947,
        "SHP": 1.422421,
        "SLL": 14390.460997,
        "SOS": 599.989489,
        "SRD": 24.373434,
        "STD": 21374.487675,
        "SVC": 9.040656,
        "SYP": 2594.650627,
        "SZL": 17.139212,
        "THB": 36.437267,
        "TJS": 10.569357,
        "TMT": 3.624723,
        "TND": 3.239017,
        "TOP": 2.41493,
        "TRY": 18.427738,
        "TTD": 7.021489,
        "TWD": 30.901002,
        "TZS": 2408.220882,
        "UAH": 38.159872,
        "UGX": 3993.437468,
        "USD": 1.032685,
        "UYU": 41.528309,
        "UZS": 11251.099675,
        "VND": 24154.494418,
        "VUV": 122.782102,
        "WST": 2.809904,
        "XAF": 661.714113,
        "XAG": 0.049808,
        "XAU": 0.000575,
        "XCD": 2.790882,
        "XDR": 0.782306,
        "XOF": 663.502433,
        "XPF": 120.875582,
        "YER": 258.429196,
        "ZAR": 16.712036,
        "ZMK": 9295.366311,
        "ZMW": 16.557356,
        "ZWL": 332.524042
      },
      "success": true,
      "timestamp": 1660147625
    };
    if(data){
      setData(data)
      setRates(data.rates)
      setBases(getSymbols(data))
      setResult(getSymbols(data))
    }
  }
  fetchData()
}, [])

useEffect(() => {
  if(text) setOutput(((text * data.rates[to])/data.rates[from]).toFixed(4))
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
   flex: 1
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
  transform: [{translateX: 90},{translateY: -150}],
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
  transform: [{translateX: 270},{translateY: -510}],
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
 