const handleDomo2 = (e) => {
    e.preventDefault();

    $("#domoMessage").animate({width:'hide'},350);

    if($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoPrice").val() == '') {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm2").attr("action"), $("#domoForm2").serialize(), function() {
        loadDomosFromServer2();
    });
    
    
    
    return false;
};

const DomoForm2 = (props2) => {
    return (
        <form id="domoForm2"
        onSubmit={handleDomo2}
        name="domoForm2"
        action="/maker2"
        method="POST"
        className="domoForm2"
        >
        <label htmlFor="name">Name: </label>
        <input id="domoName" type="text" name="name" placeholder="Domo Name"/>
        <label htmlFor="age">Age: </label>
        <input id="domoAge" type="text" name="age" placeholder="Domo Age"/>
        <label htmlFor="price">Price: </label>
        <input id="domoPrice" type="text" name="price" placeholder="Domo Price"/>
        <input type="hidden" name="_csrf" value={props2.csrf} />
        <input className="makeDomoSubmit2" type="submit" value="Make Domo" />
        </form>
    );
};

const DomoList2 = function(props2) {
    if(props2.domos.length === 0) {
        return (
            <div className="domoList2">
            <h3 className="emptyDomo"> DOMO2:  There are no domos yet</h3>
            </div>
        );
    }

    const domoNodes2 = props2.domos.map(function(domo) {
        return (
            <div key={domo._id} className="domo">
                <img src="/assets/img/domoface.jpeg" alt="domo face" className="domoFace" />
                <div className="domoContainer">
                    <h3 className="domoName">Name: {domo.name} </h3>
                    <h3 className="domoAge">Age: {domo.age} </h3>
                    <h3 className="domoPrice">Prices: {domo.price} </h3>    
                </div>
            </div>
        );
    });

    return (
        <div className="domoList2">
        {domoNodes2}
        </div>
    );
};

const loadDomosFromServer2 = () => {
    sendAjax('GET', '/getDomos', null, (data) => {
        ReactDOM.render(
        <DomoList2 domos={data.domos} />, document.querySelector("#domos2")
        );
    });
};

const setup2 = function(csrf2) {

    if (document.querySelector("#makeDomo2") != null || document.querySelector("#domos2") != null) {
        ReactDOM.render(
        <DomoForm2 csrf={csrf2} />, document.querySelector("#makeDomo2")
        );

        ReactDOM.render(
        <DomoList2 domos={[]} />, document.querySelector("#domos2")
        );

        loadDomosFromServer2();
    }
};

const getToken2 = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup2(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken2();
});


