import { ScrollView, View, Text, Image } from "react-native"
import styles from "./styles"
import user from '../../assets/data/user.json'
import Button from "../../components/Button"

const ProfileHeader = () => {
    return (
        <ScrollView style={styles.root}>
            <View style={styles.headerRow}>
                {/* Profile image */}
                <Image source={{uri: user.image}} style={styles.avatar} />
                {/* Posts, folllowers, stats */}
                <View style={styles.numberContainer}>
                <Text style={styles.numberText}>98</Text>
                <Text>Posts</Text>
                </View>
                <View style={styles.numberContainer}>
                <Text style={styles.numberText}>98</Text>
                <Text>Followers</Text>
                </View>
                <View style={styles.numberContainer}>
                <Text style={styles.numberText}>98</Text>
                <Text>Following</Text>
                </View>
            </View>

            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userBio}>{user.bio}</Text>

        <View style={{flexDirection: 'row'}}>
        <Button 
        text="Edit Profile" 
        onPress={() => console.warn("On edit profile")} 
        />
        
        <Button text="Edit Profile" onPress={() => console.warn("On edit profile")} />

        </View>
        
        {/* gridview posts */}
    
        
        </ScrollView>
    )
}

export default ProfileHeader