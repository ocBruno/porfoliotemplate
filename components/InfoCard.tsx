import React, { useRef } from 'react';
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
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 300,
    borderWidth: 1,
    borderRadius: 9,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderStyle: 'solid',
    borderColor: 'rgb(149, 200, 255)'
  },
  cardTitle: {
    flex: 2,
    color: '#141212',
    fontSize: 9
  },
  cardHeader: {
    flex: 2,
    color: '#0f0404',
    fontSize: 14
  },
  cardContent: {
    flex: 6,
    color: '#0f0404',
    fontSize: 11
  }
});
interface InfoCardProps {
  title: string;
  header: string;
  content: string;
} 

export const InfoCard: React.FunctionComponent<InfoCardProps> =  (props: InfoCardProps) => {

    return(
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.cardHeader}>{props.header}</Text>
            <Text style={styles.cardContent}>{props.content}</Text>
        </View>
    )
}