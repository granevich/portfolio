/**
 * Created by granevich on 07.02.2017.
 */
$(document).ready(function () {


    function show(element) {
        console.log(element)
    }



    $(".main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease-in",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {

        },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {
             var indexStr = index.toString();
            $('.hvr-sweep-to-right').removeClass('act');
             $('#'+ indexStr).addClass('act');


                // $('button').attr('id', index).css('background', 'red')

        },   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

    $('button').on('click', function () {
       var link =  +$(this).attr('id');
        $(".main").moveTo(link);

    });
//chart
    $(function() {
        $('.chart').easyPieChart({
            barColor:'#28807A',
            trackColor:'white',
            scaleColor:'white',
            loneCap:'butt',
            lineWidth:10,
            animate:true
        });
    });
//chart
   var img =  document.querySelectorAll('img');
   var contentEdu = document.querySelector('.content_edu');
   contentEdu.addEventListener('click', function (e) {

      this.style.display = 'none';
      e.stopPropagation()
   });
   show(contentEdu);
   show(img);
        for(var i=0;i<img.length;i++){
            img[i].addEventListener('click', function () {
                contentEdu.style.display = 'block';
                var attr = this.getAttribute('id');
                $('.inner_content_edu').load(attr +".html")
            })
        }

//isotope

   var $grid =  $('.grid').isotope({
        itemSelector:'.card',
        layoutMode: 'fitRows'
    });
    $('.buttons_portfolio').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        show(filterValue);
        // use filterFn if matches value

        $grid.isotope({ filter: filterValue });
    });
 });
