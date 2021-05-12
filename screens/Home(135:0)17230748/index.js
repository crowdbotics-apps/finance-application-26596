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
      <View style={styles.View_135_1} />
      <View style={styles.View_135_2} />
      <View style={styles.View_135_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_135_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_135_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_135_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_135_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_135_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_135_9}
      />
      <View style={styles.View_135_10}>
        <View style={styles.View_135_11} />
        <View style={styles.View_135_12} />
        <View style={styles.View_135_13}>
          <View style={styles.View_135_14}>
            <Text style={styles.Text_135_14}>
              REVENUE AND EXPENSE (Y-Y BASIS)
            </Text>
          </View>
          <View style={styles.View_135_15} />
        </View>
        <View style={styles.View_135_16}>
          <Text style={styles.Text_135_16}>Amount in $</Text>
        </View>
        <View style={styles.View_135_17}>
          <Text style={styles.Text_135_17}>Timeline</Text>
        </View>
        <View style={styles.View_135_18}>
          <Text style={styles.Text_135_18}>Revenue</Text>
        </View>
        <View style={styles.View_135_19}>
          <Text style={styles.Text_135_19}>Expense</Text>
        </View>
        <View style={styles.View_135_20} />
        <View style={styles.View_135_21} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
          }}
          style={styles.ImageBackground_135_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
          }}
          style={styles.ImageBackground_135_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
          }}
          style={styles.ImageBackground_135_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
          }}
          style={styles.ImageBackground_135_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
          }}
          style={styles.ImageBackground_135_30}
        />
        <View style={styles.View_135_31} />
        <View style={styles.View_135_32} />
        <View style={styles.View_135_33} />
        <View style={styles.View_135_34} />
        <View style={styles.View_135_35} />
        <View style={styles.View_135_36} />
        <View style={styles.View_135_37} />
        <View style={styles.View_135_38} />
        <View style={styles.View_135_39} />
        <View style={styles.View_135_40} />
        <View style={styles.View_135_41}>
          <Text style={styles.Text_135_41}>1M</Text>
        </View>
        <View style={styles.View_135_42}>
          <Text style={styles.Text_135_42}>0</Text>
        </View>
        <View style={styles.View_135_43}>
          <Text style={styles.Text_135_43}>2M</Text>
        </View>
        <View style={styles.View_135_44}>
          <Text style={styles.Text_135_44}>3M</Text>
        </View>
        <View style={styles.View_135_45}>
          <Text style={styles.Text_135_45}>2021</Text>
        </View>
        <View style={styles.View_135_46}>
          <Text style={styles.Text_135_46}>2020</Text>
        </View>
        <View style={styles.View_135_47}>
          <Text style={styles.Text_135_47}>2019</Text>
        </View>
        <View style={styles.View_135_48}>
          <Text style={styles.Text_135_48}>2018</Text>
        </View>
        <View style={styles.View_135_49}>
          <Text style={styles.Text_135_49}>2017</Text>
        </View>
      </View>
      <View style={styles.View_135_50}>
        <View style={styles.View_135_51}>
          <Text style={styles.Text_135_51}>REVENUE</Text>
        </View>
        <View style={styles.View_135_52}>
          <View style={styles.View_135_53} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1240/2c14/fbd46d3e5e3d8a327c0adf46472e45e2"
          }}
          style={styles.ImageBackground_135_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a85/8367/0257d7483b1cf715d07ab0954cb7195e"
          }}
          style={styles.ImageBackground_135_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7827/a2eb/3e01462faf95aa5f5a77f2f696e043b4"
          }}
          style={styles.ImageBackground_135_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fd/c9b0/484ee974d0df987bcf0961429cfa3e7e"
          }}
          style={styles.ImageBackground_135_57}
        />
        <View style={styles.View_135_58}>
          <View style={styles.View_135_59}>
            <View style={styles.View_135_60} />
            <View style={styles.View_135_61}>
              <Text style={styles.Text_135_61}>Logistics 20%</Text>
            </View>
          </View>
          <View style={styles.View_135_62}>
            <View style={styles.View_135_63} />
            <View style={styles.View_135_64}>
              <Text style={styles.Text_135_64}>Insurance 55%</Text>
            </View>
          </View>
          <View style={styles.View_135_65}>
            <View style={styles.View_135_66} />
            <View style={styles.View_135_67}>
              <Text style={styles.Text_135_67}>Service Cs 15%</Text>
            </View>
          </View>
          <View style={styles.View_135_68}>
            <View style={styles.View_135_69} />
            <View style={styles.View_135_70}>
              <Text style={styles.Text_135_70}>Service NB 10%</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_135_71}>
          <View style={styles.View_135_72}>
            <Text style={styles.Text_135_72}>Total Revenue</Text>
          </View>
          <View style={styles.View_135_73}>
            <Text style={styles.Text_135_73}>$ 6.6 M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_135_74}>
        <View style={styles.View_135_75}>
          <Text style={styles.Text_135_75}>EXPENSE</Text>
        </View>
        <View style={styles.View_135_76}>
          <View style={styles.View_135_77} />
        </View>
        <View style={styles.View_135_78}>
          <View style={styles.View_135_79}>
            <View style={styles.View_135_80} />
            <View style={styles.View_135_81}>
              <Text style={styles.Text_135_81}>Logistics 25%</Text>
            </View>
          </View>
          <View style={styles.View_135_82}>
            <View style={styles.View_135_83} />
            <View style={styles.View_135_84}>
              <Text style={styles.Text_135_84}>Insurance 40%</Text>
            </View>
          </View>
          <View style={styles.View_135_85}>
            <View style={styles.View_135_86} />
            <View style={styles.View_135_87}>
              <Text style={styles.Text_135_87}>Service Cs 20%</Text>
            </View>
          </View>
          <View style={styles.View_135_88}>
            <View style={styles.View_135_89} />
            <View style={styles.View_135_90}>
              <Text style={styles.Text_135_90}>Service NB 15%</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd07/4c5b/25404c55f57e5cf7949112111ba207b9"
          }}
          style={styles.ImageBackground_135_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5e/d41e/fdcc433327bf6448258ddc2177d6bc92"
          }}
          style={styles.ImageBackground_135_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6480/71b7/f692eca4b261b4ef72058c5dc74805fe"
          }}
          style={styles.ImageBackground_135_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84b/d85d/8749dbcdf48f89ece6e712d20e598085"
          }}
          style={styles.ImageBackground_135_94}
        />
        <View style={styles.View_135_95}>
          <View style={styles.View_135_96}>
            <Text style={styles.Text_135_96}>Total Expense</Text>
          </View>
          <View style={styles.View_135_97}>
            <Text style={styles.Text_135_97}>$ 5.0 M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_135_98}>
        <View style={styles.View_135_99}>
          <Text style={styles.Text_135_99}>EBITDA (MONTHLY TREND)</Text>
        </View>
        <View style={styles.View_135_100}>
          <View style={styles.View_135_101} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_135_102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_135_103}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_135_104}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_135_105}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_135_106}
          />
          <View style={styles.View_135_107}>
            <Text style={styles.Text_135_107}>1M</Text>
          </View>
          <View style={styles.View_135_108}>
            <Text style={styles.Text_135_108}>2M</Text>
          </View>
          <View style={styles.View_135_109}>
            <Text style={styles.Text_135_109}>3M</Text>
          </View>
          <View style={styles.View_135_110}>
            <Text style={styles.Text_135_110}>4M</Text>
          </View>
          <View style={styles.View_135_111}>
            <Text style={styles.Text_135_111}>0</Text>
          </View>
          <View style={styles.View_135_112}>
            <Text style={styles.Text_135_112}>Amount in $</Text>
          </View>
          <View style={styles.View_135_113}>
            <Text style={styles.Text_135_113}>Months</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/63b1/4ed2746d2496af93961d08563caecd43"
            }}
            style={styles.ImageBackground_135_114}
          />
          <View style={styles.View_135_120}>
            <View style={styles.View_135_121}>
              <View style={styles.View_135_122}>
                <View style={styles.View_135_123}>
                  <Text style={styles.Text_135_123}>Jan</Text>
                </View>
                <View style={styles.View_135_124}>
                  <Text style={styles.Text_135_124}>Feb</Text>
                </View>
                <View style={styles.View_135_125}>
                  <Text style={styles.Text_135_125}>Mar</Text>
                </View>
                <View style={styles.View_135_126}>
                  <Text style={styles.Text_135_126}>Apr</Text>
                </View>
                <View style={styles.View_135_127}>
                  <Text style={styles.Text_135_127}>May</Text>
                </View>
                <View style={styles.View_135_128}>
                  <Text style={styles.Text_135_128}>Jun</Text>
                </View>
                <View style={styles.View_135_129}>
                  <Text style={styles.Text_135_129}>Jul</Text>
                </View>
                <View style={styles.View_135_130}>
                  <Text style={styles.Text_135_130}>Aug</Text>
                </View>
                <View style={styles.View_135_131}>
                  <Text style={styles.Text_135_131}>Sep</Text>
                </View>
                <View style={styles.View_135_132}>
                  <Text style={styles.Text_135_132}>Oct</Text>
                </View>
                <View style={styles.View_135_133}>
                  <Text style={styles.Text_135_133}>Nov</Text>
                </View>
                <View style={styles.View_135_134}>
                  <Text style={styles.Text_135_134}>Dec</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc6/ee57/b80433df2a657bc6a3ff0d189dc3844b"
                  }}
                  style={styles.ImageBackground_135_135}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_135_148}>
          <View style={styles.View_135_149}>
            <View style={styles.View_135_150}>
              <View style={styles.View_135_151}>
                <View style={styles.View_135_152}>
                  <Text style={styles.Text_135_152}>Profit</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b9f/1f6b/3d0df6cdb90152033b307a38ef1baddb"
          }}
          style={styles.ImageBackground_135_153}
        />
      </View>
      <View style={styles.View_135_157}>
        <View style={styles.View_135_158}>
          <View style={styles.View_135_159}>
            <Text style={styles.Text_135_159}>
              REVENUE AND EXPENSE BY DEPARTMENT
            </Text>
          </View>
          <View style={styles.View_135_160} />
          <View style={styles.View_135_161}>
            <View style={styles.View_135_162}>
              <View style={styles.View_135_163}>
                <View style={styles.View_135_164}>
                  <Text style={styles.Text_135_164}>Insurance</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_135_165}>
              <View style={styles.View_135_166}>
                <View style={styles.View_135_167}>
                  <Text style={styles.Text_135_167}>Logistics</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_135_168}>
              <View style={styles.View_135_169}>
                <View style={styles.View_135_170}>
                  <Text style={styles.Text_135_170}>Service Cs</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_135_171}>
              <View style={styles.View_135_172}>
                <View style={styles.View_135_173}>
                  <Text style={styles.Text_135_173}>Service Cs</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_135_174}>
              <View style={styles.View_135_175}>
                <View style={styles.View_135_176}>
                  <Text style={styles.Text_135_176}>Service New Business</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_135_177}>
          <Text style={styles.Text_135_177}>Departments</Text>
        </View>
        <View style={styles.View_135_178} />
        <View style={styles.View_135_179}>
          <Text style={styles.Text_135_179}>2M</Text>
        </View>
        <View style={styles.View_135_180}>
          <Text style={styles.Text_135_180}>1M</Text>
        </View>
        <View style={styles.View_135_181}>
          <Text style={styles.Text_135_181}>3M</Text>
        </View>
        <View style={styles.View_135_182}>
          <Text style={styles.Text_135_182}>4M</Text>
        </View>
        <View style={styles.View_135_183}>
          <Text style={styles.Text_135_183}>5M</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_135_184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_135_185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_135_186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_135_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_135_188}
        />
        <View style={styles.View_135_189} />
        <View style={styles.View_135_190} />
        <View style={styles.View_135_191} />
        <View style={styles.View_135_192} />
        <View style={styles.View_135_193} />
        <View style={styles.View_135_194} />
        <View style={styles.View_135_195}>
          <Text style={styles.Text_135_195}>Amount in $ </Text>
        </View>
        <View style={styles.View_135_196}>
          <Text style={styles.Text_135_196}>Revenue</Text>
        </View>
        <View style={styles.View_135_197}>
          <Text style={styles.Text_135_197}>Expense</Text>
        </View>
        <View style={styles.View_135_198}>
          <Text style={styles.Text_135_198}>3.3M</Text>
        </View>
        <View style={styles.View_135_199}>
          <Text style={styles.Text_135_199}>2M</Text>
        </View>
        <View style={styles.View_135_200}>
          <Text style={styles.Text_135_200}>1.65M</Text>
        </View>
        <View style={styles.View_135_201}>
          <Text style={styles.Text_135_201}>1.25M</Text>
        </View>
        <View style={styles.View_135_202}>
          <Text style={styles.Text_135_202}>1.32M</Text>
        </View>
        <View style={styles.View_135_203}>
          <Text style={styles.Text_135_203}>1M</Text>
        </View>
        <View style={styles.View_135_204}>
          <Text style={styles.Text_135_204}>0.99M</Text>
        </View>
        <View style={styles.View_135_205}>
          <Text style={styles.Text_135_205}>0.75M</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_135_206}
        />
        <View style={styles.View_135_207} />
        <View style={styles.View_135_208} />
        <View style={styles.View_135_209} />
      </View>
      <View style={styles.View_135_210}>
        <View style={styles.View_135_211}>
          <View style={styles.View_135_212}>
            <Text style={styles.Text_135_212}>EXPENSES BY CATEGORY</Text>
          </View>
          <View style={styles.View_135_213} />
          <View style={styles.View_135_214}>
            <View style={styles.View_135_215}>
              <View style={styles.View_135_216}>
                <View style={styles.View_135_217}>
                  <Text style={styles.Text_135_217}>Marketing</Text>
                </View>
                <View style={styles.View_135_218}>
                  <Text style={styles.Text_135_218}>Full Time - Salary</Text>
                </View>
                <View style={styles.View_135_219}>
                  <Text style={styles.Text_135_219}>Full Time - Bonus</Text>
                </View>
                <View style={styles.View_135_220}>
                  <Text style={styles.Text_135_220}>Payroll Taxes</Text>
                </View>
                <View style={styles.View_135_221}>
                  <Text style={styles.Text_135_221}>Part Time - Salary</Text>
                </View>
                <View style={styles.View_135_222}>
                  <Text style={styles.Text_135_222}>
                    Full Time - Commission
                  </Text>
                </View>
                <View style={styles.View_135_223}>
                  <Text style={styles.Text_135_223}>Consulting</Text>
                </View>
                <View style={styles.View_135_224}>
                  <Text style={styles.Text_135_224}>Licenses and Permits</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_135_225}>
          <Text style={styles.Text_135_225}>Categories</Text>
        </View>
        <View style={styles.View_135_226} />
        <View style={styles.View_135_227}>
          <Text style={styles.Text_135_227}>2M</Text>
        </View>
        <View style={styles.View_135_228}>
          <Text style={styles.Text_135_228}>1M</Text>
        </View>
        <View style={styles.View_135_229}>
          <Text style={styles.Text_135_229}>3M</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
          }}
          style={styles.ImageBackground_135_230}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
          }}
          style={styles.ImageBackground_135_231}
        />
        <View style={styles.View_135_232} />
        <View style={styles.View_135_233} />
        <View style={styles.View_135_234} />
        <View style={styles.View_135_235} />
        <View style={styles.View_135_236} />
        <View style={styles.View_135_237}>
          <Text style={styles.Text_135_237}>Amount in $ </Text>
        </View>
        <View style={styles.View_135_238}>
          <Text style={styles.Text_135_238}>2M</Text>
        </View>
        <View style={styles.View_135_239}>
          <Text style={styles.Text_135_239}>1.5M</Text>
        </View>
        <View style={styles.View_135_240}>
          <Text style={styles.Text_135_240}>0.5M</Text>
        </View>
        <View style={styles.View_135_241}>
          <Text style={styles.Text_135_241}>0.3M</Text>
        </View>
        <View style={styles.View_135_242}>
          <Text style={styles.Text_135_242}>0.2M</Text>
        </View>
        <View style={styles.View_135_243}>
          <Text style={styles.Text_135_243}>0.2M</Text>
        </View>
        <View style={styles.View_135_244}>
          <Text style={styles.Text_135_244}>0.2M</Text>
        </View>
        <View style={styles.View_135_245}>
          <Text style={styles.Text_135_245}>0.1M</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
          }}
          style={styles.ImageBackground_135_246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
          }}
          style={styles.ImageBackground_135_247}
        />
        <View style={styles.View_135_248} />
        <View style={styles.View_135_249} />
      </View>
      <View style={styles.View_135_250}>
        <Text style={styles.Text_135_250}>Expense</Text>
      </View>
      <View style={styles.View_135_251} />
      <View style={styles.View_135_252}>
        <Text style={styles.Text_135_252}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_135_253}
      />
      <View style={styles.View_135_254}>
        <Text style={styles.Text_135_254}>Overall</Text>
      </View>
      <View style={styles.View_135_255}>
        <View style={styles.View_135_256}>
          <View style={styles.View_135_257}>
            <Text style={styles.Text_135_257}>REVENUE AND EXPENSE</Text>
          </View>
          <View style={styles.View_135_258} />
        </View>
        <View style={styles.View_135_259}>
          <Text style={styles.Text_135_259}>Amount in $</Text>
        </View>
        <View style={styles.View_135_260}>
          <Text style={styles.Text_135_260}>Timeline</Text>
        </View>
        <View style={styles.View_135_261}>
          <Text style={styles.Text_135_261}>Forecasted Revenue</Text>
        </View>
        <View style={styles.View_135_262}>
          <Text style={styles.Text_135_262}>Actual Revenue</Text>
        </View>
        <View style={styles.View_135_263}>
          <Text style={styles.Text_135_263}>Forecasted Expense</Text>
        </View>
        <View style={styles.View_135_264} />
        <View style={styles.View_135_265} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_267}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b688/cf45/b2b703b6ce8c513d43e7a0ed0a6bdd9f"
          }}
          style={styles.ImageBackground_135_269}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_270}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_271}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_273}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_275}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_276}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_277}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_278}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_280}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
          }}
          style={styles.ImageBackground_135_281}
        />
        <View style={styles.View_135_282} />
        <View style={styles.View_135_283} />
        <View style={styles.View_135_284} />
        <View style={styles.View_135_285} />
        <View style={styles.View_135_286} />
        <View style={styles.View_135_287} />
        <View style={styles.View_135_288} />
        <View style={styles.View_135_289} />
        <View style={styles.View_135_290} />
        <View style={styles.View_135_291} />
        <View style={styles.View_135_292} />
        <View style={styles.View_135_293} />
        <View style={styles.View_135_294} />
        <View style={styles.View_135_295} />
        <View style={styles.View_135_296} />
        <View style={styles.View_135_297} />
        <View style={styles.View_135_298} />
        <View style={styles.View_135_299} />
        <View style={styles.View_135_300} />
        <View style={styles.View_135_301} />
        <View style={styles.View_135_302} />
        <View style={styles.View_135_303} />
        <View style={styles.View_135_304} />
        <View style={styles.View_135_305} />
        <View style={styles.View_135_306}>
          <Text style={styles.Text_135_306}>1M</Text>
        </View>
        <View style={styles.View_135_307}>
          <Text style={styles.Text_135_307}>0</Text>
        </View>
        <View style={styles.View_135_308}>
          <Text style={styles.Text_135_308}>2M</Text>
        </View>
        <View style={styles.View_135_309}>
          <Text style={styles.Text_135_309}>3M</Text>
        </View>
        <View style={styles.View_135_310}>
          <Text style={styles.Text_135_310}>Dec 2021</Text>
        </View>
        <View style={styles.View_135_311}>
          <Text style={styles.Text_135_311}>Nov 2021</Text>
        </View>
        <View style={styles.View_135_312}>
          <Text style={styles.Text_135_312}>Oct 2021</Text>
        </View>
        <View style={styles.View_135_313}>
          <Text style={styles.Text_135_313}>Sep 2021</Text>
        </View>
        <View style={styles.View_135_314}>
          <Text style={styles.Text_135_314}>Aug 2021</Text>
        </View>
        <View style={styles.View_135_315}>
          <Text style={styles.Text_135_315}>Jul 2021</Text>
        </View>
        <View style={styles.View_135_316}>
          <Text style={styles.Text_135_316}>Jun 2021</Text>
        </View>
        <View style={styles.View_135_317}>
          <Text style={styles.Text_135_317}>May 2021</Text>
        </View>
        <View style={styles.View_135_318}>
          <Text style={styles.Text_135_318}>Apr 2021</Text>
        </View>
        <View style={styles.View_135_319}>
          <Text style={styles.Text_135_319}>Mar 2021</Text>
        </View>
        <View style={styles.View_135_320}>
          <Text style={styles.Text_135_320}>Feb 2021</Text>
        </View>
        <View style={styles.View_135_321}>
          <Text style={styles.Text_135_321}>Jan 2021</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4004/ebc2/8b05105113b121426836e653e5b6225f"
          }}
          style={styles.ImageBackground_135_330}
        />
        <View style={styles.View_135_334}>
          <Text style={styles.Text_135_334}>Actual Expense</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6e/d18b/efdcc633676f7d701211924a3860a653"
          }}
          style={styles.ImageBackground_135_335}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_135_339}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_135_341}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_135_343}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_135_344}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_135_345}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bb/31ce/ab3b71e6f7e09cf93dc4623fe5aa71db"
        }}
        style={styles.ImageBackground_135_346}
      />
      <View style={styles.View_135_347}>
        <View style={styles.View_135_348}>
          <View style={styles.View_135_349}>
            <View style={styles.View_135_350}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                }}
                style={styles.ImageBackground_135_351}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
                }}
                style={styles.ImageBackground_135_352}
              />
            </View>
            <View style={styles.View_135_353}>
              <View style={styles.View_135_354}>
                <View style={styles.View_135_355}>
                  <View style={styles.View_135_356}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                      }}
                      style={styles.ImageBackground_135_357}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
                }}
                style={styles.ImageBackground_135_359}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_135_361}>
          <View style={styles.View_135_362}>
            <View style={styles.View_135_363}>
              <View style={styles.View_135_364}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                  }}
                  style={styles.ImageBackground_135_365}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cbe/55c0/5b420d0f5eaee43f462cf5e378d87b5e"
            }}
            style={styles.ImageBackground_135_367}
          />
        </View>
      </View>
      <View style={styles.View_139_52}>
        <Text style={styles.Text_139_52}>Expense</Text>
      </View>
      <View style={styles.View_139_53} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_135_1: {
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
  View_135_2: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("362.0218579234973%"),
    minHeight: hp("362.0218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010929%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_135_3: {
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
  ImageBackground_135_4: {
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
  ImageBackground_135_5: {
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
  ImageBackground_135_6: {
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
  ImageBackground_135_7: {
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
  ImageBackground_135_8: {
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
  ImageBackground_135_9: {
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
  View_135_10: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("70.3551912568306%"),
    minHeight: hp("70.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("99.31693989071039%")
  },
  View_135_11: {
    width: wp("36.68991936577691%"),
    minWidth: wp("36.68991936577691%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9822048611111143%"),
    top: hp("6.284153005464461%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_135_12: {
    width: wp("36.68991936577691%"),
    minWidth: wp("36.68991936577691%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9822048611111143%"),
    top: hp("19.945355191256837%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_135_13: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("70.3551912568306%"),
    minHeight: hp("70.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_14: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_14: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_15: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("66.74722973766222%"),
    minHeight: hp("66.74722973766222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.60794484289616%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_135_16: {
    width: wp("0.47649280892478096%"),
    minWidth: wp("0.47649280892478096%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6807454427083428%"),
    top: hp("24.59016393442623%")
  },
  Text_135_16: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_17: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.652777777777786%"),
    top: hp("60.245901639344254%")
  },
  Text_135_17: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_18: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444457%"),
    top: hp("65.98360655737704%")
  },
  Text_135_18: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_19: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.375%"),
    top: hp("65.98360655737704%")
  },
  Text_135_19: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_20: {
    width: wp("1.0550904273986816%"),
    minWidth: wp("1.0550904273986816%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.347222222222229%"),
    top: hp("65.57377049180329%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_135_21: {
    width: wp("1.0550904273986816%"),
    minWidth: wp("1.0550904273986816%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.070203993055557%"),
    top: hp("65.57377049180329%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_135_22: {
    width: wp("36.349572075737846%"),
    minWidth: wp("36.349572075737846%"),
    height: hp("0.000012755128429360341%"),
    minHeight: hp("0.000012755128429360341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.718044704861114%"),
    top: hp("38.52459016393442%")
  },
  ImageBackground_135_23: {
    width: wp("36.349572075737846%"),
    minWidth: wp("36.349572075737846%"),
    height: hp("0.00001275512644139378%"),
    minHeight: hp("0.00001275512644139378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.718044704861114%"),
    top: hp("52.18579234972677%")
  },
  ImageBackground_135_24: {
    width: wp("36.349572075737846%"),
    minWidth: wp("36.349572075737846%"),
    height: hp("0.000012755128429360341%"),
    minHeight: hp("0.000012755128429360341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.718044704861114%"),
    top: hp("24.863387978142086%")
  },
  ImageBackground_135_25: {
    width: wp("36.349572075737846%"),
    minWidth: wp("36.349572075737846%"),
    height: hp("0.000012755128429360341%"),
    minHeight: hp("0.000012755128429360341%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.718044704861114%"),
    top: hp("11.202185792349724%")
  },
  ImageBackground_135_26: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.474799262152779%"),
    top: hp("52.18579234972677%")
  },
  ImageBackground_135_27: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.166720920138886%"),
    top: hp("52.18579234972677%")
  },
  ImageBackground_135_28: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.858506944444443%"),
    top: hp("52.18579234972677%")
  },
  ImageBackground_135_29: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.55069986979167%"),
    top: hp("52.18579234972677%")
  },
  ImageBackground_135_30: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.24262152777777%"),
    top: hp("52.18579234972677%")
  },
  View_135_31: {
    width: wp("2.7228220303853354%"),
    minWidth: wp("2.7228220303853354%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.542751736111107%"),
    top: hp("29.644808743169392%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_32: {
    width: wp("2.7228220303853354%"),
    minWidth: wp("2.7228220303853354%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.234944661458343%"),
    top: hp("29.644808743169392%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_33: {
    width: wp("2.722822825113932%"),
    minWidth: wp("2.722822825113932%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.926730685763886%"),
    top: hp("27.322404371584696%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_34: {
    width: wp("2.722824944390191%"),
    minWidth: wp("2.722824944390191%"),
    height: hp("30.601092896174865%"),
    minHeight: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.61865234375%"),
    top: hp("21.58469945355192%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_35: {
    width: wp("2.722824149661594%"),
    minWidth: wp("2.722824149661594%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.31043836805556%"),
    top: hp("24.18032786885246%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_36: {
    width: wp("2.7228212356567383%"),
    minWidth: wp("2.7228212356567383%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.718044704861114%"),
    top: hp("31.83060109289616%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_37: {
    width: wp("2.7228230900234647%"),
    minWidth: wp("2.7228230900234647%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.409830729166671%"),
    top: hp("27.322404371584696%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_38: {
    width: wp("2.7228246794806585%"),
    minWidth: wp("2.7228246794806585%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.101752387152786%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_39: {
    width: wp("2.7228267987569175%"),
    minWidth: wp("2.7228267987569175%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.7939453125%"),
    top: hp("16.53005464480873%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_40: {
    width: wp("2.722827328575982%"),
    minWidth: wp("2.722827328575982%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.48573133680556%"),
    top: hp("15.163934426229503%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_41: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%"),
    top: hp("37.84153005464481%")
  },
  Text_135_41: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_42: {
    width: wp("0.5785979827245077%"),
    minWidth: wp("0.5785979827245077%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.016248914930557%"),
    top: hp("51.502732240437155%")
  },
  Text_135_42: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_43: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("24.18032786885246%")
  },
  Text_135_43: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_44: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2638888888888857%"),
    top: hp("10.51912568306011%")
  },
  Text_135_44: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_45: {
    width: wp("2.361111111111111%"),
    minWidth: wp("2.361111111111111%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.81944444444446%"),
    top: hp("54.91803278688525%")
  },
  Text_135_45: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_46: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.111111111111114%"),
    top: hp("54.91803278688525%")
  },
  Text_135_46: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_47: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.402777777777786%"),
    top: hp("54.91803278688525%")
  },
  Text_135_47: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_48: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.694444444444443%"),
    top: hp("54.91803278688525%")
  },
  Text_135_48: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_49: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555557%"),
    top: hp("54.91803278688525%")
  },
  Text_135_49: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_50: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("65.30054644808743%"),
    minHeight: hp("65.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("31.420765027322407%")
  },
  View_135_51: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_51: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_52: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885245%")
  },
  View_135_53: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(35, 37, 52, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_135_54: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_135_55: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_135_56: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_135_57: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("10.382513661202186%")
  },
  View_135_58: {
    width: wp("40.34722222222222%"),
    minWidth: wp("40.34722222222222%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("57.5136612021858%")
  },
  View_135_59: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.347222222222223%"),
    top: hp("0%")
  },
  View_135_60: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 183, 220, 1)"
  },
  View_135_61: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_135_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_62: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_63: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 81, 130, 1)"
  },
  View_135_64: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_135_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_65: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.416666666666664%"),
    top: hp("0%")
  },
  View_135_66: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 113, 220, 1)"
  },
  View_135_67: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("1.0928961748633697%")
  },
  Text_135_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_68: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.111111111111107%"),
    top: hp("0%")
  },
  View_135_69: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_135_70: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_135_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_71: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.73611111111111%"),
    top: hp("27.04918032786885%")
  },
  View_135_72: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_72: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_73: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("5.191256830601098%")
  },
  Text_135_73: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_74: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("65.30054644808743%"),
    minHeight: hp("65.30054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("31.420765027322407%")
  },
  View_135_75: {
    width: wp("15.902777777777777%"),
    minWidth: wp("15.902777777777777%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_75: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_76: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885245%")
  },
  View_135_77: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(35, 37, 52, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_135_78: {
    width: wp("40.34722222222222%"),
    minWidth: wp("40.34722222222222%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("57.5136612021858%")
  },
  View_135_79: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.347222222222214%"),
    top: hp("0%")
  },
  View_135_80: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 183, 220, 1)"
  },
  View_135_81: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("0.6830601092896131%")
  },
  Text_135_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_82: {
    width: wp("8.75%"),
    minWidth: wp("8.75%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_83: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 81, 130, 1)"
  },
  View_135_84: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_135_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_85: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.416666666666657%"),
    top: hp("0%")
  },
  View_135_86: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(103, 113, 220, 1)"
  },
  View_135_87: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("1.0928961748633697%")
  },
  Text_135_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_88: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.111111111111114%"),
    top: hp("0%")
  },
  View_135_89: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_135_90: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("0.6830601092896131%")
  },
  Text_135_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_91: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_135_92: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_135_93: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_135_94: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("10.382513661202186%")
  },
  View_135_95: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.736111111111114%"),
    top: hp("27.04918032786885%")
  },
  View_135_96: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_96: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_97: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: hp("5.191256830601098%")
  },
  Text_135_97: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_98: {
    width: wp("44.7222900390625%"),
    minWidth: wp("44.7222900390625%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("172.40437158469945%")
  },
  View_135_99: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_99: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_100: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%")
  },
  View_135_101: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(35, 37, 52, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_135_102: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56944444444445%"),
    top: hp("33.87978142076503%")
  },
  ImageBackground_135_103: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56944444444445%"),
    top: hp("26.366120218579226%")
  },
  ImageBackground_135_104: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56944444444445%"),
    top: hp("18.715846994535525%")
  },
  ImageBackground_135_105: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56944444444445%"),
    top: hp("11.065573770491824%")
  },
  ImageBackground_135_106: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56944444444445%"),
    top: hp("3.415300546448094%")
  },
  View_135_107: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("25.546448087431685%")
  },
  Text_135_107: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_108: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666671%"),
    top: hp("17.896174863387984%")
  },
  Text_135_108: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_109: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666671%"),
    top: hp("10.245901639344254%")
  },
  Text_135_109: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_110: {
    width: wp("1.5277777777777777%"),
    minWidth: wp("1.5277777777777777%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.902777777777779%"),
    top: hp("2.732240437158481%")
  },
  Text_135_110: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_111: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.736111111111107%"),
    top: hp("32.240437158469945%")
  },
  Text_135_111: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_112: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    top: hp("14.48087431693989%")
  },
  Text_135_112: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_113: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("42.759562841530055%")
  },
  Text_135_113: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_114: {
    width: wp("9.583301544189453%"),
    minWidth: wp("9.583301544189453%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.19444444444445%"),
    top: hp("22.677595628415304%")
  },
  View_135_120: {
    width: wp("34.65277777777778%"),
    minWidth: wp("34.65277777777778%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56944444444445%"),
    top: hp("33.87978142076503%")
  },
  View_135_121: {
    width: wp("34.65277777777778%"),
    minWidth: wp("34.65277777777778%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_122: {
    width: wp("34.65277777777778%"),
    minWidth: wp("34.65277777777778%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_123: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590194%")
  },
  Text_135_123: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_124: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.986111111111107%"),
    top: hp("3.278688524590194%")
  },
  Text_135_124: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_125: {
    width: wp("1.8055555555555554%"),
    minWidth: wp("1.8055555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222221%"),
    top: hp("3.278688524590194%")
  },
  Text_135_125: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_126: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.027777777777779%"),
    top: hp("3.278688524590194%")
  },
  Text_135_126: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_127: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.80555555555555%"),
    top: hp("3.278688524590194%")
  },
  Text_135_127: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_128: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.93055555555555%"),
    top: hp("3.278688524590194%")
  },
  Text_135_128: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_129: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.124999999999993%"),
    top: hp("3.278688524590194%")
  },
  Text_135_129: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_130: {
    width: wp("1.8055555555555554%"),
    minWidth: wp("1.8055555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.90277777777778%"),
    top: hp("3.278688524590194%")
  },
  Text_135_130: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_131: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.88888888888888%"),
    top: hp("3.278688524590194%")
  },
  Text_135_131: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_132: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.944444444444436%"),
    top: hp("3.278688524590194%")
  },
  Text_135_132: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_133: {
    width: wp("1.875%"),
    minWidth: wp("1.875%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.791666666666664%"),
    top: hp("3.278688524590194%")
  },
  Text_135_133: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_134: {
    width: wp("1.8055555555555554%"),
    minWidth: wp("1.8055555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.84722222222222%"),
    top: hp("3.278688524590194%")
  },
  Text_135_134: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_135: {
    width: wp("32.84722222222222%"),
    minWidth: wp("32.84722222222222%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777786%"),
    top: hp("0%")
  },
  View_135_148: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.027777777777786%"),
    top: hp("51.366120218579255%")
  },
  View_135_149: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_150: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_151: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_152: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_152: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_153: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.97222222222223%"),
    top: hp("51.571038251366105%")
  },
  View_135_157: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.59016393442623%"),
    minHeight: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("230.73770491803282%")
  },
  View_135_158: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.59016393442623%"),
    minHeight: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_159: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_159: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_160: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.76502732240438%"),
    minHeight: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_135_161: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("10.928961748633839%")
  },
  View_135_162: {
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
  View_135_163: {
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
  View_135_164: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_164: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_165: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222223%"),
    top: hp("13.38797814207652%")
  },
  View_135_166: {
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
  View_135_167: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_167: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_168: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.912568306010968%")
  },
  View_135_169: {
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
  View_135_170: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_170: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_171: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.912568306010968%")
  },
  View_135_172: {
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
  View_135_173: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_173: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_174: {
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
  View_135_175: {
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
  View_135_176: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_176: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_177: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("23.633879781420745%")
  },
  Text_135_177: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_178: {
    width: wp("10.34722540113661%"),
    minWidth: wp("10.34722540113661%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_179: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.16666666666666%"),
    top: hp("59.153005464480884%")
  },
  Text_135_179: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_180: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.347222222222225%"),
    top: hp("59.153005464480884%")
  },
  Text_135_180: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_181: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.986111111111114%"),
    top: hp("59.153005464480884%")
  },
  Text_135_181: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_182: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.7361111111111%"),
    top: hp("59.153005464480884%")
  },
  Text_135_182: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_183: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%"),
    top: hp("59.153005464480884%")
  },
  Text_135_183: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_184: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.041666666666668%"),
    top: hp("7.240437158469888%")
  },
  ImageBackground_135_185: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.861111111111114%"),
    top: hp("7.240437158469888%")
  },
  ImageBackground_135_186: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.68055555555556%"),
    top: hp("7.240437158469888%")
  },
  ImageBackground_135_187: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%"),
    top: hp("7.240437158469888%")
  },
  ImageBackground_135_188: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.31944444444444%"),
    top: hp("7.240437158469888%")
  },
  View_135_189: {
    width: wp("27.63888888888889%"),
    minWidth: wp("27.63888888888889%"),
    height: hp("4.098365345939261%"),
    minHeight: hp("4.098365345939261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("11.748633879781408%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_190: {
    width: wp("22.5%"),
    minWidth: wp("22.5%"),
    height: hp("4.098364303672248%"),
    minHeight: hp("4.098364303672248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("20.765027322404336%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_191: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("25.2732240437158%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_192: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("34.289617486338784%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_193: {
    width: wp("13.819444444444445%"),
    minWidth: wp("13.819444444444445%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("38.79781420765022%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_194: {
    width: wp("13.472225401136612%"),
    minWidth: wp("13.472225401136612%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("47.814207650273204%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_195: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.013888888888886%"),
    top: hp("63.25136612021856%")
  },
  Text_135_195: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_196: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("68.98907103825132%")
  },
  Text_135_196: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_197: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13888888888888%"),
    top: hp("68.98907103825132%")
  },
  Text_135_197: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_198: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.81944444444444%"),
    top: hp("8.333333333333286%")
  },
  Text_135_198: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_199: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.20833333333333%"),
    top: hp("12.841530054644807%")
  },
  Text_135_199: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_200: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("21.857923497267734%")
  },
  Text_135_200: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_201: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.138888888888886%"),
    top: hp("26.502732240437126%")
  },
  Text_135_201: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_202: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.18055555555555%"),
    top: hp("35.382513661202154%")
  },
  Text_135_202: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_203: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("39.890710382513646%")
  },
  Text_135_203: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_204: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("48.90710382513657%")
  },
  Text_135_204: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_205: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888889%"),
    top: hp("53.415300546448066%")
  },
  Text_135_205: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_206: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("7.240437158469888%")
  },
  View_135_207: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.36111111111111%"),
    top: hp("68.57923497267757%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_135_208: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.5%"),
    top: hp("68.57923497267757%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_135_209: {
    width: wp("45.90277777777778%"),
    minWidth: wp("45.90277777777778%"),
    height: hp("4.098368472740298%"),
    minHeight: hp("4.098368472740298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("7.240437158469888%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_210: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("172.40437158469945%")
  },
  View_135_211: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_212: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_212: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_213: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
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
  View_135_214: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("7.377049180327873%")
  },
  View_135_215: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_216: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_217: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.310628255208334%"),
    top: hp("0%")
  },
  Text_135_217: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_218: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.310628255208334%"),
    top: hp("4.508196721311492%")
  },
  Text_135_218: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_219: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.310628255208334%"),
    top: hp("9.016393442622956%")
  },
  Text_135_219: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_220: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.310628255208334%"),
    top: hp("13.524590163934448%")
  },
  Text_135_220: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_221: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.310628255208334%"),
    top: hp("18.032786885245912%")
  },
  Text_135_221: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_222: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.540983606557376%")
  },
  Text_135_222: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_223: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.310628255208334%"),
    top: hp("27.049180327868868%")
  },
  Text_135_223: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_224: {
    width: wp("10.209259457058376%"),
    minWidth: wp("10.209259457058376%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13793945312499822%"),
    top: hp("31.55737704918033%")
  },
  Text_135_224: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_225: {
    width: wp("0.9722227520412869%"),
    minWidth: wp("0.9722227520412869%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("18.16939890710384%")
  },
  Text_135_225: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_226: {
    width: wp("0.6944474246766832%"),
    minWidth: wp("0.6944474246766832%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("38.25136612021859%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_227: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.805555555555554%"),
    top: hp("43.98907103825138%")
  },
  Text_135_227: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_228: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.86111111111111%"),
    top: hp("43.98907103825138%")
  },
  Text_135_228: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_229: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.81944444444444%"),
    top: hp("43.98907103825138%")
  },
  Text_135_229: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_230: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5%"),
    top: hp("6.69398907103826%")
  },
  ImageBackground_135_231: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("6.69398907103826%")
  },
  View_135_232: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("4.098361437437964%"),
    minHeight: hp("4.098361437437964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("15.710382513661187%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_233: {
    width: wp("2.0833334657880993%"),
    minWidth: wp("2.0833334657880993%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("20.21857923497268%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_234: {
    width: wp("1.388889021343655%"),
    minWidth: wp("1.388889021343655%"),
    height: hp("4.0983609163044585%"),
    minHeight: hp("4.0983609163044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("24.726775956284143%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_235: {
    width: wp("1.388889021343655%"),
    minWidth: wp("1.388889021343655%"),
    height: hp("4.0983609163044585%"),
    minHeight: hp("4.0983609163044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("29.234972677595607%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_236: {
    width: wp("1.3888919353485107%"),
    minWidth: wp("1.3888919353485107%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("33.74316939890713%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_237: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.416666666666668%"),
    top: hp("47.404371584699476%")
  },
  Text_135_237: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_238: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.19444444444444%"),
    top: hp("8.060109289617486%")
  },
  Text_135_238: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_239: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.652777777777782%"),
    top: hp("12.43169398907105%")
  },
  Text_135_239: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_240: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.777777777777775%"),
    top: hp("16.939890710382514%")
  },
  Text_135_240: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_241: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.388888888888886%"),
    top: hp("21.584699453551906%")
  },
  Text_135_241: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_242: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("25.81967213114754%")
  },
  Text_135_242: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_243: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("30.464480874316962%")
  },
  Text_135_243: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_244: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("35.109289617486326%")
  },
  Text_135_244: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_245: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("39.34426229508199%")
  },
  Text_135_245: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_246: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("6.69398907103826%")
  },
  ImageBackground_135_247: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("6.69398907103826%")
  },
  View_135_248: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_249: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("11.202185792349724%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_250: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.61111111111111%"),
    top: hp("296.58469945355193%")
  },
  Text_135_250: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_251: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.972222222222225%"),
    top: hp("296.1748633879782%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_135_252: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_135_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_253: {
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
  View_135_254: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_135_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_255: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.430555555555555%"),
    top: hp("99.4535519125683%")
  },
  View_135_256: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_257: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_135_257: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_258: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
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
  View_135_259: {
    width: wp("0.47649280892478096%"),
    minWidth: wp("0.47649280892478096%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6113009982638893%"),
    top: hp("24.590163934426243%")
  },
  Text_135_259: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_260: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.041666666666664%"),
    top: hp("61.88524590163935%")
  },
  Text_135_260: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_261: {
    width: wp("9.51388888888889%"),
    minWidth: wp("9.51388888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333334%"),
    top: hp("65.5737704918033%")
  },
  Text_135_261: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_262: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.486111111111109%"),
    top: hp("65.5737704918033%")
  },
  Text_135_262: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_263: {
    width: wp("9.23611111111111%"),
    minWidth: wp("9.23611111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.069444444444443%"),
    top: hp("65.5737704918033%")
  },
  Text_135_263: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_264: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.666666666666666%"),
    top: hp("65.5737704918033%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_135_265: {
    width: wp("1.25%"),
    minWidth: wp("1.25%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.611111111111114%"),
    top: hp("65.5737704918033%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_135_266: {
    width: wp("36.34956783718533%"),
    minWidth: wp("36.34956783718533%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.648328993055555%"),
    top: hp("38.524590163934434%")
  },
  ImageBackground_135_267: {
    width: wp("36.34956783718533%"),
    minWidth: wp("36.34956783718533%"),
    height: hp("0.00001275512644139378%"),
    minHeight: hp("0.00001275512644139378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.648328993055555%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_268: {
    width: wp("36.34956783718533%"),
    minWidth: wp("36.34956783718533%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.648328993055555%"),
    top: hp("24.86338797814207%")
  },
  ImageBackground_135_269: {
    width: wp("36.34956783718533%"),
    minWidth: wp("36.34956783718533%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.648328993055555%"),
    top: hp("11.202185792349738%")
  },
  ImageBackground_135_270: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.0138888888888875%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_271: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.069444444444445%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_272: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.124999999999998%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_273: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.180691189236114%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_274: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.236246744791664%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_275: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.291531032986114%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_276: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.347086588541664%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_277: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.40277777777778%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_278: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.458333333333336%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_279: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.513888888888886%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_280: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.56944444444444%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_135_281: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.55555555555556%"),
    top: hp("52.18579234972678%")
  },
  View_135_282: {
    width: wp("1.388898425632053%"),
    minWidth: wp("1.388898425632053%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.083333333333334%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_283: {
    width: wp("1.388898425632053%"),
    minWidth: wp("1.388898425632053%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.138888888888888%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_284: {
    width: wp("1.388897630903456%"),
    minWidth: wp("1.388897630903456%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444445%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_285: {
    width: wp("1.3888988229963515%"),
    minWidth: wp("1.3888988229963515%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.25%"),
    top: hp("24.180327868852473%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_286: {
    width: wp("1.3888972335391574%"),
    minWidth: wp("1.3888972335391574%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.305555555555557%"),
    top: hp("28.825136612021865%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_287: {
    width: wp("1.3888982931772869%"),
    minWidth: wp("1.3888982931772869%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.361111111111114%"),
    top: hp("25.683060109289627%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_288: {
    width: wp("1.3888982931772869%"),
    minWidth: wp("1.3888982931772869%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.416666666666664%"),
    top: hp("25.683060109289627%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_289: {
    width: wp("1.3888985580868192%"),
    minWidth: wp("1.3888985580868192%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.47222222222222%"),
    top: hp("25%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_290: {
    width: wp("1.3888961739010282%"),
    minWidth: wp("1.3888961739010282%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.52777777777778%"),
    top: hp("31.830601092896174%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_291: {
    width: wp("1.3888965712653265%"),
    minWidth: wp("1.3888965712653265%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.583333333333336%"),
    top: hp("30.601092896174848%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_292: {
    width: wp("1.3888971010843914%"),
    minWidth: wp("1.3888971010843914%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.638888888888886%"),
    top: hp("28.961748633879793%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_293: {
    width: wp("1.3888965712653265%"),
    minWidth: wp("1.3888965712653265%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.629611545138886%"),
    top: hp("30.601092896174848%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_294: {
    width: wp("1.3888986905415852%"),
    minWidth: wp("1.3888986905415852%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.625000000000002%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_295: {
    width: wp("1.3888994852701821%"),
    minWidth: wp("1.3888994852701821%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.680555555555555%"),
    top: hp("22.67759562841529%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_296: {
    width: wp("1.388898425632053%"),
    minWidth: wp("1.388898425632053%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.736111111111112%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_297: {
    width: wp("1.3888994852701821%"),
    minWidth: wp("1.3888994852701821%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.791666666666666%"),
    top: hp("22.67759562841529%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_298: {
    width: wp("1.3888994852701821%"),
    minWidth: wp("1.3888994852701821%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.84722222222222%"),
    top: hp("22.67759562841529%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_299: {
    width: wp("1.388900015089247%"),
    minWidth: wp("1.388900015089247%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.90277777777778%"),
    top: hp("21.038251366120207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_300: {
    width: wp("1.3888994852701821%"),
    minWidth: wp("1.3888994852701821%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.958333333333336%"),
    top: hp("22.67759562841529%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_301: {
    width: wp("1.3888994852701821%"),
    minWidth: wp("1.3888994852701821%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.013888888888886%"),
    top: hp("22.67759562841529%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_302: {
    width: wp("1.3888988229963515%"),
    minWidth: wp("1.3888988229963515%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.069444444444443%"),
    top: hp("24.180327868852473%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_303: {
    width: wp("1.3888985580868192%"),
    minWidth: wp("1.3888985580868192%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.125%"),
    top: hp("25%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_304: {
    width: wp("1.3888985580868192%"),
    minWidth: wp("1.3888985580868192%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.18055555555556%"),
    top: hp("25%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_305: {
    width: wp("1.3888988229963515%"),
    minWidth: wp("1.3888988229963515%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.166666666666664%"),
    top: hp("24.180327868852473%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_135_306: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333334%"),
    top: hp("37.84153005464482%")
  },
  Text_135_306: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_307: {
    width: wp("0.5785980489518907%"),
    minWidth: wp("0.5785980489518907%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9468044704861107%"),
    top: hp("51.50273224043717%")
  },
  Text_135_307: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_308: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.125%"),
    top: hp("24.180327868852473%")
  },
  Text_135_308: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_309: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1944444444444446%"),
    top: hp("10.51912568306011%")
  },
  Text_135_309: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_310: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.20833333333333%"),
    top: hp("53.825136612021865%")
  },
  Text_135_310: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_311: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.22222222222222%"),
    top: hp("53.68852459016394%")
  },
  Text_135_311: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_312: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.166666666666664%"),
    top: hp("53.825136612021865%")
  },
  Text_135_312: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_313: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.111111111111114%"),
    top: hp("53.825136612021865%")
  },
  Text_135_313: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_314: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.055555555555557%"),
    top: hp("53.825136612021865%")
  },
  Text_135_314: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_315: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("53.825136612021865%")
  },
  Text_135_315: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_316: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("53.825136612021865%")
  },
  Text_135_316: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_317: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.888888888888893%"),
    top: hp("53.68852459016394%")
  },
  Text_135_317: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_318: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.833333333333334%"),
    top: hp("53.825136612021865%")
  },
  Text_135_318: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_319: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%"),
    top: hp("53.825136612021865%")
  },
  Text_135_319: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_320: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("53.825136612021865%")
  },
  Text_135_320: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_321: {
    width: wp("0.625%"),
    minWidth: wp("0.625%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("53.825136612021865%")
  },
  Text_135_321: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_330: {
    width: wp("1.7361617088317869%"),
    minWidth: wp("1.7361617088317869%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.541666666666666%"),
    top: hp("65.5737704918033%")
  },
  View_135_334: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.45833333333333%"),
    top: hp("65.5737704918033%")
  },
  Text_135_334: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_335: {
    width: wp("1.7362124390072293%"),
    minWidth: wp("1.7362124390072293%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.513888888888886%"),
    top: hp("65.5737704918033%")
  },
  ImageBackground_135_339: {
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
  ImageBackground_135_341: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  ImageBackground_135_343: {
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
  ImageBackground_135_344: {
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
  ImageBackground_135_345: {
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
  ImageBackground_135_346: {
    width: wp("1.1111111111111112%"),
    height: hp("0.6942655219406378%"),
    top: hp("14.301904563695356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_135_347: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.97222222222223%"),
    top: hp("22.404371584699454%")
  },
  View_135_348: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111%"),
    top: hp("0%")
  },
  View_135_349: {
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
  View_135_350: {
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
  ImageBackground_135_351: {
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
  ImageBackground_135_352: {
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
  View_135_353: {
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
  View_135_354: {
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
  View_135_355: {
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
  View_135_356: {
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
  ImageBackground_135_357: {
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
  ImageBackground_135_359: {
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
  View_135_361: {
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
  View_135_362: {
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
  View_135_363: {
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
  View_135_364: {
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
  ImageBackground_135_365: {
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
  ImageBackground_135_367: {
    width: wp("2.361111111111111%"),
    height: hp("3.563652663934426%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27777777777777146%")
  },
  View_139_52: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.84722222222222%"),
    top: hp("223.49726775956285%")
  },
  Text_139_52: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_53: {
    width: wp("1.0550904273986816%"),
    minWidth: wp("1.0550904273986816%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.972222222222225%"),
    top: hp("223.0874316939891%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_2: { height: 2790 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
