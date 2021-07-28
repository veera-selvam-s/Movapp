import React,{Component} from 'react';




class Header extends Component{
    render(){
        
        var searchTerm=" ";

        
        
        return(
            <div className="header">
                        <form onSubmit={handleOnSubmit}>
                        <h3 id="tit">MOVAPP</h3>
                            <input 
                            className="search" type="text" 
                            placeholder="search movies..."
                            value={searchTerm}
                            Onchange={onChangeHandler}
                            />
                        </form>
                
            </div>
        );
    }
}
export default Header;