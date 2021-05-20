import React from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';
// galio components
import { Accordion, Text, Block, Button, Card, NavBar, Input, Icon } from 'galio-framework';

import theme from '../theme';

const { width } = Dimensions.get('screen');

const data =[ [
  { title: "Anatomy", content: "Lorem ipsum dolor sit amet", 
    icon: {
      name: 'keyboard-arrow-up',
      family: 'material',
      size: 16,
    } 
 },
 { title: "1st Chapter", content: "Lorem ipsum dolor sit amet" },
  { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
  { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ],
  [
    { title: "Medicine", content: "Lorem ipsum dolor sit amet", 
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      } 
  },
  { title: "1st Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ],
  [
    { title: "Surgery", content: "Lorem ipsum dolor sit amet", 
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      } 
  },
  { title: "1st Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ],
  [
    { title: "Radiology", content: "Lorem ipsum dolor sit amet", 
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      } 
  },
  { title: "1st Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ],
  [
    { title: "Pediatrics", content: "Lorem ipsum dolor sit amet", 
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 16,
      } 
  },
  { title: "1st Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "2nd Chapter", content: "Lorem ipsum dolor sit amet" },
    { title: "3rd Chapter", content: "Lorem ipsum dolor sit amet" }
  ]];


const Library = props => (
  <Block flex safe>
    <StatusBar hidden={false} barStyle="dark-content" />
    <Block flex space="between" center style={styles.absolute}>
     <NavBar
          title="Library"
          left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
    </Block>
    <Block style = {{marginTop: theme.SIZES.BASE * 4}}>
      <ScrollView contentContainerStyle={styles.scrollviewcards}>
        <Block flex space="between">
        {data && data.map((ele, id) => (
            <Accordion dataArray={ele} style={styles.accordion}/>
        ))}
        </Block>
      </ScrollView>
    </Block>
  </Block>
      
);

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    bottom: 0,
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
  },
  scrollviewcards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  accordion: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.5,
    elevation: theme.SIZES.BASE / 2,
  },
  button: {
    marginBottom: 20,
  }
});

export default Library;
