import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PLANETS } from '../model/planets';


class Planet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planets: PLANETS
        };

    }

    render() {
        const renderPlanetItem = ({ item, index }) => {
            return (
                < ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.terrain + ", " + item.population + " population"}
                    leftAvatar={{
                        source: require('../assets/images/robot-dev.png')

                    }}
                    hideChevron={false}
                    onPress={() => navigation.navigate('PlanetDetail', { detail: item.url })}

                />
            );


        }

        const { navigation } = this.props;
        return (
            <FlatList
                data={this.state.planets.results}
                renderItem={renderPlanetItem}
                keyExtractor={item => item.url.toString()}
            />
        );
    }

}

export default Planet;