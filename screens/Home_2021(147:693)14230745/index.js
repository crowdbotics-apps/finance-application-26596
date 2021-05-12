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
      <View style={styles.View_147_694} />
      <View style={styles.View_147_695} />
      <View style={styles.View_147_696} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d381/06a3/9f67cbc32d24c9679c1b6d06431f514a"
        }}
        style={styles.ImageBackground_147_697}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad8/063b/8cae552e74595f29521647ec2786e06c"
        }}
        style={styles.ImageBackground_147_698}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f2/9ff4/1c7b36a525cd36b48d730b0d82b2a232"
        }}
        style={styles.ImageBackground_147_699}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3033/2f7d/cfe243ce7206fb7908cfb1e230b80adc"
        }}
        style={styles.ImageBackground_147_700}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8ba/ab0f/033f72412ac6af7b032a9237dcf263b5"
        }}
        style={styles.ImageBackground_147_701}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3700/afc7/a21093b4a93db6e49a99b795a6bb4d77"
        }}
        style={styles.ImageBackground_147_702}
      />
      <View style={styles.View_147_743}>
        <View style={styles.View_147_744}>
          <Text style={styles.Text_147_744}>REVENUE</Text>
        </View>
        <View style={styles.View_147_745}>
          <View style={styles.View_147_746} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/961b/64aa/2c70f0bd8c32f38cb1d2b8e97e54681d"
          }}
          style={styles.ImageBackground_147_747}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d932/926e/48804ba1ec0596b6461b127fc5c7473b"
          }}
          style={styles.ImageBackground_147_748}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97da/1977/bdd624a026d7324dd0b326c4e303e604"
          }}
          style={styles.ImageBackground_147_749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fd/c9b0/484ee974d0df987bcf0961429cfa3e7e"
          }}
          style={styles.ImageBackground_147_750}
        />
        <View style={styles.View_147_751}>
          <View style={styles.View_147_752}>
            <View style={styles.View_147_753} />
            <View style={styles.View_147_754}>
              <Text style={styles.Text_147_754}>Logistics 20%</Text>
            </View>
          </View>
          <View style={styles.View_147_755}>
            <View style={styles.View_147_756} />
            <View style={styles.View_147_757}>
              <Text style={styles.Text_147_757}>Insurance 55%</Text>
            </View>
          </View>
          <View style={styles.View_147_758}>
            <View style={styles.View_147_759} />
            <View style={styles.View_147_760}>
              <Text style={styles.Text_147_760}>Service Cs 15%</Text>
            </View>
          </View>
          <View style={styles.View_147_761}>
            <View style={styles.View_147_762} />
            <View style={styles.View_147_763}>
              <Text style={styles.Text_147_763}>Service NB 10%</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_147_764}>
          <View style={styles.View_147_765}>
            <Text style={styles.Text_147_765}>Total Revenue</Text>
          </View>
          <View style={styles.View_147_766}>
            <Text style={styles.Text_147_766}>$ 6.6 M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_147_767}>
        <View style={styles.View_147_768}>
          <Text style={styles.Text_147_768}>EXPENSE</Text>
        </View>
        <View style={styles.View_147_769}>
          <View style={styles.View_147_770} />
        </View>
        <View style={styles.View_147_771}>
          <View style={styles.View_147_772}>
            <View style={styles.View_147_773} />
            <View style={styles.View_147_774}>
              <Text style={styles.Text_147_774}>Logistics 25%</Text>
            </View>
          </View>
          <View style={styles.View_147_775}>
            <View style={styles.View_147_776} />
            <View style={styles.View_147_777}>
              <Text style={styles.Text_147_777}>Insurance 40%</Text>
            </View>
          </View>
          <View style={styles.View_147_778}>
            <View style={styles.View_147_779} />
            <View style={styles.View_147_780}>
              <Text style={styles.Text_147_780}>Service Cs 20%</Text>
            </View>
          </View>
          <View style={styles.View_147_781}>
            <View style={styles.View_147_782} />
            <View style={styles.View_147_783}>
              <Text style={styles.Text_147_783}>Service NB 15%</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1151/017c/e2d2caa698c81f7104475aaf8de6d248"
          }}
          style={styles.ImageBackground_147_784}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5e/d41e/fdcc433327bf6448258ddc2177d6bc92"
          }}
          style={styles.ImageBackground_147_785}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bed/fe5b/41a29052379bcf2c1e7595e6474e4fb9"
          }}
          style={styles.ImageBackground_147_786}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67dd/0dcf/ac833e485d67be4d90fd53322a1fc001"
          }}
          style={styles.ImageBackground_147_787}
        />
        <View style={styles.View_147_788}>
          <View style={styles.View_147_789}>
            <Text style={styles.Text_147_789}>Total Expense</Text>
          </View>
          <View style={styles.View_147_790}>
            <Text style={styles.Text_147_790}>$ 5.0 M</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_159_23}>
        <View style={styles.View_147_791}>
          <View style={styles.View_147_792}>
            <View style={styles.View_147_793}>
              <Text style={styles.Text_147_793}>
                REVENUE AND EXPENSE BY DEPARTMENT
              </Text>
            </View>
            <View style={styles.View_147_794} />
            <View style={styles.View_147_795}>
              <View style={styles.View_147_796}>
                <View style={styles.View_147_797}>
                  <View style={styles.View_147_798}>
                    <Text style={styles.Text_147_798}>Insurance</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_147_799}>
                <View style={styles.View_147_800}>
                  <View style={styles.View_147_801}>
                    <Text style={styles.Text_147_801}>Logistics</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_147_802}>
                <View style={styles.View_147_803}>
                  <View style={styles.View_147_804}>
                    <Text style={styles.Text_147_804}>Service Cs</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_147_805}>
                <View style={styles.View_147_806}>
                  <View style={styles.View_147_807}>
                    <Text style={styles.Text_147_807}>Service Cs</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_147_808}>
                <View style={styles.View_147_809}>
                  <View style={styles.View_147_810}>
                    <Text style={styles.Text_147_810}>
                      Service New Business
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_147_811}>
            <Text style={styles.Text_147_811}>Departments</Text>
          </View>
          <View style={styles.View_147_812} />
          <View style={styles.View_147_813}>
            <Text style={styles.Text_147_813}>2M</Text>
          </View>
          <View style={styles.View_147_814}>
            <Text style={styles.Text_147_814}>1M</Text>
          </View>
          <View style={styles.View_147_815}>
            <Text style={styles.Text_147_815}>3M</Text>
          </View>
          <View style={styles.View_147_816}>
            <Text style={styles.Text_147_816}>4M</Text>
          </View>
          <View style={styles.View_147_817}>
            <Text style={styles.Text_147_817}>5M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_147_818}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_147_819}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_147_820}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_147_821}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_147_822}
          />
          <View style={styles.View_147_823} />
          <View style={styles.View_147_824} />
          <View style={styles.View_147_825} />
          <View style={styles.View_147_826} />
          <View style={styles.View_147_827} />
          <View style={styles.View_147_828} />
          <View style={styles.View_147_829}>
            <Text style={styles.Text_147_829}>Amount in $ </Text>
          </View>
          <View style={styles.View_147_830}>
            <Text style={styles.Text_147_830}>Revenue</Text>
          </View>
          <View style={styles.View_147_831}>
            <Text style={styles.Text_147_831}>Expense</Text>
          </View>
          <View style={styles.View_147_832}>
            <Text style={styles.Text_147_832}>3.3M</Text>
          </View>
          <View style={styles.View_147_833}>
            <Text style={styles.Text_147_833}>2M</Text>
          </View>
          <View style={styles.View_147_834}>
            <Text style={styles.Text_147_834}>1.65M</Text>
          </View>
          <View style={styles.View_147_835}>
            <Text style={styles.Text_147_835}>1.25M</Text>
          </View>
          <View style={styles.View_147_836}>
            <Text style={styles.Text_147_836}>1.32M</Text>
          </View>
          <View style={styles.View_147_837}>
            <Text style={styles.Text_147_837}>1M</Text>
          </View>
          <View style={styles.View_147_838}>
            <Text style={styles.Text_147_838}>0.99M</Text>
          </View>
          <View style={styles.View_147_839}>
            <Text style={styles.Text_147_839}>0.75M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0143/e044/80b19fe512cf0df3672fda5f912281e7"
            }}
            style={styles.ImageBackground_147_840}
          />
          <View style={styles.View_147_841} />
          <View style={styles.View_147_842} />
          <View style={styles.View_147_843} />
        </View>
      </View>
      <View style={styles.View_159_22}>
        <View style={styles.View_147_844}>
          <View style={styles.View_147_845}>
            <View style={styles.View_147_846}>
              <Text style={styles.Text_147_846}>EXPENSES BY CATEGORY</Text>
            </View>
            <View style={styles.View_147_847} />
            <View style={styles.View_147_848}>
              <View style={styles.View_147_849}>
                <View style={styles.View_147_850}>
                  <View style={styles.View_147_851}>
                    <Text style={styles.Text_147_851}>Marketing</Text>
                  </View>
                  <View style={styles.View_147_852}>
                    <Text style={styles.Text_147_852}>Full Time - Salary</Text>
                  </View>
                  <View style={styles.View_147_853}>
                    <Text style={styles.Text_147_853}>Full Time - Bonus</Text>
                  </View>
                  <View style={styles.View_147_854}>
                    <Text style={styles.Text_147_854}>Payroll Taxes</Text>
                  </View>
                  <View style={styles.View_147_855}>
                    <Text style={styles.Text_147_855}>Part Time - Salary</Text>
                  </View>
                  <View style={styles.View_147_856}>
                    <Text style={styles.Text_147_856}>
                      Full Time - Commission
                    </Text>
                  </View>
                  <View style={styles.View_147_857}>
                    <Text style={styles.Text_147_857}>Consulting</Text>
                  </View>
                  <View style={styles.View_147_858}>
                    <Text style={styles.Text_147_858}>
                      Licenses and Permits
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_147_859}>
            <Text style={styles.Text_147_859}>Categories</Text>
          </View>
          <View style={styles.View_147_860} />
          <View style={styles.View_147_861}>
            <Text style={styles.Text_147_861}>2M</Text>
          </View>
          <View style={styles.View_147_862}>
            <Text style={styles.Text_147_862}>1M</Text>
          </View>
          <View style={styles.View_147_863}>
            <Text style={styles.Text_147_863}>3M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_147_864}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_147_865}
          />
          <View style={styles.View_147_866} />
          <View style={styles.View_147_867} />
          <View style={styles.View_147_868} />
          <View style={styles.View_147_869} />
          <View style={styles.View_147_870} />
          <View style={styles.View_147_871}>
            <Text style={styles.Text_147_871}>Amount in $ </Text>
          </View>
          <View style={styles.View_147_872}>
            <Text style={styles.Text_147_872}>2M</Text>
          </View>
          <View style={styles.View_147_873}>
            <Text style={styles.Text_147_873}>1.5M</Text>
          </View>
          <View style={styles.View_147_874}>
            <Text style={styles.Text_147_874}>0.5M</Text>
          </View>
          <View style={styles.View_147_875}>
            <Text style={styles.Text_147_875}>0.3M</Text>
          </View>
          <View style={styles.View_147_876}>
            <Text style={styles.Text_147_876}>0.2M</Text>
          </View>
          <View style={styles.View_147_877}>
            <Text style={styles.Text_147_877}>0.2M</Text>
          </View>
          <View style={styles.View_147_878}>
            <Text style={styles.Text_147_878}>0.2M</Text>
          </View>
          <View style={styles.View_147_879}>
            <Text style={styles.Text_147_879}>0.1M</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_147_880}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/278c/4b20/acb00298ae64a0b55a8163cb1a88b810"
            }}
            style={styles.ImageBackground_147_881}
          />
          <View style={styles.View_147_882} />
          <View style={styles.View_147_883} />
        </View>
        <View style={styles.View_147_884}>
          <Text style={styles.Text_147_884}>Expense</Text>
        </View>
        <View style={styles.View_147_885} />
      </View>
      <View style={styles.View_147_886}>
        <Text style={styles.Text_147_886}>Finance</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6b/19f5/21ee95b1f7ce760ca7d11816a57f25ac"
        }}
        style={styles.ImageBackground_147_887}
      />
      <View style={styles.View_147_888}>
        <Text style={styles.Text_147_888}>Overall</Text>
      </View>
      <View style={styles.View_159_21}>
        <View style={styles.View_147_1015}>
          <View style={styles.View_147_1016}>
            <Text style={styles.Text_147_1016}>EBITDA (MONTHLY TREND)</Text>
          </View>
          <View style={styles.View_147_1017}>
            <View style={styles.View_147_1018} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_1019}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_1020}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_1021}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a0/44f8/b7964c5d1a619662257e608bcf35492b"
              }}
              style={styles.ImageBackground_147_1022}
            />
            <View style={styles.View_147_1023}>
              <Text style={styles.Text_147_1023}>1M</Text>
            </View>
            <View style={styles.View_147_1024}>
              <Text style={styles.Text_147_1024}>2M</Text>
            </View>
            <View style={styles.View_147_1025}>
              <Text style={styles.Text_147_1025}>3M</Text>
            </View>
            <View style={styles.View_147_1026}>
              <Text style={styles.Text_147_1026}>0</Text>
            </View>
            <View style={styles.View_147_1027}>
              <Text style={styles.Text_147_1027}>Amount in $</Text>
            </View>
            <View style={styles.View_147_1028}>
              <Text style={styles.Text_147_1028}>Months</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c47/63b1/4ed2746d2496af93961d08563caecd43"
              }}
              style={styles.ImageBackground_147_1029}
            />
            <View style={styles.View_147_1035}>
              <View style={styles.View_147_1036}>
                <View style={styles.View_147_1037}>
                  <View style={styles.View_147_1038}>
                    <Text style={styles.Text_147_1038}>Jan 2021</Text>
                  </View>
                  <View style={styles.View_147_1039}>
                    <Text style={styles.Text_147_1039}>Feb 2021</Text>
                  </View>
                  <View style={styles.View_147_1040}>
                    <Text style={styles.Text_147_1040}>Mar 2021</Text>
                  </View>
                  <View style={styles.View_147_1041}>
                    <Text style={styles.Text_147_1041}>Apr 2021</Text>
                  </View>
                  <View style={styles.View_147_1042}>
                    <Text style={styles.Text_147_1042}>May 2021</Text>
                  </View>
                  <View style={styles.View_147_1043}>
                    <Text style={styles.Text_147_1043}>Jun 2021</Text>
                  </View>
                  <View style={styles.View_147_1044}>
                    <Text style={styles.Text_147_1044}>Jul 2021</Text>
                  </View>
                  <View style={styles.View_147_1045}>
                    <Text style={styles.Text_147_1045}>Aug 2021</Text>
                  </View>
                  <View style={styles.View_147_1046}>
                    <Text style={styles.Text_147_1046}>Sep 2021</Text>
                  </View>
                  <View style={styles.View_147_1047}>
                    <Text style={styles.Text_147_1047}>Oct 2021</Text>
                  </View>
                  <View style={styles.View_147_1048}>
                    <Text style={styles.Text_147_1048}>Nov 2021</Text>
                  </View>
                  <View style={styles.View_147_1049}>
                    <Text style={styles.Text_147_1049}>Dec 2021</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc6/ee57/b80433df2a657bc6a3ff0d189dc3844b"
                    }}
                    style={styles.ImageBackground_147_1050}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_147_1063}>
            <View style={styles.View_147_1064}>
              <View style={styles.View_147_1065}>
                <View style={styles.View_147_1066}>
                  <View style={styles.View_147_1067}>
                    <Text style={styles.Text_147_1067}>Profit</Text>
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
            style={styles.ImageBackground_147_1068}
          />
        </View>
      </View>
      <View style={styles.View_147_1081}>
        <View style={styles.View_147_1082} />
        <View style={styles.View_147_1083}>
          <Text style={styles.Text_147_1083}>2021</Text>
        </View>
      </View>
      <View style={styles.View_147_897}>
        <View style={styles.View_147_898}>
          <View style={styles.View_147_899}>
            <View style={styles.View_147_900}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                }}
                style={styles.ImageBackground_147_901}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a564/55f2/ffae7f36f07b83a8cdec0f2879920c5e"
                }}
                style={styles.ImageBackground_147_902}
              />
            </View>
            <View style={styles.View_147_903}>
              <View style={styles.View_147_904}>
                <View style={styles.View_147_905}>
                  <View style={styles.View_147_906}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                      }}
                      style={styles.ImageBackground_147_907}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1860/930d/766a1c4d57d7c8570b8cb60fa8c7a757"
                }}
                style={styles.ImageBackground_147_909}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cbe/55c0/5b420d0f5eaee43f462cf5e378d87b5e"
          }}
          style={styles.ImageBackground_147_911}
        />
      </View>
      <View style={styles.View_147_913}>
        <View style={styles.View_147_914}>
          <View style={styles.View_147_915}>
            <View style={styles.View_147_916}>
              <View style={styles.View_147_917}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7700/430e/7f4f4e2a24b95659cc61a2284b35fc61"
                  }}
                  style={styles.ImageBackground_147_918}
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
          style={styles.ImageBackground_147_920}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c702/02e2ac9fd847d92881333f5a60dcbed7"
        }}
        style={styles.ImageBackground_147_894}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3d3/872a/147d3b498dbf051ab53e7e8730b53765"
        }}
        style={styles.ImageBackground_147_895}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91bb/31ce/ab3b71e6f7e09cf93dc4623fe5aa71db"
        }}
        style={styles.ImageBackground_147_896}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/863e/7f33/336da0df842936066495aacefb23b2c8"
        }}
        style={styles.ImageBackground_147_889}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f5/d557/763107bbec4271faa5e248d9a89c962c"
        }}
        style={styles.ImageBackground_147_891}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593b/faa0/74992f96b2e8db853eaf72e3f62fbf63"
        }}
        style={styles.ImageBackground_147_893}
      />
      <View style={styles.View_159_20}>
        <View style={styles.View_147_921}>
          <View style={styles.View_147_922}>
            <View style={styles.View_147_923}>
              <View style={styles.View_147_924}>
                <Text style={styles.Text_147_924}>REVENUE AND EXPENSE</Text>
              </View>
              <View style={styles.View_147_925} />
            </View>
            <View style={styles.View_147_926}>
              <Text style={styles.Text_147_926}>Amount in $</Text>
            </View>
            <View style={styles.View_147_927}>
              <Text style={styles.Text_147_927}>Timeline</Text>
            </View>
            <View style={styles.View_147_928}>
              <Text style={styles.Text_147_928}>Forecasted Revenue</Text>
            </View>
            <View style={styles.View_147_929}>
              <Text style={styles.Text_147_929}>Actual Revenue</Text>
            </View>
            <View style={styles.View_147_930}>
              <Text style={styles.Text_147_930}>Forecasted Expense</Text>
            </View>
            <View style={styles.View_147_931} />
            <View style={styles.View_147_932} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_147_933}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_147_934}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_147_935}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527d/0488/8d7e5cb66171f326b172d451df094bca"
              }}
              style={styles.ImageBackground_147_936}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_937}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_938}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_939}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_940}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_941}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_942}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_943}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_944}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_945}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_946}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8552/1960/71d8cdadb4981a3075a6506feddf8469"
              }}
              style={styles.ImageBackground_147_948}
            />
            <View style={styles.View_147_949} />
            <View style={styles.View_147_950} />
            <View style={styles.View_147_951} />
            <View style={styles.View_147_952} />
            <View style={styles.View_147_953} />
            <View style={styles.View_147_954} />
            <View style={styles.View_147_955} />
            <View style={styles.View_147_956} />
            <View style={styles.View_147_957} />
            <View style={styles.View_147_958} />
            <View style={styles.View_147_959} />
            <View style={styles.View_147_960} />
            <View style={styles.View_147_961} />
            <View style={styles.View_147_962} />
            <View style={styles.View_147_963} />
            <View style={styles.View_147_964} />
            <View style={styles.View_147_965} />
            <View style={styles.View_147_966} />
            <View style={styles.View_147_967} />
            <View style={styles.View_147_968} />
            <View style={styles.View_147_969} />
            <View style={styles.View_147_970} />
            <View style={styles.View_147_971} />
            <View style={styles.View_147_972} />
            <View style={styles.View_147_973}>
              <Text style={styles.Text_147_973}>1M</Text>
            </View>
            <View style={styles.View_147_974}>
              <Text style={styles.Text_147_974}>0</Text>
            </View>
            <View style={styles.View_147_975}>
              <Text style={styles.Text_147_975}>2M</Text>
            </View>
            <View style={styles.View_147_976}>
              <Text style={styles.Text_147_976}>3M</Text>
            </View>
            <View style={styles.View_147_977}>
              <Text style={styles.Text_147_977}>Dec 2021</Text>
            </View>
            <View style={styles.View_147_978}>
              <Text style={styles.Text_147_978}>Nov 2021</Text>
            </View>
            <View style={styles.View_147_979}>
              <Text style={styles.Text_147_979}>Oct 2021</Text>
            </View>
            <View style={styles.View_147_980}>
              <Text style={styles.Text_147_980}>Sep 2021</Text>
            </View>
            <View style={styles.View_147_981}>
              <Text style={styles.Text_147_981}>Aug 2021</Text>
            </View>
            <View style={styles.View_147_982}>
              <Text style={styles.Text_147_982}>Jul 2021</Text>
            </View>
            <View style={styles.View_147_983}>
              <Text style={styles.Text_147_983}>Jun 2021</Text>
            </View>
            <View style={styles.View_147_984}>
              <Text style={styles.Text_147_984}>May 2021</Text>
            </View>
            <View style={styles.View_147_985}>
              <Text style={styles.Text_147_985}>Apr 2021</Text>
            </View>
            <View style={styles.View_147_986}>
              <Text style={styles.Text_147_986}>Mar 2021</Text>
            </View>
            <View style={styles.View_147_987}>
              <Text style={styles.Text_147_987}>Feb 2021</Text>
            </View>
            <View style={styles.View_147_988}>
              <Text style={styles.Text_147_988}>Jan 2021</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_989}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_990}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
              }}
              style={styles.ImageBackground_147_991}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/587e/09c4/d02556a00b6e39d60eb47011d1c3ae2d"
              }}
              style={styles.ImageBackground_147_992}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_993}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_994}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
              }}
              style={styles.ImageBackground_147_995}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9c/831c/7f7d3c7510209b95bdd90cf0535ad2e4"
              }}
              style={styles.ImageBackground_147_996}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca6/761a/a81ee46e1c91021476f5053df584bd0b"
              }}
              style={styles.ImageBackground_147_997}
            />
            <View style={styles.View_147_1001}>
              <Text style={styles.Text_147_1001}>Actual Expense</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8e1/b1d2/1dbe7693c604ea0b21c88b9bf7746dc4"
              }}
              style={styles.ImageBackground_147_1002}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33bf/e6ef/7df7272b2148246c191c0d4486117197"
            }}
            style={styles.ImageBackground_147_1006}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52b3/2bce/943180e3ee3bcfc42d0833a499db1e6f"
            }}
            style={styles.ImageBackground_147_1007}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8eb/0149/a07a66d1290bfa132635c7927ac7628c"
            }}
            style={styles.ImageBackground_147_1008}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e503/2e7a/f8bacedd39734cb5cea95b2a5e42e79c"
            }}
            style={styles.ImageBackground_147_1009}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b05/e937/46f897e840ebaf728401d619b982b357"
            }}
            style={styles.ImageBackground_147_1010}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_1011}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_1012}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_1013}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a35/f363/5da64e7d83951cf7e9174afc16f8790b"
            }}
            style={styles.ImageBackground_147_1014}
          />
        </View>
        <View style={styles.View_159_16}>
          <Text style={styles.Text_159_16}>Profit</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6c4/ea5f/07e7b8a29f653bdb8335f165ec95f07e"
          }}
          style={styles.ImageBackground_159_17}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_147_694: {
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
  View_147_695: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    height: hp("288.9344262295082%"),
    minHeight: hp("288.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000004238552517361111%"),
    top: hp("19.12568306010929%"),
    backgroundColor: "rgba(39, 83, 98, 1)"
  },
  View_147_696: {
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
  ImageBackground_147_697: {
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
  ImageBackground_147_698: {
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
  ImageBackground_147_699: {
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
  ImageBackground_147_700: {
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
  ImageBackground_147_701: {
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
  ImageBackground_147_702: {
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
  View_147_743: {
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
  View_147_744: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_744: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_745: {
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
  View_147_746: {
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
  ImageBackground_147_747: {
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
  ImageBackground_147_748: {
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
  ImageBackground_147_749: {
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
  ImageBackground_147_750: {
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
  View_147_751: {
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
  View_147_752: {
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
  View_147_753: {
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
  View_147_754: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_147_754: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_755: {
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
  View_147_756: {
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
  View_147_757: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_147_757: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_758: {
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
  View_147_759: {
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
  View_147_760: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("1.0928961748633839%")
  },
  Text_147_760: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_761: {
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
  View_147_762: {
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
  View_147_763: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_147_763: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_764: {
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
  View_147_765: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_765: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_766: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("5.191256830601098%")
  },
  Text_147_766: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_767: {
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
  View_147_768: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_768: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_769: {
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
  View_147_770: {
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
  View_147_771: {
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
  View_147_772: {
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
  View_147_773: {
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
  View_147_774: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("0.6830601092896131%")
  },
  Text_147_774: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_775: {
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
  View_147_776: {
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
  View_147_777: {
    width: wp("6.527777777777779%"),
    minWidth: wp("6.527777777777779%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%"),
    top: hp("0.6830601092896131%")
  },
  Text_147_777: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_778: {
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
  View_147_779: {
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
  View_147_780: {
    width: wp("6.875000000000001%"),
    minWidth: wp("6.875000000000001%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222285%"),
    top: hp("1.0928961748633839%")
  },
  Text_147_780: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_781: {
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
  View_147_782: {
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
  View_147_783: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222143%"),
    top: hp("0.6830601092896131%")
  },
  Text_147_783: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_784: {
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
  ImageBackground_147_785: {
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
  ImageBackground_147_786: {
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
  ImageBackground_147_787: {
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
  View_147_788: {
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
  View_147_789: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_789: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_790: {
    width: wp("5.625%"),
    minWidth: wp("5.625%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: hp("5.191256830601098%")
  },
  Text_147_790: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_159_23: {
    width: wp("91.25%"),
    minWidth: wp("91.25%"),
    height: hp("74.59016393442623%"),
    minHeight: hp("74.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("229.37158469945356%")
  },
  View_147_791: {
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
  View_147_792: {
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
  View_147_793: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_793: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_794: {
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
  View_147_795: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.8055555555555545%"),
    top: hp("10.928961748633895%")
  },
  View_147_796: {
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
  View_147_797: {
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
  View_147_798: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_798: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_799: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.347222222222223%"),
    top: hp("13.387978142076463%")
  },
  View_147_800: {
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
  View_147_801: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_801: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_802: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.912568306010883%")
  },
  View_147_803: {
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
  View_147_804: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_804: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_805: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111125%"),
    top: hp("26.912568306010883%")
  },
  View_147_806: {
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
  View_147_807: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_807: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_808: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.3005464480874%")
  },
  View_147_809: {
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
  View_147_810: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_810: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_811: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("23.633879781420745%")
  },
  Text_147_811: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_812: {
    width: wp("10.34722540113661%"),
    minWidth: wp("10.34722540113661%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.222217983669704%"),
    top: hp("52.32240437158467%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_813: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.16666666666666%"),
    top: hp("59.153005464480856%")
  },
  Text_147_813: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_814: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.347222222222225%"),
    top: hp("59.153005464480856%")
  },
  Text_147_814: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_815: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.986111111111114%"),
    top: hp("59.153005464480856%")
  },
  Text_147_815: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_816: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.7361111111111%"),
    top: hp("59.153005464480856%")
  },
  Text_147_816: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_817: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%"),
    top: hp("59.153005464480856%")
  },
  Text_147_817: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_818: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.041666666666668%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_147_819: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.861111111111114%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_147_820: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.68055555555556%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_147_821: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5%"),
    top: hp("7.240437158469945%")
  },
  ImageBackground_147_822: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.31944444444444%"),
    top: hp("7.240437158469945%")
  },
  View_147_823: {
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
  View_147_824: {
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
  View_147_825: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("25.273224043715857%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_826: {
    width: wp("18.26388888888889%"),
    minWidth: wp("18.26388888888889%"),
    height: hp("4.098363782538742%"),
    minHeight: hp("4.098363782538742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("34.289617486338756%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_827: {
    width: wp("13.819444444444445%"),
    minWidth: wp("13.819444444444445%"),
    height: hp("4.098363261405236%"),
    minHeight: hp("4.098363261405236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("38.79781420765025%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_828: {
    width: wp("13.472225401136612%"),
    minWidth: wp("13.472225401136612%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.222217983669704%"),
    top: hp("47.81420765027323%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_829: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.013888888888886%"),
    top: hp("63.25136612021859%")
  },
  Text_147_829: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_830: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.99999999999999%"),
    top: hp("68.98907103825135%")
  },
  Text_147_830: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_831: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13888888888888%"),
    top: hp("68.98907103825135%")
  },
  Text_147_831: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_832: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.81944444444444%"),
    top: hp("8.333333333333343%")
  },
  Text_147_832: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_833: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.20833333333333%"),
    top: hp("12.841530054644807%")
  },
  Text_147_833: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_834: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.416666666666664%"),
    top: hp("21.857923497267734%")
  },
  Text_147_834: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_835: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.138888888888886%"),
    top: hp("26.502732240437155%")
  },
  Text_147_835: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_836: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.18055555555555%"),
    top: hp("35.38251366120218%")
  },
  Text_147_836: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_837: {
    width: wp("3.194444444444444%"),
    minWidth: wp("3.194444444444444%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.73611111111111%"),
    top: hp("39.89071038251362%")
  },
  Text_147_837: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_838: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%"),
    top: hp("48.9071038251366%")
  },
  Text_147_838: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_839: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26388888888889%"),
    top: hp("53.415300546448094%")
  },
  Text_147_839: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_840: {
    width: wp("0.0000010927846637463922%"),
    minWidth: wp("0.0000010927846637463922%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("7.240437158469945%")
  },
  View_147_841: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.36111111111111%"),
    top: hp("68.57923497267754%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_147_842: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.5%"),
    top: hp("68.57923497267754%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_147_843: {
    width: wp("45.90277777777778%"),
    minWidth: wp("45.90277777777778%"),
    height: hp("4.098368472740298%"),
    minHeight: hp("4.098368472740298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_159_22: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111112%"),
    top: hp("171.03825136612022%")
  },
  View_147_844: {
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
  View_147_845: {
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
  View_147_846: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_846: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_847: {
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
  View_147_848: {
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
  View_147_849: {
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
  View_147_850: {
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
  View_147_851: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106494479709205%"),
    top: hp("0%")
  },
  Text_147_851: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_852: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106494479709205%"),
    top: hp("4.508196721311464%")
  },
  Text_147_852: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_853: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106494479709205%"),
    top: hp("9.016393442622956%")
  },
  Text_147_853: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_854: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106494479709205%"),
    top: hp("13.52459016393442%")
  },
  Text_147_854: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_855: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106494479709205%"),
    top: hp("18.032786885245912%")
  },
  Text_147_855: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_856: {
    width: wp("10.347222222222221%"),
    minWidth: wp("10.347222222222221%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.540983606557376%")
  },
  Text_147_856: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_857: {
    width: wp("9.036573833889431%"),
    minWidth: wp("9.036573833889431%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3106494479709205%"),
    top: hp("27.04918032786884%")
  },
  Text_147_857: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_858: {
    width: wp("10.209259457058376%"),
    minWidth: wp("10.209259457058376%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13796488444010535%"),
    top: hp("31.557377049180303%")
  },
  Text_147_858: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_859: {
    width: wp("0.9722227520412869%"),
    minWidth: wp("0.9722227520412869%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("18.169398907103812%")
  },
  Text_147_859: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_860: {
    width: wp("0.6944474246766832%"),
    minWidth: wp("0.6944474246766832%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611106872558594%"),
    top: hp("38.25136612021856%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_861: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.805555555555554%"),
    top: hp("43.98907103825138%")
  },
  Text_147_861: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_862: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.86111111111111%"),
    top: hp("43.98907103825138%")
  },
  Text_147_862: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_863: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.81944444444444%"),
    top: hp("43.98907103825138%")
  },
  Text_147_863: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_864: {
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
  ImageBackground_147_865: {
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
  View_147_866: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("4.098361437437964%"),
    minHeight: hp("4.098361437437964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("15.710382513661216%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_867: {
    width: wp("2.0833334657880993%"),
    minWidth: wp("2.0833334657880993%"),
    height: hp("4.098361176871211%"),
    minHeight: hp("4.098361176871211%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("20.21857923497265%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_868: {
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
  View_147_869: {
    width: wp("1.388889021343655%"),
    minWidth: wp("1.388889021343655%"),
    height: hp("4.0983609163044585%"),
    minHeight: hp("4.0983609163044585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("29.234972677595636%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_870: {
    width: wp("1.3888919353485107%"),
    minWidth: wp("1.3888919353485107%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611106872558594%"),
    top: hp("33.7431693989071%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_871: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.416666666666668%"),
    top: hp("47.40437158469945%")
  },
  Text_147_871: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_872: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.19444444444444%"),
    top: hp("8.060109289617486%")
  },
  Text_147_872: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_873: {
    width: wp("2.638888888888889%"),
    minWidth: wp("2.638888888888889%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.652777777777782%"),
    top: hp("12.431693989071022%")
  },
  Text_147_873: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_874: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.777777777777775%"),
    top: hp("16.939890710382514%")
  },
  Text_147_874: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_875: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.388888888888886%"),
    top: hp("21.584699453551906%")
  },
  Text_147_875: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_876: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("25.81967213114754%")
  },
  Text_147_876: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_877: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("30.464480874316934%")
  },
  Text_147_877: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_878: {
    width: wp("3.0555555555555554%"),
    minWidth: wp("3.0555555555555554%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444446%"),
    top: hp("35.109289617486354%")
  },
  Text_147_878: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_879: {
    width: wp("2.013888888888889%"),
    minWidth: wp("2.013888888888889%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("39.34426229508196%")
  },
  Text_147_879: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_880: {
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
  ImageBackground_147_881: {
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
  View_147_882: {
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
  View_147_883: {
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
  View_147_884: {
    width: wp("4.583333333333333%"),
    minWidth: wp("4.583333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("51.09289617486337%")
  },
  Text_147_884: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_885: {
    width: wp("2.1527777777777777%"),
    minWidth: wp("2.1527777777777777%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.611111111111114%"),
    top: hp("50.68306010928961%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  View_147_886: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222222%"),
    top: hp("12.568306010928962%")
  },
  Text_147_886: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_887: {
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
  View_147_888: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.819444444444445%"),
    top: hp("12.295081967213115%")
  },
  Text_147_888: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_159_21: {
    width: wp("44.7222900390625%"),
    minWidth: wp("44.7222900390625%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("171.03825136612022%")
  },
  View_147_1015: {
    width: wp("44.7222900390625%"),
    minWidth: wp("44.7222900390625%"),
    height: hp("55.60109289617486%"),
    minHeight: hp("55.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_147_1016: {
    width: wp("23.40277777777778%"),
    minWidth: wp("23.40277777777778%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_1016: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1017: {
    width: wp("44.72222222222222%"),
    minWidth: wp("44.72222222222222%"),
    height: hp("51.63934426229508%"),
    minHeight: hp("51.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00006781684027856727%"),
    top: hp("3.961748633879779%")
  },
  View_147_1018: {
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
  ImageBackground_147_1019: {
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
  ImageBackground_147_1020: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("21.03825136612022%")
  },
  ImageBackground_147_1021: {
    width: wp("34.93055555555556%"),
    minWidth: wp("34.93055555555556%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.569376627604171%"),
    top: hp("13.38797814207652%")
  },
  ImageBackground_147_1022: {
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
  View_147_1023: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.249932183159721%"),
    top: hp("20.21857923497268%")
  },
  Text_147_1023: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1024: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041598849826393%"),
    top: hp("12.56830601092895%")
  },
  Text_147_1024: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1025: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041598849826393%"),
    top: hp("4.918032786885249%")
  },
  Text_147_1025: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1026: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.736043294270829%"),
    top: hp("26.91256830601091%")
  },
  Text_147_1026: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1027: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.071038251366119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291598849826393%"),
    top: hp("9.153005464480884%")
  },
  Text_147_1027: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1028: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.84715440538195%"),
    top: hp("41.939890710382514%")
  },
  Text_147_1028: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_1029: {
    width: wp("9.583301544189453%"),
    minWidth: wp("9.583301544189453%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194376627604171%"),
    top: hp("17.34972677595627%")
  },
  View_147_1035: {
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
  View_147_1036: {
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
  View_147_1037: {
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
  View_147_1038: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%")
  },
  Text_147_1038: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1039: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9166666666666643%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_1039: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1040: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972222222222221%"),
    top: hp("2.185792349726796%")
  },
  Text_147_1040: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1041: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.958333333333336%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_1041: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1042: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.874999999999993%"),
    top: hp("2.0491803278688394%")
  },
  Text_147_1042: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1043: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.93055555555555%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_1043: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1044: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.916666666666664%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_1044: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1045: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.90277777777778%"),
    top: hp("2.322404371584696%")
  },
  Text_147_1045: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1046: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.88888888888888%"),
    top: hp("2.459016393442596%")
  },
  Text_147_1046: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1047: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.874999999999993%"),
    top: hp("2.5956284153005527%")
  },
  Text_147_1047: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1048: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.861111111111107%"),
    top: hp("2.322404371584696%")
  },
  Text_147_1048: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1049: {
    width: wp("0.6944444444444444%"),
    minWidth: wp("0.6944444444444444%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.84722222222222%"),
    top: hp("2.322404371584696%")
  },
  Text_147_1049: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_1050: {
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
  View_147_1063: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.069444444444443%"),
    top: hp("50.54644808743171%")
  },
  View_147_1064: {
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
  View_147_1065: {
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
  View_147_1066: {
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
  View_147_1067: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_1067: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_1068: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    height: hp("1.2295081967213115%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.013888888888886%"),
    top: hp("50.75136612021856%")
  },
  View_147_1081: {
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
  View_147_1082: {
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
  View_147_1083: {
    width: wp("3.8194444444444446%"),
    minWidth: wp("3.8194444444444446%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8194444444444438%"),
    top: hp("1.775956284153004%")
  },
  Text_147_1083: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_897: {
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
  View_147_898: {
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
  View_147_899: {
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
  View_147_900: {
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
  ImageBackground_147_901: {
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
  ImageBackground_147_902: {
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
  View_147_903: {
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
  View_147_904: {
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
  View_147_905: {
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
  View_147_906: {
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
  ImageBackground_147_907: {
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
  ImageBackground_147_909: {
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
  ImageBackground_147_911: {
    width: wp("2.361111111111111%"),
    height: hp("3.563652663934426%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_147_913: {
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
  View_147_914: {
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
  View_147_915: {
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
  View_147_916: {
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
  View_147_917: {
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
  ImageBackground_147_918: {
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
  ImageBackground_147_920: {
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
  ImageBackground_147_894: {
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
  ImageBackground_147_895: {
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
  ImageBackground_147_896: {
    width: wp("1.1111111111111112%"),
    height: hp("0.6942655219406378%"),
    top: hp("14.301904563695356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.08333333333333%")
  },
  ImageBackground_147_889: {
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
  ImageBackground_147_891: {
    width: wp("2.083333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444444%")
  },
  ImageBackground_147_893: {
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
  View_159_20: {
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
  View_147_921: {
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
  View_147_922: {
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
  View_147_923: {
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
  View_147_924: {
    width: wp("25.208333333333332%"),
    minWidth: wp("25.208333333333332%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_147_924: {
    color: "rgba(39, 83, 98, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_925: {
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
  View_147_926: {
    width: wp("0.972222884496053%"),
    minWidth: wp("0.972222884496053%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("24.590163934426215%")
  },
  Text_147_926: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_927: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.12499999999999%"),
    top: hp("60.24590163934424%")
  },
  Text_147_927: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_928: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.09722222222222%"),
    top: hp("65.57377049180327%")
  },
  Text_147_928: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_929: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.97222222222222%"),
    top: hp("65.57377049180327%")
  },
  Text_147_929: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_930: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.68055555555555%"),
    top: hp("65.57377049180327%")
  },
  Text_147_930: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_931: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666668%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(13, 142, 190, 1)"
  },
  View_147_932: {
    width: wp("1.3888888888888888%"),
    minWidth: wp("1.3888888888888888%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.24999999999999%"),
    top: hp("65.57377049180327%"),
    backgroundColor: "rgba(238, 68, 36, 1)"
  },
  ImageBackground_147_933: {
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
  ImageBackground_147_934: {
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
  ImageBackground_147_935: {
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
  ImageBackground_147_936: {
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
  ImageBackground_147_937: {
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
  ImageBackground_147_938: {
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
  ImageBackground_147_939: {
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
  ImageBackground_147_940: {
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
  ImageBackground_147_941: {
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
  ImageBackground_147_942: {
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
  ImageBackground_147_943: {
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
  ImageBackground_147_944: {
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
  ImageBackground_147_945: {
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
  ImageBackground_147_946: {
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
  ImageBackground_147_947: {
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
  ImageBackground_147_948: {
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
  View_147_949: {
    width: wp("2.0833526717291937%"),
    minWidth: wp("2.0833526717291937%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_950: {
    width: wp("2.0833526717291937%"),
    minWidth: wp("2.0833526717291937%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.25%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_951: {
    width: wp("2.0833512147267657%"),
    minWidth: wp("2.0833512147267657%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.499999999999996%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_952: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.74999999999999%"),
    top: hp("24.18032786885246%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_953: {
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
  View_147_954: {
    width: wp("2.083352539274428%"),
    minWidth: wp("2.083352539274428%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.24999999999999%"),
    top: hp("25.683060109289613%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_955: {
    width: wp("2.083352539274428%"),
    minWidth: wp("2.083352539274428%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.49999999999999%"),
    top: hp("25.683060109289613%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_956: {
    width: wp("2.0833530690934925%"),
    minWidth: wp("2.0833530690934925%"),
    height: hp("27.18579234972678%"),
    minHeight: hp("27.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.75%"),
    top: hp("25%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_957: {
    width: wp("2.083348168267144%"),
    minWidth: wp("2.083348168267144%"),
    height: hp("20.3551912568306%"),
    minHeight: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("31.830601092896174%"),
    backgroundColor: "rgba(238, 68, 36, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_958: {
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
  View_147_959: {
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
  View_147_960: {
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
  View_147_961: {
    width: wp("2.0833532015482588%"),
    minWidth: wp("2.0833532015482588%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.708333333333336%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_962: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.958333333333336%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_963: {
    width: wp("2.08335280418396%"),
    minWidth: wp("2.08335280418396%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.208333333333332%"),
    top: hp("25.5464480874317%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_964: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.458333333333332%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_965: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.70833333333333%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_966: {
    width: wp("2.083355983098348%"),
    minWidth: wp("2.083355983098348%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.95833333333333%"),
    top: hp("21.038251366120207%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_967: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.20833333333333%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_968: {
    width: wp("2.0833547910054526%"),
    minWidth: wp("2.0833547910054526%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.45833333333333%"),
    top: hp("22.677595628415304%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_969: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.70833333333333%"),
    top: hp("24.18032786885246%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_970: {
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
  View_147_971: {
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
  View_147_972: {
    width: wp("2.0833537313673234%"),
    minWidth: wp("2.0833537313673234%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.45833333333333%"),
    top: hp("24.18032786885246%"),
    backgroundColor: "rgba(13, 142, 190, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_147_973: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("37.84153005464479%")
  },
  Text_147_973: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_974: {
    width: wp("1.1805555555555556%"),
    minWidth: wp("1.1805555555555556%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.194444444444443%"),
    top: hp("51.50273224043717%")
  },
  Text_147_974: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_975: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("24.18032786885246%")
  },
  Text_147_975: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_976: {
    width: wp("1.4583333333333333%"),
    minWidth: wp("1.4583333333333333%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.916666666666667%"),
    top: hp("10.51912568306011%")
  },
  Text_147_976: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_977: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.875%"),
    top: hp("54.918032786885234%")
  },
  Text_147_977: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_978: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555555555556%"),
    top: hp("54.918032786885234%")
  },
  Text_147_978: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_979: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.375%"),
    top: hp("54.918032786885234%")
  },
  Text_147_979: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_980: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.125%"),
    top: hp("54.918032786885234%")
  },
  Text_147_980: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_981: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.80555555555556%"),
    top: hp("54.918032786885234%")
  },
  Text_147_981: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_982: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.625%"),
    top: hp("54.918032786885234%")
  },
  Text_147_982: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_983: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.375%"),
    top: hp("54.918032786885234%")
  },
  Text_147_983: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_984: {
    width: wp("3.75%"),
    minWidth: wp("3.75%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555555%"),
    top: hp("54.918032786885234%")
  },
  Text_147_984: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_985: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("54.918032786885234%")
  },
  Text_147_985: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_986: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.555555555555554%"),
    top: hp("54.918032786885234%")
  },
  Text_147_986: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_987: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: hp("54.918032786885234%")
  },
  Text_147_987: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_988: {
    width: wp("3.5416666666666665%"),
    minWidth: wp("3.5416666666666665%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.125%"),
    top: hp("54.918032786885234%")
  },
  Text_147_988: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_989: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.26388888888889%"),
    top: hp("18.169398907103812%")
  },
  ImageBackground_147_990: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.76388888888889%"),
    top: hp("22.131147540983605%")
  },
  ImageBackground_147_991: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.013888888888886%"),
    top: hp("21.038251366120207%")
  },
  ImageBackground_147_992: {
    width: wp("5.3125%"),
    minWidth: wp("5.3125%"),
    height: hp("1.0275524170672308%"),
    minHeight: hp("1.0275524170672308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.73611111111111%"),
    top: hp("22.131147540983605%")
  },
  ImageBackground_147_993: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.48611111111111%"),
    top: hp("23.907103825136616%")
  },
  ImageBackground_147_994: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.05555555555556%"),
    top: hp("26.229508196721298%")
  },
  ImageBackground_147_995: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.23611111111111%"),
    top: hp("23.49726775956283%")
  },
  ImageBackground_147_996: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.097222222222218%"),
    top: hp("24.86338797814207%")
  },
  ImageBackground_147_997: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: hp("65.57377049180327%")
  },
  View_147_1001: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.34722222222221%"),
    top: hp("65.57377049180327%")
  },
  Text_147_1001: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_1002: {
    width: wp("2.986111111111111%"),
    minWidth: wp("2.986111111111111%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.31944444444444%"),
    top: hp("65.57377049180327%")
  },
  ImageBackground_147_1006: {
    width: wp("11.666666666666666%"),
    minWidth: wp("11.666666666666666%"),
    height: hp("2.397786593828045%"),
    minHeight: hp("2.397786593828045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.458333333333332%"),
    top: hp("25.068306010928964%")
  },
  ImageBackground_147_1007: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%"),
    top: hp("26.092896174863398%")
  },
  ImageBackground_147_1008: {
    width: wp("11.597222222222223%"),
    minWidth: wp("11.597222222222223%"),
    height: hp("3.781844227691817%"),
    minHeight: hp("3.781844227691817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.23611111111111%"),
    top: hp("19.467213114754088%")
  },
  ImageBackground_147_1009: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.51388888888889%"),
    top: hp("21.311475409836078%")
  },
  ImageBackground_147_1010: {
    width: wp("18.819444444444443%"),
    minWidth: wp("18.819444444444443%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.86111111111111%"),
    top: hp("35.519125683060096%")
  },
  ImageBackground_147_1011: {
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
  ImageBackground_147_1012: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.625%"),
    top: hp("36.74863387978142%")
  },
  ImageBackground_147_1013: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.875000000000004%"),
    top: hp("34.83606557377048%")
  },
  ImageBackground_147_1014: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.125%"),
    top: hp("34.562841530054655%")
  },
  View_159_16: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.95833333333333%"),
    top: hp("65.43715846994537%")
  },
  Text_159_16: {
    color: "rgba(35, 37, 52, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_159_17: {
    width: wp("2.2916666666666665%"),
    minWidth: wp("2.2916666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.625%"),
    top: hp("65.57377049180327%")
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
