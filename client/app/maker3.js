const handleDomo3 = (e) => {
    e.preventDefault();

    $("#domoMessage").animate({width:'hide'},350);

    if($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoPrice").val() == '') {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm3").attr("action"), $("#domoForm3").serialize(), function() {
        loadDomosFromServer3();
    });
    
    
    
    return false;
};

const DomoForm3 = (props3) => {
    return (
        <form id="domoForm3"
        onSubmit={handleDomo3}
        name="domoForm3"
        action="/maker3"
        method="POST"
        className="domoForm3"
        >
        <label htmlFor="name">Name: </label>
        <input id="domoName" type="text" name="name" placeholder="Domo Name"/>
        <label htmlFor="age">Age: </label>
        <input id="domoAge" type="text" name="age" placeholder="Domo Age"/>
        <label htmlFor="price">Price: </label>
        <input id="domoPrice" type="text" name="price" placeholder="Domo Price"/>
        <input type="hidden" name="_csrf" value={props3.csrf} />
        <input className="makeDomoSubmit3" type="submit" value="Make Domo" />
        </form>
    );
};

const DomoList3 = function(props3) {
    if(props3.domos.length === 0) {
        return (
            <div className="domoList3">
            <h3 className="emptyDomo"> DOMO3:  There are no domos yet</h3>
            </div>
        );
    }

    const domoNodes3 = props3.domos.map(function(domo) {
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
        <div className="domoList3">
        {domoNodes3}
        </div>
    );
};

const loadDomosFromServer3 = () => {
    sendAjax('GET', '/getDomos', null, (data) => {
        ReactDOM.render(
        <DomoList3 domos={data.domos} />, document.querySelector("#domos3")
        );
    });
};

const setup3 = function(csrf3) {

    if (document.querySelector("#makeDomo3") != null || document.querySelector("#domos3") != null) {
        ReactDOM.render(
        <DomoForm3 csrf={csrf3} />, document.querySelector("#makeDomo3")
        );

        ReactDOM.render(
        <DomoList3 domos={[]} />, document.querySelector("#domos3")
        );

        loadDomosFromServer3();
    }
};

const getToken3 = () => {
    sendAjax('GET', '/getToken', null, (result) => {
        setup3(result.csrfToken);
    });
};

$(document).ready(function() {
    getToken3();
});


