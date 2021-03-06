const handleDomo = e => {
    e.preventDefault();

    $("#domoMessage").animate({ width: 'hide' }, 350);

    if ($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoPrice").val() == '') {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm").attr("action"), $("#domoForm").serialize(), function () {
        loadDomosFromServer();
    });

    return false;
};

const DomoForm = props => {
    return React.createElement(
        "form",
        { id: "domoForm",
            onSubmit: handleDomo,
            name: "domoForm",
            action: "/maker",
            method: "POST",
            className: "domoForm"
        },
        React.createElement(
            "label",
            { htmlFor: "name" },
            "Name: "
        ),
        React.createElement("input", { id: "domoName", type: "text", name: "name", placeholder: "Domo Name" }),
        React.createElement(
            "label",
            { htmlFor: "age" },
            "Age: "
        ),
        React.createElement("input", { id: "domoAge", type: "text", name: "age", placeholder: "Domo Age" }),
        React.createElement(
            "label",
            { htmlFor: "price" },
            "Price: "
        ),
        React.createElement("input", { id: "domoPrice", type: "text", name: "price", placeholder: "Domo Price" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props.csrf }),
        React.createElement("input", { className: "makeDomoSubmit", type: "submit", value: "Make Domo" })
    );
};

const DomoList = function (props) {
    if (props.domos.length === 0) {
        return React.createElement(
            "div",
            { className: "domoList" },
            React.createElement(
                "h3",
                { className: "emptyDomo" },
                "No Domos"
            )
        );
    }

    const domoNodes = props.domos.map(function (domo) {
        return React.createElement(
            "div",
            { key: domo._id, className: "domo" },
            React.createElement("img", { src: "/assets/img/domoface.jpeg", alt: "domo face", className: "domoFace" }),
            React.createElement(
                "div",
                { className: "domoContainer" },
                React.createElement(
                    "h3",
                    { className: "domoName" },
                    "Name: ",
                    domo.name,
                    " "
                ),
                React.createElement(
                    "h3",
                    { className: "domoAge" },
                    "Age: ",
                    domo.age,
                    " "
                ),
                React.createElement(
                    "h3",
                    { className: "domoPrice" },
                    "Prices: ",
                    domo.price,
                    " "
                )
            )
        );
    });

    return React.createElement(
        "div",
        { className: "domoList" },
        domoNodes
    );
};

const loadDomosFromServer = () => {
    sendAjax('GET', '/getDomos', null, data => {
        ReactDOM.render(React.createElement(DomoList, { domos: data.domos }), document.querySelector("#domos"));
    });
};

const setup = function (csrf) {
    if (document.querySelector("#makeDomo") != null || document.querySelector("#domos") != null) {
        ReactDOM.render(React.createElement(DomoForm, { csrf: csrf }), document.querySelector("#makeDomo"));

        ReactDOM.render(React.createElement(DomoList, { domos: [] }), document.querySelector("#domos"));

        loadDomosFromServer();
    }
};

const getToken = () => {
    sendAjax('GET', '/getToken', null, result => {
        setup(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken();
});
const handleDomo2 = e => {
    e.preventDefault();

    $("#domoMessage").animate({ width: 'hide' }, 350);

    if ($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoPrice").val() == '') {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm2").attr("action"), $("#domoForm2").serialize(), function () {
        loadDomosFromServer2();
    });

    return false;
};

const DomoForm2 = props2 => {
    return React.createElement(
        "form",
        { id: "domoForm2",
            onSubmit: handleDomo2,
            name: "domoForm2",
            action: "/maker2",
            method: "POST",
            className: "domoForm2"
        },
        React.createElement(
            "label",
            { htmlFor: "name" },
            "Name: "
        ),
        React.createElement("input", { id: "domoName", type: "text", name: "name", placeholder: "Domo Name" }),
        React.createElement(
            "label",
            { htmlFor: "age" },
            "Age: "
        ),
        React.createElement("input", { id: "domoAge", type: "text", name: "age", placeholder: "Domo Age" }),
        React.createElement(
            "label",
            { htmlFor: "price" },
            "Price: "
        ),
        React.createElement("input", { id: "domoPrice", type: "text", name: "price", placeholder: "Domo Price" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props2.csrf }),
        React.createElement("input", { className: "makeDomoSubmit2", type: "submit", value: "Make Domo" })
    );
};

const DomoList2 = function (props2) {
    if (props2.domos.length === 0) {
        return React.createElement(
            "div",
            { className: "domoList2" },
            React.createElement(
                "h3",
                { className: "emptyDomo" },
                " DOMO2:  There are no domos yet"
            )
        );
    }

    const domoNodes2 = props2.domos.map(function (domo) {
        return React.createElement(
            "div",
            { key: domo._id, className: "domo" },
            React.createElement("img", { src: "/assets/img/domoface.jpeg", alt: "domo face", className: "domoFace" }),
            React.createElement(
                "div",
                { className: "domoContainer" },
                React.createElement(
                    "h3",
                    { className: "domoName" },
                    "Name: ",
                    domo.name,
                    " "
                ),
                React.createElement(
                    "h3",
                    { className: "domoAge" },
                    "Age: ",
                    domo.age,
                    " "
                ),
                React.createElement(
                    "h3",
                    { className: "domoPrice" },
                    "Prices: ",
                    domo.price,
                    " "
                )
            )
        );
    });

    return React.createElement(
        "div",
        { className: "domoList2" },
        domoNodes2
    );
};

const loadDomosFromServer2 = () => {
    sendAjax('GET', '/getDomos', null, data => {
        ReactDOM.render(React.createElement(DomoList2, { domos: data.domos }), document.querySelector("#domos2"));
    });
};

const setup2 = function (csrf2) {

    if (document.querySelector("#makeDomo2") != null || document.querySelector("#domos2") != null) {
        ReactDOM.render(React.createElement(DomoForm2, { csrf: csrf2 }), document.querySelector("#makeDomo2"));

        ReactDOM.render(React.createElement(DomoList2, { domos: [] }), document.querySelector("#domos2"));

        loadDomosFromServer2();
    }
};

const getToken2 = () => {
    sendAjax('GET', '/getToken', null, result => {
        setup2(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken2();
});
const handleDomo3 = e => {
    e.preventDefault();

    $("#domoMessage").animate({ width: 'hide' }, 350);

    if ($("#domoName").val() == '' || $("#domoAge").val() == '' || $("#domoPrice").val() == '') {
        handleError("RAWR! All fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm3").attr("action"), $("#domoForm3").serialize(), function () {
        loadDomosFromServer3();
    });

    return false;
};

const DomoForm3 = props3 => {
    return React.createElement(
        "form",
        { id: "domoForm3",
            onSubmit: handleDomo3,
            name: "domoForm3",
            action: "/maker3",
            method: "POST",
            className: "domoForm3"
        },
        React.createElement(
            "label",
            { htmlFor: "name" },
            "Name: "
        ),
        React.createElement("input", { id: "domoName", type: "text", name: "name", placeholder: "Domo Name" }),
        React.createElement(
            "label",
            { htmlFor: "age" },
            "Age: "
        ),
        React.createElement("input", { id: "domoAge", type: "text", name: "age", placeholder: "Domo Age" }),
        React.createElement(
            "label",
            { htmlFor: "price" },
            "Price: "
        ),
        React.createElement("input", { id: "domoPrice", type: "text", name: "price", placeholder: "Domo Price" }),
        React.createElement("input", { type: "hidden", name: "_csrf", value: props3.csrf }),
        React.createElement("input", { className: "makeDomoSubmit3", type: "submit", value: "Make Domo" })
    );
};

const DomoList3 = function (props3) {
    if (props3.domos.length === 0) {
        return React.createElement(
            "div",
            { className: "domoList3" },
            React.createElement(
                "h3",
                { className: "emptyDomo" },
                " DOMO3:  There are no domos yet"
            )
        );
    }

    const domoNodes3 = props3.domos.map(function (domo) {
        return React.createElement(
            "div",
            { key: domo._id, className: "domo" },
            React.createElement("img", { src: "/assets/img/domoface.jpeg", alt: "domo face", className: "domoFace" }),
            React.createElement(
                "div",
                { className: "domoContainer" },
                React.createElement(
                    "h3",
                    { className: "domoName" },
                    "Name: ",
                    domo.name,
                    " "
                ),
                React.createElement(
                    "h3",
                    { className: "domoAge" },
                    "Age: ",
                    domo.age,
                    " "
                ),
                React.createElement(
                    "h3",
                    { className: "domoPrice" },
                    "Prices: ",
                    domo.price,
                    " "
                )
            )
        );
    });

    return React.createElement(
        "div",
        { className: "domoList3" },
        domoNodes3
    );
};

const loadDomosFromServer3 = () => {
    sendAjax('GET', '/getDomos', null, data => {
        ReactDOM.render(React.createElement(DomoList3, { domos: data.domos }), document.querySelector("#domos3"));
    });
};

const setup3 = function (csrf3) {

    if (document.querySelector("#makeDomo3") != null || document.querySelector("#domos3") != null) {
        ReactDOM.render(React.createElement(DomoForm3, { csrf: csrf3 }), document.querySelector("#makeDomo3"));

        ReactDOM.render(React.createElement(DomoList3, { domos: [] }), document.querySelector("#domos3"));

        loadDomosFromServer3();
    }
};

const getToken3 = () => {
    sendAjax('GET', '/getToken', null, result => {
        setup3(result.csrfToken);
    });
};

$(document).ready(function () {
    getToken3();
});
const handleError = message => {
    $("#errorMessage").text(message);
    $("#domoMessage").animate({ width: 'toggle' }, 350);
};

const redirect = response => {
    $("#domoMessage").animate({ width: 'hide' }, 350);
    window.location = response.redirect;
};

const sendAjax = (type, action, data, success) => {
    $.ajax({
        cache: false,
        type: type,
        url: action,
        data: data,
        dataType: "json",
        success: success,
        error: function (xhr, status, error) {
            var messageObj = JSON.parse(xhr.responseText);
            handleError(messageObj.error);
        }
    });
};
