'use strict';

let objArr=[];
let keyword = [];
let inx = 0;
function photo( image_url, title, description , keyword , horns ) {
   
    this.image_url = image_url;
    this.title=title;
    this.description=description;
    this.keyword=keyword;
    this.horns=horns;
    this.id = inx;
    objArr.push(this);
}

let photoSection;
photo.prototype.render = function() {
    photoSection = $('#photo-template').clone();
    $('main').append(photoSection);
    photoSection.find('h2').text(this.title);
    photoSection.find('img').attr('src', this.image_url);
    photoSection.find('p').html(this.description+ ' '+ 'keyword '+this.keyword+ '' + ' no. of horns ' + ''+ this.horns);
    photoSection.removeAttr('id');
    photoSection.attr('id', this.id);
    inx++;

}

photo.prototype.addOption = function(){ 
    if (!keyword.includes(this.keyword)){

        keyword.push(this.keyword)
        let newOption = $('<option></option>');
        $('#select').append(newOption);
        newOption.text(this.keyword);
}}

function Select1 () {
    $('#select').on('click', function(){
        for (let i = 0; i<inx; i++){
            if (objArr[i].keyword == $('#select').val()) {
                $('#'+i).show();
            }else{
                if($('#select').val() == 'default'){
                    $('#'+i).show();
                }else{
                $('#'+i).hide();
            }}
        }
    })
}

function getPhotoData() {
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }

    $.ajax('jason/page-1.json', ajaxSettings).then(data=> {
        
        console.log(data);
       
        data.forEach(element=> {

            let Obj = new photo(element.image_url, element.title,element.description,element.keyword,element.horns);
            Obj.render();
            Obj.addOption();
        });
        
    })
}

$('document').ready(getPhotoData);
Select1();

function getPhotoData2() {
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }

    $.ajax('jason/page-2.json', ajaxSettings).then(data=> {
        
        console.log(data);
       
        data.forEach(element=> {

            let Obj = new photo(element.image_url, element.title,element.description,element.keyword,element.horns);
            Obj.render();
            Obj.addOption();
        });
        
    })
}
$('document').ready(getPhotoData2);
Select1();










