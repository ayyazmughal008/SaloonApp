import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
export const COLORS = {
    primaryColor: '#FE4E00',
    secondaryColor: '#FF402D',
    darkBlue: '#203052',
    seeGreen: '#3F8E8F',
    green:"#00c52e",
    lightBlack: '#4F4F4F',
    white: "#ffffff",
    black: "#000000",
    grey: '#BDBDBD',
    lightGrey: "#f1f1f1"
}

export const SIZES = {
    h1: widthPercentageToDP(2.5),
    h2: widthPercentageToDP(3.5),
    h3: widthPercentageToDP(4),
    h4: widthPercentageToDP(5),
    h5: widthPercentageToDP(6),
    h6: widthPercentageToDP(7),
    bigText: widthPercentageToDP(8)
}

export const FONTS = {
    bold: "Sofia-Pro-Bold-Az",
    light: "Sofia-Pro-Light-Az",
    medium: "Sofia-Pro-Medium-Az",
    regular: "Sofia-Pro-Regular-Az",
    semiBold: "Sofia-Pro-SemiBold-Az"
}
