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
      <View style={styles.View_129_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9956/fc71/31ad6a775b7435061632e147ffecfa38"
          }}
          style={styles.ImageBackground_129_16}
        />
        <View style={styles.View_129_17}>
          <View style={styles.View_129_18}>
            <View style={styles.View_129_19} />
            <View style={styles.View_129_20}>
              <Text style={styles.Text_129_20}>2019 Value : 1.8M</Text>
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
  View_129_15: {
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
  ImageBackground_129_16: {
    width: wp("8.000000953674316%"),
    minWidth: wp("8.000000953674316%"),
    height: hp("21.568629320930032%"),
    minHeight: hp("21.568629320930032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("78.43137254901961%")
  },
  View_129_17: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("86.27450980392157%"),
    minHeight: hp("86.27450980392157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_129_18: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("86.27450980392157%"),
    minHeight: hp("86.27450980392157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_129_19: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("86.27450980392157%"),
    minHeight: hp("86.27450980392157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(139, 192, 210, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_129_20: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("62.745098039215684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9.803921568627452%")
  },
  Text_129_20: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 51 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
