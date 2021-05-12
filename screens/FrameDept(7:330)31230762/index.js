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
      <View style={styles.View_7_331}>
        <View style={styles.View_7_332}>
          <View style={styles.View_7_333}>
            <View style={styles.View_7_334}>
              <View style={styles.View_7_335}>
                <View style={styles.View_7_336}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a33b/3af3/1ef352554f6befa94f62b31a77a44deb"
                    }}
                    style={styles.ImageBackground_7_337}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_7_339}>
              <View style={styles.View_7_340}>
                <View style={styles.View_7_341}>
                  <View style={styles.View_7_342}>
                    <Text style={styles.Text_7_342}>Overall</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_7_343}>
                <Text style={styles.Text_7_343}>Insurance</Text>
              </View>
              <View style={styles.View_7_344}>
                <Text style={styles.Text_7_344}>Logistics</Text>
              </View>
              <View style={styles.View_7_345}>
                <Text style={styles.Text_7_345}>Service Cs</Text>
              </View>
              <View style={styles.View_16_8}>
                <Text style={styles.Text_16_8}>Service New Business</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_7_331: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_332: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_333: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_334: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_335: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_336: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_337: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_339: {
    width: wp("79.93420769186581%"),
    minWidth: wp("79.93420769186581%"),
    height: hp("86.86440677966102%"),
    minHeight: hp("86.86440677966102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("6.779661016949152%")
  },
  View_7_340: {
    width: wp("73.02631602567786%"),
    minWidth: wp("73.02631602567786%"),
    height: hp("10.59322033898305%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_341: {
    width: wp("73.02631602567786%"),
    minWidth: wp("73.02631602567786%"),
    height: hp("10.59322033898305%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_342: {
    width: wp("73.02631602567786%"),
    minWidth: wp("73.02631602567786%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_7_342: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_343: {
    width: wp("79.60526410271139%"),
    minWidth: wp("79.60526410271139%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32894358915441213%"),
    top: hp("19.06779661016949%")
  },
  Text_7_343: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_344: {
    width: wp("65.46052820542279%"),
    minWidth: wp("65.46052820542279%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32894358915441213%"),
    top: hp("38.13559322033899%")
  },
  Text_7_344: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_345: {
    width: wp("69.07894807703356%"),
    minWidth: wp("69.07894807703356%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32894358915441213%"),
    top: hp("57.20338983050847%")
  },
  Text_7_345: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_8: {
    width: wp("69.07894807703356%"),
    minWidth: wp("69.07894807703356%"),
    minHeight: hp("10.59322033898305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.32894358915441213%"),
    top: hp("76.27118644067797%")
  },
  Text_16_8: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 236 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
