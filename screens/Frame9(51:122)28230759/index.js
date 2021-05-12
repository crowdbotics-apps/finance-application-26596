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
      <View style={styles.View_51_123} />
      <View style={styles.View_51_124}>
        <Text style={styles.Text_51_124}>Home</Text>
      </View>
      <View style={styles.View_51_125}>
        <Text style={styles.Text_51_125}>Balance Sheet</Text>
      </View>
      <View style={styles.View_51_126}>
        <Text style={styles.Text_51_126}>Profit and Loss</Text>
      </View>
      <View style={styles.View_51_127}>
        <Text style={styles.Text_51_127}>Invoices</Text>
      </View>
      <View style={styles.View_51_128}>
        <Text style={styles.Text_51_128}>Accounts Receivables</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/334c/8225/fae2ebcb4082ec6d7925b0a85af84724"
        }}
        style={styles.ImageBackground_51_129}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdf7/7697/865dc621e1ed5119c76957191e72ed4e"
        }}
        style={styles.ImageBackground_51_131}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d58/670e/4365bfdae082ba0b489108e1c364e88d"
        }}
        style={styles.ImageBackground_51_132}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9881/d6eb/9c9bf8dae92d296a8a210548c8bb7c4b"
        }}
        style={styles.ImageBackground_51_133}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19a2/1d93/ce3e2f6671255d240bade78af91925b5"
        }}
        style={styles.ImageBackground_51_134}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8049/b01e/305b2a46dcd504d9499302bb8a421210"
        }}
        style={styles.ImageBackground_51_135}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_51_123: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174.86338797814207%"),
    minHeight: hp("174.86338797814207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_51_124: {
    width: wp("16.86390532544379%"),
    minWidth: wp("16.86390532544379%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.443786982248522%"),
    top: hp("19.12568306010929%")
  },
  Text_51_124: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_125: {
    width: wp("41.124260355029584%"),
    minWidth: wp("41.124260355029584%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.443786982248522%"),
    top: hp("28.005464480874316%")
  },
  Text_51_125: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_126: {
    width: wp("43.49112426035503%"),
    minWidth: wp("43.49112426035503%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.443786982248522%"),
    top: hp("36.885245901639344%")
  },
  Text_51_126: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_127: {
    width: wp("23.668639053254438%"),
    minWidth: wp("23.668639053254438%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.443786982248522%"),
    top: hp("45.90163934426229%")
  },
  Text_51_127: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_128: {
    width: wp("61.24260355029586%"),
    minWidth: wp("61.24260355029586%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.556213017751478%"),
    top: hp("54.78142076502732%")
  },
  Text_51_128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_129: {
    width: wp("8.875739644970414%"),
    height: hp("3.551912568306011%"),
    top: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.579881656804734%")
  },
  ImageBackground_51_131: {
    width: wp("8.875739644970414%"),
    height: hp("3.551912568306011%"),
    top: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.579881656804734%")
  },
  ImageBackground_51_132: {
    width: wp("8.875739644970414%"),
    height: hp("3.551912568306011%"),
    top: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.579881656804734%")
  },
  ImageBackground_51_133: {
    width: wp("8.875739644970414%"),
    height: hp("3.551912568306011%"),
    top: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.579881656804734%")
  },
  ImageBackground_51_134: {
    width: wp("8.875739644970414%"),
    height: hp("3.551912568306011%"),
    top: hp("36.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.579881656804734%")
  },
  ImageBackground_51_135: {
    width: wp("7.100591715976331%"),
    minWidth: wp("7.100591715976331%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.467455621301776%"),
    top: hp("8.469945355191257%")
  },
  View_2: { height: 1280 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
