import { StyleSheet } from "react-native"
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
    post: {
      marginTop: 20
    },
    image: {
      width: '100%',
      aspectRatio: 1
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25, 
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black
    },
    threeDots: {
      marginLeft: 'auto'
    },
    footer: {
      padding: 10
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5
    },
    icon: {
      marginHorizontal: 5
    },
    text: {
      color: colors.black,
      lineHeight: 18,
    },
    lightText: {
      color: colors.lightgrey
    },
    bold: {
      fontWeight: fonts.weight.bold
    },
    commentText: {
      color: colors.black,
      flex: 1,
      lineHeight: 18,
    },
    comment: {
      flexDirection: 'row',
      alignItems: 'center',
    }
  })

  export default styles;