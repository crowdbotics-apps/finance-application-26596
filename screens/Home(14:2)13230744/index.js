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
      <View style={styles.View_14_3} />
      <View style={styles.View_14_9} />
      <View style={styles.View_14_10} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_14_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_14_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_14_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_14_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_14_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_14_16}
      />
      <View style={styles.View_159_8}>
        <View style={styles.View_42_4}>
          <View style={styles.View_14_88}>
            <Text style={styles.Text_14_88}>REVENUE</Text>
          </View>
          <View style={styles.View_14_90}>
            <View style={styles.View_14_91} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0da/b9de/fdc169437a23a3c65bbe230702bd72f2"
            }}
            style={styles.ImageBackground_14_94}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d932/926e/48804ba1ec0596b6461b127fc5c7473b"
            }}
            style={styles.ImageBackground_14_95}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97da/1977/bdd624a026d7324dd0b326c4e303e604"
            }}
            style={styles.ImageBackground_14_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fd/c9b0/484ee974d0df987bcf0961429cfa3e7e"
            }}
            style={styles.ImageBackground_14_97}
          />
          <View style={styles.View_14_98}>
            <View style={styles.View_14_99}>
              <View style={styles.View_14_100} />
              <View style={styles.View_14_101}>
                <Text style={styles.Text_14_101}>Logistics 20%</Text>
              </View>
            </View>
            <View style={styles.View_14_102}>
              <View style={styles.View_14_103} />
              <View style={styles.View_14_104}>
                <Text style={styles.Text_14_104}>Insurance 55%</Text>
              </View>
            </View>
            <View style={styles.View_14_105}>
              <View style={styles.View_14_106} />
              <View style={styles.View_14_107}>
                <Text style={styles.Text_14_107}>Service Cs 15%</Text>
              </View>
            </View>
            <View style={styles.View_14_108}>
              <View style={styles.View_14_109} />
              <View style={styles.View_14_110}>
                <Text style={styles.Text_14_110}>Service NB 10%</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_38_1}>
            <View style={styles.View_14_135}>
              <Text style={styles.Text_14_135}>Total Revenue</Text>
            </View>
            <View style={styles.View_14_137}>
              <Text style={styles.Text_14_137}>$ 6.6 M</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_159_9}>
        <View style={styles.View_42_5}>
          <View style={styles.View_14_89}>
            <Text style={styles.Text_14_89}>EXPENSE</Text>
          </View>
          <View style={styles.View_14_92}>
            <View style={styles.View_14_93} />
          </View>
          <View style={styles.View_14_111}>
            <View style={styles.View_14_112}>
              <View style={styles.View_14_113} />
              <View style={styles.View_14_114}>
                <Text style={styles.Text_14_114}>Logistics 25%</Text>
              </View>
            </View>
            <View style={styles.View_14_115}>
              <View style={styles.View_14_116} />
              <View style={styles.View_14_117}>
                <Text style={styles.Text_14_117}>Insurance 40%</Text>
              </View>
            </View>
            <View style={styles.View_14_118}>
              <View style={styles.View_14_119} />
              <View style={styles.View_14_120}>
                <Text style={styles.Text_14_120}>Service Cs 20%</Text>
              </View>
            </View>
            <View style={styles.View_14_121}>
              <View style={styles.View_14_122} />
              <View style={styles.View_14_123}>
                <Text style={styles.Text_14_123}>Service NB 15%</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/017c/e2d2caa698c81f7104475aaf8de6d248"
            }}
            style={styles.ImageBackground_14_124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5e/d41e/fdcc433327bf6448258ddc2177d6bc92"
            }}
            style={styles.ImageBackground_14_125}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bed/fe5b/41a29052379bcf2c1e7595e6474e4fb9"
            }}
            style={styles.ImageBackground_14_126}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67dd/0dcf/ac833e485d67be4d90fd53322a1fc001"
            }}
            style={styles.ImageBackground_14_127}
          />
          <View style={styles.View_38_2}>
            <View style={styles.View_14_136}>
              <Text style={styles.Text_14_136}>Total Expense</Text>
            </View>
            <View style={styles.View_14_138}>
              <Text style={styles.Text_14_138}>$ 5.0 M</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_159_13}>
        <View style={styles.View_42_0}>
          <View style={styles.View_15_139}>
            <View style={styles.View_15_140}>
              <Text style={styles.Text_15_140}>
                REVENUE AND EXPENSE BY DEPARTMENT
              </Text>
            </View>
            <View style={styles.View_15_141} />
            <View style={styles.View_15_142}>
              <View style={styles.View_15_143}>
                <View style={styles.View_15_144}>
                  <View style={styles.View_15_145}>
                    <Text style={styles.Text_15_145}>Insurance</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_15_146}>
                <View style={styles.View_15_147}>
                  <View style={styles.View_15_148}>
                    <Text style={styles.Text_15_148}>Logistics</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_15_149}>
                <View style={styles.View_15_150}>
                  <View style={styles.View_15_151}>
                    <Text style={styles.Text_15_151}>Service Cs</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_15_152}>
                <View style={styles.View_15_153}>
                  <View style={styles.View_15_154}>
                    <Text style={styles.Text_15_154}>Service Cs</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_15_155}>
                <View style={styles.View_15_156}>
                  <View style={styles.View_15_157}>
                    <Text style={styles.Text_15_157}>Service New Business</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_15_158}>
            <Text style={styles.Text_15_158}>Departments</Text>
          </View>
          <View style={styles.View_15_159} />
          <View style={styles.View_15_160}>
            <Text style={styles.Text_15_160}>2M</Text>
          </View>
          <View style={styles.View_15_161}>
            <Text style={styles.Text_15_161}>1M</Text>
          </View>
          <View style={styles.View_15_162}>
            <Text style={styles.Text_15_162}>3M</Text>
          </View>
          <View style={styles.View_15_163}>
            <Text style={styles.Text_15_163}>4M</Text>
          </View>
          <View style={styles.View_15_164}>
            <Text style={styles.Text_15_164}>5M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_15_165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_15_166}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_15_167}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_15_168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_15_169}
          />
          <View style={styles.View_15_170} />
          <View style={styles.View_15_171} />
          <View style={styles.View_15_172} />
          <View style={styles.View_15_173} />
          <View style={styles.View_15_174} />
          <View style={styles.View_15_175} />
          <View style={styles.View_15_176}>
            <Text style={styles.Text_15_176}>Amount in $ </Text>
          </View>
          <View style={styles.View_15_177}>
            <Text style={styles.Text_15_177}>Revenue</Text>
          </View>
          <View style={styles.View_15_178}>
            <Text style={styles.Text_15_178}>Expense</Text>
          </View>
          <View style={styles.View_15_179}>
            <Text style={styles.Text_15_179}>3.3M</Text>
          </View>
          <View style={styles.View_15_180}>
            <Text style={styles.Text_15_180}>2M</Text>
          </View>
          <View style={styles.View_15_181}>
            <Text style={styles.Text_15_181}>1.65M</Text>
          </View>
          <View style={styles.View_15_182}>
            <Text style={styles.Text_15_182}>1.25M</Text>
          </View>
          <View style={styles.View_15_183}>
            <Text style={styles.Text_15_183}>1.32M</Text>
          </View>
          <View style={styles.View_15_184}>
            <Text style={styles.Text_15_184}>1M</Text>
          </View>
          <View style={styles.View_15_185}>
            <Text style={styles.Text_15_185}>0.99M</Text>
          </View>
          <View style={styles.View_15_186}>
            <Text style={styles.Text_15_186}>0.75M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_15_187}
          />
          <View style={styles.View_15_188} />
          <View style={styles.View_15_189} />
          <View style={styles.View_15_190} />
        </View>
      </View>
      <View style={styles.View_159_12}>
        <View style={styles.View_42_2}>
          <View style={styles.View_14_151}>
            <View style={styles.View_14_152}>
              <Text style={styles.Text_14_152}>EXPENSES BY CATEGORY</Text>
            </View>
            <View style={styles.View_14_153} />
            <View style={styles.View_14_154}>
              <View style={styles.View_14_155}>
                <View style={styles.View_14_156}>
                  <View style={styles.View_14_157}>
                    <Text style={styles.Text_14_157}>Marketing</Text>
                  </View>
                  <View style={styles.View_14_158}>
                    <Text style={styles.Text_14_158}>Full Time - Salary</Text>
                  </View>
                  <View style={styles.View_14_159}>
                    <Text style={styles.Text_14_159}>Full Time - Bonus</Text>
                  </View>
                  <View style={styles.View_14_160}>
                    <Text style={styles.Text_14_160}>Payroll Taxes</Text>
                  </View>
                  <View style={styles.View_14_161}>
                    <Text style={styles.Text_14_161}>Part Time - Salary</Text>
                  </View>
                  <View style={styles.View_14_162}>
                    <Text style={styles.Text_14_162}>
                      Full Time - Commission
                    </Text>
                  </View>
                  <View style={styles.View_14_163}>
                    <Text style={styles.Text_14_163}>Consulting</Text>
                  </View>
                  <View style={styles.View_14_164}>
                    <Text style={styles.Text_14_164}>Licenses and Permits</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_14_165}>
            <Text style={styles.Text_14_165}>Categories</Text>
          </View>
          <View style={styles.View_14_167} />
          <View style={styles.View_14_168}>
            <Text style={styles.Text_14_168}>2M</Text>
          </View>
          <View style={styles.View_14_169}>
            <Text style={styles.Text_14_169}>1M</Text>
          </View>
          <View style={styles.View_14_170}>
            <Text style={styles.Text_14_170}>3M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_14_173}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_14_174}
          />
          <View style={styles.View_14_178} />
          <View style={styles.View_14_179} />
          <View style={styles.View_14_180} />
          <View style={styles.View_14_181} />
          <View style={styles.View_14_182} />
          <View style={styles.View_14_183}>
            <Text style={styles.Text_14_183}>Amount in $ </Text>
          </View>
          <View style={styles.View_14_184}>
            <Text style={styles.Text_14_184}>2M</Text>
          </View>
          <View style={styles.View_14_185}>
            <Text style={styles.Text_14_185}>1.5M</Text>
          </View>
          <View style={styles.View_14_186}>
            <Text style={styles.Text_14_186}>0.5M</Text>
          </View>
          <View style={styles.View_14_187}>
            <Text style={styles.Text_14_187}>0.3M</Text>
          </View>
          <View style={styles.View_14_188}>
            <Text style={styles.Text_14_188}>0.2M</Text>
          </View>
          <View style={styles.View_14_189}>
            <Text style={styles.Text_14_189}>0.2M</Text>
          </View>
          <View style={styles.View_14_190}>
            <Text style={styles.Text_14_190}>0.2M</Text>
          </View>
          <View style={styles.View_14_191}>
            <Text style={styles.Text_14_191}>0.1M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_14_193}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_14_192}
          />
          <View style={styles.View_14_166} />
          <View style={styles.View_14_177} />
        </View>
        <View style={styles.View_101_0}>
          <Text style={styles.Text_101_0}>Expense</Text>
        </View>
        <View style={styles.View_101_1} />
      </View>
      <View style={styles.View_14_17}>
        <Text style={styles.Text_14_17}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_14_18}
      />
      <View style={styles.View_14_19}>
        <Text style={styles.Text_14_19}>Overall</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_14_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_14_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_51_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_14_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_14_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bb/31ce/ab3b71e6f7e09cf93dc4623fe5aa71db"
        }}
        style={styles.ImageBackground_14_8}
      />
      <View style={styles.View_115_0}>
        <View style={styles.View_14_26}>
          <View style={styles.View_14_27}>
            <View style={styles.View_14_28}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                }}
                style={styles.ImageBackground_14_29}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
                }}
                style={styles.ImageBackground_14_30}
              />
            </View>
            <View style={styles.View_14_31}>
              <View style={styles.View_14_32}>
                <View style={styles.View_14_33}>
                  <View style={styles.View_14_34}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                      }}
                      style={styles.ImageBackground_14_35}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
                }}
                style={styles.ImageBackground_14_37}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cbe/55c0/5b420d0f5eaee43f462cf5e378d87b5e"
          }}
          style={styles.ImageBackground_14_128}
        />
      </View>
      <View style={styles.View_138_379}>
        <View style={styles.View_138_380}>
          <View style={styles.View_138_381}>
            <View style={styles.View_138_382}>
              <View style={styles.View_138_383}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                  }}
                  style={styles.ImageBackground_138_384}
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
          style={styles.ImageBackground_138_386}
        />
      </View>
      <View style={styles.View_159_11}>
        <View style={styles.View_147_139}>
          <View style={styles.View_147_140}>
            <Text style={styles.Text_147_140}>EBITDA (MONTHLY TREND)</Text>
          </View>
          <View style={styles.View_147_141}>
            <View style={styles.View_147_142} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_144}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_146}
            />
            <View style={styles.View_147_147}>
              <Text style={styles.Text_147_147}>1M</Text>
            </View>
            <View style={styles.View_147_148}>
              <Text style={styles.Text_147_148}>2M</Text>
            </View>
            <View style={styles.View_147_149}>
              <Text style={styles.Text_147_149}>3M</Text>
            </View>
            <View style={styles.View_147_150}>
              <Text style={styles.Text_147_150}>0</Text>
            </View>
            <View style={styles.View_147_151}>
              <Text style={styles.Text_147_151}>Amount in $</Text>
            </View>
            <View style={styles.View_147_152}>
              <Text style={styles.Text_147_152}>Months</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/63b1/4ed2746d2496af93961d08563caecd43"
              }}
              style={styles.ImageBackground_147_153}
            />
            <View style={styles.View_147_159}>
              <View style={styles.View_147_160}>
                <View style={styles.View_147_161}>
                  <View style={styles.View_147_162}>
                    <Text style={styles.Text_147_162}>Jan 2021</Text>
                  </View>
                  <View style={styles.View_147_163}>
                    <Text style={styles.Text_147_163}>Feb 2021</Text>
                  </View>
                  <View style={styles.View_147_164}>
                    <Text style={styles.Text_147_164}>Mar 2021</Text>
                  </View>
                  <View style={styles.View_147_165}>
                    <Text style={styles.Text_147_165}>Apr 2021</Text>
                  </View>
                  <View style={styles.View_147_166}>
                    <Text style={styles.Text_147_166}>May 2021</Text>
                  </View>
                  <View style={styles.View_147_167}>
                    <Text style={styles.Text_147_167}>Jun 2021</Text>
                  </View>
                  <View style={styles.View_147_168}>
                    <Text style={styles.Text_147_168}>Jul 2021</Text>
                  </View>
                  <View style={styles.View_147_169}>
                    <Text style={styles.Text_147_169}>Aug 2021</Text>
                  </View>
                  <View style={styles.View_147_170}>
                    <Text style={styles.Text_147_170}>Sep 2021</Text>
                  </View>
                  <View style={styles.View_147_171}>
                    <Text style={styles.Text_147_171}>Oct 2021</Text>
                  </View>
                  <View style={styles.View_147_172}>
                    <Text style={styles.Text_147_172}>Nov 2021</Text>
                  </View>
                  <View style={styles.View_147_173}>
                    <Text style={styles.Text_147_173}>Dec 2021</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc6/ee57/b80433df2a657bc6a3ff0d189dc3844b"
                    }}
                    style={styles.ImageBackground_147_174}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_147_187}>
            <View style={styles.View_147_188}>
              <View style={styles.View_147_189}>
                <View style={styles.View_147_190}>
                  <View style={styles.View_147_191}>
                    <Text style={styles.Text_147_191}>Profit</Text>
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
            style={styles.ImageBackground_147_192}
          />
        </View>
      </View>
      <View style={styles.View_159_7}>
        <View style={styles.View_115_1}>
          <View style={styles.View_115_2} />
          <View style={styles.View_115_3} />
          <View style={styles.View_115_4}>
            <View style={styles.View_115_5}>
              <Text style={styles.Text_115_5}>
                REVENUE AND EXPENSE (YEARLY BASIS)
              </Text>
            </View>
            <View style={styles.View_115_6} />
          </View>
          <View style={styles.View_115_7}>
            <Text style={styles.Text_115_7}>Amount in $</Text>
          </View>
          <View style={styles.View_115_8}>
            <Text style={styles.Text_115_8}>Timeline</Text>
          </View>
          <View style={styles.View_115_9}>
            <Text style={styles.Text_115_9}>Revenue</Text>
          </View>
          <View style={styles.View_115_10}>
            <Text style={styles.Text_115_10}>Expense</Text>
          </View>
          <View style={styles.View_115_11} />
          <View style={styles.View_115_12} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
            }}
            style={styles.ImageBackground_115_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
            }}
            style={styles.ImageBackground_115_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
            }}
            style={styles.ImageBackground_115_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
            }}
            style={styles.ImageBackground_115_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
            }}
            style={styles.ImageBackground_115_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
            }}
            style={styles.ImageBackground_115_18}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
            }}
            style={styles.ImageBackground_115_26}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
            }}
            style={styles.ImageBackground_115_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c19/102d/ce3513b82bcca3a4d119ba8196e95153"
            }}
            style={styles.ImageBackground_115_28}
          />
          <View style={styles.View_115_29} />
          <View style={styles.View_115_143} />
          <View style={styles.View_115_30} />
          <View style={styles.View_115_31} />
          <View style={styles.View_115_32} />
          <View style={styles.View_115_33} />
          <View style={styles.View_115_144} />
          <View style={styles.View_115_34} />
          <View style={styles.View_115_35} />
          <View style={styles.View_115_36} />
          <View style={styles.View_115_37}>
            <Text style={styles.Text_115_37}>1M</Text>
          </View>
          <View style={styles.View_115_38}>
            <Text style={styles.Text_115_38}>0</Text>
          </View>
          <View style={styles.View_115_39}>
            <Text style={styles.Text_115_39}>2M</Text>
          </View>
          <View style={styles.View_115_40}>
            <Text style={styles.Text_115_40}>3M</Text>
          </View>
          <View style={styles.View_115_41}>
            <Text style={styles.Text_115_41}>2021</Text>
          </View>
          <View style={styles.View_115_146}>
            <Text style={styles.Text_115_146}>2020</Text>
          </View>
          <View style={styles.View_115_46}>
            <Text style={styles.Text_115_46}>2019</Text>
          </View>
          <View style={styles.View_115_50}>
            <Text style={styles.Text_115_50}>2018</Text>
          </View>
          <View style={styles.View_115_52}>
            <Text style={styles.Text_115_52}>2017</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9286/2ea1/0ef3cffa79cc3bf2315fb5741cfb1d1b"
          }}
          style={styles.ImageBackground_147_1077}
        />
      </View>
      <View style={styles.View_159_10}>
        <View style={styles.View_159_6}>
          <View style={styles.View_141_0}>
            <View style={styles.View_115_53}>
              <View style={styles.View_115_54}>
                <View style={styles.View_115_55}>
                  <Text style={styles.Text_115_55}>REVENUE AND EXPENSE</Text>
                </View>
                <View style={styles.View_115_56} />
              </View>
              <View style={styles.View_115_57}>
                <Text style={styles.Text_115_57}>Amount in $</Text>
              </View>
              <View style={styles.View_115_58}>
                <Text style={styles.Text_115_58}>Timeline</Text>
              </View>
              <View style={styles.View_115_59}>
                <Text style={styles.Text_115_59}>Forecasted Revenue</Text>
              </View>
              <View style={styles.View_115_60}>
                <Text style={styles.Text_115_60}>Actual Revenue</Text>
              </View>
              <View style={styles.View_115_61}>
                <Text style={styles.Text_115_61}>Forecasted Expense</Text>
              </View>
              <View style={styles.View_115_62} />
              <View style={styles.View_115_63} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
                }}
                style={styles.ImageBackground_115_64}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
                }}
                style={styles.ImageBackground_115_65}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
                }}
                style={styles.ImageBackground_115_66}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
                }}
                style={styles.ImageBackground_115_67}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_68}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_69}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_70}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_71}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_72}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_73}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_74}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_75}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_76}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_77}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_78}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
                }}
                style={styles.ImageBackground_115_79}
              />
              <View style={styles.View_115_80} />
              <View style={styles.View_115_81} />
              <View style={styles.View_115_82} />
              <View style={styles.View_115_83} />
              <View style={styles.View_115_84} />
              <View style={styles.View_115_85} />
              <View style={styles.View_115_86} />
              <View style={styles.View_115_87} />
              <View style={styles.View_115_88} />
              <View style={styles.View_115_89} />
              <View style={styles.View_115_90} />
              <View style={styles.View_115_91} />
              <View style={styles.View_115_92} />
              <View style={styles.View_115_93} />
              <View style={styles.View_115_94} />
              <View style={styles.View_115_95} />
              <View style={styles.View_115_96} />
              <View style={styles.View_115_97} />
              <View style={styles.View_115_98} />
              <View style={styles.View_115_99} />
              <View style={styles.View_115_100} />
              <View style={styles.View_115_101} />
              <View style={styles.View_115_102} />
              <View style={styles.View_115_103} />
              <View style={styles.View_115_104}>
                <Text style={styles.Text_115_104}>1M</Text>
              </View>
              <View style={styles.View_115_105}>
                <Text style={styles.Text_115_105}>0</Text>
              </View>
              <View style={styles.View_115_106}>
                <Text style={styles.Text_115_106}>2M</Text>
              </View>
              <View style={styles.View_115_107}>
                <Text style={styles.Text_115_107}>3M</Text>
              </View>
              <View style={styles.View_115_108}>
                <Text style={styles.Text_115_108}>Dec 2021</Text>
              </View>
              <View style={styles.View_115_109}>
                <Text style={styles.Text_115_109}>Nov 2021</Text>
              </View>
              <View style={styles.View_115_110}>
                <Text style={styles.Text_115_110}>Oct 2021</Text>
              </View>
              <View style={styles.View_115_111}>
                <Text style={styles.Text_115_111}>Sep 2021</Text>
              </View>
              <View style={styles.View_115_112}>
                <Text style={styles.Text_115_112}>Aug 2021</Text>
              </View>
              <View style={styles.View_115_113}>
                <Text style={styles.Text_115_113}>Jul 2021</Text>
              </View>
              <View style={styles.View_115_114}>
                <Text style={styles.Text_115_114}>Jun 2021</Text>
              </View>
              <View style={styles.View_115_115}>
                <Text style={styles.Text_115_115}>May 2021</Text>
              </View>
              <View style={styles.View_115_116}>
                <Text style={styles.Text_115_116}>Apr 2021</Text>
              </View>
              <View style={styles.View_115_117}>
                <Text style={styles.Text_115_117}>Mar 2021</Text>
              </View>
              <View style={styles.View_115_118}>
                <Text style={styles.Text_115_118}>Feb 2021</Text>
              </View>
              <View style={styles.View_115_119}>
                <Text style={styles.Text_115_119}>Jan 2021</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
                }}
                style={styles.ImageBackground_115_120}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
                }}
                style={styles.ImageBackground_115_122}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
                }}
                style={styles.ImageBackground_115_123}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/587e/09c4/d02556a00b6e39d60eb47011d1c3ae2d"
                }}
                style={styles.ImageBackground_134_1}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
                }}
                style={styles.ImageBackground_115_127}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
                }}
                style={styles.ImageBackground_115_129}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
                }}
                style={styles.ImageBackground_115_130}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9c/831c/7f7d3c7510209b95bdd90cf0535ad2e4"
                }}
                style={styles.ImageBackground_115_133}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca6/761a/a81ee46e1c91021476f5053df584bd0b"
                }}
                style={styles.ImageBackground_115_134}
              />
              <View style={styles.View_115_138}>
                <Text style={styles.Text_115_138}>Actual Expense</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e1/b1d2/1dbe7693c604ea0b21c88b9bf7746dc4"
                }}
                style={styles.ImageBackground_115_139}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33bf/e6ef/7df7272b2148246c191c0d4486117197"
              }}
              style={styles.ImageBackground_131_7}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_115_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8eb/0149/a07a66d1290bfa132635c7927ac7628c"
              }}
              style={styles.ImageBackground_134_0}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_115_121}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b05/e937/46f897e840ebaf728401d619b982b357"
              }}
              style={styles.ImageBackground_134_2}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
              }}
              style={styles.ImageBackground_134_3}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
              }}
              style={styles.ImageBackground_134_4}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
              }}
              style={styles.ImageBackground_134_5}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
              }}
              style={styles.ImageBackground_134_6}
            />
          </View>
          <View style={styles.View_159_2}>
            <Text style={styles.Text_159_2}>Profit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c4/ea5f/07e7b8a29f653bdb8335f165ec95f07e"
            }}
            style={styles.ImageBackground_159_3}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_14_3: {
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
  View_14_9: {
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
  View_14_10: {
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
  ImageBackground_14_11: {
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
  ImageBackground_14_12: {
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
  ImageBackground_14_13: {
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
  ImageBackground_14_14: {
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
  ImageBackground_14_15: {
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
  ImageBackground_14_16: {
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
  View_159_8: {
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
  View_42_4: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("63.934426229508205%"),
    minHeight: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_88: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_88: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_90: {
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
  View_14_91: {
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
  ImageBackground_14_94: {
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
  ImageBackground_14_95: {
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
  ImageBackground_14_96: {
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
  ImageBackground_14_97: {
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
  View_14_98: {
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
  View_14_99: {
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
  View_14_100: {
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
  View_14_101: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_14_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_102: {
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
  View_14_103: {
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
  View_14_104: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_14_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_105: {
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
  View_14_106: {
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
  View_14_107: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("1.0928961748633839%")
  },
  Text_14_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_108: {
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
  View_14_109: {
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
  View_14_110: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_14_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_1: {
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
  View_14_135: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_135: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_137: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("5.191256830601098%")
  },
  Text_14_137: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_159_9: {
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
  View_42_5: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("63.934426229508205%"),
    minHeight: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_89: {
    width: wp("15.902777777777777%"),
    minWidth: wp("15.902777777777777%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_89: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_92: {
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
  View_14_93: {
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
  View_14_111: {
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
  View_14_112: {
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
  View_14_113: {
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
  View_14_114: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("0.6830601092896131%")
  },
  Text_14_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_115: {
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
  View_14_116: {
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
  View_14_117: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_14_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_118: {
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
  View_14_119: {
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
  View_14_120: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("1.0928961748633839%")
  },
  Text_14_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_121: {
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
  View_14_122: {
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
  View_14_123: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("0.6830601092896131%")
  },
  Text_14_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_124: {
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
  ImageBackground_14_125: {
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
  ImageBackground_14_126: {
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
  ImageBackground_14_127: {
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
  View_38_2: {
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
  View_14_136: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_136: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_138: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: hp("5.191256830601098%")
  },
  Text_14_138: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_159_13: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.31693989071039%"),
    minHeight: hp("74.31693989071039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("301.91256830601094%")
  },
  View_42_0: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.31693989071039%"),
    minHeight: hp("74.31693989071039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_15_139: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.31693989071039%"),
    minHeight: hp("74.31693989071039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_15_140: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_140: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_141: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.76502732240438%"),
    minHeight: hp("70.76502732240438%"),
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
  View_15_142: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("10.65573770491801%")
  },
  View_15_143: {
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
  View_15_144: {
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
  View_15_145: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_145: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_146: {
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
  View_15_147: {
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
  View_15_148: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_148: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_149: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.91256830601094%")
  },
  View_15_150: {
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
  View_15_151: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_151: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_152: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.91256830601094%")
  },
  View_15_153: {
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
  View_15_154: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_154: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_155: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.30054644808746%")
  },
  View_15_156: {
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
  View_15_157: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_157: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_158: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("23.360655737704917%")
  },
  Text_15_158: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_159: {
    width: wp("10.34722540113661%"),
    minWidth: wp("10.34722540113661%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("52.04918032786884%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_160: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.16666666666666%"),
    top: hp("58.87978142076503%")
  },
  Text_15_160: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_161: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.347222222222225%"),
    top: hp("58.87978142076503%")
  },
  Text_15_161: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_162: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.986111111111114%"),
    top: hp("58.87978142076503%")
  },
  Text_15_162: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_163: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.7361111111111%"),
    top: hp("58.87978142076503%")
  },
  Text_15_163: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_164: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%"),
    top: hp("58.87978142076503%")
  },
  Text_15_164: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_15_165: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.041666666666668%"),
    top: hp("6.967213114754088%")
  },
  ImageBackground_15_166: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.861111111111114%"),
    top: hp("6.967213114754088%")
  },
  ImageBackground_15_167: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.68055555555556%"),
    top: hp("6.967213114754088%")
  },
  ImageBackground_15_168: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%"),
    top: hp("6.967213114754088%")
  },
  ImageBackground_15_169: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.31944444444444%"),
    top: hp("6.967213114754088%")
  },
  View_15_170: {
    width: wp("27.63888888888889%"),
    minWidth: wp("27.63888888888889%"),
    height: hp("4.098365345939261%"),
    minHeight: hp("4.098365345939261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("11.475409836065523%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_171: {
    width: wp("22.5%"),
    minWidth: wp("22.5%"),
    height: hp("4.098364303672248%"),
    minHeight: hp("4.098364303672248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("20.491803278688508%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_172: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("25%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_173: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("34.01639344262293%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_174: {
    width: wp("13.819444444444445%"),
    minWidth: wp("13.819444444444445%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("38.52459016393442%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_175: {
    width: wp("13.472225401136612%"),
    minWidth: wp("13.472225401136612%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("47.540983606557404%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_15_176: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.013888888888886%"),
    top: hp("62.97814207650276%")
  },
  Text_15_176: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_177: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("68.71584699453553%")
  },
  Text_15_177: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_178: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13888888888888%"),
    top: hp("68.71584699453553%")
  },
  Text_15_178: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_179: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.81944444444444%"),
    top: hp("8.060109289617458%")
  },
  Text_15_179: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_180: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.20833333333333%"),
    top: hp("12.56830601092895%")
  },
  Text_15_180: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_181: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("21.584699453551934%")
  },
  Text_15_181: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_182: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.138888888888886%"),
    top: hp("26.229508196721326%")
  },
  Text_15_182: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_183: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.18055555555555%"),
    top: hp("35.109289617486354%")
  },
  Text_15_183: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_184: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("39.61748633879779%")
  },
  Text_15_184: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_185: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("48.63387978142072%")
  },
  Text_15_185: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_186: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888889%"),
    top: hp("53.142076502732266%")
  },
  Text_15_186: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_15_187: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("6.967213114754088%")
  },
  View_15_188: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.36111111111111%"),
    top: hp("68.30601092896171%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_15_189: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.5%"),
    top: hp("68.30601092896171%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_15_190: {
    width: wp("45.90277777777778%"),
    minWidth: wp("45.90277777777778%"),
    height: hp("4.098368472740298%"),
    minHeight: hp("4.098368472740298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("6.967213114754088%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_159_12: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("243.98907103825138%")
  },
  View_42_2: {
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
  View_14_151: {
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
  View_14_152: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_14_152: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_153: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_14_154: {
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
  View_14_155: {
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
  View_14_156: {
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
  View_14_157: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("0%")
  },
  Text_14_157: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_158: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("4.508196721311464%")
  },
  Text_14_158: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_159: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("9.016393442622928%")
  },
  Text_14_159: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_160: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("13.52459016393442%")
  },
  Text_14_160: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_161: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("18.032786885245912%")
  },
  Text_14_161: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_162: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.540983606557404%")
  },
  Text_14_162: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_163: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106452094184036%"),
    top: hp("27.04918032786884%")
  },
  Text_14_163: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_164: {
    width: wp("10.209259457058376%"),
    minWidth: wp("10.209259457058376%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13795640733506787%"),
    top: hp("31.557377049180275%")
  },
  Text_14_164: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_165: {
    width: wp("0.9722227520412869%"),
    minWidth: wp("0.9722227520412869%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("17.759562841530055%")
  },
  Text_14_165: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_167: {
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
  View_14_168: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.805555555555554%"),
    top: hp("43.57923497267757%")
  },
  Text_14_168: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_169: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.86111111111111%"),
    top: hp("43.57923497267757%")
  },
  Text_14_169: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_170: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.81944444444444%"),
    top: hp("43.57923497267757%")
  },
  Text_14_170: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_173: {
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
  ImageBackground_14_174: {
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
  View_14_178: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("4.098361437437964%"),
    minHeight: hp("4.098361437437964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("15.300546448087402%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_14_179: {
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
  View_14_180: {
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
  View_14_181: {
    width: wp("1.388889021343655%"),
    minWidth: wp("1.388889021343655%"),
    height: hp("4.0983609163044585%"),
    minHeight: hp("4.0983609163044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("28.825136612021822%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_14_182: {
    width: wp("1.3888919353485107%"),
    minWidth: wp("1.3888919353485107%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("33.333333333333314%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_14_183: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.416666666666668%"),
    top: hp("46.994535519125634%")
  },
  Text_14_183: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_184: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.19444444444444%"),
    top: hp("7.650273224043673%")
  },
  Text_14_184: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_185: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.652777777777782%"),
    top: hp("12.021857923497237%")
  },
  Text_14_185: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_186: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.777777777777775%"),
    top: hp("16.53005464480873%")
  },
  Text_14_186: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_187: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.388888888888886%"),
    top: hp("21.17486338797812%")
  },
  Text_14_187: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_188: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("25.409836065573757%")
  },
  Text_14_188: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_189: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("30.05464480874315%")
  },
  Text_14_189: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_190: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("34.69945355191254%")
  },
  Text_14_190: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_191: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("38.934426229508176%")
  },
  Text_14_191: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_193: {
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
  ImageBackground_14_192: {
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
  View_14_166: {
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
  View_14_177: {
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
  View_101_0: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("51.22950819672127%")
  },
  Text_101_0: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_1: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("50.81967213114751%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_14_17: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_14_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_18: {
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
  View_14_19: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_14_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_21: {
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
  ImageBackground_14_23: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  ImageBackground_51_159: {
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
  ImageBackground_14_4: {
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
  ImageBackground_14_7: {
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
  ImageBackground_14_8: {
    width: wp("1.1111111111111112%"),
    height: hp("0.6942655219406378%"),
    top: hp("14.301904563695356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_115_0: {
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
  View_14_26: {
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
  View_14_27: {
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
  View_14_28: {
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
  ImageBackground_14_29: {
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
  ImageBackground_14_30: {
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
  View_14_31: {
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
  View_14_32: {
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
  View_14_33: {
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
  View_14_34: {
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
  ImageBackground_14_35: {
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
  ImageBackground_14_37: {
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
  ImageBackground_14_128: {
    width: wp("2.9166666666666665%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_138_379: {
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
  View_138_380: {
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
  View_138_381: {
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
  View_138_382: {
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
  View_138_383: {
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
  ImageBackground_138_384: {
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
  ImageBackground_138_386: {
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
  View_159_11: {
    width: wp("44.7222900390625%"),
    minWidth: wp("44.7222900390625%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("243.98907103825138%")
  },
  View_147_139: {
    width: wp("44.7222900390625%"),
    minWidth: wp("44.7222900390625%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_140: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_140: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_141: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027856727%"),
    top: hp("3.551912568305994%")
  },
  View_147_142: {
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
  ImageBackground_147_143: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("28.551912568305994%")
  },
  ImageBackground_147_144: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("21.03825136612025%")
  },
  ImageBackground_147_145: {
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
  ImageBackground_147_146: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("5.73770491803279%")
  },
  View_147_147: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.249932183159721%"),
    top: hp("20.21857923497268%")
  },
  Text_147_147: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_148: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041598849826393%"),
    top: hp("12.568306010928922%")
  },
  Text_147_148: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_149: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041598849826393%"),
    top: hp("4.918032786885249%")
  },
  Text_147_149: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_150: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.736043294270829%"),
    top: hp("26.912568306010968%")
  },
  Text_147_150: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_151: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291598849826393%"),
    top: hp("9.153005464480856%")
  },
  Text_147_151: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_152: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.84715440538195%"),
    top: hp("41.939890710382514%")
  },
  Text_147_152: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_153: {
    width: wp("9.583301544189453%"),
    minWidth: wp("9.583301544189453%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194376627604171%"),
    top: hp("17.349726775956327%")
  },
  View_147_159: {
    width: wp("33.541666666666664%"),
    minWidth: wp("33.541666666666664%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.124932183159729%"),
    top: hp("28.551912568305994%")
  },
  View_147_160: {
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
  View_147_161: {
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
  View_147_162: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426528%")
  },
  Text_147_162: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_163: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_163: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_164: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222221%"),
    top: hp("2.185792349726796%")
  },
  Text_147_164: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_165: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_165: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_166: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.874999999999993%"),
    top: hp("2.0491803278688963%")
  },
  Text_147_166: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_167: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.93055555555555%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_167: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_168: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.916666666666664%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_168: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_169: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.90277777777778%"),
    top: hp("2.322404371584696%")
  },
  Text_147_169: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_170: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.88888888888888%"),
    top: hp("2.4590163934426528%")
  },
  Text_147_170: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_171: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.874999999999993%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_171: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_172: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.861111111111107%"),
    top: hp("2.322404371584696%")
  },
  Text_147_172: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_173: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.84722222222222%"),
    top: hp("2.322404371584696%")
  },
  Text_147_173: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_174: {
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
  View_147_187: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.069444444444443%"),
    top: hp("50.1366120218579%")
  },
  View_147_188: {
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
  View_147_189: {
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
  View_147_190: {
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
  View_147_191: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_191: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_192: {
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
  View_159_7: {
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
  View_115_1: {
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
  View_115_2: {
    width: wp("74.86111111111111%"),
    minWidth: wp("74.86111111111111%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.125%"),
    top: hp("6.284153005464489%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_115_3: {
    width: wp("74.86111111111111%"),
    minWidth: wp("74.86111111111111%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.125%"),
    top: hp("19.945355191256823%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_115_4: {
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
  View_115_5: {
    width: wp("42.083333333333336%"),
    minWidth: wp("42.083333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_115_5: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_6: {
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
  View_115_7: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("24.590163934426215%")
  },
  Text_115_7: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_8: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.12499999999999%"),
    top: hp("60.24590163934424%")
  },
  Text_115_8: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_9: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.09722222222222%"),
    top: hp("65.98360655737706%")
  },
  Text_115_9: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_10: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.27777777777777%"),
    top: hp("65.98360655737706%")
  },
  Text_115_10: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_11: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.45833333333333%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_115_12: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.63888888888889%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_115_13: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("38.524590163934405%")
  },
  ImageBackground_115_14: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512644139378%"),
    minHeight: hp("0.00001275512644139378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_115_15: {
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
  ImageBackground_115_16: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("11.202185792349738%")
  },
  ImageBackground_115_17: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.291666666666668%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_115_18: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.98611111111111%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_115_26: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.68055555555555%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_115_27: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.375%"),
    top: hp("52.18579234972675%")
  },
  ImageBackground_115_28: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.06944444444444%"),
    top: hp("52.18579234972675%")
  },
  View_115_29: {
    width: wp("5.55557197994656%"),
    minWidth: wp("5.55557197994656%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.430555555555557%"),
    top: hp("29.644808743169392%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_143: {
    width: wp("5.55557197994656%"),
    minWidth: wp("5.55557197994656%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.125%"),
    top: hp("29.644808743169392%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_30: {
    width: wp("5.555573569403754%"),
    minWidth: wp("5.555573569403754%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.81944444444444%"),
    top: hp("27.322404371584696%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_31: {
    width: wp("5.555577807956272%"),
    minWidth: wp("5.555577807956272%"),
    height: hp("30.601092896174865%"),
    minHeight: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.51388888888889%"),
    top: hp("21.584699453551906%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_32: {
    width: wp("5.555575688680013%"),
    minWidth: wp("5.555575688680013%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.20833333333333%"),
    top: hp("24.18032786885246%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_33: {
    width: wp("5.5555703904893665%"),
    minWidth: wp("5.5555703904893665%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("31.830601092896174%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_144: {
    width: wp("5.555573569403754%"),
    minWidth: wp("5.555573569403754%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.36111111111111%"),
    top: hp("27.322404371584696%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_34: {
    width: wp("5.555577278137207%"),
    minWidth: wp("5.555577278137207%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.05555555555555%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_35: {
    width: wp("5.555581516689724%"),
    minWidth: wp("5.555581516689724%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.75%"),
    top: hp("16.530054644808743%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_36: {
    width: wp("5.555582576327854%"),
    minWidth: wp("5.555582576327854%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: hp("15.163934426229503%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_37: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("37.84153005464479%")
  },
  Text_115_37: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_38: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("51.50273224043717%")
  },
  Text_115_38: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_39: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("24.18032786885246%")
  },
  Text_115_39: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_40: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("10.51912568306011%")
  },
  Text_115_40: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_41: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.16666666666667%"),
    top: hp("54.918032786885234%")
  },
  Text_115_41: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_146: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.47222222222223%"),
    top: hp("54.918032786885234%")
  },
  Text_115_146: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_46: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.77777777777778%"),
    top: hp("54.918032786885234%")
  },
  Text_115_46: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_50: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.08333333333333%"),
    top: hp("54.918032786885234%")
  },
  Text_115_50: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_52: {
    width: wp("1.9444444444444444%"),
    minWidth: wp("1.9444444444444444%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.38888888888889%"),
    top: hp("54.918032786885234%")
  },
  Text_115_52: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_1077: {
    width: wp("1.875%"),
    height: hp("3.415300546448088%"),
    top: hp("6.284153005464489%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.98611111111111%")
  },
  View_159_10: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("171.03825136612022%")
  },
  View_159_6: {
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
  View_141_0: {
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
  View_115_53: {
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
  View_115_54: {
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
  View_115_55: {
    width: wp("25.208333333333332%"),
    minWidth: wp("25.208333333333332%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_115_55: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_56: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("66.66666666666666%"),
    minHeight: hp("66.66666666666666%"),
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
  View_115_57: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("24.453551912568287%")
  },
  Text_115_57: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_58: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.12499999999999%"),
    top: hp("60.109289617486354%")
  },
  Text_115_58: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_59: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.166666666666668%"),
    top: hp("65.43715846994533%")
  },
  Text_115_59: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_60: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("65.43715846994533%")
  },
  Text_115_60: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_61: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.75%"),
    top: hp("65.43715846994533%")
  },
  Text_115_61: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_62: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.73611111111111%"),
    top: hp("65.43715846994533%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_115_63: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("65.43715846994533%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_115_64: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("38.387961465804295%")
  },
  ImageBackground_115_65: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512644139378%"),
    minHeight: hp("0.00001275512644139378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_66: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("24.726759280011947%")
  },
  ImageBackground_115_67: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("11.0655570942196%")
  },
  ImageBackground_115_68: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_69: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.11111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_70: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.36111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_71: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.61111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_72: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.86111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_73: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.11111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_74: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.36111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_75: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_76: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8611111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_77: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.1111111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_78: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.3611111111111%"),
    top: hp("52.04918032786887%")
  },
  ImageBackground_115_79: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.6111111111111%"),
    top: hp("52.04918032786887%")
  },
  View_115_80: {
    width: wp("2.0833526717291937%"),
    minWidth: wp("2.0833526717291937%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("25.409836065573785%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_81: {
    width: wp("2.0833526717291937%"),
    minWidth: wp("2.0833526717291937%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("25.409836065573785%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_82: {
    width: wp("2.0833512147267657%"),
    minWidth: wp("2.0833512147267657%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.499999999999996%"),
    top: hp("27.459016393442624%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_83: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74999999999999%"),
    top: hp("24.04371584699453%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_84: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("28.68852459016395%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_85: {
    width: wp("2.083352539274428%"),
    minWidth: wp("2.083352539274428%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.24999999999999%"),
    top: hp("25.546448087431685%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_86: {
    width: wp("2.083352539274428%"),
    minWidth: wp("2.083352539274428%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.49999999999999%"),
    top: hp("25.546448087431685%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_87: {
    width: wp("2.0833530690934925%"),
    minWidth: wp("2.0833530690934925%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.75%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_88: {
    width: wp("2.083348168267144%"),
    minWidth: wp("2.083348168267144%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("31.69398907103823%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_89: {
    width: wp("2.083348962995741%"),
    minWidth: wp("2.083348962995741%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25%"),
    top: hp("30.464480874316934%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_90: {
    width: wp("2.0833501550886364%"),
    minWidth: wp("2.0833501550886364%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5%"),
    top: hp("28.82513661202185%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_91: {
    width: wp("2.083348962995741%"),
    minWidth: wp("2.083348962995741%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.75%"),
    top: hp("30.464480874316934%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_92: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("24.726775956284143%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_93: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333336%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_94: {
    width: wp("2.08335280418396%"),
    minWidth: wp("2.08335280418396%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("25.409836065573785%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_95: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.458333333333332%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_96: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.70833333333333%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_97: {
    width: wp("2.083355983098348%"),
    minWidth: wp("2.083355983098348%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.95833333333333%"),
    top: hp("20.901639344262293%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_98: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.20833333333333%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_99: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.45833333333333%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_100: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.70833333333333%"),
    top: hp("24.04371584699453%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_101: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333333%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_102: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20833333333333%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_103: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.45833333333333%"),
    top: hp("24.04371584699453%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_115_104: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("37.70491803278691%")
  },
  Text_115_104: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_105: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("51.366120218579226%")
  },
  Text_115_105: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_106: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("24.04371584699453%")
  },
  Text_115_106: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_107: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("10.382513661202182%")
  },
  Text_115_107: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_108: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.875%"),
    top: hp("54.78142076502732%")
  },
  Text_115_108: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_109: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555555555556%"),
    top: hp("54.78142076502732%")
  },
  Text_115_109: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_110: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.375%"),
    top: hp("54.78142076502732%")
  },
  Text_115_110: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_111: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.125%"),
    top: hp("54.78142076502732%")
  },
  Text_115_111: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_112: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("54.78142076502732%")
  },
  Text_115_112: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_113: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("54.78142076502732%")
  },
  Text_115_113: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_114: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("54.78142076502732%")
  },
  Text_115_114: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_115: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555555%"),
    top: hp("54.78142076502732%")
  },
  Text_115_115: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_116: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("54.78142076502732%")
  },
  Text_115_116: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_117: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("54.78142076502732%")
  },
  Text_115_117: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_118: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: hp("54.78142076502732%")
  },
  Text_115_118: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_115_119: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("54.78142076502732%")
  },
  Text_115_119: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_120: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("18.032786885245912%")
  },
  ImageBackground_115_122: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.76388888888889%"),
    top: hp("21.99453551912569%")
  },
  ImageBackground_115_123: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("20.901639344262293%")
  },
  ImageBackground_134_1: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("1.0275524170672308%"),
    minHeight: hp("1.0275524170672308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.73611111111111%"),
    top: hp("21.99453551912569%")
  },
  ImageBackground_115_127: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("23.770491803278702%")
  },
  ImageBackground_115_129: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.05555555555556%"),
    top: hp("26.09289617486337%")
  },
  ImageBackground_115_130: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.23611111111111%"),
    top: hp("23.360655737704917%")
  },
  ImageBackground_115_133: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.097222222222218%"),
    top: hp("24.726775956284143%")
  },
  ImageBackground_115_134: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("65.43715846994533%")
  },
  View_115_138: {
    width: wp("7.986111111111111%"),
    minWidth: wp("7.986111111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.41666666666666%"),
    top: hp("65.43715846994533%")
  },
  Text_115_138: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_115_139: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.388888888888886%"),
    top: hp("65.43715846994533%")
  },
  ImageBackground_131_7: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("2.397786593828045%"),
    minHeight: hp("2.397786593828045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.458333333333332%"),
    top: hp("24.93169398907102%")
  },
  ImageBackground_115_128: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%"),
    top: hp("25.95628415300547%")
  },
  ImageBackground_134_0: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("3.781844227691817%"),
    minHeight: hp("3.781844227691817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.23611111111111%"),
    top: hp("19.330601092896188%")
  },
  ImageBackground_115_121: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.51388888888889%"),
    top: hp("21.17486338797815%")
  },
  ImageBackground_134_2: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("35.382513661202154%")
  },
  ImageBackground_134_3: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.375%"),
    top: hp("38.797814207650276%")
  },
  ImageBackground_134_4: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.625%"),
    top: hp("36.61202185792351%")
  },
  ImageBackground_134_5: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875000000000004%"),
    top: hp("34.6994535519126%")
  },
  ImageBackground_134_6: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.125%"),
    top: hp("34.42622950819671%")
  },
  View_159_2: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.81944444444444%"),
    top: hp("65.43715846994533%")
  },
  Text_159_2: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_159_3: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.48611111111111%"),
    top: hp("65.43715846994533%")
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
