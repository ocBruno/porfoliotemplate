import { StyleSheet } from 'react-native';

export const themeCardStyles = StyleSheet.create({
  themeCardContainer: {
    zIndex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    paddingVertical: 21,
    paddingHorizontal: 21,
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: 'solid',
    borderColor: 'rgb(149, 200, 255)',
    shadowColor: 'rgb(168, 210, 255)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  themeCardHeader: {
    fontSize: 15,
    marginBottom: 3,
  },
  themeCardDescription: {
    fontSize: 12,
    marginBottom: 20,
  },
  themeCardSingleLineInput: {
    marginBottom: 10,
    minWidth: 180,
    borderColor: 'gray',
    borderRadius: 3,
    borderWidth: 1,
  },
  themeCardMultiLineInput: {
    borderRadius: 3,
    textAlignVertical: 'top',
    marginBottom: 20,
    minWidth: 180,
    borderColor: 'rgb(120, 120, 120)',
    borderWidth: 1,
  },
});
