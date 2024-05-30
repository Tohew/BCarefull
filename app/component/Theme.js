import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Fonts from '../../assets/fonts/Fonts';
import { color } from '@rneui/base';

export const BCarefulTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(120,100,234)',
    secondary: 'rgb(234,121,58)',
    background: 'rgb(250,250,255)',
    light: 'rgb(230, 226, 254)',
    dark: 'rgb(67,46,156)',
    green: 'rgb(14,170,114)',
    red: 'rgb(234,69,58)',
  },


};

export const BCarefulTheme2 = createTheme(BCarefulTheme);

export const style = StyleSheet.create(
  {
    // button
    btn: {
      backgroundColor: BCarefulTheme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: 16,
    },

    btnSub: {
      backgroundColor: BCarefulTheme.colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: 16,
    },

    btnOutline: {
      borderColor: BCarefulTheme.colors.primary,
      borderWidth: 3,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 'auto',
      backgroundColor: 'white',
    },

    btnOutlineSub: {
      borderColor: BCarefulTheme.colors.secondary,
      borderWidth: 3,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 6,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 'auto',
      backgroundColor: 'white',
    },

    btnDisable: {
      backgroundColor: '#D3D3D3',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: 16,
    },

    card: {
      // backgroundColor: 'red',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: BCarefulTheme.colors.primary,
    },
    cardLeft: {
      margin: 10,
      width: '90%',
      marginStart: 0,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderLeftWidth: 0,
      borderTopStartRadius: 0,
      borderBottomStartRadius: 0,
      borderColor: BCarefulTheme.colors.primary,
    },
    cardRight: {
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      alignSelf: 'flex-end',
      margin: 10,
      width: '90%',
      marginEnd: 0,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderRightWidth: 0,
      borderTopEndRadius: 0,
      borderBottomEndRadius: 0,
      borderColor: BCarefulTheme.colors.primary,
    },

    // Text
    h1: {
      fontFamily: Fonts.bold,
      fontSize: 28,
      color: '#000000',
    },
    h2: {
      fontFamily: Fonts.bold,
      fontSize: 24,
      color: '#000000',
    },
    h3: {
      fontFamily: Fonts.bold,
      fontSize: 20,
      color: '#000000',
    },
    h4: {
      fontFamily: Fonts.bold,
      fontSize: 18,
      color: '#000000',
    },
    h5: {
      fontFamily: Fonts.semiBold,
      fontSize: 22,
      color: '#000000',
    },
    h6: {
      fontFamily: Fonts.semiBold,
      fontSize: 16,
      color: '#000000',
    },
    h7: {
      fontFamily: Fonts.bold,
      fontSize: 16,
      color: '#000000',
    },
    h8: {
      fontFamily: Fonts.bold,
      fontSize: 14,
      color: '#000000',
    },
    t1: {
      fontFamily: Fonts.regular,
      fontSize: 16,
      color: '#000000',
    },
    italic: {
      fontFamily: Fonts.italic,
    },
    t2: {
      fontFamily: Fonts.regular,
      fontSize: 14,
      color: '#000000',
    },
    t3: {
      fontFamily: Fonts.regular,
      fontSize: 12,
      color: '#000000',
    },
    t4: {
      fontFamily: Fonts.light,
      fontSize: 14,
      color: '#000000',
    },
    t5: {
      fontFamily: Fonts.light,
      fontSize: 12,
      color: '#000000',
    },

    //Text color
    danger: {
      color: 'red',
    },
    warning: {
      color: 'gold',
    },
    primary: {
      color: BCarefulTheme.colors.primary,
    },
    sub: {
      color: BCarefulTheme.colors.secondary,
    },
    white: {
      color: 'white',
    },
    black: {
      color: 'black',
    },
    grey: {
      color: 'grey',
    },
    dark: {
      color: BCarefulTheme.colors.dark,
    },
    green: {
      color: BCarefulTheme.colors.green,
    },
    red: {
      color: BCarefulTheme.colors.red,
    },

    //Input box
    input: {
      fontSize: 16,
      borderWidth: 3,
      borderRadius: 10,
      borderColor: BCarefulTheme.colors.primary,
      backgroundColor: BCarefulTheme.colors.light,
      fontFamily: Fonts.regular,
      paddingHorizontal: 12,
      flexGrow: 1,
      paddingVertical: 8,
    },

    input2: {
      fontSize: 16,
      borderWidth: 3,
      borderRadius: 0,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderColor: BCarefulTheme.colors.primary,
      backgroundColor: BCarefulTheme.colors.light,
      fontFamily: Fonts.regular,
      paddingHorizontal: 12,
      flexGrow: 1,
      paddingVertical: 8,
    },

    //regular style
    center: {
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
    },
    spacebtw: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    upperCase: {
    textTransform: 'uppercase',
    },

    line: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
      gap: 12,
      flexGrow: 1,
  },

    p0: { padding: 0 },
    p1: { padding: 2 },
    p2: { padding: 4 },
    p3: { padding: 8 },
    p4: { padding: 12 },
    p5: { padding: 16 },
    p6: { padding: 20 },
    px0: { paddingHorizontal: 0 },
    px1: { paddingHorizontal: 2 },
    px2: { paddingHorizontal: 4 },
    px3: { paddingHorizontal: 8 },
    px4: { paddingHorizontal: 12 },
    px5: { paddingHorizontal: 16 },
    px6: { paddingHorizontal: 20 },
    py0: { paddingVertical: 0 },
    py1: { paddingVertical: 2 },
    py2: { paddingVertical: 4 },
    py3: { paddingVertical: 8 },
    py4: { paddingVertical: 12 },
    py5: { paddingVertical: 16 },
    py6: { paddingVertical: 20 },
    pt0: { paddingTop: 0 },
    pt1: { paddingTop: 2 },
    pt2: { paddingTop: 4 },
    pt3: { paddingTop: 8 },
    pt4: { paddingTop: 12 },
    pt5: { paddingTop: 16 },
    pt6: { paddingTop: 20 },
    ps0: { paddingStart: 0 },
    ps1: { paddingStart: 2 },
    ps2: { paddingStart: 4 },
    ps3: { paddingStart: 8 },
    ps4: { paddingStart: 12 },
    ps5: { paddingStart: 16 },
    ps6: { paddingStart: 20 },
    pe0: { paddingEnd: 0 },
    pe1: { paddingEnd: 2 },
    pe2: { paddingEnd: 4 },
    pe3: { paddingEnd: 8 },
    pe4: { paddingEnd: 12 },
    pe5: { paddingEnd: 16 },
    pe6: { paddingEnd: 20 },
    pb0: { paddingBottom: 0 },
    pb1: { paddingBottom: 2 },
    pb2: { paddingBottom: 4 },
    pb3: { paddingBottom: 8 },
    pb4: { paddingBottom: 12 },
    pb5: { paddingBottom: 16 },
    pb6: { paddingBottom: 20 },
    m0: { margin: 0 },
    m1: { margin: 2 },
    m2: { margin: 4 },
    m3: { margin: 8 },
    m4: { margin: 12 },
    m5: { margin: 16 },
    m6: { margin: 20 },
    mx0: { marginHorizontal: 0 },
    mx1: { marginHorizontal: 2 },
    mx2: { marginHorizontal: 4 },
    mx3: { marginHorizontal: 8 },
    mx4: { marginHorizontal: 12 },
    mx5: { marginHorizontal: 16 },
    mx6: { marginHorizontal: 20 },
    my0: { marginVertical: 0 },
    my1: { marginVertical: 2 },
    my2: { marginVertical: 4 },
    my3: { marginVertical: 8 },
    my4: { marginVertical: 12 },
    my5: { marginVertical: 16 },
    my6: { marginVertical: 20 },
    mt0: { marginTop: 0 },
    mt1: { marginTop: 2 },
    mt2: { marginTop: 4 },
    mt3: { marginTop: 8 },
    mt4: { marginTop: 12 },
    mt5: { marginTop: 16 },
    mt6: { marginTop: 20 },
    ms0: { marginStart: 0 },
    ms1: { marginStart: 2 },
    ms2: { marginStart: 4 },
    ms3: { marginStart: 8 },
    ms4: { marginStart: 12 },
    ms5: { marginStart: 16 },
    ms6: { marginStart: 20 },
    me0: { marginEnd: 0 },
    me1: { marginEnd: 2 },
    me2: { marginEnd: 4 },
    me3: { marginEnd: 8 },
    me4: { marginEnd: 12 },
    me5: { marginEnd: 16 },
    me6: { marginEnd: 20 },
    mb0: { marginBottom: 0 },
    mb1: { marginBottom: 2 },
    mb2: { marginBottom: 4 },
    mb3: { marginBottom: 8 },
    mb4: { marginBottom: 12 },
    mb5: { marginBottom: 16 },
    mb6: { marginBottom: 20 },
    pxauto: { paddingHorizontal: 'auto' },
    pyauto: { paddingVertical: 'auto' },
    ptauto: { paddingTop: 'auto' },
    psauto: { paddingStart: 'auto' },
    peauto: { paddingEnd: 'auto' },
    pbauto: { paddingBottom: 'auto' },
    mauto: { margin: 'auto' },
    mxauto: { marginHorizontal: 'auto' },
    myauto: { marginVertical: 'auto' },
    mtauto: { marginTop: 'auto' },
    msauto: { marginStart: 'auto' },
    meauto: { marginEnd: 'auto' },
    mbauto: { marginBottom: 'auto' },
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },

    seperateHorizontal: {
      justifyContent: 'center',
      borderTopWidth: 2,
      borderTopColor: BCarefulTheme.colors.primary,
      alignItems: 'center',
      margin: 12,
      marginHorizontal: 8,
    },

    end: {
      // justifyContent: 'flex-end',
      textAlign: 'right',

    }
  }
)