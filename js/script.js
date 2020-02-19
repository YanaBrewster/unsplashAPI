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
    var users = 'harleydavidson';
    displayData(endPoint,size,users);
  });


  function displayData(ep, si, us){
    console.log(ep, si, us);

    // DIFFERENT ENDPOINTS
    if (ep === 'users') {
      var url = `https://api.unsplash.com/users/${us}/?client_id=${myKey}`;
    } else {
      var url =  `https://api.unsplash.com/${ep}/?client_id=${myKey}`;
    }

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
        } else if (ep === 'users'){
          users(data, ep, si);
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
        } // collection ends

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
        }//photo ends

        function users(d, e, s) {
         console.log(d,e,s)
         document.getElementById('result').innerHTML = '';
         var p;
         var userPhoto;
         console.log(d.photos[0].urls.full);

            document.getElementById('result').innerHTML +=
           '<div class="row border border-success">';

           for(p = 0; p < d.photos.length; p++) {
               if (s === 'full') {
                 userPhoto = d.photos[p].urls.full;
               } else if (s === 'raw') {
                 userPhoto = d.photos[p].urls.raw;
               } else if (s === 'regular') {
                 userPhoto = d.photos[p].urls.regular;
               }else if (s === 'small') {
                 userPhoto = d.photos[p].urls.small;
               } else if (s === 'thumb') {
                 userPhoto = d.photos[p].urls.thumb;
               }
               document.getElementById('result').innerHTML +=

               '<img class="col-4 img-thumbnail" alt="Image" src="' + userPhoto + '">'

            }//for

          document.getElementById('result').innerHTML +=
          '<h4 class="text-white">' + d[p].user.username + '</h4>'+
          '<p class="text-white">' + d[p].user.updated_at + '</p>' +
          '</div>';

       } //users function

      }, //success ends

      error:function(){
        console.log('error');

      }  // error

      });//ajax

    } // function displayData ends here

  });//document.ready
