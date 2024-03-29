import React from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import {icons,SIZES} from '../../../constants'
const jobTypes= ['Full-time','Part-time','Contractor']
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter();
  const [message, setMessage] = useState('');

  // 👇️ called every time input's value changes
  const handleChange = event => {
    setMessage(event.target.value);
  };
  const [activeJobType,setactiveJobType]= useState('Full-time')
  return (
    <View>
     <View style={styles.container}>
        <Text style={styles.userName}>Hello Luis</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
     </View>
     <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
        style={styles.searchInput}
        onChange={(text)=>setSearchTerm(text)}
        value={searchTerm}
        placeholder="What are you looking for?"
        />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
        <Image
          source={icons.search}
          //resizeMode='contain'
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
   

     </View>
    <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={({item})=>(
          <TouchableOpacity
            style={styles.tab(activeJobType,item)}
            onPress={()=>{
              setactiveJobType(item);
              router.push(`/search/${item}`)
            }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
      />
    </View>
    </View>
  )
}

export default Welcome