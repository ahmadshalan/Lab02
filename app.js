'use strict';

function photo( image_url, title, description , keyword , horns ) {
   
    this.image_url = image_url;
    this.title=title;
    this.description=description;
    this.keyword=keyword;
    this.horns=horns;
}

photo.prototype.render = function() {
    let photoSection = $('#photo-template').clone();
    $('main').append(photoSection);
    photoSection.find('h2').text(this.title);
    photoSection.find('img').attr('src', this.image_url);
    photoSection.find('p').html(this.description+ ' '+ 'keyword '+this.keyword+ '' + ' no. of horns ' + ''+ this.horns);
    photoSection.removeAttr('id');
}

function getPhotoData() {

    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }
  
    $.ajax('page-1.json', ajaxSettings).then(data=> {
        
        console.log(data);
       
        data.forEach(element=> {

            
            let option = $('<option>').text(element.keyword);

            let Obj = new photo(element.image_url, element.title,element.description,element.keyword,element.horns);
            Obj.render();
        });
        
    })
}

$('document').ready(getPhotoData);


$(document).ready(function() {

    let selectOption= $('default');

    console.log(this.keyword);

    

    $('default').on('click', function() {
        
        $(this).siblings('ul').toggleClass('on');
        
    });
});






