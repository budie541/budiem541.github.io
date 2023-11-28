function chngimg() {
        var img = document.getElementById('img1').src;
        if (img.indexOf('IMG_5077.png')!=-1) {
            document.getElementById('img1').src  = 'imgs/IMG_5078.png';
        }
         else {
           document.getElementById('img1').src = 'imgs/IMG_5077.png';
       }
    }

