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
      <View style={styles.View_32_1}>
        <View style={styles.View_14_145} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/516e/8b497360849c17e3784dd88ef1a32c1c"
          }}
          style={styles.ImageBackground_14_148}
        />
      </View>
      <View style={styles.View_14_143}>
        <View style={styles.View_14_144}>
          <View style={styles.View_14_146}>
            <Text style={styles.Text_14_146}>Logistics : $1.25 M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_32_1: {
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
  View_14_145: {
    width: wp("94.33962264150944%"),
    minWidth: wp("94.33962264150944%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490567%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(139, 192, 210, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_14_148: {
    width: wp("8.490565138043097%"),
    minWidth: wp("8.490565138043097%"),
    height: hp("18.181820349259812%"),
    minHeight: hp("18.181820349259812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_14_143: {
    width: wp("82.0754716981132%"),
    minWidth: wp("82.0754716981132%"),
    height: hp("72.72727272727273%"),
    minHeight: hp("72.72727272727273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.320754716981133%"),
    top: hp("13.636363636363635%")
  },
  View_14_144: {
    width: wp("82.0754716981132%"),
    minWidth: wp("82.0754716981132%"),
    height: hp("72.72727272727273%"),
    minHeight: hp("72.72727272727273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_146: {
    width: wp("82.0754716981132%"),
    minWidth: wp("82.0754716981132%"),
    minHeight: hp("72.72727272727273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_146: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 44 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
