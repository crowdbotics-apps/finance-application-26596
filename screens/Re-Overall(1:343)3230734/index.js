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
      <View style={styles.View_1_344} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_1_345}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_1_346}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcc/9172/8adc91df05ba78d283d8880e16d613f8"
        }}
        style={styles.ImageBackground_1_347}
      />
      <View style={styles.View_1_348} />
      <View style={styles.View_1_349} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_1_350}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_1_351}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_1_352}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_1_353}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_1_354}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_1_355}
      />
      <View style={styles.View_1_356}>
        <Text style={styles.Text_1_356}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_1_357}
      />
      <View style={styles.View_1_358}>
        <Text style={styles.Text_1_358}>Overall</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_1_359}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_1_361}
      />
      <View style={styles.View_1_364}>
        <Text style={styles.Text_1_364}>Revenue</Text>
      </View>
      <View style={styles.View_1_365}>
        <Text style={styles.Text_1_365}>Expense</Text>
      </View>
      <View style={styles.View_1_366}>
        <View style={styles.View_1_367}>
          <View style={styles.View_1_368}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
              }}
              style={styles.ImageBackground_1_369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
              }}
              style={styles.ImageBackground_1_370}
            />
          </View>
          <View style={styles.View_1_371}>
            <View style={styles.View_1_372}>
              <View style={styles.View_1_373}>
                <View style={styles.View_1_374}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                    }}
                    style={styles.ImageBackground_1_375}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
              }}
              style={styles.ImageBackground_1_377}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_379} />
      <View style={styles.View_1_380} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_52_2}
      />
      <View style={styles.View_141_222}>
        <View style={styles.View_139_0}>
          <View style={styles.View_139_1} />
          <View style={styles.View_139_2} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0a4/1d5a/9e3aca67c5fec3ffeac823c2e51b33ae"
            }}
            style={styles.ImageBackground_139_3}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33b6/11b6/f77358d9e4289b8f3b597a032771fe76"
            }}
            style={styles.ImageBackground_139_17}
          />
          <View style={styles.View_139_18}>
            <Text style={styles.Text_139_18}>Month</Text>
          </View>
          <View style={styles.View_139_19}>
            <Text style={styles.Text_139_19}>Jan</Text>
          </View>
          <View style={styles.View_139_20}>
            <Text style={styles.Text_139_20}>Feb</Text>
          </View>
          <View style={styles.View_139_21}>
            <Text style={styles.Text_139_21}>Mar</Text>
          </View>
          <View style={styles.View_139_22}>
            <Text style={styles.Text_139_22}>Apr</Text>
          </View>
          <View style={styles.View_139_23}>
            <Text style={styles.Text_139_23}>May</Text>
          </View>
          <View style={styles.View_139_24}>
            <Text style={styles.Text_139_24}>Jun</Text>
          </View>
          <View style={styles.View_139_25}>
            <Text style={styles.Text_139_25}>Jul</Text>
          </View>
          <View style={styles.View_139_26}>
            <Text style={styles.Text_139_26}>Aug</Text>
          </View>
          <View style={styles.View_139_27}>
            <Text style={styles.Text_139_27}>Sep</Text>
          </View>
          <View style={styles.View_139_28}>
            <Text style={styles.Text_139_28}>Oct</Text>
          </View>
          <View style={styles.View_139_29}>
            <Text style={styles.Text_139_29}>Nov</Text>
          </View>
          <View style={styles.View_139_30}>
            <Text style={styles.Text_139_30}>Dec</Text>
          </View>
          <View style={styles.View_139_31}>
            <Text style={styles.Text_139_31}>Total</Text>
          </View>
          <View style={styles.View_139_32}>
            <Text style={styles.Text_139_32}>Revenue ($)</Text>
          </View>
          <View style={styles.View_139_33}>
            <Text style={styles.Text_139_33}>1,953,000</Text>
          </View>
          <View style={styles.View_141_185}>
            <Text style={styles.Text_141_185}>1,353K</Text>
          </View>
          <View style={styles.View_141_209}>
            <Text style={styles.Text_141_209}>1,353K</Text>
          </View>
          <View style={styles.View_141_210}>
            <Text style={styles.Text_141_210}>1,353K</Text>
          </View>
          <View style={styles.View_141_211}>
            <Text style={styles.Text_141_211}>1,353K</Text>
          </View>
          <View style={styles.View_141_196}>
            <Text style={styles.Text_141_196}>1,353K</Text>
          </View>
          <View style={styles.View_141_197}>
            <Text style={styles.Text_141_197}>1,353K</Text>
          </View>
          <View style={styles.View_141_198}>
            <Text style={styles.Text_141_198}>1,560K</Text>
          </View>
          <View style={styles.View_141_212}>
            <Text style={styles.Text_141_212}>1,560K</Text>
          </View>
          <View style={styles.View_141_213}>
            <Text style={styles.Text_141_213}>1,560K</Text>
          </View>
          <View style={styles.View_141_214}>
            <Text style={styles.Text_141_214}>1,560K</Text>
          </View>
          <View style={styles.View_141_215}>
            <Text style={styles.Text_141_215}>2,055K</Text>
          </View>
          <View style={styles.View_141_216}>
            <Text style={styles.Text_141_216}>2,055K</Text>
          </View>
          <View style={styles.View_141_217}>
            <Text style={styles.Text_141_217}>2,055K</Text>
          </View>
          <View style={styles.View_141_218}>
            <Text style={styles.Text_141_218}>1,669K</Text>
          </View>
          <View style={styles.View_141_219}>
            <Text style={styles.Text_141_219}>1,669K</Text>
          </View>
          <View style={styles.View_141_220}>
            <Text style={styles.Text_141_220}>1,669K</Text>
          </View>
          <View style={styles.View_141_221}>
            <Text style={styles.Text_141_221}>19,911K</Text>
          </View>
          <View style={styles.View_141_199}>
            <Text style={styles.Text_141_199}>1,560K</Text>
          </View>
          <View style={styles.View_141_200}>
            <Text style={styles.Text_141_200}>1,560K</Text>
          </View>
          <View style={styles.View_141_201}>
            <Text style={styles.Text_141_201}>2,055K</Text>
          </View>
          <View style={styles.View_141_202}>
            <Text style={styles.Text_141_202}>2,055K</Text>
          </View>
          <View style={styles.View_141_203}>
            <Text style={styles.Text_141_203}>2,055K</Text>
          </View>
          <View style={styles.View_141_204}>
            <Text style={styles.Text_141_204}>1,669K</Text>
          </View>
          <View style={styles.View_141_205}>
            <Text style={styles.Text_141_205}>1,669K</Text>
          </View>
          <View style={styles.View_141_206}>
            <Text style={styles.Text_141_206}>1,669K</Text>
          </View>
          <View style={styles.View_141_207}>
            <Text style={styles.Text_141_207}>19,911K</Text>
          </View>
          <View style={styles.View_139_34}>
            <Text style={styles.Text_139_34}>1,560,570</Text>
          </View>
          <View style={styles.View_139_35}>
            <Text style={styles.Text_139_35}>2,353,000</Text>
          </View>
          <View style={styles.View_139_36}>
            <Text style={styles.Text_139_36}>2,000,000</Text>
          </View>
          <View style={styles.View_141_186}>
            <Text style={styles.Text_141_186}>2,000,000</Text>
          </View>
          <View style={styles.View_141_187}>
            <Text style={styles.Text_141_187}>2,000,000</Text>
          </View>
          <View style={styles.View_139_37}>
            <Text style={styles.Text_139_37}>2,353,000</Text>
          </View>
          <View style={styles.View_139_38}>
            <Text style={styles.Text_139_38}>2,153,000</Text>
          </View>
          <View style={styles.View_139_39}>
            <Text style={styles.Text_139_39}>2,200,000</Text>
          </View>
          <View style={styles.View_139_40}>
            <Text style={styles.Text_139_40}>2,000,000</Text>
          </View>
          <View style={styles.View_139_49}>
            <Text style={styles.Text_139_49}>Expense ($)</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_141_507}>
        <View style={styles.View_141_508}>
          <View style={styles.View_141_509}>
            <View style={styles.View_141_510}>
              <View style={styles.View_141_511}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                  }}
                  style={styles.ImageBackground_141_512}
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
          style={styles.ImageBackground_141_514}
        />
      </View>
      <View style={styles.View_147_297}>
        <View style={styles.View_141_91}>
          <View style={styles.View_141_92}>
            <View style={styles.View_141_93}>
              <View style={styles.View_141_94}>
                <Text style={styles.Text_141_94}>REVENUE AND EXPENSE</Text>
              </View>
              <View style={styles.View_141_95} />
            </View>
            <View style={styles.View_141_96}>
              <Text style={styles.Text_141_96}>Amount in $</Text>
            </View>
            <View style={styles.View_141_97}>
              <Text style={styles.Text_141_97}>Timeline</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_141_103}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_141_104}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_141_105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_141_106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_107}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_108}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_109}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_110}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_111}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_112}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_114}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_115}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_141_118}
            />
            <View style={styles.View_141_119} />
            <View style={styles.View_141_120} />
            <View style={styles.View_141_121} />
            <View style={styles.View_141_122} />
            <View style={styles.View_141_123} />
            <View style={styles.View_141_124} />
            <View style={styles.View_141_125} />
            <View style={styles.View_141_126} />
            <View style={styles.View_141_127} />
            <View style={styles.View_141_128} />
            <View style={styles.View_141_129} />
            <View style={styles.View_141_130} />
            <View style={styles.View_141_131} />
            <View style={styles.View_141_132} />
            <View style={styles.View_141_133} />
            <View style={styles.View_141_134} />
            <View style={styles.View_141_135} />
            <View style={styles.View_141_136} />
            <View style={styles.View_141_137} />
            <View style={styles.View_141_138} />
            <View style={styles.View_141_139} />
            <View style={styles.View_141_140} />
            <View style={styles.View_141_141} />
            <View style={styles.View_141_142} />
            <View style={styles.View_141_143}>
              <Text style={styles.Text_141_143}>1M</Text>
            </View>
            <View style={styles.View_141_144}>
              <Text style={styles.Text_141_144}>0</Text>
            </View>
            <View style={styles.View_141_145}>
              <Text style={styles.Text_141_145}>2M</Text>
            </View>
            <View style={styles.View_141_146}>
              <Text style={styles.Text_141_146}>3M</Text>
            </View>
            <View style={styles.View_141_147}>
              <Text style={styles.Text_141_147}>Dec 2021</Text>
            </View>
            <View style={styles.View_141_148}>
              <Text style={styles.Text_141_148}>Nov 2021</Text>
            </View>
            <View style={styles.View_141_149}>
              <Text style={styles.Text_141_149}>Oct 2021</Text>
            </View>
            <View style={styles.View_141_150}>
              <Text style={styles.Text_141_150}>Sep 2021</Text>
            </View>
            <View style={styles.View_141_151}>
              <Text style={styles.Text_141_151}>Aug 2021</Text>
            </View>
            <View style={styles.View_141_152}>
              <Text style={styles.Text_141_152}>Jul 2021</Text>
            </View>
            <View style={styles.View_141_153}>
              <Text style={styles.Text_141_153}>Jun 2021</Text>
            </View>
            <View style={styles.View_141_154}>
              <Text style={styles.Text_141_154}>May 2021</Text>
            </View>
            <View style={styles.View_141_155}>
              <Text style={styles.Text_141_155}>Apr 2021</Text>
            </View>
            <View style={styles.View_141_156}>
              <Text style={styles.Text_141_156}>Mar 2021</Text>
            </View>
            <View style={styles.View_141_157}>
              <Text style={styles.Text_141_157}>Feb 2021</Text>
            </View>
            <View style={styles.View_141_158}>
              <Text style={styles.Text_141_158}>Jan 2021</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_141_159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_141_160}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_141_161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/587e/09c4/d02556a00b6e39d60eb47011d1c3ae2d"
              }}
              style={styles.ImageBackground_141_162}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_141_163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_141_164}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_141_165}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9c/831c/7f7d3c7510209b95bdd90cf0535ad2e4"
              }}
              style={styles.ImageBackground_141_166}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33bf/e6ef/7df7272b2148246c191c0d4486117197"
            }}
            style={styles.ImageBackground_141_176}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
            }}
            style={styles.ImageBackground_141_177}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8eb/0149/a07a66d1290bfa132635c7927ac7628c"
            }}
            style={styles.ImageBackground_141_178}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
            }}
            style={styles.ImageBackground_141_179}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b05/e937/46f897e840ebaf728401d619b982b357"
            }}
            style={styles.ImageBackground_141_180}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_141_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_141_183}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_141_184}
          />
        </View>
      </View>
      <View style={styles.View_161_6}>
        <View style={styles.View_141_98}>
          <Text style={styles.Text_141_98}>Forecasted Revenue</Text>
        </View>
        <View style={styles.View_141_99}>
          <Text style={styles.Text_141_99}>Actual Revenue</Text>
        </View>
        <View style={styles.View_141_100}>
          <Text style={styles.Text_141_100}>Forecasted Expense</Text>
        </View>
        <View style={styles.View_141_101} />
        <View style={styles.View_141_102} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199a/2b60/3772785048c18fe83d052cb614f2d33d"
          }}
          style={styles.ImageBackground_141_167}
        />
        <View style={styles.View_141_171}>
          <Text style={styles.Text_141_171}>Actual Expense</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c9/3373/5bcb7b296d7324a17b56c0fc44830049"
          }}
          style={styles.ImageBackground_141_172}
        />
        <View style={styles.View_161_2}>
          <Text style={styles.Text_161_2}>Profit</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c4/ea5f/07e7b8a29f653bdb8335f165ec95f07e"
          }}
          style={styles.ImageBackground_161_3}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_344: {
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
  ImageBackground_1_345: {
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
  ImageBackground_1_346: {
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
  ImageBackground_1_347: {
    width: wp("1.1111111111111112%"),
    height: hp("0.683059067022605%"),
    top: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  View_1_348: {
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
  View_1_349: {
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
  ImageBackground_1_350: {
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
  ImageBackground_1_351: {
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
  ImageBackground_1_352: {
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
  ImageBackground_1_353: {
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
  ImageBackground_1_354: {
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
  ImageBackground_1_355: {
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
  View_1_356: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_1_356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_357: {
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
  View_1_358: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_1_358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_359: {
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
  ImageBackground_1_361: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  View_1_364: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.31944444444444%"),
    top: hp("177.18579234972677%")
  },
  Text_1_364: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_365: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.49999999999999%"),
    top: hp("177.18579234972677%")
  },
  Text_1_365: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_366: {
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
  View_1_367: {
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
  View_1_368: {
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
  ImageBackground_1_369: {
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
  ImageBackground_1_370: {
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
  View_1_371: {
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
  View_1_372: {
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
  View_1_373: {
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
  View_1_374: {
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
  ImageBackground_1_375: {
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
  ImageBackground_1_377: {
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
  View_1_379: {
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
  View_1_380: {
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
  ImageBackground_52_2: {
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
  View_141_222: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("104.37158469945356%")
  },
  View_139_0: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_139_1: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("32.240437158469945%"),
    minHeight: hp("32.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_139_2: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 83, 98, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_139_3: {
    width: wp("78.19444444444444%"),
    minWidth: wp("78.19444444444444%"),
    height: hp("32.10382513661202%"),
    minHeight: hp("32.10382513661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777778%"),
    top: hp("0%")
  },
  ImageBackground_139_17: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.535519125683052%")
  },
  View_139_18: {
    width: wp("4.063079622056749%"),
    minWidth: wp("4.063079622056749%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2697007921006938%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_19: {
    width: wp("2.4547775586446123%"),
    minWidth: wp("2.4547775586446123%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.563469780815971%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_20: {
    width: wp("2.3701299561394586%"),
    minWidth: wp("2.3701299561394586%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.301920572916668%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_21: {
    width: wp("2.24615388446384%"),
    minWidth: wp("2.24615388446384%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.61922878689236%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_22: {
    width: wp("2.1759616004096136%"),
    minWidth: wp("2.1759616004096136%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.28750610351563%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_23: {
    width: wp("2.456730736626519%"),
    minWidth: wp("2.456730736626519%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.46441650390624%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_24: {
    width: wp("2.035576899846395%"),
    minWidth: wp("2.035576899846395%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.34326510959201%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_25: {
    width: wp("1.684615347120497%"),
    minWidth: wp("1.684615347120497%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.22211371527777%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_26: {
    width: wp("2.105769183900621%"),
    minWidth: wp("2.105769183900621%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.328850640190964%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_27: {
    width: wp("2.035576899846395%"),
    minWidth: wp("2.035576899846395%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.99711100260416%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_28: {
    width: wp("1.895192331737942%"),
    minWidth: wp("1.895192331737942%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.59518093532986%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_29: {
    width: wp("2.24615388446384%"),
    minWidth: wp("2.24615388446384%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.05287000868056%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_30: {
    width: wp("2.105769183900621%"),
    minWidth: wp("2.105769183900621%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.29998779296875%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_31: {
    width: wp("2.7374998728434243%"),
    minWidth: wp("2.7374998728434243%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.54710557725694%"),
    top: hp("2.0491803278688394%")
  },
  Text_139_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_32: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1388888888888884%"),
    top: hp("12.295081967213108%")
  },
  Text_139_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_33: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("9.56284153005464%")
  },
  Text_139_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_185: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("15.300546448087417%")
  },
  Text_141_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_209: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("28.142076502732237%")
  },
  Text_141_209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_210: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("28.142076502732237%")
  },
  Text_141_210: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_211: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.86111111111111%"),
    top: hp("28.142076502732237%")
  },
  Text_141_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_196: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("15.300546448087417%")
  },
  Text_141_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_197: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.86111111111111%"),
    top: hp("15.300546448087417%")
  },
  Text_141_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_198: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("15.300546448087417%")
  },
  Text_141_198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_212: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("28.142076502732237%")
  },
  Text_141_212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_213: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.916666666666664%"),
    top: hp("28.142076502732237%")
  },
  Text_141_213: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_214: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("28.142076502732237%")
  },
  Text_141_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_215: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: hp("28.142076502732237%")
  },
  Text_141_215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_216: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.49999999999999%"),
    top: hp("28.142076502732237%")
  },
  Text_141_216: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_217: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.02777777777777%"),
    top: hp("28.142076502732237%")
  },
  Text_141_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_218: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555554%"),
    top: hp("28.142076502732237%")
  },
  Text_141_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_219: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.08333333333333%"),
    top: hp("28.142076502732237%")
  },
  Text_141_219: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_220: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("28.142076502732237%")
  },
  Text_141_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_221: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.13888888888889%"),
    top: hp("28.142076502732237%")
  },
  Text_141_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_199: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.916666666666664%"),
    top: hp("15.300546448087417%")
  },
  Text_141_199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_200: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.44444444444444%"),
    top: hp("15.300546448087417%")
  },
  Text_141_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_201: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: hp("15.300546448087417%")
  },
  Text_141_201: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_202: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.49999999999999%"),
    top: hp("15.300546448087417%")
  },
  Text_141_202: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_203: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.02777777777777%"),
    top: hp("15.300546448087417%")
  },
  Text_141_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_204: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.55555555555554%"),
    top: hp("15.300546448087417%")
  },
  Text_141_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_205: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.08333333333333%"),
    top: hp("15.300546448087417%")
  },
  Text_141_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_206: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("15.300546448087417%")
  },
  Text_141_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_207: {
    width: wp("3.125%"),
    minWidth: wp("3.125%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.13888888888889%"),
    top: hp("15.300546448087417%")
  },
  Text_141_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_34: {
    width: wp("4.791666666666667%"),
    minWidth: wp("4.791666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555557%"),
    top: hp("22.26775956284152%")
  },
  Text_139_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_35: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.305555555555557%"),
    top: hp("22.26775956284152%")
  },
  Text_139_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_36: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.625%"),
    top: hp("22.26775956284152%")
  },
  Text_139_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_186: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("22.26775956284152%")
  },
  Text_141_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_187: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.68055555555555%"),
    top: hp("22.26775956284152%")
  },
  Text_141_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_37: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.75%"),
    top: hp("9.56284153005464%")
  },
  Text_139_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_38: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.416666666666668%"),
    top: hp("9.56284153005464%")
  },
  Text_139_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_39: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: hp("9.56284153005464%")
  },
  Text_139_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_40: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.916666666666664%"),
    top: hp("9.56284153005464%")
  },
  Text_139_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_49: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20833333333333215%"),
    top: hp("25%")
  },
  Text_139_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_507: {
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
  View_141_508: {
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
  View_141_509: {
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
  View_141_510: {
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
  View_141_511: {
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
  ImageBackground_141_512: {
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
  ImageBackground_141_514: {
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
  View_147_297: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("70.21857923497268%"),
    minHeight: hp("70.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("31.420765027322407%")
  },
  View_141_91: {
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
  View_141_92: {
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
  View_141_93: {
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
  View_141_94: {
    width: wp("25.208333333333332%"),
    minWidth: wp("25.208333333333332%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_141_94: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_95: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("66.66666666666666%"),
    minHeight: hp("66.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%"),
    backgroundColor: "rgba(239, 243, 246, 1)",
    borderColor: "rgba(39, 83, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_141_96: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("24.590163934426226%")
  },
  Text_141_96: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_97: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.12499999999999%"),
    top: hp("60.245901639344254%")
  },
  Text_141_97: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_141_103: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("38.524590163934434%")
  },
  ImageBackground_141_104: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512644139378%"),
    minHeight: hp("0.00001275512644139378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_105: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("24.863387978142068%")
  },
  ImageBackground_141_106: {
    width: wp("74.16666666666667%"),
    minWidth: wp("74.16666666666667%"),
    height: hp("0.00001275512743537706%"),
    minHeight: hp("0.00001275512743537706%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.666666666666668%"),
    top: hp("11.20218579234972%")
  },
  ImageBackground_141_107: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_108: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.11111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_109: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.36111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_110: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.61111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_111: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.86111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_112: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.11111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_113: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.36111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_114: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.6111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_115: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8611111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_116: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.1111111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_117: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.3611111111111%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_141_118: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.6111111111111%"),
    top: hp("52.18579234972678%")
  },
  View_141_119: {
    width: wp("2.0833526717291937%"),
    minWidth: wp("2.0833526717291937%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_120: {
    width: wp("2.0833526717291937%"),
    minWidth: wp("2.0833526717291937%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_121: {
    width: wp("2.0833512147267657%"),
    minWidth: wp("2.0833512147267657%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.499999999999996%"),
    top: hp("27.595628415300542%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_122: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74999999999999%"),
    top: hp("24.180327868852455%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_123: {
    width: wp("2.0833502875434027%"),
    minWidth: wp("2.0833502875434027%"),
    height: hp("23.36065573770492%"),
    minHeight: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("28.825136612021847%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_124: {
    width: wp("2.083352539274428%"),
    minWidth: wp("2.083352539274428%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.24999999999999%"),
    top: hp("25.68306010928961%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_125: {
    width: wp("2.083352539274428%"),
    minWidth: wp("2.083352539274428%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.49999999999999%"),
    top: hp("25.68306010928961%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_126: {
    width: wp("2.0833530690934925%"),
    minWidth: wp("2.0833530690934925%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.75%"),
    top: hp("24.999999999999996%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_127: {
    width: wp("2.083348168267144%"),
    minWidth: wp("2.083348168267144%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("31.83060109289617%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_128: {
    width: wp("2.083348962995741%"),
    minWidth: wp("2.083348962995741%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.25%"),
    top: hp("30.601092896174865%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_129: {
    width: wp("2.0833501550886364%"),
    minWidth: wp("2.0833501550886364%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5%"),
    top: hp("28.961748633879782%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_130: {
    width: wp("2.083348962995741%"),
    minWidth: wp("2.083348962995741%"),
    height: hp("21.584699453551913%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.75%"),
    top: hp("30.601092896174865%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_131: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("24.863387978142068%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_132: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333336%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_133: {
    width: wp("2.08335280418396%"),
    minWidth: wp("2.08335280418396%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_134: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.458333333333332%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_135: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.70833333333333%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_136: {
    width: wp("2.083355983098348%"),
    minWidth: wp("2.083355983098348%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.95833333333333%"),
    top: hp("21.038251366120218%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_137: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.20833333333333%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_138: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.45833333333333%"),
    top: hp("22.6775956284153%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_139: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.70833333333333%"),
    top: hp("24.180327868852455%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_140: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.95833333333333%"),
    top: hp("24.999999999999996%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_141: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20833333333333%"),
    top: hp("24.999999999999996%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_142: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.45833333333333%"),
    top: hp("24.180327868852455%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_141_143: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("37.84153005464482%")
  },
  Text_141_143: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_144: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("51.502732240437155%")
  },
  Text_141_144: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_145: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("24.180327868852455%")
  },
  Text_141_145: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_146: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("10.519125683060107%")
  },
  Text_141_146: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_147: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.875%"),
    top: hp("54.91803278688525%")
  },
  Text_141_147: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_148: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555555555556%"),
    top: hp("54.91803278688525%")
  },
  Text_141_148: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_149: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.375%"),
    top: hp("54.91803278688525%")
  },
  Text_141_149: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_150: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.125%"),
    top: hp("54.91803278688525%")
  },
  Text_141_150: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_151: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("54.91803278688525%")
  },
  Text_141_151: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_152: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("54.91803278688525%")
  },
  Text_141_152: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_153: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("54.91803278688525%")
  },
  Text_141_153: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_154: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555555%"),
    top: hp("54.91803278688525%")
  },
  Text_141_154: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_155: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("54.91803278688525%")
  },
  Text_141_155: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_156: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("54.91803278688525%")
  },
  Text_141_156: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_157: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: hp("54.91803278688525%")
  },
  Text_141_157: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_158: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("54.91803278688525%")
  },
  Text_141_158: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_141_159: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("18.169398907103822%")
  },
  ImageBackground_141_160: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.76388888888889%"),
    top: hp("22.13114754098361%")
  },
  ImageBackground_141_161: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("21.038251366120218%")
  },
  ImageBackground_141_162: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("1.0275524170672308%"),
    minHeight: hp("1.0275524170672308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.73611111111111%"),
    top: hp("22.13114754098361%")
  },
  ImageBackground_141_163: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("23.907103825136613%")
  },
  ImageBackground_141_164: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.05555555555556%"),
    top: hp("26.22950819672131%")
  },
  ImageBackground_141_165: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.23611111111111%"),
    top: hp("23.497267759562842%")
  },
  ImageBackground_141_166: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.097222222222218%"),
    top: hp("24.863387978142068%")
  },
  ImageBackground_141_176: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("2.397786593828045%"),
    minHeight: hp("2.397786593828045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.458333333333332%"),
    top: hp("25.06830601092896%")
  },
  ImageBackground_141_177: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%"),
    top: hp("26.092896174863387%")
  },
  ImageBackground_141_178: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("3.781844227691817%"),
    minHeight: hp("3.781844227691817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.23611111111111%"),
    top: hp("19.4672131147541%")
  },
  ImageBackground_141_179: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.51388888888889%"),
    top: hp("21.311475409836067%")
  },
  ImageBackground_141_180: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("35.51912568306011%")
  },
  ImageBackground_141_181: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.375%"),
    top: hp("38.93442622950819%")
  },
  ImageBackground_141_183: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875000000000004%"),
    top: hp("34.8360655737705%")
  },
  ImageBackground_141_184: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.125%"),
    top: hp("34.56284153005464%")
  },
  View_161_6: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.09722222222222%"),
    top: hp("96.85792349726776%")
  },
  View_141_98: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555557%"),
    top: hp("0.1366120218579141%")
  },
  Text_141_98: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_99: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.305555555555557%"),
    top: hp("0.1366120218579141%")
  },
  Text_141_99: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_100: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01388888888889%"),
    top: hp("0.1366120218579141%")
  },
  Text_141_100: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_141_101: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_141_102: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.583333333333336%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_141_167: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277777777777779%"),
    top: hp("0%")
  },
  View_141_171: {
    width: wp("7.986111111111111%"),
    minWidth: wp("7.986111111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.68055555555555%"),
    top: hp("0.1366120218579141%")
  },
  Text_141_171: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_141_172: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.65277777777778%"),
    top: hp("0%")
  },
  View_161_2: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.083333333333336%"),
    top: hp("0%")
  },
  Text_161_2: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_3: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.75000000000001%"),
    top: hp("0.1366120218579141%")
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
