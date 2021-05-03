import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

const ProfileView = (profile = {}) => {
    return (
        <View style={styles.card}>


            <View style={styles.profileRowItem}>
                <View accessible={true} style={styles.pictureDetails}>
                    <Text accessibilityLabel={"Person Name: " + profile.name} style={{ fontWeight: 'bold' }}>{profile.name}</Text>
                </View>
            </View>

            <View style={styles.profileRowItem}>

                <View accessible={true} accessibilityLabel={profile.name + "'s Date of Birth"} style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>dob</Text>
                    <Text>{profile.dob}</Text>
                </View>
            </View>
           <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s Age"}style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>age</Text>
                    <Text>{profile.age}</Text>
                </View>
            </View>
           <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s Street Address"}style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>streetAddress</Text>
                    <Text style>{profile.streetAddress}</Text>
                </View>
            </View>

            <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s City Address"} style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>cityAddress</Text>
                    <Text>{profile.cityAddress}</Text>
                </View>
            </View>
             <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s State Address"} style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>stateAddress</Text>
                    <Text>{profile.stateAddress}</Text>
                </View>

            </View>
            <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s Veteran Status"} style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>isVeteran</Text>
                    <Text>{profile.isVeteran}</Text>
                </View>

            </View>
            <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s Email"} style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <Text>{profile.email}</Text>
                </View>

            </View>
            <View style={styles.profileRowItem}>
                <View accessible={true} accessibilityLabel={profile.name + "'s Phone Number"} style={styles.textDetails}>
                    <Text style={{ fontWeight: 'bold' }}>phone</Text>
                    <Text>{profile.phone}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: Metrics.doubleBaseMargin,
        width: Metrics.screenWidth * .9,
        borderWidth: Metrics.borderWidth,
        borderRadius: Metrics.buttonRadius,
        backgroundColor: 'white'
    },

    pictureView: {
        marginLeft: Metrics.marginHorizontal,
        marginRight: Metrics.marginHorizontal,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    picture: {
        height: Metrics.images.large,
        width: Metrics.images.large,
        borderRadius: Metrics.images.large * 0.5,
        borderWidth: 1,
        borderColor: Colors.psudark,
    },

    pictureDetails: {
        flexDirection: 'column',
        marginLeft: Metrics.marginHorizontal,
        marginRight: Metrics.marginHorizontal,
    },

    textDetails: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    profileRowItem: {
        marginTop: Metrics.marginVertical,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default ProfileView;