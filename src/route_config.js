import { Easing, Animated } from 'react-native';
import HomeScreen from './pages/Home';
import DetailScreen from './pages/Detail';

const routePage = {
    Home: {
        screen: HomeScreen,
    },
    Detail: {
        screen: DetailScreen
    }
};

const routeConfig = {
    initialRouteName: 'Home',

    // 以下是为了统一安卓和ios导航风格的配置
    /*
    headerMode: 'float',
    headerLayoutPreset: 'center'
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;
            const Width = layout.initWidth;
            //沿X轴平移
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [Width, 0, -(Width - 10)],
            });
            //透明度
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return {opacity, transform: [{translateX}]};
        }
    })
    */
};

export { routePage, routeConfig };
