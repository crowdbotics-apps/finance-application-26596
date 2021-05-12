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
      <View style={styles.View_138_3} />
      <View style={styles.View_138_4} />
      <View style={styles.View_138_5} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_138_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_138_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_138_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_138_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_138_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_138_11}
      />
      <View style={styles.View_138_52}>
        <View style={styles.View_138_53}>
          <Text style={styles.Text_138_53}>REVENUE</Text>
        </View>
        <View style={styles.View_138_54}>
          <View style={styles.View_138_55} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0da/b9de/fdc169437a23a3c65bbe230702bd72f2"
          }}
          style={styles.ImageBackground_138_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d932/926e/48804ba1ec0596b6461b127fc5c7473b"
          }}
          style={styles.ImageBackground_138_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97da/1977/bdd624a026d7324dd0b326c4e303e604"
          }}
          style={styles.ImageBackground_138_58}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fd/c9b0/484ee974d0df987bcf0961429cfa3e7e"
          }}
          style={styles.ImageBackground_138_59}
        />
        <View style={styles.View_138_60}>
          <View style={styles.View_138_61}>
            <View style={styles.View_138_62} />
            <View style={styles.View_138_63}>
              <Text style={styles.Text_138_63}>Logistics 20%</Text>
            </View>
          </View>
          <View style={styles.View_138_64}>
            <View style={styles.View_138_65} />
            <View style={styles.View_138_66}>
              <Text style={styles.Text_138_66}>Insurance 55%</Text>
            </View>
          </View>
          <View style={styles.View_138_67}>
            <View style={styles.View_138_68} />
            <View style={styles.View_138_69}>
              <Text style={styles.Text_138_69}>Service Cs 15%</Text>
            </View>
          </View>
          <View style={styles.View_138_70}>
            <View style={styles.View_138_71} />
            <View style={styles.View_138_72}>
              <Text style={styles.Text_138_72}>Service NB 10%</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_138_73}>
          <View style={styles.View_138_74}>
            <Text style={styles.Text_138_74}>Total Revenue</Text>
          </View>
          <View style={styles.View_138_75}>
            <Text style={styles.Text_138_75}>$ 3.5M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_138_76}>
        <View style={styles.View_138_77}>
          <Text style={styles.Text_138_77}>EXPENSE</Text>
        </View>
        <View style={styles.View_138_78}>
          <View style={styles.View_138_79} />
        </View>
        <View style={styles.View_138_80}>
          <View style={styles.View_138_81}>
            <View style={styles.View_138_82} />
            <View style={styles.View_138_83}>
              <Text style={styles.Text_138_83}>Logistics 25%</Text>
            </View>
          </View>
          <View style={styles.View_138_84}>
            <View style={styles.View_138_85} />
            <View style={styles.View_138_86}>
              <Text style={styles.Text_138_86}>Insurance 40%</Text>
            </View>
          </View>
          <View style={styles.View_138_87}>
            <View style={styles.View_138_88} />
            <View style={styles.View_138_89}>
              <Text style={styles.Text_138_89}>Service Cs 20%</Text>
            </View>
          </View>
          <View style={styles.View_138_90}>
            <View style={styles.View_138_91} />
            <View style={styles.View_138_92}>
              <Text style={styles.Text_138_92}>Service NB 15%</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/017c/e2d2caa698c81f7104475aaf8de6d248"
          }}
          style={styles.ImageBackground_138_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5e/d41e/fdcc433327bf6448258ddc2177d6bc92"
          }}
          style={styles.ImageBackground_138_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bed/fe5b/41a29052379bcf2c1e7595e6474e4fb9"
          }}
          style={styles.ImageBackground_138_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67dd/0dcf/ac833e485d67be4d90fd53322a1fc001"
          }}
          style={styles.ImageBackground_138_96}
        />
        <View style={styles.View_138_97}>
          <View style={styles.View_138_98}>
            <Text style={styles.Text_138_98}>Total Expense</Text>
          </View>
          <View style={styles.View_138_99}>
            <Text style={styles.Text_138_99}>$ 2.0M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_138_159}>
        <View style={styles.View_138_160}>
          <View style={styles.View_138_161}>
            <Text style={styles.Text_138_161}>
              REVENUE AND EXPENSE BY DEPARTMENT
            </Text>
          </View>
          <View style={styles.View_138_162} />
          <View style={styles.View_138_163}>
            <View style={styles.View_138_164}>
              <View style={styles.View_138_165}>
                <View style={styles.View_138_166}>
                  <Text style={styles.Text_138_166}>Insurance</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_138_167}>
              <View style={styles.View_138_168}>
                <View style={styles.View_138_169}>
                  <Text style={styles.Text_138_169}>Logistics</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_138_170}>
              <View style={styles.View_138_171}>
                <View style={styles.View_138_172}>
                  <Text style={styles.Text_138_172}>Service Cs</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_138_173}>
              <View style={styles.View_138_174}>
                <View style={styles.View_138_175}>
                  <Text style={styles.Text_138_175}>Service Cs</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_138_176}>
              <View style={styles.View_138_177}>
                <View style={styles.View_138_178}>
                  <Text style={styles.Text_138_178}>Service New Business</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_138_179}>
          <Text style={styles.Text_138_179}>Departments</Text>
        </View>
        <View style={styles.View_138_180} />
        <View style={styles.View_138_181}>
          <Text style={styles.Text_138_181}>2M</Text>
        </View>
        <View style={styles.View_138_182}>
          <Text style={styles.Text_138_182}>1M</Text>
        </View>
        <View style={styles.View_138_183}>
          <Text style={styles.Text_138_183}>3M</Text>
        </View>
        <View style={styles.View_138_184}>
          <Text style={styles.Text_138_184}>4M</Text>
        </View>
        <View style={styles.View_138_185}>
          <Text style={styles.Text_138_185}>5M</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_138_186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_138_187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_138_188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_138_189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_138_190}
        />
        <View style={styles.View_138_191} />
        <View style={styles.View_138_192} />
        <View style={styles.View_138_193} />
        <View style={styles.View_138_194} />
        <View style={styles.View_138_195} />
        <View style={styles.View_138_196} />
        <View style={styles.View_138_197}>
          <Text style={styles.Text_138_197}>Amount in $ </Text>
        </View>
        <View style={styles.View_138_198}>
          <Text style={styles.Text_138_198}>Revenue</Text>
        </View>
        <View style={styles.View_138_199}>
          <Text style={styles.Text_138_199}>Expense</Text>
        </View>
        <View style={styles.View_138_200}>
          <Text style={styles.Text_138_200}>3.3M</Text>
        </View>
        <View style={styles.View_138_201}>
          <Text style={styles.Text_138_201}>2M</Text>
        </View>
        <View style={styles.View_138_202}>
          <Text style={styles.Text_138_202}>1.65M</Text>
        </View>
        <View style={styles.View_138_203}>
          <Text style={styles.Text_138_203}>1.25M</Text>
        </View>
        <View style={styles.View_138_204}>
          <Text style={styles.Text_138_204}>1.32M</Text>
        </View>
        <View style={styles.View_138_205}>
          <Text style={styles.Text_138_205}>1M</Text>
        </View>
        <View style={styles.View_138_206}>
          <Text style={styles.Text_138_206}>0.99M</Text>
        </View>
        <View style={styles.View_138_207}>
          <Text style={styles.Text_138_207}>0.75M</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
          }}
          style={styles.ImageBackground_138_208}
        />
        <View style={styles.View_138_209} />
        <View style={styles.View_138_210} />
        <View style={styles.View_138_211} />
      </View>
      <View style={styles.View_159_15}>
        <View style={styles.View_138_212}>
          <View style={styles.View_138_213}>
            <View style={styles.View_138_214}>
              <Text style={styles.Text_138_214}>EXPENSES BY CATEGORY</Text>
            </View>
            <View style={styles.View_138_215} />
            <View style={styles.View_138_216}>
              <View style={styles.View_138_217}>
                <View style={styles.View_138_218}>
                  <View style={styles.View_138_219}>
                    <Text style={styles.Text_138_219}>Marketing</Text>
                  </View>
                  <View style={styles.View_138_220}>
                    <Text style={styles.Text_138_220}>Full Time - Salary</Text>
                  </View>
                  <View style={styles.View_138_221}>
                    <Text style={styles.Text_138_221}>Full Time - Bonus</Text>
                  </View>
                  <View style={styles.View_138_222}>
                    <Text style={styles.Text_138_222}>Payroll Taxes</Text>
                  </View>
                  <View style={styles.View_138_223}>
                    <Text style={styles.Text_138_223}>Part Time - Salary</Text>
                  </View>
                  <View style={styles.View_138_224}>
                    <Text style={styles.Text_138_224}>
                      Full Time - Commission
                    </Text>
                  </View>
                  <View style={styles.View_138_225}>
                    <Text style={styles.Text_138_225}>Consulting</Text>
                  </View>
                  <View style={styles.View_138_226}>
                    <Text style={styles.Text_138_226}>
                      Licenses and Permits
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_138_227}>
            <Text style={styles.Text_138_227}>Categories</Text>
          </View>
          <View style={styles.View_138_228} />
          <View style={styles.View_138_229}>
            <Text style={styles.Text_138_229}>2M</Text>
          </View>
          <View style={styles.View_138_230}>
            <Text style={styles.Text_138_230}>1M</Text>
          </View>
          <View style={styles.View_138_231}>
            <Text style={styles.Text_138_231}>3M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_138_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_138_233}
          />
          <View style={styles.View_138_234} />
          <View style={styles.View_138_235} />
          <View style={styles.View_138_236} />
          <View style={styles.View_138_237} />
          <View style={styles.View_138_238} />
          <View style={styles.View_138_239}>
            <Text style={styles.Text_138_239}>Amount in $ </Text>
          </View>
          <View style={styles.View_138_240}>
            <Text style={styles.Text_138_240}>2M</Text>
          </View>
          <View style={styles.View_138_241}>
            <Text style={styles.Text_138_241}>1.5M</Text>
          </View>
          <View style={styles.View_138_242}>
            <Text style={styles.Text_138_242}>0.5M</Text>
          </View>
          <View style={styles.View_138_243}>
            <Text style={styles.Text_138_243}>0.3M</Text>
          </View>
          <View style={styles.View_138_244}>
            <Text style={styles.Text_138_244}>0.2M</Text>
          </View>
          <View style={styles.View_138_245}>
            <Text style={styles.Text_138_245}>0.2M</Text>
          </View>
          <View style={styles.View_138_246}>
            <Text style={styles.Text_138_246}>0.2M</Text>
          </View>
          <View style={styles.View_138_247}>
            <Text style={styles.Text_138_247}>0.1M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_138_248}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_138_249}
          />
          <View style={styles.View_138_250} />
          <View style={styles.View_138_251} />
        </View>
        <View style={styles.View_138_252}>
          <Text style={styles.Text_138_252}>Expense</Text>
        </View>
        <View style={styles.View_138_253} />
      </View>
      <View style={styles.View_138_254}>
        <Text style={styles.Text_138_254}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_138_255}
      />
      <View style={styles.View_138_256}>
        <Text style={styles.Text_138_256}>Overall</Text>
      </View>
      <View style={styles.View_147_196}>
        <View style={styles.View_147_197}>
          <Text style={styles.Text_147_197}>EBITDA (MONTHLY TREND)</Text>
        </View>
        <View style={styles.View_147_198}>
          <View style={styles.View_147_199} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_147_200}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_147_201}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_147_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
            }}
            style={styles.ImageBackground_147_203}
          />
          <View style={styles.View_147_204}>
            <Text style={styles.Text_147_204}>1M</Text>
          </View>
          <View style={styles.View_147_205}>
            <Text style={styles.Text_147_205}>2M</Text>
          </View>
          <View style={styles.View_147_206}>
            <Text style={styles.Text_147_206}>3M</Text>
          </View>
          <View style={styles.View_147_207}>
            <Text style={styles.Text_147_207}>0</Text>
          </View>
          <View style={styles.View_147_208}>
            <Text style={styles.Text_147_208}>Amount in $</Text>
          </View>
          <View style={styles.View_147_209}>
            <Text style={styles.Text_147_209}>Months</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a24/9dfa/06c3eca5ad96fb836a535e9e32d915a2"
            }}
            style={styles.ImageBackground_147_210}
          />
          <View style={styles.View_147_216}>
            <View style={styles.View_147_217}>
              <View style={styles.View_147_218}>
                <View style={styles.View_147_219}>
                  <Text style={styles.Text_147_219}>Jan 2018</Text>
                </View>
                <View style={styles.View_147_220}>
                  <Text style={styles.Text_147_220}>Feb 2018</Text>
                </View>
                <View style={styles.View_147_221}>
                  <Text style={styles.Text_147_221}>Mar 2018</Text>
                </View>
                <View style={styles.View_147_222}>
                  <Text style={styles.Text_147_222}>Apr 2018</Text>
                </View>
                <View style={styles.View_147_223}>
                  <Text style={styles.Text_147_223}>May 2018</Text>
                </View>
                <View style={styles.View_147_224}>
                  <Text style={styles.Text_147_224}>Jun 2018</Text>
                </View>
                <View style={styles.View_147_225}>
                  <Text style={styles.Text_147_225}>Jul 2018</Text>
                </View>
                <View style={styles.View_147_226}>
                  <Text style={styles.Text_147_226}>Aug 2018</Text>
                </View>
                <View style={styles.View_147_227}>
                  <Text style={styles.Text_147_227}>Sep 2018</Text>
                </View>
                <View style={styles.View_147_228}>
                  <Text style={styles.Text_147_228}>Oct 2018</Text>
                </View>
                <View style={styles.View_147_229}>
                  <Text style={styles.Text_147_229}>Nov 2018</Text>
                </View>
                <View style={styles.View_147_230}>
                  <Text style={styles.Text_147_230}>Dec 2018</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc6/ee57/b80433df2a657bc6a3ff0d189dc3844b"
                  }}
                  style={styles.ImageBackground_147_231}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_147_244}>
          <View style={styles.View_147_245}>
            <View style={styles.View_147_246}>
              <View style={styles.View_147_247}>
                <View style={styles.View_147_248}>
                  <Text style={styles.Text_147_248}>Profit</Text>
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
          style={styles.ImageBackground_147_249}
        />
      </View>
      <View style={styles.View_159_14}>
        <View style={styles.View_141_90}>
          <View style={styles.View_138_257}>
            <View style={styles.View_138_258}>
              <View style={styles.View_138_259}>
                <Text style={styles.Text_138_259}>REVENUE AND EXPENSE</Text>
              </View>
              <View style={styles.View_138_260} />
            </View>
            <View style={styles.View_138_261}>
              <Text style={styles.Text_138_261}>Amount in $</Text>
            </View>
            <View style={styles.View_138_262}>
              <Text style={styles.Text_138_262}>Timeline</Text>
            </View>
            <View style={styles.View_138_263}>
              <Text style={styles.Text_138_263}>Forecasted Revenue</Text>
            </View>
            <View style={styles.View_138_264}>
              <Text style={styles.Text_138_264}>Actual Revenue</Text>
            </View>
            <View style={styles.View_138_265}>
              <Text style={styles.Text_138_265}>Forecasted Expense</Text>
            </View>
            <View style={styles.View_138_266} />
            <View style={styles.View_138_267} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cabc/eb1f/59a1d5726b20ffd89535c9a0fe4b083f"
              }}
              style={styles.ImageBackground_138_268}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cabc/eb1f/59a1d5726b20ffd89535c9a0fe4b083f"
              }}
              style={styles.ImageBackground_138_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cabc/eb1f/59a1d5726b20ffd89535c9a0fe4b083f"
              }}
              style={styles.ImageBackground_138_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cabc/eb1f/59a1d5726b20ffd89535c9a0fe4b083f"
              }}
              style={styles.ImageBackground_138_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_278}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_279}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_138_283}
            />
            <View style={styles.View_138_284} />
            <View style={styles.View_138_285} />
            <View style={styles.View_138_286} />
            <View style={styles.View_138_287} />
            <View style={styles.View_138_288} />
            <View style={styles.View_138_289} />
            <View style={styles.View_138_290} />
            <View style={styles.View_138_291} />
            <View style={styles.View_138_292} />
            <View style={styles.View_138_293} />
            <View style={styles.View_138_294} />
            <View style={styles.View_138_295} />
            <View style={styles.View_138_296} />
            <View style={styles.View_138_297} />
            <View style={styles.View_138_298} />
            <View style={styles.View_138_299} />
            <View style={styles.View_138_300} />
            <View style={styles.View_138_301} />
            <View style={styles.View_138_302} />
            <View style={styles.View_138_303} />
            <View style={styles.View_138_304} />
            <View style={styles.View_138_305} />
            <View style={styles.View_138_306} />
            <View style={styles.View_138_307} />
            <View style={styles.View_138_308}>
              <Text style={styles.Text_138_308}>1M</Text>
            </View>
            <View style={styles.View_138_309}>
              <Text style={styles.Text_138_309}>0</Text>
            </View>
            <View style={styles.View_138_310}>
              <Text style={styles.Text_138_310}>2M</Text>
            </View>
            <View style={styles.View_138_311}>
              <Text style={styles.Text_138_311}>3M</Text>
            </View>
            <View style={styles.View_138_312}>
              <Text style={styles.Text_138_312}>Dec 2018</Text>
            </View>
            <View style={styles.View_138_313}>
              <Text style={styles.Text_138_313}>Nov 2018</Text>
            </View>
            <View style={styles.View_138_314}>
              <Text style={styles.Text_138_314}>Oct 2018</Text>
            </View>
            <View style={styles.View_138_315}>
              <Text style={styles.Text_138_315}>Sep 2018</Text>
            </View>
            <View style={styles.View_138_316}>
              <Text style={styles.Text_138_316}>Aug 2018</Text>
            </View>
            <View style={styles.View_138_317}>
              <Text style={styles.Text_138_317}>Jul 2018</Text>
            </View>
            <View style={styles.View_138_318}>
              <Text style={styles.Text_138_318}>Jun 2018</Text>
            </View>
            <View style={styles.View_138_319}>
              <Text style={styles.Text_138_319}>May 2018</Text>
            </View>
            <View style={styles.View_138_320}>
              <Text style={styles.Text_138_320}>Apr 2018</Text>
            </View>
            <View style={styles.View_138_321}>
              <Text style={styles.Text_138_321}>Mar 2018</Text>
            </View>
            <View style={styles.View_138_322}>
              <Text style={styles.Text_138_322}>Feb 2018</Text>
            </View>
            <View style={styles.View_138_323}>
              <Text style={styles.Text_138_323}>Jan 2018</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_138_324}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_138_325}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_138_326}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_3}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_5}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_6}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_9}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/587e/09c4/d02556a00b6e39d60eb47011d1c3ae2d"
              }}
              style={styles.ImageBackground_138_327}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4eec/b5ca/089b13b57dbdbecc89bbcbebcac4084d"
              }}
              style={styles.ImageBackground_147_11}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_138_328}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_138_329}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_138_330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_263}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_264}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_265}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_266}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_267}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_268}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_269}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9c/831c/7f7d3c7510209b95bdd90cf0535ad2e4"
              }}
              style={styles.ImageBackground_138_331}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca6/761a/a81ee46e1c91021476f5053df584bd0b"
              }}
              style={styles.ImageBackground_138_332}
            />
            <View style={styles.View_138_336}>
              <Text style={styles.Text_138_336}>Actual Expense</Text>
            </View>
            <View style={styles.View_147_296}>
              <Text style={styles.Text_147_296}>Profit</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e1/b1d2/1dbe7693c604ea0b21c88b9bf7746dc4"
              }}
              style={styles.ImageBackground_138_337}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33bf/e6ef/7df7272b2148246c191c0d4486117197"
            }}
            style={styles.ImageBackground_138_370}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8eb/0149/a07a66d1290bfa132635c7927ac7628c"
            }}
            style={styles.ImageBackground_138_372}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
            }}
            style={styles.ImageBackground_138_373}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b05/e937/46f897e840ebaf728401d619b982b357"
            }}
            style={styles.ImageBackground_138_374}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_138_375}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_138_376}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_138_377}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_138_378}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_281}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_282}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_283}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_284}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_286}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_287}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_290}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acfa/9428/d0b370efa80abc74823a65b69cf0247e"
            }}
            style={styles.ImageBackground_147_289}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
            }}
            style={styles.ImageBackground_138_371}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9e5/9799/86828dd71ba3691586e6bd6b5bea484f"
          }}
          style={styles.ImageBackground_147_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62e9/2369/16558cc88eb6d384fa5163a1e8b2b4d9"
          }}
          style={styles.ImageBackground_147_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7281/17c4/21fa525c320c71a348e9282f72ae66f1"
          }}
          style={styles.ImageBackground_147_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3dc/468c/c0a3cc3ecb59a1a512b1f1178fd88890"
          }}
          style={styles.ImageBackground_147_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f9/6cd4/366a213eda5f32ce8eb5ed68f250a7b3"
          }}
          style={styles.ImageBackground_147_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/152c/91fa/38bdc02caf1b86635eabc662ce2dbe95"
          }}
          style={styles.ImageBackground_147_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/474a/4075/0778ed25d3e2cc9fbca3447e602f11dd"
          }}
          style={styles.ImageBackground_147_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d3/1b57/41f41809384454233ad1c4b2333f44fa"
          }}
          style={styles.ImageBackground_147_272}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb82/dd1a/ddb22662c0da3ed8ea6d4a931fc214f0"
          }}
          style={styles.ImageBackground_147_273}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05a3/0c5b/fb6fca800d48b7ae9b00221bec31795a"
          }}
          style={styles.ImageBackground_147_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d1/eb44/641da3c3ae301b61a6419a4b66b1804d"
          }}
          style={styles.ImageBackground_147_275}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc4c/161f/d01a9e030604a0ad5e9ed826b63019bd"
          }}
          style={styles.ImageBackground_147_276}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6900/a5a8/64229954f056cb12b400ea692123c19d"
          }}
          style={styles.ImageBackground_147_277}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f98/087c/c0e3641fb30819c03e609f883620a3a3"
          }}
          style={styles.ImageBackground_147_278}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b57d/9938/939c0c120911b47e58333ad4b8381afb"
          }}
          style={styles.ImageBackground_147_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c4/ea5f/07e7b8a29f653bdb8335f165ec95f07e"
          }}
          style={styles.ImageBackground_147_295}
        />
      </View>
      <View style={styles.View_147_1080}>
        <View style={styles.View_147_1078} />
        <View style={styles.View_147_1079}>
          <Text style={styles.Text_147_1079}>2018</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_138_341}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_138_343}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_138_345}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_138_346}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_138_347}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bb/31ce/ab3b71e6f7e09cf93dc4623fe5aa71db"
        }}
        style={styles.ImageBackground_138_348}
      />
      <View style={styles.View_138_349}>
        <View style={styles.View_138_350}>
          <View style={styles.View_138_351}>
            <View style={styles.View_138_352}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                }}
                style={styles.ImageBackground_138_353}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
                }}
                style={styles.ImageBackground_138_354}
              />
            </View>
            <View style={styles.View_138_355}>
              <View style={styles.View_138_356}>
                <View style={styles.View_138_357}>
                  <View style={styles.View_138_358}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                      }}
                      style={styles.ImageBackground_138_359}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
                }}
                style={styles.ImageBackground_138_361}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cbe/55c0/5b420d0f5eaee43f462cf5e378d87b5e"
          }}
          style={styles.ImageBackground_138_363}
        />
      </View>
      <View style={styles.View_138_387}>
        <View style={styles.View_138_388}>
          <View style={styles.View_138_389}>
            <View style={styles.View_138_390}>
              <View style={styles.View_138_391}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                  }}
                  style={styles.ImageBackground_138_392}
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
          style={styles.ImageBackground_138_394}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_138_3: {
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
  View_138_4: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("288.9344262295082%"),
    minHeight: hp("288.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000008477105034722223%"),
    top: hp("19.12568306010929%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_138_5: {
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
  ImageBackground_138_6: {
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
  ImageBackground_138_7: {
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
  ImageBackground_138_8: {
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
  ImageBackground_138_9: {
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
  ImageBackground_138_10: {
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
  ImageBackground_138_11: {
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
  View_138_52: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("63.934426229508205%"),
    minHeight: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("31.420765027322407%")
  },
  View_138_53: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_53: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_54: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%")
  },
  View_138_55: {
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
  ImageBackground_138_56: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_138_57: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_138_58: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_138_59: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444446%"),
    top: hp("9.016393442622952%")
  },
  View_138_60: {
    width: wp("40.34722222222222%"),
    minWidth: wp("40.34722222222222%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("56.14754098360656%")
  },
  View_138_61: {
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
  View_138_62: {
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
  View_138_63: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_138_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_64: {
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
  View_138_65: {
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
  View_138_66: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_138_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_67: {
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
  View_138_68: {
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
  View_138_69: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("1.0928961748633839%")
  },
  Text_138_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_70: {
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
  View_138_71: {
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
  View_138_72: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_138_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_73: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.73611111111111%"),
    top: hp("25.68306010928961%")
  },
  View_138_74: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_74: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_75: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("5.191256830601098%")
  },
  Text_138_75: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_76: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("63.934426229508205%"),
    minHeight: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("31.420765027322407%")
  },
  View_138_77: {
    width: wp("15.902777777777777%"),
    minWidth: wp("15.902777777777777%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_77: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_78: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("60.38251366120219%"),
    minHeight: hp("60.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%")
  },
  View_138_79: {
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
  View_138_80: {
    width: wp("40.34722222222222%"),
    minWidth: wp("40.34722222222222%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("56.14754098360656%")
  },
  View_138_81: {
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
  View_138_82: {
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
  View_138_83: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("0.6830601092896131%")
  },
  Text_138_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_84: {
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
  View_138_85: {
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
  View_138_86: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_138_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_87: {
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
  View_138_88: {
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
  View_138_89: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("1.0928961748633839%")
  },
  Text_138_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_90: {
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
  View_138_91: {
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
  View_138_92: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("0.6830601092896131%")
  },
  Text_138_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_93: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_138_94: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_138_95: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_138_96: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.944444444444443%"),
    top: hp("9.016393442622952%")
  },
  View_138_97: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.736111111111114%"),
    top: hp("25.68306010928961%")
  },
  View_138_98: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_98: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_99: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: hp("5.191256830601098%")
  },
  Text_138_99: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_159: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("73.77049180327869%"),
    minHeight: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("228.96174863387978%")
  },
  View_138_160: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("73.77049180327869%"),
    minHeight: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_138_161: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_161: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_162: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.76502732240438%"),
    minHeight: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_138_163: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("10.109289617486326%")
  },
  View_138_164: {
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
  View_138_165: {
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
  View_138_166: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_166: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_167: {
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
  View_138_168: {
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
  View_138_169: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_169: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_170: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.91256830601091%")
  },
  View_138_171: {
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
  View_138_172: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_172: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_173: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.91256830601091%")
  },
  View_138_174: {
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
  View_138_175: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_175: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_176: {
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
  View_138_177: {
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
  View_138_178: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_178: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_179: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("22.814207650273232%")
  },
  Text_138_179: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_180: {
    width: wp("10.34722540113661%"),
    minWidth: wp("10.34722540113661%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("51.50273224043718%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_181: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.16666666666666%"),
    top: hp("58.333333333333314%")
  },
  Text_138_181: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_182: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.347222222222225%"),
    top: hp("58.333333333333314%")
  },
  Text_138_182: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_183: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.986111111111114%"),
    top: hp("58.333333333333314%")
  },
  Text_138_183: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_184: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.7361111111111%"),
    top: hp("58.333333333333314%")
  },
  Text_138_184: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_185: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%"),
    top: hp("58.333333333333314%")
  },
  Text_138_185: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_186: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.041666666666668%"),
    top: hp("6.420765027322403%")
  },
  ImageBackground_138_187: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.861111111111114%"),
    top: hp("6.420765027322403%")
  },
  ImageBackground_138_188: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.68055555555556%"),
    top: hp("6.420765027322403%")
  },
  ImageBackground_138_189: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%"),
    top: hp("6.420765027322403%")
  },
  ImageBackground_138_190: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.31944444444444%"),
    top: hp("6.420765027322403%")
  },
  View_138_191: {
    width: wp("27.63888888888889%"),
    minWidth: wp("27.63888888888889%"),
    height: hp("4.098365345939261%"),
    minHeight: hp("4.098365345939261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("10.928961748633895%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_192: {
    width: wp("22.5%"),
    minWidth: wp("22.5%"),
    height: hp("4.098364303672248%"),
    minHeight: hp("4.098364303672248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("19.945355191256823%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_193: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("24.453551912568287%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_194: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("33.46994535519127%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_195: {
    width: wp("13.819444444444445%"),
    minWidth: wp("13.819444444444445%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("37.97814207650271%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_196: {
    width: wp("13.472225401136612%"),
    minWidth: wp("13.472225401136612%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("46.99453551912569%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_197: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.013888888888886%"),
    top: hp("62.43169398907105%")
  },
  Text_138_197: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_198: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("68.16939890710381%")
  },
  Text_138_198: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_199: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13888888888888%"),
    top: hp("68.16939890710381%")
  },
  Text_138_199: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_200: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.81944444444444%"),
    top: hp("7.513661202185773%")
  },
  Text_138_200: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_201: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.20833333333333%"),
    top: hp("12.021857923497237%")
  },
  Text_138_201: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_202: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("21.03825136612022%")
  },
  Text_138_202: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_203: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.138888888888886%"),
    top: hp("25.68306010928964%")
  },
  Text_138_203: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_204: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.18055555555555%"),
    top: hp("34.56284153005464%")
  },
  Text_138_204: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_205: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("39.07103825136613%")
  },
  Text_138_205: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_206: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("48.08743169398912%")
  },
  Text_138_206: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_207: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888889%"),
    top: hp("52.59562841530055%")
  },
  Text_138_207: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_208: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("6.420765027322403%")
  },
  View_138_209: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.36111111111111%"),
    top: hp("67.75956284153006%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_138_210: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.5%"),
    top: hp("67.75956284153006%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_138_211: {
    width: wp("45.90277777777778%"),
    minWidth: wp("45.90277777777778%"),
    height: hp("4.098368472740298%"),
    minHeight: hp("4.098368472740298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("6.420765027322403%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_159_15: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("171.03825136612022%")
  },
  View_138_212: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_138_213: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_138_214: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_214: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_215: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_138_216: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%"),
    top: hp("6.967213114754088%")
  },
  View_138_217: {
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
  View_138_218: {
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
  View_138_219: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("0%")
  },
  Text_138_219: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_220: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("4.508196721311492%")
  },
  Text_138_220: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_221: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("9.016393442622956%")
  },
  Text_138_221: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_222: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("13.524590163934448%")
  },
  Text_138_222: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_223: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("18.032786885245912%")
  },
  Text_138_223: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_224: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.540983606557376%")
  },
  Text_138_224: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_225: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("27.049180327868868%")
  },
  Text_138_225: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_226: {
    width: wp("10.209259457058376%"),
    minWidth: wp("10.209259457058376%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13796488444010535%"),
    top: hp("31.55737704918033%")
  },
  Text_138_226: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_227: {
    width: wp("0.9722227520412869%"),
    minWidth: wp("0.9722227520412869%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("17.759562841530055%")
  },
  Text_138_227: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_228: {
    width: wp("0.6944474246766832%"),
    minWidth: wp("0.6944474246766832%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("37.84153005464481%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_229: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.805555555555554%"),
    top: hp("43.5792349726776%")
  },
  Text_138_229: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_230: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.86111111111111%"),
    top: hp("43.5792349726776%")
  },
  Text_138_230: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_231: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.81944444444444%"),
    top: hp("43.5792349726776%")
  },
  Text_138_231: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_232: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5%"),
    top: hp("6.284153005464475%")
  },
  ImageBackground_138_233: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("6.284153005464475%")
  },
  View_138_234: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("4.098361437437964%"),
    minHeight: hp("4.098361437437964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("15.300546448087431%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_235: {
    width: wp("2.0833334657880993%"),
    minWidth: wp("2.0833334657880993%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("19.808743169398895%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_236: {
    width: wp("1.388889021343655%"),
    minWidth: wp("1.388889021343655%"),
    height: hp("4.0983609163044585%"),
    minHeight: hp("4.0983609163044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("24.316939890710387%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_237: {
    width: wp("1.388889021343655%"),
    minWidth: wp("1.388889021343655%"),
    height: hp("4.0983609163044585%"),
    minHeight: hp("4.0983609163044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_238: {
    width: wp("1.3888919353485107%"),
    minWidth: wp("1.3888919353485107%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("33.33333333333334%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_239: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.416666666666668%"),
    top: hp("46.99453551912569%")
  },
  Text_138_239: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_240: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.19444444444444%"),
    top: hp("7.650273224043701%")
  },
  Text_138_240: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_241: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.652777777777782%"),
    top: hp("12.021857923497265%")
  },
  Text_138_241: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_242: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.777777777777775%"),
    top: hp("16.53005464480873%")
  },
  Text_138_242: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_243: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.388888888888886%"),
    top: hp("21.17486338797815%")
  },
  Text_138_243: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_244: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("25.409836065573785%")
  },
  Text_138_244: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_245: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("30.054644808743177%")
  },
  Text_138_245: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_246: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("34.6994535519126%")
  },
  Text_138_246: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_247: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("38.934426229508176%")
  },
  Text_138_247: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_248: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("6.284153005464475%")
  },
  ImageBackground_138_249: {
    width: wp("7.92268919111747e-7%"),
    minWidth: wp("7.92268919111747e-7%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("6.284153005464475%")
  },
  View_138_250: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("6.284153005464475%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_251: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("10.792349726775939%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_252: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("50.68306010928961%")
  },
  Text_138_252: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_253: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("50.27322404371586%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_138_254: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_138_254: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_255: {
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
  View_138_256: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_138_256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_196: {
    width: wp("44.7222900390625%"),
    minWidth: wp("44.7222900390625%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("171.03825136612022%")
  },
  View_147_197: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_197: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_198: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027856727%"),
    top: hp("3.5519125683060224%")
  },
  View_147_199: {
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
  ImageBackground_147_200: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("28.551912568306022%")
  },
  ImageBackground_147_201: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("21.038251366120193%")
  },
  ImageBackground_147_202: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("13.387978142076491%")
  },
  ImageBackground_147_203: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("5.737704918032762%")
  },
  View_147_204: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.249932183159721%"),
    top: hp("20.21857923497268%")
  },
  Text_147_204: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_205: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041598849826393%"),
    top: hp("12.56830601092895%")
  },
  Text_147_205: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_206: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041598849826393%"),
    top: hp("4.918032786885249%")
  },
  Text_147_206: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_207: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.736043294270829%"),
    top: hp("26.91256830601091%")
  },
  Text_147_207: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_208: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291598849826393%"),
    top: hp("9.153005464480884%")
  },
  Text_147_208: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_209: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.84715440538195%"),
    top: hp("41.939890710382514%")
  },
  Text_147_209: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_210: {
    width: wp("33.47174750434028%"),
    minWidth: wp("33.47174750434028%"),
    height: hp("7.240442890938514%"),
    minHeight: hp("7.240442890938514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194376627604171%"),
    top: hp("18.032786885245883%")
  },
  View_147_216: {
    width: wp("33.541666666666664%"),
    minWidth: wp("33.541666666666664%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.124932183159729%"),
    top: hp("28.551912568306022%")
  },
  View_147_217: {
    width: wp("33.541666666666664%"),
    minWidth: wp("33.541666666666664%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_218: {
    width: wp("33.541666666666664%"),
    minWidth: wp("33.541666666666664%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_219: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%")
  },
  Text_147_219: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_220: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("2.3224043715846676%")
  },
  Text_147_220: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_221: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222221%"),
    top: hp("2.1857923497267393%")
  },
  Text_147_221: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_222: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_222: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_223: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.94444444444445%"),
    top: hp("1.7759562841529544%")
  },
  Text_147_223: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_224: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.93055555555555%"),
    top: hp("2.459016393442596%")
  },
  Text_147_224: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_225: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.916666666666664%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_225: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_226: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.90277777777778%"),
    top: hp("2.3224043715846676%")
  },
  Text_147_226: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_227: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.88888888888888%"),
    top: hp("2.459016393442596%")
  },
  Text_147_227: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_228: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.874999999999993%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_228: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_229: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.861111111111107%"),
    top: hp("2.1857923497267393%")
  },
  Text_147_229: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_230: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.84722222222222%"),
    top: hp("2.3224043715846676%")
  },
  Text_147_230: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_231: {
    width: wp("32.84722222222222%"),
    minWidth: wp("32.84722222222222%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222143%"),
    top: hp("0%")
  },
  View_147_244: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.069444444444443%"),
    top: hp("50.13661202185793%")
  },
  View_147_245: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_246: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_247: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_248: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_248: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_249: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.013888888888886%"),
    top: hp("50.34153005464481%")
  },
  View_159_14: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("98.08743169398907%")
  },
  View_141_90: {
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
  View_138_257: {
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
  View_138_258: {
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
  View_138_259: {
    width: wp("25.208333333333332%"),
    minWidth: wp("25.208333333333332%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_138_259: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_260: {
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
  View_138_261: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("24.590163934426215%")
  },
  Text_138_261: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_262: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.12499999999999%"),
    top: hp("60.24590163934424%")
  },
  Text_138_262: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_263: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.51388888888889%"),
    top: hp("65.57377049180327%")
  },
  Text_138_263: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_264: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.388888888888886%"),
    top: hp("65.57377049180327%")
  },
  Text_138_264: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_265: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: hp("65.57377049180327%")
  },
  Text_138_265: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_266: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.083333333333332%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_138_267: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666666%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_138_268: {
    width: wp("73.125%"),
    minWidth: wp("73.125%"),
    height: hp("0.00001257598282269309%"),
    minHeight: hp("0.00001257598282269309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("38.524590163934405%")
  },
  ImageBackground_138_269: {
    width: wp("73.125%"),
    minWidth: wp("73.125%"),
    height: hp("0.00001257598282269309%"),
    minHeight: hp("0.00001257598282269309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_270: {
    width: wp("73.125%"),
    minWidth: wp("73.125%"),
    height: hp("0.00001257598282269309%"),
    minHeight: hp("0.00001257598282269309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("24.86338797814207%")
  },
  ImageBackground_138_271: {
    width: wp("73.125%"),
    minWidth: wp("73.125%"),
    height: hp("0.00001257598282269309%"),
    minHeight: hp("0.00001257598282269309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("11.202185792349738%")
  },
  ImageBackground_138_272: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_273: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.11111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_274: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.36111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_275: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.61111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_276: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.86111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_277: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.11111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_278: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.36111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_279: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_280: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8611111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_281: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.1111111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_282: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.3611111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_138_283: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.6111111111111%"),
    top: hp("52.18579234972675%")
  },
  View_138_284: {
    width: wp("2.0833483007219105%"),
    minWidth: wp("2.0833483007219105%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("31.557377049180317%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_285: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_286: {
    width: wp("2.0833483007219105%"),
    minWidth: wp("2.0833483007219105%"),
    height: hp("20.62841530054645%"),
    minHeight: hp("20.62841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.499999999999996%"),
    top: hp("31.557377049180317%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_287: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74999999999999%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_288: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_289: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.25000423855251%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_290: {
    width: wp("2.083349095450507%"),
    minWidth: wp("2.083349095450507%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.50000423855251%"),
    top: hp("30.46448087431692%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_291: {
    width: wp("2.083349095450507%"),
    minWidth: wp("2.083349095450507%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.75000423855252%"),
    top: hp("30.46448087431692%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_292: {
    width: wp("2.083349095450507%"),
    minWidth: wp("2.083349095450507%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("30.46448087431692%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_293: {
    width: wp("2.083348962995741%"),
    minWidth: wp("2.083348962995741%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25%"),
    top: hp("30.601092896174848%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_294: {
    width: wp("2.0833501550886364%"),
    minWidth: wp("2.0833501550886364%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5%"),
    top: hp("28.96174863387978%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_295: {
    width: wp("2.083348962995741%"),
    minWidth: wp("2.083348962995741%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.75%"),
    top: hp("30.601092896174848%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_296: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_297: {
    width: wp("2.083349095450507%"),
    minWidth: wp("2.083349095450507%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.95834181043837%"),
    top: hp("30.46448087431692%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_298: {
    width: wp("2.0833461814456515%"),
    minWidth: wp("2.0833461814456515%"),
    height: hp("17.62295081967213%"),
    minHeight: hp("17.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208341810438366%"),
    top: hp("34.562841530054655%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_299: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.458337571885853%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_300: {
    width: wp("2.083349095450507%"),
    minWidth: wp("2.083349095450507%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.70833757188585%"),
    top: hp("30.46448087431692%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_301: {
    width: wp("2.083349095450507%"),
    minWidth: wp("2.083349095450507%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.95834181043836%"),
    top: hp("30.46448087431692%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_302: {
    width: wp("2.0833522743648953%"),
    minWidth: wp("2.0833522743648953%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.20833757188585%"),
    top: hp("26.229508196721298%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_303: {
    width: wp("2.0833522743648953%"),
    minWidth: wp("2.0833522743648953%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.45833757188585%"),
    top: hp("26.229508196721298%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_304: {
    width: wp("2.0833522743648953%"),
    minWidth: wp("2.0833522743648953%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.70833333333333%"),
    top: hp("26.229508196721298%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_305: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333333%"),
    top: hp("25%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_306: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20833333333333%"),
    top: hp("25%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_307: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.45833333333333%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_138_308: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%"),
    top: hp("37.84153005464479%")
  },
  Text_138_308: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_309: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.75%"),
    top: hp("51.50273224043717%")
  },
  Text_138_309: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_310: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.472222222222221%"),
    top: hp("24.18032786885246%")
  },
  Text_138_310: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_311: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.472222222222221%"),
    top: hp("10.51912568306011%")
  },
  Text_138_311: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_312: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.875%"),
    top: hp("54.918032786885234%")
  },
  Text_138_312: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_313: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555555555556%"),
    top: hp("54.918032786885234%")
  },
  Text_138_313: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_314: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.375%"),
    top: hp("54.918032786885234%")
  },
  Text_138_314: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_315: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.125%"),
    top: hp("54.918032786885234%")
  },
  Text_138_315: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_316: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("54.918032786885234%")
  },
  Text_138_316: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_317: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("54.918032786885234%")
  },
  Text_138_317: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_318: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("54.918032786885234%")
  },
  Text_138_318: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_319: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555555%"),
    top: hp("54.918032786885234%")
  },
  Text_138_319: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_320: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("54.918032786885234%")
  },
  Text_138_320: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_321: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("54.918032786885234%")
  },
  Text_138_321: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_322: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: hp("54.918032786885234%")
  },
  Text_138_322: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_323: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("54.918032786885234%")
  },
  Text_138_323: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_324: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444443%"),
    top: hp("30.19125683060109%")
  },
  ImageBackground_138_325: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.694444444444446%"),
    top: hp("34.15300546448087%")
  },
  ImageBackground_138_326: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("33.06010928961747%")
  },
  ImageBackground_147_2: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: hp("33.06010928961747%")
  },
  ImageBackground_147_3: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%"),
    top: hp("29.781420765027335%")
  },
  ImageBackground_147_4: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.69444444444444%"),
    top: hp("28.41530054644808%")
  },
  ImageBackground_147_5: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%"),
    top: hp("28.82513661202185%")
  },
  ImageBackground_147_6: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.19444444444444%"),
    top: hp("28.96174863387978%")
  },
  ImageBackground_147_7: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("23.907103825136616%")
  },
  ImageBackground_147_8: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.69444444444444%"),
    top: hp("27.86885245901638%")
  },
  ImageBackground_147_9: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.94444444444444%"),
    top: hp("25.95628415300547%")
  },
  ImageBackground_138_327: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("1.0275524170672308%"),
    minHeight: hp("1.0275524170672308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("34.15300546448087%")
  },
  ImageBackground_147_11: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.916666666666664%"),
    top: hp("34.01639344262294%")
  },
  ImageBackground_138_328: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("34.562841530054655%")
  },
  ImageBackground_138_329: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.05555555555556%"),
    top: hp("36.88524590163932%")
  },
  ImageBackground_138_330: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.23611111111111%"),
    top: hp("34.15300546448087%")
  },
  ImageBackground_147_263: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.48611111111111%"),
    top: hp("34.15300546448087%")
  },
  ImageBackground_147_264: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.73611111111111%"),
    top: hp("33.1967213114754%")
  },
  ImageBackground_147_265: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.98611111111111%"),
    top: hp("30.32786885245902%")
  },
  ImageBackground_147_266: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.2361111111111%"),
    top: hp("32.650273224043715%")
  },
  ImageBackground_147_267: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.4861111111111%"),
    top: hp("33.06010928961747%")
  },
  ImageBackground_147_268: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.7361111111111%"),
    top: hp("29.644808743169392%")
  },
  ImageBackground_147_269: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.9861111111111%"),
    top: hp("32.103825136612%")
  },
  ImageBackground_147_270: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.2361111111111%"),
    top: hp("29.644808743169392%")
  },
  ImageBackground_138_331: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.097222222222218%"),
    top: hp("35.519125683060096%")
  },
  ImageBackground_138_332: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.36111111111111%"),
    top: hp("65.57377049180327%")
  },
  View_138_336: {
    width: wp("7.986111111111111%"),
    minWidth: wp("7.986111111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76388888888889%"),
    top: hp("65.57377049180327%")
  },
  Text_138_336: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_296: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.16666666666667%"),
    top: hp("65.57377049180327%")
  },
  Text_147_296: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_337: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.7361111111111%"),
    top: hp("65.57377049180327%")
  },
  ImageBackground_138_370: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("2.397786593828045%"),
    minHeight: hp("2.397786593828045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.458333333333332%"),
    top: hp("35.724043715847%")
  },
  ImageBackground_138_372: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("3.781844227691817%"),
    minHeight: hp("3.781844227691817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666668%"),
    top: hp("31.489071038251367%")
  },
  ImageBackground_138_373: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: hp("33.33333333333333%")
  },
  ImageBackground_138_374: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("39.89071038251366%")
  },
  ImageBackground_138_375: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.375%"),
    top: hp("43.306010928961754%")
  },
  ImageBackground_138_376: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.625%"),
    top: hp("41.12021857923496%")
  },
  ImageBackground_138_377: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875000000000004%"),
    top: hp("39.20765027322405%")
  },
  ImageBackground_138_378: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.125%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_280: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.375%"),
    top: hp("39.89071038251366%")
  },
  ImageBackground_147_281: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.625%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_282: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.875%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_283: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.125%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_284: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.375%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_285: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.625%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_286: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.875%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_147_287: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.125%"),
    top: hp("37.15846994535518%")
  },
  ImageBackground_147_290: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.125%"),
    top: hp("37.15846994535518%")
  },
  ImageBackground_147_289: {
    width: wp("49.34027777777778%"),
    minWidth: wp("49.34027777777778%"),
    height: hp("2.1380230377280647%"),
    minHeight: hp("2.1380230377280647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.95833333333333%"),
    top: hp("38.31967213114753%")
  },
  ImageBackground_138_371: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%"),
    top: hp("36.74863387978142%")
  },
  ImageBackground_147_12: {
    width: wp("5.2777772479587135%"),
    minWidth: wp("5.2777772479587135%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.30555555555555%"),
    top: hp("31.010928961748633%")
  },
  ImageBackground_147_13: {
    width: wp("5.347221692403157%"),
    minWidth: wp("5.347221692403157%"),
    height: hp("1.0928961097216998%"),
    minHeight: hp("1.0928961097216998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.416666666666664%"),
    top: hp("29.781420765027335%")
  },
  ImageBackground_147_14: {
    width: wp("5.347114668952094%"),
    minWidth: wp("5.347114668952094%"),
    height: hp("0.41522028667679245%"),
    minHeight: hp("0.41522028667679245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.666666666666664%"),
    top: hp("29.644808743169392%")
  },
  ImageBackground_147_15: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.847222222222214%"),
    top: hp("30.19125683060109%")
  },
  ImageBackground_147_16: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.16666666666667%"),
    top: hp("25.273224043715842%")
  },
  ImageBackground_147_17: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.34722222222221%"),
    top: hp("25.273224043715842%")
  },
  ImageBackground_147_18: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    height: hp("1.7759564144363822%"),
    minHeight: hp("1.7759564144363822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.73611111111111%"),
    top: hp("27.322404371584696%")
  },
  ImageBackground_147_272: {
    width: wp("5.347221692403157%"),
    minWidth: wp("5.347221692403157%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.20833333333333%"),
    top: hp("35.38251366120217%")
  },
  ImageBackground_147_273: {
    width: wp("5.347221692403157%"),
    minWidth: wp("5.347221692403157%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.45833333333333%"),
    top: hp("34.562841530054655%")
  },
  ImageBackground_147_274: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("2.8688527195831464%"),
    minHeight: hp("2.8688527195831464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.708333333333336%"),
    top: hp("31.557377049180317%")
  },
  ImageBackground_147_275: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.958333333333336%"),
    top: hp("31.557377049180317%")
  },
  ImageBackground_147_276: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    height: hp("0.27322407628669115%"),
    minHeight: hp("0.27322407628669115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.20833333333333%"),
    top: hp("34.01639344262294%")
  },
  ImageBackground_147_277: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    height: hp("3.142076763298993%"),
    minHeight: hp("3.142076763298993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.45833333333333%"),
    top: hp("31.010928961748633%")
  },
  ImageBackground_147_278: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.70833333333333%"),
    top: hp("31.010928961748633%")
  },
  ImageBackground_147_279: {
    width: wp("5.347222222222222%"),
    minWidth: wp("5.347222222222222%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.02777777777777%"),
    top: hp("31.010928961748633%")
  },
  ImageBackground_147_295: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.83333333333333%"),
    top: hp("65.57377049180327%")
  },
  View_147_1080: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("22.404371584699454%")
  },
  View_147_1078: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(35, 37, 52, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_147_1079: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8194444444444438%"),
    top: hp("1.775956284153004%")
  },
  Text_147_1079: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_341: {
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
  ImageBackground_138_343: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  ImageBackground_138_345: {
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
  ImageBackground_138_346: {
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
  ImageBackground_138_347: {
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
  ImageBackground_138_348: {
    width: wp("1.1111111111111112%"),
    height: hp("0.6942655219406378%"),
    top: hp("14.301904563695356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_138_349: {
    width: wp("12.36111111111111%"),
    minWidth: wp("12.36111111111111%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.25%"),
    top: hp("22.404371584699454%")
  },
  View_138_350: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333329%"),
    top: hp("0%")
  },
  View_138_351: {
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
  View_138_352: {
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
  ImageBackground_138_353: {
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
  ImageBackground_138_354: {
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
  View_138_355: {
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
  View_138_356: {
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
  View_138_357: {
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
  View_138_358: {
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
  ImageBackground_138_359: {
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
  ImageBackground_138_361: {
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
  ImageBackground_138_363: {
    width: wp("2.361111111111111%"),
    height: hp("3.563652663934426%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_138_387: {
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
  View_138_388: {
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
  View_138_389: {
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
  View_138_390: {
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
  View_138_391: {
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
  ImageBackground_138_392: {
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
  ImageBackground_138_394: {
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
  View_2: { height: 2255 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
