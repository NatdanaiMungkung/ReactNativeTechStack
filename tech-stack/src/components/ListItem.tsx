import React, { Component } from 'react'
import {CardSection} from './common'
import {Text,View,TouchableWithoutFeedback,LayoutAnimation,UIManager} from 'react-native'
import * as actions from '../actions'
import {connect} from 'react-redux'

class ListItem extends Component {
    UNSAFE_componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true); //For Android
        LayoutAnimation.spring();
    }
    renderDesc() {
        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <CardSection style={{flex:1}}>
                    <Text>{library.description}</Text>
                </CardSection>
            )
        }
    }
    render() {
        const {titleStyles} = styles;
        const {id, title} = this.props.library;
        
        return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={titleStyles}>{title}</Text>
                </CardSection>
                {this.renderDesc()} 
            </View>
        </TouchableWithoutFeedback>)
    }
}

const styles = {
    titleStyles: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

const mapStateToProps = (state,ownProps) => {
    return {expanded: ownProps.library.id === state.selectedLibraryId}
}

export default connect(mapStateToProps,actions)(ListItem)