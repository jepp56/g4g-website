import { useCallback } from 'react';
import { Image, StyleSheet, Platform, View, Text, Dimensions, Pressable, Linking, Alert, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const instagramURL = 'https://www.instagram.com/_goods4good/';
  const etsyURL = 'https://www.etsy.com/shop/goodsfgood/';
  const webURL = 'https://www.instagram.com/_goods4good/';
  const emailURL = 'angelazhong12@gmail.com';

  type OpenURLButtonProps = {
    url: string;
    logo: string;
    children: string;
  };
  const OpenURLButton = ({url, logo, children}: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
    if(logo == 'insta'){
      return <Pressable onPress={handlePress}><Image source={require('@/assets/images/5.png')} style={{resizeMode: 'center', height: height*0.1}}></Image></Pressable>;
    }else if(logo == 'email'){
      return <Pressable onPress={handlePress}><Image source={require('@/assets/images/7.png')} style={{resizeMode: 'center', height: height*0.1}}></Image></Pressable>;
    }else if(logo == 'etsy'){
      return <Pressable onPress={handlePress}><Image source={require('@/assets/images/4.png')} style={{resizeMode: 'center', height: height*0.1}}></Image></Pressable>;
    }else if(logo == 'web'){
      return <Pressable onPress={handlePress}><Image source={require('@/assets/images/6.png')} style={{resizeMode: 'center', height: height*0.1}}></Image></Pressable>;
    }
    
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {{flex: 1}}>
        <ScrollView>
          <View style = {{backgroundColor: '#A6BFDD', alignItems: 'center'}}>
            <Image source={require('@/assets/images/2.png')} style={{resizeMode: 'center', height: height*0.1}}></Image>
          </View>
          <View style = {{backgroundColor: 'white', flexDirection:'row', justifyContent: 'space-evenly', paddingTop: height*0.008, paddingBottom: height*0.008, paddingLeft: width*0.35, paddingRight: width*0.35}}>
            <Text style = {styles.topRow}>About</Text>
            <Text style = {styles.topRow}>Team</Text>
            <Text style = {styles.topRow}>Projects</Text>
            <Text style = {styles.topRow}>Catalog</Text>
            <Text style = {styles.topRow}>Contact</Text>
          </View>
          <View style = {{flexDirection: 'row', height: height*0.884}}>
            <View style = {{flex: 1, backgroundColor: '#EAE9E6'}}>
              <View style = {{flex: 1}}></View>
              <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style = {{fontSize: height*0.05, color: '#6C6E84'}}>introducing </Text>
                <Text style = {{fontSize: height*0.05, color: '#86AEDD'}}>goods4goods</Text>
              </View>
              <View style = {{flex: 2, paddingLeft: width*0.05, paddingRight: width*0.05}}>
                <Text style = {{color: '#2B2D42', fontSize: height*0.02, lineHeight: height*0.03}}>Orgetorix had been the most noble and rich among Helvetians by far. He (orgetorix), with Marcus Messala and Marcus Pupius Piso being consuls, having been influenced by desire of the kingdom made a conspiracy of the nobility, and he persuaded the state that down from their own boarders with all their abundance to go out: that it is easy, since they surpass all in respect to virtue, to acquire the authority of all of Gaul. He persuaded this thing to them rather easily, because on all sides by nature of the place the </Text>
              </View>
              <View style = {{flex: 2, flexDirection: 'row', width: '50%', alignItems: 'stretch'}}>
                <View style={{flex: 1}}><OpenURLButton url={instagramURL} logo={'insta'}>Open Supported URL</OpenURLButton></View>
                <View style={{flex: 1}}><OpenURLButton url={etsyURL} logo={'etsy'}>Open Supported URL</OpenURLButton></View>
                <View style={{flex: 1}}><OpenURLButton url={webURL} logo={'web'}>Open Supported URL</OpenURLButton></View>
                <View style={{flex: 1}}><OpenURLButton url={emailURL} logo={'email'}>Open Supported URL</OpenURLButton></View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Image source={require('@/assets/images/sunset.png')} style={{height: '100%', width: 'auto'}}></Image>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  topRow: {
    color: '#6C6E84'
  },
});
