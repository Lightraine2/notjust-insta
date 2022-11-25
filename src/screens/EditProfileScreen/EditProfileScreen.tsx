import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form'
import user from '../../assets/data/user.json'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { IUser } from '../../types/models';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio'
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
    control: Control<IEditableUser, object>;
    label: string,
    name: IEditableUserField,
    multiline?: boolean;
}

const CustomInput = ({
    control, 
    name, 
    label, 
    multiline = false
    }: ICustomInput) => (
    <Controller 
        control={control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Label</Text>
            <TextInput 
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.input} 
            placeholder='hello' 
            multiline={multiline}
            />
        </View>
        )}
    />
   
)



const EditProfileScreen = () => {

    const {control, handleSubmit} = useForm<IEditableUser>();

    const onSubmit = (data: IEditableUser) => {
        console.warn('button submit', data)
    }

    return (
        <View style={styles.page}>
            <Image source={{uri: user.image}} style={styles.avatar} />
            <Text style={styles.textButton}>Change Profile Photo</Text>
            
            <CustomInput name="name" control={control} label='Name'/>
            <CustomInput name= "username" control={control} label='Username'/>
            <CustomInput name="website" control={control} label='Website'/>
            <CustomInput name="bio" control={control} label='Bio' multiline/>

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
        flex: 1,
        borderColor: colors.border,
        borderWidth: 1
    }
});

export default EditProfileScreen;