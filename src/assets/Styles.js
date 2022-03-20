import { StyleSheet, Platform } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { COLORS, SIZES, FONTS } from './Colors'

export const CELL_SIZE = widthPercentageToDP(16);
export const CELL_BORDER_RADIUS = 15;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#000000';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    topLogin: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(60),
        justifyContent: "center",
        alignItems: "center"

    },
    bottomLogin: {
        flex: 1,
        width: widthPercentageToDP(90),
        alignSelf: "center",
        //backgroundColor:"red"
    },
    circle: {
        width: widthPercentageToDP(12),
        height: widthPercentageToDP(12),
        borderRadius: widthPercentageToDP(12) / 2,
        backgroundColor: COLORS.primaryColor
    },
    socialBtn: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(7),
        borderRadius: widthPercentageToDP(10),
        flexDirection: "row",
        //justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.primaryColor
    },
    normalBtn: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(7),
        borderRadius: widthPercentageToDP(10),
        //flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.primaryColor
    },
    btnText: {
        fontSize: SIZES.h3,
        color: COLORS.white,
        fontWeight: "500"
    },
    loginTitle: {
        fontSize: SIZES.h4,
        color: COLORS.black,
        fontWeight: "bold",
        marginTop: heightPercentageToDP(3),
        textAlign: "center",
        paddingLeft: widthPercentageToDP(5),
        paddingRight: widthPercentageToDP(5)
    },
    topSlider: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(55),
        alignItems: "center",
        //backgroundColor:"red"
    },
    slideImg: {
        width: widthPercentageToDP(90),
        height: widthPercentageToDP(110)
    },
    dotStyle: {
        width: widthPercentageToDP(100),
        alignItems: "center",
        //backgroundColor: "red",
        height: heightPercentageToDP(7),
        justifyContent: "center",
        //marginLeft: widthPercentageToDP(5)
    },
    bottomBtnView: {
        marginTop: heightPercentageToDP(5),
        width: widthPercentageToDP(85),
        height: heightPercentageToDP(7),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    skipBtn: {
        fontSize: widthPercentageToDP(5.5),
        color: COLORS.primaryColor,
        fontFamily: FONTS.bold
    },
    nxtBtn: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(7),
        borderRadius: widthPercentageToDP(10),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primaryColor,
        alignSelf: "center",
        marginTop: heightPercentageToDP(6)
    },
    loginInput: {
        marginTop: heightPercentageToDP(0.9),
        //width: widthPercentageToDP(70),
        fontSize: SIZES.h4,
        fontFamily: FONTS.medium,
        color: COLORS.black
    },
    inputContainer: {
        borderWidth: widthPercentageToDP(0.2),
        borderColor: COLORS.black,
        borderRadius: widthPercentageToDP(3),
        width: widthPercentageToDP(90),
        height: heightPercentageToDP(7),
        marginTop: heightPercentageToDP(5),
    },
    input:{
        fontSize: SIZES.h3,
        fontFamily: FONTS.regular,
        color: COLORS.black
    },
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
        //marginHorizontal: 8,
        height: CELL_SIZE,
        width: CELL_SIZE,
        lineHeight: CELL_SIZE - 5,
        ...Platform.select({ web: { lineHeight: 65 } }),
        fontSize: 30,
        textAlign: 'center',
        borderRadius: CELL_BORDER_RADIUS,
        color: '#000',
        backgroundColor: '#fff',

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 5,
    },
    focusCell: {
        borderColor: '#000',
    },
    profileLogoView:{
        width:widthPercentageToDP(27),
        height: widthPercentageToDP(27),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: COLORS.darkBlue,
        alignSelf:"center",
        borderRadius: widthPercentageToDP(27) / 2,
        marginTop:heightPercentageToDP(5)
    },
    profileImg:{
        width:widthPercentageToDP(26),
        height: widthPercentageToDP(26),
        borderRadius: widthPercentageToDP(26) / 2,
    },
    mapBottom:{
        position:"absolute",
        bottom:"2%",
        width:widthPercentageToDP(90),
        height:heightPercentageToDP(20),
        alignSelf:"center",
        //backgroundColor:"red"
    },
    card:{
        width:widthPercentageToDP(85),
        height:heightPercentageToDP(25),
        borderRadius: widthPercentageToDP(3),
        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        // Android
        elevation: 5,
    },
    settingBtn:{
        width:widthPercentageToDP(75),
        height:heightPercentageToDP(8),
        flexDirection:"row",
        alignItems:"center",
        //backgroundColor:"red",
        alignSelf:"center"
    }
})