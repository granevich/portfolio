/**
 * Created by granevich on 06.05.2016.
 */

            $('.preloader').show();
            $('.card').css('filter','blur(5px)');
            $(document).ready(function () {
                        $('.preloader').hide();
                        $('.card').css('filter','blur(0)');



             //load CV
                $('button').on('click', function () {
                    var url = $(this).attr('id') + '.html';
                    var pre =  $('.preloader');
                    pre.show();
                    $.ajax({
                        url:url,
                        success:function (result) {
                            window.location = url;
                            $(document).html(result);
                            pre.hide();
                        }


                    })
                })


            });

