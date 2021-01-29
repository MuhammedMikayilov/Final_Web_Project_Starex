import React, {Component} from 'react';
import Intro from "@layouts/HomePage/Sections/Intro/Intro";
import Abouts from "@layouts/HomePage/Sections/Abouts/Abouts";
import {ErrorBoundary} from "@components";


export const HomePage = (props)=> {
    return (
        <ErrorBoundary>
            <Intro />
            <Abouts />
        </ErrorBoundary>
    );
}
