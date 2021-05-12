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
      <View style={styles.View_1_833} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_1_834}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_1_835}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcc/9172/8adc91df05ba78d283d8880e16d613f8"
        }}
        style={styles.ImageBackground_1_836}
      />
      <View style={styles.View_1_837} />
      <View style={styles.View_1_838} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_1_839}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_1_840}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_1_841}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_1_842}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_1_843}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_1_844}
      />
      <View style={styles.View_1_845}>
        <Text style={styles.Text_1_845}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_1_846}
      />
      <View style={styles.View_1_847}>
        <Text style={styles.Text_1_847}>Accounts Receivable</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_1_848}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_1_850}
      />
      <View style={styles.View_1_853}>
        <Text style={styles.Text_1_853}>Revenue</Text>
      </View>
      <View style={styles.View_1_854}>
        <Text style={styles.Text_1_854}>Expense</Text>
      </View>
      <View style={styles.View_1_855}>
        <View style={styles.View_1_856}>
          <View style={styles.View_1_857}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
              }}
              style={styles.ImageBackground_1_858}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
              }}
              style={styles.ImageBackground_1_859}
            />
          </View>
          <View style={styles.View_1_860}>
            <View style={styles.View_1_861}>
              <View style={styles.View_1_862}>
                <View style={styles.View_1_863}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                    }}
                    style={styles.ImageBackground_1_864}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
              }}
              style={styles.ImageBackground_1_866}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_868} />
      <View style={styles.View_1_869} />
      <View style={styles.View_1_870}>
        <View style={styles.View_1_871}>
          <View style={styles.View_1_872}>
            <View style={styles.View_1_873}>
              <View style={styles.View_1_874}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                  }}
                  style={styles.ImageBackground_1_875}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dfe/b99b/4e661e9389f7850f2f3e0cddf12ec0d6"
          }}
          style={styles.ImageBackground_1_877}
        />
      </View>
      <View style={styles.View_1_878} />
      <View style={styles.View_1_879} />
      <View style={styles.View_1_880} />
      <View style={styles.View_1_881}>
        <Text style={styles.Text_1_881}>EOX Vanatge</Text>
      </View>
      <View style={styles.View_1_882}>
        <Text style={styles.Text_1_882}>A/R Ageing Summary</Text>
      </View>
      <View style={styles.View_1_883}>
        <Text style={styles.Text_1_883}>As of April 26, 2021</Text>
      </View>
      <View style={styles.View_1_884} />
      <View style={styles.View_1_885}>
        <Text style={styles.Text_1_885}>61 - 90</Text>
      </View>
      <View style={styles.View_1_886}>
        <Text style={styles.Text_1_886}>91 AND OVER </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a5/5b20/94be2b6e591f75dd36b29a410f35cfa6"
        }}
        style={styles.ImageBackground_1_887}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a5/5b20/94be2b6e591f75dd36b29a410f35cfa6"
        }}
        style={styles.ImageBackground_1_888}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc1f/d900/cc10fb1b3d026e0442360d5e6308e1bf"
        }}
        style={styles.ImageBackground_1_889}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc1f/d900/cc10fb1b3d026e0442360d5e6308e1bf"
        }}
        style={styles.ImageBackground_1_890}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/890c/1688/4ad6f3f524e9d6ed75fd3c12344af139"
        }}
        style={styles.ImageBackground_1_891}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/890c/1688/4ad6f3f524e9d6ed75fd3c12344af139"
        }}
        style={styles.ImageBackground_1_892}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/890c/1688/4ad6f3f524e9d6ed75fd3c12344af139"
        }}
        style={styles.ImageBackground_1_893}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/890c/1688/4ad6f3f524e9d6ed75fd3c12344af139"
        }}
        style={styles.ImageBackground_1_894}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/890c/1688/4ad6f3f524e9d6ed75fd3c12344af139"
        }}
        style={styles.ImageBackground_1_895}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/890c/1688/4ad6f3f524e9d6ed75fd3c12344af139"
        }}
        style={styles.ImageBackground_1_896}
      />
      <View style={styles.View_1_897}>
        <Text style={styles.Text_1_897}>TOTAL</Text>
      </View>
      <View style={styles.View_1_898}>
        <Text style={styles.Text_1_898}>CURRENT</Text>
      </View>
      <View style={styles.View_1_899}>
        <Text style={styles.Text_1_899}>1 - 30</Text>
      </View>
      <View style={styles.View_1_900}>
        <Text style={styles.Text_1_900}>31 - 60</Text>
      </View>
      <View style={styles.View_1_901}>
        <Text style={styles.Text_1_901}>Red Rocks</Text>
      </View>
      <View style={styles.View_1_902}>
        <Text style={styles.Text_1_902}>$2,000.00</Text>
      </View>
      <View style={styles.View_1_903}>
        <Text style={styles.Text_1_903}>2,000.00</Text>
      </View>
      <View style={styles.View_1_904}>
        <Text style={styles.Text_1_904}>8,000.00</Text>
      </View>
      <View style={styles.View_1_905}>
        <Text style={styles.Text_1_905}>300,000.00</Text>
      </View>
      <View style={styles.View_1_906}>
        <Text style={styles.Text_1_906}>5,000.00</Text>
      </View>
      <View style={styles.View_1_907}>
        <Text style={styles.Text_1_907}>$5,000.00</Text>
      </View>
      <View style={styles.View_1_908}>
        <Text style={styles.Text_1_908}>$20,000.00</Text>
      </View>
      <View style={styles.View_1_909}>
        <Text style={styles.Text_1_909}>5,000.00</Text>
      </View>
      <View style={styles.View_1_910}>
        <Text style={styles.Text_1_910}>25,000.00</Text>
      </View>
      <View style={styles.View_1_911}>
        <Text style={styles.Text_1_911}>$41,000.00</Text>
      </View>
      <View style={styles.View_1_912}>
        <Text style={styles.Text_1_912}>3,000.00</Text>
      </View>
      <View style={styles.View_1_913}>
        <Text style={styles.Text_1_913}>2,000.00</Text>
      </View>
      <View style={styles.View_1_914}>
        <Text style={styles.Text_1_914}>1,000.00</Text>
      </View>
      <View style={styles.View_1_915}>
        <Text style={styles.Text_1_915}>10,000.00</Text>
      </View>
      <View style={styles.View_1_916}>
        <Text style={styles.Text_1_916}>$15,000.00</Text>
      </View>
      <View style={styles.View_1_917}>
        <Text style={styles.Text_1_917}>5,000.00</Text>
      </View>
      <View style={styles.View_1_918}>
        <Text style={styles.Text_1_918}>$307,000.00</Text>
      </View>
      <View style={styles.View_1_919}>
        <Text style={styles.Text_1_919}>35,000.00</Text>
      </View>
      <View style={styles.View_1_920}>
        <Text style={styles.Text_1_920}>$36,400.00</Text>
      </View>
      <View style={styles.View_1_921}>
        <Text style={styles.Text_1_921}>$60,000.00</Text>
      </View>
      <View style={styles.View_1_922}>
        <Text style={styles.Text_1_922}>$21,000.00</Text>
      </View>
      <View style={styles.View_1_923}>
        <Text style={styles.Text_1_923}>15,000.00</Text>
      </View>
      <View style={styles.View_1_924}>
        <Text style={styles.Text_1_924}>$17,650.00</Text>
      </View>
      <View style={styles.View_1_925}>
        <Text style={styles.Text_1_925}>650.00</Text>
      </View>
      <View style={styles.View_1_926}>
        <Text style={styles.Text_1_926}>400.00</Text>
      </View>
      <View style={styles.View_1_927}>
        <Text style={styles.Text_1_927}>$400.00</Text>
      </View>
      <View style={styles.View_1_928}>
        <Text style={styles.Text_1_928}>$8,000.00</Text>
      </View>
      <View style={styles.View_1_929}>
        <Text style={styles.Text_1_929}>$300,650.00</Text>
      </View>
      <View style={styles.View_1_930}>
        <Text style={styles.Text_1_930}>$417,050.00</Text>
      </View>
      <View style={styles.View_1_931}>
        <Text style={styles.Text_1_931}>Stem Inc.</Text>
      </View>
      <View style={styles.View_1_932}>
        <Text style={styles.Text_1_932}>Vantage Agora</Text>
      </View>
      <View style={styles.View_1_933}>
        <Text style={styles.Text_1_933}>San Tio</Text>
      </View>
      <View style={styles.View_1_934}>
        <Text style={styles.Text_1_934}>Raw Works</Text>
      </View>
      <View style={styles.View_1_935}>
        <Text style={styles.Text_1_935}>Ocean View Road</Text>
      </View>
      <View style={styles.View_1_936}>
        <Text style={styles.Text_1_936}>Twin Lane</Text>
      </View>
      <View style={styles.View_1_937}>
        <Text style={styles.Text_1_937}>Dunder Mifflin</Text>
      </View>
      <View style={styles.View_1_938}>
        <Text style={styles.Text_1_938}>MS Paper company</Text>
      </View>
      <View style={styles.View_1_939}>
        <Text style={styles.Text_1_939}>TOTAL</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea43/cc1a/b6afd1b7ef3a01a8695bc2e981ec00b1"
        }}
        style={styles.ImageBackground_1_940}
      />
      <View style={styles.View_1_941}>
        <Text style={styles.Text_1_941}>Total Raw Works</Text>
      </View>
      <View style={styles.View_1_942}>
        <Text style={styles.Text_1_942}> $25,000.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc72/0c22/1a560c1a690fbc7d6e6c7babc6c250ac"
        }}
        style={styles.ImageBackground_1_943}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_51_164}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_833: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.562841530054644%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  ImageBackground_1_834: {
    width: wp("0.9722222222222222%"),
    minWidth: wp("0.9722222222222222%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.63888888888889%"),
    top: hp("13.387978142076504%")
  },
  ImageBackground_1_835: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.86111111111111%"),
    top: hp("13.25136612021858%")
  },
  ImageBackground_1_836: {
    width: wp("1.1111111111111112%"),
    height: hp("0.683059067022605%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_1_837: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("155.7377049180328%"),
    minHeight: hp("155.7377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010929%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_1_838: {
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
  ImageBackground_1_839: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: hp("1.912568306010929%"),
    resizeMode: "cover"
  },
  ImageBackground_1_840: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.04166666666667%"),
    top: hp("2.9242176827185795%")
  },
  ImageBackground_1_841: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.70833333333333%"),
    top: hp("2.9242176827185795%")
  },
  ImageBackground_1_842: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.95833333333333%"),
    top: hp("2.9242176827185795%")
  },
  ImageBackground_1_843: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.15277777777777%"),
    top: hp("2.8688524590163933%"),
    resizeMode: "cover"
  },
  ImageBackground_1_844: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.47222222222223%"),
    top: hp("2.9242176827185795%")
  },
  View_1_845: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_1_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_846: {
    width: wp("0.4861111111111111%"),
    minWidth: wp("0.4861111111111111%"),
    height: hp("1.6393437411615757%"),
    minHeight: hp("1.6393437411615757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: hp("13.524590163934427%")
  },
  View_1_847: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_1_847: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_848: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    top: hp("23.90710382513661%")
  },
  ImageBackground_1_850: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("34.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  View_1_853: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("177.18579234972677%")
  },
  Text_1_853: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_854: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%"),
    top: hp("177.18579234972677%")
  },
  Text_1_854: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_855: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.83333333333333%"),
    top: hp("22.404371584699454%")
  },
  View_1_856: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_857: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_858: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_859: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    height: hp("3.37707436149889%"),
    minHeight: hp("3.37707436149889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48611111111111427%"),
    top: hp("1.2295081967213122%")
  },
  View_1_860: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("0%")
  },
  View_1_861: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_862: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_863: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_864: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_866: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: hp("3.37707436149889%"),
    minHeight: hp("3.37707436149889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("1.2295081967213122%")
  },
  View_1_868: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.888888888888886%"),
    top: hp("177.18579234972677%"),
    backgroundColor: "rgba(138, 173, 31, 1)"
  },
  View_1_869: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.06944444444445%"),
    top: hp("177.18579234972677%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_1_870: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.97222222222223%"),
    top: hp("22.404371584699454%")
  },
  View_1_871: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_872: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_873: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_874: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_875: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_877: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888857%"),
    top: hp("1.3661202185792334%")
  },
  View_1_878: {
    width: wp("74.86111111111111%"),
    minWidth: wp("74.86111111111111%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("105.73770491803278%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_879: {
    width: wp("74.86111111111111%"),
    minWidth: wp("74.86111111111111%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("119.39890710382515%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_880: {
    width: wp("89.86111111111111%"),
    minWidth: wp("89.86111111111111%"),
    height: hp("121.31147540983606%"),
    minHeight: hp("121.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("33.60655737704918%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_881: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.90277777777778%"),
    top: hp("36.33879781420765%")
  },
  Text_1_881: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_882: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.13888888888889%"),
    top: hp("42.21311475409836%")
  },
  Text_1_882: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_883: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.25%"),
    top: hp("46.994535519125684%")
  },
  Text_1_883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_884: {
    width: wp("75.97222222222221%"),
    minWidth: wp("75.97222222222221%"),
    height: hp("84.01639344262296%"),
    minHeight: hp("84.01639344262296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.305555555555555%"),
    top: hp("57.240437158469945%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5
  },
  View_1_885: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.59722222222223%"),
    top: hp("59.83606557377049%")
  },
  Text_1_885: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_886: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.13888888888889%"),
    top: hp("59.83606557377049%")
  },
  Text_1_886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_887: {
    width: wp("71.80555555555556%"),
    minWidth: wp("71.80555555555556%"),
    height: hp("0.000012349065385575667%"),
    minHeight: hp("0.000012349065385575667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("64.07103825136612%")
  },
  ImageBackground_1_888: {
    width: wp("71.80555555555556%"),
    minWidth: wp("71.80555555555556%"),
    height: hp("0.000012349065385575667%"),
    minHeight: hp("0.000012349065385575667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("128.4153005464481%")
  },
  ImageBackground_1_889: {
    width: wp("71.80555555555556%"),
    minWidth: wp("71.80555555555556%"),
    height: hp("0.000012349065385575667%"),
    minHeight: hp("0.000012349065385575667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("134.8360655737705%")
  },
  ImageBackground_1_890: {
    width: wp("71.80555555555556%"),
    minWidth: wp("71.80555555555556%"),
    height: hp("0.000012349065385575667%"),
    minHeight: hp("0.000012349065385575667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("136.20218579234972%")
  },
  ImageBackground_1_891: {
    width: wp("1.2142032169827468e-7%"),
    minWidth: wp("1.2142032169827468e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.555555555555557%"),
    top: hp("57.92349726775956%")
  },
  ImageBackground_1_892: {
    width: wp("1.2142032169827468e-7%"),
    minWidth: wp("1.2142032169827468e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.97222222222222%"),
    top: hp("57.92349726775956%")
  },
  ImageBackground_1_893: {
    width: wp("1.2142032169827468e-7%"),
    minWidth: wp("1.2142032169827468e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.888888888888886%"),
    top: hp("57.92349726775956%")
  },
  ImageBackground_1_894: {
    width: wp("1.2142032169827468e-7%"),
    minWidth: wp("1.2142032169827468e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.43055555555555%"),
    top: hp("57.92349726775956%")
  },
  ImageBackground_1_895: {
    width: wp("1.2142032169827468e-7%"),
    minWidth: wp("1.2142032169827468e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.97222222222221%"),
    top: hp("57.92349726775956%")
  },
  ImageBackground_1_896: {
    width: wp("1.2142032169827468e-7%"),
    minWidth: wp("1.2142032169827468e-7%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.125%"),
    top: hp("57.92349726775956%")
  },
  View_1_897: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.68055555555556%"),
    top: hp("59.83606557377049%")
  },
  Text_1_897: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_898: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.72222222222222%"),
    top: hp("59.83606557377049%")
  },
  Text_1_898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_899: {
    width: wp("2.7083333333333335%"),
    minWidth: wp("2.7083333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.13888888888889%"),
    top: hp("59.83606557377049%")
  },
  Text_1_899: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_900: {
    width: wp("3.3333333333333335%"),
    minWidth: wp("3.3333333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.05555555555556%"),
    top: hp("59.83606557377049%")
  },
  Text_1_900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_901: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("68.16939890710383%")
  },
  Text_1_901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_902: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.25%"),
    top: hp("68.16939890710383%")
  },
  Text_1_902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_903: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: hp("68.16939890710383%")
  },
  Text_1_903: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_904: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("73.90710382513662%")
  },
  Text_1_904: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_905: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: hp("79.6448087431694%")
  },
  Text_1_905: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_906: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81944444444444%"),
    top: hp("96.85792349726776%")
  },
  Text_1_906: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_907: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04166666666667%"),
    top: hp("96.85792349726776%")
  },
  Text_1_907: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_908: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04166666666667%"),
    top: hp("102.59562841530054%")
  },
  Text_1_908: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_909: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("102.59562841530054%")
  },
  Text_1_909: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_910: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("116.93989071038251%")
  },
  Text_1_910: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_911: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("130.60109289617486%")
  },
  Text_1_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_912: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777778%"),
    top: hp("122.67759562841529%")
  },
  Text_1_912: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_913: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.81944444444444%"),
    top: hp("122.67759562841529%")
  },
  Text_1_913: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_914: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.97222222222223%"),
    top: hp("122.67759562841529%")
  },
  Text_1_914: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_915: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81944444444444%"),
    top: hp("122.67759562841529%")
  },
  Text_1_915: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_916: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81944444444444%"),
    top: hp("130.60109289617486%")
  },
  Text_1_916: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_917: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: hp("122.67759562841529%")
  },
  Text_1_917: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_918: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%"),
    top: hp("130.60109289617486%")
  },
  Text_1_918: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_919: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.97222222222223%"),
    top: hp("116.93989071038251%")
  },
  Text_1_919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_920: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.97222222222223%"),
    top: hp("130.60109289617486%")
  },
  Text_1_920: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_921: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04166666666667%"),
    top: hp("116.93989071038251%")
  },
  Text_1_921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_922: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04166666666667%"),
    top: hp("122.67759562841529%")
  },
  Text_1_922: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_923: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.81944444444444%"),
    top: hp("102.59562841530054%")
  },
  Text_1_923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_924: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.81944444444444%"),
    top: hp("130.60109289617486%")
  },
  Text_1_924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_925: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.81944444444444%"),
    top: hp("79.6448087431694%")
  },
  Text_1_925: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_926: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.97222222222223%"),
    top: hp("85.38251366120218%")
  },
  Text_1_926: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_927: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04166666666667%"),
    top: hp("85.38251366120218%")
  },
  Text_1_927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_928: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04166666666667%"),
    top: hp("73.90710382513662%")
  },
  Text_1_928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_929: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.20833333333334%"),
    top: hp("79.6448087431694%")
  },
  Text_1_929: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_930: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.20833333333334%"),
    top: hp("130.60109289617486%")
  },
  Text_1_930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_931: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("73.90710382513662%")
  },
  Text_1_931: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_932: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("79.6448087431694%")
  },
  Text_1_932: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_933: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("85.38251366120218%")
  },
  Text_1_933: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_934: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("91.12021857923497%")
  },
  Text_1_934: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_935: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("96.85792349726776%")
  },
  Text_1_935: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_936: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("102.59562841530054%")
  },
  Text_1_936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_937: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("116.93989071038251%")
  },
  Text_1_937: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_938: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("122.67759562841529%")
  },
  Text_1_938: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_939: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("130.60109289617486%")
  },
  Text_1_939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_940: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    height: hp("1.0928960445800113%"),
    minHeight: hp("1.0928960445800113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444445%"),
    top: hp("91.53005464480874%")
  },
  View_1_941: {
    width: wp("15.76388888888889%"),
    minWidth: wp("15.76388888888889%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555554%"),
    top: hp("111.0655737704918%")
  },
  Text_1_941: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_942: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.93055555555556%"),
    top: hp("111.0655737704918%")
  },
  Text_1_942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_943: {
    width: wp("71.80555555555556%"),
    minWidth: wp("71.80555555555556%"),
    height: hp("0.000012349065385575667%"),
    minHeight: hp("0.000012349065385575667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("108.33333333333333%")
  },
  ImageBackground_51_164: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: hp("12.431693989071038%")
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
