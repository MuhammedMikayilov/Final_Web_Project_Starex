import React, {Component} from 'react';
import Intro from "@layouts/HomePage/Sections/Intro/Intro";
import Abouts from "@layouts/HomePage/Sections/Abouts/Abouts";
import {ErrorBoundary} from "@components";
import Advantage from "@layouts/HomePage/Sections/Advantages/Advantage";


export const HomePage = (props)=> {
    return (
        <ErrorBoundary>
            <Intro />
            <Abouts />
            <Advantage />
        </ErrorBoundary>
    );
}
