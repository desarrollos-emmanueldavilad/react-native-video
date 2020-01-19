import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './src/utils/api';
export default class App extends Component<props>{
    state={
        suggestionList : [],
    }
  async  componentDidMount(): void {
     const movies = await API.getSuggestion(10);
     console.log(movies);
   }

    render() {
        return (
            <Home>
                <Header/>
                <Text>Buscador</Text>
                <Text>Categorias</Text>
                <SuggestionList
                list={this.state.suggestionList}
                />
            </Home>
        );    }


};

