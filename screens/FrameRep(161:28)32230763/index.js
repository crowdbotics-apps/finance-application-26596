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
      <View style={styles.View_161_29}>
        <View style={styles.View_161_30}>
          <View style={styles.View_161_31}>
            <View style={styles.View_161_32}>
              <View style={styles.View_161_33}>
                <View style={styles.View_161_34}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f39/2a1e/808284a05648efd37c6d6a005d1c7d62"
                    }}
                    style={styles.ImageBackground_161_35}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_161_37}>
        <View style={styles.View_161_38}>
          <View style={styles.View_161_39}>
            <View style={styles.View_161_40}>
              <Text style={styles.Text_161_40}>All</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_161_41}>
          <Text style={styles.Text_161_41}>Revenue</Text>
        </View>
        <View style={styles.View_161_42}>
          <Text style={styles.Text_161_42}>Expense</Text>
        </View>
        <View style={styles.View_161_43}>
          <Text style={styles.Text_161_43}>EBITDA</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_161_29: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9389671361502347%")
  },
  View_161_30: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_31: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_32: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_33: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_34: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_161_35: {
    width: wp("102.7190332326284%"),
    minWidth: wp("102.7190332326284%"),
    height: hp("93.89671361502347%"),
    minHeight: hp("93.89671361502347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_37: {
    width: wp("82.10764536324585%"),
    minWidth: wp("82.10764536324585%"),
    height: hp("75.11737089201877%"),
    minHeight: hp("75.11737089201877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.157099697885197%"),
    top: hp("10.328638497652582%")
  },
  View_161_38: {
    width: wp("75.01192582698026%"),
    minWidth: wp("75.01192582698026%"),
    height: hp("11.737089201877934%"),
    minHeight: hp("11.737089201877934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_39: {
    width: wp("75.01192582698026%"),
    minWidth: wp("75.01192582698026%"),
    height: hp("11.737089201877934%"),
    minHeight: hp("11.737089201877934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_161_40: {
    width: wp("75.01192582698026%"),
    minWidth: wp("75.01192582698026%"),
    minHeight: hp("11.737089201877934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_161_40: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_41: {
    width: wp("81.76975768858571%"),
    minWidth: wp("81.76975768858571%"),
    minHeight: hp("11.737089201877934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33788767466012004%"),
    top: hp("21.12676056338028%")
  },
  Text_161_41: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_42: {
    width: wp("67.24042172158232%"),
    minWidth: wp("67.24042172158232%"),
    minHeight: hp("11.737089201877934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33788767466012004%"),
    top: hp("42.25352112676057%")
  },
  Text_161_42: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_43: {
    width: wp("70.95722763199821%"),
    minWidth: wp("70.95722763199821%"),
    minHeight: hp("11.737089201877934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33788767466012004%"),
    top: hp("63.38028169014084%")
  },
  Text_161_43: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 213 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
