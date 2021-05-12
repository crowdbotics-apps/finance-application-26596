import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_16_81}>
        <View style={styles.View_16_82}>
          <View style={styles.View_16_83}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16b8/eed1/cb502b6e8085fbfab18c83f4c6b33aeb"
              }}
              style={styles.ImageBackground_16_84}
            />
          </View>
          <View style={styles.View_16_86}>
            <Text style={styles.Text_16_86}>Apply</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_16_87}>
        <View style={styles.View_16_88}>
          <Text style={styles.Text_16_88}>Department</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ad8/e851/838a535ac847c72779bf805e2e61e824"
          }}
          style={styles.ImageBackground_16_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e545/7297/3b0b7ac62308e1af6c9cc33803b91f53"
          }}
          style={styles.ImageBackground_16_90}
        />
      </View>
      <View style={styles.View_161_7}>
        <View style={styles.View_161_8}>
          <Text style={styles.Text_161_8}>All</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bad6/3388/5d51fcbf5151ac1d9fe2ed74a4e68f01"
          }}
          style={styles.ImageBackground_161_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccb8/8a0b/e2d5e0c29d637ee384d52e5837811fef"
          }}
          style={styles.ImageBackground_161_10}
        />
      </View>
      <View style={styles.View_16_91}>
        <View style={styles.View_16_92}>
          <Text style={styles.Text_16_92}>Monthly</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e545/7297/3b0b7ac62308e1af6c9cc33803b91f53"
          }}
          style={styles.ImageBackground_16_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ad8/e851/838a535ac847c72779bf805e2e61e824"
          }}
          style={styles.ImageBackground_16_94}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06dd/5b5a/b524dad399387515bcb52032d004329c"
        }}
        style={styles.ImageBackground_16_95}
      />
      <View style={styles.View_16_96}>
        <Text style={styles.Text_16_96}>2021-01-01</Text>
      </View>
      <View style={styles.View_16_97}>
        <Text style={styles.Text_16_97}>2021-12-31</Text>
      </View>
      <View style={styles.View_16_98}>
        <Text style={styles.Text_16_98}>End Date</Text>
      </View>
      <View style={styles.View_16_99}>
        <Text style={styles.Text_16_99}>Start Date</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ba/e9b3/c2137839695755be30262899057b8068"
        }}
        style={styles.ImageBackground_16_100}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5da9/0faf/62129a160360963aa8aab1d33ce5bf88"
        }}
        style={styles.ImageBackground_16_101}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_16_81: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.529411764705882%"),
    minHeight: hp("8.529411764705882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.36681887366818%"),
    top: hp("3.5294117647058822%")
  },
  View_16_82: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.529411764705882%"),
    minHeight: hp("8.529411764705882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_16_83: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.529411764705882%"),
    minHeight: hp("8.529411764705882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_16_84: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.529411764705882%"),
    minHeight: hp("8.529411764705882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_16_86: {
    width: wp("4.10958904109589%"),
    minWidth: wp("4.10958904109589%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5007610350076135%"),
    top: hp("2.352941176470588%")
  },
  Text_16_86: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_87: {
    width: wp("31.202435312024352%"),
    minWidth: wp("31.202435312024352%"),
    height: hp("3.6764705882352944%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.920852359208524%"),
    top: hp("17.058823529411764%")
  },
  View_16_88: {
    width: wp("18.41704718417047%"),
    minWidth: wp("18.41704718417047%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_88: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_89: {
    width: wp("1.2937595129375952%"),
    minWidth: wp("1.2937595129375952%"),
    height: hp("1.4705882352941175%"),
    minHeight: hp("1.4705882352941175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.90867579908675%"),
    top: hp("0.882352941176471%")
  },
  ImageBackground_16_90: {
    width: wp("0.91324200913242%"),
    minWidth: wp("0.91324200913242%"),
    height: hp("1.7647058823529411%"),
    minHeight: hp("1.7647058823529411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.788432267884318%"),
    top: hp("0.735294117647058%")
  },
  View_161_7: {
    width: wp("28.15829528158295%"),
    minWidth: wp("28.15829528158295%"),
    height: hp("3.6764705882352944%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.31963470319634%"),
    top: hp("17.058823529411764%")
  },
  View_161_8: {
    width: wp("16.620262064708786%"),
    minWidth: wp("16.620262064708786%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_161_8: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_9: {
    width: wp("1.1675390478682843%"),
    minWidth: wp("1.1675390478682843%"),
    height: hp("1.4705882352941175%"),
    minHeight: hp("1.4705882352941175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.99075870136511%"),
    top: hp("0.882352941176471%")
  },
  ImageBackground_161_10: {
    width: wp("0.8241452401450053%"),
    minWidth: wp("0.8241452401450053%"),
    height: hp("1.7647058823529411%"),
    minHeight: hp("1.7647058823529411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.17492917320682%"),
    top: hp("0.735294117647058%")
  },
  View_16_91: {
    width: wp("31.202435312024352%"),
    minWidth: wp("31.202435312024352%"),
    height: hp("3.6764705882352944%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5220700152207%"),
    top: hp("17.058823529411764%")
  },
  View_16_92: {
    width: wp("10.273972602739725%"),
    minWidth: wp("10.273972602739725%"),
    minHeight: hp("3.6764705882352944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_16_92: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_93: {
    width: wp("0.91324200913242%"),
    minWidth: wp("0.91324200913242%"),
    height: hp("1.7647058823529411%"),
    minHeight: hp("1.7647058823529411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.78843226788432%"),
    top: hp("0.735294117647058%")
  },
  ImageBackground_16_94: {
    width: wp("1.2937595129375952%"),
    minWidth: wp("1.2937595129375952%"),
    height: hp("1.4705882352941175%"),
    minHeight: hp("1.4705882352941175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.90867579908676%"),
    top: hp("0.882352941176471%")
  },
  ImageBackground_16_95: {
    width: wp("31.202435312024352%"),
    minWidth: wp("31.202435312024352%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5220700152207%"),
    top: hp("35.88235294117647%")
  },
  View_16_96: {
    width: wp("7.838660578386605%"),
    minWidth: wp("7.838660578386605%"),
    minHeight: hp("2.941176470588235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5220700152207%"),
    top: hp("29.264705882352942%")
  },
  Text_16_96: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_97: {
    width: wp("7.838660578386605%"),
    minWidth: wp("7.838660578386605%"),
    minHeight: hp("2.941176470588235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.920852359208524%"),
    top: hp("29.264705882352942%")
  },
  Text_16_97: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_98: {
    width: wp("7.838660578386605%"),
    minWidth: wp("7.838660578386605%"),
    minHeight: hp("2.941176470588235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.920852359208524%"),
    top: hp("32.794117647058826%")
  },
  Text_16_98: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_99: {
    width: wp("7.838660578386605%"),
    minWidth: wp("7.838660578386605%"),
    minHeight: hp("2.941176470588235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5220700152207%"),
    top: hp("32.794117647058826%")
  },
  Text_16_99: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_100: {
    width: wp("2.13089802130898%"),
    minWidth: wp("2.13089802130898%"),
    height: hp("4.5588235294117645%"),
    minHeight: hp("4.5588235294117645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.59360730593607%"),
    top: hp("28.676470588235293%")
  },
  ImageBackground_16_101: {
    width: wp("31.202435312024352%"),
    minWidth: wp("31.202435312024352%"),
    height: hp("7.205882352941176%"),
    minHeight: hp("7.205882352941176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.920852359208524%"),
    top: hp("28.676470588235293%")
  },
  View_2: { height: 680 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
