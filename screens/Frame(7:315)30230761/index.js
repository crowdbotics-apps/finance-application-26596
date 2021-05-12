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
      <View style={styles.View_7_317}>
        <View style={styles.View_7_318}>
          <View style={styles.View_7_319}>
            <View style={styles.View_7_320}>
              <View style={styles.View_7_321}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aba4/fcb8/045f558c1e965b6ef5d30f13f6d08d02"
                  }}
                  style={styles.ImageBackground_7_322}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_7_324}>
            <View style={styles.View_7_328}>
              <Text style={styles.Text_7_328}>Quarterly</Text>
            </View>
            <View style={styles.View_7_329}>
              <Text style={styles.Text_7_329}>Monthly</Text>
            </View>
            <View style={styles.View_94_2}>
              <Text style={styles.Text_94_2}>Yearly</Text>
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
  View_7_317: {
    width: wp("94.05405405405406%"),
    minWidth: wp("94.05405405405406%"),
    height: hp("86.61971830985915%"),
    minHeight: hp("86.61971830985915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_318: {
    width: wp("94.05405405405406%"),
    minWidth: wp("94.05405405405406%"),
    height: hp("86.61971830985915%"),
    minHeight: hp("86.61971830985915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_319: {
    width: wp("94.05405405405406%"),
    minWidth: wp("94.05405405405406%"),
    height: hp("62.676056338028175%"),
    minHeight: hp("62.676056338028175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_320: {
    width: wp("94.05405405405406%"),
    minWidth: wp("94.05405405405406%"),
    height: hp("62.676056338028175%"),
    minHeight: hp("62.676056338028175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_321: {
    width: wp("94.05405405405406%"),
    minWidth: wp("94.05405405405406%"),
    height: hp("62.676056338028175%"),
    minHeight: hp("62.676056338028175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_322: {
    width: wp("94.05405405405406%"),
    minWidth: wp("94.05405405405406%"),
    height: hp("62.676056338028175%"),
    minHeight: hp("62.676056338028175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_324: {
    width: wp("74.87197463576858%"),
    minWidth: wp("74.87197463576858%"),
    height: hp("80.98591549295774%"),
    minHeight: hp("80.98591549295774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.187777132601351%"),
    top: hp("5.633802816901409%")
  },
  View_7_328: {
    width: wp("74.87197463576858%"),
    minWidth: wp("74.87197463576858%"),
    minHeight: hp("17.6056338028169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_7_328: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_329: {
    width: wp("61.568277719858536%"),
    minWidth: wp("61.568277719858536%"),
    minHeight: hp("17.6056338028169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.690140845070424%")
  },
  Text_7_329: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_94_2: {
    width: wp("61.568277719858536%"),
    minWidth: wp("61.568277719858536%"),
    minHeight: hp("17.6056338028169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.38028169014085%")
  },
  Text_94_2: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 142 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
