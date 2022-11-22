import {View, Pressable, Text, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface IButton {
    text?: string;
    onPress?: () => void
}

const Button = ({ text = "", onPress = () => {}}: IButton) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 5,

        padding: 5,

        alignItems: 'center',

        text: {
            color: colors.black,
            fontWeight: fonts.weight.semi
        }

    },
    text: {}
})

export default Button;