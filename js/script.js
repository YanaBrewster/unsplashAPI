// console.log('json & ajax'); //testing script.js


//to test jquery
$(document).ready(function(){

  var myKey = JSON.parse(apiKey);
  console.log(myKey[0]);
  myKey = myKey[0].key;

  var endPoint;
  var size;


  //reading users choice
  document.getElementById('submit').addEventListener('click', function(){
    endPoint = document.getElementById('endpoints').value;
    size = document.getElementById('sizes').value;
    console.log(endPoint,size);
    displayData(endPoint,size);
  });


  function displayData(ep, si){
    console.log(ep, si);
    //ajax method
    $.ajax({
      url: `https://api.unsplash.com/${ep}/?client_id=${myKey}`,
      type:'GET',
      data:'json',
      success: function(data){
        console.log(data);
        if (ep === 'collections'){
          collections(data,ep, si);
        } else if (ep === 'photos'){
          photos(data, ep, si);
        } else if (ep === 'users/harleydavidson'){
          users(data, ep, si);
          // ep ='users/harleydavidson';

          // var users = 'users/harleydavidson'
          // $( ep ).prepend( $(harley) );
        }

        function collections(d, e,s){
          var k;
          var userSize;

          document.getElementById('result').innerHTML = '';
          for(k = 0; k < d.length; k++ ){
            if (s === 'full') {
              userSize = d[k].cover_photo.urls.full;
            } else if (s === 'raw') {
              userSize = d[k].cover_photo.urls.raw;
            } else if (s === 'regular') {
              userSize = d[k].cover_photo.urls.regular;
            } else if (s === 'small') {
              userSize = d[k].cover_photo.urls.small;
              console.log(data);
            } else if (s === 'thumb') {
              userSize = d[k].cover_photo.urls.thumb;
            }

            document.getElementById('result').innerHTML +=
            '<div class="col-3">' +
            '<img class="img-fluid" alt="Image" src="' + userSize + '">' +
            '<h4 class="text-white">' + data[k].title + '</h4>'+
            '<p class="text-white">' + data[k].user.username + '</p>' +
            '</div>';
          } // collection loop ends
        }; // collection ends

        function photos(d, e,s){
          var j;
          var photoSize;
          document.getElementById('result').innerHTML = '';
          for(j = 0; j < d.length; j++ ){
            if (s === 'full') {
              photoSize = d[j].urls.full;
            } else if (s === 'raw') {
              photoSize = d[j].urls.raw;
            } else if (s === 'regular') {
              photoSize = d[j].urls.regular;
            }else if (s === 'small') {
              photoSize = d[j].urls.small;
            } else if (s === 'thumb') {
              photoSize = d[j].urls.thumb;
            }

            document.getElementById('result').innerHTML +=
            '<div class="col">' +
            '<img class="img-fluid" alt="Image" src="' + photoSize + '">' +
            '<h4 class="text-white">' + data[j].user.username + '</h4>'+
            '<p class="text-white">' + data[j].user.updated_at + '</p>' +
            '</div>';
          } //photo loop ends
        };//photo ends

        function users(d, e, s){
          var u;
          var usersPhoto;

          document.getElementById('result').innerHTML = '';
          for(u = 0; u < d.length; u++ ){
            if (s === 'full') {
            usersPhoto = d[u].urls.full;
            } else if (s === 'raw') {
            usersPhoto = d[u].urls.raw;
            } else if (s === 'regular') {
            usersPhoto = d[u].urls.regular;
            }else if (s === 'small') {
            usersPhoto = d[u].urls.small;
            } else if (s === 'thumb') {
            usersPhoto = d[u].urls.thumb;
            }

            document.getElementById('result').innerHTML +=
            '<div class="col">' +
            '<img class="img-thumbnail" alt="Image" src="' + usersPhoto + '">' +
            '<h4 class="text-white">' + data[u].user.username + '</h4>'+
            '<p class="text-white">' + data[u].user.portfolio_url + '</p>' +
            '</div>';
          }// user loop
        }; //user ends

} //success ends

  // error:function(){
  //   console.log('error');
  //error


});//ajax

}; // function displayData ends here

});//document.ready
