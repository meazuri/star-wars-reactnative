import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { PLANET_DETAIl } from '../model/planetdetail';
import { Card, Icon } from 'react-native-elements';
class PlanetDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: PLANET_DETAIl
        }
    }

    render() {

        const { navigation } = this.props.navigation;
        const { params } = this.props.route;

        if (params != null) {
            return (

                <Card
                    title={this.state.detail.name}>
                    <Text style={{ marginBottom: 10 }}>Orbital Period : {this.state.detail.orbital_period}</Text>
                    <Text style={{ marginBottom: 10 }}>Rotation Period : {this.state.detail.rotation_period}</Text>
                    <Text style={{ marginBottom: 10 }}>Diameter : {this.state.detail.diameter}</Text>
                    <Text style={{ marginBottom: 10 }}>Climate : {this.state.detail.climate}</Text>
                    <Text style={{ marginBottom: 10 }}>Gravity : {this.state.detail.gravity}</Text>
                    <Text style={{ marginBottom: 10 }}>Terrain : {this.state.detail.terrain}</Text>
                    <Text style={{ marginBottom: 10 }}>Surface Water : {this.state.detail.surface_water}</Text>
                    <Text style={{ marginBottom: 10 }}>Population : {this.state.detail.population}</Text>
                </Card>
            );
        } else {
            return (

                <View><Text>Something went wrong ! </Text></View>

            );
        }

    }
}
export default PlanetDetail;