var images = ["s-l500.jpg","1.webp", "2.webp" , "3.webp", "4.webp", "5.jpeg","6.jpg"];
var names = ["my favorite Books","wings of fire graphic novel book 1", "wings of fire graphic novel book 2", "wings of fire graphic novel book 3", "wings of fire graphic novel book 4", "wings of fire graphic novel book 5","wings of fire graphic novel book 6"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    
    var updatedImage = images[i] ;
    var updatedName = names [i] ;
    

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
