import './App.css';
import './fonts/Open Sans /OpenSans-Regular.ttf';
import styles from './App.module.css'
import Header from "./components/header/header";
import {useAppSelector} from "./hooks/redux";
import LoaderSpinner from "./components/loader-spinner/loader-spinner";
import ErrorMessage from "./components/error-message/error-message";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import API from "./utils/API";
import {appSlice} from "./store/reducers/appSlice";
import Article from './components/article/article';
import Goods from "./components/goods/goods";
import Benefits from "./components/benefits/benefits";
import HistoryList from "./components/history-list/history-list";
import Footer from "./components/footer/footer";
import Menu from './components/menu/munu';

function App() {
    const dispatch = useDispatch();

    const showError = useAppSelector(({error}) => !!error);
    const isLoading = useAppSelector(({isLoading}) => !!isLoading);

    // useEffect(() => {
    //     API
    //         .get('')
    //         .then(({data}) => dispatch(appSlice.actions.getSuccess(data)))
    //         .catch(({message}) => dispatch(appSlice.actions.failed(message)));
    // },[])

    return (
        <>
            <div 
                className={'container'}
            >
                {!(showError || isLoading) && (
                    <span className={styles.show}>
                        <Menu/>
                        <Header/>
                        <Article/>
                        <Goods/>
                        <Benefits/>
                        <HistoryList/>
                        <Footer/>
                    </span>
                )}
                {isLoading && <LoaderSpinner/>}
                {showError && <ErrorMessage/>}
            </div>
        </>
    );
}

export default App;
