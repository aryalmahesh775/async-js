const getTodos = (callback) => {
const request = new XMLHttpRequest();
request.addEventListener('readystatechange' , () =>{
    if(request.readyState === 4 && request.status === 200) {
        const data =JSON.parse(request.responseText);
        callback(undefined,data);
        
    } else if(request.readyState === 4) {
        callback('coud not fetch the data',undefined);
    }
});

request.open( 'GET', 'file:///C:/Users/Mahesh/Desktop/js/async%20js/todos.json' );
request.send();

};

getTodos((err,data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

