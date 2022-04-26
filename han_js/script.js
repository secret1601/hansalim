$(document).ready(function(){

    // 전체 메뉴 관련
    

    let all_menu = $('.all-menu');
    let all_list_cate_li = $('.all-list-cate > li');   
    let all_menu_detail_list = $('.all-menu-detail-list');
    let all_menu_timer;
    let all_menu_timer_delay = 100;

    $.each(all_list_cate_li, function(index, item){

        $(this).mouseenter(function(){            
            clearTimeout(all_menu_timer);
            all_menu.addClass('all-menu-active');
            all_menu_detail_list.hide();
            all_menu_detail_list.eq(index).show();
        });

        $(this).mouseleave(function(){
            clearTimeout(all_menu_timer);
            all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
        });

    });

    // 상세 메뉴 영역을 감싸주는 div
    let all_menu_detail = $('.all-menu-detail');

    // 상세 메뉴 영역 div 에 롤오버를 하면 사라지려는 타이머를 지운다.
    all_menu_detail.mouseenter(function(){
        clearTimeout(all_menu_timer);
    });

    // 상세 메뉴 영역 div 에서 롤 아웃을 하면 조금 기다렸다가 사라지는 타이머 생성
    all_menu_detail.mouseleave(function(){
        clearTimeout(all_menu_timer);

        // 타이머 생성방법 setTimeout(할일, 대기시간)
        all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
    });

    // 상세 메뉴 사라지기
    function allMenuHide(){
        clearTimeout(all_menu_timer);
        all_menu.removeClass('all-menu-active');
    }

    // 전체 메뉴 보기 
    let all = $('#all');
    let all_timer;
    let all_timer_delay = 100;

    all.mouseenter(function(){
        clearTimeout(all_timer);
        all_menu.css('visibility', 'visible');
    });

    all.mouseleave(function(){
        clearTimeout(all_timer);
        all_timer = setTimeout(hideMenu, all_timer_delay);
    });

    all_menu.mouseenter(function(){
        clearTimeout(all_timer);
    });
    
    all_menu.mouseleave(function(){
        clearTimeout(all_timer);
        all_timer = setTimeout(hideMenu, all_timer_delay);
    });

    function hideMenu(){
        all_menu.css('visibility', 'hidden');
    }
    // 전체메뉴의 높이는 웹브라우저의 높이를 기준으로 설정
    all_menu.css('height', 'calc(100vh - 200px)');


    // 모달창
    let modal = $('.modal');
    let modal_close = $('.modal-close');

    modal_close.click(function(){
        modal.fadeOut(500);
    });

    // 로그인 펼침목록
    let login_menu = $('#login-menu');
    let arrow_list_login = $('.arrow-list-login');

    login_menu.click(function(event){
        event.preventDefault();
        arrow_list_login.toggle();
    })

    // 참여 펼침 목록
    let arrow = $('#arrow');
    let arrow_list_event = $('.arrow-list-event');

    arrow.click(function(e){
        e.preventDefault();
        arrow_list_event.toggle();

        arrow.toggleClass('arrow-list-event-active');
        arrow.toggleClass('#arrow-list-event-active i');
        more.removeClass('arrow-list-more-active')
        more.html('더보기<i></i>');

        arrow_list_more.hide();
    })

    // 더보기 펼침 목록
    let more = $('#more');
    let arrow_list_more = $('.arrow-list-more');

    more.click(function(e){
        e.preventDefault();
        arrow_list_more.toggle();

        // 내용 변경( 더보기 -> 접기 )
        let temp = more.hasClass('arrow-list-more-active');
        if (temp != true) {
            more.html('접기<i></i>');
        } else {
            more.html('더보기<i></i>');
        }

        more.toggleClass('arrow-list-more-active');
        arrow.removeClass('arrow-list-event-active');
        
        arrow_list_event.hide();
    })

    // 펼침기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function(){
        link_list.stop().slideToggle(300);
    });

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function(){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    // 위로가기 사라짐 효과
    let header_main = $('.header-main');

    $(window).scroll(function(){
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if(sc >= 68) {
            header_main.addClass('header-main-active');
            $('.contents').css('padding-top', 53);
            $('.contents').animate({
                // paddingTop: 53,
            })
        } else {
            header_main.removeClass('header-main-active');
            $('.contents').css('padding-top', 0);
        }

    });

});

window.onload = function(){
    // 상단 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 3000,
            // 스와이퍼 후, 자동재생 비활성화 되지 않음
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev',
        },
        pagination: {
            el: '.sw-visual-pg',
            type: 'fraction',
        }
    });

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function(){
        let temp = $(this).hasClass('sw-visual-pause-active')
        if(temp != true) {
            // 적용이 안되었다. 그래서 적용
            $(this).addClass('sw-visual-pause-active')
            sw_visual.autoplay.stop();
        } else {
            // 적용이 되었다. 그래서 적용해제
            $(this).removeClass('sw-visual-pause-active')
            sw_visual.autoplay.start();
        }
    });

    // 알뜰상품 슬라이드
    new Swiper('.sw-sale',{
        slidesPerView: 3,
        spaceBetween: 15,
        // loop: true,
        slidesPerGroup:3,

        navigation: {
            nextEl:'.sw-sale-next',
            prevEl:'.sw-sale-prev',
        },
        pagination: {
            el:'.sw-sale-pg',
            type: 'fraction',
        }
    });

    // 조합원 슬라이드
    new Swiper('.sw-copartner',{
        slidesPerView: 3,
        slidesPerGroup: 3,
        // spaceBetween: 15,gm

        navigation: {
            nextEl: '.sw-copartner-next',
            prevEl: '.sw-copartner-prev',
        },

        pagination: {
            el: '.sw-copartner-pg',
            type: 'fraction',
        }
    })

    // 인기물품 슬라이드

    new Swiper('.popular-slide',{
        slidesPerView: 7,
        slidesPerGroup: 7,

        navigation: {
            nextEl: '.popular-slide-next',
            prevEl: '.popular-slide-prev',
        },
    });

    let popular_slide_prev = $('.popular-slide-prev');
    let popular_slide_next = $('.popular-slide-next');

    popular_slide_prev.click(function(event){
        event.preventDefault();
    });
    popular_slide_next.click(function(event){
        event.preventDefault();
    });

    // 카테고리별 데이터
    let data_arr = []

    // 타이틀 데이터
    let data_title = []

    // Popular의 출력을 위한 데이터
    // HTTP Request : 서버에 자료를 요청하는 것
    // HTTP Response : 서버에서 응답하는 것
    fetch('../data.json')
    .then(res => res.json())
    .then(result => {
        for(let i = 0; i< result.length; i++) {
            let data = result[i];
            data_title[i] = data.title;
            data_arr[i] = data.arr;
        }
        // 비동기로 데이터를 가져오기 때문에 정리가 끝나면 목록 출력
        p_change(data_arr[0]);
        $('.section-bt').text(`${data_title[0]} 더보기`);
    });
    


    let popular_data_1 = [ 
    {
        title: '1 백미/유(4kg)',
        price: '17,900',
        img: 'good.jpg',
        cate: '유기농',
        link: '#',
        buy: '#',
        id: 1,
        tag: '인기',
        type: 1
    },
    {
        title: '2 백미/유(4kg)',
        price: '17,900',
        img: 'good.jpg',
        cate: '유기농',
        link: '#',
        buy: '#',
        id: 2,
        tag: '알뜰',
        type: 2
    },
    {
        title: '3 백미/유(4kg)',
        price: '17,900',
        img: 'good.jpg',
        cate: '유기농',
        link: '#',
        buy: '#',
        id: 3,
        tag: '',
        type: 0
    },
    {
        title: '4 백미/유(4kg)',
        price: '17,900',
        img: 'good.jpg',
        cate: '유기농',
        link: '#',
        buy: '#',
        id: 4,
        tag: '인기',
        type: 1
    }
];
    let popular_data_2 = [
        {
            title: '2-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '2-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '2-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '2-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_3 = [
        {
            title: '3-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '3-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '3-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '3-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_4 = [
        {
            title: '4-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '4-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '4-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '4-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_5 = [
        {
            title: '5-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '5-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '5-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '5-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_6 = [
        {
            title: '6-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '6-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '6-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '6-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_7 = [
        {
            title: '7-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '7-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '7-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '7-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_8 = [
        {
            title: '8-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '8-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '8-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '8-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_9 = [
        {
            title: '9-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '9-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '9-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '9-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_10 = [
        {
            title: '10-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '10-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '10-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '10-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_11= [
        {
            title: '11-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '11-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '11-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '11-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_12 = [
        {
            title: '12-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '12-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '12-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '12-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_13 = [
        {
            title: '13-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '13-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '13-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '13-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];
    let popular_data_14 = [
        {
            title: '14-1 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 1,
            tag: '인기',
            type: 1
        },
        {
            title: '14-2 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 2,
            tag: '알뜰',
            type: 2
        },
        {
            title: '14-3 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '유기농',
            link: '#',
            buy: '#',
            id: 3,
            tag: '',
            type: 0
        },
        {
            title: '14-4 백미/유(4kg)',
            price: '17,900',
            img: 'good.jpg',
            cate: '',
            link: '#',
            buy: '#',
            id: 4,
            tag: '인기',
            type: 1
        }
    ];

    // Popular 버튼 클릭시 실행
    let p_tab = $('.popular-slide .swiper-slide a');

    // 내용이 나올 장소
    let p_bottom = $('.popular-bottom')

    // p_tab을 클릭할때 p_change 구현하기
    
    $.each(p_tab, function(index, item){
        $(this).click(function(e){
            e.preventDefault();
            p_change(data_arr[index]);
            
            p_tab.removeClass('popular-bt-focus');
            p_tab.eq(index).addClass('popular-bt-focus');

            let temp = data_title[index];
            $('.section-bt').text(`${temp} 더보기`);
        });
    });


    // 내용 갱신
    function p_change(_arr){
        // 최종 a태그 html을 저장하는 용도
        let temp = '';
        for(let i=0; i<_arr.length; i++){
            // 배열안에 있는 데이터를 1개씩 참조한다.
            let data = _arr[i];

            temp +=  
            `<a href="${data.link}" class="good-link">
                <span class="good-img">
                    <img src="./han_images/${data.img}" alt="제품">
                </span>

                <div class="good-info">`;


                // cate가 있으면
                if(data.cate != '') {
                    temp += `<span class="good-cate">
                    <em class="good-cate-txt">${data.cate}</em>
                    </span>`;
                }
                

                temp += `<span class="good-title">
                    ${data.title}
                </span>
                <span class="good-price">
                    ${data.price}
                </span>
                </div>`;

            // data.type에 따라서 모양이 달라진다.
            if(data.type == 0) {

            } else if (data.type == 1) {
                temp += `<span class="good-tag">${data.tag}</span>`;
            } else if (data.type == 2) {
                temp += `<span class="good-tag good-tag-red">${data.tag}</span>`;
            }

            temp += `<button class="good-cart"></button></a>`;

        }

        p_bottom.html(temp);
        p_bottom.find('a:first-child').css('margin-left', 0);
    }



    // 브랜드관 슬라이드
    new Swiper('.sw-brand-slide',{
        slidesPerView:3,
        spaceBetween: 20,

        pagination: {
            el: '.sw-brand-pg',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.sw-brand-next',
            prevEl: '.sw-brand-prev',
        },
    });

    // 배너 슬라이드
    new Swiper('.sw-banner',{
        slidesPerView:2,
        autoplay : {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,

        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        }
    });
    
    let banner_prev = $('.banner-prev')
    let banner_next = $('.banner-next')

    banner_prev.click(function(event){
        event.preventDefault();
    });

    banner_next.click(function(event){
        event.preventDefault();
    });

    // 이용후기 슬라이드
    new Swiper('.sw-review',{
        slidesPerView:3,
        slidesPerGroup:3,

        pagination: {
            el: '.sw-review-pg',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.sw-review-next',
            prevEl: '.sw-review-prev',
        },
    });

    // 문제사항 발생
    let all_menu_wrap = $('.all-menu-wrap');
    all_menu_wrap.niceScroll({
        cursoropacitymax : 0.3,
        cursorwidth: "7px",
        cursorborderradius: "10px",
    });
    
};