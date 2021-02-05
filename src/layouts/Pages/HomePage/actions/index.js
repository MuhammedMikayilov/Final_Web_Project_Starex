import React from "react";

export const IntroDatas = {
    data: [
        {
            id: 1,
            title: '<span>TÜRKİYƏDƏN</span>  və <span>AMERİKADAN</span> ALIŞ-VERİŞ ETMƏK\n' +
                '<h2>İNDİ DAHA <span>ASAN OLDU</span></h2>'
        }
    ]
}

export const PriceForWeight = {
    data: [
        {
            id:1,
            minWeight: 0.0,
            maxWeight: 0.10,
            price: 1.50,
        },
        {
            id:2,
            minWeight: 0.10,
            maxWeight: 0.25,
            price: 2.50,
        },
        {
            id:3,
            minWeight: 0.25,
            maxWeight: 0.50,
            price: 3.50,
        },
        {
            id:4,
            minWeight: 0.50,
            maxWeight: 0.75,
            price: 4.50,
        },
        {
            id:5,
            minWeight: 0.75,
            maxWeight: 1.00,
            price: 5.50,
        },
        {
            id:6,
            minWeight: 2,
            maxWeight: 5,
            price: 5.0,
        },
        {
            id:7,
            minWeight: 5,
            maxWeight: 10,
            price: 4.50,
        },
        {
            id:8,
            minWeight: 10,
            price: 4.00,
        },
    ]
}

export const AboutApi = {
    id:1,
    title: "STAREX NECƏ İŞLƏYİR",
    description: "Türkiyə, Amerika, Çin və Almaniyadan sifariş edin, alış-veriş xərcləriniz 2 dəfə az olsun.",

    data: [
        {
            id:1,
            icon:<i className="fas fa-cube"/>,
            title:"Qeydiyyatdan keçin",
            description:"Türkiyə və Amerikadan məhsul sifariş vermək üçün ilk öncə saytımızda qeydiyyatdan keçin."
        },
        {
            id:2,
            icon: <i className="fas fa-file-signature"/>,
            title:"\"Həvalə et\" xidmətindən istifadə edin",
            description:"Türkiyənin alış-veriş saytlarından bəyəndiyiniz məhsulun linkini \"Həvalə et\" xidməti ilə bizə göndərin"
        },
        {
            id:3,
            icon: <i className="fas fa-map-marked-alt"/>,
            title:"Evinizə qədər çatdıraq",
            description:"Sifariş etdiyiniz məhsulu ofisimizdən təhvil alın və ya evinizə qədər çatdıraq."
        },
    ]
}

export const AdvantagesApi = {
    id:1,
    image: "advantage.jpg",
    title: "Əsas üstünlüklərimiz",
    data: [
        {
            id:1,
            icon: <i className="fas fa-truck-loading"/>,
            title:"Sürətli və təhlükəsiz çatdırılma",
            description: "Bağlamanız bizim xaricdəki" +
                " əməkdaşlarımız tərəfindən təhvil" +
                " alındıqdan sonra göndəriş gününə qədər çeşidlənir," +
                " anbarlaşdırılır və qısa müddət ərzində Bakı ofisimizə çatdırılır." +
                " Bu müddət ərzində bütün proseslər barədə email, tətbiq və sms vasitəsilə sizə məlumat göndərilir."
        },
        {
            id:2,
            icon: <i className="fas fa-credit-card"/>,
            title:"Pula Qənaət",
            description: "Bəyəndiyiniz məhsulları Türkiyə, Amerika, Çin və Almaniyadan sərfəli qiymətlərlə ölkəmizə gətiririk."
        },
        {
            id:3,
            icon: <i className="fas fa-search"/>,
            title:"Sübüt olunmuş təcrübə",
            description: "Beynəlxalq daşımalar sahəsində 2010-cu ildən etibarən fəaliyyət göstəririk." +
                " Bu istiqamətdə əldə etdiyimiz təcrübəni 2018-ci ildən etibarən kuryer xidmətinin də" +
                " təşkilində həyata keçirməyə başlamışıq." +
                " İndiyədək Türkiyədən və Amerikadan yüz minlərlə bağlamanı müştərilərimizə çatdırmışıq."
        },
        {
            id:4,
            icon: <i className="fas fa-truck"/>,
            title:"Sübüt olunmuş təcrübə",
            description: "İstər yeni texnologiyaların tətbiqi," +
                " istərsə də işçi heyətinə mütəmadi treninqlərin verilməsi istiqamətində şirkətimiz davamlı yatırım edir."
        },

    ]
}

export const LatestApi = {
    id: 1,
    title: "Ən Son Yeniliklərimiz",

    data:[
        {
            image: "e-manat.jpg",
            title: "E-manatla yalnız USD balans artımı mümkündür!",
            time: "26.01.2021"
        },
        {
            image: "trendyol.jpg",
            title: "Bizimlə Trendyolda Türkiyə daxili karqo ödənişsiz!",
            time: "22.01.2021"
        },
        {
            image: "germany-card.jpg",
            title: "Almaniya anbarımız xidmətinizdədir!",
            time: "21.01.2021"
        },
        {
            image: "germany-card.jpg",
            title: "Almaniya anbarımız xidmətinizdədir!",
            time: "21.01.2021"
        },
        {
            image: "trendyol.jpg",
            title: "Bizimlə Trendyolda Türkiyə daxili karqo ödənişsiz!",
            time: "22.01.2021"
        },
        {
            image: "e-manat.jpg",
            title: "E-manatla yalnız USD balans artımı mümkündür!",
            time: "26.01.2021"
        },
    ]
}

export const EndSectionApi = {
    id: 1,
    title: "MÜŞTƏRİ XİDMƏTLƏRİ",
    backgroundImg: "endback.webp",
    data:
        {
            id: 1,
            icon_phone: <i className="fas fa-phone-alt"/>,
            phone: "+994 12 3100825",
            facebook: "https://www.facebook.com/starex.az",
            instagram:"https://www.instagram.com/starex.az/",
            address:"Fikrət Əmirov küç. 6",
            time:"B.e.-Ş. 10:00-19:00"
        }

}
