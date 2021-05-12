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
      <View style={styles.View_127_1} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_127_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_127_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcc/9172/8adc91df05ba78d283d8880e16d613f8"
        }}
        style={styles.ImageBackground_127_4}
      />
      <View style={styles.View_127_5} />
      <View style={styles.View_127_6} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_127_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_127_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_127_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_127_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_127_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_127_12}
      />
      <View style={styles.View_127_13}>
        <Text style={styles.Text_127_13}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_127_14}
      />
      <View style={styles.View_127_15}>
        <Text style={styles.Text_127_15}>Overall</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_127_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_127_18}
      />
      <View style={styles.View_127_26}>
        <Text style={styles.Text_127_26}>Revenue</Text>
      </View>
      <View style={styles.View_127_28}>
        <Text style={styles.Text_127_28}>Expense</Text>
      </View>
      <View style={styles.View_127_29}>
        <View style={styles.View_127_30}>
          <View style={styles.View_127_31}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
              }}
              style={styles.ImageBackground_127_32}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
              }}
              style={styles.ImageBackground_127_33}
            />
          </View>
          <View style={styles.View_127_34}>
            <View style={styles.View_127_35}>
              <View style={styles.View_127_36}>
                <View style={styles.View_127_37}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                    }}
                    style={styles.ImageBackground_127_38}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
              }}
              style={styles.ImageBackground_127_40}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_127_43} />
      <View style={styles.View_127_45} />
      <View style={styles.View_127_198}>
        <View style={styles.View_127_20}>
          <View style={styles.View_127_21}>
            <Text style={styles.Text_127_21}>
              Actual Revenue and Expense for Service New Business
            </Text>
          </View>
          <View style={styles.View_127_22} />
        </View>
        <View style={styles.View_127_23}>
          <Text style={styles.Text_127_23}>Amount in $</Text>
        </View>
        <View style={styles.View_127_24}>
          <Text style={styles.Text_127_24}>Timeline</Text>
        </View>
        <View style={styles.View_127_25}>
          <Text style={styles.Text_127_25}>Revenue</Text>
        </View>
        <View style={styles.View_127_27}>
          <Text style={styles.Text_127_27}>Expense</Text>
        </View>
        <View style={styles.View_127_42} />
        <View style={styles.View_127_44} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
          }}
          style={styles.ImageBackground_127_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
          }}
          style={styles.ImageBackground_127_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
          }}
          style={styles.ImageBackground_127_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
          }}
          style={styles.ImageBackground_127_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_59}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_60}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_127_61}
        />
        <View style={styles.View_127_62} />
        <View style={styles.View_127_63} />
        <View style={styles.View_127_64} />
        <View style={styles.View_127_65} />
        <View style={styles.View_127_66} />
        <View style={styles.View_127_67} />
        <View style={styles.View_127_68} />
        <View style={styles.View_127_69} />
        <View style={styles.View_127_70}>
          <Text style={styles.Text_127_70}>1M</Text>
        </View>
        <View style={styles.View_127_71}>
          <Text style={styles.Text_127_71}>0</Text>
        </View>
        <View style={styles.View_127_72}>
          <Text style={styles.Text_127_72}>2M</Text>
        </View>
        <View style={styles.View_127_73}>
          <Text style={styles.Text_127_73}>3M</Text>
        </View>
        <View style={styles.View_127_74}>
          <Text style={styles.Text_127_74}>Dec 2021</Text>
        </View>
        <View style={styles.View_127_75}>
          <Text style={styles.Text_127_75}>Nov 2021</Text>
        </View>
        <View style={styles.View_127_76}>
          <Text style={styles.Text_127_76}>Oct 2021</Text>
        </View>
        <View style={styles.View_127_77}>
          <Text style={styles.Text_127_77}>Sep 2021</Text>
        </View>
        <View style={styles.View_127_78}>
          <Text style={styles.Text_127_78}>Aug 2021</Text>
        </View>
        <View style={styles.View_127_79}>
          <Text style={styles.Text_127_79}>Jul 2021</Text>
        </View>
        <View style={styles.View_127_80}>
          <Text style={styles.Text_127_80}>Jun 2021</Text>
        </View>
        <View style={styles.View_127_81}>
          <Text style={styles.Text_127_81}>May 2021</Text>
        </View>
        <View style={styles.View_127_82}>
          <Text style={styles.Text_127_82}>Apr 2021</Text>
        </View>
        <View style={styles.View_127_83}>
          <Text style={styles.Text_127_83}>Mar 2021</Text>
        </View>
        <View style={styles.View_127_84}>
          <Text style={styles.Text_127_84}>Feb 2021</Text>
        </View>
        <View style={styles.View_127_85}>
          <Text style={styles.Text_127_85}>Jan 2021</Text>
        </View>
      </View>
      <View style={styles.View_127_147}>
        <View style={styles.View_127_148}>
          <View style={styles.View_127_149}>
            <View style={styles.View_127_150}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                }}
                style={styles.ImageBackground_127_151}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cbe/55c0/5b420d0f5eaee43f462cf5e378d87b5e"
          }}
          style={styles.ImageBackground_127_153}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_127_182}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_127_1: {
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
  ImageBackground_127_2: {
    width: wp("0.9722222222222222%"),
    minWidth: wp("0.9722222222222222%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.63888041178386%"),
    top: hp("13.387978142076504%")
  },
  ImageBackground_127_3: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.86110263400607%"),
    top: hp("13.25136612021858%")
  },
  ImageBackground_127_4: {
    width: wp("1.1111111111111112%"),
    height: hp("0.683059067022605%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_127_5: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("155.7377049180328%"),
    minHeight: hp("155.7377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000008477105034722223%"),
    top: hp("19.12568306010929%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_127_6: {
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
  ImageBackground_127_7: {
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
  ImageBackground_127_8: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.04166666666667%"),
    top: hp("2.924351092896175%")
  },
  ImageBackground_127_9: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.70833333333333%"),
    top: hp("2.924351092896175%")
  },
  ImageBackground_127_10: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.95833333333333%"),
    top: hp("2.924351092896175%")
  },
  ImageBackground_127_11: {
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
  ImageBackground_127_12: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("3.89898096928831%"),
    minHeight: hp("3.89898096928831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.47222222222223%"),
    top: hp("2.924351092896175%")
  },
  View_127_13: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_127_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_127_14: {
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
  View_127_15: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_127_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_127_16: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%"),
    top: hp("23.770491803278688%")
  },
  ImageBackground_127_18: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  View_127_26: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("177.18579234972677%")
  },
  Text_127_26: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_28: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%"),
    top: hp("177.18579234972677%")
  },
  Text_127_28: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_29: {
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
  View_127_30: {
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
  View_127_31: {
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
  ImageBackground_127_32: {
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
  ImageBackground_127_33: {
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
  View_127_34: {
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
  View_127_35: {
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
  View_127_36: {
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
  View_127_37: {
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
  ImageBackground_127_38: {
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
  ImageBackground_127_40: {
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
  View_127_43: {
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
  View_127_45: {
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
  View_127_198: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("30.87431693989071%")
  },
  View_127_20: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_127_21: {
    width: wp("43.47222222222222%"),
    minWidth: wp("43.47222222222222%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_127_21: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_22: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("66.66666666666666%"),
    minHeight: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_127_23: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("24.590163934426222%")
  },
  Text_127_23: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_24: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.12499999999999%"),
    top: hp("60.24590163934426%")
  },
  Text_127_24: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_25: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.95833333333333%"),
    top: hp("65.57377049180329%")
  },
  Text_127_25: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_27: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13888888888888%"),
    top: hp("65.57377049180329%")
  },
  Text_127_27: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_42: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.52777777777777%"),
    top: hp("65.57377049180329%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_127_44: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%"),
    top: hp("65.57377049180329%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_127_46: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("38.52459016393443%")
  },
  ImageBackground_127_47: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512644139378%"),
    minHeight: hp("0.00001275512644139378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_48: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("24.86338797814207%")
  },
  ImageBackground_127_49: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("11.20218579234973%")
  },
  ImageBackground_127_50: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_51: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.11111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_52: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.36111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_53: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.61111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_54: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.86111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_55: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.11111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_56: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.36111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_57: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_58: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8611111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_59: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.1111111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_60: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.3611111111111%"),
    top: hp("52.185792349726775%")
  },
  ImageBackground_127_61: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.6111111111111%"),
    top: hp("52.185792349726775%")
  },
  View_127_62: {
    width: wp("2.0833404858907065%"),
    minWidth: wp("2.0833404858907065%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("42.34972677595629%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_63: {
    width: wp("2.0833427376217313%"),
    minWidth: wp("2.0833427376217313%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("39.20765027322404%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_64: {
    width: wp("2.0833437972598605%"),
    minWidth: wp("2.0833437972598605%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.50000847710503%"),
    top: hp("37.841530054644814%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_65: {
    width: wp("2.0833451218075223%"),
    minWidth: wp("2.0833451218075223%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74999999999999%"),
    top: hp("35.928961748633874%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_66: {
    width: wp("2.0833427376217313%"),
    minWidth: wp("2.0833427376217313%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708350287543404%"),
    top: hp("39.20765027322404%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_67: {
    width: wp("2.0833431349860296%"),
    minWidth: wp("2.0833431349860296%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333336%"),
    top: hp("38.79781420765027%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_68: {
    width: wp("2.083343267440796%"),
    minWidth: wp("2.083343267440796%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208341810438366%"),
    top: hp("38.52459016393443%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_69: {
    width: wp("2.083343267440796%"),
    minWidth: wp("2.083343267440796%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.458333333333332%"),
    top: hp("38.52459016393443%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_127_70: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("37.841530054644814%")
  },
  Text_127_70: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_71: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("51.50273224043716%")
  },
  Text_127_71: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_72: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("24.18032786885246%")
  },
  Text_127_72: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_73: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("10.51912568306011%")
  },
  Text_127_73: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_74: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.875%"),
    top: hp("54.91803278688524%")
  },
  Text_127_74: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_75: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555555555556%"),
    top: hp("54.91803278688524%")
  },
  Text_127_75: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_76: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.375%"),
    top: hp("54.91803278688524%")
  },
  Text_127_76: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_77: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.125%"),
    top: hp("54.91803278688524%")
  },
  Text_127_77: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_78: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("54.91803278688524%")
  },
  Text_127_78: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_79: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("54.91803278688524%")
  },
  Text_127_79: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_80: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("54.91803278688524%")
  },
  Text_127_80: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_81: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555555%"),
    top: hp("54.91803278688524%")
  },
  Text_127_81: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_82: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("54.91803278688524%")
  },
  Text_127_82: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_83: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("54.91803278688524%")
  },
  Text_127_83: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_84: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: hp("54.91803278688524%")
  },
  Text_127_84: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_85: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("54.91803278688524%")
  },
  Text_127_85: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_147: {
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
  View_127_148: {
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
  View_127_149: {
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
  View_127_150: {
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
  ImageBackground_127_151: {
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
  ImageBackground_127_153: {
    width: wp("2.361111111111111%"),
    height: hp("3.563652663934426%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%")
  },
  ImageBackground_127_182: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: hp("12.295081967213115%")
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
