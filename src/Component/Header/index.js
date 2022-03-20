import React from 'react'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'
import { COLORS, FONTS, SIZES } from '../../assets/Colors'
import { View, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import FastImage from 'react-native-fast-image'


const HeaderMenu = props => {
    return (
        <Header
            placement="left"
            centerComponent={
                <FastImage
                    source={require('../../images/logo.png')}
                    style={{
                        width: widthPercentageToDP(35),
                        height: widthPercentageToDP(10)
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            }
            rightComponent={
                <View style={{ flexDirection: "row", alignItems: "center",marginTop:heightPercentageToDP(1) }}>
                    <TouchableOpacity onPress={props.onSearchClick}>
                        <FastImage
                            source={require('../../images/search.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                marginRight:widthPercentageToDP(5)
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FastImage
                            source={require('../../images/setting.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7),
                                marginRight:widthPercentageToDP(5)
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FastImage
                            source={require('../../images/notification.png')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={{
                                width: widthPercentageToDP(7),
                                height: widthPercentageToDP(7)
                            }}
                        />
                    </TouchableOpacity>
                </View>
            }

            containerStyle={{
                backgroundColor: COLORS.darkBlue,
                borderBottomWidth: 0,
                height: heightPercentageToDP(14)
            }}
            statusBarProps={{
                backgroundColor: COLORS.darkBlue
            }}
            barStyle="light-content"
        />
    )
}

export default HeaderMenu;