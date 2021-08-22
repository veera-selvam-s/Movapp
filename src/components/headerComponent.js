import React from 'react';




const HeaderComponent =(props)=>{
        return(
            <div className="header">
                <h1 id="tit">MOVAPP</h1>
                <form onSubmit={props.handleOnSubmit}>
                    <input 
                    className="search" type="search" 
                    placeholder="search movies..."
                    value={props.searchTerm}
                    onChange={props.onChangeHandler}
                    />
                </form>         
            </div>
        );
}

export default HeaderComponent;