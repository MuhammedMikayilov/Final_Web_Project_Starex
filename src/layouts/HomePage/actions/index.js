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

export const CountriesList = {
    data: [
        {
            id: 1,
            country: "Türkiyə",
            isLiquid: true,
        },
        {
            id: 2,
            country: "ABŞ",
            isLiquid: false,
        },
        {
            id: 3,
            country: "Çin",
            isLiquid: false,
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
            minWeight: 0.50,
            maxWeight: 0.75,
            price: 4.50,
        },
        {
            minWeight: 0.75,
            maxWeight: 1.00,
            price: 5.50,
        },
        {
            minWeight: 2,
            maxWeight: 5,
            price: 5.0,
        },
        {
            minWeight: 5,
            maxWeight: 10,
            price: 4.50,
        },
        {
            minWeight: 10,
            price: 4.00,
        },
    ]
}

export const AboutApi = {
    title: "STAREX NECƏ İŞLƏYİR",
    description: "Türkiyə, Amerika, Çin və Almaniyadan sifariş edin, alış-veriş xərcləriniz 2 dəfə az olsun.",

    data: [
        {
            icon:<i className="fas fa-cube"/>,
            title:"Qeydiyyatdan keçin",
            description:"Türkiyə və Amerikadan məhsul sifariş vermək üçün ilk öncə saytımızda qeydiyyatdan keçin."
        },
        {
            icon: <i className="fas fa-file-signature"/>,
            title:"\"Həvalə et\" xidmətindən istifadə edin",
            description:"Türkiyənin alış-veriş saytlarından bəyəndiyiniz məhsulun linkini \"Həvalə et\" xidməti ilə bizə göndərin"
        },
        {
            icon: <i className="fas fa-map-marked-alt"/>,
            title:"Evinizə qədər çatdıraq",
            description:"Sifariş etdiyiniz məhsulu ofisimizdən təhvil alın və ya evinizə qədər çatdıraq."
        },
    ]
}
