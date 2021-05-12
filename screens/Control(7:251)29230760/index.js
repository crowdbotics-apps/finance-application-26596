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
      <View style={styles.View_7_252} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc26/d67f/65f1cd99fa6abcebc54193b1676d26f9"
        }}
        style={styles.ImageBackground_7_253}
      />
      <View style={styles.View_7_257} />
      <View style={styles.View_7_258}>
        <View style={styles.View_7_259}>
          <View style={styles.View_7_260}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16b8/eed1/cb502b6e8085fbfab18c83f4c6b33aeb"
              }}
              style={styles.ImageBackground_7_261}
            />
          </View>
          <View style={styles.View_7_263}>
            <Text style={styles.Text_7_263}>Apply</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_264}>
        <View style={styles.View_7_265}>
          <Text style={styles.Text_7_265}>Department</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ad8/e851/838a535ac847c72779bf805e2e61e824"
          }}
          style={styles.ImageBackground_7_266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e545/7297/3b0b7ac62308e1af6c9cc33803b91f53"
          }}
          style={styles.ImageBackground_7_267}
        />
      </View>
      <View style={styles.View_7_273}>
        <View style={styles.View_7_274}>
          <Text style={styles.Text_7_274}>Monthly</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e545/7297/3b0b7ac62308e1af6c9cc33803b91f53"
          }}
          style={styles.ImageBackground_7_275}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ad8/e851/838a535ac847c72779bf805e2e61e824"
          }}
          style={styles.ImageBackground_7_276}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06dd/5b5a/b524dad399387515bcb52032d004329c"
        }}
        style={styles.ImageBackground_7_277}
      />
      <View style={styles.View_7_279}>
        <Text style={styles.Text_7_279}>2021-01-01</Text>
      </View>
      <View style={styles.View_7_280}>
        <Text style={styles.Text_7_280}>2021-12-31</Text>
      </View>
      <View style={styles.View_7_282}>
        <Text style={styles.Text_7_282}>End Date</Text>
      </View>
      <View style={styles.View_7_284}>
        <Text style={styles.Text_7_284}>Start Date</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ba/e9b3/c2137839695755be30262899057b8068"
        }}
        style={styles.ImageBackground_7_285}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5da9/0faf/62129a160360963aa8aab1d33ce5bf88"
        }}
        style={styles.ImageBackground_7_286}
      />
      <View style={styles.View_7_346}>
        <Text style={styles.Text_7_346}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_7_347}
      />
      <View style={styles.View_7_348}>
        <Text style={styles.Text_7_348}>Control</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_51_165}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_7_252: {
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
  ImageBackground_7_253: {
    width: wp("6.527777777777779%"),
    height: hp("2.185792349726776%"),
    top: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_7_257: {
    width: wp("5.972224871317546%"),
    minWidth: wp("5.972224871317546%"),
    height: hp("130.327868852459%"),
    minHeight: hp("130.327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.06944444444444445%"),
    top: hp("9.562841530054644%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_7_258: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.47222222222221%"),
    top: hp("12.841530054644808%")
  },
  View_7_259: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_260: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_261: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_7_263: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.194444444444443%"),
    top: hp("2.1857923497267766%")
  },
  Text_7_263: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_264: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68055555555556%"),
    top: hp("25.40983606557377%")
  },
  View_7_265: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_7_265: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_266: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.291666666666657%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_7_267: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("0.6830601092896202%")
  },
  View_7_273: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666667%"),
    top: hp("25.40983606557377%")
  },
  View_7_274: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_7_274: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_275: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%"),
    top: hp("0.6830601092896202%")
  },
  ImageBackground_7_276: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.291666666666668%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_7_277: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666667%"),
    top: hp("42.89617486338798%")
  },
  View_7_279: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666667%"),
    top: hp("36.74863387978142%")
  },
  Text_7_279: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_280: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68055555555556%"),
    top: hp("36.74863387978142%")
  },
  Text_7_280: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_282: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68055555555556%"),
    top: hp("40.02732240437158%")
  },
  Text_7_282: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_284: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666667%"),
    top: hp("40.02732240437158%")
  },
  Text_7_284: {
    color: "rgba(181, 203, 218, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_285: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81944444444444%"),
    top: hp("36.20218579234973%")
  },
  ImageBackground_7_286: {
    width: wp("28.47222222222222%"),
    minWidth: wp("28.47222222222222%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68055555555556%"),
    top: hp("36.20218579234973%")
  },
  View_7_346: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("3.0054644808743167%")
  },
  Text_7_346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_347: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("1.6393437411615757%"),
    minHeight: hp("1.6393437411615757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: hp("3.9617486338797816%")
  },
  View_7_348: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("2.73224043715847%")
  },
  Text_7_348: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_165: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: hp("3.0054644808743167%")
  },
  View_2: { height: 1024 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
