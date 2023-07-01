import {Stack} from "expo-router";
import { useCallback } from "react";
import {useFonts} from 'expo-font'
import * as SplashScreens from 'expo-splash-screen'
SplashScreens.preventAutoHideAsync();
const Layout = ()=> {
    const [fontsLoaded] = useFonts({
        DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular:require('../assets/fonts/DMSans-Regular.ttf')
    })
    const onLayoutRootView=useCallback(async()=>{
        if(fontsLoaded){
            await SplashScreens.hideAsync();
        }
    },[fontsLoaded])
    if(!fontsLoaded) return null;
    
    return <Stack onLayout={onLayoutRootView}></Stack>;
}
export default Layout;