import React, { Component } from 'react' 
import {connect} from 'react-redux'
import {ListView} from 'deprecated-react-native-listview'
import {FlatList} from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {
    // componentDidMount() {
    //     const ds =  new ListView.DataSource({
    //         rowHasChanged: (r1,r2) => r1 !== r2
    //     })

    //     this.dataSource = ds.cloneWithRows(this.props.libraries);
    // }
    renderRow({item: library}) {
        return <ListItem library={library}/>
    }
    render() {
        return (
            <FlatList data={this.props.libraries} renderItem={this.renderRow} keyExtractor={item => item.id.toString()}/>
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);