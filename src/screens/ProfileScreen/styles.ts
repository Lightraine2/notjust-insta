import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        justifyContent: "space-between",
        marginVertical: 10
    },
    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
    },
    numberContainer: {
        alignItems: 'center'
    }, 
    numberText: {
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,
        color: colors.black
    },
    userName: {
        fontWeight: fonts.weight.semi,
        color: colors.black
    },
    userBio: {

    }
})

export default styles