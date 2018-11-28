import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
const usersMap = props => {
    let userLocationMarker = null;

    if(props.userLocation) {
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />
    }
    return(
        <View style={styles.mapContainer}>
            <MapView 
                initialRegion={{
                latitude: 35.1843,
                longitude: -111.654011,
                latitudeDelta: .02,
                longitudeDelta: .02,
              }}
              region={props.userLocation}
            style={styles.map}>
                {userLocationMarker}
            <MapView.Circle
            center={
                {latitude:35.1775, longitude:-111.654011}
            }
            radius={500}
            strokeWidth={1}
            strokeColor="#000000"
            fillColor="rgba(241,196,15,0.5)"
            />
            <MapView.Circle
            center={
                {latitude:35.1875, longitude:-111.654011}
            }
            radius={250}
            strokeWidth={1}
            strokeColor="#000000"
            fillColor="rgba(0,255,51,0.5)"
            />
            <MapView.Polygon
                coordinates={[
                    {latitude: 35.1843, longitude: -111.660000},
                    {latitude: 35.1930, longitude: -111.667000},
                    {latitude: 35.1875, longitude: -111.664000},
                    {latitude: 35.1843, longitude: -111.667000},
                    {latitude: 35.1843, longitude: -111.660000}
                ]}
                strokeColor="#000"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={1}
            />

            </MapView>
            
        </View>
    );
};


const styles = StyleSheet.create({
    mapContainer:{
        width: '100%',
        height: 500,
        marginTop: 20
    },
    map:{
        width: '100%',
        height: '100%'
    }
});

export default usersMap;