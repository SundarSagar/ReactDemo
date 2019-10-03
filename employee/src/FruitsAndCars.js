import React from 'react';

class FruitsAndCars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : '',
            type : 'Car',
            typeDisplayed: 'Car',
            itemList:[
                {
                    name: 'Apple',
                    type: 'Fruit'
                },
                {
                    name: 'Ferrari',
                    type: 'Car'
                },
                {
                    name: 'Grapes',
                    type: 'Fruit'
                }
            ]
        }
        this.setName  = this.setName.bind(this);
        this.setType = this.setType.bind(this);
        this.setTypeDisplayed = this.setTypeDisplayed.bind(this);
        this.add     = this.add.bind(this);
    }

    setName(event){
        let tempVal  = event.target.value;
        this.setState({
            name : tempVal
        });
    }

    setType(event){
        let tempVal = event.target.value;
        this.setState({
            type : tempVal
        });
    }

    setTypeDisplayed(event){
        let tempVal = event.target.value;
        this.setState({
            typeDisplayed : tempVal
        });
    }
    add(){
        let tempName =this.state.name;
        let tempType = this.state.type;
        let item = {
            name: tempName,
            type: tempType
        };
        
        let tempArray = this.state.itemList;
        tempArray.push(item);
        this.setState({
           
            itemList : tempArray
        })

    }
    render(){
        return(
            <div>
                <label>Enter Item :</label>
                <input type ="text" name ="name" id ="name" onChange={this.setName}></input>
                <label>Select type:</label>
                <select onChange={this.setType}>
                    <option value="Car">Car</option>
                    <option value="Fruit">Fruit</option>  
                </select>
                <br></br>
                <button onClick={this.add}>Store Details</button><br></br>
                
                {/*{JSON.stringify(this.state.itemList)}*/}
                <h1>Select which List to be Displayed</h1>
                <select onChange={this.setTypeDisplayed}>
                    <option value="Car">Car</option>
                    <option value="Fruit">Fruit</option>  
                </select>
                <h1>{this.state.typeDisplayed}</h1>
                {
                    this.state.itemList.filter((item)=>item.type==this.state.typeDisplayed).map((item)=>{
                        return(
                            <li>{item.name}</li>
                        )
                    })
                }
                {/*<h1>Cars</h1>
                {
                    this.state.itemList.filter((item)=>item.type=="Car").map((item)=>{
                        return(
                            <li>{item.name}</li>
                        )
                    })
                }*/}
            </div>
        )
       
    }
}
export default FruitsAndCars; 