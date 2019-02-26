import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import PropTypes from 'prop-types'
import Utils from '@utils'

const styles = {}

export default class ListItem extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <View style={[styles.imageBackgroundCnt, { minHeight: 50 }]}>
                <View style={[styles.flex, { padding: Utils.Style.UNIT * 2 }]}>
                    {
                        this.state.comments ?
                            this.state.comments
                        :
                            <Text style={styles.loadingText}>Chargement des commentaires...</Text>
                    }
                </View>
                <View style={[styles.flex, { padding: Utils.Style.UNIT * 2 }]}>
                    {
                        this.state.comments ?
                            this.state.comments
                        :
                            <Text style={styles.loadingText}>Chargement des commentaires...</Text>
                    }
                </View>
                <View style={[styles.flex, { padding: Utils.Style.UNIT * 2 }]}>
                    {
                        this.state.comments ?
                            this.state.comments
                        :
                            <Text style={styles.loadingText}>Chargement des commentaires...</Text>
                    }
                </View>
                <View>
                </View>
            </View>
        )
    }
}
