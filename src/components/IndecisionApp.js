import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined 
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length) ;
        const option =this.state.options[randomNumber]
        this.setState(() => ({ selectedOption : option }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption : undefined }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option  !== optionToRemove )
        }));
        
    };

    handleDeleteOptions = () => this.setState(() => ({ options: []}));

    handleAddOption = (option) => {
        if(!option) {
            return "Please add a valid option"
        } else if(this.state.options.indexOf(option) > -1){
            return "This item already exists"
        }
        
        this.setState((prevState) =>({
            options : prevState.options.concat(option)
        }))
        
    }


    render(){
        return (
            <div>
                <Header/>
                <div className="container ">
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <div className="widget">
                    <Options
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption}
                        handleDeleteOptions={this.handleDeleteOptions}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                </div>
                
                
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

export default IndecisionApp;