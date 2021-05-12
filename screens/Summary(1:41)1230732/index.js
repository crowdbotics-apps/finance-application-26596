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
      <View style={styles.View_1_42} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_1_43}
      />
      <View style={styles.View_1_44} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_1_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcc/9172/8adc91df05ba78d283d8880e16d613f8"
        }}
        style={styles.ImageBackground_1_46}
      />
      <View style={styles.View_1_47} />
      <View style={styles.View_1_48} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_1_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_1_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_1_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_1_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_1_53}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_1_54}
      />
      <View style={styles.View_1_55}>
        <Text style={styles.Text_1_55}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_1_56}
      />
      <View style={styles.View_1_57}>
        <Text style={styles.Text_1_57}>Home</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_1_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_1_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bd3/b5c9/976988b762a87a152eaa71f5b8c4c389"
        }}
        style={styles.ImageBackground_1_62}
      />
      <View style={styles.View_1_63}>
        <View style={styles.View_1_64}>
          <Text style={styles.Text_1_64}>
            Revenue and Expense by departments
          </Text>
        </View>
        <View style={styles.View_1_65} />
        <View style={styles.View_1_66}>
          <View style={styles.View_1_67}>
            <View style={styles.View_1_68}>
              <View style={styles.View_1_69}>
                <Text style={styles.Text_1_69}>Insurance</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_70}>
            <View style={styles.View_1_71}>
              <View style={styles.View_1_72}>
                <Text style={styles.Text_1_72}>Logistics</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_73}>
            <View style={styles.View_1_74}>
              <View style={styles.View_1_75}>
                <Text style={styles.Text_1_75}>Service Cs</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_76}>
            <View style={styles.View_1_77}>
              <View style={styles.View_1_78}>
                <Text style={styles.Text_1_78}>Service Cs</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_79}>
            <View style={styles.View_1_80}>
              <View style={styles.View_1_81}>
                <Text style={styles.Text_1_81}>Service New Business</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_82}>
        <View style={styles.View_1_83}>
          <Text style={styles.Text_1_83}>Expenses by category</Text>
        </View>
        <View style={styles.View_1_84} />
        <View style={styles.View_1_85}>
          <View style={styles.View_1_86}>
            <View style={styles.View_1_87}>
              <View style={styles.View_1_88}>
                <Text style={styles.Text_1_88}>Marketing</Text>
              </View>
              <View style={styles.View_1_89}>
                <Text style={styles.Text_1_89}>Full Time - Salary</Text>
              </View>
              <View style={styles.View_1_90}>
                <Text style={styles.Text_1_90}>Full Time - Bonus</Text>
              </View>
              <View style={styles.View_1_91}>
                <Text style={styles.Text_1_91}>Payroll Taxes</Text>
              </View>
              <View style={styles.View_1_92}>
                <Text style={styles.Text_1_92}>Part Time - Salary</Text>
              </View>
              <View style={styles.View_1_93}>
                <Text style={styles.Text_1_93}>Full Time - Commission</Text>
              </View>
              <View style={styles.View_1_94}>
                <Text style={styles.Text_1_94}>Consulting</Text>
              </View>
              <View style={styles.View_1_95}>
                <Text style={styles.Text_1_95}>Licenses and Permits</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_96}>
        <Text style={styles.Text_1_96}>Departments</Text>
      </View>
      <View style={styles.View_1_97}>
        <Text style={styles.Text_1_97}>Categories</Text>
      </View>
      <View style={styles.View_1_98} />
      <View style={styles.View_1_99} />
      <View style={styles.View_1_100} />
      <View style={styles.View_1_101}>
        <Text style={styles.Text_1_101}>2M</Text>
      </View>
      <View style={styles.View_1_102}>
        <Text style={styles.Text_1_102}>2M</Text>
      </View>
      <View style={styles.View_1_103}>
        <Text style={styles.Text_1_103}>1M</Text>
      </View>
      <View style={styles.View_1_104}>
        <Text style={styles.Text_1_104}>1M</Text>
      </View>
      <View style={styles.View_1_105}>
        <Text style={styles.Text_1_105}>3M</Text>
      </View>
      <View style={styles.View_1_106}>
        <Text style={styles.Text_1_106}>3M</Text>
      </View>
      <View style={styles.View_1_107}>
        <Text style={styles.Text_1_107}>4M</Text>
      </View>
      <View style={styles.View_1_108}>
        <Text style={styles.Text_1_108}>4M</Text>
      </View>
      <View style={styles.View_1_109}>
        <Text style={styles.Text_1_109}>5M</Text>
      </View>
      <View style={styles.View_1_110}>
        <Text style={styles.Text_1_110}>5M</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
        }}
        style={styles.ImageBackground_1_111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
        }}
        style={styles.ImageBackground_1_112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
        }}
        style={styles.ImageBackground_1_113}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
        }}
        style={styles.ImageBackground_1_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
        }}
        style={styles.ImageBackground_1_115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
        }}
        style={styles.ImageBackground_1_116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
        }}
        style={styles.ImageBackground_1_117}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
        }}
        style={styles.ImageBackground_1_118}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
        }}
        style={styles.ImageBackground_1_119}
      />
      <View style={styles.View_1_120} />
      <View style={styles.View_1_121} />
      <View style={styles.View_1_122} />
      <View style={styles.View_1_123} />
      <View style={styles.View_1_124} />
      <View style={styles.View_1_125} />
      <View style={styles.View_1_126} />
      <View style={styles.View_1_127} />
      <View style={styles.View_1_128} />
      <View style={styles.View_1_129} />
      <View style={styles.View_1_130} />
      <View style={styles.View_1_131} />
      <View style={styles.View_1_132}>
        <Text style={styles.Text_1_132}>Amount in $ </Text>
      </View>
      <View style={styles.View_1_133}>
        <Text style={styles.Text_1_133}>Amount in $ </Text>
      </View>
      <View style={styles.View_1_134}>
        <Text style={styles.Text_1_134}>Revenue</Text>
      </View>
      <View style={styles.View_1_135}>
        <Text style={styles.Text_1_135}>Revenue</Text>
      </View>
      <View style={styles.View_1_136}>
        <Text style={styles.Text_1_136}>Expense</Text>
      </View>
      <View style={styles.View_1_137}>
        <Text style={styles.Text_1_137}>Expense</Text>
      </View>
      <View style={styles.View_1_138}>
        <Text style={styles.Text_1_138}>3.3M</Text>
      </View>
      <View style={styles.View_1_139}>
        <Text style={styles.Text_1_139}>2M</Text>
      </View>
      <View style={styles.View_1_140}>
        <Text style={styles.Text_1_140}>2M</Text>
      </View>
      <View style={styles.View_1_141}>
        <Text style={styles.Text_1_141}>1.5M</Text>
      </View>
      <View style={styles.View_1_142}>
        <Text style={styles.Text_1_142}>0.5M</Text>
      </View>
      <View style={styles.View_1_143}>
        <Text style={styles.Text_1_143}>0.3M</Text>
      </View>
      <View style={styles.View_1_144}>
        <Text style={styles.Text_1_144}>0.2M</Text>
      </View>
      <View style={styles.View_1_145}>
        <Text style={styles.Text_1_145}>0.2M</Text>
      </View>
      <View style={styles.View_1_146}>
        <Text style={styles.Text_1_146}>0.2M</Text>
      </View>
      <View style={styles.View_1_147}>
        <Text style={styles.Text_1_147}>0.1M</Text>
      </View>
      <View style={styles.View_1_148}>
        <Text style={styles.Text_1_148}>1.65M</Text>
      </View>
      <View style={styles.View_1_149}>
        <Text style={styles.Text_1_149}>1.25M</Text>
      </View>
      <View style={styles.View_1_150}>
        <Text style={styles.Text_1_150}>1.32M</Text>
      </View>
      <View style={styles.View_1_151}>
        <Text style={styles.Text_1_151}>1M</Text>
      </View>
      <View style={styles.View_1_152}>
        <Text style={styles.Text_1_152}>0.99M</Text>
      </View>
      <View style={styles.View_1_153}>
        <Text style={styles.Text_1_153}>0.75M</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
        }}
        style={styles.ImageBackground_1_154}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
        }}
        style={styles.ImageBackground_1_155}
      />
      <View style={styles.View_1_156}>
        <View style={styles.View_1_157}>
          <View style={styles.View_1_158}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
              }}
              style={styles.ImageBackground_1_159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
              }}
              style={styles.ImageBackground_1_160}
            />
          </View>
          <View style={styles.View_1_161}>
            <View style={styles.View_1_162}>
              <View style={styles.View_1_163}>
                <View style={styles.View_1_164}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                    }}
                    style={styles.ImageBackground_1_165}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
              }}
              style={styles.ImageBackground_1_167}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_169} />
      <View style={styles.View_1_170} />
      <View style={styles.View_1_171} />
      <View style={styles.View_1_172} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
        }}
        style={styles.ImageBackground_1_173}
      />
      <View style={styles.View_1_182} />
      <View style={styles.View_7_357}>
        <View style={styles.View_7_358}>
          <View style={styles.View_7_359}>
            <View style={styles.View_7_360}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                }}
                style={styles.ImageBackground_7_361}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cbe/55c0/5b420d0f5eaee43f462cf5e378d87b5e"
          }}
          style={styles.ImageBackground_7_363}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_42: {
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
  ImageBackground_1_43: {
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
  View_1_44: {
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
  ImageBackground_1_45: {
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
  ImageBackground_1_46: {
    width: wp("1.1111111111111112%"),
    height: hp("0.683059067022605%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_1_47: {
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
  View_1_48: {
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
  ImageBackground_1_49: {
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
  ImageBackground_1_50: {
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
  ImageBackground_1_51: {
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
  ImageBackground_1_52: {
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
  ImageBackground_1_53: {
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
  ImageBackground_1_54: {
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
  View_1_55: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_1_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_56: {
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
  View_1_57: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_1_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_58: {
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
  ImageBackground_1_60: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  ImageBackground_1_62: {
    width: wp("2.361111111111111%"),
    height: hp("3.6885245901639343%"),
    top: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8055555555555554%")
  },
  View_1_63: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.59016393442623%"),
    minHeight: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("30.737704918032787%")
  },
  View_1_64: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_64: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_65: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.76502732240438%"),
    minHeight: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021854%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1_66: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("10.928961748633885%")
  },
  View_1_67: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222223%"),
    top: hp("0%")
  },
  View_1_68: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_69: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_69: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_70: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222223%"),
    top: hp("13.387978142076499%")
  },
  View_1_71: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_72: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_72: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_73: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.912568306010925%")
  },
  View_1_74: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_75: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_75: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_76: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.912568306010925%")
  },
  View_1_77: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_78: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_78: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_79: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.30054644808743%")
  },
  View_1_80: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_81: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_81: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_82: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("108.06010928961749%")
  },
  View_1_83: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    minHeight: hp("2.235219778258944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_83: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_84: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_1_85: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.11111111111111%"),
    top: hp("8.606557377049185%")
  },
  View_1_86: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_87: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_88: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: hp("0%")
  },
  Text_1_88: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_89: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: hp("4.508196721311464%")
  },
  Text_1_89: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_90: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: hp("9.016393442622956%")
  },
  Text_1_90: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_91: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: hp("13.524590163934405%")
  },
  Text_1_91: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_92: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: hp("18.032786885245898%")
  },
  Text_1_92: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_93: {
    width: wp("10.416666666666668%"),
    minWidth: wp("10.416666666666668%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.54098360655736%")
  },
  Text_1_93: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_94: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: hp("27.049180327868854%")
  },
  Text_1_94: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_95: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%"),
    top: hp("31.557377049180317%")
  },
  Text_1_95: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_96: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%"),
    top: hp("54.37158469945356%")
  },
  Text_1_96: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_97: {
    width: wp("0.9722227520412869%"),
    minWidth: wp("0.9722227520412869%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%"),
    top: hp("126.77595628415301%")
  },
  Text_1_97: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_98: {
    width: wp("27.63888888888889%"),
    minWidth: wp("27.63888888888889%"),
    height: hp("4.098365345939261%"),
    minHeight: hp("4.098365345939261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("115.30054644808743%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_99: {
    width: wp("10.34722540113661%"),
    minWidth: wp("10.34722540113661%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("83.06010928961749%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_100: {
    width: wp("1.3888919353485107%"),
    minWidth: wp("1.3888919353485107%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("146.85792349726776%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_101: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.52777777777777%"),
    top: hp("89.89071038251366%")
  },
  Text_1_101: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_102: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.52777777777777%"),
    top: hp("153.68852459016392%")
  },
  Text_1_102: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_103: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.708333333333336%"),
    top: hp("89.89071038251366%")
  },
  Text_1_103: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_104: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.708333333333336%"),
    top: hp("153.68852459016392%")
  },
  Text_1_104: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_105: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.34722222222223%"),
    top: hp("89.89071038251366%")
  },
  Text_1_105: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_106: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.34722222222223%"),
    top: hp("153.68852459016392%")
  },
  Text_1_106: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_107: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.09722222222221%"),
    top: hp("89.89071038251366%")
  },
  Text_1_107: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_108: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.09722222222221%"),
    top: hp("153.68852459016392%")
  },
  Text_1_108: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_109: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.91666666666667%"),
    top: hp("89.89071038251366%")
  },
  Text_1_109: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_110: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.91666666666667%"),
    top: hp("153.68852459016392%")
  },
  Text_1_110: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_111: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("37.97814207650273%")
  },
  ImageBackground_1_112: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("37.97814207650273%")
  },
  ImageBackground_1_113: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.22222222222223%"),
    top: hp("115.30054644808743%")
  },
  ImageBackground_1_114: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: hp("37.97814207650273%")
  },
  ImageBackground_1_115: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: hp("115.30054644808743%")
  },
  ImageBackground_1_116: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.86111111111111%"),
    top: hp("37.97814207650273%")
  },
  ImageBackground_1_117: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.86111111111111%"),
    top: hp("115.30054644808743%")
  },
  ImageBackground_1_118: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.68055555555556%"),
    top: hp("37.97814207650273%")
  },
  ImageBackground_1_119: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.68055555555556%"),
    top: hp("115.30054644808743%")
  },
  View_1_120: {
    width: wp("27.63888888888889%"),
    minWidth: wp("27.63888888888889%"),
    height: hp("4.098365345939261%"),
    minHeight: hp("4.098365345939261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("42.48633879781421%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_121: {
    width: wp("20.694444444444443%"),
    minWidth: wp("20.694444444444443%"),
    height: hp("4.098364303672248%"),
    minHeight: hp("4.098364303672248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("119.80874316939891%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_122: {
    width: wp("22.5%"),
    minWidth: wp("22.5%"),
    height: hp("4.098364303672248%"),
    minHeight: hp("4.098364303672248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("51.502732240437155%"),
    backgroundColor: "rgba(138, 173, 31, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_123: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("4.098361698004718%"),
    minHeight: hp("4.098361698004718%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("124.31693989071037%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_124: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("56.01092896174863%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_125: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("128.82513661202185%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_126: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("65.02732240437157%"),
    backgroundColor: "rgba(138, 173, 31, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_127: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("133.33333333333331%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_128: {
    width: wp("13.819444444444445%"),
    minWidth: wp("13.819444444444445%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("69.53551912568307%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_129: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("137.8415300546448%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_130: {
    width: wp("13.472225401136612%"),
    minWidth: wp("13.472225401136612%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("78.55191256830601%"),
    backgroundColor: "rgba(138, 173, 31, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_131: {
    width: wp("2.7777806917826333%"),
    minWidth: wp("2.7777806917826333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("142.34972677595627%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1_132: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44444444444444%"),
    top: hp("93.98907103825137%")
  },
  Text_1_132: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_133: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.44444444444444%"),
    top: hp("157.78688524590163%")
  },
  Text_1_133: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_134: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("99.31693989071039%")
  },
  Text_1_134: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_135: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("177.18579234972677%")
  },
  Text_1_135: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_136: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%"),
    top: hp("99.31693989071039%")
  },
  Text_1_136: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_137: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%"),
    top: hp("177.18579234972677%")
  },
  Text_1_137: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_138: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.18055555555556%"),
    top: hp("39.07103825136612%")
  },
  Text_1_138: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_139: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.56944444444444%"),
    top: hp("43.5792349726776%")
  },
  Text_1_139: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_140: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.916666666666664%"),
    top: hp("116.39344262295081%")
  },
  Text_1_140: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_141: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: hp("120.9016393442623%")
  },
  Text_1_141: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_142: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.22222222222222%"),
    top: hp("125.27322404371584%")
  },
  Text_1_142: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_143: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.375%"),
    top: hp("129.91803278688525%")
  },
  Text_1_143: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_144: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("134.4262295081967%")
  },
  Text_1_144: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_145: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("138.9344262295082%")
  },
  Text_1_145: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_146: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("143.44262295081967%")
  },
  Text_1_146: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_147: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("147.95081967213116%")
  },
  Text_1_147: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_148: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.77777777777778%"),
    top: hp("52.595628415300546%")
  },
  Text_1_148: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_149: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.5%"),
    top: hp("57.240437158469945%")
  },
  Text_1_149: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_150: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.541666666666664%"),
    top: hp("66.12021857923497%")
  },
  Text_1_150: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_151: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.09722222222222%"),
    top: hp("70.62841530054644%")
  },
  Text_1_151: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_152: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.75%"),
    top: hp("79.6448087431694%")
  },
  Text_1_152: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_153: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.625%"),
    top: hp("84.15300546448088%")
  },
  Text_1_153: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_154: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("37.97814207650273%")
  },
  ImageBackground_1_155: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("115.30054644808743%")
  },
  View_1_156: {
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
  View_1_157: {
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
  View_1_158: {
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
  ImageBackground_1_159: {
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
  ImageBackground_1_160: {
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
  View_1_161: {
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
  View_1_162: {
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
  View_1_163: {
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
  View_1_164: {
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
  ImageBackground_1_165: {
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
  ImageBackground_1_167: {
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
  View_1_169: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.888888888888886%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(138, 173, 31, 1)"
  },
  View_1_170: {
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
  View_1_171: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.06944444444445%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_1_172: {
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
  ImageBackground_1_173: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40277777777778%"),
    top: hp("115.30054644808743%")
  },
  View_1_182: {
    width: wp("45.90277777777778%"),
    minWidth: wp("45.90277777777778%"),
    height: hp("4.098368472740298%"),
    minHeight: hp("4.098368472740298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.583333333333332%"),
    top: hp("37.97814207650273%"),
    backgroundColor: "rgba(138, 173, 31, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_7_357: {
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
  View_7_358: {
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
  View_7_359: {
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
  View_7_360: {
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
  ImageBackground_7_361: {
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
  ImageBackground_7_363: {
    width: wp("2.361111111111111%"),
    height: hp("3.563652663934426%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%")
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
