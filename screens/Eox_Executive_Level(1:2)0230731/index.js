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
      <View style={styles.View_1_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fb1/9c38/8ede8c3d8af0f2e8ecfaf9b3bbbe0e04"
        }}
        style={styles.ImageBackground_1_4}
      />
      <View style={styles.View_1_6} />
      <View style={styles.View_1_7}>
        <Text style={styles.Text_1_7}>Executive</Text>
      </View>
      <View style={styles.View_1_8} />
      <View style={styles.View_1_9} />
      <View style={styles.View_1_10} />
      <View style={styles.View_1_11} />
      <View style={styles.View_1_12} />
      <View style={styles.View_1_13} />
      <View style={styles.View_1_14} />
      <View style={styles.View_1_15} />
      <View style={styles.View_1_16}>
        <Text style={styles.Text_1_16}>Login</Text>
      </View>
      <View style={styles.View_1_17}>
        <Text style={styles.Text_1_17}>EOX Home</Text>
      </View>
      <View style={styles.View_1_18}>
        <Text style={styles.Text_1_18}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de5/3c33/fc255103b3044af41ad2f0e42af8ac5d"
        }}
        style={styles.ImageBackground_1_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/066f/b983/40fbd5aa83125a01824a4e6e752bc303"
        }}
        style={styles.ImageBackground_1_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c44d/2790/6820b7969db447e78bf509a608ee654a"
        }}
        style={styles.ImageBackground_1_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfc4/a06b/265602f060bd2d90be490ff1ddb231fd"
        }}
        style={styles.ImageBackground_1_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c56d/cd2d/f48500c88310ca5b29087939f4af09c3"
        }}
        style={styles.ImageBackground_1_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c56d/cd2d/f48500c88310ca5b29087939f4af09c3"
        }}
        style={styles.ImageBackground_1_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8dc/bacb/3fc3e677d78c16c6c0d3f63d6672b625"
        }}
        style={styles.ImageBackground_1_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/3ab6/73cda98d5c57b78e7276fa17a475185d"
        }}
        style={styles.ImageBackground_1_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7ba/8377/37bbbeb907df5745da3bf33acacbac2b"
        }}
        style={styles.ImageBackground_1_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/3ab6/73cda98d5c57b78e7276fa17a475185d"
        }}
        style={styles.ImageBackground_1_28}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/3ab6/73cda98d5c57b78e7276fa17a475185d"
        }}
        style={styles.ImageBackground_1_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/3ab6/73cda98d5c57b78e7276fa17a475185d"
        }}
        style={styles.ImageBackground_1_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb2e/3ab6/73cda98d5c57b78e7276fa17a475185d"
        }}
        style={styles.ImageBackground_1_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2629/351c/2c0b229aa036560ff4e865ec010ef90a"
        }}
        style={styles.ImageBackground_1_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b516/8bc1/78c59ec6f15fd02235bea96d9f581e61"
        }}
        style={styles.ImageBackground_1_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ce8/f224/48db36ba38fc54f89657f89e3b6e864a"
        }}
        style={styles.ImageBackground_1_34}
      />
      <View style={styles.View_1_35}>
        <Text style={styles.Text_1_35}>Home (Dashboard)</Text>
      </View>
      <View style={styles.View_1_36}>
        <Text style={styles.Text_1_36}>Balance Sheets</Text>
      </View>
      <View style={styles.View_1_37}>
        <Text style={styles.Text_1_37}>Profit and Loss</Text>
      </View>
      <View style={styles.View_1_38}>
        <Text style={styles.Text_1_38}>Invoices</Text>
      </View>
      <View style={styles.View_1_39}>
        <Text style={styles.Text_1_39}>Accounts Receivables</Text>
      </View>
      <View style={styles.View_1_40}>
        <Text style={styles.Text_1_40}>Summary - Revenue,Expenses,EBITDA</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  ImageBackground_1_4: {
    width: wp("0.9722222222222222%"),
    height: hp("2.0433102800546448%"),
    top: hp("4.0866205601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.63888888888889%")
  },
  View_1_6: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("154.5081967213115%"),
    minHeight: hp("154.5081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.06944444444444445%"),
    top: hp("9.562841530054644%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_1_7: {
    width: wp("12.36111111111111%"),
    minWidth: wp("12.36111111111111%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("12.158469945355192%")
  },
  Text_1_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_8: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.01388888888889%"),
    top: hp("15.027322404371585%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_9: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.01388888888889%"),
    top: hp("29.918032786885245%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_10: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("44.80874316939891%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_11: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_12: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("78.14207650273224%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_13: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("95.90163934426229%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_14: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("111.47540983606557%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_15: {
    width: wp("21.38888888888889%"),
    minWidth: wp("21.38888888888889%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("127.04918032786885%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_1_16: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93055555555556%"),
    top: hp("17.62295081967213%")
  },
  Text_1_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_17: {
    width: wp("10.48611111111111%"),
    minWidth: wp("10.48611111111111%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.43055555555556%"),
    top: hp("32.51366120218579%")
  },
  Text_1_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_18: {
    width: wp("7.708333333333334%"),
    minWidth: wp("7.708333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.02777777777778%"),
    top: hp("47.404371584699454%")
  },
  Text_1_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_19: {
    width: wp("5.160371882892731e-8%"),
    minWidth: wp("5.160371882892731e-8%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.56944444444444%"),
    top: hp("55.32786885245902%")
  },
  ImageBackground_1_20: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0.00000429948114123974%"),
    minHeight: hp("0.00000429948114123974%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.569444444444446%"),
    top: hp("57.650273224043715%")
  },
  ImageBackground_1_21: {
    width: wp("0.0000018196569979206995%"),
    minWidth: wp("0.0000018196569979206995%"),
    height: hp("66.53005464480874%"),
    minHeight: hp("66.53005464480874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.22222222222222%"),
    top: hp("65.84699453551912%")
  },
  ImageBackground_1_22: {
    width: wp("6.738839096619308e-7%"),
    minWidth: wp("6.738839096619308e-7%"),
    height: hp("30.327868852459016%"),
    minHeight: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.569444444444446%"),
    top: hp("57.513661202185794%")
  },
  ImageBackground_1_23: {
    width: wp("9.713643420481175e-8%"),
    minWidth: wp("9.713643420481175e-8%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.638888888888886%"),
    top: hp("25.546448087431695%")
  },
  ImageBackground_1_24: {
    width: wp("9.713643420481175e-8%"),
    minWidth: wp("9.713643420481175e-8%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.638888888888886%"),
    top: hp("40.43715846994536%")
  },
  ImageBackground_1_25: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.5%"),
    top: hp("87.8415300546448%")
  },
  ImageBackground_1_26: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.29166666666667%"),
    top: hp("65.57377049180327%")
  },
  ImageBackground_1_27: {
    width: wp("6.805555555555555%"),
    minWidth: wp("6.805555555555555%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.333333333333336%"),
    top: hp("65.57377049180327%")
  },
  ImageBackground_1_28: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.29166666666667%"),
    top: hp("83.33333333333334%")
  },
  ImageBackground_1_29: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.29166666666667%"),
    top: hp("101.09289617486338%")
  },
  ImageBackground_1_30: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.29166666666667%"),
    top: hp("116.66666666666667%")
  },
  ImageBackground_1_31: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.29166666666667%"),
    top: hp("132.24043715846994%")
  },
  ImageBackground_1_32: {
    width: wp("1.1111111111111112%"),
    height: hp("2.33521174863388%"),
    top: hp("4.0866205601092895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.65277777777777%")
  },
  ImageBackground_1_33: {
    width: wp("1.1111111111111112%"),
    height: hp("0.58380293715847%"),
    top: hp("4.816374231557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.66666666666666%")
  },
  ImageBackground_1_34: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8055555555555554%"),
    top: hp("5.05464480874317%")
  },
  View_1_35: {
    width: wp("18.88888888888889%"),
    minWidth: wp("18.88888888888889%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("62.97814207650273%")
  },
  Text_1_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_36: {
    width: wp("15.138888888888888%"),
    minWidth: wp("15.138888888888888%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("80.73770491803278%")
  },
  Text_1_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_37: {
    width: wp("14.791666666666666%"),
    minWidth: wp("14.791666666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.041666666666664%"),
    top: hp("98.224043715847%")
  },
  Text_1_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_38: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.02777777777778%"),
    top: hp("114.07103825136613%")
  },
  Text_1_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_39: {
    width: wp("21.319444444444443%"),
    minWidth: wp("21.319444444444443%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.94444444444444%"),
    top: hp("129.37158469945356%")
  },
  Text_1_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_40: {
    width: wp("29.305555555555557%"),
    minWidth: wp("29.305555555555557%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.875%"),
    top: hp("63.52459016393443%")
  },
  Text_1_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1094 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
