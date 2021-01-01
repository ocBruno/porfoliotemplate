import React, { ReactNode, useRef } from 'react';
import { Animated, StyleSheet, StyleSheetProperties, Text, View, PanResponder } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: 'rgb(168, 210, 255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxHeight: 300,
    maxWidth: 240,
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: 'solid',
    borderColor: 'rgb(149, 200, 255)'
  },
  cardTitle: {
    flex: 0.6,
    color: '#141212',
    fontSize: 9
  },
  cardHeader: {
    flex: 0.6,
    color: '#0f0404',
    fontSize: 13,
    fontWeight: 'bold'
  },
  subHeader: {
    flex: 0.6,
    color: '#0f0404',
    fontSize: 12,
  },
  cardContent: {
    flex: 2.4,
    color: '#0f0404',
    fontSize: 11
  }
});
interface InfoCardProps {
  topbarTitle: string;
  header: string;
  subHeader: string;
  children: ReactNode;
} 

export const InfoCard: React.FunctionComponent<InfoCardProps> =  (props: InfoCardProps) => {

    return(
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{props.topbarTitle}</Text>
            <Text style={styles.cardHeader}>{props.header}</Text>
            <Text style={styles.subHeader}>{props.subHeader}</Text>
            <Text style={styles.cardContent}>{props.children}</Text>
        </View>
    )
}