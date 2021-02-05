import React, {Component} from 'react';
import {ErrorBoundary} from "@components";
import Intro from "@layouts/Pages/HomePage/Sections/Intro/Intro";
import Abouts from "@layouts/Pages/HomePage/Sections/Abouts/Abouts";
import Advantage from "@layouts/Pages/HomePage/Sections/Advantages/Advantage";
import LatestNews from "@layouts/Pages/HomePage/Sections/Latest/LatestNews";
import EndSection from "@layouts/Pages/HomePage/Sections/EndSection/EndSection";


export const HomePage = (props)=> {
    return (
        <ErrorBoundary>
            <Intro />
            <Abouts />
            <Advantage />
            <LatestNews />
            <EndSection />
        </ErrorBoundary>
    );
}
