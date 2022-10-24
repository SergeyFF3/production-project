import React, {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {classNames} from "shared/lib/classNames/classNames";
import Modal from "shared/UI/Modal/Modal";

const App = () => {

    const {theme} = useTheme()

    const [ isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <button onClick={() => setIsOpen(true)}>open</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;