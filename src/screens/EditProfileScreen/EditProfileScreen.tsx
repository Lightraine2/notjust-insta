import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form'
import {launchImageLibrary} from 'react-native-image-picker'
import user from '../../assets/data/user.json'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { IUser } from '../../types/models';
import * as ImagePicker from 'expo-image-picker'


const URL_REGEX =
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio'
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
    control: Control<IEditableUser, object>;
    label: string,
    name: IEditableUserField,
    multiline?: boolean;
    rules?: object;
}

const CustomInput = ({
    control, 
    name, 
    label, 
    multiline = false,
    rules= {}
    }: ICustomInput) => (
    <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
            
            return (
            <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
            <TextInput 
            autoCapitalize='none'
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[styles.input, {borderColor: error ? colors.error : colors.border}]} 
            placeholder=' ' 
            multiline={multiline}
            />
            {error && <Text style={{color: colors.error}}>
            {error.message || 'Error'}
            </Text>}
            </View>
        </View>
        )
    }}
    />
   
)



const EditProfileScreen = () => {

    const [image, setImage] = useState(null)

    const {
        control, 
        handleSubmit, 
        formState: {errors}
        } = useForm<IEditableUser>({
            defaultValues: {
                name: user.name,
                username: user.username,
                website: user.website,
                bio: user.bio
            }
        });

    const onSubmit = (data: IEditableUser) => {
        console.warn('button submit', data)
    }

    // React native without expo
    // const onChangePhoto = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo'},
    //          ({didCancel, errorCode, errorMessage, assets}) => {
    //         if (!didCancel && !errorCode) {
    //             console.log(assets)
    //         }

    //     })
    // }

    const onChangePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({

            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        });        

        console.log(result);

        if (!result.cancelled) {
            setImage(result.cancelled)
        }

    }


    return (
        <View style={styles.page}>
            <Image source={{uri: user.image}} style={styles.avatar} />
            <Text style={styles.textButton} onPress={onChangePhoto}>
                Change Profile Photo   
            </Text>
            
            <CustomInput name="name" control={control} label='Name' rules={{required: 'name is required - custom error message'}}/>

            <CustomInput name= "username" control={control} label='Username' rules={{required: 'username is required', minLength: {value:3, message: 'minlength is 3 custom message'}}}/>

            {/* using custom regex cares about first letter capital*/}
            <CustomInput name="website" control={control} label='Website' rules={{pattern: { value: URL_REGEX, message: 'invalid url'}}}/>

            <CustomInput name="bio" control={control} label='Bio' multiline rules={{required: 'bio required', maxLength: { value: 200, message: 'bio has maxlength 200'}}}/>

            <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
                Submit
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        padding: 10

    },
    avatar: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 100
    },
    textButton: {
        color: colors.primary,
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,
        margin: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    label: {
        width: 75
    },
    input: {
        borderColor: colors.border,
        borderWidth: 1
    }
});

export default EditProfileScreen;